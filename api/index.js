var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <define:process.env.REMIX_DEV_HTTP_ORIGIN>
var init_define_process_env_REMIX_DEV_HTTP_ORIGIN = __esm({
  "<define:process.env.REMIX_DEV_HTTP_ORIGIN>"() {
  }
});

// css-bundle-update-plugin-ns:/Users/jasonliao/code/yoodooh-demo/node_modules/@remix-run/css-bundle/dist/index.js
var require_dist = __commonJS({
  "css-bundle-update-plugin-ns:/Users/jasonliao/code/yoodooh-demo/node_modules/@remix-run/css-bundle/dist/index.js"(exports) {
    "use strict";
    init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var cssBundleHref2;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  dev: () => dev,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();

// server-entry-module:@remix-run/dev/server-build
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_css_bundle = __toESM(require_dist());

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-2YQ2J3HU.css";

// app/root.tsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default },
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : []
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "meta",
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 23,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 21,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/get-dooh-by-id.tsx
var get_dooh_by_id_exports = {};
__export(get_dooh_by_id_exports, {
  QUERY_DOOH_BY_ID: () => QUERY_DOOH_BY_ID,
  loader: () => loader
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();

// utils/supabase.ts
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_supabase_js = require("@supabase/supabase-js"), supabase_default = (0, import_supabase_js.createClient)(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// app/routes/get-dooh-by-id.tsx
var loader = async ({ request }) => {
  let id = new URL(request.url).searchParams.get("id"), { data } = await supabase_default.from("creative_dimension").select().eq("id", id);
  if (!(data != null && data[0]))
    throw new Response(null, {
      status: 404,
      statusText: "Dooh not Found"
    });
  return data[0];
}, QUERY_DOOH_BY_ID = "/get-dooh-by-id";

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  links: () => links2,
  loader: () => loader2,
  meta: () => meta
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_react10 = require("@remix-run/react");

// app/components/navbar/Navbar.tsx
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_react3 = require("@remix-run/react"), import_outline = require("@heroicons/react/24/outline"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), NavBar = () => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "bg-white drop-shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
  "nav",
  {
    className: "mx-auto flex items-center justify-between p-6 lg:px-8",
    "aria-label": "Global",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex lg:flex-none mr-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_outline.Bars3Icon, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
        fileName: "app/components/navbar/Navbar.tsx",
        lineNumber: 12,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/navbar/Navbar.tsx",
        lineNumber: 11,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex lg:flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/", className: "-m-1.5 p-1.5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "img",
          {
            className: "h-8 w-120",
            src: "/logo.png",
            alt: "Your Company"
          },
          void 0,
          !1,
          {
            fileName: "app/components/navbar/Navbar.tsx",
            lineNumber: 16,
            columnNumber: 25
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "sr-only", children: "YooDooh demo" }, void 0, !1, {
          fileName: "app/components/navbar/Navbar.tsx",
          lineNumber: 21,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/navbar/Navbar.tsx",
        lineNumber: 15,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/navbar/Navbar.tsx",
        lineNumber: 14,
        columnNumber: 17
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/navbar/Navbar.tsx",
    lineNumber: 7,
    columnNumber: 13
  },
  this
) }, void 0, !1, {
  fileName: "app/components/navbar/Navbar.tsx",
  lineNumber: 6,
  columnNumber: 9
}, this);

// app/components/dooh-finder/DoohFinder.tsx
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_react9 = require("react");

// app/components/cluster-map/ClusterMap.tsx
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_react4 = require("react");

// node_modules/supercluster/index.js
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();

// node_modules/kdbush/index.js
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var ARRAY_TYPES = [
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array
], VERSION = 1, HEADER_SIZE = 8, KDBush = class {
  /**
   * Creates an index from raw `ArrayBuffer` data.
   * @param {ArrayBuffer} data
   */
  static from(data) {
    if (!(data instanceof ArrayBuffer))
      throw new Error("Data must be an instance of ArrayBuffer.");
    let [magic, versionAndType] = new Uint8Array(data, 0, 2);
    if (magic !== 219)
      throw new Error("Data does not appear to be in a KDBush format.");
    let version = versionAndType >> 4;
    if (version !== VERSION)
      throw new Error(`Got v${version} data when expected v${VERSION}.`);
    let ArrayType = ARRAY_TYPES[versionAndType & 15];
    if (!ArrayType)
      throw new Error("Unrecognized array type.");
    let [nodeSize] = new Uint16Array(data, 2, 1), [numItems] = new Uint32Array(data, 4, 1);
    return new KDBush(numItems, nodeSize, ArrayType, data);
  }
  /**
   * Creates an index that will hold a given number of items.
   * @param {number} numItems
   * @param {number} [nodeSize=64] Size of the KD-tree node (64 by default).
   * @param {TypedArrayConstructor} [ArrayType=Float64Array] The array type used for coordinates storage (`Float64Array` by default).
   * @param {ArrayBuffer} [data] (For internal use only)
   */
  constructor(numItems, nodeSize = 64, ArrayType = Float64Array, data) {
    if (isNaN(numItems) || numItems < 0)
      throw new Error(`Unpexpected numItems value: ${numItems}.`);
    this.numItems = +numItems, this.nodeSize = Math.min(Math.max(+nodeSize, 2), 65535), this.ArrayType = ArrayType, this.IndexArrayType = numItems < 65536 ? Uint16Array : Uint32Array;
    let arrayTypeIndex = ARRAY_TYPES.indexOf(this.ArrayType), coordsByteSize = numItems * 2 * this.ArrayType.BYTES_PER_ELEMENT, idsByteSize = numItems * this.IndexArrayType.BYTES_PER_ELEMENT, padCoords = (8 - idsByteSize % 8) % 8;
    if (arrayTypeIndex < 0)
      throw new Error(`Unexpected typed array class: ${ArrayType}.`);
    data && data instanceof ArrayBuffer ? (this.data = data, this.ids = new this.IndexArrayType(this.data, HEADER_SIZE, numItems), this.coords = new this.ArrayType(this.data, HEADER_SIZE + idsByteSize + padCoords, numItems * 2), this._pos = numItems * 2, this._finished = !0) : (this.data = new ArrayBuffer(HEADER_SIZE + coordsByteSize + idsByteSize + padCoords), this.ids = new this.IndexArrayType(this.data, HEADER_SIZE, numItems), this.coords = new this.ArrayType(this.data, HEADER_SIZE + idsByteSize + padCoords, numItems * 2), this._pos = 0, this._finished = !1, new Uint8Array(this.data, 0, 2).set([219, (VERSION << 4) + arrayTypeIndex]), new Uint16Array(this.data, 2, 1)[0] = nodeSize, new Uint32Array(this.data, 4, 1)[0] = numItems);
  }
  /**
   * Add a point to the index.
   * @param {number} x
   * @param {number} y
   * @returns {number} An incremental index associated with the added item (starting from `0`).
   */
  add(x, y) {
    let index = this._pos >> 1;
    return this.ids[index] = index, this.coords[this._pos++] = x, this.coords[this._pos++] = y, index;
  }
  /**
   * Perform indexing of the added points.
   */
  finish() {
    let numAdded = this._pos >> 1;
    if (numAdded !== this.numItems)
      throw new Error(`Added ${numAdded} items when expected ${this.numItems}.`);
    return sort(this.ids, this.coords, this.nodeSize, 0, this.numItems - 1, 0), this._finished = !0, this;
  }
  /**
   * Search the index for items within a given bounding box.
   * @param {number} minX
   * @param {number} minY
   * @param {number} maxX
   * @param {number} maxY
   * @returns {number[]} An array of indices correponding to the found items.
   */
  range(minX, minY, maxX, maxY) {
    if (!this._finished)
      throw new Error("Data not yet indexed - call index.finish().");
    let { ids, coords, nodeSize } = this, stack = [0, ids.length - 1, 0], result = [];
    for (; stack.length; ) {
      let axis = stack.pop() || 0, right = stack.pop() || 0, left = stack.pop() || 0;
      if (right - left <= nodeSize) {
        for (let i = left; i <= right; i++) {
          let x2 = coords[2 * i], y2 = coords[2 * i + 1];
          x2 >= minX && x2 <= maxX && y2 >= minY && y2 <= maxY && result.push(ids[i]);
        }
        continue;
      }
      let m = left + right >> 1, x = coords[2 * m], y = coords[2 * m + 1];
      x >= minX && x <= maxX && y >= minY && y <= maxY && result.push(ids[m]), (axis === 0 ? minX <= x : minY <= y) && (stack.push(left), stack.push(m - 1), stack.push(1 - axis)), (axis === 0 ? maxX >= x : maxY >= y) && (stack.push(m + 1), stack.push(right), stack.push(1 - axis));
    }
    return result;
  }
  /**
   * Search the index for items within a given radius.
   * @param {number} qx
   * @param {number} qy
   * @param {number} r Query radius.
   * @returns {number[]} An array of indices correponding to the found items.
   */
  within(qx, qy, r) {
    if (!this._finished)
      throw new Error("Data not yet indexed - call index.finish().");
    let { ids, coords, nodeSize } = this, stack = [0, ids.length - 1, 0], result = [], r2 = r * r;
    for (; stack.length; ) {
      let axis = stack.pop() || 0, right = stack.pop() || 0, left = stack.pop() || 0;
      if (right - left <= nodeSize) {
        for (let i = left; i <= right; i++)
          sqDist(coords[2 * i], coords[2 * i + 1], qx, qy) <= r2 && result.push(ids[i]);
        continue;
      }
      let m = left + right >> 1, x = coords[2 * m], y = coords[2 * m + 1];
      sqDist(x, y, qx, qy) <= r2 && result.push(ids[m]), (axis === 0 ? qx - r <= x : qy - r <= y) && (stack.push(left), stack.push(m - 1), stack.push(1 - axis)), (axis === 0 ? qx + r >= x : qy + r >= y) && (stack.push(m + 1), stack.push(right), stack.push(1 - axis));
    }
    return result;
  }
};
function sort(ids, coords, nodeSize, left, right, axis) {
  if (right - left <= nodeSize)
    return;
  let m = left + right >> 1;
  select(ids, coords, m, left, right, axis), sort(ids, coords, nodeSize, left, m - 1, 1 - axis), sort(ids, coords, nodeSize, m + 1, right, 1 - axis);
}
function select(ids, coords, k, left, right, axis) {
  for (; right > left; ) {
    if (right - left > 600) {
      let n = right - left + 1, m = k - left + 1, z = Math.log(n), s = 0.5 * Math.exp(2 * z / 3), sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1), newLeft = Math.max(left, Math.floor(k - m * s / n + sd)), newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
      select(ids, coords, k, newLeft, newRight, axis);
    }
    let t = coords[2 * k + axis], i = left, j = right;
    for (swapItem(ids, coords, left, k), coords[2 * right + axis] > t && swapItem(ids, coords, left, right); i < j; ) {
      for (swapItem(ids, coords, i, j), i++, j--; coords[2 * i + axis] < t; )
        i++;
      for (; coords[2 * j + axis] > t; )
        j--;
    }
    coords[2 * left + axis] === t ? swapItem(ids, coords, left, j) : (j++, swapItem(ids, coords, j, right)), j <= k && (left = j + 1), k <= j && (right = j - 1);
  }
}
function swapItem(ids, coords, i, j) {
  swap(ids, i, j), swap(coords, 2 * i, 2 * j), swap(coords, 2 * i + 1, 2 * j + 1);
}
function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j], arr[j] = tmp;
}
function sqDist(ax, ay, bx, by) {
  let dx = ax - bx, dy = ay - by;
  return dx * dx + dy * dy;
}

// node_modules/supercluster/index.js
var defaultOptions = {
  minZoom: 0,
  // min zoom to generate clusters on
  maxZoom: 16,
  // max zoom level to cluster the points on
  minPoints: 2,
  // minimum points to form a cluster
  radius: 40,
  // cluster radius in pixels
  extent: 512,
  // tile extent (radius is calculated relative to it)
  nodeSize: 64,
  // size of the KD-tree leaf node, affects performance
  log: !1,
  // whether to log timing info
  // whether to generate numeric ids for input features (in vector tiles)
  generateId: !1,
  // a reduce function for calculating custom cluster properties
  reduce: null,
  // (accumulated, props) => { accumulated.sum += props.sum; }
  // properties to use for individual points when running the reducer
  map: (props) => props
  // props => ({sum: props.my_value})
}, fround = Math.fround || ((tmp) => (x) => (tmp[0] = +x, tmp[0]))(new Float32Array(1)), OFFSET_ZOOM = 2, OFFSET_ID = 3, OFFSET_PARENT = 4, OFFSET_NUM = 5, OFFSET_PROP = 6, Supercluster = class {
  constructor(options) {
    this.options = Object.assign(Object.create(defaultOptions), options), this.trees = new Array(this.options.maxZoom + 1), this.stride = this.options.reduce ? 7 : 6, this.clusterProps = [];
  }
  load(points) {
    let { log, minZoom, maxZoom } = this.options;
    log && console.time("total time");
    let timerId = `prepare ${points.length} points`;
    log && console.time(timerId), this.points = points;
    let data = [];
    for (let i = 0; i < points.length; i++) {
      let p = points[i];
      if (!p.geometry)
        continue;
      let [lng, lat] = p.geometry.coordinates, x = fround(lngX(lng)), y = fround(latY(lat));
      data.push(
        x,
        y,
        // projected point coordinates
        1 / 0,
        // the last zoom the point was processed at
        i,
        // index of the source feature in the original input array
        -1,
        // parent cluster id
        1
        // number of points in a cluster
      ), this.options.reduce && data.push(0);
    }
    let tree = this.trees[maxZoom + 1] = this._createTree(data);
    log && console.timeEnd(timerId);
    for (let z = maxZoom; z >= minZoom; z--) {
      let now = +Date.now();
      tree = this.trees[z] = this._createTree(this._cluster(tree, z)), log && console.log("z%d: %d clusters in %dms", z, tree.numItems, +Date.now() - now);
    }
    return log && console.timeEnd("total time"), this;
  }
  getClusters(bbox, zoom) {
    let minLng = ((bbox[0] + 180) % 360 + 360) % 360 - 180, minLat = Math.max(-90, Math.min(90, bbox[1])), maxLng = bbox[2] === 180 ? 180 : ((bbox[2] + 180) % 360 + 360) % 360 - 180, maxLat = Math.max(-90, Math.min(90, bbox[3]));
    if (bbox[2] - bbox[0] >= 360)
      minLng = -180, maxLng = 180;
    else if (minLng > maxLng) {
      let easternHem = this.getClusters([minLng, minLat, 180, maxLat], zoom), westernHem = this.getClusters([-180, minLat, maxLng, maxLat], zoom);
      return easternHem.concat(westernHem);
    }
    let tree = this.trees[this._limitZoom(zoom)], ids = tree.range(lngX(minLng), latY(maxLat), lngX(maxLng), latY(minLat)), data = tree.data, clusters = [];
    for (let id of ids) {
      let k = this.stride * id;
      clusters.push(data[k + OFFSET_NUM] > 1 ? getClusterJSON(data, k, this.clusterProps) : this.points[data[k + OFFSET_ID]]);
    }
    return clusters;
  }
  getChildren(clusterId) {
    let originId = this._getOriginId(clusterId), originZoom = this._getOriginZoom(clusterId), errorMsg = "No cluster with the specified id.", tree = this.trees[originZoom];
    if (!tree)
      throw new Error(errorMsg);
    let data = tree.data;
    if (originId * this.stride >= data.length)
      throw new Error(errorMsg);
    let r = this.options.radius / (this.options.extent * Math.pow(2, originZoom - 1)), x = data[originId * this.stride], y = data[originId * this.stride + 1], ids = tree.within(x, y, r), children = [];
    for (let id of ids) {
      let k = id * this.stride;
      data[k + OFFSET_PARENT] === clusterId && children.push(data[k + OFFSET_NUM] > 1 ? getClusterJSON(data, k, this.clusterProps) : this.points[data[k + OFFSET_ID]]);
    }
    if (children.length === 0)
      throw new Error(errorMsg);
    return children;
  }
  getLeaves(clusterId, limit, offset) {
    limit = limit || 10, offset = offset || 0;
    let leaves = [];
    return this._appendLeaves(leaves, clusterId, limit, offset, 0), leaves;
  }
  getTile(z, x, y) {
    let tree = this.trees[this._limitZoom(z)], z2 = Math.pow(2, z), { extent, radius } = this.options, p = radius / extent, top = (y - p) / z2, bottom = (y + 1 + p) / z2, tile = {
      features: []
    };
    return this._addTileFeatures(
      tree.range((x - p) / z2, top, (x + 1 + p) / z2, bottom),
      tree.data,
      x,
      y,
      z2,
      tile
    ), x === 0 && this._addTileFeatures(
      tree.range(1 - p / z2, top, 1, bottom),
      tree.data,
      z2,
      y,
      z2,
      tile
    ), x === z2 - 1 && this._addTileFeatures(
      tree.range(0, top, p / z2, bottom),
      tree.data,
      -1,
      y,
      z2,
      tile
    ), tile.features.length ? tile : null;
  }
  getClusterExpansionZoom(clusterId) {
    let expansionZoom = this._getOriginZoom(clusterId) - 1;
    for (; expansionZoom <= this.options.maxZoom; ) {
      let children = this.getChildren(clusterId);
      if (expansionZoom++, children.length !== 1)
        break;
      clusterId = children[0].properties.cluster_id;
    }
    return expansionZoom;
  }
  _appendLeaves(result, clusterId, limit, offset, skipped) {
    let children = this.getChildren(clusterId);
    for (let child of children) {
      let props = child.properties;
      if (props && props.cluster ? skipped + props.point_count <= offset ? skipped += props.point_count : skipped = this._appendLeaves(result, props.cluster_id, limit, offset, skipped) : skipped < offset ? skipped++ : result.push(child), result.length === limit)
        break;
    }
    return skipped;
  }
  _createTree(data) {
    let tree = new KDBush(data.length / this.stride | 0, this.options.nodeSize, Float32Array);
    for (let i = 0; i < data.length; i += this.stride)
      tree.add(data[i], data[i + 1]);
    return tree.finish(), tree.data = data, tree;
  }
  _addTileFeatures(ids, data, x, y, z2, tile) {
    for (let i of ids) {
      let k = i * this.stride, isCluster = data[k + OFFSET_NUM] > 1, tags, px, py;
      if (isCluster)
        tags = getClusterProperties(data, k, this.clusterProps), px = data[k], py = data[k + 1];
      else {
        let p = this.points[data[k + OFFSET_ID]];
        tags = p.properties;
        let [lng, lat] = p.geometry.coordinates;
        px = lngX(lng), py = latY(lat);
      }
      let f = {
        type: 1,
        geometry: [[
          Math.round(this.options.extent * (px * z2 - x)),
          Math.round(this.options.extent * (py * z2 - y))
        ]],
        tags
      }, id;
      isCluster || this.options.generateId ? id = data[k + OFFSET_ID] : id = this.points[data[k + OFFSET_ID]].id, id !== void 0 && (f.id = id), tile.features.push(f);
    }
  }
  _limitZoom(z) {
    return Math.max(this.options.minZoom, Math.min(Math.floor(+z), this.options.maxZoom + 1));
  }
  _cluster(tree, zoom) {
    let { radius, extent, reduce, minPoints } = this.options, r = radius / (extent * Math.pow(2, zoom)), data = tree.data, nextData = [], stride = this.stride;
    for (let i = 0; i < data.length; i += stride) {
      if (data[i + OFFSET_ZOOM] <= zoom)
        continue;
      data[i + OFFSET_ZOOM] = zoom;
      let x = data[i], y = data[i + 1], neighborIds = tree.within(data[i], data[i + 1], r), numPointsOrigin = data[i + OFFSET_NUM], numPoints = numPointsOrigin;
      for (let neighborId of neighborIds) {
        let k = neighborId * stride;
        data[k + OFFSET_ZOOM] > zoom && (numPoints += data[k + OFFSET_NUM]);
      }
      if (numPoints > numPointsOrigin && numPoints >= minPoints) {
        let wx = x * numPointsOrigin, wy = y * numPointsOrigin, clusterProperties, clusterPropIndex = -1, id = ((i / stride | 0) << 5) + (zoom + 1) + this.points.length;
        for (let neighborId of neighborIds) {
          let k = neighborId * stride;
          if (data[k + OFFSET_ZOOM] <= zoom)
            continue;
          data[k + OFFSET_ZOOM] = zoom;
          let numPoints2 = data[k + OFFSET_NUM];
          wx += data[k] * numPoints2, wy += data[k + 1] * numPoints2, data[k + OFFSET_PARENT] = id, reduce && (clusterProperties || (clusterProperties = this._map(data, i, !0), clusterPropIndex = this.clusterProps.length, this.clusterProps.push(clusterProperties)), reduce(clusterProperties, this._map(data, k)));
        }
        data[i + OFFSET_PARENT] = id, nextData.push(wx / numPoints, wy / numPoints, 1 / 0, id, -1, numPoints), reduce && nextData.push(clusterPropIndex);
      } else {
        for (let j = 0; j < stride; j++)
          nextData.push(data[i + j]);
        if (numPoints > 1)
          for (let neighborId of neighborIds) {
            let k = neighborId * stride;
            if (!(data[k + OFFSET_ZOOM] <= zoom)) {
              data[k + OFFSET_ZOOM] = zoom;
              for (let j = 0; j < stride; j++)
                nextData.push(data[k + j]);
            }
          }
      }
    }
    return nextData;
  }
  // get index of the point from which the cluster originated
  _getOriginId(clusterId) {
    return clusterId - this.points.length >> 5;
  }
  // get zoom of the point from which the cluster originated
  _getOriginZoom(clusterId) {
    return (clusterId - this.points.length) % 32;
  }
  _map(data, i, clone) {
    if (data[i + OFFSET_NUM] > 1) {
      let props = this.clusterProps[data[i + OFFSET_PROP]];
      return clone ? Object.assign({}, props) : props;
    }
    let original = this.points[data[i + OFFSET_ID]].properties, result = this.options.map(original);
    return clone && result === original ? Object.assign({}, result) : result;
  }
};
function getClusterJSON(data, i, clusterProps) {
  return {
    type: "Feature",
    id: data[i + OFFSET_ID],
    properties: getClusterProperties(data, i, clusterProps),
    geometry: {
      type: "Point",
      coordinates: [xLng(data[i]), yLat(data[i + 1])]
    }
  };
}
function getClusterProperties(data, i, clusterProps) {
  let count = data[i + OFFSET_NUM], abbrev = count >= 1e4 ? `${Math.round(count / 1e3)}k` : count >= 1e3 ? `${Math.round(count / 100) / 10}k` : count, propIndex = data[i + OFFSET_PROP], properties = propIndex === -1 ? {} : Object.assign({}, clusterProps[propIndex]);
  return Object.assign(properties, {
    cluster: !0,
    cluster_id: data[i + OFFSET_ID],
    point_count: count,
    point_count_abbreviated: abbrev
  });
}
function lngX(lng) {
  return lng / 360 + 0.5;
}
function latY(lat) {
  let sin = Math.sin(lat * Math.PI / 180), y = 0.5 - 0.25 * Math.log((1 + sin) / (1 - sin)) / Math.PI;
  return y < 0 ? 0 : y > 1 ? 1 : y;
}
function xLng(x) {
  return (x - 0.5) * 360;
}
function yLat(y) {
  let y2 = (180 - y * 360) * Math.PI / 180;
  return 360 * Math.atan(Math.exp(y2)) / Math.PI - 90;
}

// app/components/cluster-map/ClusterMap.tsx
var import_react_map_gl3 = __toESM(require("react-map-gl"));

// app/components/cluster-map/MarkerPin.tsx
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_react_map_gl = require("react-map-gl"), import_solid = require("@heroicons/react/24/solid"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), MarkerPin = ({ data, onMarkerClick }) => {
  let [longitude, latitude] = data.geometry.coordinates;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    import_react_map_gl.Marker,
    {
      longitude,
      latitude,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { onClick: () => onMarkerClick == null ? void 0 : onMarkerClick(data), children: getPinIcon(data.properties.media_type) }, void 0, !1, {
        fileName: "app/components/cluster-map/MarkerPin.tsx",
        lineNumber: 20,
        columnNumber: 13
      }, this)
    },
    data.properties.siteId,
    !1,
    {
      fileName: "app/components/cluster-map/MarkerPin.tsx",
      lineNumber: 15,
      columnNumber: 9
    },
    this
  );
}, getPinIcon = (pinType) => {
  switch (pinType) {
    case "Billboards":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        import_solid.TvIcon,
        {
          className: "block h-6 w-6 pin-billboard",
          "aria-hidden": !0
        },
        void 0,
        !1,
        {
          fileName: "app/components/cluster-map/MarkerPin.tsx",
          lineNumber: 31,
          columnNumber: 17
        },
        this
      );
    default:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        import_solid.BuildingOfficeIcon,
        {
          className: "block h-6 w-6 pin-building",
          "aria-hidden": !0
        },
        void 0,
        !1,
        {
          fileName: "app/components/cluster-map/MarkerPin.tsx",
          lineNumber: 39,
          columnNumber: 17
        },
        this
      );
  }
};

// app/components/cluster-map/ClusterPin.tsx
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_react_map_gl2 = require("react-map-gl"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), ClusterPin = ({
  latitude,
  longitude,
  pointCount,
  onClusterPinClick
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react_map_gl2.Marker, { longitude, latitude, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  "div",
  {
    className: "flex justify-center items-center text-md border-2 rounded-full bg-slate-300 opacity-50 hover:opacity-100",
    style: {
      width: "50px",
      height: "50px"
    },
    onClick: () => onClusterPinClick(),
    children: pointCount
  },
  void 0,
  !1,
  {
    fileName: "app/components/cluster-map/ClusterPin.tsx",
    lineNumber: 18,
    columnNumber: 13
  },
  this
) }, void 0, !1, {
  fileName: "app/components/cluster-map/ClusterPin.tsx",
  lineNumber: 17,
  columnNumber: 9
}, this);

// app/components/cluster-map/constants.ts
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var MAP_STYLE = "mapbox://styles/jasonaliao/cljwp7s4p00ad01rd6u6s6uyc", MAP_ORIGIN = { latitude: -36.85361, longitude: 174.76499 }, MAP_ZOOM_DEFAULT = 9, MAP_MAX_ZOOM_DEFAULT = 20, MAP_BOUND_DEFAULT = [-180, -85, 180, 85], MAP_CLUSTER_RADIUS_DEFAULT = 50;

// app/components/cluster-map/ClusterMap.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), superCluster = new Supercluster({
  radius: MAP_CLUSTER_RADIUS_DEFAULT,
  maxZoom: MAP_MAX_ZOOM_DEFAULT
}), ClusterMap = ({
  token,
  points,
  onMarkerClick,
  onClusterMakerClick,
  ...mapBoxProps
}) => {
  let mapRef = (0, import_react4.useRef)(null), [viewport, setViewport] = (0, import_react4.useState)({
    latitude: MAP_ORIGIN.latitude,
    longitude: MAP_ORIGIN.longitude,
    zoom: MAP_ZOOM_DEFAULT
  }), [clusters, setClusters] = (0, import_react4.useState)([]), [bounds, setBounds] = (0, import_react4.useState)(MAP_BOUND_DEFAULT), [zoom, setZoom] = (0, import_react4.useState)(MAP_ZOOM_DEFAULT);
  return (0, import_react4.useEffect)(() => {
    superCluster.load(points), setClusters(superCluster.getClusters(bounds, zoom));
  }, [points, bounds, zoom]), (0, import_react4.useEffect)(() => {
    mapRef.current && setBounds(mapRef.current.getMap().getBounds().toArray().flat());
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { position: "relative" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    import_react_map_gl3.default,
    {
      initialViewState: viewport,
      maxZoom: MAP_MAX_ZOOM_DEFAULT,
      mapStyle: MAP_STYLE,
      mapboxAccessToken: token,
      style: {
        width: "100%",
        height: "calc(100vh - 80px)"
      },
      onZoomEnd: (e) => setZoom(e.viewState.zoom),
      ref: mapRef,
      "data-test-id": "cluster-map",
      ...mapBoxProps,
      children: clusters.map((cluster) => {
        let { cluster: isCluster, point_count } = cluster.properties, [longitude, latitude] = cluster.geometry.coordinates;
        return isCluster ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          ClusterPin,
          {
            longitude,
            latitude,
            pointCount: point_count,
            onClusterPinClick: () => {
              var _a;
              let zoom2 = Math.min(
                superCluster == null ? void 0 : superCluster.getClusterExpansionZoom(
                  cluster.id
                ),
                MAP_MAX_ZOOM_DEFAULT
              );
              if ((_a = mapRef.current) == null || _a.flyTo({
                center: [longitude, latitude],
                zoom: zoom2,
                speed: 1
              }), zoom2 > 17 && cluster.id) {
                let clusterPins = superCluster == null ? void 0 : superCluster.getChildren(
                  +cluster.id
                );
                onClusterMakerClick == null || onClusterMakerClick(
                  clusterPins ?? []
                );
              }
            }
          },
          cluster.properties.siteId,
          !1,
          {
            fileName: "app/components/cluster-map/ClusterMap.tsx",
            lineNumber: 90,
            columnNumber: 29
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          MarkerPin,
          {
            data: cluster,
            onMarkerClick
          },
          cluster.properties.siteId,
          !1,
          {
            fileName: "app/components/cluster-map/ClusterMap.tsx",
            lineNumber: 125,
            columnNumber: 25
          },
          this
        );
      })
    },
    void 0,
    !1,
    {
      fileName: "app/components/cluster-map/ClusterMap.tsx",
      lineNumber: 69,
      columnNumber: 13
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/cluster-map/ClusterMap.tsx",
    lineNumber: 68,
    columnNumber: 9
  }, this);
};

// app/components/dooh-finder/DoohDetails.tsx
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_react5 = require("@remix-run/react"), import_react6 = require("react");
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), DoohDetails = ({ selectedId }) => {
  let fetcher = (0, import_react5.useFetcher)(), { data } = fetcher;
  return (0, import_react6.useEffect)(() => {
    let formData = new FormData();
    formData.append("id", selectedId.toString()), fetcher.state === "idle" && !fetcher.data && fetcher.submit(formData, {
      method: "GET",
      action: QUERY_DOOH_BY_ID
    });
  }, [selectedId, fetcher]), !data || fetcher.state === "loading" ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: "loading" }, void 0, !1, {
    fileName: "app/components/dooh-finder/DoohDetails.tsx",
    lineNumber: 28,
    columnNumber: 16
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "text-xl font-semibold text-black", children: data.media_owner }, void 0, !1, {
      fileName: "app/components/dooh-finder/DoohDetails.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "text-sm text-gray-600", children: data.site_name }, void 0, !1, {
      fileName: "app/components/dooh-finder/DoohDetails.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "text-sm text-gray-600", children: `Display resolution: ${formatResolution(
        data.resolution
      )}` }, void 0, !1, {
        fileName: "app/components/dooh-finder/DoohDetails.tsx",
        lineNumber: 38,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "text-sm text-gray-600", children: `Recommended resolution: ${formatResolution(
        data.creative_dimension
      )}` }, void 0, !1, {
        fileName: "app/components/dooh-finder/DoohDetails.tsx",
        lineNumber: 41,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/dooh-finder/DoohDetails.tsx",
      lineNumber: 37,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { className: "bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full", children: "Book now" }, void 0, !1, {
      fileName: "app/components/dooh-finder/DoohDetails.tsx",
      lineNumber: 46,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/dooh-finder/DoohDetails.tsx",
      lineNumber: 45,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/dooh-finder/DoohDetails.tsx",
    lineNumber: 32,
    columnNumber: 9
  }, this);
}, formatResolution = (resolution) => {
  if (!resolution)
    return "";
  let [width, height] = resolution.split("x");
  return `${width}px by ${height}px`;
};

// app/components/slide-in-drawer/SlideInDrawer.tsx
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_react7 = require("react"), import_react8 = require("@headlessui/react"), import_outline2 = require("@heroicons/react/24/outline"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), SlideInDrawer = ({
  open,
  onClose,
  children
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react8.Transition.Root, { show: open, as: import_react7.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react8.Dialog, { as: "div", className: "relative z-10", onClose, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    import_react8.Transition.Child,
    {
      as: import_react7.Fragment,
      enter: "ease-in-out duration-500",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leave: "ease-in-out duration-500",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }, void 0, !1, {
        fileName: "app/components/slide-in-drawer/SlideInDrawer.tsx",
        lineNumber: 32,
        columnNumber: 25
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/slide-in-drawer/SlideInDrawer.tsx",
      lineNumber: 23,
      columnNumber: 21
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "fixed inset-0 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "absolute inset-0 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    import_react8.Transition.Child,
    {
      as: import_react7.Fragment,
      enter: "transform transition ease-in-out duration-500 sm:duration-700",
      enterFrom: "translate-x-full",
      enterTo: "translate-x-0",
      leave: "transform transition ease-in-out duration-500 sm:duration-700",
      leaveFrom: "translate-x-0",
      leaveTo: "translate-x-full",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react8.Dialog.Panel, { className: "pointer-events-auto relative w-screen max-w-xl", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          import_react8.Transition.Child,
          {
            as: import_react7.Fragment,
            enter: "ease-in-out duration-500",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in-out duration-500",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
              "button",
              {
                type: "button",
                className: "rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white",
                onClick: () => onClose(),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "sr-only", children: "Close panel" }, void 0, !1, {
                    fileName: "app/components/slide-in-drawer/SlideInDrawer.tsx",
                    lineNumber: 63,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                    import_outline2.XMarkIcon,
                    {
                      className: "h-6 w-6",
                      "aria-hidden": "true"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/slide-in-drawer/SlideInDrawer.tsx",
                      lineNumber: 66,
                      columnNumber: 53
                    },
                    this
                  )
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/slide-in-drawer/SlideInDrawer.tsx",
                lineNumber: 58,
                columnNumber: 49
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/slide-in-drawer/SlideInDrawer.tsx",
              lineNumber: 57,
              columnNumber: 45
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/slide-in-drawer/SlideInDrawer.tsx",
            lineNumber: 48,
            columnNumber: 41
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "relative mt-6 flex-1 px-4 sm:px-6", children }, void 0, !1, {
          fileName: "app/components/slide-in-drawer/SlideInDrawer.tsx",
          lineNumber: 74,
          columnNumber: 45
        }, this) }, void 0, !1, {
          fileName: "app/components/slide-in-drawer/SlideInDrawer.tsx",
          lineNumber: 73,
          columnNumber: 41
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/slide-in-drawer/SlideInDrawer.tsx",
        lineNumber: 47,
        columnNumber: 37
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/slide-in-drawer/SlideInDrawer.tsx",
      lineNumber: 38,
      columnNumber: 33
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/slide-in-drawer/SlideInDrawer.tsx",
    lineNumber: 37,
    columnNumber: 29
  }, this) }, void 0, !1, {
    fileName: "app/components/slide-in-drawer/SlideInDrawer.tsx",
    lineNumber: 36,
    columnNumber: 25
  }, this) }, void 0, !1, {
    fileName: "app/components/slide-in-drawer/SlideInDrawer.tsx",
    lineNumber: 35,
    columnNumber: 21
  }, this)
] }, void 0, !0, {
  fileName: "app/components/slide-in-drawer/SlideInDrawer.tsx",
  lineNumber: 22,
  columnNumber: 17
}, this) }, void 0, !1, {
  fileName: "app/components/slide-in-drawer/SlideInDrawer.tsx",
  lineNumber: 21,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/slide-in-drawer/SlideInDrawer.tsx",
  lineNumber: 20,
  columnNumber: 9
}, this);

// app/components/dooh-finder/DoohFinder.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), DoohFinder = ({ token, points }) => {
  let [activeDoohID, setaActiveDoohID] = (0, import_react9.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      ClusterMap,
      {
        token,
        points,
        onMarkerClick: (pinData) => {
          setaActiveDoohID(pinData.properties.id);
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/dooh-finder/DoohFinder.tsx",
        lineNumber: 17,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      SlideInDrawer,
      {
        open: activeDoohID > 0,
        onClose: () => setaActiveDoohID(0),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DoohDetails, { selectedId: activeDoohID }, void 0, !1, {
          fileName: "app/components/dooh-finder/DoohFinder.tsx",
          lineNumber: 28,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/dooh-finder/DoohFinder.tsx",
        lineNumber: 24,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/dooh-finder/DoohFinder.tsx",
    lineNumber: 16,
    columnNumber: 9
  }, this);
};

// app/utils/map.server.ts
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var mapMarkersToPoints = (markers) => (markers == null ? void 0 : markers.map((marker) => ({
  type: "Feature",
  properties: {
    siteId: marker.site_number,
    cluster: !1,
    ...marker
  },
  geometry: {
    type: "Point",
    coordinates: [marker.longitude ?? 0, marker.latitude ?? 0]
  }
}))) ?? [];

// app/routes/_index.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "Youdooh - Demo" },
  { name: "description", content: "Welcome to Youdooh!" }
], links2 = () => [
  {
    rel: "stylesheet",
    href: "https://api.tiles.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
  }
], loader2 = async (args) => {
  let mapBoxToken = process.env.MAPBOX_TOKEN, { data } = await supabase_default.from("creative_dimension").select(), points = mapMarkersToPoints(data);
  return { mapBoxToken, points };
};
function Index() {
  let { points, mapBoxToken } = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(NavBar, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 38,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(DoohFinder, { token: mapBoxToken, points }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var assets_manifest_default = { entry: { module: "/build/entry.client-26V4ZTO5.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-ZKWS7JOM.js", "/build/_shared/chunk-5US467UG.js", "/build/_shared/chunk-NMZL6IDN.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-U6F4VPY4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-KJSPAGDO.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/get-dooh-by-id": { id: "routes/get-dooh-by-id", parentId: "root", path: "get-dooh-by-id", index: void 0, caseSensitive: void 0, module: "/build/routes/get-dooh-by-id-JFUW6BNU.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "ef4a1b8b", hmr: { runtime: "/build/_shared/chunk-5US467UG.js", timestamp: 1689134995046 }, url: "/build/manifest-EF4A1B8B.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, dev = { port: 3001 }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/get-dooh-by-id": {
    id: "routes/get-dooh-by-id",
    parentId: "root",
    path: "get-dooh-by-id",
    index: void 0,
    caseSensitive: void 0,
    module: get_dooh_by_id_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  dev,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/index.js:
  (**
   * @remix-run/css-bundle v1.18.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=index.js.map
