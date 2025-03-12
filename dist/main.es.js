var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var styles = /* @__PURE__ */ (() => ".netless-app-docs-viewer-content{position:relative;height:100%;overflow:hidden}.netless-app-docs-viewer-preview-mask{display:block;position:absolute;z-index:200;top:0;left:0;width:100%;height:100%}.netless-app-docs-viewer-preview{display:flex;flex-direction:column;align-items:center;z-index:300;top:0;right:0;width:23%;padding:12px;box-shadow:-4.8px -3.2px 20px #20233826;transition:transform .4s;background:#f5f5fc;border-radius:4px;-webkit-box-shadow:-4.8px -3.2px 20px rgba(32,35,56,.15);height:100%;position:absolute}.netless-app-docs-viewer-preview-active .netless-app-docs-viewer-preview-mask{display:block}.netless-app-docs-viewer-preview-active .netless-app-docs-viewer-preview{transform:translate(0);opacity:1}.netless-app-docs-viewer-preview-head{display:flex;align-items:center;justify-content:space-between;width:100%;margin-bottom:10px}.netless-app-docs-viewer-preview-head>h3{color:#484c70;font-weight:400;font-size:14px;width:calc(100% - 20px);overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}.netless-app-docs-viewer-preview-head .netless-app-docs-viewer-close{width:25px;height:25px;padding:0;outline:none;border:none;background:#fff;display:flex;justify-content:center;align-items:center;border-radius:100%;cursor:pointer}.netless-app-docs-viewer-preview-head .netless-app-docs-viewer-close button{width:22px;height:22px;padding:0;outline:none;border:none;background:center/cover no-repeat;background-image:url(./icons/close.svg)}.netless-app-docs-viewer-preview-page{position:relative;display:flex;width:100%;margin-bottom:10px;font-size:0;color:transparent;outline:none;border-radius:4px;transition:border-color .3s;user-select:none;align-items:flex-end}.netless-app-docs-viewer-preview-page>img{width:calc(90% - 10px);height:auto;box-sizing:border-box;border:2px solid rgba(0,0,0,.5);border-radius:2px;background-color:#fff}.netless-app-docs-viewer-preview-page>img.netless-app-docs-viewer-active{border-color:#ff5353}.netless-app-docs-viewer-preview-page-name{text-align:right;font-size:12px;color:#8d8fa6;user-select:none;margin-right:10px;width:5%}.netless-app-docs-viewer-footer{box-sizing:border-box;height:40px;display:flex;align-items:center;padding:0 16px;color:#191919;background:#ebecfa}.netless-app-docs-viewer-float-footer{width:100%;min-height:40px;position:absolute;left:0;bottom:0;z-index:2000;transition:opacity .4s;color:#191919}.netless-app-docs-viewer-footer-btn{box-sizing:border-box;width:26px;height:26px;font-size:0;margin:0;padding:3px;border:none;border-radius:4px;outline:none;color:currentColor;background:transparent;transition:background .4s;cursor:pointer;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);color:#8d8fa6}.netless-app-docs-viewer-footer-btn.netless-app-docs-viewer-footer-btn-disable{color:#c6c7d2;cursor:not-allowed}.netless-app-docs-viewer-footer-btn.netless-app-docs-viewer-footer-btn-disable .arrow{fill:#c6c7d2}.netless-app-docs-viewer-footer-btn .arrow{fill:#8d8fa6}.netless-app-docs-viewer-footer-btn:hover{background-color:#1b1f4d0a}@media (hover: none){.netless-app-docs-viewer-footer-btn:hover{background:transparent!important}}.netless-app-docs-viewer-footer-btn>svg{width:100%;height:100%}.netless-app-docs-viewer-footer-btn>svg:nth-of-type(2){display:none}.netless-app-docs-viewer-footer-btn.netless-app-docs-viewer-footer-btn-playing>svg:nth-of-type(1){display:none}.netless-app-docs-viewer-footer-btn.netless-app-docs-viewer-footer-btn-playing>svg:nth-of-type(2){display:initial}.netless-app-docs-viewer-hide{display:none}.netless-app-docs-viewer-page-jumps{flex:1;display:flex;justify-content:center;align-items:center;gap:8px}.netless-app-docs-viewer-page-number{font-size:14px;color:#8d8fa6;user-select:none;white-space:nowrap;word-break:keep-all}.netless-app-docs-viewer-page-number-input{border:none;outline:none;width:3em;margin:0;padding:0 2px;text-align:right;font-size:13px;line-height:1;font-weight:400;font-family:inherit;border-radius:2px;color:currentColor;background:transparent;transition:background .4s;user-select:text;-webkit-tap-highlight-color:rgba(0,0,0,0)}.netless-app-docs-viewer-readonly .netless-app-docs-viewer-footer-btn{cursor:not-allowed}.netless-app-docs-viewer-readonly .netless-app-docs-viewer-footer-btn:hover{background:transparent}.netless-app-docs-viewer-readonly .netless-app-docs-viewer-page-number-input{cursor:not-allowed}.netless-app-docs-viewer-readonly .netless-app-docs-viewer-page-number-input:hover,.netless-app-docs-viewer-readonly .netless-app-docs-viewer-page-number-input:focus,.netless-app-docs-viewer-readonly .netless-app-docs-viewer-page-number-input:active{background:transparent;box-shadow:none}.netless-app-docs-viewer-readonly .netless-app-docs-viewer-page-number-input:disabled{color:inherit}.netless-app-docs-viewer-readonly.netless-app-docs-viewer-float-footer{display:none}.telebox-color-scheme-dark .netless-app-docs-viewer-page-number-input{color:#a6a6a8}.telebox-color-scheme-dark .netless-app-docs-viewer-page-number-input:active,.telebox-color-scheme-dark .netless-app-docs-viewer-page-number-input:focus,.telebox-color-scheme-dark .netless-app-docs-viewer-page-number-input:hover{color:#222}.telebox-color-scheme-dark .netless-app-docs-viewer-footer{color:#a6a6a8;background:#2d2d33;border-top:none}.telebox-color-scheme-dark .netless-app-docs-viewer-footer-btn:hover{background:#212126}.telebox-color-scheme-dark .netless-app-docs-viewer-preview{background:rgba(50,50,50,.9)}.netless-app-docs-viewer-static-scrollbar{position:absolute;top:0;right:0;z-index:2147483647;width:8px;min-height:30px;margin:0;padding:0;border:none;outline:none;border-radius:4px;background:rgba(68,78,96,.4);box-shadow:1px 1px 8px #ffffffb3;opacity:0;transition:background .4s,opacity .4s 3s,transform .2s;user-select:none}.netless-app-docs-viewer-static-scrollbar.netless-app-docs-viewer-static-scrollbar-dragging{background:rgba(68,78,96,.6);opacity:1;transition:background .4s,opacity .4s 3s!important}.netless-app-docs-viewer-static-scrollbar:hover,.netless-app-docs-viewer-static-scrollbar:focus{background:rgba(68,78,96,.5)}.netless-app-docs-viewer-static-scrollbar:active{background:rgba(68,78,96,.6)}.netless-app-docs-viewer-content:hover .netless-app-docs-viewer-static-scrollbar{opacity:1;transition:background .4s,opacity .4s,transform .2s}.netless-app-docs-viewer-readonly .netless-app-docs-viewer-static-scrollbar{display:none}.netless-app-docs-viewer-static-pages:hover .netless-app-docs-viewer-static-scrollbar{opacity:1;transition:background .4s,opacity .4s,transform .2s}.page-renderer-pages-container{position:relative;overflow:hidden}.page-renderer-page{position:absolute;top:0;left:0;background-position:center;background-size:cover;background-repeat:no-repeat}.page-renderer-pages-container.is-hwa .page-renderer-page{will-change:transform}.page-renderer-page-img{display:block;width:100%;height:auto;user-select:none}.netless-app-docs-viewer-static-pages{overflow:hidden;position:relative;height:100%;user-select:none}.netless-app-docs-viewer-static-page{display:block;width:100%;height:auto;user-select:none}.netless-app-docs-viewer-static-wb-view,.netless-app-docs-viewer-dynamic-wb-view{position:absolute;top:0;left:0;width:100%;height:100%;z-index:100;overflow:auto}.netless-app-docs-viewer-dynamic-wb-view .cursor-clicker .ppt-event-source{cursor:pointer}\n")();
const copyProperty = (to, from, property, ignoreNonConfigurable) => {
  if (property === "length" || property === "prototype") {
    return;
  }
  if (property === "arguments" || property === "caller") {
    return;
  }
  const toDescriptor = Object.getOwnPropertyDescriptor(to, property);
  const fromDescriptor = Object.getOwnPropertyDescriptor(from, property);
  if (!canCopyProperty(toDescriptor, fromDescriptor) && ignoreNonConfigurable) {
    return;
  }
  Object.defineProperty(to, property, fromDescriptor);
};
const canCopyProperty = function(toDescriptor, fromDescriptor) {
  return toDescriptor === void 0 || toDescriptor.configurable || toDescriptor.writable === fromDescriptor.writable && toDescriptor.enumerable === fromDescriptor.enumerable && toDescriptor.configurable === fromDescriptor.configurable && (toDescriptor.writable || toDescriptor.value === fromDescriptor.value);
};
const changePrototype = (to, from) => {
  const fromPrototype = Object.getPrototypeOf(from);
  if (fromPrototype === Object.getPrototypeOf(to)) {
    return;
  }
  Object.setPrototypeOf(to, fromPrototype);
};
const wrappedToString = (withName, fromBody) => `/* Wrapped ${withName}*/
${fromBody}`;
const toStringDescriptor = Object.getOwnPropertyDescriptor(Function.prototype, "toString");
const toStringName = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name");
const changeToString = (to, from, name) => {
  const withName = name === "" ? "" : `with ${name.trim()}() `;
  const newToString = wrappedToString.bind(null, withName, from.toString());
  Object.defineProperty(newToString, "name", toStringName);
  Object.defineProperty(to, "toString", __spreadProps(__spreadValues({}, toStringDescriptor), { value: newToString }));
};
function mimicFunction(to, from, { ignoreNonConfigurable = false } = {}) {
  const { name } = to;
  for (const property of Reflect.ownKeys(from)) {
    copyProperty(to, from, property, ignoreNonConfigurable);
  }
  changePrototype(to, from);
  changeToString(to, from, name);
  return to;
}
const debounceFn = (inputFunction, options = {}) => {
  if (typeof inputFunction !== "function") {
    throw new TypeError(`Expected the first argument to be a function, got \`${typeof inputFunction}\``);
  }
  const {
    wait = 0,
    maxWait = Number.Infinity,
    before = false,
    after = true
  } = options;
  if (!before && !after) {
    throw new Error("Both `before` and `after` are false, function wouldn't be called.");
  }
  let timeout;
  let maxTimeout;
  let result;
  const debouncedFunction = function(...arguments_) {
    const context = this;
    const later = () => {
      timeout = void 0;
      if (maxTimeout) {
        clearTimeout(maxTimeout);
        maxTimeout = void 0;
      }
      if (after) {
        result = inputFunction.apply(context, arguments_);
      }
    };
    const maxLater = () => {
      maxTimeout = void 0;
      if (timeout) {
        clearTimeout(timeout);
        timeout = void 0;
      }
      if (after) {
        result = inputFunction.apply(context, arguments_);
      }
    };
    const shouldCallNow = before && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (maxWait > 0 && maxWait !== Number.Infinity && !maxTimeout) {
      maxTimeout = setTimeout(maxLater, maxWait);
    }
    if (shouldCallNow) {
      result = inputFunction.apply(context, arguments_);
    }
    return result;
  };
  mimicFunction(debouncedFunction, inputFunction);
  debouncedFunction.cancel = () => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = void 0;
    }
    if (maxTimeout) {
      clearTimeout(maxTimeout);
      maxTimeout = void 0;
    }
  };
  return debouncedFunction;
};
const SOUP = "!#%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const SOUP_LEN = 87;
const ID_LEN = 20;
const reusedIdCarrier = [];
const genUID = () => {
  for (let i = 0; i < ID_LEN; i++) {
    reusedIdCarrier[i] = SOUP.charAt(Math.random() * SOUP_LEN);
  }
  return reusedIdCarrier.join("");
};
function invoke(fn) {
  try {
    return fn();
  } catch (e) {
    console.error(e);
  }
}
class SideEffectManager {
  constructor() {
    this.push = this.addDisposer;
    this.disposers = /* @__PURE__ */ new Map();
  }
  addDisposer(disposer, disposerID = this.genUID()) {
    this.flush(disposerID);
    this.disposers.set(disposerID, Array.isArray(disposer) ? joinDisposers(disposer) : disposer);
    return disposerID;
  }
  add(executor, disposerID = this.genUID()) {
    const disposers = executor();
    return disposers ? this.addDisposer(disposers, disposerID) : disposerID;
  }
  addEventListener(el, type, listener, options, disposerID = this.genUID()) {
    el.addEventListener(type, listener, options);
    this.addDisposer(() => el.removeEventListener(type, listener, options), disposerID);
    return disposerID;
  }
  setTimeout(handler, timeout, disposerID = this.genUID()) {
    const ticket = window.setTimeout(() => {
      this.remove(disposerID);
      handler();
    }, timeout);
    return this.addDisposer(() => window.clearTimeout(ticket), disposerID);
  }
  setInterval(handler, timeout, disposerID = this.genUID()) {
    const ticket = window.setInterval(handler, timeout);
    return this.addDisposer(() => window.clearInterval(ticket), disposerID);
  }
  remove(disposerID) {
    const disposer = this.disposers.get(disposerID);
    this.disposers.delete(disposerID);
    return disposer;
  }
  flush(disposerID) {
    const disposer = this.remove(disposerID);
    if (disposer) {
      disposer();
    }
  }
  flushAll() {
    this.disposers.forEach(invoke);
    this.disposers.clear();
  }
  genUID() {
    let uid;
    do {
      uid = genUID();
    } while (this.disposers.has(uid));
    return uid;
  }
}
function joinDisposers(disposers) {
  return () => disposers.forEach(invoke);
}
var resizeObservers = [];
var hasActiveObservations = function() {
  return resizeObservers.some(function(ro) {
    return ro.activeTargets.length > 0;
  });
};
var hasSkippedObservations = function() {
  return resizeObservers.some(function(ro) {
    return ro.skippedTargets.length > 0;
  });
};
var msg = "ResizeObserver loop completed with undelivered notifications.";
var deliverResizeLoopError = function() {
  var event;
  if (typeof ErrorEvent === "function") {
    event = new ErrorEvent("error", {
      message: msg
    });
  } else {
    event = document.createEvent("Event");
    event.initEvent("error", false, false);
    event.message = msg;
  }
  window.dispatchEvent(event);
};
var ResizeObserverBoxOptions;
(function(ResizeObserverBoxOptions2) {
  ResizeObserverBoxOptions2["BORDER_BOX"] = "border-box";
  ResizeObserverBoxOptions2["CONTENT_BOX"] = "content-box";
  ResizeObserverBoxOptions2["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
})(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));
var freeze = function(obj) {
  return Object.freeze(obj);
};
var ResizeObserverSize = function() {
  function ResizeObserverSize2(inlineSize, blockSize) {
    this.inlineSize = inlineSize;
    this.blockSize = blockSize;
    freeze(this);
  }
  return ResizeObserverSize2;
}();
var DOMRectReadOnly = function() {
  function DOMRectReadOnly2(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.top = this.y;
    this.left = this.x;
    this.bottom = this.top + this.height;
    this.right = this.left + this.width;
    return freeze(this);
  }
  DOMRectReadOnly2.prototype.toJSON = function() {
    var _a = this, x = _a.x, y = _a.y, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
    return { x, y, top, right, bottom, left, width, height };
  };
  DOMRectReadOnly2.fromRect = function(rectangle) {
    return new DOMRectReadOnly2(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
  };
  return DOMRectReadOnly2;
}();
var isSVG = function(target) {
  return target instanceof SVGElement && "getBBox" in target;
};
var isHidden = function(target) {
  if (isSVG(target)) {
    var _a = target.getBBox(), width = _a.width, height = _a.height;
    return !width && !height;
  }
  var _b = target, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight;
  return !(offsetWidth || offsetHeight || target.getClientRects().length);
};
var isElement = function(obj) {
  var _a, _b;
  if (obj instanceof Element) {
    return true;
  }
  var scope = (_b = (_a = obj) === null || _a === void 0 ? void 0 : _a.ownerDocument) === null || _b === void 0 ? void 0 : _b.defaultView;
  return !!(scope && obj instanceof scope.Element);
};
var isReplacedElement = function(target) {
  switch (target.tagName) {
    case "INPUT":
      if (target.type !== "image") {
        break;
      }
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return true;
  }
  return false;
};
var global = typeof window !== "undefined" ? window : {};
var cache = /* @__PURE__ */ new WeakMap();
var scrollRegexp = /auto|scroll/;
var verticalRegexp = /^tb|vertical/;
var IE = /msie|trident/i.test(global.navigator && global.navigator.userAgent);
var parseDimension = function(pixel) {
  return parseFloat(pixel || "0");
};
var size = function(inlineSize, blockSize, switchSizes) {
  if (inlineSize === void 0) {
    inlineSize = 0;
  }
  if (blockSize === void 0) {
    blockSize = 0;
  }
  if (switchSizes === void 0) {
    switchSizes = false;
  }
  return new ResizeObserverSize((switchSizes ? blockSize : inlineSize) || 0, (switchSizes ? inlineSize : blockSize) || 0);
};
var zeroBoxes = freeze({
  devicePixelContentBoxSize: size(),
  borderBoxSize: size(),
  contentBoxSize: size(),
  contentRect: new DOMRectReadOnly(0, 0, 0, 0)
});
var calculateBoxSizes = function(target, forceRecalculation) {
  if (forceRecalculation === void 0) {
    forceRecalculation = false;
  }
  if (cache.has(target) && !forceRecalculation) {
    return cache.get(target);
  }
  if (isHidden(target)) {
    cache.set(target, zeroBoxes);
    return zeroBoxes;
  }
  var cs = getComputedStyle(target);
  var svg = isSVG(target) && target.ownerSVGElement && target.getBBox();
  var removePadding = !IE && cs.boxSizing === "border-box";
  var switchSizes = verticalRegexp.test(cs.writingMode || "");
  var canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || "");
  var canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || "");
  var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
  var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
  var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
  var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
  var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
  var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
  var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
  var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
  var horizontalPadding = paddingLeft + paddingRight;
  var verticalPadding = paddingTop + paddingBottom;
  var horizontalBorderArea = borderLeft + borderRight;
  var verticalBorderArea = borderTop + borderBottom;
  var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
  var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
  var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
  var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
  var contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
  var contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
  var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
  var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
  var boxes = freeze({
    devicePixelContentBoxSize: size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
    borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
    contentBoxSize: size(contentWidth, contentHeight, switchSizes),
    contentRect: new DOMRectReadOnly(paddingLeft, paddingTop, contentWidth, contentHeight)
  });
  cache.set(target, boxes);
  return boxes;
};
var calculateBoxSize = function(target, observedBox, forceRecalculation) {
  var _a = calculateBoxSizes(target, forceRecalculation), borderBoxSize = _a.borderBoxSize, contentBoxSize = _a.contentBoxSize, devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
  switch (observedBox) {
    case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
      return devicePixelContentBoxSize;
    case ResizeObserverBoxOptions.BORDER_BOX:
      return borderBoxSize;
    default:
      return contentBoxSize;
  }
};
var ResizeObserverEntry = function() {
  function ResizeObserverEntry2(target) {
    var boxes = calculateBoxSizes(target);
    this.target = target;
    this.contentRect = boxes.contentRect;
    this.borderBoxSize = freeze([boxes.borderBoxSize]);
    this.contentBoxSize = freeze([boxes.contentBoxSize]);
    this.devicePixelContentBoxSize = freeze([boxes.devicePixelContentBoxSize]);
  }
  return ResizeObserverEntry2;
}();
var calculateDepthForNode = function(node) {
  if (isHidden(node)) {
    return Infinity;
  }
  var depth = 0;
  var parent = node.parentNode;
  while (parent) {
    depth += 1;
    parent = parent.parentNode;
  }
  return depth;
};
var broadcastActiveObservations = function() {
  var shallowestDepth = Infinity;
  var callbacks2 = [];
  resizeObservers.forEach(function processObserver(ro) {
    if (ro.activeTargets.length === 0) {
      return;
    }
    var entries = [];
    ro.activeTargets.forEach(function processTarget(ot) {
      var entry = new ResizeObserverEntry(ot.target);
      var targetDepth = calculateDepthForNode(ot.target);
      entries.push(entry);
      ot.lastReportedSize = calculateBoxSize(ot.target, ot.observedBox);
      if (targetDepth < shallowestDepth) {
        shallowestDepth = targetDepth;
      }
    });
    callbacks2.push(function resizeObserverCallback() {
      ro.callback.call(ro.observer, entries, ro.observer);
    });
    ro.activeTargets.splice(0, ro.activeTargets.length);
  });
  for (var _i = 0, callbacks_1 = callbacks2; _i < callbacks_1.length; _i++) {
    var callback = callbacks_1[_i];
    callback();
  }
  return shallowestDepth;
};
var gatherActiveObservationsAtDepth = function(depth) {
  resizeObservers.forEach(function processObserver(ro) {
    ro.activeTargets.splice(0, ro.activeTargets.length);
    ro.skippedTargets.splice(0, ro.skippedTargets.length);
    ro.observationTargets.forEach(function processTarget(ot) {
      if (ot.isActive()) {
        if (calculateDepthForNode(ot.target) > depth) {
          ro.activeTargets.push(ot);
        } else {
          ro.skippedTargets.push(ot);
        }
      }
    });
  });
};
var process = function() {
  var depth = 0;
  gatherActiveObservationsAtDepth(depth);
  while (hasActiveObservations()) {
    depth = broadcastActiveObservations();
    gatherActiveObservationsAtDepth(depth);
  }
  if (hasSkippedObservations()) {
    deliverResizeLoopError();
  }
  return depth > 0;
};
var trigger;
var callbacks = [];
var notify = function() {
  return callbacks.splice(0).forEach(function(cb) {
    return cb();
  });
};
var queueMicroTask = function(callback) {
  if (!trigger) {
    var toggle_1 = 0;
    var el_1 = document.createTextNode("");
    var config = { characterData: true };
    new MutationObserver(function() {
      return notify();
    }).observe(el_1, config);
    trigger = function() {
      el_1.textContent = "" + (toggle_1 ? toggle_1-- : toggle_1++);
    };
  }
  callbacks.push(callback);
  trigger();
};
var queueResizeObserver = function(cb) {
  queueMicroTask(function ResizeObserver2() {
    requestAnimationFrame(cb);
  });
};
var watching = 0;
var isWatching = function() {
  return !!watching;
};
var CATCH_PERIOD = 250;
var observerConfig = { attributes: true, characterData: true, childList: true, subtree: true };
var events = [
  "resize",
  "load",
  "transitionend",
  "animationend",
  "animationstart",
  "animationiteration",
  "keyup",
  "keydown",
  "mouseup",
  "mousedown",
  "mouseover",
  "mouseout",
  "blur",
  "focus"
];
var time = function(timeout) {
  if (timeout === void 0) {
    timeout = 0;
  }
  return Date.now() + timeout;
};
var scheduled = false;
var Scheduler = function() {
  function Scheduler2() {
    var _this = this;
    this.stopped = true;
    this.listener = function() {
      return _this.schedule();
    };
  }
  Scheduler2.prototype.run = function(timeout) {
    var _this = this;
    if (timeout === void 0) {
      timeout = CATCH_PERIOD;
    }
    if (scheduled) {
      return;
    }
    scheduled = true;
    var until = time(timeout);
    queueResizeObserver(function() {
      var elementsHaveResized = false;
      try {
        elementsHaveResized = process();
      } finally {
        scheduled = false;
        timeout = until - time();
        if (!isWatching()) {
          return;
        }
        if (elementsHaveResized) {
          _this.run(1e3);
        } else if (timeout > 0) {
          _this.run(timeout);
        } else {
          _this.start();
        }
      }
    });
  };
  Scheduler2.prototype.schedule = function() {
    this.stop();
    this.run();
  };
  Scheduler2.prototype.observe = function() {
    var _this = this;
    var cb = function() {
      return _this.observer && _this.observer.observe(document.body, observerConfig);
    };
    document.body ? cb() : global.addEventListener("DOMContentLoaded", cb);
  };
  Scheduler2.prototype.start = function() {
    var _this = this;
    if (this.stopped) {
      this.stopped = false;
      this.observer = new MutationObserver(this.listener);
      this.observe();
      events.forEach(function(name) {
        return global.addEventListener(name, _this.listener, true);
      });
    }
  };
  Scheduler2.prototype.stop = function() {
    var _this = this;
    if (!this.stopped) {
      this.observer && this.observer.disconnect();
      events.forEach(function(name) {
        return global.removeEventListener(name, _this.listener, true);
      });
      this.stopped = true;
    }
  };
  return Scheduler2;
}();
var scheduler = new Scheduler();
var updateCount = function(n) {
  !watching && n > 0 && scheduler.start();
  watching += n;
  !watching && scheduler.stop();
};
var skipNotifyOnElement = function(target) {
  return !isSVG(target) && !isReplacedElement(target) && getComputedStyle(target).display === "inline";
};
var ResizeObservation = function() {
  function ResizeObservation2(target, observedBox) {
    this.target = target;
    this.observedBox = observedBox || ResizeObserverBoxOptions.CONTENT_BOX;
    this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  ResizeObservation2.prototype.isActive = function() {
    var size2 = calculateBoxSize(this.target, this.observedBox, true);
    if (skipNotifyOnElement(this.target)) {
      this.lastReportedSize = size2;
    }
    if (this.lastReportedSize.inlineSize !== size2.inlineSize || this.lastReportedSize.blockSize !== size2.blockSize) {
      return true;
    }
    return false;
  };
  return ResizeObservation2;
}();
var ResizeObserverDetail = function() {
  function ResizeObserverDetail2(resizeObserver, callback) {
    this.activeTargets = [];
    this.skippedTargets = [];
    this.observationTargets = [];
    this.observer = resizeObserver;
    this.callback = callback;
  }
  return ResizeObserverDetail2;
}();
var observerMap = /* @__PURE__ */ new WeakMap();
var getObservationIndex = function(observationTargets, target) {
  for (var i = 0; i < observationTargets.length; i += 1) {
    if (observationTargets[i].target === target) {
      return i;
    }
  }
  return -1;
};
var ResizeObserverController = function() {
  function ResizeObserverController2() {
  }
  ResizeObserverController2.connect = function(resizeObserver, callback) {
    var detail = new ResizeObserverDetail(resizeObserver, callback);
    observerMap.set(resizeObserver, detail);
  };
  ResizeObserverController2.observe = function(resizeObserver, target, options) {
    var detail = observerMap.get(resizeObserver);
    var firstObservation = detail.observationTargets.length === 0;
    if (getObservationIndex(detail.observationTargets, target) < 0) {
      firstObservation && resizeObservers.push(detail);
      detail.observationTargets.push(new ResizeObservation(target, options && options.box));
      updateCount(1);
      scheduler.schedule();
    }
  };
  ResizeObserverController2.unobserve = function(resizeObserver, target) {
    var detail = observerMap.get(resizeObserver);
    var index = getObservationIndex(detail.observationTargets, target);
    var lastObservation = detail.observationTargets.length === 1;
    if (index >= 0) {
      lastObservation && resizeObservers.splice(resizeObservers.indexOf(detail), 1);
      detail.observationTargets.splice(index, 1);
      updateCount(-1);
    }
  };
  ResizeObserverController2.disconnect = function(resizeObserver) {
    var _this = this;
    var detail = observerMap.get(resizeObserver);
    detail.observationTargets.slice().forEach(function(ot) {
      return _this.unobserve(resizeObserver, ot.target);
    });
    detail.activeTargets.splice(0, detail.activeTargets.length);
  };
  return ResizeObserverController2;
}();
var ResizeObserver$1 = function() {
  function ResizeObserver2(callback) {
    if (arguments.length === 0) {
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    }
    if (typeof callback !== "function") {
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    }
    ResizeObserverController.connect(this, callback);
  }
  ResizeObserver2.prototype.observe = function(target, options) {
    if (arguments.length === 0) {
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    }
    if (!isElement(target)) {
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    }
    ResizeObserverController.observe(this, target, options);
  };
  ResizeObserver2.prototype.unobserve = function(target) {
    if (arguments.length === 0) {
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    }
    if (!isElement(target)) {
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    }
    ResizeObserverController.unobserve(this, target);
  };
  ResizeObserver2.prototype.disconnect = function() {
    ResizeObserverController.disconnect(this);
  };
  ResizeObserver2.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  };
  return ResizeObserver2;
}();
function arrowLeftSVG(namespace) {
  const NS = "http://www.w3.org/2000/svg";
  const $svg = document.createElementNS(NS, "svg");
  $svg.setAttribute("class", `${namespace}-footer-icon-arrow-left`);
  $svg.setAttribute("viewBox", "0 0 20 20");
  $svg.innerHTML = `<g clip-path="url(#clip0_11800_99864)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5283 4.86182L12.4711 5.80463L8.22849 10.0473L12.4711 14.2899L11.5283 15.2327L6.34287 10.0473L11.5283 4.86182Z" class="arrow" />
</g>
<defs>
<clipPath id="clip0_11800_99864">
<rect width="16" height="16" fill="white" transform="translate(2 2)"/>
</clipPath>
</defs>`;
  return $svg;
}
function arrowRightSVG(namespace) {
  const NS = "http://www.w3.org/2000/svg";
  const $svg = document.createElementNS(NS, "svg");
  $svg.setAttribute("class", `${namespace}-footer-icon-arrow-right`);
  $svg.setAttribute("viewBox", "0 0 20 20");
  $svg.innerHTML = `<g clip-path="url(#clip0_11800_99870)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.1377 4.86182L7.19489 5.80463L11.4375 10.0473L7.19489 14.2899L8.1377 15.2327L13.3231 10.0473L8.1377 4.86182Z" class="arrow" />
</g>
<defs>
<clipPath id="clip0_11800_99870">
<rect width="16" height="16" fill="white" transform="translate(2 2)"/>
</clipPath>
</defs>`;
  return $svg;
}
function playSVG(namespace) {
  const NS = "http://www.w3.org/2000/svg";
  const $svg = document.createElementNS(NS, "svg");
  $svg.setAttribute("class", `${namespace}-footer-icon-play`);
  $svg.setAttribute("viewBox", "0 0 500 500");
  const $path = document.createElementNS(NS, "path");
  $path.setAttribute("fill", "currentColor");
  $path.setAttribute("d", "M418.158 257.419L174.663 413.33c-6.017 3.919-15.708 3.772-21.291-.29-2.791-2.018-4.295-4.483-4.295-7.084V94.109c0-5.65 6.883-10.289 15.271-10.289 4.298 0 8.391 1.307 11.181 3.332l242.629 155.484c6.016 3.917 6.451 10.292.649 14.491-.216.154-.432.154-.649.292zM170.621 391.288l223.116-141.301L170.71 107.753l-.089 283.535z");
  $svg.appendChild($path);
  return $svg;
}
function pauseSVG(namespace) {
  const NS = "http://www.w3.org/2000/svg";
  const $svg = document.createElementNS(NS, "svg");
  $svg.setAttribute("class", `${namespace}-footer-icon-pause`);
  $svg.setAttribute("viewBox", "0 0 500 500");
  const $path = document.createElementNS(NS, "path");
  $path.setAttribute("fill", "currentColor");
  $path.setAttribute("d", "M312.491 78.261c0-6.159 4.893-11.213 11.04-11.213 6.158 0 11.211 5.054 11.211 11.213v343.478c0 6.159-5.053 11.213-11.211 11.213-6.147 0-11.04-5.054-11.04-11.213V78.261zM165.257 78.261c0-6.159 4.893-11.213 11.04-11.213 6.158 0 11.211 5.054 11.211 11.213v343.478c0 6.159-5.053 11.213-11.211 11.213-6.147 0-11.04-5.054-11.04-11.213V78.261z");
  $svg.appendChild($path);
  return $svg;
}
const runningOnBrowser = typeof window !== "undefined";
const isBot = runningOnBrowser && !("onscroll" in window) || typeof navigator !== "undefined" && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent);
const supportsIntersectionObserver = runningOnBrowser && "IntersectionObserver" in window;
const supportsClassList = runningOnBrowser && "classList" in document.createElement("p");
const isHiDpi = runningOnBrowser && window.devicePixelRatio > 1;
const defaultSettings = {
  elements_selector: ".lazy",
  container: isBot || runningOnBrowser ? document : null,
  threshold: 300,
  thresholds: null,
  data_src: "src",
  data_srcset: "srcset",
  data_sizes: "sizes",
  data_bg: "bg",
  data_bg_hidpi: "bg-hidpi",
  data_bg_multi: "bg-multi",
  data_bg_multi_hidpi: "bg-multi-hidpi",
  data_bg_set: "bg-set",
  data_poster: "poster",
  class_applied: "applied",
  class_loading: "loading",
  class_loaded: "loaded",
  class_error: "error",
  class_entered: "entered",
  class_exited: "exited",
  unobserve_completed: true,
  unobserve_entered: false,
  cancel_on_exit: true,
  callback_enter: null,
  callback_exit: null,
  callback_applied: null,
  callback_loading: null,
  callback_loaded: null,
  callback_error: null,
  callback_finish: null,
  callback_cancel: null,
  use_native: false,
  restore_on_error: false
};
const getExtendedSettings = (customSettings) => {
  return Object.assign({}, defaultSettings, customSettings);
};
const createInstance = function(classObj, options) {
  let event;
  const eventString = "LazyLoad::Initialized";
  const instance = new classObj(options);
  try {
    event = new CustomEvent(eventString, { detail: { instance } });
  } catch (err) {
    event = document.createEvent("CustomEvent");
    event.initCustomEvent(eventString, false, false, { instance });
  }
  window.dispatchEvent(event);
};
const autoInitialize = (classObj, options) => {
  if (!options) {
    return;
  }
  if (!options.length) {
    createInstance(classObj, options);
  } else {
    for (let i = 0, optionsItem; optionsItem = options[i]; i += 1) {
      createInstance(classObj, optionsItem);
    }
  }
};
const SRC = "src";
const SRCSET = "srcset";
const SIZES = "sizes";
const POSTER = "poster";
const ORIGINALS = "llOriginalAttrs";
const DATA = "data";
const statusLoading = "loading";
const statusLoaded = "loaded";
const statusApplied = "applied";
const statusEntered = "entered";
const statusError = "error";
const statusNative = "native";
const dataPrefix = "data-";
const statusDataName = "ll-status";
const getData = (element, attribute) => {
  return element.getAttribute(dataPrefix + attribute);
};
const setData = (element, attribute, value) => {
  var attrName = dataPrefix + attribute;
  if (value === null) {
    element.removeAttribute(attrName);
    return;
  }
  element.setAttribute(attrName, value);
};
const getStatus = (element) => getData(element, statusDataName);
const setStatus = (element, status) => setData(element, statusDataName, status);
const resetStatus = (element) => setStatus(element, null);
const hasEmptyStatus = (element) => getStatus(element) === null;
const hasStatusLoading = (element) => getStatus(element) === statusLoading;
const hasStatusError = (element) => getStatus(element) === statusError;
const hasStatusNative = (element) => getStatus(element) === statusNative;
const statusesAfterLoading = [statusLoading, statusLoaded, statusApplied, statusError];
const hadStartedLoading = (element) => statusesAfterLoading.indexOf(getStatus(element)) >= 0;
const safeCallback = (callback, arg1, arg2, arg3) => {
  if (!callback) {
    return;
  }
  if (arg3 !== void 0) {
    callback(arg1, arg2, arg3);
    return;
  }
  if (arg2 !== void 0) {
    callback(arg1, arg2);
    return;
  }
  callback(arg1);
};
const addClass = (element, className) => {
  if (supportsClassList) {
    element.classList.add(className);
    return;
  }
  element.className += (element.className ? " " : "") + className;
};
const removeClass = (element, className) => {
  if (supportsClassList) {
    element.classList.remove(className);
    return;
  }
  element.className = element.className.replace(new RegExp("(^|\\s+)" + className + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
};
const addTempImage = (element) => {
  element.llTempImage = document.createElement("IMG");
};
const deleteTempImage = (element) => {
  delete element.llTempImage;
};
const getTempImage = (element) => element.llTempImage;
const unobserve = (element, instance) => {
  if (!instance)
    return;
  const observer = instance._observer;
  if (!observer)
    return;
  observer.unobserve(element);
};
const resetObserver = (observer) => {
  observer.disconnect();
};
const unobserveEntered = (element, settings, instance) => {
  if (settings.unobserve_entered)
    unobserve(element, instance);
};
const updateLoadingCount = (instance, delta) => {
  if (!instance)
    return;
  instance.loadingCount += delta;
};
const decreaseToLoadCount = (instance) => {
  if (!instance)
    return;
  instance.toLoadCount -= 1;
};
const setToLoadCount = (instance, value) => {
  if (!instance)
    return;
  instance.toLoadCount = value;
};
const isSomethingLoading = (instance) => instance.loadingCount > 0;
const haveElementsToLoad = (instance) => instance.toLoadCount > 0;
const getSourceTags = (parentTag) => {
  let sourceTags = [];
  for (let i = 0, childTag; childTag = parentTag.children[i]; i += 1) {
    if (childTag.tagName === "SOURCE") {
      sourceTags.push(childTag);
    }
  }
  return sourceTags;
};
const forEachPictureSource = (element, fn) => {
  const parent = element.parentNode;
  if (!parent || parent.tagName !== "PICTURE") {
    return;
  }
  let sourceTags = getSourceTags(parent);
  sourceTags.forEach(fn);
};
const forEachVideoSource = (element, fn) => {
  let sourceTags = getSourceTags(element);
  sourceTags.forEach(fn);
};
const attrsSrc = [SRC];
const attrsSrcPoster = [SRC, POSTER];
const attrsSrcSrcsetSizes = [SRC, SRCSET, SIZES];
const attrsData = [DATA];
const hasOriginalAttrs = (element) => !!element[ORIGINALS];
const getOriginalAttrs = (element) => element[ORIGINALS];
const deleteOriginalAttrs = (element) => delete element[ORIGINALS];
const setOriginalsObject = (element, attributes) => {
  if (hasOriginalAttrs(element)) {
    return;
  }
  const originals = {};
  attributes.forEach((attribute) => {
    originals[attribute] = element.getAttribute(attribute);
  });
  element[ORIGINALS] = originals;
};
const saveOriginalBackgroundStyle = (element) => {
  if (hasOriginalAttrs(element)) {
    return;
  }
  element[ORIGINALS] = { backgroundImage: element.style.backgroundImage };
};
const setOrResetAttribute = (element, attrName, value) => {
  if (!value) {
    element.removeAttribute(attrName);
    return;
  }
  element.setAttribute(attrName, value);
};
const restoreOriginalAttrs = (element, attributes) => {
  if (!hasOriginalAttrs(element)) {
    return;
  }
  const originals = getOriginalAttrs(element);
  attributes.forEach((attribute) => {
    setOrResetAttribute(element, attribute, originals[attribute]);
  });
};
const restoreOriginalBgImage = (element) => {
  if (!hasOriginalAttrs(element)) {
    return;
  }
  const originals = getOriginalAttrs(element);
  element.style.backgroundImage = originals.backgroundImage;
};
const manageApplied = (element, settings, instance) => {
  addClass(element, settings.class_applied);
  setStatus(element, statusApplied);
  if (!instance)
    return;
  if (settings.unobserve_completed) {
    unobserve(element, settings);
  }
  safeCallback(settings.callback_applied, element, instance);
};
const manageLoading = (element, settings, instance) => {
  addClass(element, settings.class_loading);
  setStatus(element, statusLoading);
  if (!instance)
    return;
  updateLoadingCount(instance, 1);
  safeCallback(settings.callback_loading, element, instance);
};
const setAttributeIfValue = (element, attrName, value) => {
  if (!value) {
    return;
  }
  element.setAttribute(attrName, value);
};
const setImageAttributes = (element, settings) => {
  setAttributeIfValue(element, SIZES, getData(element, settings.data_sizes));
  setAttributeIfValue(element, SRCSET, getData(element, settings.data_srcset));
  setAttributeIfValue(element, SRC, getData(element, settings.data_src));
};
const setSourcesImg = (imgEl, settings) => {
  forEachPictureSource(imgEl, (sourceTag) => {
    setOriginalsObject(sourceTag, attrsSrcSrcsetSizes);
    setImageAttributes(sourceTag, settings);
  });
  setOriginalsObject(imgEl, attrsSrcSrcsetSizes);
  setImageAttributes(imgEl, settings);
};
const setSourcesIframe = (iframe, settings) => {
  setOriginalsObject(iframe, attrsSrc);
  setAttributeIfValue(iframe, SRC, getData(iframe, settings.data_src));
};
const setSourcesVideo = (videoEl, settings) => {
  forEachVideoSource(videoEl, (sourceEl) => {
    setOriginalsObject(sourceEl, attrsSrc);
    setAttributeIfValue(sourceEl, SRC, getData(sourceEl, settings.data_src));
  });
  setOriginalsObject(videoEl, attrsSrcPoster);
  setAttributeIfValue(videoEl, POSTER, getData(videoEl, settings.data_poster));
  setAttributeIfValue(videoEl, SRC, getData(videoEl, settings.data_src));
  videoEl.load();
};
const setSourcesObject = (object, settings) => {
  setOriginalsObject(object, attrsData);
  setAttributeIfValue(object, DATA, getData(object, settings.data_src));
};
const setBackground = (element, settings, instance) => {
  const bg1xValue = getData(element, settings.data_bg);
  const bgHiDpiValue = getData(element, settings.data_bg_hidpi);
  const bgDataValue = isHiDpi && bgHiDpiValue ? bgHiDpiValue : bg1xValue;
  if (!bgDataValue)
    return;
  element.style.backgroundImage = `url("${bgDataValue}")`;
  getTempImage(element).setAttribute(SRC, bgDataValue);
  manageLoading(element, settings, instance);
};
const setMultiBackground = (element, settings, instance) => {
  const bg1xValue = getData(element, settings.data_bg_multi);
  const bgHiDpiValue = getData(element, settings.data_bg_multi_hidpi);
  const bgDataValue = isHiDpi && bgHiDpiValue ? bgHiDpiValue : bg1xValue;
  if (!bgDataValue) {
    return;
  }
  element.style.backgroundImage = bgDataValue;
  manageApplied(element, settings, instance);
};
const setImgsetBackground = (element, settings, instance) => {
  const bgImgSetDataValue = getData(element, settings.data_bg_set);
  if (!bgImgSetDataValue) {
    return;
  }
  const imgSetValues = bgImgSetDataValue.split("|");
  let bgImageValues = imgSetValues.map((value) => `image-set(${value})`);
  element.style.backgroundImage = bgImageValues.join();
  if (element.style.backgroundImage === "") {
    bgImageValues = imgSetValues.map((value) => `-webkit-image-set(${value})`);
    element.style.backgroundImage = bgImageValues.join();
  }
  manageApplied(element, settings, instance);
};
const setSourcesFunctions = {
  IMG: setSourcesImg,
  IFRAME: setSourcesIframe,
  VIDEO: setSourcesVideo,
  OBJECT: setSourcesObject
};
const setSourcesNative = (element, settings) => {
  const setSourcesFunction = setSourcesFunctions[element.tagName];
  if (!setSourcesFunction) {
    return;
  }
  setSourcesFunction(element, settings);
};
const setSources = (element, settings, instance) => {
  const setSourcesFunction = setSourcesFunctions[element.tagName];
  if (!setSourcesFunction) {
    return;
  }
  setSourcesFunction(element, settings);
  manageLoading(element, settings, instance);
};
const elementsWithLoadEvent = ["IMG", "IFRAME", "VIDEO", "OBJECT"];
const hasLoadEvent = (element) => elementsWithLoadEvent.indexOf(element.tagName) > -1;
const checkFinish = (settings, instance) => {
  if (instance && !isSomethingLoading(instance) && !haveElementsToLoad(instance)) {
    safeCallback(settings.callback_finish, instance);
  }
};
const addEventListener = (element, eventName, handler) => {
  element.addEventListener(eventName, handler);
  element.llEvLisnrs[eventName] = handler;
};
const removeEventListener = (element, eventName, handler) => {
  element.removeEventListener(eventName, handler);
};
const hasEventListeners = (element) => {
  return !!element.llEvLisnrs;
};
const addEventListeners = (element, loadHandler2, errorHandler2) => {
  if (!hasEventListeners(element))
    element.llEvLisnrs = {};
  const loadEventName = element.tagName === "VIDEO" ? "loadeddata" : "load";
  addEventListener(element, loadEventName, loadHandler2);
  addEventListener(element, "error", errorHandler2);
};
const removeEventListeners = (element) => {
  if (!hasEventListeners(element)) {
    return;
  }
  const eventListeners = element.llEvLisnrs;
  for (let eventName in eventListeners) {
    const handler = eventListeners[eventName];
    removeEventListener(element, eventName, handler);
  }
  delete element.llEvLisnrs;
};
const doneHandler = (element, settings, instance) => {
  deleteTempImage(element);
  updateLoadingCount(instance, -1);
  decreaseToLoadCount(instance);
  removeClass(element, settings.class_loading);
  if (settings.unobserve_completed) {
    unobserve(element, instance);
  }
};
const loadHandler = (event, element, settings, instance) => {
  const goingNative = hasStatusNative(element);
  doneHandler(element, settings, instance);
  addClass(element, settings.class_loaded);
  setStatus(element, statusLoaded);
  safeCallback(settings.callback_loaded, element, instance);
  if (!goingNative)
    checkFinish(settings, instance);
};
const errorHandler = (event, element, settings, instance) => {
  const goingNative = hasStatusNative(element);
  doneHandler(element, settings, instance);
  addClass(element, settings.class_error);
  setStatus(element, statusError);
  safeCallback(settings.callback_error, element, instance);
  if (settings.restore_on_error)
    restoreOriginalAttrs(element, attrsSrcSrcsetSizes);
  if (!goingNative)
    checkFinish(settings, instance);
};
const addOneShotEventListeners = (element, settings, instance) => {
  const elementToListenTo = getTempImage(element) || element;
  if (hasEventListeners(elementToListenTo)) {
    return;
  }
  const _loadHandler = (event) => {
    loadHandler(event, element, settings, instance);
    removeEventListeners(elementToListenTo);
  };
  const _errorHandler = (event) => {
    errorHandler(event, element, settings, instance);
    removeEventListeners(elementToListenTo);
  };
  addEventListeners(elementToListenTo, _loadHandler, _errorHandler);
};
const loadBackground = (element, settings, instance) => {
  addTempImage(element);
  addOneShotEventListeners(element, settings, instance);
  saveOriginalBackgroundStyle(element);
  setBackground(element, settings, instance);
  setMultiBackground(element, settings, instance);
  setImgsetBackground(element, settings, instance);
};
const loadRegular = (element, settings, instance) => {
  addOneShotEventListeners(element, settings, instance);
  setSources(element, settings, instance);
};
const load = (element, settings, instance) => {
  if (hasLoadEvent(element)) {
    loadRegular(element, settings, instance);
  } else {
    loadBackground(element, settings, instance);
  }
};
const loadNative = (element, settings, instance) => {
  element.setAttribute("loading", "lazy");
  addOneShotEventListeners(element, settings, instance);
  setSourcesNative(element, settings);
  setStatus(element, statusNative);
};
const removeImageAttributes = (element) => {
  element.removeAttribute(SRC);
  element.removeAttribute(SRCSET);
  element.removeAttribute(SIZES);
};
const resetSourcesImg = (element) => {
  forEachPictureSource(element, (sourceTag) => {
    removeImageAttributes(sourceTag);
  });
  removeImageAttributes(element);
};
const restoreImg = (imgEl) => {
  forEachPictureSource(imgEl, (sourceEl) => {
    restoreOriginalAttrs(sourceEl, attrsSrcSrcsetSizes);
  });
  restoreOriginalAttrs(imgEl, attrsSrcSrcsetSizes);
};
const restoreVideo = (videoEl) => {
  forEachVideoSource(videoEl, (sourceEl) => {
    restoreOriginalAttrs(sourceEl, attrsSrc);
  });
  restoreOriginalAttrs(videoEl, attrsSrcPoster);
  videoEl.load();
};
const restoreIframe = (iframeEl) => {
  restoreOriginalAttrs(iframeEl, attrsSrc);
};
const restoreObject = (objectEl) => {
  restoreOriginalAttrs(objectEl, attrsData);
};
const restoreFunctions = {
  IMG: restoreImg,
  IFRAME: restoreIframe,
  VIDEO: restoreVideo,
  OBJECT: restoreObject
};
const restoreAttributes = (element) => {
  const restoreFunction = restoreFunctions[element.tagName];
  if (!restoreFunction) {
    restoreOriginalBgImage(element);
    return;
  }
  restoreFunction(element);
};
const resetClasses = (element, settings) => {
  if (hasEmptyStatus(element) || hasStatusNative(element)) {
    return;
  }
  removeClass(element, settings.class_entered);
  removeClass(element, settings.class_exited);
  removeClass(element, settings.class_applied);
  removeClass(element, settings.class_loading);
  removeClass(element, settings.class_loaded);
  removeClass(element, settings.class_error);
};
const restore = (element, settings) => {
  restoreAttributes(element);
  resetClasses(element, settings);
  resetStatus(element);
  deleteOriginalAttrs(element);
};
const cancelLoading = (element, entry, settings, instance) => {
  if (!settings.cancel_on_exit)
    return;
  if (!hasStatusLoading(element))
    return;
  if (element.tagName !== "IMG")
    return;
  removeEventListeners(element);
  resetSourcesImg(element);
  restoreImg(element);
  removeClass(element, settings.class_loading);
  updateLoadingCount(instance, -1);
  resetStatus(element);
  safeCallback(settings.callback_cancel, element, entry, instance);
};
const onEnter = (element, entry, settings, instance) => {
  const dontLoad = hadStartedLoading(element);
  setStatus(element, statusEntered);
  addClass(element, settings.class_entered);
  removeClass(element, settings.class_exited);
  unobserveEntered(element, settings, instance);
  safeCallback(settings.callback_enter, element, entry, instance);
  if (dontLoad)
    return;
  load(element, settings, instance);
};
const onExit = (element, entry, settings, instance) => {
  if (hasEmptyStatus(element))
    return;
  addClass(element, settings.class_exited);
  cancelLoading(element, entry, settings, instance);
  safeCallback(settings.callback_exit, element, entry, instance);
};
const tagsWithNativeLazy = ["IMG", "IFRAME", "VIDEO"];
const shouldUseNative = (settings) => settings.use_native && "loading" in HTMLImageElement.prototype;
const loadAllNative = (elements, settings, instance) => {
  elements.forEach((element) => {
    if (tagsWithNativeLazy.indexOf(element.tagName) === -1) {
      return;
    }
    loadNative(element, settings, instance);
  });
  setToLoadCount(instance, 0);
};
const isIntersecting = (entry) => entry.isIntersecting || entry.intersectionRatio > 0;
const getObserverSettings = (settings) => ({
  root: settings.container === document ? null : settings.container,
  rootMargin: settings.thresholds || settings.threshold + "px"
});
const intersectionHandler = (entries, settings, instance) => {
  entries.forEach((entry) => isIntersecting(entry) ? onEnter(entry.target, entry, settings, instance) : onExit(entry.target, entry, settings, instance));
};
const observeElements = (observer, elements) => {
  elements.forEach((element) => {
    observer.observe(element);
  });
};
const updateObserver = (observer, elementsToObserve) => {
  resetObserver(observer);
  observeElements(observer, elementsToObserve);
};
const setObserver = (settings, instance) => {
  if (!supportsIntersectionObserver || shouldUseNative(settings)) {
    return;
  }
  instance._observer = new IntersectionObserver((entries) => {
    intersectionHandler(entries, settings, instance);
  }, getObserverSettings(settings));
};
const toArray = (nodeSet) => Array.prototype.slice.call(nodeSet);
const queryElements = (settings) => settings.container.querySelectorAll(settings.elements_selector);
const excludeManagedElements = (elements) => toArray(elements).filter(hasEmptyStatus);
const hasError = (element) => hasStatusError(element);
const filterErrorElements = (elements) => toArray(elements).filter(hasError);
const getElementsToLoad = (elements, settings) => excludeManagedElements(elements || queryElements(settings));
const retryLazyLoad = (settings, instance) => {
  const errorElements = filterErrorElements(queryElements(settings));
  errorElements.forEach((element) => {
    removeClass(element, settings.class_error);
    resetStatus(element);
  });
  instance.update();
};
const setOnlineCheck = (settings, instance) => {
  if (!runningOnBrowser) {
    return;
  }
  instance._onlineHandler = () => {
    retryLazyLoad(settings, instance);
  };
  window.addEventListener("online", instance._onlineHandler);
};
const resetOnlineCheck = (instance) => {
  if (!runningOnBrowser) {
    return;
  }
  window.removeEventListener("online", instance._onlineHandler);
};
const LazyLoad = function(customSettings, elements) {
  const settings = getExtendedSettings(customSettings);
  this._settings = settings;
  this.loadingCount = 0;
  setObserver(settings, this);
  setOnlineCheck(settings, this);
  this.update(elements);
};
LazyLoad.prototype = {
  update: function(givenNodeset) {
    const settings = this._settings;
    const elementsToLoad = getElementsToLoad(givenNodeset, settings);
    setToLoadCount(this, elementsToLoad.length);
    if (isBot || !supportsIntersectionObserver) {
      this.loadAll(elementsToLoad);
      return;
    }
    if (shouldUseNative(settings)) {
      loadAllNative(elementsToLoad, settings, this);
      return;
    }
    updateObserver(this._observer, elementsToLoad);
  },
  destroy: function() {
    if (this._observer) {
      this._observer.disconnect();
    }
    resetOnlineCheck(this);
    queryElements(this._settings).forEach((element) => {
      deleteOriginalAttrs(element);
    });
    delete this._observer;
    delete this._settings;
    delete this._onlineHandler;
    delete this.loadingCount;
    delete this.toLoadCount;
  },
  loadAll: function(elements) {
    const settings = this._settings;
    const elementsToLoad = getElementsToLoad(elements, settings);
    elementsToLoad.forEach((element) => {
      unobserve(element, this);
      load(element, settings, this);
    });
  },
  restoreAll: function() {
    const settings = this._settings;
    queryElements(settings).forEach((element) => {
      restore(element, settings);
    });
  }
};
LazyLoad.load = (element, customSettings) => {
  const settings = getExtendedSettings(customSettings);
  load(element, settings);
};
LazyLoad.resetStatus = (element) => {
  resetStatus(element);
};
if (runningOnBrowser) {
  autoInitialize(LazyLoad, window.lazyLoadOptions);
}
class DocsViewer {
  constructor({ context, readonly, box, pages, onNewPageIndex, onPlay }) {
    this.pageIndex = 0;
    this.namespace = "netless-app-docs-viewer";
    this.isShowPreview = false;
    this.isSmallBox = false;
    this.sideEffect = new SideEffectManager();
    if (pages.length <= 0) {
      throw new Error("[DocsViewer] Empty pages.");
    }
    this.context = context;
    this.readonly = readonly;
    this.box = box;
    this.pages = pages;
    this.onNewPageIndex = onNewPageIndex;
    this.onPlay = onPlay;
    this.onPageIndexChanged = () => void 0;
    this.render();
  }
  mount() {
    this.box.mountContent(this.$content);
    this.box.mountFooter(this.$footer);
    this.box.events.on("maximized", (max) => {
      this.$footer.classList.toggle(this.wrapClassName("hide"), max);
    });
    this.$footer.classList.toggle(this.wrapClassName("hide"), this.box.maximized);
  }
  unmount() {
    this.$content.remove();
    this.$footer.remove();
  }
  setReadonly(readonly) {
    if (this.readonly !== readonly) {
      this.readonly = readonly;
      this.$content.classList.toggle(this.wrapClassName("readonly"), readonly);
      this.$footer.classList.toggle(this.wrapClassName("readonly"), readonly);
    }
  }
  destroy() {
    this.sideEffect.flushAll();
    this.unmount();
  }
  setPageIndex(pageIndex) {
    if (!Number.isNaN(pageIndex)) {
      this.scrollPreview(pageIndex);
      this.pageIndex = pageIndex;
      this.$pageNumberInput.textContent = String(pageIndex + 1);
      this.onPageIndexChanged(pageIndex);
      this.$btnPageBack.classList.toggle(this.wrapClassName("footer-btn-disable"), pageIndex == 0);
      this.$btnPageNext.classList.toggle(this.wrapClassName("footer-btn-disable"), pageIndex == this.pages.length - 1);
    }
  }
  scrollPreview(pageIndex) {
    var _a;
    const previews = (_a = this.$preview) == null ? void 0 : _a.querySelectorAll("." + this.wrapClassName("preview-page"));
    previews == null ? void 0 : previews.forEach((node, i) => {
      var _a2;
      (_a2 = node.querySelector("img")) == null ? void 0 : _a2.classList.toggle(this.wrapClassName("active"), Number(pageIndex) == i);
    });
    if (!previews)
      return;
    const imgNode = Array.prototype.slice.call(previews).find((node) => node.querySelector("img").className.includes(this.wrapClassName("active")));
    if (!imgNode)
      return;
    const parentRect = this.$preview.getBoundingClientRect();
    const elementRect = imgNode == null ? void 0 : imgNode.getBoundingClientRect();
    const isInView = elementRect.top >= parentRect.top && elementRect.bottom <= parentRect.bottom;
    if (!isInView) {
      this.$preview.scrollTo({
        top: imgNode.offsetTop - 16,
        behavior: this.isShowPreview ? "smooth" : "auto"
      });
    }
  }
  setSmallBox(isSmallBox) {
    if (this.isSmallBox !== isSmallBox) {
      this.isSmallBox = isSmallBox;
      this.$footer.classList.toggle(this.wrapClassName("float-footer"), isSmallBox);
    }
  }
  render() {
    this.renderContent();
    this.renderFooter();
    return this.$content;
  }
  renderContent() {
    if (!this.$content) {
      const $content = document.createElement("div");
      $content.className = this.wrapClassName("content");
      this.$content = $content;
      if (this.readonly) {
        $content.classList.add(this.wrapClassName("readonly"));
      }
    }
    return this.$content;
  }
  renderPreview() {
    if (!this.$preview) {
      const $preview = document.createElement("div");
      $preview.className = this.wrapClassName("preview") + " tele-fancy-scrollbar";
      this.$preview = $preview;
      const title = document.createElement("div");
      title.className = this.wrapClassName("preview-head");
      const h3 = document.createElement("h3");
      h3.textContent = this.box.title;
      title.appendChild(h3);
      this.$preview.appendChild(title);
      const pageClassName = this.wrapClassName("preview-page");
      const pageNameClassName = this.wrapClassName("preview-page-name");
      this.pages.forEach((page, i) => {
        var _a;
        const previewSRC = (_a = page.thumbnail) != null ? _a : page.src.startsWith("ppt") ? void 0 : page.src;
        if (!previewSRC) {
          return;
        }
        const pageIndex = String(i);
        const $page = document.createElement("a");
        $page.className = pageClassName + " " + this.wrapClassName(`preview-page-${i}`);
        $page.setAttribute("href", "#");
        $page.dataset.pageIndex = pageIndex;
        const $name = document.createElement("span");
        $name.className = pageNameClassName;
        $name.textContent = String(i + 1);
        $name.dataset.pageIndex = pageIndex;
        const $img = document.createElement("img");
        $img.width = page.width;
        $img.height = page.height;
        $img.dataset.src = previewSRC;
        $img.dataset.pageIndex = pageIndex;
        $page.appendChild($name);
        $page.appendChild($img);
        $preview.appendChild($page);
        $img.classList.toggle(this.wrapClassName("active"), this.pageIndex == i);
      });
      this.sideEffect.addEventListener($preview, "click", (ev) => {
        var _a;
        if (this.readonly) {
          return;
        }
        const pageIndex = (_a = ev.target.dataset) == null ? void 0 : _a.pageIndex;
        if (pageIndex) {
          ev.preventDefault();
          ev.stopPropagation();
          ev.stopImmediatePropagation();
          this.onNewPageIndex(Number(pageIndex));
        }
      });
    }
    return this.$preview;
  }
  renderPreviewMask() {
    if (!this.$previewMask) {
      this.$previewMask = document.createElement("div");
      this.$previewMask.className = this.wrapClassName("preview-mask");
      this.sideEffect.addEventListener(this.$previewMask, "click", (ev) => {
        if (this.readonly) {
          return;
        }
        if (ev.target === this.$previewMask) {
          this.togglePreview(false);
        }
      });
    }
    return this.$previewMask;
  }
  renderFooter() {
    if (!this.$footer) {
      const $footer = document.createElement("div");
      $footer.className = this.wrapClassName("footer");
      this.$footer = $footer;
      if (this.readonly) {
        $footer.classList.add(this.wrapClassName("readonly"));
      }
      if (this.isSmallBox) {
        $footer.classList.add(this.wrapClassName("float-footer"));
      }
      if (this.pages.some((page) => page.thumbnail || !page.src.startsWith("ppt")))
        ;
      const $pageJumps = document.createElement("div");
      $pageJumps.className = this.wrapClassName("page-jumps");
      const $btnPageBack = this.renderFooterBtn("btn-page-back", arrowLeftSVG(this.namespace));
      this.sideEffect.addEventListener($btnPageBack, "click", () => {
        if (this.readonly) {
          return;
        }
        this.onNewPageIndex(this.pageIndex - 1);
      });
      $pageJumps.appendChild($btnPageBack);
      this.$btnPageBack = $btnPageBack;
      if (this.onPlay) {
        const $btnPlay = this.renderFooterBtn("btn-page-play", playSVG(this.namespace), pauseSVG(this.namespace));
        const returnPlay = () => {
          this.sideEffect.setTimeout(() => {
            $btnPlay.classList.toggle(this.wrapClassName("footer-btn-playing"), false);
          }, 500, "returnPlay");
        };
        this.sideEffect.addEventListener($btnPlay, "click", () => {
          var _a;
          if (this.readonly) {
            return;
          }
          $btnPlay.classList.toggle(this.wrapClassName("footer-btn-playing"), true);
          (_a = this.onPlay) == null ? void 0 : _a.call(this);
          returnPlay();
        });
        this.$footer.appendChild($btnPlay);
      }
      const $pageNumber = document.createElement("div");
      $pageNumber.className = this.wrapClassName("page-number");
      const $pageNumberInput = document.createElement("span");
      $pageNumberInput.className = this.wrapClassName("page-number-input");
      $pageNumberInput.textContent = String(this.pageIndex + 1);
      this.$pageNumberInput = $pageNumberInput;
      const $totalPage = document.createElement("span");
      $totalPage.textContent = " / " + this.pages.length;
      $pageNumber.appendChild($pageNumberInput);
      $pageNumber.appendChild($totalPage);
      $pageJumps.appendChild($pageNumber);
      const $btnPageNext = this.renderFooterBtn("btn-page-next", arrowRightSVG(this.namespace));
      this.sideEffect.addEventListener($btnPageNext, "click", () => {
        if (this.readonly) {
          return;
        }
        this.onNewPageIndex(this.pageIndex + 1);
      });
      $pageJumps.appendChild($btnPageNext);
      this.$btnPageNext = $btnPageNext;
      this.$footer.appendChild($pageJumps);
    }
    return this.$footer;
  }
  renderFooterBtn(className, $icon, $iconActive) {
    const $btn = document.createElement("button");
    $btn.className = this.wrapClassName("footer-btn") + " " + this.wrapClassName(className);
    $btn.appendChild($icon);
    if ($iconActive) {
      $btn.appendChild($iconActive);
    }
    return $btn;
  }
  togglePreview(isShowPreview) {
    var _a, _b, _c, _d, _e, _f, _g;
    this.isShowPreview = isShowPreview != null ? isShowPreview : !this.isShowPreview;
    console.log((_a = this.context) == null ? void 0 : _a.extendWrapper);
    this.$content.classList.toggle(this.wrapClassName("preview-active"), this.isShowPreview);
    if (this.isShowPreview) {
      if ((_b = this.context) == null ? void 0 : _b.extendWrapper) {
        (_d = (_c = this.context) == null ? void 0 : _c.extendWrapper) == null ? void 0 : _d.appendChild(this.renderPreviewMask());
        (_f = (_e = this.context) == null ? void 0 : _e.extendWrapper) == null ? void 0 : _f.appendChild(this.renderPreview());
        this.context.extendWrapper.style.display = "block";
      }
      setTimeout(() => {
        const $previewPage = this.$preview.querySelector("." + this.wrapClassName(`preview-page-${this.pageIndex}`));
        if ($previewPage) {
          this.sideEffect.add(() => {
            const previewLazyLoad = new LazyLoad({
              container: this.$preview,
              elements_selector: `.${this.wrapClassName("preview-page>img")}`
            });
            return () => previewLazyLoad.destroy();
          }, "preview-lazyload");
          this.$preview.scrollTo({
            top: $previewPage.offsetTop - 16
          });
        }
        if ($previewPage) {
          this.$preview.scrollTo({
            top: $previewPage.offsetTop - 16
          });
        }
      });
    } else {
      if ((_g = this.context) == null ? void 0 : _g.extendWrapper) {
        this.context.extendWrapper.style.display = "none";
        this.context.extendWrapper.innerHTML = "";
      }
    }
  }
  wrapClassName(className) {
    return `${this.namespace}-${className}`;
  }
}
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
function flattenEvent(ev) {
  return ev.touches ? ev.touches[0] : ev;
}
function preventEvent(ev) {
  ev.stopPropagation();
  if (ev.cancelable) {
    ev.preventDefault();
  }
}
function isEditable(el) {
  if (!el)
    return false;
  const tagName = el.tagName;
  return tagName === "INPUT" || tagName === "TEXTAREA" || tagName === "SELECT";
}
class Stepper {
  constructor(config) {
    var _a, _b, _c;
    this.velocity = 0;
    this.paused = true;
    this._animationFrameID = null;
    this._loopTimestamp = 0;
    this.looper = (timestamp) => {
      if (this.paused) {
        return;
      }
      let frames = Math.floor((timestamp - this._loopTimestamp) / 1e3 * 60) + 1;
      this._loopTimestamp = timestamp;
      while (frames-- > 0) {
        this.stepper();
      }
      this.onStep(this.current, this);
      if (!this.paused && this.current !== this.target) {
        window.requestAnimationFrame(this.looper);
      }
    };
    this.current = (_a = config.start) != null ? _a : 0;
    this.target = this.current;
    this.stiffness = (_b = config.stiffness) != null ? _b : 170;
    this.damping = (_c = config.damping) != null ? _c : 26;
    this.onStep = config.onStep;
  }
  stepTo(target, start) {
    if (this.paused && start != null) {
      this.current = start;
    }
    this.paused = false;
    this.target = target;
    this.onStep(this.current, this);
    this._loopTimestamp = Date.now();
    window.requestAnimationFrame(this.looper);
  }
  pause() {
    this.paused = true;
  }
  destroy() {
    this.pause();
  }
  stepper() {
    const fSpring = -this.stiffness * (this.current - this.target);
    const fDamper = -this.damping * this.velocity;
    const newVelocity = this.velocity + (fSpring + fDamper) / 60;
    const newCurrent = this.current + newVelocity / 60;
    if (Math.abs(newVelocity - 0) < 0.01 && Math.abs(newCurrent - this.target) < 0.01) {
      this.current = this.target;
      this.velocity = 0;
    } else {
      this.current = newCurrent;
      this.velocity = newVelocity;
    }
  }
}
class PageEl {
  constructor(index, page, scale, pagesIntrinsicWidth) {
    this.scale = 1;
    this.lastVisit = Date.now();
    this.pageOffsetY = 0;
    this.pageOffsetX = 0;
    this.visible = true;
    this.index = index;
    this.page = page;
    this.scale = scale;
    this.pageOffsetX = (pagesIntrinsicWidth - page.width) / 2;
    const $page = document.createElement("div");
    $page.className = "page-renderer-page";
    $page.dataset.index = `${index}`;
    $page.style.width = `${page.width * scale}px`;
    $page.style.height = `${page.height * scale}px`;
    if (page.thumbnail) {
      $page.style.backgroundImage = `url("${page.thumbnail}")`;
    }
    const $img = document.createElement("img");
    $img.className = "page-renderer-page-img";
    $img.width = page.width;
    $img.height = page.height;
    $img.src = page.src;
    $page.appendChild($img);
    this.$page = $page;
  }
  translateY(pageOffsetY) {
    if (Math.abs(pageOffsetY - this.pageOffsetY) >= 1e-3) {
      this.pageOffsetY = pageOffsetY;
      this.$page.style.transform = `translate(${this.pageOffsetX * this.scale}px, ${this.pageOffsetY * this.scale}px)`;
    }
  }
  setScale(scale) {
    if (Math.abs(scale - this.scale) >= 1e-3) {
      this.scale = scale;
      this.$page.style.width = `${this.page.width * this.scale}px`;
      this.$page.style.height = `${this.page.height * this.scale}px`;
      this.$page.style.transform = `translate(${this.pageOffsetX * this.scale}px, ${this.pageOffsetY * this.scale}px)`;
    }
  }
  setVisible(visible) {
    if (visible !== this.visible) {
      this.visible = visible;
      this.$page.style.opacity = visible ? "1" : "0";
    }
  }
}
const schedule = window.requestIdleCallback || ((handler) => window.setTimeout(handler, 5e3));
const cancelSchedule = window.cancelIdleCallback || window.clearTimeout;
class PageElManager {
  constructor(pages, pagesIntrinsicWidth, scale) {
    this.pages = pages;
    this.pagesIntrinsicWidth = pagesIntrinsicWidth;
    this.scale = scale;
    this.els = /* @__PURE__ */ new Map();
    this.maxElCount = 200;
    this.gcTimer = null;
    this.gc = () => {
      this.gcTimer = null;
      if (this.els.size > this.maxElCount) {
        const sortedEls = [...this.els.values()].sort((x, y) => y.lastVisit - x.lastVisit);
        for (let i = Math.floor(this.maxElCount / 4); i < sortedEls.length; i++) {
          this.els.delete(sortedEls[i].index);
        }
      }
    };
  }
  getEl(index) {
    let el = this.els.get(index);
    if (!el) {
      el = new PageEl(index, this.pages[index], this.scale, this.pagesIntrinsicWidth);
      this.els.set(index, el);
    }
    el.lastVisit = Date.now();
    if (this.els.size > this.maxElCount && this.gcTimer === null) {
      this.gcTimer = schedule(this.gc);
    }
    return el;
  }
  setScale(scale) {
    if (scale !== this.scale) {
      this.scale = scale;
      this.els.forEach((pageEl) => pageEl.setScale(scale));
    }
  }
  destroy() {
    this.els.clear();
    if (this.gcTimer !== null) {
      cancelSchedule(this.gcTimer);
      this.gcTimer = null;
    }
  }
}
class PageRenderer {
  constructor(config) {
    this._hwaTimeout = NaN;
    this._turnOffHWA = () => {
      window.clearTimeout(this._hwaTimeout);
      this._hwaTimeout = NaN;
      this.$pages.classList.toggle("is-hwa", false);
    };
    this.pagesScrollTop = config.pagesScrollTop || 0;
    this.containerWidth = config.containerWidth || 1;
    this.containerHeight = config.containerHeight || 1;
    this.pages = config.pages.map((page) => {
      if (page.thumbnail) {
        return page;
      }
      try {
        const url = new URL(page.src);
        url.searchParams.set("x-oss-process", "image/resize,l_50");
        return __spreadProps(__spreadValues({}, page), { thumbnail: url.toString() });
      } catch (e) {
        console.error(e);
        return page;
      }
    });
    const pagesIntrinsicYs = Array(this.pages.length);
    let pagesMinHeight = Infinity;
    let pagesIntrinsicWidth = 0;
    this.pagesIntrinsicHeight = this.pages.reduce((pageY, page, i) => {
      pagesIntrinsicYs[i] = pageY;
      if (page.width > pagesIntrinsicWidth) {
        pagesIntrinsicWidth = page.width;
      }
      if (page.height <= pagesMinHeight) {
        pagesMinHeight = page.height;
      }
      return pageY + page.height;
    }, 0);
    this.pagesIntrinsicWidth = pagesIntrinsicWidth;
    this.pagesMinHeight = pagesMinHeight;
    this.pagesIntrinsicYs = pagesIntrinsicYs;
    this.scale = this._calcScale();
    this.threshold = this._calcThreshold();
    this.onPageIndexChanged = config.onPageIndexChanged;
    this.pageScrollIndex = 0;
    if (this.pagesScrollTop !== 0) {
      this.pageScrollIndex = this.findScrollPageIndex();
      if (this.onPageIndexChanged && this.pageScrollIndex > 0) {
        this.onPageIndexChanged(this.pageScrollIndex);
      }
    }
    this.pageElManager = new PageElManager(this.pages, pagesIntrinsicWidth, this.scale);
    this.$pages = this.renderPages();
  }
  setContainerSize(width, height) {
    if (width > 0 && height > 0) {
      if (width !== this.containerWidth || height !== this.containerHeight) {
        this.containerWidth = width;
        this.containerHeight = height;
        this.$pages.style.width = `${this.containerWidth}px`;
        this.$pages.style.height = `${this.containerHeight}px`;
        this.scale = this._calcScale();
        this.threshold = this._calcThreshold();
        this.pageElManager.setScale(this.scale);
        if (this.$pages.parentElement) {
          this.pagesScrollTo(this.pagesScrollTop, true);
        }
      }
    }
  }
  renderPages() {
    const $pages = document.createElement("div");
    $pages.className = "page-renderer-pages-container";
    $pages.style.width = `${this.containerWidth}px`;
    $pages.style.height = `${this.containerHeight}px`;
    return $pages;
  }
  pagesScrollTo(pagesScrollTop, force) {
    pagesScrollTop = clamp(pagesScrollTop, 0, this.pagesIntrinsicHeight - this.containerHeight / this.scale);
    if (force || Math.abs(pagesScrollTop - this.pagesScrollTop) >= 1e-3) {
      this._turnOnHWA();
      this.pagesScrollTop = pagesScrollTop;
      const pageScrollIndex = this.findScrollPageIndex();
      const startIndex = Math.max(pageScrollIndex - this.threshold, 0);
      const endIndex = Math.min(pageScrollIndex + this.threshold, this.pages.length - 1);
      for (let i = 0; i < this.$pages.children.length; i++) {
        const $page = this.$pages.children[i];
        const index = Number($page.dataset.index);
        if (!(index >= startIndex && index <= endIndex)) {
          $page.remove();
          i--;
        }
      }
      for (let i = startIndex; i <= endIndex; i++) {
        const pageEl = this.pageElManager.getEl(i);
        if (pageEl.$page.parentElement !== this.$pages) {
          this.$pages.appendChild(pageEl.$page);
        }
        pageEl.translateY(this.pagesIntrinsicYs[i] - this.pagesScrollTop);
      }
      if (pageScrollIndex !== this.pageScrollIndex) {
        this.pageScrollIndex = pageScrollIndex;
        if (this.onPageIndexChanged) {
          this.onPageIndexChanged(pageScrollIndex);
        }
      }
    }
  }
  findScrollPageIndex() {
    for (let i = 0; i < this.pagesIntrinsicYs.length; i++) {
      if (this.pagesIntrinsicYs[i] + this.pages[i].height - this.pagesScrollTop >= 1e-3) {
        return i;
      }
    }
    return this.pagesIntrinsicYs.length - 1;
  }
  mount($parent) {
    $parent.appendChild(this.$pages);
    this.pagesScrollTo(this.pagesScrollTop, true);
  }
  unmount() {
    this.$pages.remove();
  }
  destroy() {
    this.unmount();
    this.onPageIndexChanged = void 0;
    this.pageElManager.destroy();
    if (this._hwaTimeout) {
      window.clearTimeout(this._hwaTimeout);
      this._hwaTimeout = NaN;
    }
  }
  _calcScale() {
    return this.containerWidth / this.pagesIntrinsicWidth || 1;
  }
  _calcThreshold() {
    return clamp(Math.ceil(this.containerHeight / this.scale / this.pagesMinHeight / 2), 1, this.pages.length);
  }
  _turnOnHWA() {
    if (this._hwaTimeout) {
      window.clearTimeout(this._hwaTimeout);
    } else {
      this.$pages.classList.toggle("is-hwa", true);
    }
    this._hwaTimeout = window.setTimeout(this._turnOffHWA, 1e3);
  }
}
const SCROLLBAR_DEFAULT_MIN_HEIGHT = 30;
class ScrollBar {
  constructor(config) {
    this.sideEffect = new SideEffectManager();
    this.pagesScrollTop = config.pagesScrollTop || 0;
    this.containerWidth = config.containerWidth || 1;
    this.containerHeight = config.containerHeight || 1;
    this.pagesWidth = config.pagesWidth || 1;
    this.pagesHeight = config.pagesHeight || 1;
    this.scale = this._calcScale();
    this.scrollbarMinHeight = config.scrollbarMinHeight || SCROLLBAR_DEFAULT_MIN_HEIGHT;
    this.scrollbarHeight = this._calcScrollbarHeight();
    this.readonly = config.readonly;
    this.wrapClassName = config.wrapClassName;
    this.onDragScroll = config.onDragScroll;
    this.$scrollbar = this.renderScrollbar();
  }
  mount($parent) {
    $parent.appendChild(this.$scrollbar);
    this.pagesScrollTo(this.pagesScrollTop, true);
  }
  unmount() {
    this.$scrollbar.remove();
  }
  setReadonly(readonly) {
    this.readonly = readonly;
  }
  setContainerSize(width, height) {
    if (width > 0 && height > 0) {
      if (width !== this.containerWidth || height !== this.containerHeight) {
        this.containerWidth = width;
        this.containerHeight = height;
        this.scale = this._calcScale();
        this._updateScrollbarHeight();
        if (this.$scrollbar.parentElement) {
          this.pagesScrollTo(this.pagesScrollTop, true);
        }
      }
    }
  }
  pagesScrollTo(pagesScrollTop, force) {
    pagesScrollTop = clamp(pagesScrollTop, 0, this.pagesHeight - this.containerHeight / this.scale);
    if (force || Math.abs(pagesScrollTop - this.pagesScrollTop) >= 1e-3) {
      this.pagesScrollTop = pagesScrollTop;
      const elScrollTop = this.pagesScrollTop * this.scale;
      const elPagesHeight = this.pagesHeight * this.scale;
      const translateY = elScrollTop / (elPagesHeight - this.containerHeight) * (this.containerHeight - this.scrollbarHeight);
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(() => {
          this.$scrollbar.style.transform = `translateY(${translateY}px)`;
        });
      } else {
        this.$scrollbar.style.transform = `translateY(${translateY}px)`;
      }
    }
  }
  destroy() {
    this.unmount();
    this.onDragScroll = void 0;
    this.sideEffect.flushAll();
  }
  renderScrollbar() {
    const $scrollbar = document.createElement("button");
    $scrollbar.className = this.wrapClassName("scrollbar");
    $scrollbar.style.minHeight = `${this.scrollbarMinHeight}px`;
    $scrollbar.style.height = `${this.scrollbarHeight}px`;
    const trackStart = (ev) => {
      if (this.readonly) {
        return;
      }
      if (ev.button != null && ev.button !== 0) {
        return;
      }
      preventEvent(ev);
      const draggingClassName = this.wrapClassName("scrollbar-dragging");
      $scrollbar.classList.toggle(draggingClassName, true);
      const startTop = this.pagesScrollTop;
      const { clientY: startY } = flattenEvent(ev);
      const tracking = (ev2) => {
        if (this.readonly) {
          return;
        }
        const { clientY } = flattenEvent(ev2);
        const offsetY = (clientY - startY) / this.scale;
        if (Math.abs(offsetY) > 0 && this.onDragScroll) {
          this.onDragScroll(startTop + offsetY * (this.pagesHeight * this.scale / this.containerHeight));
        }
      };
      const trackEnd = () => {
        $scrollbar.classList.toggle(draggingClassName, false);
        window.removeEventListener("mousemove", tracking, true);
        window.removeEventListener("touchmove", tracking, true);
        window.removeEventListener("mouseup", trackEnd, true);
        window.removeEventListener("touchend", trackEnd, true);
        window.removeEventListener("touchcancel", trackEnd, true);
      };
      window.addEventListener("mousemove", tracking, true);
      window.addEventListener("touchmove", tracking, true);
      window.addEventListener("mouseup", trackEnd, true);
      window.addEventListener("touchend", trackEnd, true);
      window.addEventListener("touchcancel", trackEnd, true);
    };
    this.sideEffect.addEventListener($scrollbar, "mousedown", trackStart);
    this.sideEffect.addEventListener($scrollbar, "touchstart", trackStart);
    return $scrollbar;
  }
  _calcScale() {
    return this.containerWidth / this.pagesWidth || 1;
  }
  _calcScrollbarHeight() {
    return clamp(this.containerHeight / (this.pagesHeight * this.scale) * this.containerHeight, this.scrollbarMinHeight, this.containerHeight);
  }
  _updateScrollbarHeight() {
    const newHeight = this._calcScrollbarHeight();
    if (Math.abs(newHeight - this.scrollbarHeight) > 1e-3) {
      this.scrollbarHeight = newHeight;
      this.$scrollbar.style.height = `${newHeight}px`;
    }
  }
}
const ResizeObserver = window.ResizeObserver || ResizeObserver$1;
const RATIO_BASE_CONTAINER_HEIGHT = 640;
class StaticDocsViewer {
  constructor({
    context,
    whiteboardView,
    readonly,
    box,
    pages,
    pageScrollTop = 0,
    mountWhiteboard,
    onUserScroll,
    baseScenePath,
    appId
  }) {
    this.sideEffect = new SideEffectManager();
    this.userScrolling = false;
    this.onNewPageIndex = (index) => {
      this.scrollToPage(index);
    };
    this.toPdf = async () => {
      const whiteSnapshotCanvas = document.createElement("canvas");
      const whiteCtx = whiteSnapshotCanvas.getContext("2d");
      if (!whiteCtx || !this.baseScenePath) {
        this.reportProgress(100, null);
        return;
      }
      const scenePath = this.whiteboardView.focusScenePath || `${this.baseScenePath}/1`;
      const firstPage = this.pages[0];
      const { jsPDF } = await import("jspdf");
      const pdf = new jsPDF({
        format: [firstPage.width, firstPage.height],
        orientation: firstPage.width > firstPage.height ? "l" : "p",
        compress: true
      });
      for (const [index, page] of this.pages.entries()) {
        const { width, height, src } = page;
        whiteSnapshotCanvas.width = width;
        whiteSnapshotCanvas.height = height;
        const orientation = width > height ? "l" : "p";
        if (index > 0) {
          pdf.addPage([width, height], orientation);
        }
        const pdfPageSrc = await this.getBase64FromUrl(src);
        const img = document.createElement("img");
        img.src = pdfPageSrc;
        await new Promise((resolve) => img.onload = resolve);
        whiteCtx.drawImage(img, 0, 0);
        const pdfPageBase64 = whiteSnapshotCanvas.toDataURL("image/jpeg", 0.6);
        whiteCtx.clearRect(0, 0, width, height);
        const camera = {
          centerX: width / 2,
          centerY: height / 2 + index * height,
          scale: 1
        };
        const windowManger = this.context.manager.windowManger;
        if (windowManger._appliancePlugin) {
          await windowManger._appliancePlugin.screenshotToCanvasAsync(whiteCtx, scenePath, width, height, camera);
        } else {
          this.whiteboardView.screenshotToCanvas(whiteCtx, scenePath, width, height, camera);
        }
        const snapshot = whiteSnapshotCanvas.toDataURL("image/png");
        pdf.addImage(pdfPageBase64, "JPEG", 0, 0, width, height, "", "FAST");
        pdf.addImage(snapshot, "PNG", 0, 0, width, height, "", "FAST");
        whiteCtx.clearRect(0, 0, width, height);
        const progress = Math.ceil((index + 1) / this.pages.length * 100);
        if (progress < 100) {
          this.reportProgress(Math.ceil((index + 1) / this.pages.length * 100), null);
        }
      }
      const dataUrl = pdf.output("arraybuffer");
      this.reportProgress(100, { pdf: dataUrl, title: this.box.title });
    };
    this.context = context;
    this.whiteboardView = whiteboardView;
    this.readonly = readonly;
    this.box = box;
    this.pages = pages;
    this.baseScenePath = baseScenePath;
    this.appId = appId;
    this.mountWhiteboard = mountWhiteboard;
    this._onUserScroll = onUserScroll;
    const debouncedOnUserScroll = this.debounce(() => {
      this.userScrolling = false;
      if (this._onUserScroll) {
        this._onUserScroll(this.pageRenderer.pagesScrollTop);
      }
    }, { wait: 80 }, "debounce-updateUserScroll");
    this.updateUserScroll = () => {
      this.userScrolling = true;
      debouncedOnUserScroll();
    };
    this.viewer = new DocsViewer({
      context,
      readonly,
      box,
      pages,
      onNewPageIndex: this.onNewPageIndex
    });
    const { width: containerWidth, height: containerHeight } = this.whiteboardView.size;
    this.pageRenderer = new PageRenderer({
      pagesScrollTop: pageScrollTop,
      pages: this.pages,
      containerWidth,
      containerHeight,
      onPageIndexChanged: this.viewer.setPageIndex.bind(this.viewer)
    });
    this.scrollbar = new ScrollBar({
      pagesScrollTop: this.pageRenderer.pagesScrollTop,
      containerWidth,
      containerHeight,
      pagesWidth: this.pageRenderer.pagesIntrinsicWidth,
      pagesHeight: this.pageRenderer.pagesIntrinsicHeight,
      readonly: this.readonly,
      wrapClassName: this.wrapClassName.bind(this),
      onDragScroll: (pageScrollTop2) => {
        this.pageScrollTo(pageScrollTop2);
        this.updateUserScroll();
      }
    });
    this.pageScrollStepper = new Stepper({
      start: this.pageRenderer.pagesScrollTop,
      onStep: (pageScrollTop2) => {
        this.pageScrollTo(pageScrollTop2);
      }
    });
    this.render();
  }
  mount() {
    this.viewer.mount();
    this.setupScrollListener();
    const debouncedRenderRatioHeight = this.debounce(this.renderRatioHeight.bind(this), {
      wait: 80
    });
    this.sideEffect.add(() => {
      const observer = new ResizeObserver(debouncedRenderRatioHeight);
      observer.observe(this.viewer.$content);
      return () => observer.disconnect();
    });
    this.sideEffect.setTimeout(() => {
      if (!this.userScrolling) {
        this.pageScrollTo(this.pageRenderer.pagesScrollTop);
      }
    }, 100);
    this.sideEffect.add(() => {
      const handleDownloadPdf = (evt) => {
        if (evt.data.type === "@netless/_request_save_pdf_" && evt.data.appId === this.appId) {
          this.toPdf().catch(() => this.reportProgress(100, null));
        }
      };
      window.addEventListener("message", handleDownloadPdf);
      return () => {
        window.removeEventListener("message", handleDownloadPdf);
      };
    });
    return this;
  }
  unmount() {
    this.viewer.unmount();
    return this;
  }
  setReadonly(readonly) {
    if (this.readonly !== readonly) {
      this.readonly = readonly;
      this.viewer.setReadonly(readonly);
      this.scrollbar.setReadonly(readonly);
    }
  }
  destroy() {
    this.sideEffect.flushAll();
    this.pageScrollStepper.destroy();
    this._onUserScroll = void 0;
    this.unmount();
    this.viewer.destroy();
    this.pageRenderer.destroy();
    this.scrollbar.destroy();
  }
  syncPageScrollTop(pageScrollTop) {
    if (!this.userScrolling && pageScrollTop >= 0 && Math.abs(this.pageRenderer.pagesScrollTop - pageScrollTop) > 0.01) {
      this.pageScrollStepper.stepTo(pageScrollTop, this.pageRenderer.pagesScrollTop);
    }
  }
  render() {
    this.pageRenderer.mount(this.viewer.$content);
    this.viewer.$content.appendChild(this.renderWhiteboardView());
    this.scrollbar.mount(this.viewer.$content);
    this.renderRatioHeight();
  }
  renderRatioHeight() {
    const boxHeight = this.box.absoluteHeight;
    const isSmallBox = boxHeight <= RATIO_BASE_CONTAINER_HEIGHT;
    this.viewer.setSmallBox(isSmallBox);
    if (isSmallBox) {
      const titleBarSupposedHeight = 26 / RATIO_BASE_CONTAINER_HEIGHT;
      const titleBarActualHeight = 26 / boxHeight;
      const footerSupposedHeight = 26 / RATIO_BASE_CONTAINER_HEIGHT;
      const footerActualHeight = 0;
      const emptySpace = Math.max((titleBarSupposedHeight + footerSupposedHeight - (titleBarActualHeight + footerActualHeight)) / 2, 0);
      if (this.box.$titleBar) {
        const titleBarHeight = titleBarActualHeight + emptySpace;
        this.box.$titleBar.style.height = `${titleBarHeight * 100}%`;
      }
      if (this.box.$footer) {
        const footerHeight = footerActualHeight + emptySpace;
        this.box.$footer.style.height = `${footerHeight * 100}%`;
      }
    } else {
      if (this.box.$titleBar) {
        const titleBarHeight = Math.max(26 / RATIO_BASE_CONTAINER_HEIGHT, 26 / boxHeight);
        this.box.$titleBar.style.height = `${titleBarHeight * 100}%`;
      }
      if (this.box.$footer) {
        const footerHeight = Math.max(26 / RATIO_BASE_CONTAINER_HEIGHT, 26 / boxHeight);
        this.box.$footer.style.height = `${footerHeight * 100}%`;
      }
    }
  }
  renderWhiteboardView() {
    if (!this.$whiteboardView) {
      this.$whiteboardView = document.createElement("div");
      this.$whiteboardView.className = this.wrapClassName("wb-view");
      this.mountWhiteboard(this.$whiteboardView);
      this.sideEffect.addEventListener(this.$whiteboardView, "wheel", (ev) => {
        preventEvent(ev);
        if (!this.readonly) {
          this.pageScrollTo(this.pageRenderer.pagesScrollTop + ev.deltaY);
          this.updateUserScroll();
        }
      }, { passive: false, capture: true });
      this.sideEffect.addEventListener(this.$whiteboardView, "touchmove", (ev) => {
        if (this.readonly || ev.touches.length <= 1) {
          return;
        }
        this.updateUserScroll();
      }, { passive: true, capture: true });
    }
    return this.$whiteboardView;
  }
  scrollTopPageToEl(pageScrollTop) {
    return pageScrollTop * this.pageRenderer.scale;
  }
  scrollTopElToPage(elScrollTop) {
    return elScrollTop / this.pageRenderer.scale;
  }
  elScrollTo(elScrollTop) {
    this.pageScrollTo(this.scrollTopElToPage(elScrollTop));
  }
  pageScrollTo(pageScrollTop) {
    const halfWbHeight = this.scrollTopElToPage(this.whiteboardView.size.height / 2);
    this.whiteboardView.moveCamera({
      centerY: clamp(pageScrollTop + halfWbHeight, halfWbHeight, this.pageRenderer.pagesIntrinsicHeight - halfWbHeight),
      animationMode: "immediately"
    });
  }
  scrollToPage(index) {
    if (!this.readonly && !Number.isNaN(index)) {
      const offsetY = this.pageRenderer.pagesIntrinsicYs[index];
      if (offsetY >= 0) {
        this.pageScrollTo(offsetY + 5 / this.pageRenderer.scale);
        this.updateUserScroll();
      }
    }
  }
  setupScrollListener() {
    this.sideEffect.add(() => {
      const handleCameraUpdate = (camera) => {
        const { width: wbWidth, height: wbHeight } = this.whiteboardView.size;
        if (wbWidth <= 0 || wbHeight <= 0) {
          return;
        }
        const pagesScrollTop = camera.centerY - this.pageRenderer.containerHeight / this.pageRenderer.scale / 2;
        this.pageRenderer.pagesScrollTo(pagesScrollTop);
        this.scrollbar.pagesScrollTo(pagesScrollTop);
      };
      this.whiteboardView.callbacks.on("onCameraUpdated", handleCameraUpdate);
      return () => this.whiteboardView.callbacks.off("onCameraUpdated", handleCameraUpdate);
    });
    this.sideEffect.add(() => {
      const { updateUserScroll } = this;
      this.whiteboardView.callbacks.on("onCameraUpdatedByDevice", updateUserScroll);
      return () => this.whiteboardView.callbacks.off("onCameraUpdatedByDevice", updateUserScroll);
    });
    this.sideEffect.add(() => {
      const handleSizeUpdate = ({ width: wbWidth, height: wbHeight }) => {
        if (wbWidth <= 0 || wbHeight <= 0) {
          return;
        }
        this.pageRenderer.setContainerSize(wbWidth, wbHeight);
        this.scrollbar.setContainerSize(wbWidth, wbHeight);
        const { pagesIntrinsicWidth, pagesIntrinsicHeight } = this.pageRenderer;
        this.whiteboardView.moveCameraToContain({
          originX: 0,
          originY: this.pageRenderer.pagesScrollTop,
          width: pagesIntrinsicWidth,
          height: wbHeight / this.pageRenderer.scale,
          animationMode: "immediately"
        });
        this.whiteboardView.setCameraBound({
          damping: 1,
          maxContentMode: () => this.pageRenderer.scale,
          minContentMode: () => this.pageRenderer.scale,
          centerX: pagesIntrinsicWidth / 2,
          centerY: pagesIntrinsicHeight / 2,
          width: pagesIntrinsicWidth,
          height: pagesIntrinsicHeight
        });
      };
      this.whiteboardView.callbacks.on("onSizeUpdated", handleSizeUpdate);
      return () => {
        this.whiteboardView.callbacks.off("onSizeUpdated", handleSizeUpdate);
      };
    }, "whiteboard-size-update");
    this.sideEffect.addEventListener(window, "keyup", (ev) => {
      if (this.readonly || !this.box.focus || this.box.minimized || isEditable(ev.target)) {
        return;
      }
      let newPageScrollTop = null;
      switch (ev.key) {
        case "PageDown": {
          newPageScrollTop = this.pageRenderer.pagesScrollTop + this.pageRenderer.containerHeight / this.pageRenderer.scale;
          break;
        }
        case "PageUp": {
          newPageScrollTop = this.pageRenderer.pagesScrollTop - this.pageRenderer.containerHeight / this.pageRenderer.scale;
          break;
        }
        case "ArrowDown": {
          newPageScrollTop = this.pageRenderer.pagesScrollTop + this.pageRenderer.containerHeight / 4 / this.pageRenderer.scale;
          break;
        }
        case "ArrowUp": {
          newPageScrollTop = this.pageRenderer.pagesScrollTop - this.pageRenderer.containerHeight / 4 / this.pageRenderer.scale;
          break;
        }
      }
      if (newPageScrollTop !== null) {
        if (this._onUserScroll) {
          this._onUserScroll(newPageScrollTop);
        } else {
          this.pageScrollTo(newPageScrollTop);
          this.updateUserScroll();
        }
      }
    }, { capture: true });
  }
  debounce(fn, options, disposerID) {
    const dFn = debounceFn(fn, options);
    this.sideEffect.addDisposer(() => dFn.cancel(), disposerID);
    return dFn;
  }
  wrapClassName(className) {
    return "netless-app-docs-viewer-static-" + className;
  }
  async getBase64FromUrl(url) {
    const data = await fetch(this._invalidate(url));
    const blob = await data.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result;
        resolve(base64data);
      };
    });
  }
  _invalidate(url) {
    try {
      const a = new URL(url);
      a.searchParams.set("t", Date.now().toString());
      return a.toString();
    } catch {
      return url;
    }
  }
  reportProgress(progress, result) {
    window.postMessage({
      type: "@netless/_result_save_pdf_",
      appId: this.appId,
      progress,
      result
    });
  }
}
class DynamicDocsViewer {
  constructor({ context, whiteboardView, box, pages }) {
    this.sideEffect = new SideEffectManager();
    this.onPlayPPT = () => {
      const room = this.context.getRoom();
      if (room) {
        room.pptNextStep();
      }
    };
    this._scaleDocsToFitImpl = () => {
      const page = this.pages[this.getPageIndex()];
      if (page) {
        this.whiteboardView.moveCameraToContain({
          originX: -page.width / 2,
          originY: -page.height / 2,
          width: page.width,
          height: page.height,
          animationMode: "immediately"
        });
        this.whiteboardView.setCameraBound({
          damping: 1,
          maxContentMode: () => this.whiteboardView.camera.scale,
          minContentMode: () => this.whiteboardView.camera.scale,
          centerX: 0,
          centerY: 0,
          width: page.width,
          height: page.height
        });
      }
    };
    this._scaleDocsToFitDebounced = () => {
      this.sideEffect.setTimeout(this._scaleDocsToFitImpl, 1e3, "_scaleDocsToFitDebounced");
    };
    this.scaleDocsToFit = () => {
      this._scaleDocsToFitImpl();
      this._scaleDocsToFitDebounced();
    };
    this.onNewPageIndex = (index) => {
      this.jumpToPage(index, true);
    };
    this.context = context;
    this.whiteboardView = whiteboardView;
    this.box = box;
    this.pages = pages;
    this.displayer = context.getDisplayer();
    this.viewer = new DocsViewer({
      context,
      readonly: !context.getIsWritable(),
      box,
      pages,
      onNewPageIndex: this.onNewPageIndex,
      onPlay: this.onPlayPPT
    });
    this.render();
    this.sideEffect.add(() => {
      const handler = (isWritable) => {
        this.viewer.setReadonly(!isWritable);
      };
      this.context.emitter.on("writableChange", handler);
      return () => this.context.emitter.off("writableChange", handler);
    });
    this.sideEffect.add(() => {
      const handler = (sceneState) => {
        this.jumpToPage(sceneState.index);
      };
      this.context.emitter.on("sceneStateChange", handler);
      return () => this.context.emitter.off("sceneStateChange", handler);
    });
    this.sideEffect.add(() => {
      const handler = (pageState) => {
        this.jumpToPage(pageState.index);
      };
      this.context.emitter.on("pageStateChange", handler);
      return () => this.context.emitter.off("pageStateChange", handler);
    });
    this.sideEffect.add(() => {
      const handler = (visible) => {
        this.viewer.togglePreview(visible);
      };
      this.context.emitter.on("togglePreview", handler);
      return () => this.context.emitter.off("togglePreview", handler);
    });
  }
  mount() {
    this.viewer.mount();
    const pageIndex = this.getPageIndex();
    if (pageIndex !== 0) {
      this.jumpToPage(pageIndex);
    }
    this.scaleDocsToFit();
    this.sideEffect.add(() => {
      this.whiteboardView.callbacks.on("onSizeUpdated", this.scaleDocsToFit);
      return () => {
        this.whiteboardView.callbacks.off("onSizeUpdated", this.scaleDocsToFit);
      };
    });
    return this;
  }
  unmount() {
    this.viewer.unmount();
    return this;
  }
  destroy() {
    this.sideEffect.flushAll();
    this.unmount();
    this.viewer.destroy();
  }
  getPageIndex() {
    return this.displayer.state.sceneState.index;
  }
  jumpToPage(index, reset) {
    var _a, _b;
    index = clamp(index, 0, this.pages.length - 1);
    if (index !== this.getPageIndex()) {
      if (this.context.getIsWritable()) {
        const initScenePath = this.context.getInitScenePath();
        const scene = (_b = (_a = this.context.getScenes()) == null ? void 0 : _a[index]) == null ? void 0 : _b.name;
        if (initScenePath && scene) {
          this.context.setScenePath(`${initScenePath}/${scene}`);
        }
        this.scaleDocsToFit();
      }
    }
    if (index !== this.viewer.pageIndex) {
      this.viewer.setPageIndex(index);
    }
    if (reset) {
      const room = this.context.getRoom();
      if (room) {
        const pptState = room.state.globalState.__pptState;
        room.setGlobalState({
          __pptState: pptState && {
            uuid: pptState.uuid,
            pageIndex: index,
            disableAutoPlay: pptState.disableAutoPlay
          }
        });
      }
    }
  }
  render() {
    this.viewer.$content.appendChild(this.renderMask());
    this.viewer.$content.appendChild(this.renderWhiteboardView());
    this.sideEffect.addEventListener(window, "keydown", (ev) => {
      var _a;
      if (this.box.focus && !isEditable(ev.target)) {
        switch (ev.key) {
          case "ArrowUp":
          case "ArrowLeft": {
            this.jumpToPage(this.getPageIndex() - 1, true);
            break;
          }
          case "ArrowRight":
          case "ArrowDown": {
            (_a = this.context.getRoom()) == null ? void 0 : _a.pptNextStep();
            break;
          }
        }
      }
    });
  }
  renderMask() {
    if (!this.$mask) {
      const $mask = document.createElement("div");
      $mask.className = this.wrapClassName("mask");
      this.$mask = $mask;
      const $back = document.createElement("button");
      $back.className = this.wrapClassName("back");
      const $next = document.createElement("button");
      $next.className = this.wrapClassName("next");
    }
    return this.$mask;
  }
  renderWhiteboardView() {
    if (!this.$whiteboardView) {
      this.$whiteboardView = document.createElement("div");
      this.$whiteboardView.className = this.wrapClassName("wb-view");
      this.sideEffect.addEventListener(this.$whiteboardView, "click", (ev) => {
        var _a;
        const room = this.context.getRoom();
        if (room && room.state.memberState.currentApplianceName === "clicker") {
          for (let el = ev.target; el; el = el.parentElement) {
            if ((_a = el.classList) == null ? void 0 : _a.contains("ppt-event-source")) {
              return;
            }
          }
          room.pptNextStep();
        }
      });
      this.context.mountView(this.$whiteboardView);
    }
    return this.$whiteboardView;
  }
  wrapClassName(className) {
    return "netless-app-docs-viewer-dynamic-" + className;
  }
}
const kind = "DocsViewer";
const NetlessAppDocsViewer = {
  kind,
  setup(context) {
    const box = context.getBox();
    const scenes = context.getScenes();
    if (!scenes) {
      throw new Error("[Docs Viewer]: scenes not found.");
    }
    const whiteboardView = context.getView();
    console.log(context.storage.state);
    if (!whiteboardView) {
      throw new Error("[Docs Viewer]: no whiteboard view.");
    }
    const pages = scenes.map(({ ppt }) => ppt ? {
      width: ppt.width,
      height: ppt.height,
      src: ppt.src,
      thumbnail: ppt.previewURL
    } : null).filter((page) => Boolean(page));
    if (pages.length <= 0) {
      throw new Error("[Docs Viewer]: empty scenes.");
    }
    box.mountStyles(styles);
    if (pages[0].src.startsWith("ppt")) {
      return setupDynamicDocsViewer(context, whiteboardView, box, pages);
    } else {
      return setupStaticDocsViewer(context, whiteboardView, box, pages);
    }
  }
};
function setupStaticDocsViewer(context, whiteboardView, box, pages) {
  var _a;
  whiteboardView.disableCameraTransform = !context.getIsWritable();
  const docsViewer = new StaticDocsViewer({
    context,
    whiteboardView,
    readonly: !context.getIsWritable(),
    box,
    pages,
    pageScrollTop: (_a = context.getAttributes()) == null ? void 0 : _a.pageScrollTop,
    mountWhiteboard: context.mountView.bind(context),
    onUserScroll: (pageScrollTop) => {
      var _a2;
      if (((_a2 = context.getAttributes()) == null ? void 0 : _a2.pageScrollTop) !== pageScrollTop && !box.readonly) {
        context.updateAttributes(["pageScrollTop"], pageScrollTop);
      }
    },
    baseScenePath: context.getInitScenePath(),
    appId: context.appId
  }).mount();
  docsViewer.viewer.onPageIndexChanged = (index) => {
    context.dispatchAppEvent("pageStateChange", { index, length: pages.length });
  };
  context.dispatchAppEvent("pageStateChange", {
    index: docsViewer.viewer.pageIndex,
    length: pages.length
  });
  context.emitter.on("attributesUpdate", (attributes) => {
    if (attributes) {
      if (attributes.pageScrollTop != null) {
        docsViewer.syncPageScrollTop(attributes.pageScrollTop);
      }
    }
  });
  context.emitter.on("writableChange", (isWritable) => {
    docsViewer.setReadonly(!isWritable);
    whiteboardView.disableCameraTransform = !isWritable;
  });
  return {
    viewer: () => {
      return docsViewer;
    },
    position: () => {
      const controller = docsViewer == null ? void 0 : docsViewer.viewer;
      if (controller) {
        return [controller.pageIndex, docsViewer.pages.length];
      }
    }
  };
}
function setupDynamicDocsViewer(context, whiteboardView, box, pages) {
  whiteboardView.disableCameraTransform = true;
  const docsViewer = new DynamicDocsViewer({
    context,
    whiteboardView,
    box,
    pages
  }).mount();
  docsViewer.viewer.onPageIndexChanged = (index) => {
    context.dispatchAppEvent("pageStateChange", { index, length: pages.length });
  };
  context.dispatchAppEvent("pageStateChange", {
    index: docsViewer.getPageIndex(),
    length: pages.length
  });
  context.mountView(docsViewer.$whiteboardView);
  if (context.isAddApp) {
    whiteboardView.callbacks.once("onSizeUpdated", ({ width: contentWidth, height: contentHeight }) => {
      if (pages.length > 0 && box.state !== "maximized") {
        const { width: pageWidth, height: pageHeight } = pages[0];
        const preferHeight = pageHeight / pageWidth * contentWidth;
        const diff = preferHeight - contentHeight;
        if (diff !== 0 && context.getIsWritable()) {
          context.emitter.emit("setBoxSize", {
            width: box.width,
            height: box.height + diff / box.containerRect.height
          });
        }
      }
    });
  }
  return {
    viewer: () => {
      return docsViewer;
    },
    position: () => {
      const controller = docsViewer == null ? void 0 : docsViewer.viewer;
      if (controller) {
        return [controller.pageIndex, docsViewer.pages.length];
      }
    },
    nextStep: () => {
      return docsViewer.onPlayPPT();
    },
    nextPage: () => {
      return docsViewer.jumpToPage(docsViewer.getPageIndex() + 1, true);
    },
    prevPage: () => {
      return docsViewer.jumpToPage(docsViewer.getPageIndex() + 1, true);
    },
    jumpToPage: (pageIndex) => {
      if (typeof pageIndex == "number") {
        docsViewer.jumpToPage(pageIndex, true);
      }
    },
    togglePreview: (visible) => {
      docsViewer.viewer.togglePreview(visible);
    }
  };
}
export { NetlessAppDocsViewer as default };
//# sourceMappingURL=main.es.js.map
