import type { DocsViewerPage } from "../DocsViewer";
import { PageEl } from "./PageEl";
export declare class PageElManager {
    private pages;
    private pagesIntrinsicWidth;
    private scale;
    els: Map<number, PageEl>;
    private maxElCount;
    private gcTimer;
    constructor(pages: ReadonlyArray<DocsViewerPage>, pagesIntrinsicWidth: number, scale: number);
    getEl(index: number): PageEl;
    setScale(scale: number): void;
    destroy(): void;
    private gc;
}
