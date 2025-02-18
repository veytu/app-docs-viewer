import type { AppContext, ReadonlyTeleBox } from "@netless/window-manager";
import type { View } from "white-web-sdk";
import type { DebouncedFunction, Options } from "debounce-fn";
import { SideEffectManager } from "side-effect-manager";
import type { DocsViewerPage } from "../DocsViewer";
import { DocsViewer } from "../DocsViewer";
import { Stepper } from "./stepper";
import { PageRenderer } from "../PageRenderer";
import { ScrollBar } from "../ScrollBar";
import type { NetlessAppStaticDocsViewerAttributes } from "..";
export interface StaticDocsViewerConfig {
    context: AppContext<NetlessAppStaticDocsViewerAttributes>;
    whiteboardView: View;
    readonly: boolean;
    box: ReadonlyTeleBox;
    pages: DocsViewerPage[];
    mountWhiteboard: (dom: HTMLDivElement) => void;
    /** Scroll Top of the original page */
    pageScrollTop?: number;
    onUserScroll?: (pageScrollTop: number) => void;
    baseScenePath: string | undefined;
    appId: string;
}
export interface SavePdfConfig {
    appId: string;
    type: "@netless/_request_save_pdf_";
}
export declare class StaticDocsViewer {
    constructor({ context, whiteboardView, readonly, box, pages, pageScrollTop, mountWhiteboard, onUserScroll, baseScenePath, appId, }: StaticDocsViewerConfig);
    readonly pageRenderer: PageRenderer;
    readonly scrollbar: ScrollBar;
    readonly context: AppContext<NetlessAppStaticDocsViewerAttributes>;
    protected sideEffect: SideEffectManager;
    protected pageScrollStepper: Stepper;
    protected userScrolling: boolean;
    protected readonly: boolean;
    protected pages: DocsViewerPage[];
    protected box: ReadonlyTeleBox;
    protected whiteboardView: View;
    private readonly baseScenePath;
    private readonly appId;
    protected mountWhiteboard: (dom: HTMLDivElement) => void;
    _onUserScroll?: (pageScrollTop: number) => void;
    viewer: DocsViewer;
    $whiteboardView: HTMLDivElement;
    mount(): this;
    unmount(): this;
    setReadonly(readonly: boolean): void;
    destroy(): void;
    /** Sync scrollTop from writable user */
    syncPageScrollTop(pageScrollTop: number): void;
    render(): void;
    protected renderRatioHeight(): void;
    protected renderWhiteboardView(): HTMLDivElement;
    protected scrollTopPageToEl(pageScrollTop: number): number;
    protected scrollTopElToPage(elScrollTop: number): number;
    /** Scroll base on DOM rect */
    protected elScrollTo(elScrollTop: number): void;
    /** Scroll base on docs size */
    protected pageScrollTo(pageScrollTop: number): void;
    protected scrollToPage(index: number): void;
    protected setupScrollListener(): void;
    protected debounce<ArgumentsType extends unknown[], ReturnType>(fn: (...args: ArgumentsType) => ReturnType, options?: Options, disposerID?: string): DebouncedFunction<ArgumentsType, ReturnType | undefined>;
    protected updateUserScroll: () => void;
    protected wrapClassName(className: string): string;
    protected onNewPageIndex: (index: number) => void;
    private getBase64FromUrl;
    private _invalidate;
    private reportProgress;
    toPdf: () => Promise<void>;
}
