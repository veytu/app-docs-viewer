import type { NetlessApp } from "@netless/window-manager";
export type { DocsViewerPage } from "./DocsViewer";
export interface NetlessAppStaticDocsViewerAttributes {
    /** ScrollTop base on the real page size */
    pageScrollTop?: number;
}
export interface NetlessAppDynamicDocsViewerAttributes {
}
declare const NetlessAppDocsViewer: NetlessApp<NetlessAppStaticDocsViewerAttributes | NetlessAppDynamicDocsViewerAttributes>;
export default NetlessAppDocsViewer;
