import { arrowLeftSVG } from "./icons/arrow-left";
import { arrowRightSVG } from "./icons/arrow-right";
import { playSVG } from "./icons/play";
import { pauseSVG } from "./icons/pause";

import type { ReadonlyTeleBox } from "@netless/window-manager";
import LazyLoad from "vanilla-lazyload";
import { SideEffectManager } from "side-effect-manager";

export interface DocsViewerPage {
  src: string;
  height: number;
  width: number;
  thumbnail?: string;
}

export interface DocsViewerConfig {
  readonly: boolean;
  box: ReadonlyTeleBox;
  pages: DocsViewerPage[];
  onNewPageIndex: (index: number) => void;
  onPlay?: () => void;
}

export class DocsViewer {
  public constructor({ readonly, box, pages, onNewPageIndex, onPlay }: DocsViewerConfig) {
    if (pages.length <= 0) {
      throw new Error("[DocsViewer] Empty pages.");
    }

    this.readonly = readonly;
    this.box = box;
    this.pages = pages;
    this.onNewPageIndex = onNewPageIndex;
    this.onPlay = onPlay;
    this.onPageIndexChanged = () => void 0;

    this.render();
  }

  protected readonly: boolean;
  protected pages: DocsViewerPage[];
  protected box: ReadonlyTeleBox;
  protected onNewPageIndex: (index: number) => void;
  protected onPlay?: () => void;

  public $content!: HTMLElement;
  public $preview!: HTMLElement;
  public $previewMask!: HTMLElement;
  public $footer!: HTMLElement;
  public $pageNumberInput!: HTMLElement;
  private $btnPageNext!: HTMLElement;
  private $btnPageBack!: HTMLElement;

  public pageIndex = 0;
  public onPageIndexChanged: (index: number) => void;

  public mount(): void {
    this.box.mountContent(this.$content);
    this.box.mountFooter(this.$footer);

    this.sideEffect.add(() => {
      const previewLazyLoad = new LazyLoad({
        container: this.$preview,
        elements_selector: `.${this.wrapClassName("preview-page>img")}`,
      });
      return () => previewLazyLoad.destroy();
    }, "preview-lazyload");

    // this.$footer.classList.toggle(this.wrapClassName("hide"), this.box.maximized);
    this.box.events.on("maximized", max => {
      this.$footer.classList.toggle(this.wrapClassName("hide"), max);
      this.togglePreview(max);
    });
  }

  public unmount(): void {
    this.$content.remove();
    this.$footer.remove();
  }

  public setReadonly(readonly: boolean): void {
    if (this.readonly !== readonly) {
      this.readonly = readonly;

      this.$content.classList.toggle(this.wrapClassName("readonly"), readonly);

      this.$footer.classList.toggle(this.wrapClassName("readonly"), readonly);

      // this.$pageNumberInput.disabled = readonly;
    }
  }

  public destroy(): void {
    this.sideEffect.flushAll();
    this.unmount();
  }

  public setPageIndex(pageIndex: number): void {
    if (!Number.isNaN(pageIndex)) {
      const previews = this.$preview?.querySelectorAll<HTMLElement>(
        "." + this.wrapClassName("preview-page")
      );

      previews?.forEach((node, i) => {
        node
          .querySelector("img")
          ?.classList.toggle(this.wrapClassName("active"), Number(pageIndex) == i);
      });
      this.$preview.scrollTo({
        top:
          Array.prototype.slice
            .call(previews)
            .find(node =>
              node.querySelector("img").className.includes(this.wrapClassName("active"))
            ).offsetTop - 16,
      });
      this.pageIndex = pageIndex;
      this.$pageNumberInput.textContent = String(pageIndex + 1);
      this.onPageIndexChanged(pageIndex);
      this.$btnPageBack.classList.toggle(this.wrapClassName("footer-btn-disable"), pageIndex == 0);
      this.$btnPageNext.classList.toggle(
        this.wrapClassName("footer-btn-disable"),
        pageIndex == this.pages.length - 1
      );
    }
  }

  public setSmallBox(isSmallBox: boolean): void {
    if (this.isSmallBox !== isSmallBox) {
      this.isSmallBox = isSmallBox;
      this.$footer.classList.toggle(this.wrapClassName("float-footer"), isSmallBox);
    }
  }

  public render(): HTMLElement {
    this.renderContent();
    this.renderFooter();
    return this.$content;
  }

  protected renderContent(): HTMLElement {
    if (!this.$content) {
      const $content = document.createElement("div");
      $content.className = this.wrapClassName("content");
      this.$content = $content;

      if (this.readonly) {
        $content.classList.add(this.wrapClassName("readonly"));
      }

      $content.appendChild(this.renderPreviewMask());
      $content.appendChild(this.renderPreview());
    }
    return this.$content;
  }

  protected renderPreview(): HTMLElement {
    if (!this.$preview) {
      const $preview = document.createElement("div");
      $preview.className = this.wrapClassName("preview") + " tele-fancy-scrollbar";
      this.$preview = $preview;

      const title = document.createElement("div");
      title.className = this.wrapClassName("preview-head");
      const h3 = document.createElement("h3");
      h3.textContent = this.box.title;
      title.appendChild(h3);
      this.$preview.appendChild(title);

      const pageClassName = this.wrapClassName("preview-page");
      const pageNameClassName = this.wrapClassName("preview-page-name");
      this.pages.forEach((page, i) => {
        const previewSRC = page.thumbnail ?? (page.src.startsWith("ppt") ? void 0 : page.src);
        if (!previewSRC) {
          return;
        }

        const pageIndex = String(i);

        const $page = document.createElement("a");
        $page.className = pageClassName + " " + this.wrapClassName(`preview-page-${i}`);
        $page.setAttribute("href", "#");
        $page.dataset.pageIndex = pageIndex;

        const $name = document.createElement("span");
        $name.className = pageNameClassName;
        $name.textContent = String(i + 1);
        $name.dataset.pageIndex = pageIndex;

        const $img = document.createElement("img");
        $img.width = page.width;
        $img.height = page.height;
        $img.dataset.src = previewSRC;
        $img.dataset.pageIndex = pageIndex;

        $page.appendChild($name);
        $page.appendChild($img);
        $preview.appendChild($page);
        $img.classList.toggle(this.wrapClassName("active"), this.pageIndex == i);
      });

      this.sideEffect.addEventListener($preview, "click", ev => {
        if (this.readonly) {
          return;
        }
        const pageIndex = (ev.target as HTMLElement).dataset?.pageIndex;
        if (pageIndex) {
          ev.preventDefault();
          ev.stopPropagation();
          ev.stopImmediatePropagation();
          this.onNewPageIndex(Number(pageIndex));
        }
      });
    }

    return this.$preview;
  }

  protected renderPreviewMask(): HTMLElement {
    if (!this.$previewMask) {
      this.$previewMask = document.createElement("div");
      this.$previewMask.className = this.wrapClassName("preview-mask");
      this.sideEffect.addEventListener(this.$previewMask, "click", ev => {
        if (this.readonly) {
          return;
        }
        if (ev.target === this.$previewMask) {
          this.togglePreview(false);
        }
      });
    }
    return this.$previewMask;
  }

  protected renderFooter(): HTMLElement {
    if (!this.$footer) {
      const $footer = document.createElement("div");
      $footer.className = this.wrapClassName("footer");
      this.$footer = $footer;

      if (this.readonly) {
        $footer.classList.add(this.wrapClassName("readonly"));
      }

      if (this.isSmallBox) {
        $footer.classList.add(this.wrapClassName("float-footer"));
      }

      if (this.pages.some(page => page.thumbnail || !page.src.startsWith("ppt"))) {
        // const $btnSidebar = this.renderFooterBtn("btn-sidebar", sidebarSVG(this.namespace));
        // this.sideEffect.addEventListener($btnSidebar, "click", () => {
        //   if (this.readonly) {
        //     return;
        //   }
        //   this.togglePreview();
        // });
        // this.$footer.appendChild($btnSidebar);
      }

      const $pageJumps = document.createElement("div");
      $pageJumps.className = this.wrapClassName("page-jumps");

      const $btnPageBack = this.renderFooterBtn("btn-page-back", arrowLeftSVG(this.namespace));
      this.sideEffect.addEventListener($btnPageBack, "click", () => {
        if (this.readonly) {
          return;
        }
        this.onNewPageIndex(this.pageIndex - 1);
      });
      $pageJumps.appendChild($btnPageBack);
      this.$btnPageBack = $btnPageBack;

      if (this.onPlay) {
        const $btnPlay = this.renderFooterBtn(
          "btn-page-play",
          playSVG(this.namespace),
          pauseSVG(this.namespace)
        );
        const returnPlay = (): void => {
          this.sideEffect.setTimeout(
            () => {
              $btnPlay.classList.toggle(this.wrapClassName("footer-btn-playing"), false);
            },
            500,
            "returnPlay"
          );
        };
        this.sideEffect.addEventListener($btnPlay, "click", () => {
          if (this.readonly) {
            return;
          }
          $btnPlay.classList.toggle(this.wrapClassName("footer-btn-playing"), true);
          this.onPlay?.();
          returnPlay();
        });

        this.$footer.appendChild($btnPlay);
      }
      const $pageNumber = document.createElement("div");
      $pageNumber.className = this.wrapClassName("page-number");

      const $pageNumberInput = document.createElement("span");
      $pageNumberInput.className = this.wrapClassName("page-number-input");
      $pageNumberInput.textContent = String(this.pageIndex + 1);
      // if (this.readonly) {
      //   $pageNumberInput.disabled = true;
      // }
      this.$pageNumberInput = $pageNumberInput;
      // this.sideEffect.addEventListener($pageNumberInput, "focus", () => {
      //   $pageNumberInput.select();
      // });
      // this.sideEffect.addEventListener($pageNumberInput, "change", () => {
      //   if (this.readonly) {
      //     return;
      //   }
      //   if ($pageNumberInput.value) {
      //     this.onNewPageIndex(Number($pageNumberInput.value) - 1);
      //   }
      // });

      const $totalPage = document.createElement("span");
      $totalPage.textContent = " / " + this.pages.length;

      $pageNumber.appendChild($pageNumberInput);
      $pageNumber.appendChild($totalPage);

      $pageJumps.appendChild($pageNumber);

      const $btnPageNext = this.renderFooterBtn("btn-page-next", arrowRightSVG(this.namespace));
      this.sideEffect.addEventListener($btnPageNext, "click", () => {
        if (this.readonly) {
          return;
        }
        this.onNewPageIndex(this.pageIndex + 1);
      });
      $pageJumps.appendChild($btnPageNext);

      this.$btnPageNext = $btnPageNext;
      this.$footer.appendChild($pageJumps);
    }
    return this.$footer;
  }

  protected renderFooterBtn(
    className: string,
    $icon: SVGElement,
    $iconActive?: SVGElement
  ): HTMLButtonElement {
    const $btn = document.createElement("button");
    $btn.className = this.wrapClassName("footer-btn") + " " + this.wrapClassName(className);

    $btn.appendChild($icon);

    if ($iconActive) {
      $btn.appendChild($iconActive);
    }

    return $btn;
  }

  public togglePreview(isShowPreview?: boolean): void {
    this.isShowPreview = isShowPreview ?? !this.isShowPreview;

    this.$content.classList.toggle(this.wrapClassName("preview-active"), this.isShowPreview);
    if (this.isShowPreview) {
      const $previewPage = this.$preview.querySelector<HTMLElement>(
        "." + this.wrapClassName(`preview-page-${this.pageIndex}`)
      );
      if ($previewPage) {
        this.$preview.scrollTo({
          top: $previewPage.offsetTop - 16,
        });
      }
    }
  }

  protected wrapClassName(className: string): string {
    return `${this.namespace}-${className}`;
  }

  protected namespace = "netless-app-docs-viewer";

  protected isShowPreview = false;

  protected isSmallBox = false;

  protected sideEffect = new SideEffectManager();
}
