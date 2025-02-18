import type { DocsViewerPage } from "../DocsViewer";
import { PageElManager } from "./PageElManager";
export interface PageRendererConfig {
    pagesScrollTop?: number;
    containerWidth: number;
    containerHeight: number;
    pages: ReadonlyArray<DocsViewerPage>;
    onPageIndexChanged?: (index: number) => void;
}
/**
 * High-performance renderer for large number of page images
 */
export declare class PageRenderer {
    readonly $pages: HTMLDivElement;
    readonly pages: ReadonlyArray<DocsViewerPage>;
    readonly pagesIntrinsicYs: ReadonlyArray<number>;
    readonly pagesIntrinsicWidth: number;
    readonly pagesIntrinsicHeight: number;
    readonly pagesMinHeight: number;
    readonly pageElManager: PageElManager;
    containerWidth: number;
    containerHeight: number;
    threshold: number;
    scale: number;
    pagesScrollTop: number;
    pageScrollIndex: number;
    onPageIndexChanged?: (index: number) => void;
    constructor(config: PageRendererConfig);
    setContainerSize(width: number, height: number): void;
    renderPages(): HTMLDivElement;
    pagesScrollTo(pagesScrollTop: number, force?: boolean): void;
    findScrollPageIndex(): number;
    mount($parent: HTMLElement): void;
    unmount(): void;
    destroy(): void;
    private _calcScale;
    private _calcThreshold;
    private _hwaTimeout;
    /** Hardware Acceleration */
    private _turnOnHWA;
    private _turnOffHWA;
}
