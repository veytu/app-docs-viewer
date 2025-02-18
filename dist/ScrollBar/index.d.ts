export interface ScrollBarConfig {
    pagesScrollTop?: number;
    containerWidth: number;
    containerHeight: number;
    pagesWidth: number;
    pagesHeight: number;
    readonly: boolean;
    scrollbarMinHeight?: number;
    wrapClassName: (className: string) => string;
    onDragScroll?: (pageScrollTop: number) => void;
}
export declare class ScrollBar {
    private sideEffect;
    containerWidth: number;
    containerHeight: number;
    readonly pagesWidth: number;
    readonly pagesHeight: number;
    readonly scrollbarMinHeight: number;
    readonly: boolean;
    wrapClassName: (className: string) => string;
    onDragScroll?: (pageScrollTop: number) => void;
    scale: number;
    pagesScrollTop: number;
    scrollbarHeight: number;
    readonly $scrollbar: HTMLButtonElement;
    constructor(config: ScrollBarConfig);
    mount($parent: HTMLElement): void;
    unmount(): void;
    setReadonly(readonly: boolean): void;
    setContainerSize(width: number, height: number): void;
    pagesScrollTo(pagesScrollTop: number, force?: boolean): void;
    destroy(): void;
    private renderScrollbar;
    private _calcScale;
    private _calcScrollbarHeight;
    private _updateScrollbarHeight;
}
