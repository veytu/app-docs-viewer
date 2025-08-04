import type { AppContext, ReadonlyTeleBox } from "@netless/window-manager";
import { SideEffectManager } from "side-effect-manager";
import type { AppOptions, NetlessAppDynamicDocsViewerAttributes, NetlessAppStaticDocsViewerAttributes } from "..";
export interface DocsViewerPage {
    src: string;
    height: number;
    width: number;
    thumbnail?: string;
}
type contextType = AppContext<NetlessAppStaticDocsViewerAttributes | NetlessAppDynamicDocsViewerAttributes, AppOptions>;
export interface DocsViewerConfig {
    readonly: boolean;
    box: ReadonlyTeleBox;
    pages: DocsViewerPage[];
    onNewPageIndex: (index: number) => void;
    onPlay?: () => void;
    context: contextType;
}
export declare class DocsViewer {
    constructor({ context, readonly, box, pages, onNewPageIndex, onPlay }: DocsViewerConfig);
    protected context: contextType;
    protected readonly: boolean;
    protected pages: DocsViewerPage[];
    protected box: ReadonlyTeleBox;
    protected onNewPageIndex: (index: number) => void;
    protected onPlay?: () => void;
    $content: HTMLElement;
    $preview: HTMLElement;
    $previewMask: HTMLElement;
    $footer: HTMLElement;
    $pageNumberInput: HTMLElement;
    private $btnPageNext;
    private $btnPageBack;
    pageIndex: number;
    onPageIndexChanged: (index: number) => void;
    mount(): void;
    unmount(): void;
    setReadonly(readonly: boolean): void;
    destroy(): void;
    setPageIndex(pageIndex: number): void;
    private scrollPreview;
    setSmallBox(isSmallBox: boolean): void;
    render(): HTMLElement;
    protected renderContent(): HTMLElement;
    protected renderPreview(): HTMLElement;
    protected renderPreviewMask(): HTMLElement;
    protected renderFooter(): HTMLElement;
    protected renderFooterBtn(className: string, $icon: SVGElement, $iconActive?: SVGElement): HTMLButtonElement;
    togglePreview(isShowPreview?: boolean): void;
    protected wrapClassName(className: string): string;
    protected namespace: string;
    protected isShowPreview: boolean;
    protected isSmallBox: boolean;
    protected sideEffect: SideEffectManager;
}
export {};
