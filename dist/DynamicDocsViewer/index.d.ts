import type { ReadonlyTeleBox, View, Displayer, AppContext } from "@netless/window-manager";
import { SideEffectManager } from "side-effect-manager";
import type { DocsViewerPage } from "../DocsViewer";
import { DocsViewer } from "../DocsViewer";
export interface DynamicDocsViewerConfig {
    context: AppContext;
    whiteboardView: View;
    box: ReadonlyTeleBox;
    pages: DocsViewerPage[];
}
export declare class DynamicDocsViewer {
    constructor({ context, whiteboardView, box, pages }: DynamicDocsViewerConfig);
    protected sideEffect: SideEffectManager;
    protected context: AppContext;
    pages: DocsViewerPage[];
    protected box: ReadonlyTeleBox;
    protected whiteboardView: View;
    protected displayer: Displayer;
    viewer: DocsViewer;
    $mask: HTMLElement;
    $whiteboardView: HTMLDivElement;
    mount(): this;
    unmount(): this;
    destroy(): void;
    getPageIndex(): number;
    jumpToPage(index: number, reset?: boolean): void;
    onPlayPPT: () => void;
    render(): void;
    protected renderMask(): HTMLElement;
    protected renderWhiteboardView(): HTMLDivElement;
    protected _scaleDocsToFitImpl: () => void;
    protected _scaleDocsToFitDebounced: () => void;
    protected scaleDocsToFit: () => void;
    protected onNewPageIndex: (index: number) => void;
    protected wrapClassName(className: string): string;
}
