import type { NetlessApp } from "@netless/window-manager";
import { StaticDocsViewer } from "./StaticDocsViewer";
import { DynamicDocsViewer } from "./DynamicDocsViewer";
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
export interface NetlessAppDynamicDocsViewerAttributes {
}
export interface AppOptions {
}
export declare type MagixEvents = {
    [key: string]: string;
};
declare const NetlessAppDocsViewer: NetlessApp<NetlessAppStaticDocsViewerAttributes | NetlessAppDynamicDocsViewerAttributes, MagixEvents, AppOptions, AppResult>;
export default NetlessAppDocsViewer;
