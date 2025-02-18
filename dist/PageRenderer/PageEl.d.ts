import type { DocsViewerPage } from "../DocsViewer";
export declare class PageEl {
    index: number;
    page: DocsViewerPage;
    scale: number;
    lastVisit: number;
    $page: HTMLDivElement;
    pageOffsetY: number;
    pageOffsetX: number;
    visible: boolean;
    constructor(index: number, page: DocsViewerPage, scale: number, pagesIntrinsicWidth: number);
    translateY(pageOffsetY: number): void;
    setScale(scale: number): void;
    setVisible(visible: boolean): void;
}
