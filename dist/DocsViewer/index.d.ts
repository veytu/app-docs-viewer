import type { ReadonlyTeleBox } from "@netless/window-manager";
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
export declare class DocsViewer {
    constructor({ readonly, box, pages, onNewPageIndex, onPlay }: DocsViewerConfig);
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
