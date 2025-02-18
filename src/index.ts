import styles from "./style.scss?inline";

import type { NetlessApp, AppContext, ReadonlyTeleBox } from "@netless/window-manager";
import type { View, Size } from "white-web-sdk";
import { StaticDocsViewer } from "./StaticDocsViewer";
import type { DocsViewerPage } from "./DocsViewer";
import { DynamicDocsViewer } from "./DynamicDocsViewer";
import { kind } from "./constants";

export type { DocsViewerPage } from "./DocsViewer";

export interface NetlessAppStaticDocsViewerAttributes {
  /** ScrollTop base on the real page size */
  pageScrollTop?: number;
}

export interface AppResult {
  viewer: () => StaticDocsViewer | DynamicDocsViewer | null;
  position: () => [page: number, length: number] | undefined;
  nextStep?: () => void;
  prevStep?: () => void;
  nextPage?: () => void;
  prevPage?: () => void;
  jumpToPage?: (page: number) => void;
  togglePreview?: (visible?: boolean) => void;
}

export interface NetlessAppDynamicDocsViewerAttributes {}

export interface AppOptions {}

export type MagixEvents = {
  [key: string]: string;
};

const NetlessAppDocsViewer: NetlessApp<
  NetlessAppStaticDocsViewerAttributes | NetlessAppDynamicDocsViewerAttributes,
  MagixEvents,
  AppOptions,
  AppResult
> = {
  kind,
  setup(context) {
    const box = context.getBox();

    const scenes = context.getScenes();
    if (!scenes) {
      throw new Error("[Docs Viewer]: scenes not found.");
    }

    const whiteboardView = context.getView();
    console.log(context.storage.state);
    if (!whiteboardView) {
      throw new Error("[Docs Viewer]: no whiteboard view.");
    }

    const pages = scenes
      .map(({ ppt }): DocsViewerPage | null =>
        ppt
          ? {
              width: ppt.width,
              height: ppt.height,
              src: ppt.src,
              thumbnail: ppt.previewURL,
            }
          : null
      )
      .filter((page): page is DocsViewerPage => Boolean(page));

    if (pages.length <= 0) {
      throw new Error("[Docs Viewer]: empty scenes.");
    }

    box.mountStyles(styles);

    if (pages[0].src.startsWith("ppt")) {
      return setupDynamicDocsViewer(
        context as AppContext<NetlessAppDynamicDocsViewerAttributes>,
        whiteboardView,
        box,
        pages
      );
    } else {
      return setupStaticDocsViewer(
        context as AppContext<NetlessAppStaticDocsViewerAttributes>,
        whiteboardView,
        box,
        pages
      );
    }
  },
};

export default NetlessAppDocsViewer;

function setupStaticDocsViewer(
  context: AppContext<NetlessAppStaticDocsViewerAttributes>,
  whiteboardView: View,
  box: ReadonlyTeleBox,
  pages: DocsViewerPage[]
): AppResult {
  whiteboardView.disableCameraTransform = !context.getIsWritable();

  const docsViewer = new StaticDocsViewer({
    context,
    whiteboardView,
    readonly: !context.getIsWritable(),
    box,
    pages: pages,
    pageScrollTop: context.getAttributes()?.pageScrollTop,
    mountWhiteboard: context.mountView.bind(context),
    onUserScroll: pageScrollTop => {
      if (context.getAttributes()?.pageScrollTop !== pageScrollTop && !box.readonly) {
        context.updateAttributes(["pageScrollTop"], pageScrollTop);
      }
    },
    baseScenePath: context.getInitScenePath(),
    appId: context.appId,
  }).mount();

  docsViewer.viewer.onPageIndexChanged = index => {
    context.dispatchAppEvent("pageStateChange", { index, length: pages.length });
  };

  context.dispatchAppEvent("pageStateChange", {
    index: docsViewer.viewer.pageIndex,
    length: pages.length,
  });

  if (import.meta.env.DEV) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).docsViewer = docsViewer;
  }

  context.emitter.on("attributesUpdate", attributes => {
    if (attributes) {
      if (attributes.pageScrollTop != null) {
        docsViewer.syncPageScrollTop(attributes.pageScrollTop);
      }
    }
  });

  context.emitter.on("writableChange", isWritable => {
    docsViewer.setReadonly(!isWritable);
    whiteboardView.disableCameraTransform = !isWritable;
  });
  return {
    viewer: () => {
      return docsViewer;
    },
    position: () => {
      const controller = docsViewer?.viewer;
      if (controller) {
        return [controller.pageIndex, docsViewer.pages.length] as [page: number, length: number];
      }
    },
  };
}

function setupDynamicDocsViewer(
  context: AppContext<NetlessAppDynamicDocsViewerAttributes>,
  whiteboardView: View,
  box: ReadonlyTeleBox,
  pages: DocsViewerPage[]
): AppResult {
  whiteboardView.disableCameraTransform = true;

  const docsViewer = new DynamicDocsViewer({
    context,
    whiteboardView,
    box,
    pages,
  }).mount();

  docsViewer.viewer.onPageIndexChanged = index => {
    context.dispatchAppEvent("pageStateChange", { index, length: pages.length });
  };

  context.dispatchAppEvent("pageStateChange", {
    index: docsViewer.getPageIndex(),
    length: pages.length,
  });

  context.mountView(docsViewer.$whiteboardView);

  if (context.isAddApp) {
    whiteboardView.callbacks.once(
      "onSizeUpdated",
      ({ width: contentWidth, height: contentHeight }: Size) => {
        if (pages.length > 0 && box.state !== "maximized") {
          const { width: pageWidth, height: pageHeight } = pages[0];
          const preferHeight = (pageHeight / pageWidth) * contentWidth;
          const diff = preferHeight - contentHeight;
          if (diff !== 0 && context.getIsWritable()) {
            context.emitter.emit("setBoxSize", {
              width: box.width,
              height: box.height + diff / box.containerRect.height,
            });
          }
        }
      }
    );
  }

  if (import.meta.env.DEV) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).docsViewer = docsViewer;
  }

  return {
    viewer: () => {
      return docsViewer;
    },
    position: () => {
      const controller = docsViewer?.viewer;
      if (controller) {
        return [controller.pageIndex, docsViewer.pages.length] as [page: number, length: number];
      }
    },
    nextStep: () => {
      return docsViewer.onPlayPPT();
    },
    nextPage: () => {
      return docsViewer.jumpToPage(docsViewer.getPageIndex() + 1, true);
    },
    prevPage: () => {
      return docsViewer.jumpToPage(docsViewer.getPageIndex() + 1, true);
    },
    jumpToPage: (pageIndex?: number) => {
      if (typeof pageIndex == "number") {
        docsViewer.jumpToPage(pageIndex, true);
      }
    },
    togglePreview: (visible?: boolean) => {
      docsViewer.viewer.togglePreview(visible);
    },
  };
}
