import {
  require_react_dom
} from "/build/_shared/chunk-GIAAE3CH.js";
import {
  Link,
  useFetcher,
  useLoaderData
} from "/build/_shared/chunk-5X4GLJBL.js";
import {
  createHotContext
} from "/build/_shared/chunk-FRSL3OLM.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-NMZL6IDN.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:~/utils/map.server
var require_map = __commonJS({
  "empty-module:~/utils/map.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/_index.tsx
var import_jsx_runtime8 = __toESM(require_jsx_runtime());

// app/components/navbar/Navbar.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());

// node_modules/@heroicons/react/24/outline/esm/Bars3Icon.js
var React = __toESM(require_react(), 1);
function Bars3Icon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  }));
}
var ForwardRef = React.forwardRef(Bars3Icon);
var Bars3Icon_default = ForwardRef;

// node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js
var React2 = __toESM(require_react(), 1);
function XMarkIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React2.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React2.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React2.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18L18 6M6 6l12 12"
  }));
}
var ForwardRef2 = React2.forwardRef(XMarkIcon);
var XMarkIcon_default = ForwardRef2;

// app/components/navbar/Navbar.tsx
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/navbar/Navbar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/navbar/Navbar.tsx"
  );
  import.meta.hot.lastModified = "1689131715940.7266";
}
var NavBar = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
    className: "bg-white drop-shadow",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
      className: "mx-auto flex items-center justify-between p-6 lg:px-8",
      "aria-label": "Global",
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "flex lg:flex-none mr-8",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bars3Icon_default, {
          className: "block h-6 w-6",
          "aria-hidden": "true"
        })
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "flex lg:flex-1",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
          to: "/",
          className: "-m-1.5 p-1.5",
          children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
            className: "h-8 w-120",
            src: "/logo.png",
            alt: "Your Company"
          }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "sr-only",
            children: "YooDooh demo"
          })]
        })
      })]
    })
  });
};
_c = NavBar;
var _c;
$RefreshReg$(_c, "NavBar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/dooh-finder/DoohFinder.tsx
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var import_react48 = __toESM(require_react());

// app/components/cluster-map/ClusterMap.tsx
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var import_react16 = __toESM(require_react());

// node_modules/kdbush/index.js
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
];
var VERSION = 1;
var HEADER_SIZE = 8;
var KDBush = class {
  /**
   * Creates an index from raw `ArrayBuffer` data.
   * @param {ArrayBuffer} data
   */
  static from(data) {
    if (!(data instanceof ArrayBuffer)) {
      throw new Error("Data must be an instance of ArrayBuffer.");
    }
    const [magic, versionAndType] = new Uint8Array(data, 0, 2);
    if (magic !== 219) {
      throw new Error("Data does not appear to be in a KDBush format.");
    }
    const version = versionAndType >> 4;
    if (version !== VERSION) {
      throw new Error(`Got v${version} data when expected v${VERSION}.`);
    }
    const ArrayType = ARRAY_TYPES[versionAndType & 15];
    if (!ArrayType) {
      throw new Error("Unrecognized array type.");
    }
    const [nodeSize] = new Uint16Array(data, 2, 1);
    const [numItems] = new Uint32Array(data, 4, 1);
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
    this.numItems = +numItems;
    this.nodeSize = Math.min(Math.max(+nodeSize, 2), 65535);
    this.ArrayType = ArrayType;
    this.IndexArrayType = numItems < 65536 ? Uint16Array : Uint32Array;
    const arrayTypeIndex = ARRAY_TYPES.indexOf(this.ArrayType);
    const coordsByteSize = numItems * 2 * this.ArrayType.BYTES_PER_ELEMENT;
    const idsByteSize = numItems * this.IndexArrayType.BYTES_PER_ELEMENT;
    const padCoords = (8 - idsByteSize % 8) % 8;
    if (arrayTypeIndex < 0) {
      throw new Error(`Unexpected typed array class: ${ArrayType}.`);
    }
    if (data && data instanceof ArrayBuffer) {
      this.data = data;
      this.ids = new this.IndexArrayType(this.data, HEADER_SIZE, numItems);
      this.coords = new this.ArrayType(this.data, HEADER_SIZE + idsByteSize + padCoords, numItems * 2);
      this._pos = numItems * 2;
      this._finished = true;
    } else {
      this.data = new ArrayBuffer(HEADER_SIZE + coordsByteSize + idsByteSize + padCoords);
      this.ids = new this.IndexArrayType(this.data, HEADER_SIZE, numItems);
      this.coords = new this.ArrayType(this.data, HEADER_SIZE + idsByteSize + padCoords, numItems * 2);
      this._pos = 0;
      this._finished = false;
      new Uint8Array(this.data, 0, 2).set([219, (VERSION << 4) + arrayTypeIndex]);
      new Uint16Array(this.data, 2, 1)[0] = nodeSize;
      new Uint32Array(this.data, 4, 1)[0] = numItems;
    }
  }
  /**
   * Add a point to the index.
   * @param {number} x
   * @param {number} y
   * @returns {number} An incremental index associated with the added item (starting from `0`).
   */
  add(x4, y8) {
    const index = this._pos >> 1;
    this.ids[index] = index;
    this.coords[this._pos++] = x4;
    this.coords[this._pos++] = y8;
    return index;
  }
  /**
   * Perform indexing of the added points.
   */
  finish() {
    const numAdded = this._pos >> 1;
    if (numAdded !== this.numItems) {
      throw new Error(`Added ${numAdded} items when expected ${this.numItems}.`);
    }
    sort(this.ids, this.coords, this.nodeSize, 0, this.numItems - 1, 0);
    this._finished = true;
    return this;
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
    const { ids, coords, nodeSize } = this;
    const stack = [0, ids.length - 1, 0];
    const result = [];
    while (stack.length) {
      const axis = stack.pop() || 0;
      const right = stack.pop() || 0;
      const left = stack.pop() || 0;
      if (right - left <= nodeSize) {
        for (let i5 = left; i5 <= right; i5++) {
          const x5 = coords[2 * i5];
          const y9 = coords[2 * i5 + 1];
          if (x5 >= minX && x5 <= maxX && y9 >= minY && y9 <= maxY)
            result.push(ids[i5]);
        }
        continue;
      }
      const m9 = left + right >> 1;
      const x4 = coords[2 * m9];
      const y8 = coords[2 * m9 + 1];
      if (x4 >= minX && x4 <= maxX && y8 >= minY && y8 <= maxY)
        result.push(ids[m9]);
      if (axis === 0 ? minX <= x4 : minY <= y8) {
        stack.push(left);
        stack.push(m9 - 1);
        stack.push(1 - axis);
      }
      if (axis === 0 ? maxX >= x4 : maxY >= y8) {
        stack.push(m9 + 1);
        stack.push(right);
        stack.push(1 - axis);
      }
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
  within(qx, qy, r8) {
    if (!this._finished)
      throw new Error("Data not yet indexed - call index.finish().");
    const { ids, coords, nodeSize } = this;
    const stack = [0, ids.length - 1, 0];
    const result = [];
    const r22 = r8 * r8;
    while (stack.length) {
      const axis = stack.pop() || 0;
      const right = stack.pop() || 0;
      const left = stack.pop() || 0;
      if (right - left <= nodeSize) {
        for (let i5 = left; i5 <= right; i5++) {
          if (sqDist(coords[2 * i5], coords[2 * i5 + 1], qx, qy) <= r22)
            result.push(ids[i5]);
        }
        continue;
      }
      const m9 = left + right >> 1;
      const x4 = coords[2 * m9];
      const y8 = coords[2 * m9 + 1];
      if (sqDist(x4, y8, qx, qy) <= r22)
        result.push(ids[m9]);
      if (axis === 0 ? qx - r8 <= x4 : qy - r8 <= y8) {
        stack.push(left);
        stack.push(m9 - 1);
        stack.push(1 - axis);
      }
      if (axis === 0 ? qx + r8 >= x4 : qy + r8 >= y8) {
        stack.push(m9 + 1);
        stack.push(right);
        stack.push(1 - axis);
      }
    }
    return result;
  }
};
function sort(ids, coords, nodeSize, left, right, axis) {
  if (right - left <= nodeSize)
    return;
  const m9 = left + right >> 1;
  select(ids, coords, m9, left, right, axis);
  sort(ids, coords, nodeSize, left, m9 - 1, 1 - axis);
  sort(ids, coords, nodeSize, m9 + 1, right, 1 - axis);
}
function select(ids, coords, k, left, right, axis) {
  while (right > left) {
    if (right - left > 600) {
      const n6 = right - left + 1;
      const m9 = k - left + 1;
      const z3 = Math.log(n6);
      const s12 = 0.5 * Math.exp(2 * z3 / 3);
      const sd = 0.5 * Math.sqrt(z3 * s12 * (n6 - s12) / n6) * (m9 - n6 / 2 < 0 ? -1 : 1);
      const newLeft = Math.max(left, Math.floor(k - m9 * s12 / n6 + sd));
      const newRight = Math.min(right, Math.floor(k + (n6 - m9) * s12 / n6 + sd));
      select(ids, coords, k, newLeft, newRight, axis);
    }
    const t13 = coords[2 * k + axis];
    let i5 = left;
    let j4 = right;
    swapItem(ids, coords, left, k);
    if (coords[2 * right + axis] > t13)
      swapItem(ids, coords, left, right);
    while (i5 < j4) {
      swapItem(ids, coords, i5, j4);
      i5++;
      j4--;
      while (coords[2 * i5 + axis] < t13)
        i5++;
      while (coords[2 * j4 + axis] > t13)
        j4--;
    }
    if (coords[2 * left + axis] === t13)
      swapItem(ids, coords, left, j4);
    else {
      j4++;
      swapItem(ids, coords, j4, right);
    }
    if (j4 <= k)
      left = j4 + 1;
    if (k <= j4)
      right = j4 - 1;
  }
}
function swapItem(ids, coords, i5, j4) {
  swap(ids, i5, j4);
  swap(coords, 2 * i5, 2 * j4);
  swap(coords, 2 * i5 + 1, 2 * j4 + 1);
}
function swap(arr, i5, j4) {
  const tmp = arr[i5];
  arr[i5] = arr[j4];
  arr[j4] = tmp;
}
function sqDist(ax, ay, bx, by) {
  const dx = ax - bx;
  const dy = ay - by;
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
  log: false,
  // whether to log timing info
  // whether to generate numeric ids for input features (in vector tiles)
  generateId: false,
  // a reduce function for calculating custom cluster properties
  reduce: null,
  // (accumulated, props) => { accumulated.sum += props.sum; }
  // properties to use for individual points when running the reducer
  map: (props) => props
  // props => ({sum: props.my_value})
};
var fround = Math.fround || ((tmp) => (x4) => {
  tmp[0] = +x4;
  return tmp[0];
})(new Float32Array(1));
var OFFSET_ZOOM = 2;
var OFFSET_ID = 3;
var OFFSET_PARENT = 4;
var OFFSET_NUM = 5;
var OFFSET_PROP = 6;
var Supercluster = class {
  constructor(options) {
    this.options = Object.assign(Object.create(defaultOptions), options);
    this.trees = new Array(this.options.maxZoom + 1);
    this.stride = this.options.reduce ? 7 : 6;
    this.clusterProps = [];
  }
  load(points) {
    const { log, minZoom, maxZoom } = this.options;
    if (log)
      console.time("total time");
    const timerId = `prepare ${points.length} points`;
    if (log)
      console.time(timerId);
    this.points = points;
    const data = [];
    for (let i5 = 0; i5 < points.length; i5++) {
      const p8 = points[i5];
      if (!p8.geometry)
        continue;
      const [lng, lat] = p8.geometry.coordinates;
      const x4 = fround(lngX(lng));
      const y8 = fround(latY(lat));
      data.push(
        x4,
        y8,
        // projected point coordinates
        Infinity,
        // the last zoom the point was processed at
        i5,
        // index of the source feature in the original input array
        -1,
        // parent cluster id
        1
        // number of points in a cluster
      );
      if (this.options.reduce)
        data.push(0);
    }
    let tree = this.trees[maxZoom + 1] = this._createTree(data);
    if (log)
      console.timeEnd(timerId);
    for (let z3 = maxZoom; z3 >= minZoom; z3--) {
      const now = +Date.now();
      tree = this.trees[z3] = this._createTree(this._cluster(tree, z3));
      if (log)
        console.log("z%d: %d clusters in %dms", z3, tree.numItems, +Date.now() - now);
    }
    if (log)
      console.timeEnd("total time");
    return this;
  }
  getClusters(bbox, zoom) {
    let minLng = ((bbox[0] + 180) % 360 + 360) % 360 - 180;
    const minLat = Math.max(-90, Math.min(90, bbox[1]));
    let maxLng = bbox[2] === 180 ? 180 : ((bbox[2] + 180) % 360 + 360) % 360 - 180;
    const maxLat = Math.max(-90, Math.min(90, bbox[3]));
    if (bbox[2] - bbox[0] >= 360) {
      minLng = -180;
      maxLng = 180;
    } else if (minLng > maxLng) {
      const easternHem = this.getClusters([minLng, minLat, 180, maxLat], zoom);
      const westernHem = this.getClusters([-180, minLat, maxLng, maxLat], zoom);
      return easternHem.concat(westernHem);
    }
    const tree = this.trees[this._limitZoom(zoom)];
    const ids = tree.range(lngX(minLng), latY(maxLat), lngX(maxLng), latY(minLat));
    const data = tree.data;
    const clusters = [];
    for (const id of ids) {
      const k = this.stride * id;
      clusters.push(data[k + OFFSET_NUM] > 1 ? getClusterJSON(data, k, this.clusterProps) : this.points[data[k + OFFSET_ID]]);
    }
    return clusters;
  }
  getChildren(clusterId) {
    const originId = this._getOriginId(clusterId);
    const originZoom = this._getOriginZoom(clusterId);
    const errorMsg = "No cluster with the specified id.";
    const tree = this.trees[originZoom];
    if (!tree)
      throw new Error(errorMsg);
    const data = tree.data;
    if (originId * this.stride >= data.length)
      throw new Error(errorMsg);
    const r8 = this.options.radius / (this.options.extent * Math.pow(2, originZoom - 1));
    const x4 = data[originId * this.stride];
    const y8 = data[originId * this.stride + 1];
    const ids = tree.within(x4, y8, r8);
    const children = [];
    for (const id of ids) {
      const k = id * this.stride;
      if (data[k + OFFSET_PARENT] === clusterId) {
        children.push(data[k + OFFSET_NUM] > 1 ? getClusterJSON(data, k, this.clusterProps) : this.points[data[k + OFFSET_ID]]);
      }
    }
    if (children.length === 0)
      throw new Error(errorMsg);
    return children;
  }
  getLeaves(clusterId, limit, offset) {
    limit = limit || 10;
    offset = offset || 0;
    const leaves = [];
    this._appendLeaves(leaves, clusterId, limit, offset, 0);
    return leaves;
  }
  getTile(z3, x4, y8) {
    const tree = this.trees[this._limitZoom(z3)];
    const z22 = Math.pow(2, z3);
    const { extent, radius } = this.options;
    const p8 = radius / extent;
    const top = (y8 - p8) / z22;
    const bottom = (y8 + 1 + p8) / z22;
    const tile = {
      features: []
    };
    this._addTileFeatures(
      tree.range((x4 - p8) / z22, top, (x4 + 1 + p8) / z22, bottom),
      tree.data,
      x4,
      y8,
      z22,
      tile
    );
    if (x4 === 0) {
      this._addTileFeatures(
        tree.range(1 - p8 / z22, top, 1, bottom),
        tree.data,
        z22,
        y8,
        z22,
        tile
      );
    }
    if (x4 === z22 - 1) {
      this._addTileFeatures(
        tree.range(0, top, p8 / z22, bottom),
        tree.data,
        -1,
        y8,
        z22,
        tile
      );
    }
    return tile.features.length ? tile : null;
  }
  getClusterExpansionZoom(clusterId) {
    let expansionZoom = this._getOriginZoom(clusterId) - 1;
    while (expansionZoom <= this.options.maxZoom) {
      const children = this.getChildren(clusterId);
      expansionZoom++;
      if (children.length !== 1)
        break;
      clusterId = children[0].properties.cluster_id;
    }
    return expansionZoom;
  }
  _appendLeaves(result, clusterId, limit, offset, skipped) {
    const children = this.getChildren(clusterId);
    for (const child of children) {
      const props = child.properties;
      if (props && props.cluster) {
        if (skipped + props.point_count <= offset) {
          skipped += props.point_count;
        } else {
          skipped = this._appendLeaves(result, props.cluster_id, limit, offset, skipped);
        }
      } else if (skipped < offset) {
        skipped++;
      } else {
        result.push(child);
      }
      if (result.length === limit)
        break;
    }
    return skipped;
  }
  _createTree(data) {
    const tree = new KDBush(data.length / this.stride | 0, this.options.nodeSize, Float32Array);
    for (let i5 = 0; i5 < data.length; i5 += this.stride)
      tree.add(data[i5], data[i5 + 1]);
    tree.finish();
    tree.data = data;
    return tree;
  }
  _addTileFeatures(ids, data, x4, y8, z22, tile) {
    for (const i5 of ids) {
      const k = i5 * this.stride;
      const isCluster = data[k + OFFSET_NUM] > 1;
      let tags, px, py;
      if (isCluster) {
        tags = getClusterProperties(data, k, this.clusterProps);
        px = data[k];
        py = data[k + 1];
      } else {
        const p8 = this.points[data[k + OFFSET_ID]];
        tags = p8.properties;
        const [lng, lat] = p8.geometry.coordinates;
        px = lngX(lng);
        py = latY(lat);
      }
      const f8 = {
        type: 1,
        geometry: [[
          Math.round(this.options.extent * (px * z22 - x4)),
          Math.round(this.options.extent * (py * z22 - y8))
        ]],
        tags
      };
      let id;
      if (isCluster || this.options.generateId) {
        id = data[k + OFFSET_ID];
      } else {
        id = this.points[data[k + OFFSET_ID]].id;
      }
      if (id !== void 0)
        f8.id = id;
      tile.features.push(f8);
    }
  }
  _limitZoom(z3) {
    return Math.max(this.options.minZoom, Math.min(Math.floor(+z3), this.options.maxZoom + 1));
  }
  _cluster(tree, zoom) {
    const { radius, extent, reduce, minPoints } = this.options;
    const r8 = radius / (extent * Math.pow(2, zoom));
    const data = tree.data;
    const nextData = [];
    const stride = this.stride;
    for (let i5 = 0; i5 < data.length; i5 += stride) {
      if (data[i5 + OFFSET_ZOOM] <= zoom)
        continue;
      data[i5 + OFFSET_ZOOM] = zoom;
      const x4 = data[i5];
      const y8 = data[i5 + 1];
      const neighborIds = tree.within(data[i5], data[i5 + 1], r8);
      const numPointsOrigin = data[i5 + OFFSET_NUM];
      let numPoints = numPointsOrigin;
      for (const neighborId of neighborIds) {
        const k = neighborId * stride;
        if (data[k + OFFSET_ZOOM] > zoom)
          numPoints += data[k + OFFSET_NUM];
      }
      if (numPoints > numPointsOrigin && numPoints >= minPoints) {
        let wx = x4 * numPointsOrigin;
        let wy = y8 * numPointsOrigin;
        let clusterProperties;
        let clusterPropIndex = -1;
        const id = ((i5 / stride | 0) << 5) + (zoom + 1) + this.points.length;
        for (const neighborId of neighborIds) {
          const k = neighborId * stride;
          if (data[k + OFFSET_ZOOM] <= zoom)
            continue;
          data[k + OFFSET_ZOOM] = zoom;
          const numPoints2 = data[k + OFFSET_NUM];
          wx += data[k] * numPoints2;
          wy += data[k + 1] * numPoints2;
          data[k + OFFSET_PARENT] = id;
          if (reduce) {
            if (!clusterProperties) {
              clusterProperties = this._map(data, i5, true);
              clusterPropIndex = this.clusterProps.length;
              this.clusterProps.push(clusterProperties);
            }
            reduce(clusterProperties, this._map(data, k));
          }
        }
        data[i5 + OFFSET_PARENT] = id;
        nextData.push(wx / numPoints, wy / numPoints, Infinity, id, -1, numPoints);
        if (reduce)
          nextData.push(clusterPropIndex);
      } else {
        for (let j4 = 0; j4 < stride; j4++)
          nextData.push(data[i5 + j4]);
        if (numPoints > 1) {
          for (const neighborId of neighborIds) {
            const k = neighborId * stride;
            if (data[k + OFFSET_ZOOM] <= zoom)
              continue;
            data[k + OFFSET_ZOOM] = zoom;
            for (let j4 = 0; j4 < stride; j4++)
              nextData.push(data[k + j4]);
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
  _map(data, i5, clone) {
    if (data[i5 + OFFSET_NUM] > 1) {
      const props = this.clusterProps[data[i5 + OFFSET_PROP]];
      return clone ? Object.assign({}, props) : props;
    }
    const original = this.points[data[i5 + OFFSET_ID]].properties;
    const result = this.options.map(original);
    return clone && result === original ? Object.assign({}, result) : result;
  }
};
function getClusterJSON(data, i5, clusterProps) {
  return {
    type: "Feature",
    id: data[i5 + OFFSET_ID],
    properties: getClusterProperties(data, i5, clusterProps),
    geometry: {
      type: "Point",
      coordinates: [xLng(data[i5]), yLat(data[i5 + 1])]
    }
  };
}
function getClusterProperties(data, i5, clusterProps) {
  const count = data[i5 + OFFSET_NUM];
  const abbrev = count >= 1e4 ? `${Math.round(count / 1e3)}k` : count >= 1e3 ? `${Math.round(count / 100) / 10}k` : count;
  const propIndex = data[i5 + OFFSET_PROP];
  const properties = propIndex === -1 ? {} : Object.assign({}, clusterProps[propIndex]);
  return Object.assign(properties, {
    cluster: true,
    cluster_id: data[i5 + OFFSET_ID],
    point_count: count,
    point_count_abbreviated: abbrev
  });
}
function lngX(lng) {
  return lng / 360 + 0.5;
}
function latY(lat) {
  const sin = Math.sin(lat * Math.PI / 180);
  const y8 = 0.5 - 0.25 * Math.log((1 + sin) / (1 - sin)) / Math.PI;
  return y8 < 0 ? 0 : y8 > 1 ? 1 : y8;
}
function xLng(x4) {
  return (x4 - 0.5) * 360;
}
function yLat(y8) {
  const y22 = (180 - y8 * 360) * Math.PI / 180;
  return 360 * Math.atan(Math.exp(y22)) / Math.PI - 90;
}

// node_modules/react-map-gl/dist/esm/exports-mapbox.js
var React7 = __toESM(require_react());

// node_modules/react-map-gl/dist/esm/components/map.js
var React4 = __toESM(require_react());
var import_react4 = __toESM(require_react());

// node_modules/react-map-gl/dist/esm/components/use-map.js
var React3 = __toESM(require_react());
var import_react2 = __toESM(require_react());
var MountedMapsContext = React3.createContext(null);

// node_modules/react-map-gl/dist/esm/utils/transform.js
function cloneTransform(tr) {
  const newTransform = tr.clone();
  newTransform.pixelsToGLUnits = tr.pixelsToGLUnits;
  return newTransform;
}
function transformToViewState(tr) {
  return {
    longitude: tr.center.lng,
    latitude: tr.center.lat,
    zoom: tr.zoom,
    pitch: tr.pitch,
    bearing: tr.bearing,
    padding: tr.padding
  };
}
function applyViewStateToTransform(tr, props) {
  const v3 = props.viewState || props;
  let changed = false;
  if ("longitude" in v3 && "latitude" in v3) {
    const center = tr.center;
    tr.center = new center.constructor(v3.longitude, v3.latitude);
    changed = changed || center !== tr.center;
  }
  if ("zoom" in v3) {
    const zoom = tr.zoom;
    tr.zoom = v3.zoom;
    changed = changed || zoom !== tr.zoom;
  }
  if ("bearing" in v3) {
    const bearing = tr.bearing;
    tr.bearing = v3.bearing;
    changed = changed || bearing !== tr.bearing;
  }
  if ("pitch" in v3) {
    const pitch = tr.pitch;
    tr.pitch = v3.pitch;
    changed = changed || pitch !== tr.pitch;
  }
  if (v3.padding && !tr.isPaddingEqual(v3.padding)) {
    changed = true;
    tr.padding = v3.padding;
  }
  return changed;
}

// node_modules/react-map-gl/dist/esm/utils/style-utils.js
var refProps = ["type", "source", "source-layer", "minzoom", "maxzoom", "filter", "layout"];
function normalizeStyle(style) {
  if (!style) {
    return null;
  }
  if (typeof style === "string") {
    return style;
  }
  if ("toJS" in style) {
    style = style.toJS();
  }
  if (!style.layers) {
    return style;
  }
  const layerIndex = {};
  for (const layer of style.layers) {
    layerIndex[layer.id] = layer;
  }
  const layers = style.layers.map((layer) => {
    let normalizedLayer = null;
    if ("interactive" in layer) {
      normalizedLayer = Object.assign({}, layer);
      delete normalizedLayer.interactive;
    }
    const layerRef = layerIndex[layer.ref];
    if (layerRef) {
      normalizedLayer = normalizedLayer || Object.assign({}, layer);
      delete normalizedLayer.ref;
      for (const propName of refProps) {
        if (propName in layerRef) {
          normalizedLayer[propName] = layerRef[propName];
        }
      }
    }
    return normalizedLayer || layer;
  });
  return { ...style, layers };
}

// node_modules/react-map-gl/dist/esm/utils/deep-equal.js
function arePointsEqual(a9, b4) {
  const ax = Array.isArray(a9) ? a9[0] : a9 ? a9.x : 0;
  const ay = Array.isArray(a9) ? a9[1] : a9 ? a9.y : 0;
  const bx = Array.isArray(b4) ? b4[0] : b4 ? b4.x : 0;
  const by = Array.isArray(b4) ? b4[1] : b4 ? b4.y : 0;
  return ax === bx && ay === by;
}
function deepEqual(a9, b4) {
  if (a9 === b4) {
    return true;
  }
  if (!a9 || !b4) {
    return false;
  }
  if (Array.isArray(a9)) {
    if (!Array.isArray(b4) || a9.length !== b4.length) {
      return false;
    }
    for (let i5 = 0; i5 < a9.length; i5++) {
      if (!deepEqual(a9[i5], b4[i5])) {
        return false;
      }
    }
    return true;
  } else if (Array.isArray(b4)) {
    return false;
  }
  if (typeof a9 === "object" && typeof b4 === "object") {
    const aKeys = Object.keys(a9);
    const bKeys = Object.keys(b4);
    if (aKeys.length !== bKeys.length) {
      return false;
    }
    for (const key of aKeys) {
      if (!b4.hasOwnProperty(key)) {
        return false;
      }
      if (!deepEqual(a9[key], b4[key])) {
        return false;
      }
    }
    return true;
  }
  return false;
}

// node_modules/react-map-gl/dist/esm/mapbox/mapbox.js
var DEFAULT_STYLE = { version: 8, sources: {}, layers: [] };
var pointerEvents = {
  mousedown: "onMouseDown",
  mouseup: "onMouseUp",
  mouseover: "onMouseOver",
  mousemove: "onMouseMove",
  click: "onClick",
  dblclick: "onDblClick",
  mouseenter: "onMouseEnter",
  mouseleave: "onMouseLeave",
  mouseout: "onMouseOut",
  contextmenu: "onContextMenu",
  touchstart: "onTouchStart",
  touchend: "onTouchEnd",
  touchmove: "onTouchMove",
  touchcancel: "onTouchCancel"
};
var cameraEvents = {
  movestart: "onMoveStart",
  move: "onMove",
  moveend: "onMoveEnd",
  dragstart: "onDragStart",
  drag: "onDrag",
  dragend: "onDragEnd",
  zoomstart: "onZoomStart",
  zoom: "onZoom",
  zoomend: "onZoomEnd",
  rotatestart: "onRotateStart",
  rotate: "onRotate",
  rotateend: "onRotateEnd",
  pitchstart: "onPitchStart",
  pitch: "onPitch",
  pitchend: "onPitchEnd"
};
var otherEvents = {
  wheel: "onWheel",
  boxzoomstart: "onBoxZoomStart",
  boxzoomend: "onBoxZoomEnd",
  boxzoomcancel: "onBoxZoomCancel",
  resize: "onResize",
  load: "onLoad",
  render: "onRender",
  idle: "onIdle",
  remove: "onRemove",
  data: "onData",
  styledata: "onStyleData",
  sourcedata: "onSourceData",
  error: "onError"
};
var settingNames = [
  "minZoom",
  "maxZoom",
  "minPitch",
  "maxPitch",
  "maxBounds",
  "projection",
  "renderWorldCopies"
];
var handlerNames = [
  "scrollZoom",
  "boxZoom",
  "dragRotate",
  "dragPan",
  "keyboard",
  "doubleClickZoom",
  "touchZoomRotate",
  "touchPitch"
];
var Mapbox = class {
  constructor(MapClass, props, container) {
    this._map = null;
    this._internalUpdate = false;
    this._inRender = false;
    this._hoveredFeatures = null;
    this._deferredEvents = {
      move: false,
      zoom: false,
      pitch: false,
      rotate: false
    };
    this._onEvent = (e5) => {
      const cb = this.props[otherEvents[e5.type]];
      if (cb) {
        cb(e5);
      } else if (e5.type === "error") {
        console.error(e5.error);
      }
    };
    this._onPointerEvent = (e5) => {
      if (e5.type === "mousemove" || e5.type === "mouseout") {
        this._updateHover(e5);
      }
      const cb = this.props[pointerEvents[e5.type]];
      if (cb) {
        if (this.props.interactiveLayerIds && e5.type !== "mouseover" && e5.type !== "mouseout") {
          e5.features = this._hoveredFeatures || this._queryRenderedFeatures(e5.point);
        }
        cb(e5);
        delete e5.features;
      }
    };
    this._onCameraEvent = (e5) => {
      if (!this._internalUpdate) {
        const cb = this.props[cameraEvents[e5.type]];
        if (cb) {
          cb(e5);
        }
      }
      if (e5.type in this._deferredEvents) {
        this._deferredEvents[e5.type] = false;
      }
    };
    this._MapClass = MapClass;
    this.props = props;
    this._initialize(container);
  }
  get map() {
    return this._map;
  }
  get transform() {
    return this._renderTransform;
  }
  setProps(props) {
    const oldProps = this.props;
    this.props = props;
    const settingsChanged = this._updateSettings(props, oldProps);
    if (settingsChanged) {
      this._createShadowTransform(this._map);
    }
    const sizeChanged = this._updateSize(props);
    const viewStateChanged = this._updateViewState(props, true);
    this._updateStyle(props, oldProps);
    this._updateStyleComponents(props, oldProps);
    this._updateHandlers(props, oldProps);
    if (settingsChanged || sizeChanged || viewStateChanged && !this._map.isMoving()) {
      this.redraw();
    }
  }
  static reuse(props, container) {
    const that = Mapbox.savedMaps.pop();
    if (!that) {
      return null;
    }
    const map = that.map;
    const oldContainer = map.getContainer();
    container.className = oldContainer.className;
    while (oldContainer.childNodes.length > 0) {
      container.appendChild(oldContainer.childNodes[0]);
    }
    map._container = container;
    const resizeObserver = map._resizeObserver;
    if (resizeObserver) {
      resizeObserver.disconnect();
      resizeObserver.observe(container);
    }
    that.setProps({ ...props, styleDiffing: false });
    map.resize();
    const { initialViewState } = props;
    if (initialViewState) {
      if (initialViewState.bounds) {
        map.fitBounds(initialViewState.bounds, { ...initialViewState.fitBoundsOptions, duration: 0 });
      } else {
        that._updateViewState(initialViewState, false);
      }
    }
    if (map.isStyleLoaded()) {
      map.fire("load");
    } else {
      map.once("styledata", () => map.fire("load"));
    }
    map._update();
    return that;
  }
  /* eslint-disable complexity,max-statements */
  _initialize(container) {
    const { props } = this;
    const { mapStyle = DEFAULT_STYLE } = props;
    const mapOptions = {
      ...props,
      ...props.initialViewState,
      accessToken: props.mapboxAccessToken || getAccessTokenFromEnv() || null,
      container,
      style: normalizeStyle(mapStyle)
    };
    const viewState = mapOptions.initialViewState || mapOptions.viewState || mapOptions;
    Object.assign(mapOptions, {
      center: [viewState.longitude || 0, viewState.latitude || 0],
      zoom: viewState.zoom || 0,
      pitch: viewState.pitch || 0,
      bearing: viewState.bearing || 0
    });
    if (props.gl) {
      const getContext = HTMLCanvasElement.prototype.getContext;
      HTMLCanvasElement.prototype.getContext = () => {
        HTMLCanvasElement.prototype.getContext = getContext;
        return props.gl;
      };
    }
    const map = new this._MapClass(mapOptions);
    if (viewState.padding) {
      map.setPadding(viewState.padding);
    }
    if (props.cursor) {
      map.getCanvas().style.cursor = props.cursor;
    }
    this._createShadowTransform(map);
    const renderMap = map._render;
    map._render = (arg) => {
      this._inRender = true;
      renderMap.call(map, arg);
      this._inRender = false;
    };
    const runRenderTaskQueue = map._renderTaskQueue.run;
    map._renderTaskQueue.run = (arg) => {
      runRenderTaskQueue.call(map._renderTaskQueue, arg);
      this._onBeforeRepaint();
    };
    map.on("render", () => this._onAfterRepaint());
    const fireEvent = map.fire;
    map.fire = this._fireEvent.bind(this, fireEvent);
    map.on("resize", () => {
      this._renderTransform.resize(map.transform.width, map.transform.height);
    });
    map.on("styledata", () => this._updateStyleComponents(this.props, {}));
    map.on("sourcedata", () => this._updateStyleComponents(this.props, {}));
    for (const eventName in pointerEvents) {
      map.on(eventName, this._onPointerEvent);
    }
    for (const eventName in cameraEvents) {
      map.on(eventName, this._onCameraEvent);
    }
    for (const eventName in otherEvents) {
      map.on(eventName, this._onEvent);
    }
    this._map = map;
  }
  /* eslint-enable complexity,max-statements */
  recycle() {
    const container = this.map.getContainer();
    const children = container.querySelector("[mapboxgl-children]");
    children === null || children === void 0 ? void 0 : children.remove();
    Mapbox.savedMaps.push(this);
  }
  destroy() {
    this._map.remove();
  }
  // Force redraw the map now. Typically resize() and jumpTo() is reflected in the next
  // render cycle, which is managed by Mapbox's animation loop.
  // This removes the synchronization issue caused by requestAnimationFrame.
  redraw() {
    const map = this._map;
    if (!this._inRender && map.style) {
      if (map._frame) {
        map._frame.cancel();
        map._frame = null;
      }
      map._render();
    }
  }
  _createShadowTransform(map) {
    const renderTransform = cloneTransform(map.transform);
    map.painter.transform = renderTransform;
    this._renderTransform = renderTransform;
  }
  /* Trigger map resize if size is controlled
     @param {object} nextProps
     @returns {bool} true if size has changed
   */
  _updateSize(nextProps) {
    const { viewState } = nextProps;
    if (viewState) {
      const map = this._map;
      if (viewState.width !== map.transform.width || viewState.height !== map.transform.height) {
        map.resize();
        return true;
      }
    }
    return false;
  }
  // Adapted from map.jumpTo
  /* Update camera to match props
     @param {object} nextProps
     @param {bool} triggerEvents - should fire camera events
     @returns {bool} true if anything is changed
   */
  _updateViewState(nextProps, triggerEvents) {
    if (this._internalUpdate) {
      return false;
    }
    const map = this._map;
    const tr = this._renderTransform;
    const { zoom, pitch, bearing } = tr;
    const isMoving = map.isMoving();
    if (isMoving) {
      tr.cameraElevationReference = "sea";
    }
    const changed = applyViewStateToTransform(tr, {
      ...transformToViewState(map.transform),
      ...nextProps
    });
    if (isMoving) {
      tr.cameraElevationReference = "ground";
    }
    if (changed && triggerEvents) {
      const deferredEvents = this._deferredEvents;
      deferredEvents.move = true;
      deferredEvents.zoom || (deferredEvents.zoom = zoom !== tr.zoom);
      deferredEvents.rotate || (deferredEvents.rotate = bearing !== tr.bearing);
      deferredEvents.pitch || (deferredEvents.pitch = pitch !== tr.pitch);
    }
    if (!isMoving) {
      applyViewStateToTransform(map.transform, nextProps);
    }
    return changed;
  }
  /* Update camera constraints and projection settings to match props
     @param {object} nextProps
     @param {object} currProps
     @returns {bool} true if anything is changed
   */
  _updateSettings(nextProps, currProps) {
    const map = this._map;
    let changed = false;
    for (const propName of settingNames) {
      if (propName in nextProps && !deepEqual(nextProps[propName], currProps[propName])) {
        changed = true;
        const setter = map[`set${propName[0].toUpperCase()}${propName.slice(1)}`];
        setter === null || setter === void 0 ? void 0 : setter.call(map, nextProps[propName]);
      }
    }
    return changed;
  }
  /* Update map style to match props
     @param {object} nextProps
     @param {object} currProps
     @returns {bool} true if style is changed
   */
  _updateStyle(nextProps, currProps) {
    if (nextProps.cursor !== currProps.cursor) {
      this._map.getCanvas().style.cursor = nextProps.cursor;
    }
    if (nextProps.mapStyle !== currProps.mapStyle) {
      const { mapStyle = DEFAULT_STYLE, styleDiffing = true } = nextProps;
      const options = {
        diff: styleDiffing
      };
      if ("localIdeographFontFamily" in nextProps) {
        options.localIdeographFontFamily = nextProps.localIdeographFontFamily;
      }
      this._map.setStyle(normalizeStyle(mapStyle), options);
      return true;
    }
    return false;
  }
  /* Update fog, light and terrain to match props
     @param {object} nextProps
     @param {object} currProps
     @returns {bool} true if anything is changed
   */
  _updateStyleComponents(nextProps, currProps) {
    const map = this._map;
    let changed = false;
    if (map.isStyleLoaded()) {
      if ("light" in nextProps && map.setLight && !deepEqual(nextProps.light, currProps.light)) {
        changed = true;
        map.setLight(nextProps.light);
      }
      if ("fog" in nextProps && map.setFog && !deepEqual(nextProps.fog, currProps.fog)) {
        changed = true;
        map.setFog(nextProps.fog);
      }
      if ("terrain" in nextProps && map.setTerrain && !deepEqual(nextProps.terrain, currProps.terrain)) {
        if (!nextProps.terrain || map.getSource(nextProps.terrain.source)) {
          changed = true;
          map.setTerrain(nextProps.terrain);
        }
      }
    }
    return changed;
  }
  /* Update interaction handlers to match props
     @param {object} nextProps
     @param {object} currProps
     @returns {bool} true if anything is changed
   */
  _updateHandlers(nextProps, currProps) {
    var _a, _b;
    const map = this._map;
    let changed = false;
    for (const propName of handlerNames) {
      const newValue = (_a = nextProps[propName]) !== null && _a !== void 0 ? _a : true;
      const oldValue = (_b = currProps[propName]) !== null && _b !== void 0 ? _b : true;
      if (!deepEqual(newValue, oldValue)) {
        changed = true;
        if (newValue) {
          map[propName].enable(newValue);
        } else {
          map[propName].disable();
        }
      }
    }
    return changed;
  }
  _queryRenderedFeatures(point) {
    const map = this._map;
    const { interactiveLayerIds = [] } = this.props;
    try {
      return map.queryRenderedFeatures(point, {
        layers: interactiveLayerIds.filter(map.getLayer.bind(map))
      });
    } catch (_a) {
      return [];
    }
  }
  _updateHover(e5) {
    var _a;
    const { props } = this;
    const shouldTrackHoveredFeatures = props.interactiveLayerIds && (props.onMouseMove || props.onMouseEnter || props.onMouseLeave);
    if (shouldTrackHoveredFeatures) {
      const eventType = e5.type;
      const wasHovering = ((_a = this._hoveredFeatures) === null || _a === void 0 ? void 0 : _a.length) > 0;
      const features = this._queryRenderedFeatures(e5.point);
      const isHovering = features.length > 0;
      if (!isHovering && wasHovering) {
        e5.type = "mouseleave";
        this._onPointerEvent(e5);
      }
      this._hoveredFeatures = features;
      if (isHovering && !wasHovering) {
        e5.type = "mouseenter";
        this._onPointerEvent(e5);
      }
      e5.type = eventType;
    } else {
      this._hoveredFeatures = null;
    }
  }
  _fireEvent(baseFire, event, properties) {
    const map = this._map;
    const tr = map.transform;
    const eventType = typeof event === "string" ? event : event.type;
    if (eventType === "move") {
      this._updateViewState(this.props, false);
    }
    if (eventType in cameraEvents) {
      if (typeof event === "object") {
        event.viewState = transformToViewState(tr);
      }
      if (this._map.isMoving()) {
        map.transform = this._renderTransform;
        baseFire.call(map, event, properties);
        map.transform = tr;
        return map;
      }
    }
    baseFire.call(map, event, properties);
    return map;
  }
  // All camera manipulations are complete, ready to repaint
  _onBeforeRepaint() {
    const map = this._map;
    this._internalUpdate = true;
    for (const eventType in this._deferredEvents) {
      if (this._deferredEvents[eventType]) {
        map.fire(eventType);
      }
    }
    this._internalUpdate = false;
    const tr = this._map.transform;
    this._map.transform = this._renderTransform;
    this._onAfterRepaint = () => {
      this._map.transform = tr;
    };
  }
};
Mapbox.savedMaps = [];
function getAccessTokenFromEnv() {
  let accessToken = null;
  if (typeof location !== "undefined") {
    const match = /access_token=([^&\/]*)/.exec(location.search);
    accessToken = match && match[1];
  }
  try {
    accessToken = accessToken || process.env.MapboxAccessToken;
  } catch (_a) {
  }
  try {
    accessToken = accessToken || process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
  } catch (_b) {
  }
  return accessToken;
}

// node_modules/react-map-gl/dist/esm/mapbox/create-ref.js
var skipMethods = [
  "setMaxBounds",
  "setMinZoom",
  "setMaxZoom",
  "setMinPitch",
  "setMaxPitch",
  "setRenderWorldCopies",
  "setProjection",
  "setStyle",
  "addSource",
  "removeSource",
  "addLayer",
  "removeLayer",
  "setLayerZoomRange",
  "setFilter",
  "setPaintProperty",
  "setLayoutProperty",
  "setLight",
  "setTerrain",
  "setFog",
  "remove"
];
function createRef(mapInstance) {
  if (!mapInstance) {
    return null;
  }
  const map = mapInstance.map;
  const result = {
    getMap: () => map,
    // Overwrite getters to use our shadow transform
    getCenter: () => mapInstance.transform.center,
    getZoom: () => mapInstance.transform.zoom,
    getBearing: () => mapInstance.transform.bearing,
    getPitch: () => mapInstance.transform.pitch,
    getPadding: () => mapInstance.transform.padding,
    getBounds: () => mapInstance.transform.getBounds(),
    project: (lnglat) => {
      const tr = map.transform;
      map.transform = mapInstance.transform;
      const result2 = map.project(lnglat);
      map.transform = tr;
      return result2;
    },
    unproject: (point) => {
      const tr = map.transform;
      map.transform = mapInstance.transform;
      const result2 = map.unproject(point);
      map.transform = tr;
      return result2;
    },
    // options diverge between mapbox and maplibre
    queryTerrainElevation: (lnglat, options) => {
      const tr = map.transform;
      map.transform = mapInstance.transform;
      const result2 = map.queryTerrainElevation(lnglat, options);
      map.transform = tr;
      return result2;
    }
  };
  for (const key of getMethodNames(map)) {
    if (!(key in result) && !skipMethods.includes(key)) {
      result[key] = map[key].bind(map);
    }
  }
  return result;
}
function getMethodNames(obj) {
  const result = /* @__PURE__ */ new Set();
  let proto = obj;
  while (proto) {
    for (const key of Object.getOwnPropertyNames(proto)) {
      if (key[0] !== "_" && typeof obj[key] === "function" && key !== "fire" && key !== "setEventedParent") {
        result.add(key);
      }
    }
    proto = Object.getPrototypeOf(proto);
  }
  return Array.from(result);
}

// node_modules/react-map-gl/dist/esm/utils/use-isomorphic-layout-effect.js
var import_react3 = __toESM(require_react());
var useIsomorphicLayoutEffect = typeof document !== "undefined" ? import_react3.useLayoutEffect : import_react3.useEffect;
var use_isomorphic_layout_effect_default = useIsomorphicLayoutEffect;

// node_modules/react-map-gl/dist/esm/utils/set-globals.js
var globalSettings = [
  "baseApiUrl",
  "maxParallelImageRequests",
  "workerClass",
  "workerCount",
  "workerUrl"
];
function setGlobals(mapLib2, props) {
  for (const key of globalSettings) {
    if (key in props) {
      mapLib2[key] = props[key];
    }
  }
  const { RTLTextPlugin = "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js" } = props;
  if (RTLTextPlugin && mapLib2.getRTLTextPluginStatus && mapLib2.getRTLTextPluginStatus() === "unavailable") {
    mapLib2.setRTLTextPlugin(RTLTextPlugin, (error) => {
      if (error) {
        console.error(error);
      }
    }, false);
  }
}

// node_modules/react-map-gl/dist/esm/components/map.js
var MapContext = React4.createContext(null);
function Map2(props, ref, defaultLib) {
  const mountedMapsContext = (0, import_react4.useContext)(MountedMapsContext);
  const [mapInstance, setMapInstance] = (0, import_react4.useState)(null);
  const containerRef = (0, import_react4.useRef)();
  const { current: contextValue } = (0, import_react4.useRef)({ mapLib: null, map: null });
  (0, import_react4.useEffect)(() => {
    const mapLib2 = props.mapLib;
    let isMounted = true;
    let mapbox;
    Promise.resolve(mapLib2 || defaultLib).then((module) => {
      if (!isMounted) {
        return;
      }
      if (!module) {
        throw new Error("Invalid mapLib");
      }
      const mapboxgl = "Map" in module ? module : module.default;
      if (!mapboxgl.Map) {
        throw new Error("Invalid mapLib");
      }
      setGlobals(mapboxgl, props);
      if (!mapboxgl.supported || mapboxgl.supported(props)) {
        if (props.reuseMaps) {
          mapbox = Mapbox.reuse(props, containerRef.current);
        }
        if (!mapbox) {
          mapbox = new Mapbox(mapboxgl.Map, props, containerRef.current);
        }
        contextValue.map = createRef(mapbox);
        contextValue.mapLib = mapboxgl;
        setMapInstance(mapbox);
        mountedMapsContext === null || mountedMapsContext === void 0 ? void 0 : mountedMapsContext.onMapMount(contextValue.map, props.id);
      } else {
        throw new Error("Map is not supported by this browser");
      }
    }).catch((error) => {
      const { onError } = props;
      if (onError) {
        onError({
          type: "error",
          target: null,
          originalEvent: null,
          error
        });
      } else {
        console.error(error);
      }
    });
    return () => {
      isMounted = false;
      if (mapbox) {
        mountedMapsContext === null || mountedMapsContext === void 0 ? void 0 : mountedMapsContext.onMapUnmount(props.id);
        if (props.reuseMaps) {
          mapbox.recycle();
        } else {
          mapbox.destroy();
        }
      }
    };
  }, []);
  use_isomorphic_layout_effect_default(() => {
    if (mapInstance) {
      mapInstance.setProps(props);
    }
  });
  (0, import_react4.useImperativeHandle)(ref, () => contextValue.map, [mapInstance]);
  const style = (0, import_react4.useMemo)(() => ({
    position: "relative",
    width: "100%",
    height: "100%",
    ...props.style
  }), [props.style]);
  const CHILD_CONTAINER_STYLE = {
    height: "100%"
  };
  return React4.createElement("div", { id: props.id, ref: containerRef, style }, mapInstance && React4.createElement(
    MapContext.Provider,
    { value: contextValue },
    React4.createElement("div", { "mapboxgl-children": "", style: CHILD_CONTAINER_STYLE }, props.children)
  ));
}

// node_modules/react-map-gl/dist/esm/components/marker.js
var React5 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());
var import_react5 = __toESM(require_react());

// node_modules/react-map-gl/dist/esm/utils/apply-react-style.js
var unitlessNumber = /box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;
function applyReactStyle(element, styles) {
  if (!element || !styles) {
    return;
  }
  const style = element.style;
  for (const key in styles) {
    const value = styles[key];
    if (Number.isFinite(value) && !unitlessNumber.test(key)) {
      style[key] = `${value}px`;
    } else {
      style[key] = value;
    }
  }
}

// node_modules/react-map-gl/dist/esm/components/marker.js
function Marker(props, ref) {
  const { map, mapLib: mapLib2 } = (0, import_react5.useContext)(MapContext);
  const thisRef = (0, import_react5.useRef)({ props });
  thisRef.current.props = props;
  const marker = (0, import_react5.useMemo)(() => {
    let hasChildren = false;
    React5.Children.forEach(props.children, (el) => {
      if (el) {
        hasChildren = true;
      }
    });
    const options = {
      ...props,
      element: hasChildren ? document.createElement("div") : null
    };
    const mk = new mapLib2.Marker(options);
    mk.setLngLat([props.longitude, props.latitude]);
    mk.getElement().addEventListener("click", (e5) => {
      var _a, _b;
      (_b = (_a = thisRef.current.props).onClick) === null || _b === void 0 ? void 0 : _b.call(_a, {
        type: "click",
        target: mk,
        originalEvent: e5
      });
    });
    mk.on("dragstart", (e5) => {
      var _a, _b;
      const evt = e5;
      evt.lngLat = marker.getLngLat();
      (_b = (_a = thisRef.current.props).onDragStart) === null || _b === void 0 ? void 0 : _b.call(_a, evt);
    });
    mk.on("drag", (e5) => {
      var _a, _b;
      const evt = e5;
      evt.lngLat = marker.getLngLat();
      (_b = (_a = thisRef.current.props).onDrag) === null || _b === void 0 ? void 0 : _b.call(_a, evt);
    });
    mk.on("dragend", (e5) => {
      var _a, _b;
      const evt = e5;
      evt.lngLat = marker.getLngLat();
      (_b = (_a = thisRef.current.props).onDragEnd) === null || _b === void 0 ? void 0 : _b.call(_a, evt);
    });
    return mk;
  }, []);
  (0, import_react5.useEffect)(() => {
    marker.addTo(map.getMap());
    return () => {
      marker.remove();
    };
  }, []);
  const { longitude, latitude, offset, style, draggable = false, popup = null, rotation = 0, rotationAlignment = "auto", pitchAlignment = "auto" } = props;
  (0, import_react5.useEffect)(() => {
    applyReactStyle(marker.getElement(), style);
  }, [style]);
  (0, import_react5.useImperativeHandle)(ref, () => marker, []);
  if (marker.getLngLat().lng !== longitude || marker.getLngLat().lat !== latitude) {
    marker.setLngLat([longitude, latitude]);
  }
  if (offset && !arePointsEqual(marker.getOffset(), offset)) {
    marker.setOffset(offset);
  }
  if (marker.isDraggable() !== draggable) {
    marker.setDraggable(draggable);
  }
  if (marker.getRotation() !== rotation) {
    marker.setRotation(rotation);
  }
  if (marker.getRotationAlignment() !== rotationAlignment) {
    marker.setRotationAlignment(rotationAlignment);
  }
  if (marker.getPitchAlignment() !== pitchAlignment) {
    marker.setPitchAlignment(pitchAlignment);
  }
  if (marker.getPopup() !== popup) {
    marker.setPopup(popup);
  }
  return (0, import_react_dom.createPortal)(props.children, marker.getElement());
}
var marker_default = (0, import_react5.memo)((0, import_react5.forwardRef)(Marker));

// node_modules/react-map-gl/dist/esm/components/popup.js
var import_react_dom2 = __toESM(require_react_dom());
var import_react6 = __toESM(require_react());
function getClassList(className) {
  return new Set(className ? className.trim().split(/\s+/) : []);
}
function Popup(props, ref) {
  const { map, mapLib: mapLib2 } = (0, import_react6.useContext)(MapContext);
  const container = (0, import_react6.useMemo)(() => {
    return document.createElement("div");
  }, []);
  const thisRef = (0, import_react6.useRef)({ props });
  thisRef.current.props = props;
  const popup = (0, import_react6.useMemo)(() => {
    const options = { ...props };
    const pp = new mapLib2.Popup(options);
    pp.setLngLat([props.longitude, props.latitude]);
    pp.once("open", (e5) => {
      var _a, _b;
      (_b = (_a = thisRef.current.props).onOpen) === null || _b === void 0 ? void 0 : _b.call(_a, e5);
    });
    return pp;
  }, []);
  (0, import_react6.useEffect)(() => {
    const onClose = (e5) => {
      var _a, _b;
      (_b = (_a = thisRef.current.props).onClose) === null || _b === void 0 ? void 0 : _b.call(_a, e5);
    };
    popup.on("close", onClose);
    popup.setDOMContent(container).addTo(map.getMap());
    return () => {
      popup.off("close", onClose);
      if (popup.isOpen()) {
        popup.remove();
      }
    };
  }, []);
  (0, import_react6.useEffect)(() => {
    applyReactStyle(popup.getElement(), props.style);
  }, [props.style]);
  (0, import_react6.useImperativeHandle)(ref, () => popup, []);
  if (popup.isOpen()) {
    if (popup.getLngLat().lng !== props.longitude || popup.getLngLat().lat !== props.latitude) {
      popup.setLngLat([props.longitude, props.latitude]);
    }
    if (props.offset && !deepEqual(popup.options.offset, props.offset)) {
      popup.setOffset(props.offset);
    }
    if (popup.options.anchor !== props.anchor || popup.options.maxWidth !== props.maxWidth) {
      popup.options.anchor = props.anchor;
      popup.setMaxWidth(props.maxWidth);
    }
    if (popup.options.className !== props.className) {
      const prevClassList = getClassList(popup.options.className);
      const nextClassList = getClassList(props.className);
      for (const c14 of prevClassList) {
        if (!nextClassList.has(c14)) {
          popup.removeClassName(c14);
        }
      }
      for (const c14 of nextClassList) {
        if (!prevClassList.has(c14)) {
          popup.addClassName(c14);
        }
      }
      popup.options.className = props.className;
    }
  }
  return (0, import_react_dom2.createPortal)(props.children, container);
}
var popup_default = (0, import_react6.memo)((0, import_react6.forwardRef)(Popup));

// node_modules/react-map-gl/dist/esm/components/attribution-control.js
var import_react8 = __toESM(require_react());

// node_modules/react-map-gl/dist/esm/components/use-control.js
var import_react7 = __toESM(require_react());
function useControl(onCreate, arg1, arg2, arg3) {
  const context = (0, import_react7.useContext)(MapContext);
  const ctrl = (0, import_react7.useMemo)(() => onCreate(context), []);
  (0, import_react7.useEffect)(() => {
    const opts = arg3 || arg2 || arg1;
    const onAdd = typeof arg1 === "function" && typeof arg2 === "function" ? arg1 : null;
    const onRemove = typeof arg2 === "function" ? arg2 : typeof arg1 === "function" ? arg1 : null;
    const { map } = context;
    if (!map.hasControl(ctrl)) {
      map.addControl(ctrl, opts === null || opts === void 0 ? void 0 : opts.position);
      if (onAdd) {
        onAdd(context);
      }
    }
    return () => {
      if (onRemove) {
        onRemove(context);
      }
      if (map.hasControl(ctrl)) {
        map.removeControl(ctrl);
      }
    };
  }, []);
  return ctrl;
}
var use_control_default = useControl;

// node_modules/react-map-gl/dist/esm/components/attribution-control.js
function AttributionControl(props) {
  const ctrl = use_control_default(({ mapLib: mapLib2 }) => new mapLib2.AttributionControl(props), {
    position: props.position
  });
  (0, import_react8.useEffect)(() => {
    applyReactStyle(ctrl._container, props.style);
  }, [props.style]);
  return null;
}
var attribution_control_default = (0, import_react8.memo)(AttributionControl);

// node_modules/react-map-gl/dist/esm/components/fullscreen-control.js
var import_react9 = __toESM(require_react());
function FullscreenControl(props) {
  const ctrl = use_control_default(({ mapLib: mapLib2 }) => new mapLib2.FullscreenControl({
    container: props.containerId && document.getElementById(props.containerId)
  }), { position: props.position });
  (0, import_react9.useEffect)(() => {
    applyReactStyle(ctrl._controlContainer, props.style);
  }, [props.style]);
  return null;
}
var fullscreen_control_default = (0, import_react9.memo)(FullscreenControl);

// node_modules/react-map-gl/dist/esm/components/geolocate-control.js
var import_react10 = __toESM(require_react());
function GeolocateControl(props, ref) {
  const thisRef = (0, import_react10.useRef)({ props });
  const ctrl = use_control_default(({ mapLib: mapLib2 }) => {
    const gc = new mapLib2.GeolocateControl(props);
    const setupUI = gc._setupUI;
    gc._setupUI = (args) => {
      if (!gc._container.hasChildNodes()) {
        setupUI(args);
      }
    };
    gc.on("geolocate", (e5) => {
      var _a, _b;
      (_b = (_a = thisRef.current.props).onGeolocate) === null || _b === void 0 ? void 0 : _b.call(_a, e5);
    });
    gc.on("error", (e5) => {
      var _a, _b;
      (_b = (_a = thisRef.current.props).onError) === null || _b === void 0 ? void 0 : _b.call(_a, e5);
    });
    gc.on("outofmaxbounds", (e5) => {
      var _a, _b;
      (_b = (_a = thisRef.current.props).onOutOfMaxBounds) === null || _b === void 0 ? void 0 : _b.call(_a, e5);
    });
    gc.on("trackuserlocationstart", (e5) => {
      var _a, _b;
      (_b = (_a = thisRef.current.props).onTrackUserLocationStart) === null || _b === void 0 ? void 0 : _b.call(_a, e5);
    });
    gc.on("trackuserlocationend", (e5) => {
      var _a, _b;
      (_b = (_a = thisRef.current.props).onTrackUserLocationEnd) === null || _b === void 0 ? void 0 : _b.call(_a, e5);
    });
    return gc;
  }, { position: props.position });
  thisRef.current.props = props;
  (0, import_react10.useImperativeHandle)(ref, () => ctrl, []);
  (0, import_react10.useEffect)(() => {
    applyReactStyle(ctrl._container, props.style);
  }, [props.style]);
  return null;
}
var geolocate_control_default = (0, import_react10.memo)((0, import_react10.forwardRef)(GeolocateControl));

// node_modules/react-map-gl/dist/esm/components/navigation-control.js
var import_react11 = __toESM(require_react());
function NavigationControl(props) {
  const ctrl = use_control_default(({ mapLib: mapLib2 }) => new mapLib2.NavigationControl(props), {
    position: props.position
  });
  (0, import_react11.useEffect)(() => {
    applyReactStyle(ctrl._container, props.style);
  }, [props.style]);
  return null;
}
var navigation_control_default = (0, import_react11.memo)(NavigationControl);

// node_modules/react-map-gl/dist/esm/components/scale-control.js
var import_react12 = __toESM(require_react());
function ScaleControl(props) {
  const ctrl = use_control_default(({ mapLib: mapLib2 }) => new mapLib2.ScaleControl(props), {
    position: props.position
  });
  const propsRef = (0, import_react12.useRef)(props);
  const prevProps = propsRef.current;
  propsRef.current = props;
  const { style } = props;
  if (props.maxWidth !== void 0 && props.maxWidth !== prevProps.maxWidth) {
    ctrl.options.maxWidth = props.maxWidth;
  }
  if (props.unit !== void 0 && props.unit !== prevProps.unit) {
    ctrl.setUnit(props.unit);
  }
  (0, import_react12.useEffect)(() => {
    applyReactStyle(ctrl._container, style);
  }, [style]);
  return null;
}
var scale_control_default = (0, import_react12.memo)(ScaleControl);

// node_modules/react-map-gl/dist/esm/components/source.js
var React6 = __toESM(require_react());
var import_react13 = __toESM(require_react());
var import_react14 = __toESM(require_react());

// node_modules/react-map-gl/dist/esm/components/layer.js
var import_react15 = __toESM(require_react());

// node_modules/react-map-gl/dist/esm/exports-mapbox.js
var mapLib = import("/build/_shared/mapbox-gl-VBIL6TQ6.js");
var Map3 = (() => {
  return React7.forwardRef(function Map4(props, ref) {
    return Map2(props, ref, mapLib);
  });
})();
var Marker2 = marker_default;
var exports_mapbox_default = Map3;

// app/components/cluster-map/MarkerPin.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime());

// node_modules/@heroicons/react/24/solid/esm/BuildingOfficeIcon.js
var React8 = __toESM(require_react(), 1);
function BuildingOfficeIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React8.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React8.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React8.createElement("path", {
    fillRule: "evenodd",
    d: "M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM13.5 9a.75.75 0 000 1.5H15A.75.75 0 0015 9h-1.5zm-.75 3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z",
    clipRule: "evenodd"
  }));
}
var ForwardRef3 = React8.forwardRef(BuildingOfficeIcon);
var BuildingOfficeIcon_default = ForwardRef3;

// node_modules/@heroicons/react/24/solid/esm/TvIcon.js
var React9 = __toESM(require_react(), 1);
function TvIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React9.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React9.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React9.createElement("path", {
    d: "M19.5 6h-15v9h15V6z"
  }), /* @__PURE__ */ React9.createElement("path", {
    fillRule: "evenodd",
    d: "M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 006 21h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zm0 13.5h17.25a.375.375 0 00.375-.375V4.875a.375.375 0 00-.375-.375H3.375A.375.375 0 003 4.875v11.25c0 .207.168.375.375.375z",
    clipRule: "evenodd"
  }));
}
var ForwardRef4 = React9.forwardRef(TvIcon);
var TvIcon_default = ForwardRef4;

// app/components/cluster-map/MarkerPin.tsx
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/cluster-map/MarkerPin.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/cluster-map/MarkerPin.tsx"
  );
  import.meta.hot.lastModified = "1689128796471.4363";
}
var MarkerPin = ({
  data,
  onMarkerClick
}) => {
  const [longitude, latitude] = data.geometry.coordinates;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Marker2, {
    longitude,
    latitude,
    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
      onClick: () => onMarkerClick == null ? void 0 : onMarkerClick(data),
      children: getPinIcon(data.properties.media_type)
    })
  }, data.properties.siteId);
};
_c2 = MarkerPin;
var getPinIcon = (pinType) => {
  switch (pinType) {
    case "Billboards":
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TvIcon_default, {
        className: "block h-6 w-6 pin-billboard",
        "aria-hidden": true
      });
    default:
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(BuildingOfficeIcon_default, {
        className: "block h-6 w-6 pin-building",
        "aria-hidden": true
      });
  }
};
var _c2;
$RefreshReg$(_c2, "MarkerPin");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/cluster-map/ClusterPin.tsx
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/cluster-map/ClusterPin.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/cluster-map/ClusterPin.tsx"
  );
  import.meta.hot.lastModified = "1689131884155.7";
}
var ClusterPin = ({
  latitude,
  longitude,
  pointCount,
  onClusterPinClick
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Marker2, {
    longitude,
    latitude,
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
      className: "flex justify-center items-center text-md border-2 rounded-full bg-slate-300 opacity-50 hover:opacity-100",
      style: {
        width: `50px`,
        height: `50px`
      },
      onClick: () => onClusterPinClick(),
      children: pointCount
    })
  });
};
_c3 = ClusterPin;
var _c3;
$RefreshReg$(_c3, "ClusterPin");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/cluster-map/constants.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/cluster-map/constants.ts"
  );
  import.meta.hot.lastModified = "1689117227338.4077";
}
var MAP_STYLE = "mapbox://styles/jasonaliao/cljwp7s4p00ad01rd6u6s6uyc";
var MAP_ORIGIN = { latitude: -36.85361, longitude: 174.76499 };
var MAP_ZOOM_DEFAULT = 9;
var MAP_MAX_ZOOM_DEFAULT = 20;
var MAP_BOUND_DEFAULT = [-180, -85, 180, 85];
var MAP_CLUSTER_RADIUS_DEFAULT = 50;

// app/components/cluster-map/ClusterMap.tsx
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/cluster-map/ClusterMap.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/cluster-map/ClusterMap.tsx"
  );
  import.meta.hot.lastModified = "1689133038451.8657";
}
var superCluster = new Supercluster({
  radius: MAP_CLUSTER_RADIUS_DEFAULT,
  maxZoom: MAP_MAX_ZOOM_DEFAULT
});
var ClusterMap = ({
  token,
  points,
  onMarkerClick,
  onClusterMakerClick,
  ...mapBoxProps
}) => {
  _s();
  const mapRef = (0, import_react16.useRef)(null);
  const [viewport, setViewport] = (0, import_react16.useState)({
    latitude: MAP_ORIGIN.latitude,
    longitude: MAP_ORIGIN.longitude,
    zoom: MAP_ZOOM_DEFAULT
  });
  const [clusters, setClusters] = (0, import_react16.useState)([]);
  const [bounds, setBounds] = (0, import_react16.useState)(MAP_BOUND_DEFAULT);
  const [zoom, setZoom] = (0, import_react16.useState)(MAP_ZOOM_DEFAULT);
  (0, import_react16.useEffect)(() => {
    superCluster.load(points);
    setClusters(superCluster.getClusters(bounds, zoom));
  }, [points, bounds, zoom]);
  (0, import_react16.useEffect)(() => {
    if (!mapRef.current)
      return;
    setBounds(mapRef.current.getMap().getBounds().toArray().flat());
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {
    style: {
      position: "relative"
    },
    children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(exports_mapbox_default, {
      initialViewState: viewport,
      maxZoom: MAP_MAX_ZOOM_DEFAULT,
      mapStyle: MAP_STYLE,
      mapboxAccessToken: token,
      style: {
        width: "100%",
        height: "calc(100vh - 80px)"
      },
      onZoomEnd: (e5) => setZoom(e5.viewState.zoom),
      ref: mapRef,
      "data-test-id": "cluster-map",
      ...mapBoxProps,
      children: clusters.map((cluster) => {
        const {
          cluster: isCluster,
          point_count
        } = cluster.properties;
        const [longitude, latitude] = cluster.geometry.coordinates;
        if (isCluster) {
          return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ClusterPin, {
            longitude,
            latitude,
            pointCount: point_count,
            onClusterPinClick: () => {
              var _a;
              const zoom2 = Math.min(superCluster == null ? void 0 : superCluster.getClusterExpansionZoom(cluster.id), MAP_MAX_ZOOM_DEFAULT);
              (_a = mapRef.current) == null ? void 0 : _a.flyTo({
                center: [longitude, latitude],
                zoom: zoom2,
                speed: 1
              });
              if (zoom2 > 17 && cluster.id) {
                const clusterPins = superCluster == null ? void 0 : superCluster.getChildren(+cluster.id);
                onClusterMakerClick == null ? void 0 : onClusterMakerClick(clusterPins != null ? clusterPins : []);
              }
            }
          }, cluster.properties.siteId);
        }
        return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(MarkerPin, {
          data: cluster,
          onMarkerClick
        }, cluster.properties.siteId);
      })
    })
  });
};
_s(ClusterMap, "WKltjZS87XYEZ+TMDVtWSZGcRIQ=");
_c4 = ClusterMap;
var _c4;
$RefreshReg$(_c4, "ClusterMap");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/dooh-finder/DoohDetails.tsx
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var import_react18 = __toESM(require_react());

// app/routes/get-dooh-by-id.tsx
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/get-dooh-by-id.tsx"
  );
  import.meta.hot.lastModified = "1689115703669.6418";
}
var QUERY_DOOH_BY_ID = "/get-dooh-by-id";

// app/components/dooh-finder/DoohDetails.tsx
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/dooh-finder/DoohDetails.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/dooh-finder/DoohDetails.tsx"
  );
  import.meta.hot.lastModified = "1689131625199.7917";
}
var DoohDetails = ({
  selectedId
}) => {
  _s2();
  const fetcher = useFetcher();
  const {
    data
  } = fetcher;
  (0, import_react18.useEffect)(() => {
    const formData = new FormData();
    formData.append("id", selectedId.toString());
    if (fetcher.state === "idle" && !fetcher.data) {
      fetcher.submit(formData, {
        method: "GET",
        action: QUERY_DOOH_BY_ID
      });
    }
  }, [selectedId, fetcher]);
  if (!data || fetcher.state === "loading") {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
      children: "loading"
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
    children: [/* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
      className: "text-xl font-semibold text-black",
      children: data.media_owner
    }), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
      className: "text-sm text-gray-600",
      children: data.site_name
    }), /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
      className: "mt-8",
      children: [/* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
        className: "text-sm text-gray-600",
        children: `Display resolution: ${formatResolution(data.resolution)}`
      }), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
        className: "text-sm text-gray-600",
        children: `Recommended resolution: ${formatResolution(data.creative_dimension)}`
      })]
    }), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
      className: "mt-8",
      children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", {
        className: "bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full",
        children: "Book now"
      })
    })]
  });
};
_s2(DoohDetails, "WjihN4CabdhkHDxQoVW7dBj/pPI=", false, function() {
  return [useFetcher];
});
_c5 = DoohDetails;
var formatResolution = (resolution) => {
  if (!resolution)
    return "";
  const [width, height] = resolution.split("x");
  return `${width}px by ${height}px`;
};
var _c5;
$RefreshReg$(_c5, "DoohDetails");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/slide-in-drawer/SlideInDrawer.tsx
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var import_react46 = __toESM(require_react());

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react19 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d = (t13, e5, n6) => e5 in t13 ? i(t13, e5, { enumerable: true, configurable: true, writable: true, value: n6 }) : t13[e5] = n6;
var r = (t13, e5, n6) => (d(t13, typeof e5 != "symbol" ? e5 + "" : e5, n6), n6);
var o = class {
  constructor() {
    r(this, "current", this.detect());
    r(this, "handoffState", "pending");
    r(this, "currentId", 0);
  }
  set(e5) {
    this.current !== e5 && (this.handoffState = "pending", this.currentId = 0, this.current = e5);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var s = new o();

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var l = (e5, f8) => {
  s.isServer ? (0, import_react19.useEffect)(e5, f8) : (0, import_react19.useLayoutEffect)(e5, f8);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react20 = __toESM(require_react(), 1);
function s2(e5) {
  let r8 = (0, import_react20.useRef)(e5);
  return l(() => {
    r8.current = e5;
  }, [e5]), r8;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react21 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t3(e5) {
  typeof queueMicrotask == "function" ? queueMicrotask(e5) : Promise.resolve().then(e5).catch((o8) => setTimeout(() => {
    throw o8;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function o2() {
  let n6 = [], r8 = { addEventListener(e5, t13, s12, a9) {
    return e5.addEventListener(t13, s12, a9), r8.add(() => e5.removeEventListener(t13, s12, a9));
  }, requestAnimationFrame(...e5) {
    let t13 = requestAnimationFrame(...e5);
    return r8.add(() => cancelAnimationFrame(t13));
  }, nextFrame(...e5) {
    return r8.requestAnimationFrame(() => r8.requestAnimationFrame(...e5));
  }, setTimeout(...e5) {
    let t13 = setTimeout(...e5);
    return r8.add(() => clearTimeout(t13));
  }, microTask(...e5) {
    let t13 = { current: true };
    return t3(() => {
      t13.current && e5[0]();
    }), r8.add(() => {
      t13.current = false;
    });
  }, style(e5, t13, s12) {
    let a9 = e5.style.getPropertyValue(t13);
    return Object.assign(e5.style, { [t13]: s12 }), this.add(() => {
      Object.assign(e5.style, { [t13]: a9 });
    });
  }, group(e5) {
    let t13 = o2();
    return e5(t13), this.add(() => t13.dispose());
  }, add(e5) {
    return n6.push(e5), () => {
      let t13 = n6.indexOf(e5);
      if (t13 >= 0)
        for (let s12 of n6.splice(t13, 1))
          s12();
    };
  }, dispose() {
    for (let e5 of n6.splice(0))
      e5();
  } };
  return r8;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
function p() {
  let [e5] = (0, import_react21.useState)(o2);
  return (0, import_react21.useEffect)(() => () => e5.dispose(), [e5]), e5;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react22 = __toESM(require_react(), 1);
var o4 = function(t13) {
  let e5 = s2(t13);
  return import_react22.default.useCallback((...r8) => e5.current(...r8), [e5]);
};

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react24 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var import_react23 = __toESM(require_react(), 1);
function l2() {
  let [e5, f8] = (0, import_react23.useState)(s.isHandoffComplete);
  return e5 && s.isHandoffComplete === false && f8(false), (0, import_react23.useEffect)(() => {
    e5 !== true && f8(true);
  }, [e5]), (0, import_react23.useEffect)(() => s.handoff(), []), e5;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var o6;
var I = (o6 = import_react24.default.useId) != null ? o6 : function() {
  let n6 = l2(), [e5, u8] = import_react24.default.useState(n6 ? () => s.nextId() : null);
  return l(() => {
    e5 === null && u8(s.nextId());
  }, [e5]), e5 != null ? "" + e5 : void 0;
};

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var import_react27 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/match.js
function u(r8, n6, ...a9) {
  if (r8 in n6) {
    let e5 = n6[r8];
    return typeof e5 == "function" ? e5(...a9) : e5;
  }
  let t13 = new Error(`Tried to handle "${r8}" but there is no handler defined. Only defined handlers are: ${Object.keys(n6).map((e5) => `"${e5}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t13, u), t13;
}

// node_modules/@headlessui/react/dist/utils/owner.js
function e(r8) {
  return s.isServer ? null : r8 instanceof Node ? r8.ownerDocument : r8 != null && r8.hasOwnProperty("current") && r8.current instanceof Node ? r8.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/utils/focus-management.js
var c2 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e5) => `${e5}:not([tabindex='-1'])`).join(",");
var M = ((n6) => (n6[n6.First = 1] = "First", n6[n6.Previous = 2] = "Previous", n6[n6.Next = 4] = "Next", n6[n6.Last = 8] = "Last", n6[n6.WrapAround = 16] = "WrapAround", n6[n6.NoScroll = 32] = "NoScroll", n6))(M || {});
var N = ((o8) => (o8[o8.Error = 0] = "Error", o8[o8.Overflow = 1] = "Overflow", o8[o8.Success = 2] = "Success", o8[o8.Underflow = 3] = "Underflow", o8))(N || {});
var F = ((t13) => (t13[t13.Previous = -1] = "Previous", t13[t13.Next = 1] = "Next", t13))(F || {});
function f(e5 = document.body) {
  return e5 == null ? [] : Array.from(e5.querySelectorAll(c2)).sort((r8, t13) => Math.sign((r8.tabIndex || Number.MAX_SAFE_INTEGER) - (t13.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var T = ((t13) => (t13[t13.Strict = 0] = "Strict", t13[t13.Loose = 1] = "Loose", t13))(T || {});
function h(e5, r8 = 0) {
  var t13;
  return e5 === ((t13 = e(e5)) == null ? void 0 : t13.body) ? false : u(r8, { [0]() {
    return e5.matches(c2);
  }, [1]() {
    let l10 = e5;
    for (; l10 !== null; ) {
      if (l10.matches(c2))
        return true;
      l10 = l10.parentElement;
    }
    return false;
  } });
}
var w = ((t13) => (t13[t13.Keyboard = 0] = "Keyboard", t13[t13.Mouse = 1] = "Mouse", t13))(w || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e5) => {
  e5.metaKey || e5.altKey || e5.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e5) => {
  e5.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e5.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function y(e5) {
  e5 == null || e5.focus({ preventScroll: true });
}
var S = ["textarea", "input"].join(",");
function H(e5) {
  var r8, t13;
  return (t13 = (r8 = e5 == null ? void 0 : e5.matches) == null ? void 0 : r8.call(e5, S)) != null ? t13 : false;
}
function I2(e5, r8 = (t13) => t13) {
  return e5.slice().sort((t13, l10) => {
    let o8 = r8(t13), i5 = r8(l10);
    if (o8 === null || i5 === null)
      return 0;
    let n6 = o8.compareDocumentPosition(i5);
    return n6 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n6 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function O(e5, r8, { sorted: t13 = true, relativeTo: l10 = null, skipElements: o8 = [] } = {}) {
  let i5 = Array.isArray(e5) ? e5.length > 0 ? e5[0].ownerDocument : document : e5.ownerDocument, n6 = Array.isArray(e5) ? t13 ? I2(e5) : e5 : f(e5);
  o8.length > 0 && n6.length > 1 && (n6 = n6.filter((s12) => !o8.includes(s12))), l10 = l10 != null ? l10 : i5.activeElement;
  let E5 = (() => {
    if (r8 & 5)
      return 1;
    if (r8 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x4 = (() => {
    if (r8 & 1)
      return 0;
    if (r8 & 2)
      return Math.max(0, n6.indexOf(l10)) - 1;
    if (r8 & 4)
      return Math.max(0, n6.indexOf(l10)) + 1;
    if (r8 & 8)
      return n6.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p8 = r8 & 32 ? { preventScroll: true } : {}, d12 = 0, a9 = n6.length, u8;
  do {
    if (d12 >= a9 || d12 + a9 <= 0)
      return 0;
    let s12 = x4 + d12;
    if (r8 & 16)
      s12 = (s12 + a9) % a9;
    else {
      if (s12 < 0)
        return 3;
      if (s12 >= a9)
        return 1;
    }
    u8 = n6[s12], u8 == null || u8.focus(p8), d12 += E5;
  } while (u8 !== i5.activeElement);
  return r8 & 6 && H(u8) && u8.select(), 2;
}

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react25 = __toESM(require_react(), 1);
function d2(e5, r8, n6) {
  let o8 = s2(r8);
  (0, import_react25.useEffect)(() => {
    function t13(u8) {
      o8.current(u8);
    }
    return document.addEventListener(e5, t13, n6), () => document.removeEventListener(e5, t13, n6);
  }, [e5, n6]);
}

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
var import_react26 = __toESM(require_react(), 1);
function s4(e5, r8, n6) {
  let o8 = s2(r8);
  (0, import_react26.useEffect)(() => {
    function t13(i5) {
      o8.current(i5);
    }
    return window.addEventListener(e5, t13, n6), () => window.removeEventListener(e5, t13, n6);
  }, [e5, n6]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function H2(s12, m9, i5 = true) {
  let l10 = (0, import_react27.useRef)(false);
  (0, import_react27.useEffect)(() => {
    requestAnimationFrame(() => {
      l10.current = i5;
    });
  }, [i5]);
  function a9(e5, o8) {
    if (!l10.current || e5.defaultPrevented)
      return;
    let n6 = o8(e5);
    if (n6 === null || !n6.getRootNode().contains(n6))
      return;
    let E5 = function r8(t13) {
      return typeof t13 == "function" ? r8(t13()) : Array.isArray(t13) || t13 instanceof Set ? t13 : [t13];
    }(s12);
    for (let r8 of E5) {
      if (r8 === null)
        continue;
      let t13 = r8 instanceof HTMLElement ? r8 : r8.current;
      if (t13 != null && t13.contains(n6) || e5.composed && e5.composedPath().includes(t13))
        return;
    }
    return !h(n6, T.Loose) && n6.tabIndex !== -1 && e5.preventDefault(), m9(e5, n6);
  }
  let u8 = (0, import_react27.useRef)(null);
  d2("mousedown", (e5) => {
    var o8, n6;
    l10.current && (u8.current = ((n6 = (o8 = e5.composedPath) == null ? void 0 : o8.call(e5)) == null ? void 0 : n6[0]) || e5.target);
  }, true), d2("click", (e5) => {
    u8.current && (a9(e5, () => u8.current), u8.current = null);
  }, true), s4("blur", (e5) => a9(e5, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react28 = __toESM(require_react(), 1);
var u2 = Symbol();
function T2(t13, n6 = true) {
  return Object.assign(t13, { [u2]: n6 });
}
function y2(...t13) {
  let n6 = (0, import_react28.useRef)(t13);
  (0, import_react28.useEffect)(() => {
    n6.current = t13;
  }, [t13]);
  let c14 = o4((e5) => {
    for (let o8 of n6.current)
      o8 != null && (typeof o8 == "function" ? o8(e5) : o8.current = e5);
  });
  return t13.every((e5) => e5 == null || (e5 == null ? void 0 : e5[u2])) ? void 0 : c14;
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react29 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/class-names.js
function e2(...n6) {
  return n6.filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/render.js
var S2 = ((a9) => (a9[a9.None = 0] = "None", a9[a9.RenderStrategy = 1] = "RenderStrategy", a9[a9.Static = 2] = "Static", a9))(S2 || {});
var j = ((e5) => (e5[e5.Unmount = 0] = "Unmount", e5[e5.Hidden = 1] = "Hidden", e5))(j || {});
function X({ ourProps: r8, theirProps: t13, slot: e5, defaultTag: a9, features: s12, visible: n6 = true, name: f8 }) {
  let o8 = N2(t13, r8);
  if (n6)
    return c4(o8, e5, a9, f8);
  let u8 = s12 != null ? s12 : 0;
  if (u8 & 2) {
    let { static: l10 = false, ...p8 } = o8;
    if (l10)
      return c4(p8, e5, a9, f8);
  }
  if (u8 & 1) {
    let { unmount: l10 = true, ...p8 } = o8;
    return u(l10 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return c4({ ...p8, hidden: true, style: { display: "none" } }, e5, a9, f8);
    } });
  }
  return c4(o8, e5, a9, f8);
}
function c4(r8, t13 = {}, e5, a9) {
  let { as: s12 = e5, children: n6, refName: f8 = "ref", ...o8 } = g(r8, ["unmount", "static"]), u8 = r8.ref !== void 0 ? { [f8]: r8.ref } : {}, l10 = typeof n6 == "function" ? n6(t13) : n6;
  "className" in o8 && o8.className && typeof o8.className == "function" && (o8.className = o8.className(t13));
  let p8 = {};
  if (t13) {
    let i5 = false, m9 = [];
    for (let [y8, d12] of Object.entries(t13))
      typeof d12 == "boolean" && (i5 = true), d12 === true && m9.push(y8);
    i5 && (p8["data-headlessui-state"] = m9.join(" "));
  }
  if (s12 === import_react29.Fragment && Object.keys(R(o8)).length > 0) {
    if (!(0, import_react29.isValidElement)(l10) || Array.isArray(l10) && l10.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${a9} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(o8).map((d12) => `  - ${d12}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d12) => `  - ${d12}`).join(`
`)].join(`
`));
    let i5 = l10.props, m9 = typeof (i5 == null ? void 0 : i5.className) == "function" ? (...d12) => e2(i5 == null ? void 0 : i5.className(...d12), o8.className) : e2(i5 == null ? void 0 : i5.className, o8.className), y8 = m9 ? { className: m9 } : {};
    return (0, import_react29.cloneElement)(l10, Object.assign({}, N2(l10.props, R(g(o8, ["ref"]))), p8, u8, w2(l10.ref, u8.ref), y8));
  }
  return (0, import_react29.createElement)(s12, Object.assign({}, g(o8, ["ref"]), s12 !== import_react29.Fragment && u8, s12 !== import_react29.Fragment && p8), l10);
}
function w2(...r8) {
  return { ref: r8.every((t13) => t13 == null) ? void 0 : (t13) => {
    for (let e5 of r8)
      e5 != null && (typeof e5 == "function" ? e5(t13) : e5.current = t13);
  } };
}
function N2(...r8) {
  var a9;
  if (r8.length === 0)
    return {};
  if (r8.length === 1)
    return r8[0];
  let t13 = {}, e5 = {};
  for (let s12 of r8)
    for (let n6 in s12)
      n6.startsWith("on") && typeof s12[n6] == "function" ? ((a9 = e5[n6]) != null || (e5[n6] = []), e5[n6].push(s12[n6])) : t13[n6] = s12[n6];
  if (t13.disabled || t13["aria-disabled"])
    return Object.assign(t13, Object.fromEntries(Object.keys(e5).map((s12) => [s12, void 0])));
  for (let s12 in e5)
    Object.assign(t13, { [s12](n6, ...f8) {
      let o8 = e5[s12];
      for (let u8 of o8) {
        if ((n6 instanceof Event || (n6 == null ? void 0 : n6.nativeEvent) instanceof Event) && n6.defaultPrevented)
          return;
        u8(n6, ...f8);
      }
    } });
  return t13;
}
function D(r8) {
  var t13;
  return Object.assign((0, import_react29.forwardRef)(r8), { displayName: (t13 = r8.displayName) != null ? t13 : r8.name });
}
function R(r8) {
  let t13 = Object.assign({}, r8);
  for (let e5 in t13)
    t13[e5] === void 0 && delete t13[e5];
  return t13;
}
function g(r8, t13 = []) {
  let e5 = Object.assign({}, r8);
  for (let a9 of t13)
    a9 in e5 && delete e5[a9];
  return e5;
}

// node_modules/@headlessui/react/dist/utils/bugs.js
function r3(n6) {
  let e5 = n6.parentElement, l10 = null;
  for (; e5 && !(e5 instanceof HTMLFieldSetElement); )
    e5 instanceof HTMLLegendElement && (l10 = e5), e5 = e5.parentElement;
  let t13 = (e5 == null ? void 0 : e5.getAttribute("disabled")) === "";
  return t13 && i3(l10) ? false : t13;
}
function i3(n6) {
  if (!n6)
    return false;
  let e5 = n6.previousElementSibling;
  for (; e5 !== null; ) {
    if (e5 instanceof HTMLLegendElement)
      return false;
    e5 = e5.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/internal/hidden.js
var a2 = "div";
var p2 = ((e5) => (e5[e5.None = 1] = "None", e5[e5.Focusable = 2] = "Focusable", e5[e5.Hidden = 4] = "Hidden", e5))(p2 || {});
function s5(t13, o8) {
  let { features: n6 = 1, ...e5 } = t13, d12 = { ref: o8, "aria-hidden": (n6 & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n6 & 4) === 4 && (n6 & 2) !== 2 && { display: "none" } } };
  return X({ ourProps: d12, theirProps: e5, slot: {}, defaultTag: a2, name: "Hidden" });
}
var c5 = D(s5);

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react30 = __toESM(require_react(), 1);
var n = (0, import_react30.createContext)(null);
n.displayName = "OpenClosedContext";
var d5 = ((e5) => (e5[e5.Open = 1] = "Open", e5[e5.Closed = 2] = "Closed", e5[e5.Closing = 4] = "Closing", e5[e5.Opening = 8] = "Opening", e5))(d5 || {});
function C() {
  return (0, import_react30.useContext)(n);
}
function c6({ value: o8, children: r8 }) {
  return import_react30.default.createElement(n.Provider, { value: o8 }, r8);
}

// node_modules/@headlessui/react/dist/components/keyboard.js
var o7 = ((r8) => (r8.Space = " ", r8.Enter = "Enter", r8.Escape = "Escape", r8.Backspace = "Backspace", r8.Delete = "Delete", r8.ArrowLeft = "ArrowLeft", r8.ArrowUp = "ArrowUp", r8.ArrowRight = "ArrowRight", r8.ArrowDown = "ArrowDown", r8.Home = "Home", r8.End = "End", r8.PageUp = "PageUp", r8.PageDown = "PageDown", r8.Tab = "Tab", r8))(o7 || {});

// node_modules/@headlessui/react/dist/hooks/use-watch.js
var import_react31 = __toESM(require_react(), 1);
function m2(u8, t13) {
  let e5 = (0, import_react31.useRef)([]), r8 = o4(u8);
  (0, import_react31.useEffect)(() => {
    let o8 = [...e5.current];
    for (let [n6, a9] of t13.entries())
      if (e5.current[n6] !== a9) {
        let l10 = r8(t13, o8);
        return e5.current = t13, l10;
      }
  }, [r8, ...t13]);
}

// node_modules/@headlessui/react/dist/utils/platform.js
function t6() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var import_react43 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
var import_react37 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var import_react32 = __toESM(require_react(), 1);
var s7 = ((r8) => (r8[r8.Forwards = 0] = "Forwards", r8[r8.Backwards = 1] = "Backwards", r8))(s7 || {});
function n2() {
  let e5 = (0, import_react32.useRef)(0);
  return s4("keydown", (o8) => {
    o8.key === "Tab" && (e5.current = o8.shiftKey ? 1 : 0);
  }, true), e5;
}

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react33 = __toESM(require_react(), 1);
function f3() {
  let e5 = (0, import_react33.useRef)(false);
  return l(() => (e5.current = true, () => {
    e5.current = false;
  }), []), e5;
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
var import_react34 = __toESM(require_react(), 1);
function n3(...e5) {
  return (0, import_react34.useMemo)(() => e(...e5), [...e5]);
}

// node_modules/@headlessui/react/dist/hooks/use-event-listener.js
var import_react35 = __toESM(require_react(), 1);
function E2(n6, e5, a9, t13) {
  let i5 = s2(a9);
  (0, import_react35.useEffect)(() => {
    n6 = n6 != null ? n6 : window;
    function r8(o8) {
      i5.current(o8);
    }
    return n6.addEventListener(e5, r8, t13), () => n6.removeEventListener(e5, r8, t13);
  }, [n6, e5, t13]);
}

// node_modules/@headlessui/react/dist/utils/document-ready.js
function t9(n6) {
  function e5() {
    document.readyState !== "loading" && (n6(), document.removeEventListener("DOMContentLoaded", e5));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e5), e5());
}

// node_modules/@headlessui/react/dist/hooks/use-on-unmount.js
var import_react36 = __toESM(require_react(), 1);
function c7(t13) {
  let r8 = o4(t13), e5 = (0, import_react36.useRef)(false);
  (0, import_react36.useEffect)(() => (e5.current = false, () => {
    e5.current = true, t3(() => {
      e5.current && r8();
    });
  }), [r8]);
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
function P(t13) {
  if (!t13)
    return /* @__PURE__ */ new Set();
  if (typeof t13 == "function")
    return new Set(t13());
  let r8 = /* @__PURE__ */ new Set();
  for (let e5 of t13.current)
    e5.current instanceof HTMLElement && r8.add(e5.current);
  return r8;
}
var J = "div";
var h3 = ((n6) => (n6[n6.None = 1] = "None", n6[n6.InitialFocus = 2] = "InitialFocus", n6[n6.TabLock = 4] = "TabLock", n6[n6.FocusLock = 8] = "FocusLock", n6[n6.RestoreFocus = 16] = "RestoreFocus", n6[n6.All = 30] = "All", n6))(h3 || {});
function X2(t13, r8) {
  let e5 = (0, import_react37.useRef)(null), o8 = y2(e5, r8), { initialFocus: u8, containers: i5, features: n6 = 30, ...l10 } = t13;
  l2() || (n6 = 1);
  let m9 = n3(e5);
  Y({ ownerDocument: m9 }, Boolean(n6 & 16));
  let c14 = Z({ ownerDocument: m9, container: e5, initialFocus: u8 }, Boolean(n6 & 2));
  $({ ownerDocument: m9, container: e5, containers: i5, previousActiveElement: c14 }, Boolean(n6 & 8));
  let v3 = n2(), y8 = o4((s12) => {
    let T6 = e5.current;
    if (!T6)
      return;
    ((B) => B())(() => {
      u(v3.current, { [s7.Forwards]: () => {
        O(T6, M.First, { skipElements: [s12.relatedTarget] });
      }, [s7.Backwards]: () => {
        O(T6, M.Last, { skipElements: [s12.relatedTarget] });
      } });
    });
  }), _2 = p(), b4 = (0, import_react37.useRef)(false), j4 = { ref: o8, onKeyDown(s12) {
    s12.key == "Tab" && (b4.current = true, _2.requestAnimationFrame(() => {
      b4.current = false;
    }));
  }, onBlur(s12) {
    let T6 = P(i5);
    e5.current instanceof HTMLElement && T6.add(e5.current);
    let d12 = s12.relatedTarget;
    d12 instanceof HTMLElement && d12.dataset.headlessuiFocusGuard !== "true" && (S3(T6, d12) || (b4.current ? O(e5.current, u(v3.current, { [s7.Forwards]: () => M.Next, [s7.Backwards]: () => M.Previous }) | M.WrapAround, { relativeTo: s12.target }) : s12.target instanceof HTMLElement && y(s12.target)));
  } };
  return import_react37.default.createElement(import_react37.default.Fragment, null, Boolean(n6 & 4) && import_react37.default.createElement(c5, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: y8, features: p2.Focusable }), X({ ourProps: j4, theirProps: l10, defaultTag: J, name: "FocusTrap" }), Boolean(n6 & 4) && import_react37.default.createElement(c5, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: y8, features: p2.Focusable }));
}
var z = D(X2);
var ge = Object.assign(z, { features: h3 });
var a3 = [];
t9(() => {
  function t13(r8) {
    r8.target instanceof HTMLElement && r8.target !== document.body && a3[0] !== r8.target && (a3.unshift(r8.target), a3 = a3.filter((e5) => e5 != null && e5.isConnected), a3.splice(10));
  }
  window.addEventListener("click", t13, { capture: true }), window.addEventListener("mousedown", t13, { capture: true }), window.addEventListener("focus", t13, { capture: true }), document.body.addEventListener("click", t13, { capture: true }), document.body.addEventListener("mousedown", t13, { capture: true }), document.body.addEventListener("focus", t13, { capture: true });
});
function Q(t13 = true) {
  let r8 = (0, import_react37.useRef)(a3.slice());
  return m2(([e5], [o8]) => {
    o8 === true && e5 === false && t3(() => {
      r8.current.splice(0);
    }), o8 === false && e5 === true && (r8.current = a3.slice());
  }, [t13, a3, r8]), o4(() => {
    var e5;
    return (e5 = r8.current.find((o8) => o8 != null && o8.isConnected)) != null ? e5 : null;
  });
}
function Y({ ownerDocument: t13 }, r8) {
  let e5 = Q(r8);
  m2(() => {
    r8 || (t13 == null ? void 0 : t13.activeElement) === (t13 == null ? void 0 : t13.body) && y(e5());
  }, [r8]), c7(() => {
    r8 && y(e5());
  });
}
function Z({ ownerDocument: t13, container: r8, initialFocus: e5 }, o8) {
  let u8 = (0, import_react37.useRef)(null), i5 = f3();
  return m2(() => {
    if (!o8)
      return;
    let n6 = r8.current;
    n6 && t3(() => {
      if (!i5.current)
        return;
      let l10 = t13 == null ? void 0 : t13.activeElement;
      if (e5 != null && e5.current) {
        if ((e5 == null ? void 0 : e5.current) === l10) {
          u8.current = l10;
          return;
        }
      } else if (n6.contains(l10)) {
        u8.current = l10;
        return;
      }
      e5 != null && e5.current ? y(e5.current) : O(n6, M.First) === N.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), u8.current = t13 == null ? void 0 : t13.activeElement;
    });
  }, [o8]), u8;
}
function $({ ownerDocument: t13, container: r8, containers: e5, previousActiveElement: o8 }, u8) {
  let i5 = f3();
  E2(t13 == null ? void 0 : t13.defaultView, "focus", (n6) => {
    if (!u8 || !i5.current)
      return;
    let l10 = P(e5);
    r8.current instanceof HTMLElement && l10.add(r8.current);
    let m9 = o8.current;
    if (!m9)
      return;
    let c14 = n6.target;
    c14 && c14 instanceof HTMLElement ? S3(l10, c14) ? (o8.current = c14, y(c14)) : (n6.preventDefault(), n6.stopPropagation(), y(m9)) : y(o8.current);
  }, true);
}
function S3(t13, r8) {
  for (let e5 of t13)
    if (e5.contains(r8))
      return true;
  return false;
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
var import_react39 = __toESM(require_react(), 1);
var import_react_dom3 = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/internal/portal-force-root.js
var import_react38 = __toESM(require_react(), 1);
var e3 = (0, import_react38.createContext)(false);
function l5() {
  return (0, import_react38.useContext)(e3);
}
function P2(o8) {
  return import_react38.default.createElement(e3.Provider, { value: o8.force }, o8.children);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
function F2(p8) {
  let l10 = l5(), n6 = (0, import_react39.useContext)(v), e5 = n3(p8), [a9, o8] = (0, import_react39.useState)(() => {
    if (!l10 && n6 !== null || s.isServer)
      return null;
    let t13 = e5 == null ? void 0 : e5.getElementById("headlessui-portal-root");
    if (t13)
      return t13;
    if (e5 === null)
      return null;
    let r8 = e5.createElement("div");
    return r8.setAttribute("id", "headlessui-portal-root"), e5.body.appendChild(r8);
  });
  return (0, import_react39.useEffect)(() => {
    a9 !== null && (e5 != null && e5.body.contains(a9) || e5 == null || e5.body.appendChild(a9));
  }, [a9, e5]), (0, import_react39.useEffect)(() => {
    l10 || n6 !== null && o8(n6.current);
  }, [n6, o8, l10]), a9;
}
var U = import_react39.Fragment;
function N3(p8, l10) {
  let n6 = p8, e5 = (0, import_react39.useRef)(null), a9 = y2(T2((u8) => {
    e5.current = u8;
  }), l10), o8 = n3(e5), t13 = F2(e5), [r8] = (0, import_react39.useState)(() => {
    var u8;
    return s.isServer ? null : (u8 = o8 == null ? void 0 : o8.createElement("div")) != null ? u8 : null;
  }), i5 = (0, import_react39.useContext)(f4), C2 = l2();
  return l(() => {
    !t13 || !r8 || t13.contains(r8) || (r8.setAttribute("data-headlessui-portal", ""), t13.appendChild(r8));
  }, [t13, r8]), l(() => {
    if (r8 && i5)
      return i5.register(r8);
  }, [i5, r8]), c7(() => {
    var u8;
    !t13 || !r8 || (r8 instanceof Node && t13.contains(r8) && t13.removeChild(r8), t13.childNodes.length <= 0 && ((u8 = t13.parentElement) == null || u8.removeChild(t13)));
  }), C2 ? !t13 || !r8 ? null : (0, import_react_dom3.createPortal)(X({ ourProps: { ref: a9 }, theirProps: n6, defaultTag: U, name: "Portal" }), r8) : null;
}
var S4 = import_react39.Fragment;
var v = (0, import_react39.createContext)(null);
function j2(p8, l10) {
  let { target: n6, ...e5 } = p8, o8 = { ref: y2(l10) };
  return import_react39.default.createElement(v.Provider, { value: n6 }, X({ ourProps: o8, theirProps: e5, defaultTag: S4, name: "Popover.Group" }));
}
var f4 = (0, import_react39.createContext)(null);
function ae() {
  let p8 = (0, import_react39.useContext)(f4), l10 = (0, import_react39.useRef)([]), n6 = o4((o8) => (l10.current.push(o8), p8 && p8.register(o8), () => e5(o8))), e5 = o4((o8) => {
    let t13 = l10.current.indexOf(o8);
    t13 !== -1 && l10.current.splice(t13, 1), p8 && p8.unregister(o8);
  }), a9 = (0, import_react39.useMemo)(() => ({ register: n6, unregister: e5, portals: l10 }), [n6, e5, l10]);
  return [l10, (0, import_react39.useMemo)(() => function({ children: t13 }) {
    return import_react39.default.createElement(f4.Provider, { value: a9 }, t13);
  }, [a9])];
}
var D2 = D(N3);
var I3 = D(j2);
var pe = Object.assign(D2, { Group: I3 });

// node_modules/@headlessui/react/dist/components/description/description.js
var import_react40 = __toESM(require_react(), 1);
var d8 = (0, import_react40.createContext)(null);
function f5() {
  let r8 = (0, import_react40.useContext)(d8);
  if (r8 === null) {
    let t13 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t13, f5), t13;
  }
  return r8;
}
function M2() {
  let [r8, t13] = (0, import_react40.useState)([]);
  return [r8.length > 0 ? r8.join(" ") : void 0, (0, import_react40.useMemo)(() => function(e5) {
    let i5 = o4((s12) => (t13((o8) => [...o8, s12]), () => t13((o8) => {
      let p8 = o8.slice(), c14 = p8.indexOf(s12);
      return c14 !== -1 && p8.splice(c14, 1), p8;
    }))), n6 = (0, import_react40.useMemo)(() => ({ register: i5, slot: e5.slot, name: e5.name, props: e5.props }), [i5, e5.slot, e5.name, e5.props]);
    return import_react40.default.createElement(d8.Provider, { value: n6 }, e5.children);
  }, [t13])];
}
var S5 = "p";
function h4(r8, t13) {
  let a9 = I(), { id: e5 = `headlessui-description-${a9}`, ...i5 } = r8, n6 = f5(), s12 = y2(t13);
  l(() => n6.register(e5), [e5, n6.register]);
  let o8 = { ref: s12, ...n6.props, id: e5 };
  return X({ ourProps: o8, theirProps: i5, slot: n6.slot || {}, defaultTag: S5, name: n6.name || "Description" });
}
var y3 = D(h4);
var b2 = Object.assign(y3, {});

// node_modules/@headlessui/react/dist/internal/stack-context.js
var import_react41 = __toESM(require_react(), 1);
var a4 = (0, import_react41.createContext)(() => {
});
a4.displayName = "StackContext";
var s9 = ((e5) => (e5[e5.Add = 0] = "Add", e5[e5.Remove = 1] = "Remove", e5))(s9 || {});
function x2() {
  return (0, import_react41.useContext)(a4);
}
function M3({ children: i5, onUpdate: r8, type: e5, element: n6, enabled: u8 }) {
  let l10 = x2(), o8 = o4((...t13) => {
    r8 == null || r8(...t13), l10(...t13);
  });
  return l(() => {
    let t13 = u8 === void 0 || u8 === true;
    return t13 && o8(0, e5, n6), () => {
      t13 && o8(1, e5, n6);
    };
  }, [o8, e5, n6, u8]), import_react41.default.createElement(a4.Provider, { value: o8 }, i5);
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var e4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimClient.js
var l7 = __toESM(require_react(), 1);
function i4(e5, t13) {
  return e5 === t13 && (e5 !== 0 || 1 / e5 === 1 / t13) || e5 !== e5 && t13 !== t13;
}
var d10 = typeof Object.is == "function" ? Object.is : i4;
var { useState: u5, useEffect: h5, useLayoutEffect: f6, useDebugValue: p4 } = l7;
function y4(e5, t13, c14) {
  const a9 = t13(), [{ inst: n6 }, o8] = u5({ inst: { value: a9, getSnapshot: t13 } });
  return f6(() => {
    n6.value = a9, n6.getSnapshot = t13, r6(n6) && o8({ inst: n6 });
  }, [e5, a9, t13]), h5(() => (r6(n6) && o8({ inst: n6 }), e5(() => {
    r6(n6) && o8({ inst: n6 });
  })), [e5]), p4(a9), a9;
}
function r6(e5) {
  const t13 = e5.getSnapshot, c14 = e5.value;
  try {
    const a9 = t13();
    return !d10(c14, a9);
  } catch {
    return true;
  }
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimServer.js
function t11(r8, e5, n6) {
  return e5();
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var r7 = typeof window != "undefined" && typeof window.document != "undefined" && typeof window.document.createElement != "undefined";
var s10 = !r7;
var c10 = s10 ? t11 : y4;
var a5 = "useSyncExternalStore" in e4 ? ((n6) => n6.useSyncExternalStore)(e4) : c10;

// node_modules/@headlessui/react/dist/hooks/use-store.js
function S6(t13) {
  return a5(t13.subscribe, t13.getSnapshot, t13.getSnapshot);
}

// node_modules/@headlessui/react/dist/utils/store.js
function a6(o8, r8) {
  let t13 = o8(), n6 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t13;
  }, subscribe(e5) {
    return n6.add(e5), () => n6.delete(e5);
  }, dispatch(e5, ...s12) {
    let i5 = r8[e5].call(t13, ...s12);
    i5 && (t13 = i5, n6.forEach((c14) => c14()));
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function c11() {
  let o8;
  return { before({ doc: e5 }) {
    var l10;
    let n6 = e5.documentElement;
    o8 = ((l10 = e5.defaultView) != null ? l10 : window).innerWidth - n6.clientWidth;
  }, after({ doc: e5, d: n6 }) {
    let t13 = e5.documentElement, l10 = t13.clientWidth - t13.offsetWidth, r8 = o8 - l10;
    n6.style(t13, "paddingRight", `${r8}px`);
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
function p5() {
  if (!t6())
    return {};
  let o8;
  return { before() {
    o8 = window.pageYOffset;
  }, after({ doc: r8, d: l10, meta: s12 }) {
    function i5(e5) {
      return s12.containers.flatMap((t13) => t13()).some((t13) => t13.contains(e5));
    }
    l10.style(r8.body, "marginTop", `-${o8}px`), window.scrollTo(0, 0);
    let n6 = null;
    l10.addEventListener(r8, "click", (e5) => {
      if (e5.target instanceof HTMLElement)
        try {
          let t13 = e5.target.closest("a");
          if (!t13)
            return;
          let { hash: c14 } = new URL(t13.href), a9 = r8.querySelector(c14);
          a9 && !i5(a9) && (n6 = a9);
        } catch {
        }
    }, true), l10.addEventListener(r8, "touchmove", (e5) => {
      e5.target instanceof HTMLElement && !i5(e5.target) && e5.preventDefault();
    }, { passive: false }), l10.add(() => {
      window.scrollTo(0, window.pageYOffset + o8), n6 && n6.isConnected && (n6.scrollIntoView({ block: "nearest" }), n6 = null);
    });
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
function l8() {
  return { before({ doc: e5, d: o8 }) {
    o8.style(e5.documentElement, "overflow", "hidden");
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
function m6(e5) {
  let n6 = {};
  for (let t13 of e5)
    Object.assign(n6, t13(n6));
  return n6;
}
var a7 = a6(() => /* @__PURE__ */ new Map(), { PUSH(e5, n6) {
  var o8;
  let t13 = (o8 = this.get(e5)) != null ? o8 : { doc: e5, count: 0, d: o2(), meta: /* @__PURE__ */ new Set() };
  return t13.count++, t13.meta.add(n6), this.set(e5, t13), this;
}, POP(e5, n6) {
  let t13 = this.get(e5);
  return t13 && (t13.count--, t13.meta.delete(n6)), this;
}, SCROLL_PREVENT({ doc: e5, d: n6, meta: t13 }) {
  let o8 = { doc: e5, d: n6, meta: m6(t13) }, c14 = [p5(), c11(), l8()];
  c14.forEach(({ before: r8 }) => r8 == null ? void 0 : r8(o8)), c14.forEach(({ after: r8 }) => r8 == null ? void 0 : r8(o8));
}, SCROLL_ALLOW({ d: e5 }) {
  e5.dispose();
}, TEARDOWN({ doc: e5 }) {
  this.delete(e5);
} });
a7.subscribe(() => {
  let e5 = a7.getSnapshot(), n6 = /* @__PURE__ */ new Map();
  for (let [t13] of e5)
    n6.set(t13, t13.documentElement.style.overflow);
  for (let t13 of e5.values()) {
    let o8 = n6.get(t13.doc) === "hidden", c14 = t13.count !== 0;
    (c14 && !o8 || !c14 && o8) && a7.dispatch(t13.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t13), t13.count === 0 && a7.dispatch("TEARDOWN", t13);
  }
});

// node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
function p6(e5, r8, n6) {
  let f8 = S6(a7), o8 = e5 ? f8.get(e5) : void 0, i5 = o8 ? o8.count > 0 : false;
  return l(() => {
    if (!(!e5 || !r8))
      return a7.dispatch("PUSH", e5, n6), () => a7.dispatch("POP", e5, n6);
  }, [r8, e5]), i5;
}

// node_modules/@headlessui/react/dist/hooks/use-inert.js
var u6 = /* @__PURE__ */ new Map();
var t12 = /* @__PURE__ */ new Map();
function h6(r8, l10 = true) {
  l(() => {
    var o8;
    if (!l10)
      return;
    let e5 = typeof r8 == "function" ? r8() : r8.current;
    if (!e5)
      return;
    function a9() {
      var d12;
      if (!e5)
        return;
      let i5 = (d12 = t12.get(e5)) != null ? d12 : 1;
      if (i5 === 1 ? t12.delete(e5) : t12.set(e5, i5 - 1), i5 !== 1)
        return;
      let n6 = u6.get(e5);
      n6 && (n6["aria-hidden"] === null ? e5.removeAttribute("aria-hidden") : e5.setAttribute("aria-hidden", n6["aria-hidden"]), e5.inert = n6.inert, u6.delete(e5));
    }
    let f8 = (o8 = t12.get(e5)) != null ? o8 : 0;
    return t12.set(e5, f8 + 1), f8 !== 0 || (u6.set(e5, { "aria-hidden": e5.getAttribute("aria-hidden"), inert: e5.inert }), e5.setAttribute("aria-hidden", "true"), e5.inert = true), a9;
  }, [r8, l10]);
}

// node_modules/@headlessui/react/dist/hooks/use-root-containers.js
var import_react42 = __toESM(require_react(), 1);
function p7({ defaultContainers: f8 = [], portals: o8 } = {}) {
  let t13 = (0, import_react42.useRef)(null), i5 = n3(t13), u8 = o4(() => {
    var r8;
    let n6 = [];
    for (let e5 of f8)
      e5 !== null && (e5 instanceof HTMLElement ? n6.push(e5) : "current" in e5 && e5.current instanceof HTMLElement && n6.push(e5.current));
    if (o8 != null && o8.current)
      for (let e5 of o8.current)
        n6.push(e5);
    for (let e5 of (r8 = i5 == null ? void 0 : i5.querySelectorAll("html > *, body > *")) != null ? r8 : [])
      e5 !== document.body && e5 !== document.head && e5 instanceof HTMLElement && e5.id !== "headlessui-portal-root" && (e5.contains(t13.current) || n6.some((c14) => e5.contains(c14)) || n6.push(e5));
    return n6;
  });
  return { resolveContainers: u8, contains: o4((n6) => u8().some((r8) => r8.contains(n6))), mainTreeNodeRef: t13, MainTreeNode: (0, import_react42.useMemo)(() => function() {
    return import_react42.default.createElement(c5, { features: p2.Hidden, ref: t13 });
  }, [t13]) };
}

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var _e = ((o8) => (o8[o8.Open = 0] = "Open", o8[o8.Closed = 1] = "Closed", o8))(_e || {});
var Ie = ((e5) => (e5[e5.SetTitleId = 0] = "SetTitleId", e5))(Ie || {});
var Me = { [0](t13, e5) {
  return t13.titleId === e5.id ? t13 : { ...t13, titleId: e5.id };
} };
var I4 = (0, import_react43.createContext)(null);
I4.displayName = "DialogContext";
function b3(t13) {
  let e5 = (0, import_react43.useContext)(I4);
  if (e5 === null) {
    let o8 = new Error(`<${t13} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o8, b3), o8;
  }
  return e5;
}
function we(t13, e5, o8 = () => [document.body]) {
  p6(t13, e5, (i5) => {
    var n6;
    return { containers: [...(n6 = i5.containers) != null ? n6 : [], o8] };
  });
}
function Be(t13, e5) {
  return u(e5.type, Me, t13, e5);
}
var He = "div";
var Ge = S2.RenderStrategy | S2.Static;
function Ne(t13, e5) {
  var X4;
  let o8 = I(), { id: i5 = `headlessui-dialog-${o8}`, open: n6, onClose: l10, initialFocus: s12, __demoMode: g3 = false, ...T6 } = t13, [m9, h7] = (0, import_react43.useState)(0), a9 = C();
  n6 === void 0 && a9 !== null && (n6 = (a9 & d5.Open) === d5.Open);
  let D5 = (0, import_react43.useRef)(null), Q3 = y2(D5, e5), f8 = n3(D5), N4 = t13.hasOwnProperty("open") || a9 !== null, U2 = t13.hasOwnProperty("onClose");
  if (!N4 && !U2)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!N4)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!U2)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof n6 != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n6}`);
  if (typeof l10 != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l10}`);
  let p8 = n6 ? 0 : 1, [S7, Z3] = (0, import_react43.useReducer)(Be, { titleId: null, descriptionId: null, panelRef: (0, import_react43.createRef)() }), P4 = o4(() => l10(false)), W2 = o4((r8) => Z3({ type: 0, id: r8 })), L2 = l2() ? g3 ? false : p8 === 0 : false, F4 = m9 > 1, Y3 = (0, import_react43.useContext)(I4) !== null, [ee, te] = ae(), { resolveContainers: M5, mainTreeNodeRef: k, MainTreeNode: oe2 } = p7({ portals: ee, defaultContainers: [(X4 = S7.panelRef.current) != null ? X4 : D5.current] }), re2 = F4 ? "parent" : "leaf", $2 = a9 !== null ? (a9 & d5.Closing) === d5.Closing : false, ne = (() => Y3 || $2 ? false : L2)(), le = (0, import_react43.useCallback)(() => {
    var r8, c14;
    return (c14 = Array.from((r8 = f8 == null ? void 0 : f8.querySelectorAll("body > *")) != null ? r8 : []).find((d12) => d12.id === "headlessui-portal-root" ? false : d12.contains(k.current) && d12 instanceof HTMLElement)) != null ? c14 : null;
  }, [k]);
  h6(le, ne);
  let ae2 = (() => F4 ? true : L2)(), ie2 = (0, import_react43.useCallback)(() => {
    var r8, c14;
    return (c14 = Array.from((r8 = f8 == null ? void 0 : f8.querySelectorAll("[data-headlessui-portal]")) != null ? r8 : []).find((d12) => d12.contains(k.current) && d12 instanceof HTMLElement)) != null ? c14 : null;
  }, [k]);
  h6(ie2, ae2);
  let se2 = (() => !(!L2 || F4))();
  H2(M5, P4, se2);
  let pe2 = (() => !(F4 || p8 !== 0))();
  E2(f8 == null ? void 0 : f8.defaultView, "keydown", (r8) => {
    pe2 && (r8.defaultPrevented || r8.key === o7.Escape && (r8.preventDefault(), r8.stopPropagation(), P4()));
  });
  let de = (() => !($2 || p8 !== 0 || Y3))();
  we(f8, de, M5), (0, import_react43.useEffect)(() => {
    if (p8 !== 0 || !D5.current)
      return;
    let r8 = new ResizeObserver((c14) => {
      for (let d12 of c14) {
        let x4 = d12.target.getBoundingClientRect();
        x4.x === 0 && x4.y === 0 && x4.width === 0 && x4.height === 0 && P4();
      }
    });
    return r8.observe(D5.current), () => r8.disconnect();
  }, [p8, D5, P4]);
  let [ue, fe] = M2(), ge2 = (0, import_react43.useMemo)(() => [{ dialogState: p8, close: P4, setTitleId: W2 }, S7], [p8, S7, P4, W2]), J2 = (0, import_react43.useMemo)(() => ({ open: p8 === 0 }), [p8]), Te = { ref: Q3, id: i5, role: "dialog", "aria-modal": p8 === 0 ? true : void 0, "aria-labelledby": S7.titleId, "aria-describedby": ue };
  return import_react43.default.createElement(M3, { type: "Dialog", enabled: p8 === 0, element: D5, onUpdate: o4((r8, c14) => {
    c14 === "Dialog" && u(r8, { [s9.Add]: () => h7((d12) => d12 + 1), [s9.Remove]: () => h7((d12) => d12 - 1) });
  }) }, import_react43.default.createElement(P2, { force: true }, import_react43.default.createElement(pe, null, import_react43.default.createElement(I4.Provider, { value: ge2 }, import_react43.default.createElement(pe.Group, { target: D5 }, import_react43.default.createElement(P2, { force: false }, import_react43.default.createElement(fe, { slot: J2, name: "Dialog.Description" }, import_react43.default.createElement(ge, { initialFocus: s12, containers: M5, features: L2 ? u(re2, { parent: ge.features.RestoreFocus, leaf: ge.features.All & ~ge.features.FocusLock }) : ge.features.None }, import_react43.default.createElement(te, null, X({ ourProps: Te, theirProps: T6, slot: J2, defaultTag: He, features: Ge, visible: p8 === 0, name: "Dialog" }))))))))), import_react43.default.createElement(oe2, null));
}
var Ue = "div";
function We(t13, e5) {
  let o8 = I(), { id: i5 = `headlessui-dialog-overlay-${o8}`, ...n6 } = t13, [{ dialogState: l10, close: s12 }] = b3("Dialog.Overlay"), g3 = y2(e5), T6 = o4((a9) => {
    if (a9.target === a9.currentTarget) {
      if (r3(a9.currentTarget))
        return a9.preventDefault();
      a9.preventDefault(), a9.stopPropagation(), s12();
    }
  }), m9 = (0, import_react43.useMemo)(() => ({ open: l10 === 0 }), [l10]);
  return X({ ourProps: { ref: g3, id: i5, "aria-hidden": true, onClick: T6 }, theirProps: n6, slot: m9, defaultTag: Ue, name: "Dialog.Overlay" });
}
var Ye = "div";
function $e(t13, e5) {
  let o8 = I(), { id: i5 = `headlessui-dialog-backdrop-${o8}`, ...n6 } = t13, [{ dialogState: l10 }, s12] = b3("Dialog.Backdrop"), g3 = y2(e5);
  (0, import_react43.useEffect)(() => {
    if (s12.panelRef.current === null)
      throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.");
  }, [s12.panelRef]);
  let T6 = (0, import_react43.useMemo)(() => ({ open: l10 === 0 }), [l10]);
  return import_react43.default.createElement(P2, { force: true }, import_react43.default.createElement(pe, null, X({ ourProps: { ref: g3, id: i5, "aria-hidden": true }, theirProps: n6, slot: T6, defaultTag: Ye, name: "Dialog.Backdrop" })));
}
var Je = "div";
function Xe(t13, e5) {
  let o8 = I(), { id: i5 = `headlessui-dialog-panel-${o8}`, ...n6 } = t13, [{ dialogState: l10 }, s12] = b3("Dialog.Panel"), g3 = y2(e5, s12.panelRef), T6 = (0, import_react43.useMemo)(() => ({ open: l10 === 0 }), [l10]), m9 = o4((a9) => {
    a9.stopPropagation();
  });
  return X({ ourProps: { ref: g3, id: i5, onClick: m9 }, theirProps: n6, slot: T6, defaultTag: Je, name: "Dialog.Panel" });
}
var je = "h2";
function Ke(t13, e5) {
  let o8 = I(), { id: i5 = `headlessui-dialog-title-${o8}`, ...n6 } = t13, [{ dialogState: l10, setTitleId: s12 }] = b3("Dialog.Title"), g3 = y2(e5);
  (0, import_react43.useEffect)(() => (s12(i5), () => s12(null)), [i5, s12]);
  let T6 = (0, import_react43.useMemo)(() => ({ open: l10 === 0 }), [l10]);
  return X({ ourProps: { ref: g3, id: i5 }, theirProps: n6, slot: T6, defaultTag: je, name: "Dialog.Title" });
}
var Ve = D(Ne);
var qe = D($e);
var ze = D(Xe);
var Qe = D(We);
var Ze = D(Ke);
var _t = Object.assign(Ve, { Backdrop: qe, Panel: ze, Overlay: Qe, Title: Ze, Description: b2 });

// node_modules/@headlessui/react/dist/hooks/use-flags.js
var import_react44 = __toESM(require_react(), 1);
function c12(a9 = 0) {
  let [l10, r8] = (0, import_react44.useState)(a9), t13 = f3(), o8 = (0, import_react44.useCallback)((e5) => {
    t13.current && r8((u8) => u8 | e5);
  }, [l10, t13]), m9 = (0, import_react44.useCallback)((e5) => Boolean(l10 & e5), [l10]), s12 = (0, import_react44.useCallback)((e5) => {
    t13.current && r8((u8) => u8 & ~e5);
  }, [r8, t13]), g3 = (0, import_react44.useCallback)((e5) => {
    t13.current && r8((u8) => u8 ^ e5);
  }, [r8]);
  return { flags: l10, addFlag: o8, hasFlag: m9, removeFlag: s12, toggleFlag: g3 };
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
var import_react45 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/once.js
function l9(r8) {
  let e5 = { called: false };
  return (...t13) => {
    if (!e5.called)
      return e5.called = true, r8(...t13);
  };
}

// node_modules/@headlessui/react/dist/components/transitions/utils/transition.js
function d11(t13, ...e5) {
  t13 && e5.length > 0 && t13.classList.add(...e5);
}
function v2(t13, ...e5) {
  t13 && e5.length > 0 && t13.classList.remove(...e5);
}
function F3(t13, e5) {
  let n6 = o2();
  if (!t13)
    return n6.dispose;
  let { transitionDuration: m9, transitionDelay: o8 } = getComputedStyle(t13), [u8, p8] = [m9, o8].map((a9) => {
    let [r8 = 0] = a9.split(",").filter(Boolean).map((i5) => i5.includes("ms") ? parseFloat(i5) : parseFloat(i5) * 1e3).sort((i5, f8) => f8 - i5);
    return r8;
  }), l10 = u8 + p8;
  if (l10 !== 0) {
    n6.group((r8) => {
      r8.setTimeout(() => {
        e5(), r8.dispose();
      }, l10), r8.addEventListener(t13, "transitionrun", (i5) => {
        i5.target === i5.currentTarget && r8.dispose();
      });
    });
    let a9 = n6.addEventListener(t13, "transitionend", (r8) => {
      r8.target === r8.currentTarget && (e5(), a9());
    });
  } else
    e5();
  return n6.add(() => e5()), n6.dispose;
}
function y6(t13, e5, n6, m9) {
  let o8 = n6 ? "enter" : "leave", u8 = o2(), p8 = m9 !== void 0 ? l9(m9) : () => {
  };
  o8 === "enter" && (t13.removeAttribute("hidden"), t13.style.display = "");
  let l10 = u(o8, { enter: () => e5.enter, leave: () => e5.leave }), a9 = u(o8, { enter: () => e5.enterTo, leave: () => e5.leaveTo }), r8 = u(o8, { enter: () => e5.enterFrom, leave: () => e5.leaveFrom });
  return v2(t13, ...e5.enter, ...e5.enterTo, ...e5.enterFrom, ...e5.leave, ...e5.leaveFrom, ...e5.leaveTo, ...e5.entered), d11(t13, ...l10, ...r8), u8.nextFrame(() => {
    v2(t13, ...r8), d11(t13, ...a9), F3(t13, () => (v2(t13, ...l10), d11(t13, ...e5.entered), p8()));
  }), u8.dispose;
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
function D4({ container: i5, direction: t13, classes: o8, onStart: s12, onStop: u8 }) {
  let a9 = f3(), c14 = p(), r8 = s2(t13);
  l(() => {
    let e5 = o2();
    c14.add(e5.dispose);
    let n6 = i5.current;
    if (n6 && r8.current !== "idle" && a9.current)
      return e5.dispose(), s12.current(r8.current), e5.add(y6(n6, o8.current, r8.current === "enter", () => {
        e5.dispose(), u8.current(r8.current);
      })), e5.dispose;
  }, [t13]);
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
function x3(t13 = "") {
  return t13.split(" ").filter((n6) => n6.trim().length > 1);
}
var I5 = (0, import_react45.createContext)(null);
I5.displayName = "TransitionContext";
var Ce = ((r8) => (r8.Visible = "visible", r8.Hidden = "hidden", r8))(Ce || {});
function Ee() {
  let t13 = (0, import_react45.useContext)(I5);
  if (t13 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t13;
}
function be() {
  let t13 = (0, import_react45.useContext)(_);
  if (t13 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t13;
}
var _ = (0, import_react45.createContext)(null);
_.displayName = "NestingContext";
function M4(t13) {
  return "children" in t13 ? M4(t13.children) : t13.current.filter(({ el: n6 }) => n6.current !== null).filter(({ state: n6 }) => n6 === "visible").length > 0;
}
function re(t13, n6) {
  let r8 = s2(t13), o8 = (0, import_react45.useRef)([]), N4 = f3(), H4 = p(), p8 = o4((s12, e5 = j.Hidden) => {
    let a9 = o8.current.findIndex(({ el: i5 }) => i5 === s12);
    a9 !== -1 && (u(e5, { [j.Unmount]() {
      o8.current.splice(a9, 1);
    }, [j.Hidden]() {
      o8.current[a9].state = "hidden";
    } }), H4.microTask(() => {
      var i5;
      !M4(o8) && N4.current && ((i5 = r8.current) == null || i5.call(r8));
    }));
  }), P4 = o4((s12) => {
    let e5 = o8.current.find(({ el: a9 }) => a9 === s12);
    return e5 ? e5.state !== "visible" && (e5.state = "visible") : o8.current.push({ el: s12, state: "visible" }), () => p8(s12, j.Unmount);
  }), h7 = (0, import_react45.useRef)([]), v3 = (0, import_react45.useRef)(Promise.resolve()), T6 = (0, import_react45.useRef)({ enter: [], leave: [], idle: [] }), g3 = o4((s12, e5, a9) => {
    h7.current.splice(0), n6 && (n6.chains.current[e5] = n6.chains.current[e5].filter(([i5]) => i5 !== s12)), n6 == null || n6.chains.current[e5].push([s12, new Promise((i5) => {
      h7.current.push(i5);
    })]), n6 == null || n6.chains.current[e5].push([s12, new Promise((i5) => {
      Promise.all(T6.current[e5].map(([l10, R3]) => R3)).then(() => i5());
    })]), e5 === "enter" ? v3.current = v3.current.then(() => n6 == null ? void 0 : n6.wait.current).then(() => a9(e5)) : a9(e5);
  }), f8 = o4((s12, e5, a9) => {
    Promise.all(T6.current[e5].splice(0).map(([i5, l10]) => l10)).then(() => {
      var i5;
      (i5 = h7.current.shift()) == null || i5();
    }).then(() => a9(e5));
  });
  return (0, import_react45.useMemo)(() => ({ children: o8, register: P4, unregister: p8, onStart: g3, onStop: f8, wait: v3, chains: T6 }), [P4, p8, o8, g3, f8, T6, v3]);
}
function Se() {
}
var xe = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function ie(t13) {
  var r8;
  let n6 = {};
  for (let o8 of xe)
    n6[o8] = (r8 = t13[o8]) != null ? r8 : Se;
  return n6;
}
function Pe2(t13) {
  let n6 = (0, import_react45.useRef)(ie(t13));
  return (0, import_react45.useEffect)(() => {
    n6.current = ie(t13);
  }, [t13]), n6;
}
var Re = "div";
var oe = S2.RenderStrategy;
function ye2(t13, n6) {
  let { beforeEnter: r8, afterEnter: o8, beforeLeave: N4, afterLeave: H4, enter: p8, enterFrom: P4, enterTo: h7, entered: v3, leave: T6, leaveFrom: g3, leaveTo: f8, ...s12 } = t13, e5 = (0, import_react45.useRef)(null), a9 = y2(e5, n6), i5 = s12.unmount ? j.Unmount : j.Hidden, { show: l10, appear: R3, initial: d12 } = Ee(), [u8, U2] = (0, import_react45.useState)(l10 ? "visible" : "hidden"), K2 = be(), { register: L2, unregister: w4 } = K2, j4 = (0, import_react45.useRef)(null);
  (0, import_react45.useEffect)(() => L2(e5), [L2, e5]), (0, import_react45.useEffect)(() => {
    if (i5 === j.Hidden && e5.current) {
      if (l10 && u8 !== "visible") {
        U2("visible");
        return;
      }
      return u(u8, { ["hidden"]: () => w4(e5), ["visible"]: () => L2(e5) });
    }
  }, [u8, e5, L2, w4, l10, i5]);
  let k = s2({ enter: x3(p8), enterFrom: x3(P4), enterTo: x3(h7), entered: x3(v3), leave: x3(T6), leaveFrom: x3(g3), leaveTo: x3(f8) }), O2 = Pe2({ beforeEnter: r8, afterEnter: o8, beforeLeave: N4, afterLeave: H4 }), G = l2();
  (0, import_react45.useEffect)(() => {
    if (G && u8 === "visible" && e5.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [e5, u8, G]);
  let B = d12 && !R3, ae2 = (() => !G || B || j4.current === l10 ? "idle" : l10 ? "enter" : "leave")(), D5 = c12(0), le = o4((C2) => u(C2, { enter: () => {
    D5.addFlag(d5.Opening), O2.current.beforeEnter();
  }, leave: () => {
    D5.addFlag(d5.Closing), O2.current.beforeLeave();
  }, idle: () => {
  } })), ue = o4((C2) => u(C2, { enter: () => {
    D5.removeFlag(d5.Opening), O2.current.afterEnter();
  }, leave: () => {
    D5.removeFlag(d5.Closing), O2.current.afterLeave();
  }, idle: () => {
  } })), V = re(() => {
    U2("hidden"), w4(e5);
  }, K2);
  D4({ container: e5, classes: k, direction: ae2, onStart: s2((C2) => {
    V.onStart(e5, C2, le);
  }), onStop: s2((C2) => {
    V.onStop(e5, C2, ue), C2 === "leave" && !M4(V) && (U2("hidden"), w4(e5));
  }) }), (0, import_react45.useEffect)(() => {
    B && (i5 === j.Hidden ? j4.current = null : j4.current = l10);
  }, [l10, B, u8]);
  let J2 = s12, Te = { ref: a9 };
  return R3 && l10 && d12 && (J2 = { ...J2, className: e2(s12.className, ...k.current.enter, ...k.current.enterFrom) }), import_react45.default.createElement(_.Provider, { value: V }, import_react45.default.createElement(c6, { value: u(u8, { ["visible"]: d5.Open, ["hidden"]: d5.Closed }) | D5.flags }, X({ ourProps: Te, theirProps: J2, defaultTag: Re, features: oe, visible: u8 === "visible", name: "Transition.Child" })));
}
function Ne2(t13, n6) {
  let { show: r8, appear: o8 = false, unmount: N4, ...H4 } = t13, p8 = (0, import_react45.useRef)(null), P4 = y2(p8, n6);
  l2();
  let h7 = C();
  if (r8 === void 0 && h7 !== null && (r8 = (h7 & d5.Open) === d5.Open), ![true, false].includes(r8))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [v3, T6] = (0, import_react45.useState)(r8 ? "visible" : "hidden"), g3 = re(() => {
    T6("hidden");
  }), [f8, s12] = (0, import_react45.useState)(true), e5 = (0, import_react45.useRef)([r8]);
  l(() => {
    f8 !== false && e5.current[e5.current.length - 1] !== r8 && (e5.current.push(r8), s12(false));
  }, [e5, r8]);
  let a9 = (0, import_react45.useMemo)(() => ({ show: r8, appear: o8, initial: f8 }), [r8, o8, f8]);
  (0, import_react45.useEffect)(() => {
    if (r8)
      T6("visible");
    else if (!M4(g3))
      T6("hidden");
    else {
      let d12 = p8.current;
      if (!d12)
        return;
      let u8 = d12.getBoundingClientRect();
      u8.x === 0 && u8.y === 0 && u8.width === 0 && u8.height === 0 && T6("hidden");
    }
  }, [r8, g3]);
  let i5 = { unmount: N4 }, l10 = o4(() => {
    var d12;
    f8 && s12(false), (d12 = t13.beforeEnter) == null || d12.call(t13);
  }), R3 = o4(() => {
    var d12;
    f8 && s12(false), (d12 = t13.beforeLeave) == null || d12.call(t13);
  });
  return import_react45.default.createElement(_.Provider, { value: g3 }, import_react45.default.createElement(I5.Provider, { value: a9 }, X({ ourProps: { ...i5, as: import_react45.Fragment, children: import_react45.default.createElement(se, { ref: P4, ...i5, ...H4, beforeEnter: l10, beforeLeave: R3 }) }, theirProps: {}, defaultTag: import_react45.Fragment, features: oe, visible: v3 === "visible", name: "Transition" })));
}
function He2(t13, n6) {
  let r8 = (0, import_react45.useContext)(I5) !== null, o8 = C() !== null;
  return import_react45.default.createElement(import_react45.default.Fragment, null, !r8 && o8 ? import_react45.default.createElement(z2, { ref: n6, ...t13 }) : import_react45.default.createElement(se, { ref: n6, ...t13 }));
}
var z2 = D(Ne2);
var se = D(ye2);
var De2 = D(He2);
var $e2 = Object.assign(z2, { Child: De2, Root: z2 });

// app/components/slide-in-drawer/SlideInDrawer.tsx
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/slide-in-drawer/SlideInDrawer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/slide-in-drawer/SlideInDrawer.tsx"
  );
  import.meta.hot.lastModified = "1689132233798.863";
}
var SlideInDrawer = ({
  open,
  onClose,
  children
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)($e2.Root, {
      show: open,
      as: import_react46.Fragment,
      children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(_t, {
        as: "div",
        className: "relative z-10",
        onClose,
        children: [/* @__PURE__ */ (0, import_jsx_runtime6.jsx)($e2.Child, {
          as: import_react46.Fragment,
          enter: "ease-in-out duration-500",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "ease-in-out duration-500",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {
            className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          })
        }), /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {
          className: "fixed inset-0 overflow-hidden",
          children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {
            className: "absolute inset-0 overflow-hidden",
            children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {
              className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",
              children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)($e2.Child, {
                as: import_react46.Fragment,
                enter: "transform transition ease-in-out duration-500 sm:duration-700",
                enterFrom: "translate-x-full",
                enterTo: "translate-x-0",
                leave: "transform transition ease-in-out duration-500 sm:duration-700",
                leaveFrom: "translate-x-0",
                leaveTo: "translate-x-full",
                children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(_t.Panel, {
                  className: "pointer-events-auto relative w-screen max-w-xl",
                  children: [/* @__PURE__ */ (0, import_jsx_runtime6.jsx)($e2.Child, {
                    as: import_react46.Fragment,
                    enter: "ease-in-out duration-500",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in-out duration-500",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {
                      className: "absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4",
                      children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("button", {
                        type: "button",
                        className: "rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white",
                        onClick: () => onClose(),
                        children: [/* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", {
                          className: "sr-only",
                          children: "Close panel"
                        }), /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(XMarkIcon_default, {
                          className: "h-6 w-6",
                          "aria-hidden": "true"
                        })]
                      })
                    })
                  }), /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {
                    className: "flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl",
                    children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", {
                      className: "relative mt-6 flex-1 px-4 sm:px-6",
                      children
                    })
                  })]
                })
              })
            })
          })
        })]
      })
    })
  });
};
_c6 = SlideInDrawer;
var _c6;
$RefreshReg$(_c6, "SlideInDrawer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/dooh-finder/DoohFinder.tsx
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/dooh-finder/DoohFinder.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/dooh-finder/DoohFinder.tsx"
  );
  import.meta.hot.lastModified = "1689133269928.908";
}
var DoohFinder = ({
  token,
  points
}) => {
  _s3();
  const [activeDoohID, setaActiveDoohID] = (0, import_react48.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ClusterMap, {
      token,
      points,
      onMarkerClick: (pinData) => {
        setaActiveDoohID(pinData.properties.id);
      }
    }), /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SlideInDrawer, {
      open: activeDoohID > 0,
      onClose: () => setaActiveDoohID(0),
      children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DoohDetails, {
        selectedId: activeDoohID
      })
    })]
  });
};
_s3(DoohFinder, "Q2LVXTpF+6Hnehjrc07SzPpbpmA=");
_c7 = DoohFinder;
var _c7;
$RefreshReg$(_c7, "DoohFinder");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
var import_map8 = __toESM(require_map());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
}
var meta = () => {
  return [{
    title: "Youdooh - Demo"
  }, {
    name: "description",
    content: "Welcome to Youdooh!"
  }];
};
var links = () => {
  return [{
    rel: "stylesheet",
    href: "https://api.tiles.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
  }];
};
function Index() {
  _s4();
  const {
    points,
    mapBoxToken
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", {
    children: [/* @__PURE__ */ (0, import_jsx_runtime8.jsx)(NavBar, {}), /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(DoohFinder, {
      token: mapBoxToken,
      points
    })]
  });
}
_s4(Index, "rC2ChcAai0Ta0kGLTGSiTJe7mj0=", false, function() {
  return [useLoaderData];
});
_c8 = Index;
var _c8;
$RefreshReg$(_c8, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/_index-UFKC6UZS.js.map
