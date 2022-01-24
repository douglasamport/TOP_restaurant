/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".red {\n    color: red;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;AACd","sourcesContent":[".red {\n    color: red;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/dom-serializer/lib/foreignNames.js":
/*!*********************************************************!*\
  !*** ./node_modules/dom-serializer/lib/foreignNames.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.attributeNames = exports.elementNames = void 0;
exports.elementNames = new Map([
    ["altglyph", "altGlyph"],
    ["altglyphdef", "altGlyphDef"],
    ["altglyphitem", "altGlyphItem"],
    ["animatecolor", "animateColor"],
    ["animatemotion", "animateMotion"],
    ["animatetransform", "animateTransform"],
    ["clippath", "clipPath"],
    ["feblend", "feBlend"],
    ["fecolormatrix", "feColorMatrix"],
    ["fecomponenttransfer", "feComponentTransfer"],
    ["fecomposite", "feComposite"],
    ["feconvolvematrix", "feConvolveMatrix"],
    ["fediffuselighting", "feDiffuseLighting"],
    ["fedisplacementmap", "feDisplacementMap"],
    ["fedistantlight", "feDistantLight"],
    ["fedropshadow", "feDropShadow"],
    ["feflood", "feFlood"],
    ["fefunca", "feFuncA"],
    ["fefuncb", "feFuncB"],
    ["fefuncg", "feFuncG"],
    ["fefuncr", "feFuncR"],
    ["fegaussianblur", "feGaussianBlur"],
    ["feimage", "feImage"],
    ["femerge", "feMerge"],
    ["femergenode", "feMergeNode"],
    ["femorphology", "feMorphology"],
    ["feoffset", "feOffset"],
    ["fepointlight", "fePointLight"],
    ["fespecularlighting", "feSpecularLighting"],
    ["fespotlight", "feSpotLight"],
    ["fetile", "feTile"],
    ["feturbulence", "feTurbulence"],
    ["foreignobject", "foreignObject"],
    ["glyphref", "glyphRef"],
    ["lineargradient", "linearGradient"],
    ["radialgradient", "radialGradient"],
    ["textpath", "textPath"],
]);
exports.attributeNames = new Map([
    ["definitionurl", "definitionURL"],
    ["attributename", "attributeName"],
    ["attributetype", "attributeType"],
    ["basefrequency", "baseFrequency"],
    ["baseprofile", "baseProfile"],
    ["calcmode", "calcMode"],
    ["clippathunits", "clipPathUnits"],
    ["diffuseconstant", "diffuseConstant"],
    ["edgemode", "edgeMode"],
    ["filterunits", "filterUnits"],
    ["glyphref", "glyphRef"],
    ["gradienttransform", "gradientTransform"],
    ["gradientunits", "gradientUnits"],
    ["kernelmatrix", "kernelMatrix"],
    ["kernelunitlength", "kernelUnitLength"],
    ["keypoints", "keyPoints"],
    ["keysplines", "keySplines"],
    ["keytimes", "keyTimes"],
    ["lengthadjust", "lengthAdjust"],
    ["limitingconeangle", "limitingConeAngle"],
    ["markerheight", "markerHeight"],
    ["markerunits", "markerUnits"],
    ["markerwidth", "markerWidth"],
    ["maskcontentunits", "maskContentUnits"],
    ["maskunits", "maskUnits"],
    ["numoctaves", "numOctaves"],
    ["pathlength", "pathLength"],
    ["patterncontentunits", "patternContentUnits"],
    ["patterntransform", "patternTransform"],
    ["patternunits", "patternUnits"],
    ["pointsatx", "pointsAtX"],
    ["pointsaty", "pointsAtY"],
    ["pointsatz", "pointsAtZ"],
    ["preservealpha", "preserveAlpha"],
    ["preserveaspectratio", "preserveAspectRatio"],
    ["primitiveunits", "primitiveUnits"],
    ["refx", "refX"],
    ["refy", "refY"],
    ["repeatcount", "repeatCount"],
    ["repeatdur", "repeatDur"],
    ["requiredextensions", "requiredExtensions"],
    ["requiredfeatures", "requiredFeatures"],
    ["specularconstant", "specularConstant"],
    ["specularexponent", "specularExponent"],
    ["spreadmethod", "spreadMethod"],
    ["startoffset", "startOffset"],
    ["stddeviation", "stdDeviation"],
    ["stitchtiles", "stitchTiles"],
    ["surfacescale", "surfaceScale"],
    ["systemlanguage", "systemLanguage"],
    ["tablevalues", "tableValues"],
    ["targetx", "targetX"],
    ["targety", "targetY"],
    ["textlength", "textLength"],
    ["viewbox", "viewBox"],
    ["viewtarget", "viewTarget"],
    ["xchannelselector", "xChannelSelector"],
    ["ychannelselector", "yChannelSelector"],
    ["zoomandpan", "zoomAndPan"],
]);


/***/ }),

/***/ "./node_modules/dom-serializer/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-serializer/lib/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/*
 * Module dependencies
 */
var ElementType = __importStar(__webpack_require__(/*! domelementtype */ "./node_modules/domelementtype/lib/index.js"));
var entities_1 = __webpack_require__(/*! entities */ "./node_modules/entities/lib/index.js");
/**
 * Mixed-case SVG and MathML tags & attributes
 * recognized by the HTML parser.
 *
 * @see https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inforeign
 */
var foreignNames_1 = __webpack_require__(/*! ./foreignNames */ "./node_modules/dom-serializer/lib/foreignNames.js");
var unencodedElements = new Set([
    "style",
    "script",
    "xmp",
    "iframe",
    "noembed",
    "noframes",
    "plaintext",
    "noscript",
]);
/**
 * Format attributes
 */
function formatAttributes(attributes, opts) {
    if (!attributes)
        return;
    return Object.keys(attributes)
        .map(function (key) {
        var _a, _b;
        var value = (_a = attributes[key]) !== null && _a !== void 0 ? _a : "";
        if (opts.xmlMode === "foreign") {
            /* Fix up mixed-case attribute names */
            key = (_b = foreignNames_1.attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
        }
        if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
            return key;
        }
        return key + "=\"" + (opts.decodeEntities !== false
            ? entities_1.encodeXML(value)
            : value.replace(/"/g, "&quot;")) + "\"";
    })
        .join(" ");
}
/**
 * Self-enclosing tags
 */
var singleTag = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
]);
/**
 * Renders a DOM node or an array of DOM nodes to a string.
 *
 * Can be thought of as the equivalent of the `outerHTML` of the passed node(s).
 *
 * @param node Node to be rendered.
 * @param options Changes serialization behavior
 */
function render(node, options) {
    if (options === void 0) { options = {}; }
    var nodes = "length" in node ? node : [node];
    var output = "";
    for (var i = 0; i < nodes.length; i++) {
        output += renderNode(nodes[i], options);
    }
    return output;
}
exports["default"] = render;
function renderNode(node, options) {
    switch (node.type) {
        case ElementType.Root:
            return render(node.children, options);
        case ElementType.Directive:
        case ElementType.Doctype:
            return renderDirective(node);
        case ElementType.Comment:
            return renderComment(node);
        case ElementType.CDATA:
            return renderCdata(node);
        case ElementType.Script:
        case ElementType.Style:
        case ElementType.Tag:
            return renderTag(node, options);
        case ElementType.Text:
            return renderText(node, options);
    }
}
var foreignModeIntegrationPoints = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignObject",
    "desc",
    "title",
]);
var foreignElements = new Set(["svg", "math"]);
function renderTag(elem, opts) {
    var _a;
    // Handle SVG / MathML in HTML
    if (opts.xmlMode === "foreign") {
        /* Fix up mixed-case element names */
        elem.name = (_a = foreignNames_1.elementNames.get(elem.name)) !== null && _a !== void 0 ? _a : elem.name;
        /* Exit foreign mode at integration points */
        if (elem.parent &&
            foreignModeIntegrationPoints.has(elem.parent.name)) {
            opts = __assign(__assign({}, opts), { xmlMode: false });
        }
    }
    if (!opts.xmlMode && foreignElements.has(elem.name)) {
        opts = __assign(__assign({}, opts), { xmlMode: "foreign" });
    }
    var tag = "<" + elem.name;
    var attribs = formatAttributes(elem.attribs, opts);
    if (attribs) {
        tag += " " + attribs;
    }
    if (elem.children.length === 0 &&
        (opts.xmlMode
            ? // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
                opts.selfClosingTags !== false
            : // User explicitly asked for self-closing tags, even in HTML mode
                opts.selfClosingTags && singleTag.has(elem.name))) {
        if (!opts.xmlMode)
            tag += " ";
        tag += "/>";
    }
    else {
        tag += ">";
        if (elem.children.length > 0) {
            tag += render(elem.children, opts);
        }
        if (opts.xmlMode || !singleTag.has(elem.name)) {
            tag += "</" + elem.name + ">";
        }
    }
    return tag;
}
function renderDirective(elem) {
    return "<" + elem.data + ">";
}
function renderText(elem, opts) {
    var data = elem.data || "";
    // If entities weren't decoded, no need to encode them back
    if (opts.decodeEntities !== false &&
        !(!opts.xmlMode &&
            elem.parent &&
            unencodedElements.has(elem.parent.name))) {
        data = entities_1.encodeXML(data);
    }
    return data;
}
function renderCdata(elem) {
    return "<![CDATA[" + elem.children[0].data + "]]>";
}
function renderComment(elem) {
    return "<!--" + elem.data + "-->";
}


/***/ }),

/***/ "./node_modules/domelementtype/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/domelementtype/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
/** Types of elements found in htmlparser2's DOM */
var ElementType;
(function (ElementType) {
    /** Type for the root element of a document */
    ElementType["Root"] = "root";
    /** Type for Text */
    ElementType["Text"] = "text";
    /** Type for <? ... ?> */
    ElementType["Directive"] = "directive";
    /** Type for <!-- ... --> */
    ElementType["Comment"] = "comment";
    /** Type for <script> tags */
    ElementType["Script"] = "script";
    /** Type for <style> tags */
    ElementType["Style"] = "style";
    /** Type for Any tag */
    ElementType["Tag"] = "tag";
    /** Type for <![CDATA[ ... ]]> */
    ElementType["CDATA"] = "cdata";
    /** Type for <!doctype ...> */
    ElementType["Doctype"] = "doctype";
})(ElementType = exports.ElementType || (exports.ElementType = {}));
/**
 * Tests whether an element is a tag or not.
 *
 * @param elem Element to test
 */
function isTag(elem) {
    return (elem.type === ElementType.Tag ||
        elem.type === ElementType.Script ||
        elem.type === ElementType.Style);
}
exports.isTag = isTag;
// Exports for backwards compatibility
/** Type for the root element of a document */
exports.Root = ElementType.Root;
/** Type for Text */
exports.Text = ElementType.Text;
/** Type for <? ... ?> */
exports.Directive = ElementType.Directive;
/** Type for <!-- ... --> */
exports.Comment = ElementType.Comment;
/** Type for <script> tags */
exports.Script = ElementType.Script;
/** Type for <style> tags */
exports.Style = ElementType.Style;
/** Type for Any tag */
exports.Tag = ElementType.Tag;
/** Type for <![CDATA[ ... ]]> */
exports.CDATA = ElementType.CDATA;
/** Type for <!doctype ...> */
exports.Doctype = ElementType.Doctype;


/***/ }),

/***/ "./node_modules/domhandler/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/domhandler/lib/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DomHandler = void 0;
var domelementtype_1 = __webpack_require__(/*! domelementtype */ "./node_modules/domelementtype/lib/index.js");
var node_1 = __webpack_require__(/*! ./node */ "./node_modules/domhandler/lib/node.js");
__exportStar(__webpack_require__(/*! ./node */ "./node_modules/domhandler/lib/node.js"), exports);
var reWhitespace = /\s+/g;
// Default options
var defaultOpts = {
    normalizeWhitespace: false,
    withStartIndices: false,
    withEndIndices: false,
    xmlMode: false,
};
var DomHandler = /** @class */ (function () {
    /**
     * @param callback Called once parsing has completed.
     * @param options Settings for the handler.
     * @param elementCB Callback whenever a tag is closed.
     */
    function DomHandler(callback, options, elementCB) {
        /** The elements of the DOM */
        this.dom = [];
        /** The root element for the DOM */
        this.root = new node_1.Document(this.dom);
        /** Indicated whether parsing has been completed. */
        this.done = false;
        /** Stack of open tags. */
        this.tagStack = [this.root];
        /** A data node that is still being written to. */
        this.lastNode = null;
        /** Reference to the parser instance. Used for location information. */
        this.parser = null;
        // Make it possible to skip arguments, for backwards-compatibility
        if (typeof options === "function") {
            elementCB = options;
            options = defaultOpts;
        }
        if (typeof callback === "object") {
            options = callback;
            callback = undefined;
        }
        this.callback = callback !== null && callback !== void 0 ? callback : null;
        this.options = options !== null && options !== void 0 ? options : defaultOpts;
        this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
    }
    DomHandler.prototype.onparserinit = function (parser) {
        this.parser = parser;
    };
    // Resets the handler back to starting state
    DomHandler.prototype.onreset = function () {
        this.dom = [];
        this.root = new node_1.Document(this.dom);
        this.done = false;
        this.tagStack = [this.root];
        this.lastNode = null;
        this.parser = null;
    };
    // Signals the handler that parsing is done
    DomHandler.prototype.onend = function () {
        if (this.done)
            return;
        this.done = true;
        this.parser = null;
        this.handleCallback(null);
    };
    DomHandler.prototype.onerror = function (error) {
        this.handleCallback(error);
    };
    DomHandler.prototype.onclosetag = function () {
        this.lastNode = null;
        var elem = this.tagStack.pop();
        if (this.options.withEndIndices) {
            elem.endIndex = this.parser.endIndex;
        }
        if (this.elementCB)
            this.elementCB(elem);
    };
    DomHandler.prototype.onopentag = function (name, attribs) {
        var type = this.options.xmlMode ? domelementtype_1.ElementType.Tag : undefined;
        var element = new node_1.Element(name, attribs, undefined, type);
        this.addNode(element);
        this.tagStack.push(element);
    };
    DomHandler.prototype.ontext = function (data) {
        var normalizeWhitespace = this.options.normalizeWhitespace;
        var lastNode = this.lastNode;
        if (lastNode && lastNode.type === domelementtype_1.ElementType.Text) {
            if (normalizeWhitespace) {
                lastNode.data = (lastNode.data + data).replace(reWhitespace, " ");
            }
            else {
                lastNode.data += data;
            }
            if (this.options.withEndIndices) {
                lastNode.endIndex = this.parser.endIndex;
            }
        }
        else {
            if (normalizeWhitespace) {
                data = data.replace(reWhitespace, " ");
            }
            var node = new node_1.Text(data);
            this.addNode(node);
            this.lastNode = node;
        }
    };
    DomHandler.prototype.oncomment = function (data) {
        if (this.lastNode && this.lastNode.type === domelementtype_1.ElementType.Comment) {
            this.lastNode.data += data;
            return;
        }
        var node = new node_1.Comment(data);
        this.addNode(node);
        this.lastNode = node;
    };
    DomHandler.prototype.oncommentend = function () {
        this.lastNode = null;
    };
    DomHandler.prototype.oncdatastart = function () {
        var text = new node_1.Text("");
        var node = new node_1.NodeWithChildren(domelementtype_1.ElementType.CDATA, [text]);
        this.addNode(node);
        text.parent = node;
        this.lastNode = text;
    };
    DomHandler.prototype.oncdataend = function () {
        this.lastNode = null;
    };
    DomHandler.prototype.onprocessinginstruction = function (name, data) {
        var node = new node_1.ProcessingInstruction(name, data);
        this.addNode(node);
    };
    DomHandler.prototype.handleCallback = function (error) {
        if (typeof this.callback === "function") {
            this.callback(error, this.dom);
        }
        else if (error) {
            throw error;
        }
    };
    DomHandler.prototype.addNode = function (node) {
        var parent = this.tagStack[this.tagStack.length - 1];
        var previousSibling = parent.children[parent.children.length - 1];
        if (this.options.withStartIndices) {
            node.startIndex = this.parser.startIndex;
        }
        if (this.options.withEndIndices) {
            node.endIndex = this.parser.endIndex;
        }
        parent.children.push(node);
        if (previousSibling) {
            node.prev = previousSibling;
            previousSibling.next = node;
        }
        node.parent = parent;
        this.lastNode = null;
    };
    return DomHandler;
}());
exports.DomHandler = DomHandler;
exports["default"] = DomHandler;


/***/ }),

/***/ "./node_modules/domhandler/lib/node.js":
/*!*********************************************!*\
  !*** ./node_modules/domhandler/lib/node.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cloneNode = exports.hasChildren = exports.isDocument = exports.isDirective = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = exports.Element = exports.Document = exports.NodeWithChildren = exports.ProcessingInstruction = exports.Comment = exports.Text = exports.DataNode = exports.Node = void 0;
var domelementtype_1 = __webpack_require__(/*! domelementtype */ "./node_modules/domelementtype/lib/index.js");
var nodeTypes = new Map([
    [domelementtype_1.ElementType.Tag, 1],
    [domelementtype_1.ElementType.Script, 1],
    [domelementtype_1.ElementType.Style, 1],
    [domelementtype_1.ElementType.Directive, 1],
    [domelementtype_1.ElementType.Text, 3],
    [domelementtype_1.ElementType.CDATA, 4],
    [domelementtype_1.ElementType.Comment, 8],
    [domelementtype_1.ElementType.Root, 9],
]);
/**
 * This object will be used as the prototype for Nodes when creating a
 * DOM-Level-1-compliant structure.
 */
var Node = /** @class */ (function () {
    /**
     *
     * @param type The type of the node.
     */
    function Node(type) {
        this.type = type;
        /** Parent of the node */
        this.parent = null;
        /** Previous sibling */
        this.prev = null;
        /** Next sibling */
        this.next = null;
        /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */
        this.startIndex = null;
        /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */
        this.endIndex = null;
    }
    Object.defineProperty(Node.prototype, "nodeType", {
        // Read-only aliases
        /**
         * [DOM spec](https://dom.spec.whatwg.org/#dom-node-nodetype)-compatible
         * node {@link type}.
         */
        get: function () {
            var _a;
            return (_a = nodeTypes.get(this.type)) !== null && _a !== void 0 ? _a : 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "parentNode", {
        // Read-write aliases for properties
        /**
         * Same as {@link parent}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.parent;
        },
        set: function (parent) {
            this.parent = parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "previousSibling", {
        /**
         * Same as {@link prev}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.prev;
        },
        set: function (prev) {
            this.prev = prev;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "nextSibling", {
        /**
         * Same as {@link next}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.next;
        },
        set: function (next) {
            this.next = next;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Clone this node, and optionally its children.
     *
     * @param recursive Clone child nodes as well.
     * @returns A clone of the node.
     */
    Node.prototype.cloneNode = function (recursive) {
        if (recursive === void 0) { recursive = false; }
        return cloneNode(this, recursive);
    };
    return Node;
}());
exports.Node = Node;
/**
 * A node that contains some data.
 */
var DataNode = /** @class */ (function (_super) {
    __extends(DataNode, _super);
    /**
     * @param type The type of the node
     * @param data The content of the data node
     */
    function DataNode(type, data) {
        var _this = _super.call(this, type) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(DataNode.prototype, "nodeValue", {
        /**
         * Same as {@link data}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.data;
        },
        set: function (data) {
            this.data = data;
        },
        enumerable: false,
        configurable: true
    });
    return DataNode;
}(Node));
exports.DataNode = DataNode;
/**
 * Text within the document.
 */
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(data) {
        return _super.call(this, domelementtype_1.ElementType.Text, data) || this;
    }
    return Text;
}(DataNode));
exports.Text = Text;
/**
 * Comments within the document.
 */
var Comment = /** @class */ (function (_super) {
    __extends(Comment, _super);
    function Comment(data) {
        return _super.call(this, domelementtype_1.ElementType.Comment, data) || this;
    }
    return Comment;
}(DataNode));
exports.Comment = Comment;
/**
 * Processing instructions, including doc types.
 */
var ProcessingInstruction = /** @class */ (function (_super) {
    __extends(ProcessingInstruction, _super);
    function ProcessingInstruction(name, data) {
        var _this = _super.call(this, domelementtype_1.ElementType.Directive, data) || this;
        _this.name = name;
        return _this;
    }
    return ProcessingInstruction;
}(DataNode));
exports.ProcessingInstruction = ProcessingInstruction;
/**
 * A `Node` that can have children.
 */
var NodeWithChildren = /** @class */ (function (_super) {
    __extends(NodeWithChildren, _super);
    /**
     * @param type Type of the node.
     * @param children Children of the node. Only certain node types can have children.
     */
    function NodeWithChildren(type, children) {
        var _this = _super.call(this, type) || this;
        _this.children = children;
        return _this;
    }
    Object.defineProperty(NodeWithChildren.prototype, "firstChild", {
        // Aliases
        /** First child of the node. */
        get: function () {
            var _a;
            return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren.prototype, "lastChild", {
        /** Last child of the node. */
        get: function () {
            return this.children.length > 0
                ? this.children[this.children.length - 1]
                : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren.prototype, "childNodes", {
        /**
         * Same as {@link children}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.children;
        },
        set: function (children) {
            this.children = children;
        },
        enumerable: false,
        configurable: true
    });
    return NodeWithChildren;
}(Node));
exports.NodeWithChildren = NodeWithChildren;
/**
 * The root node of the document.
 */
var Document = /** @class */ (function (_super) {
    __extends(Document, _super);
    function Document(children) {
        return _super.call(this, domelementtype_1.ElementType.Root, children) || this;
    }
    return Document;
}(NodeWithChildren));
exports.Document = Document;
/**
 * An element within the DOM.
 */
var Element = /** @class */ (function (_super) {
    __extends(Element, _super);
    /**
     * @param name Name of the tag, eg. `div`, `span`.
     * @param attribs Object mapping attribute names to attribute values.
     * @param children Children of the node.
     */
    function Element(name, attribs, children, type) {
        if (children === void 0) { children = []; }
        if (type === void 0) { type = name === "script"
            ? domelementtype_1.ElementType.Script
            : name === "style"
                ? domelementtype_1.ElementType.Style
                : domelementtype_1.ElementType.Tag; }
        var _this = _super.call(this, type, children) || this;
        _this.name = name;
        _this.attribs = attribs;
        return _this;
    }
    Object.defineProperty(Element.prototype, "tagName", {
        // DOM Level 1 aliases
        /**
         * Same as {@link name}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (name) {
                var _a, _b;
                return ({
                    name: name,
                    value: _this.attribs[name],
                    namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
                    prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name],
                });
            });
        },
        enumerable: false,
        configurable: true
    });
    return Element;
}(NodeWithChildren));
exports.Element = Element;
/**
 * @param node Node to check.
 * @returns `true` if the node is a `Element`, `false` otherwise.
 */
function isTag(node) {
    return (0, domelementtype_1.isTag)(node);
}
exports.isTag = isTag;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `CDATA`, `false` otherwise.
 */
function isCDATA(node) {
    return node.type === domelementtype_1.ElementType.CDATA;
}
exports.isCDATA = isCDATA;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Text`, `false` otherwise.
 */
function isText(node) {
    return node.type === domelementtype_1.ElementType.Text;
}
exports.isText = isText;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Comment`, `false` otherwise.
 */
function isComment(node) {
    return node.type === domelementtype_1.ElementType.Comment;
}
exports.isComment = isComment;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
function isDirective(node) {
    return node.type === domelementtype_1.ElementType.Directive;
}
exports.isDirective = isDirective;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
function isDocument(node) {
    return node.type === domelementtype_1.ElementType.Root;
}
exports.isDocument = isDocument;
/**
 * @param node Node to check.
 * @returns `true` if the node is a `NodeWithChildren` (has children), `false` otherwise.
 */
function hasChildren(node) {
    return Object.prototype.hasOwnProperty.call(node, "children");
}
exports.hasChildren = hasChildren;
/**
 * Clone a node, and optionally its children.
 *
 * @param recursive Clone child nodes as well.
 * @returns A clone of the node.
 */
function cloneNode(node, recursive) {
    if (recursive === void 0) { recursive = false; }
    var result;
    if (isText(node)) {
        result = new Text(node.data);
    }
    else if (isComment(node)) {
        result = new Comment(node.data);
    }
    else if (isTag(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_1 = new Element(node.name, __assign({}, node.attribs), children);
        children.forEach(function (child) { return (child.parent = clone_1); });
        if (node.namespace != null) {
            clone_1.namespace = node.namespace;
        }
        if (node["x-attribsNamespace"]) {
            clone_1["x-attribsNamespace"] = __assign({}, node["x-attribsNamespace"]);
        }
        if (node["x-attribsPrefix"]) {
            clone_1["x-attribsPrefix"] = __assign({}, node["x-attribsPrefix"]);
        }
        result = clone_1;
    }
    else if (isCDATA(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_2 = new NodeWithChildren(domelementtype_1.ElementType.CDATA, children);
        children.forEach(function (child) { return (child.parent = clone_2); });
        result = clone_2;
    }
    else if (isDocument(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_3 = new Document(children);
        children.forEach(function (child) { return (child.parent = clone_3); });
        if (node["x-mode"]) {
            clone_3["x-mode"] = node["x-mode"];
        }
        result = clone_3;
    }
    else if (isDirective(node)) {
        var instruction = new ProcessingInstruction(node.name, node.data);
        if (node["x-name"] != null) {
            instruction["x-name"] = node["x-name"];
            instruction["x-publicId"] = node["x-publicId"];
            instruction["x-systemId"] = node["x-systemId"];
        }
        result = instruction;
    }
    else {
        throw new Error("Not implemented yet: ".concat(node.type));
    }
    result.startIndex = node.startIndex;
    result.endIndex = node.endIndex;
    if (node.sourceCodeLocation != null) {
        result.sourceCodeLocation = node.sourceCodeLocation;
    }
    return result;
}
exports.cloneNode = cloneNode;
function cloneChildren(childs) {
    var children = childs.map(function (child) { return cloneNode(child, true); });
    for (var i = 1; i < children.length; i++) {
        children[i].prev = children[i - 1];
        children[i - 1].next = children[i];
    }
    return children;
}


/***/ }),

/***/ "./node_modules/domutils/lib/feeds.js":
/*!********************************************!*\
  !*** ./node_modules/domutils/lib/feeds.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getFeed = void 0;
var stringify_1 = __webpack_require__(/*! ./stringify */ "./node_modules/domutils/lib/stringify.js");
var legacy_1 = __webpack_require__(/*! ./legacy */ "./node_modules/domutils/lib/legacy.js");
/**
 * Get the feed object from the root of a DOM tree.
 *
 * @param doc - The DOM to to extract the feed from.
 * @returns The feed.
 */
function getFeed(doc) {
    var feedRoot = getOneElement(isValidFeed, doc);
    return !feedRoot
        ? null
        : feedRoot.name === "feed"
            ? getAtomFeed(feedRoot)
            : getRssFeed(feedRoot);
}
exports.getFeed = getFeed;
/**
 * Parse an Atom feed.
 *
 * @param feedRoot The root of the feed.
 * @returns The parsed feed.
 */
function getAtomFeed(feedRoot) {
    var _a;
    var childs = feedRoot.children;
    var feed = {
        type: "atom",
        items: (0, legacy_1.getElementsByTagName)("entry", childs).map(function (item) {
            var _a;
            var children = item.children;
            var entry = { media: getMediaElements(children) };
            addConditionally(entry, "id", "id", children);
            addConditionally(entry, "title", "title", children);
            var href = (_a = getOneElement("link", children)) === null || _a === void 0 ? void 0 : _a.attribs.href;
            if (href) {
                entry.link = href;
            }
            var description = fetch("summary", children) || fetch("content", children);
            if (description) {
                entry.description = description;
            }
            var pubDate = fetch("updated", children);
            if (pubDate) {
                entry.pubDate = new Date(pubDate);
            }
            return entry;
        }),
    };
    addConditionally(feed, "id", "id", childs);
    addConditionally(feed, "title", "title", childs);
    var href = (_a = getOneElement("link", childs)) === null || _a === void 0 ? void 0 : _a.attribs.href;
    if (href) {
        feed.link = href;
    }
    addConditionally(feed, "description", "subtitle", childs);
    var updated = fetch("updated", childs);
    if (updated) {
        feed.updated = new Date(updated);
    }
    addConditionally(feed, "author", "email", childs, true);
    return feed;
}
/**
 * Parse a RSS feed.
 *
 * @param feedRoot The root of the feed.
 * @returns The parsed feed.
 */
function getRssFeed(feedRoot) {
    var _a, _b;
    var childs = (_b = (_a = getOneElement("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
    var feed = {
        type: feedRoot.name.substr(0, 3),
        id: "",
        items: (0, legacy_1.getElementsByTagName)("item", feedRoot.children).map(function (item) {
            var children = item.children;
            var entry = { media: getMediaElements(children) };
            addConditionally(entry, "id", "guid", children);
            addConditionally(entry, "title", "title", children);
            addConditionally(entry, "link", "link", children);
            addConditionally(entry, "description", "description", children);
            var pubDate = fetch("pubDate", children);
            if (pubDate)
                entry.pubDate = new Date(pubDate);
            return entry;
        }),
    };
    addConditionally(feed, "title", "title", childs);
    addConditionally(feed, "link", "link", childs);
    addConditionally(feed, "description", "description", childs);
    var updated = fetch("lastBuildDate", childs);
    if (updated) {
        feed.updated = new Date(updated);
    }
    addConditionally(feed, "author", "managingEditor", childs, true);
    return feed;
}
var MEDIA_KEYS_STRING = ["url", "type", "lang"];
var MEDIA_KEYS_INT = [
    "fileSize",
    "bitrate",
    "framerate",
    "samplingrate",
    "channels",
    "duration",
    "height",
    "width",
];
/**
 * Get all media elements of a feed item.
 *
 * @param where Nodes to search in.
 * @returns Media elements.
 */
function getMediaElements(where) {
    return (0, legacy_1.getElementsByTagName)("media:content", where).map(function (elem) {
        var attribs = elem.attribs;
        var media = {
            medium: attribs.medium,
            isDefault: !!attribs.isDefault,
        };
        for (var _i = 0, MEDIA_KEYS_STRING_1 = MEDIA_KEYS_STRING; _i < MEDIA_KEYS_STRING_1.length; _i++) {
            var attrib = MEDIA_KEYS_STRING_1[_i];
            if (attribs[attrib]) {
                media[attrib] = attribs[attrib];
            }
        }
        for (var _a = 0, MEDIA_KEYS_INT_1 = MEDIA_KEYS_INT; _a < MEDIA_KEYS_INT_1.length; _a++) {
            var attrib = MEDIA_KEYS_INT_1[_a];
            if (attribs[attrib]) {
                media[attrib] = parseInt(attribs[attrib], 10);
            }
        }
        if (attribs.expression) {
            media.expression =
                attribs.expression;
        }
        return media;
    });
}
/**
 * Get one element by tag name.
 *
 * @param tagName Tag name to look for
 * @param node Node to search in
 * @returns The element or null
 */
function getOneElement(tagName, node) {
    return (0, legacy_1.getElementsByTagName)(tagName, node, true, 1)[0];
}
/**
 * Get the text content of an element with a certain tag name.
 *
 * @param tagName Tag name to look for.
 * @param where  Node to search in.
 * @param recurse Whether to recurse into child nodes.
 * @returns The text content of the element.
 */
function fetch(tagName, where, recurse) {
    if (recurse === void 0) { recurse = false; }
    return (0, stringify_1.textContent)((0, legacy_1.getElementsByTagName)(tagName, where, recurse, 1)).trim();
}
/**
 * Adds a property to an object if it has a value.
 *
 * @param obj Object to be extended
 * @param prop Property name
 * @param tagName Tag name that contains the conditionally added property
 * @param where Element to search for the property
 * @param recurse Whether to recurse into child nodes.
 */
function addConditionally(obj, prop, tagName, where, recurse) {
    if (recurse === void 0) { recurse = false; }
    var val = fetch(tagName, where, recurse);
    if (val)
        obj[prop] = val;
}
/**
 * Checks if an element is a feed root node.
 *
 * @param value The name of the element to check.
 * @returns Whether an element is a feed root node.
 */
function isValidFeed(value) {
    return value === "rss" || value === "feed" || value === "rdf:RDF";
}


/***/ }),

/***/ "./node_modules/domutils/lib/helpers.js":
/*!**********************************************!*\
  !*** ./node_modules/domutils/lib/helpers.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.uniqueSort = exports.compareDocumentPosition = exports.removeSubsets = void 0;
var domhandler_1 = __webpack_require__(/*! domhandler */ "./node_modules/domhandler/lib/index.js");
/**
 * Given an array of nodes, remove any member that is contained by another.
 *
 * @param nodes Nodes to filter.
 * @returns Remaining nodes that aren't subtrees of each other.
 */
function removeSubsets(nodes) {
    var idx = nodes.length;
    /*
     * Check if each node (or one of its ancestors) is already contained in the
     * array.
     */
    while (--idx >= 0) {
        var node = nodes[idx];
        /*
         * Remove the node if it is not unique.
         * We are going through the array from the end, so we only
         * have to check nodes that preceed the node under consideration in the array.
         */
        if (idx > 0 && nodes.lastIndexOf(node, idx - 1) >= 0) {
            nodes.splice(idx, 1);
            continue;
        }
        for (var ancestor = node.parent; ancestor; ancestor = ancestor.parent) {
            if (nodes.includes(ancestor)) {
                nodes.splice(idx, 1);
                break;
            }
        }
    }
    return nodes;
}
exports.removeSubsets = removeSubsets;
/**
 * Compare the position of one node against another node in any other document.
 * The return value is a bitmask with the following values:
 *
 * Document order:
 * > There is an ordering, document order, defined on all the nodes in the
 * > document corresponding to the order in which the first character of the
 * > XML representation of each node occurs in the XML representation of the
 * > document after expansion of general entities. Thus, the document element
 * > node will be the first node. Element nodes occur before their children.
 * > Thus, document order orders element nodes in order of the occurrence of
 * > their start-tag in the XML (after expansion of entities). The attribute
 * > nodes of an element occur after the element and before its children. The
 * > relative order of attribute nodes is implementation-dependent./
 *
 * Source:
 * http://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-document-order
 *
 * @param nodeA The first node to use in the comparison
 * @param nodeB The second node to use in the comparison
 * @returns A bitmask describing the input nodes' relative position.
 *
 * See http://dom.spec.whatwg.org/#dom-node-comparedocumentposition for
 * a description of these values.
 */
function compareDocumentPosition(nodeA, nodeB) {
    var aParents = [];
    var bParents = [];
    if (nodeA === nodeB) {
        return 0;
    }
    var current = (0, domhandler_1.hasChildren)(nodeA) ? nodeA : nodeA.parent;
    while (current) {
        aParents.unshift(current);
        current = current.parent;
    }
    current = (0, domhandler_1.hasChildren)(nodeB) ? nodeB : nodeB.parent;
    while (current) {
        bParents.unshift(current);
        current = current.parent;
    }
    var maxIdx = Math.min(aParents.length, bParents.length);
    var idx = 0;
    while (idx < maxIdx && aParents[idx] === bParents[idx]) {
        idx++;
    }
    if (idx === 0) {
        return 1 /* DISCONNECTED */;
    }
    var sharedParent = aParents[idx - 1];
    var siblings = sharedParent.children;
    var aSibling = aParents[idx];
    var bSibling = bParents[idx];
    if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
        if (sharedParent === nodeB) {
            return 4 /* FOLLOWING */ | 16 /* CONTAINED_BY */;
        }
        return 4 /* FOLLOWING */;
    }
    if (sharedParent === nodeA) {
        return 2 /* PRECEDING */ | 8 /* CONTAINS */;
    }
    return 2 /* PRECEDING */;
}
exports.compareDocumentPosition = compareDocumentPosition;
/**
 * Sort an array of nodes based on their relative position in the document and
 * remove any duplicate nodes. If the array contains nodes that do not belong
 * to the same document, sort order is unspecified.
 *
 * @param nodes Array of DOM nodes.
 * @returns Collection of unique nodes, sorted in document order.
 */
function uniqueSort(nodes) {
    nodes = nodes.filter(function (node, i, arr) { return !arr.includes(node, i + 1); });
    nodes.sort(function (a, b) {
        var relative = compareDocumentPosition(a, b);
        if (relative & 2 /* PRECEDING */) {
            return -1;
        }
        else if (relative & 4 /* FOLLOWING */) {
            return 1;
        }
        return 0;
    });
    return nodes;
}
exports.uniqueSort = uniqueSort;


/***/ }),

/***/ "./node_modules/domutils/lib/index.js":
/*!********************************************!*\
  !*** ./node_modules/domutils/lib/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hasChildren = exports.isDocument = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = void 0;
__exportStar(__webpack_require__(/*! ./stringify */ "./node_modules/domutils/lib/stringify.js"), exports);
__exportStar(__webpack_require__(/*! ./traversal */ "./node_modules/domutils/lib/traversal.js"), exports);
__exportStar(__webpack_require__(/*! ./manipulation */ "./node_modules/domutils/lib/manipulation.js"), exports);
__exportStar(__webpack_require__(/*! ./querying */ "./node_modules/domutils/lib/querying.js"), exports);
__exportStar(__webpack_require__(/*! ./legacy */ "./node_modules/domutils/lib/legacy.js"), exports);
__exportStar(__webpack_require__(/*! ./helpers */ "./node_modules/domutils/lib/helpers.js"), exports);
__exportStar(__webpack_require__(/*! ./feeds */ "./node_modules/domutils/lib/feeds.js"), exports);
/** @deprecated Use these methods from `domhandler` directly. */
var domhandler_1 = __webpack_require__(/*! domhandler */ "./node_modules/domhandler/lib/index.js");
Object.defineProperty(exports, "isTag", ({ enumerable: true, get: function () { return domhandler_1.isTag; } }));
Object.defineProperty(exports, "isCDATA", ({ enumerable: true, get: function () { return domhandler_1.isCDATA; } }));
Object.defineProperty(exports, "isText", ({ enumerable: true, get: function () { return domhandler_1.isText; } }));
Object.defineProperty(exports, "isComment", ({ enumerable: true, get: function () { return domhandler_1.isComment; } }));
Object.defineProperty(exports, "isDocument", ({ enumerable: true, get: function () { return domhandler_1.isDocument; } }));
Object.defineProperty(exports, "hasChildren", ({ enumerable: true, get: function () { return domhandler_1.hasChildren; } }));


/***/ }),

/***/ "./node_modules/domutils/lib/legacy.js":
/*!*********************************************!*\
  !*** ./node_modules/domutils/lib/legacy.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getElementsByTagType = exports.getElementsByTagName = exports.getElementById = exports.getElements = exports.testElement = void 0;
var domhandler_1 = __webpack_require__(/*! domhandler */ "./node_modules/domhandler/lib/index.js");
var querying_1 = __webpack_require__(/*! ./querying */ "./node_modules/domutils/lib/querying.js");
var Checks = {
    tag_name: function (name) {
        if (typeof name === "function") {
            return function (elem) { return (0, domhandler_1.isTag)(elem) && name(elem.name); };
        }
        else if (name === "*") {
            return domhandler_1.isTag;
        }
        return function (elem) { return (0, domhandler_1.isTag)(elem) && elem.name === name; };
    },
    tag_type: function (type) {
        if (typeof type === "function") {
            return function (elem) { return type(elem.type); };
        }
        return function (elem) { return elem.type === type; };
    },
    tag_contains: function (data) {
        if (typeof data === "function") {
            return function (elem) { return (0, domhandler_1.isText)(elem) && data(elem.data); };
        }
        return function (elem) { return (0, domhandler_1.isText)(elem) && elem.data === data; };
    },
};
/**
 * @param attrib Attribute to check.
 * @param value Attribute value to look for.
 * @returns A function to check whether the a node has an attribute with a particular value.
 */
function getAttribCheck(attrib, value) {
    if (typeof value === "function") {
        return function (elem) { return (0, domhandler_1.isTag)(elem) && value(elem.attribs[attrib]); };
    }
    return function (elem) { return (0, domhandler_1.isTag)(elem) && elem.attribs[attrib] === value; };
}
/**
 * @param a First function to combine.
 * @param b Second function to combine.
 * @returns A function taking a node and returning `true` if either
 * of the input functions returns `true` for the node.
 */
function combineFuncs(a, b) {
    return function (elem) { return a(elem) || b(elem); };
}
/**
 * @param options An object describing nodes to look for.
 * @returns A function executing all checks in `options` and returning `true`
 * if any of them match a node.
 */
function compileTest(options) {
    var funcs = Object.keys(options).map(function (key) {
        var value = options[key];
        return Object.prototype.hasOwnProperty.call(Checks, key)
            ? Checks[key](value)
            : getAttribCheck(key, value);
    });
    return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
}
/**
 * @param options An object describing nodes to look for.
 * @param node The element to test.
 * @returns Whether the element matches the description in `options`.
 */
function testElement(options, node) {
    var test = compileTest(options);
    return test ? test(node) : true;
}
exports.testElement = testElement;
/**
 * @param options An object describing nodes to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes that match `options`.
 */
function getElements(options, nodes, recurse, limit) {
    if (limit === void 0) { limit = Infinity; }
    var test = compileTest(options);
    return test ? (0, querying_1.filter)(test, nodes, recurse, limit) : [];
}
exports.getElements = getElements;
/**
 * @param id The unique ID attribute value to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @returns The node with the supplied ID.
 */
function getElementById(id, nodes, recurse) {
    if (recurse === void 0) { recurse = true; }
    if (!Array.isArray(nodes))
        nodes = [nodes];
    return (0, querying_1.findOne)(getAttribCheck("id", id), nodes, recurse);
}
exports.getElementById = getElementById;
/**
 * @param tagName Tag name to search for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `tagName`.
 */
function getElementsByTagName(tagName, nodes, recurse, limit) {
    if (recurse === void 0) { recurse = true; }
    if (limit === void 0) { limit = Infinity; }
    return (0, querying_1.filter)(Checks.tag_name(tagName), nodes, recurse, limit);
}
exports.getElementsByTagName = getElementsByTagName;
/**
 * @param type Element type to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `type`.
 */
function getElementsByTagType(type, nodes, recurse, limit) {
    if (recurse === void 0) { recurse = true; }
    if (limit === void 0) { limit = Infinity; }
    return (0, querying_1.filter)(Checks.tag_type(type), nodes, recurse, limit);
}
exports.getElementsByTagType = getElementsByTagType;


/***/ }),

/***/ "./node_modules/domutils/lib/manipulation.js":
/*!***************************************************!*\
  !*** ./node_modules/domutils/lib/manipulation.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.prepend = exports.prependChild = exports.append = exports.appendChild = exports.replaceElement = exports.removeElement = void 0;
/**
 * Remove an element from the dom
 *
 * @param elem The element to be removed
 */
function removeElement(elem) {
    if (elem.prev)
        elem.prev.next = elem.next;
    if (elem.next)
        elem.next.prev = elem.prev;
    if (elem.parent) {
        var childs = elem.parent.children;
        childs.splice(childs.lastIndexOf(elem), 1);
    }
}
exports.removeElement = removeElement;
/**
 * Replace an element in the dom
 *
 * @param elem The element to be replaced
 * @param replacement The element to be added
 */
function replaceElement(elem, replacement) {
    var prev = (replacement.prev = elem.prev);
    if (prev) {
        prev.next = replacement;
    }
    var next = (replacement.next = elem.next);
    if (next) {
        next.prev = replacement;
    }
    var parent = (replacement.parent = elem.parent);
    if (parent) {
        var childs = parent.children;
        childs[childs.lastIndexOf(elem)] = replacement;
    }
}
exports.replaceElement = replaceElement;
/**
 * Append a child to an element.
 *
 * @param elem The element to append to.
 * @param child The element to be added as a child.
 */
function appendChild(elem, child) {
    removeElement(child);
    child.next = null;
    child.parent = elem;
    if (elem.children.push(child) > 1) {
        var sibling = elem.children[elem.children.length - 2];
        sibling.next = child;
        child.prev = sibling;
    }
    else {
        child.prev = null;
    }
}
exports.appendChild = appendChild;
/**
 * Append an element after another.
 *
 * @param elem The element to append after.
 * @param next The element be added.
 */
function append(elem, next) {
    removeElement(next);
    var parent = elem.parent;
    var currNext = elem.next;
    next.next = currNext;
    next.prev = elem;
    elem.next = next;
    next.parent = parent;
    if (currNext) {
        currNext.prev = next;
        if (parent) {
            var childs = parent.children;
            childs.splice(childs.lastIndexOf(currNext), 0, next);
        }
    }
    else if (parent) {
        parent.children.push(next);
    }
}
exports.append = append;
/**
 * Prepend a child to an element.
 *
 * @param elem The element to prepend before.
 * @param child The element to be added as a child.
 */
function prependChild(elem, child) {
    removeElement(child);
    child.parent = elem;
    child.prev = null;
    if (elem.children.unshift(child) !== 1) {
        var sibling = elem.children[1];
        sibling.prev = child;
        child.next = sibling;
    }
    else {
        child.next = null;
    }
}
exports.prependChild = prependChild;
/**
 * Prepend an element before another.
 *
 * @param elem The element to prepend before.
 * @param prev The element be added.
 */
function prepend(elem, prev) {
    removeElement(prev);
    var parent = elem.parent;
    if (parent) {
        var childs = parent.children;
        childs.splice(childs.indexOf(elem), 0, prev);
    }
    if (elem.prev) {
        elem.prev.next = prev;
    }
    prev.parent = parent;
    prev.prev = elem.prev;
    prev.next = elem;
    elem.prev = prev;
}
exports.prepend = prepend;


/***/ }),

/***/ "./node_modules/domutils/lib/querying.js":
/*!***********************************************!*\
  !*** ./node_modules/domutils/lib/querying.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.findAll = exports.existsOne = exports.findOne = exports.findOneChild = exports.find = exports.filter = void 0;
var domhandler_1 = __webpack_require__(/*! domhandler */ "./node_modules/domhandler/lib/index.js");
/**
 * Search a node and its children for nodes passing a test function.
 *
 * @param test Function to test nodes on.
 * @param node Node to search. Will be included in the result set if it matches.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes passing `test`.
 */
function filter(test, node, recurse, limit) {
    if (recurse === void 0) { recurse = true; }
    if (limit === void 0) { limit = Infinity; }
    if (!Array.isArray(node))
        node = [node];
    return find(test, node, recurse, limit);
}
exports.filter = filter;
/**
 * Search an array of node and its children for nodes passing a test function.
 *
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes passing `test`.
 */
function find(test, nodes, recurse, limit) {
    var result = [];
    for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
        var elem = nodes_1[_i];
        if (test(elem)) {
            result.push(elem);
            if (--limit <= 0)
                break;
        }
        if (recurse && (0, domhandler_1.hasChildren)(elem) && elem.children.length > 0) {
            var children = find(test, elem.children, recurse, limit);
            result.push.apply(result, children);
            limit -= children.length;
            if (limit <= 0)
                break;
        }
    }
    return result;
}
exports.find = find;
/**
 * Finds the first element inside of an array that matches a test function.
 *
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns The first node in the array that passes `test`.
 */
function findOneChild(test, nodes) {
    return nodes.find(test);
}
exports.findOneChild = findOneChild;
/**
 * Finds one element in a tree that passes a test.
 *
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @param recurse Also consider child nodes.
 * @returns The first child node that passes `test`.
 */
function findOne(test, nodes, recurse) {
    if (recurse === void 0) { recurse = true; }
    var elem = null;
    for (var i = 0; i < nodes.length && !elem; i++) {
        var checked = nodes[i];
        if (!(0, domhandler_1.isTag)(checked)) {
            continue;
        }
        else if (test(checked)) {
            elem = checked;
        }
        else if (recurse && checked.children.length > 0) {
            elem = findOne(test, checked.children);
        }
    }
    return elem;
}
exports.findOne = findOne;
/**
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns Whether a tree of nodes contains at least one node passing a test.
 */
function existsOne(test, nodes) {
    return nodes.some(function (checked) {
        return (0, domhandler_1.isTag)(checked) &&
            (test(checked) ||
                (checked.children.length > 0 &&
                    existsOne(test, checked.children)));
    });
}
exports.existsOne = existsOne;
/**
 * Search and array of nodes and its children for nodes passing a test function.
 *
 * Same as `find`, only with less options, leading to reduced complexity.
 *
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns All nodes passing `test`.
 */
function findAll(test, nodes) {
    var _a;
    var result = [];
    var stack = nodes.filter(domhandler_1.isTag);
    var elem;
    while ((elem = stack.shift())) {
        var children = (_a = elem.children) === null || _a === void 0 ? void 0 : _a.filter(domhandler_1.isTag);
        if (children && children.length > 0) {
            stack.unshift.apply(stack, children);
        }
        if (test(elem))
            result.push(elem);
    }
    return result;
}
exports.findAll = findAll;


/***/ }),

/***/ "./node_modules/domutils/lib/stringify.js":
/*!************************************************!*\
  !*** ./node_modules/domutils/lib/stringify.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.innerText = exports.textContent = exports.getText = exports.getInnerHTML = exports.getOuterHTML = void 0;
var domhandler_1 = __webpack_require__(/*! domhandler */ "./node_modules/domhandler/lib/index.js");
var dom_serializer_1 = __importDefault(__webpack_require__(/*! dom-serializer */ "./node_modules/dom-serializer/lib/index.js"));
var domelementtype_1 = __webpack_require__(/*! domelementtype */ "./node_modules/domelementtype/lib/index.js");
/**
 * @param node Node to get the outer HTML of.
 * @param options Options for serialization.
 * @deprecated Use the `dom-serializer` module directly.
 * @returns `node`'s outer HTML.
 */
function getOuterHTML(node, options) {
    return (0, dom_serializer_1.default)(node, options);
}
exports.getOuterHTML = getOuterHTML;
/**
 * @param node Node to get the inner HTML of.
 * @param options Options for serialization.
 * @deprecated Use the `dom-serializer` module directly.
 * @returns `node`'s inner HTML.
 */
function getInnerHTML(node, options) {
    return (0, domhandler_1.hasChildren)(node)
        ? node.children.map(function (node) { return getOuterHTML(node, options); }).join("")
        : "";
}
exports.getInnerHTML = getInnerHTML;
/**
 * Get a node's inner text. Same as `textContent`, but inserts newlines for `<br>` tags.
 *
 * @deprecated Use `textContent` instead.
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 */
function getText(node) {
    if (Array.isArray(node))
        return node.map(getText).join("");
    if ((0, domhandler_1.isTag)(node))
        return node.name === "br" ? "\n" : getText(node.children);
    if ((0, domhandler_1.isCDATA)(node))
        return getText(node.children);
    if ((0, domhandler_1.isText)(node))
        return node.data;
    return "";
}
exports.getText = getText;
/**
 * Get a node's text content.
 *
 * @param node Node to get the text content of.
 * @returns `node`'s text content.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent}
 */
function textContent(node) {
    if (Array.isArray(node))
        return node.map(textContent).join("");
    if ((0, domhandler_1.hasChildren)(node) && !(0, domhandler_1.isComment)(node)) {
        return textContent(node.children);
    }
    if ((0, domhandler_1.isText)(node))
        return node.data;
    return "";
}
exports.textContent = textContent;
/**
 * Get a node's inner text.
 *
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/innerText}
 */
function innerText(node) {
    if (Array.isArray(node))
        return node.map(innerText).join("");
    if ((0, domhandler_1.hasChildren)(node) && (node.type === domelementtype_1.ElementType.Tag || (0, domhandler_1.isCDATA)(node))) {
        return innerText(node.children);
    }
    if ((0, domhandler_1.isText)(node))
        return node.data;
    return "";
}
exports.innerText = innerText;


/***/ }),

/***/ "./node_modules/domutils/lib/traversal.js":
/*!************************************************!*\
  !*** ./node_modules/domutils/lib/traversal.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.prevElementSibling = exports.nextElementSibling = exports.getName = exports.hasAttrib = exports.getAttributeValue = exports.getSiblings = exports.getParent = exports.getChildren = void 0;
var domhandler_1 = __webpack_require__(/*! domhandler */ "./node_modules/domhandler/lib/index.js");
var emptyArray = [];
/**
 * Get a node's children.
 *
 * @param elem Node to get the children of.
 * @returns `elem`'s children, or an empty array.
 */
function getChildren(elem) {
    var _a;
    return (_a = elem.children) !== null && _a !== void 0 ? _a : emptyArray;
}
exports.getChildren = getChildren;
/**
 * Get a node's parent.
 *
 * @param elem Node to get the parent of.
 * @returns `elem`'s parent node.
 */
function getParent(elem) {
    return elem.parent || null;
}
exports.getParent = getParent;
/**
 * Gets an elements siblings, including the element itself.
 *
 * Attempts to get the children through the element's parent first.
 * If we don't have a parent (the element is a root node),
 * we walk the element's `prev` & `next` to get all remaining nodes.
 *
 * @param elem Element to get the siblings of.
 * @returns `elem`'s siblings.
 */
function getSiblings(elem) {
    var _a, _b;
    var parent = getParent(elem);
    if (parent != null)
        return getChildren(parent);
    var siblings = [elem];
    var prev = elem.prev, next = elem.next;
    while (prev != null) {
        siblings.unshift(prev);
        (_a = prev, prev = _a.prev);
    }
    while (next != null) {
        siblings.push(next);
        (_b = next, next = _b.next);
    }
    return siblings;
}
exports.getSiblings = getSiblings;
/**
 * Gets an attribute from an element.
 *
 * @param elem Element to check.
 * @param name Attribute name to retrieve.
 * @returns The element's attribute value, or `undefined`.
 */
function getAttributeValue(elem, name) {
    var _a;
    return (_a = elem.attribs) === null || _a === void 0 ? void 0 : _a[name];
}
exports.getAttributeValue = getAttributeValue;
/**
 * Checks whether an element has an attribute.
 *
 * @param elem Element to check.
 * @param name Attribute name to look for.
 * @returns Returns whether `elem` has the attribute `name`.
 */
function hasAttrib(elem, name) {
    return (elem.attribs != null &&
        Object.prototype.hasOwnProperty.call(elem.attribs, name) &&
        elem.attribs[name] != null);
}
exports.hasAttrib = hasAttrib;
/**
 * Get the tag name of an element.
 *
 * @param elem The element to get the name for.
 * @returns The tag name of `elem`.
 */
function getName(elem) {
    return elem.name;
}
exports.getName = getName;
/**
 * Returns the next element sibling of a node.
 *
 * @param elem The element to get the next sibling of.
 * @returns `elem`'s next sibling that is a tag.
 */
function nextElementSibling(elem) {
    var _a;
    var next = elem.next;
    while (next !== null && !(0, domhandler_1.isTag)(next))
        (_a = next, next = _a.next);
    return next;
}
exports.nextElementSibling = nextElementSibling;
/**
 * Returns the previous element sibling of a node.
 *
 * @param elem The element to get the previous sibling of.
 * @returns `elem`'s previous sibling that is a tag.
 */
function prevElementSibling(elem) {
    var _a;
    var prev = elem.prev;
    while (prev !== null && !(0, domhandler_1.isTag)(prev))
        (_a = prev, prev = _a.prev);
    return prev;
}
exports.prevElementSibling = prevElementSibling;


/***/ }),

/***/ "./node_modules/entities/lib/decode.js":
/*!*********************************************!*\
  !*** ./node_modules/entities/lib/decode.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decodeHTML = exports.decodeHTMLStrict = exports.decodeXML = void 0;
var entities_json_1 = __importDefault(__webpack_require__(/*! ./maps/entities.json */ "./node_modules/entities/lib/maps/entities.json"));
var legacy_json_1 = __importDefault(__webpack_require__(/*! ./maps/legacy.json */ "./node_modules/entities/lib/maps/legacy.json"));
var xml_json_1 = __importDefault(__webpack_require__(/*! ./maps/xml.json */ "./node_modules/entities/lib/maps/xml.json"));
var decode_codepoint_1 = __importDefault(__webpack_require__(/*! ./decode_codepoint */ "./node_modules/entities/lib/decode_codepoint.js"));
var strictEntityRe = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
exports.decodeXML = getStrictDecoder(xml_json_1.default);
exports.decodeHTMLStrict = getStrictDecoder(entities_json_1.default);
function getStrictDecoder(map) {
    var replace = getReplacer(map);
    return function (str) { return String(str).replace(strictEntityRe, replace); };
}
var sorter = function (a, b) { return (a < b ? 1 : -1); };
exports.decodeHTML = (function () {
    var legacy = Object.keys(legacy_json_1.default).sort(sorter);
    var keys = Object.keys(entities_json_1.default).sort(sorter);
    for (var i = 0, j = 0; i < keys.length; i++) {
        if (legacy[j] === keys[i]) {
            keys[i] += ";?";
            j++;
        }
        else {
            keys[i] += ";";
        }
    }
    var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
    var replace = getReplacer(entities_json_1.default);
    function replacer(str) {
        if (str.substr(-1) !== ";")
            str += ";";
        return replace(str);
    }
    // TODO consider creating a merged map
    return function (str) { return String(str).replace(re, replacer); };
})();
function getReplacer(map) {
    return function replace(str) {
        if (str.charAt(1) === "#") {
            var secondChar = str.charAt(2);
            if (secondChar === "X" || secondChar === "x") {
                return decode_codepoint_1.default(parseInt(str.substr(3), 16));
            }
            return decode_codepoint_1.default(parseInt(str.substr(2), 10));
        }
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        return map[str.slice(1, -1)] || str;
    };
}


/***/ }),

/***/ "./node_modules/entities/lib/decode_codepoint.js":
/*!*******************************************************!*\
  !*** ./node_modules/entities/lib/decode_codepoint.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var decode_json_1 = __importDefault(__webpack_require__(/*! ./maps/decode.json */ "./node_modules/entities/lib/maps/decode.json"));
// Adapted from https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
var fromCodePoint = 
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.fromCodePoint ||
    function (codePoint) {
        var output = "";
        if (codePoint > 0xffff) {
            codePoint -= 0x10000;
            output += String.fromCharCode(((codePoint >>> 10) & 0x3ff) | 0xd800);
            codePoint = 0xdc00 | (codePoint & 0x3ff);
        }
        output += String.fromCharCode(codePoint);
        return output;
    };
function decodeCodePoint(codePoint) {
    if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
        return "\uFFFD";
    }
    if (codePoint in decode_json_1.default) {
        codePoint = decode_json_1.default[codePoint];
    }
    return fromCodePoint(codePoint);
}
exports["default"] = decodeCodePoint;


/***/ }),

/***/ "./node_modules/entities/lib/encode.js":
/*!*********************************************!*\
  !*** ./node_modules/entities/lib/encode.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = void 0;
var xml_json_1 = __importDefault(__webpack_require__(/*! ./maps/xml.json */ "./node_modules/entities/lib/maps/xml.json"));
var inverseXML = getInverseObj(xml_json_1.default);
var xmlReplacer = getInverseReplacer(inverseXML);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using XML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
exports.encodeXML = getASCIIEncoder(inverseXML);
var entities_json_1 = __importDefault(__webpack_require__(/*! ./maps/entities.json */ "./node_modules/entities/lib/maps/entities.json"));
var inverseHTML = getInverseObj(entities_json_1.default);
var htmlReplacer = getInverseReplacer(inverseHTML);
/**
 * Encodes all entities and non-ASCII characters in the input.
 *
 * This includes characters that are valid ASCII characters in HTML documents.
 * For example `#` will be encoded as `&num;`. To get a more compact output,
 * consider using the `encodeNonAsciiHTML` function.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
exports.encodeHTML = getInverse(inverseHTML, htmlReplacer);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in HTML
 * documents using HTML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
exports.encodeNonAsciiHTML = getASCIIEncoder(inverseHTML);
function getInverseObj(obj) {
    return Object.keys(obj)
        .sort()
        .reduce(function (inverse, name) {
        inverse[obj[name]] = "&" + name + ";";
        return inverse;
    }, {});
}
function getInverseReplacer(inverse) {
    var single = [];
    var multiple = [];
    for (var _i = 0, _a = Object.keys(inverse); _i < _a.length; _i++) {
        var k = _a[_i];
        if (k.length === 1) {
            // Add value to single array
            single.push("\\" + k);
        }
        else {
            // Add value to multiple array
            multiple.push(k);
        }
    }
    // Add ranges to single characters.
    single.sort();
    for (var start = 0; start < single.length - 1; start++) {
        // Find the end of a run of characters
        var end = start;
        while (end < single.length - 1 &&
            single[end].charCodeAt(1) + 1 === single[end + 1].charCodeAt(1)) {
            end += 1;
        }
        var count = 1 + end - start;
        // We want to replace at least three characters
        if (count < 3)
            continue;
        single.splice(start, count, single[start] + "-" + single[end]);
    }
    multiple.unshift("[" + single.join("") + "]");
    return new RegExp(multiple.join("|"), "g");
}
// /[^\0-\x7F]/gu
var reNonASCII = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
var getCodePoint = 
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.prototype.codePointAt != null
    ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        function (str) { return str.codePointAt(0); }
    : // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        function (c) {
            return (c.charCodeAt(0) - 0xd800) * 0x400 +
                c.charCodeAt(1) -
                0xdc00 +
                0x10000;
        };
function singleCharReplacer(c) {
    return "&#x" + (c.length > 1 ? getCodePoint(c) : c.charCodeAt(0))
        .toString(16)
        .toUpperCase() + ";";
}
function getInverse(inverse, re) {
    return function (data) {
        return data
            .replace(re, function (name) { return inverse[name]; })
            .replace(reNonASCII, singleCharReplacer);
    };
}
var reEscapeChars = new RegExp(xmlReplacer.source + "|" + reNonASCII.source, "g");
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using numeric hexadecimal reference (eg. `&#xfc;`).
 *
 * Have a look at `escapeUTF8` if you want a more concise output at the expense
 * of reduced transportability.
 *
 * @param data String to escape.
 */
function escape(data) {
    return data.replace(reEscapeChars, singleCharReplacer);
}
exports.escape = escape;
/**
 * Encodes all characters not valid in XML documents using numeric hexadecimal
 * reference (eg. `&#xfc;`).
 *
 * Note that the output will be character-set dependent.
 *
 * @param data String to escape.
 */
function escapeUTF8(data) {
    return data.replace(xmlReplacer, singleCharReplacer);
}
exports.escapeUTF8 = escapeUTF8;
function getASCIIEncoder(obj) {
    return function (data) {
        return data.replace(reEscapeChars, function (c) { return obj[c] || singleCharReplacer(c); });
    };
}


/***/ }),

/***/ "./node_modules/entities/lib/index.js":
/*!********************************************!*\
  !*** ./node_modules/entities/lib/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.encodeHTML5 = exports.encodeHTML4 = exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = void 0;
var decode_1 = __webpack_require__(/*! ./decode */ "./node_modules/entities/lib/decode.js");
var encode_1 = __webpack_require__(/*! ./encode */ "./node_modules/entities/lib/encode.js");
/**
 * Decodes a string with entities.
 *
 * @param data String to decode.
 * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `decodeXML` or `decodeHTML` directly.
 */
function decode(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTML)(data);
}
exports.decode = decode;
/**
 * Decodes a string with entities. Does not allow missing trailing semicolons for entities.
 *
 * @param data String to decode.
 * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `decodeHTMLStrict` or `decodeXML` directly.
 */
function decodeStrict(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTMLStrict)(data);
}
exports.decodeStrict = decodeStrict;
/**
 * Encodes a string with entities.
 *
 * @param data String to encode.
 * @param level Optional level to encode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `encodeHTML`, `encodeXML` or `encodeNonAsciiHTML` directly.
 */
function encode(data, level) {
    return (!level || level <= 0 ? encode_1.encodeXML : encode_1.encodeHTML)(data);
}
exports.encode = encode;
var encode_2 = __webpack_require__(/*! ./encode */ "./node_modules/entities/lib/encode.js");
Object.defineProperty(exports, "encodeXML", ({ enumerable: true, get: function () { return encode_2.encodeXML; } }));
Object.defineProperty(exports, "encodeHTML", ({ enumerable: true, get: function () { return encode_2.encodeHTML; } }));
Object.defineProperty(exports, "encodeNonAsciiHTML", ({ enumerable: true, get: function () { return encode_2.encodeNonAsciiHTML; } }));
Object.defineProperty(exports, "escape", ({ enumerable: true, get: function () { return encode_2.escape; } }));
Object.defineProperty(exports, "escapeUTF8", ({ enumerable: true, get: function () { return encode_2.escapeUTF8; } }));
// Legacy aliases (deprecated)
Object.defineProperty(exports, "encodeHTML4", ({ enumerable: true, get: function () { return encode_2.encodeHTML; } }));
Object.defineProperty(exports, "encodeHTML5", ({ enumerable: true, get: function () { return encode_2.encodeHTML; } }));
var decode_2 = __webpack_require__(/*! ./decode */ "./node_modules/entities/lib/decode.js");
Object.defineProperty(exports, "decodeXML", ({ enumerable: true, get: function () { return decode_2.decodeXML; } }));
Object.defineProperty(exports, "decodeHTML", ({ enumerable: true, get: function () { return decode_2.decodeHTML; } }));
Object.defineProperty(exports, "decodeHTMLStrict", ({ enumerable: true, get: function () { return decode_2.decodeHTMLStrict; } }));
// Legacy aliases (deprecated)
Object.defineProperty(exports, "decodeHTML4", ({ enumerable: true, get: function () { return decode_2.decodeHTML; } }));
Object.defineProperty(exports, "decodeHTML5", ({ enumerable: true, get: function () { return decode_2.decodeHTML; } }));
Object.defineProperty(exports, "decodeHTML4Strict", ({ enumerable: true, get: function () { return decode_2.decodeHTMLStrict; } }));
Object.defineProperty(exports, "decodeHTML5Strict", ({ enumerable: true, get: function () { return decode_2.decodeHTMLStrict; } }));
Object.defineProperty(exports, "decodeXMLStrict", ({ enumerable: true, get: function () { return decode_2.decodeXML; } }));


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/entities/lib/maps/decode.json":
/*!****************************************************!*\
  !*** ./node_modules/entities/lib/maps/decode.json ***!
  \****************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376}');

/***/ }),

/***/ "./node_modules/entities/lib/maps/entities.json":
/*!******************************************************!*\
  !*** ./node_modules/entities/lib/maps/entities.json ***!
  \******************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}');

/***/ }),

/***/ "./node_modules/entities/lib/maps/legacy.json":
/*!****************************************************!*\
  !*** ./node_modules/entities/lib/maps/legacy.json ***!
  \****************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"Aacute":"Á","aacute":"á","Acirc":"Â","acirc":"â","acute":"´","AElig":"Æ","aelig":"æ","Agrave":"À","agrave":"à","amp":"&","AMP":"&","Aring":"Å","aring":"å","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","brvbar":"¦","Ccedil":"Ç","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","COPY":"©","curren":"¤","deg":"°","divide":"÷","Eacute":"É","eacute":"é","Ecirc":"Ê","ecirc":"ê","Egrave":"È","egrave":"è","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","GT":">","Iacute":"Í","iacute":"í","Icirc":"Î","icirc":"î","iexcl":"¡","Igrave":"Ì","igrave":"ì","iquest":"¿","Iuml":"Ï","iuml":"ï","laquo":"«","lt":"<","LT":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","Ntilde":"Ñ","ntilde":"ñ","Oacute":"Ó","oacute":"ó","Ocirc":"Ô","ocirc":"ô","Ograve":"Ò","ograve":"ò","ordf":"ª","ordm":"º","Oslash":"Ø","oslash":"ø","Otilde":"Õ","otilde":"õ","Ouml":"Ö","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","QUOT":"\\"","raquo":"»","reg":"®","REG":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","THORN":"Þ","thorn":"þ","times":"×","Uacute":"Ú","uacute":"ú","Ucirc":"Û","ucirc":"û","Ugrave":"Ù","ugrave":"ù","uml":"¨","Uuml":"Ü","uuml":"ü","Yacute":"Ý","yacute":"ý","yen":"¥","yuml":"ÿ"}');

/***/ }),

/***/ "./node_modules/entities/lib/maps/xml.json":
/*!*************************************************!*\
  !*** ./node_modules/entities/lib/maps/xml.json ***!
  \*************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"amp":"&","apos":"\'","gt":">","lt":"<","quot":"\\""}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



const { appendChild } = __webpack_require__(/*! domutils */ "./node_modules/domutils/lib/index.js")

let content = document.createElement('div')
content.id = 'content'

document.querySelector('body').appendChild(content)

content.textContent = "Hello World"
content.classList.add('red')

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmFudC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvZG9tLXNlcmlhbGl6ZXIvbGliL2ZvcmVpZ25OYW1lcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2RvbS1zZXJpYWxpemVyL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2RvbWVsZW1lbnR0eXBlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2RvbWhhbmRsZXIvbGliL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvZG9taGFuZGxlci9saWIvbm9kZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2RvbXV0aWxzL2xpYi9mZWVkcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2RvbXV0aWxzL2xpYi9oZWxwZXJzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvZG9tdXRpbHMvbGliL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvZG9tdXRpbHMvbGliL2xlZ2FjeS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2RvbXV0aWxzL2xpYi9tYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9kb211dGlscy9saWIvcXVlcnlpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9kb211dGlscy9saWIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvZG9tdXRpbHMvbGliL3RyYXZlcnNhbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2VudGl0aWVzL2xpYi9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9lbnRpdGllcy9saWIvZGVjb2RlX2NvZGVwb2ludC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2VudGl0aWVzL2xpYi9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9lbnRpdGllcy9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucmVkIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucmVkIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5hdHRyaWJ1dGVOYW1lcyA9IGV4cG9ydHMuZWxlbWVudE5hbWVzID0gdm9pZCAwO1xuZXhwb3J0cy5lbGVtZW50TmFtZXMgPSBuZXcgTWFwKFtcbiAgICBbXCJhbHRnbHlwaFwiLCBcImFsdEdseXBoXCJdLFxuICAgIFtcImFsdGdseXBoZGVmXCIsIFwiYWx0R2x5cGhEZWZcIl0sXG4gICAgW1wiYWx0Z2x5cGhpdGVtXCIsIFwiYWx0R2x5cGhJdGVtXCJdLFxuICAgIFtcImFuaW1hdGVjb2xvclwiLCBcImFuaW1hdGVDb2xvclwiXSxcbiAgICBbXCJhbmltYXRlbW90aW9uXCIsIFwiYW5pbWF0ZU1vdGlvblwiXSxcbiAgICBbXCJhbmltYXRldHJhbnNmb3JtXCIsIFwiYW5pbWF0ZVRyYW5zZm9ybVwiXSxcbiAgICBbXCJjbGlwcGF0aFwiLCBcImNsaXBQYXRoXCJdLFxuICAgIFtcImZlYmxlbmRcIiwgXCJmZUJsZW5kXCJdLFxuICAgIFtcImZlY29sb3JtYXRyaXhcIiwgXCJmZUNvbG9yTWF0cml4XCJdLFxuICAgIFtcImZlY29tcG9uZW50dHJhbnNmZXJcIiwgXCJmZUNvbXBvbmVudFRyYW5zZmVyXCJdLFxuICAgIFtcImZlY29tcG9zaXRlXCIsIFwiZmVDb21wb3NpdGVcIl0sXG4gICAgW1wiZmVjb252b2x2ZW1hdHJpeFwiLCBcImZlQ29udm9sdmVNYXRyaXhcIl0sXG4gICAgW1wiZmVkaWZmdXNlbGlnaHRpbmdcIiwgXCJmZURpZmZ1c2VMaWdodGluZ1wiXSxcbiAgICBbXCJmZWRpc3BsYWNlbWVudG1hcFwiLCBcImZlRGlzcGxhY2VtZW50TWFwXCJdLFxuICAgIFtcImZlZGlzdGFudGxpZ2h0XCIsIFwiZmVEaXN0YW50TGlnaHRcIl0sXG4gICAgW1wiZmVkcm9wc2hhZG93XCIsIFwiZmVEcm9wU2hhZG93XCJdLFxuICAgIFtcImZlZmxvb2RcIiwgXCJmZUZsb29kXCJdLFxuICAgIFtcImZlZnVuY2FcIiwgXCJmZUZ1bmNBXCJdLFxuICAgIFtcImZlZnVuY2JcIiwgXCJmZUZ1bmNCXCJdLFxuICAgIFtcImZlZnVuY2dcIiwgXCJmZUZ1bmNHXCJdLFxuICAgIFtcImZlZnVuY3JcIiwgXCJmZUZ1bmNSXCJdLFxuICAgIFtcImZlZ2F1c3NpYW5ibHVyXCIsIFwiZmVHYXVzc2lhbkJsdXJcIl0sXG4gICAgW1wiZmVpbWFnZVwiLCBcImZlSW1hZ2VcIl0sXG4gICAgW1wiZmVtZXJnZVwiLCBcImZlTWVyZ2VcIl0sXG4gICAgW1wiZmVtZXJnZW5vZGVcIiwgXCJmZU1lcmdlTm9kZVwiXSxcbiAgICBbXCJmZW1vcnBob2xvZ3lcIiwgXCJmZU1vcnBob2xvZ3lcIl0sXG4gICAgW1wiZmVvZmZzZXRcIiwgXCJmZU9mZnNldFwiXSxcbiAgICBbXCJmZXBvaW50bGlnaHRcIiwgXCJmZVBvaW50TGlnaHRcIl0sXG4gICAgW1wiZmVzcGVjdWxhcmxpZ2h0aW5nXCIsIFwiZmVTcGVjdWxhckxpZ2h0aW5nXCJdLFxuICAgIFtcImZlc3BvdGxpZ2h0XCIsIFwiZmVTcG90TGlnaHRcIl0sXG4gICAgW1wiZmV0aWxlXCIsIFwiZmVUaWxlXCJdLFxuICAgIFtcImZldHVyYnVsZW5jZVwiLCBcImZlVHVyYnVsZW5jZVwiXSxcbiAgICBbXCJmb3JlaWdub2JqZWN0XCIsIFwiZm9yZWlnbk9iamVjdFwiXSxcbiAgICBbXCJnbHlwaHJlZlwiLCBcImdseXBoUmVmXCJdLFxuICAgIFtcImxpbmVhcmdyYWRpZW50XCIsIFwibGluZWFyR3JhZGllbnRcIl0sXG4gICAgW1wicmFkaWFsZ3JhZGllbnRcIiwgXCJyYWRpYWxHcmFkaWVudFwiXSxcbiAgICBbXCJ0ZXh0cGF0aFwiLCBcInRleHRQYXRoXCJdLFxuXSk7XG5leHBvcnRzLmF0dHJpYnV0ZU5hbWVzID0gbmV3IE1hcChbXG4gICAgW1wiZGVmaW5pdGlvbnVybFwiLCBcImRlZmluaXRpb25VUkxcIl0sXG4gICAgW1wiYXR0cmlidXRlbmFtZVwiLCBcImF0dHJpYnV0ZU5hbWVcIl0sXG4gICAgW1wiYXR0cmlidXRldHlwZVwiLCBcImF0dHJpYnV0ZVR5cGVcIl0sXG4gICAgW1wiYmFzZWZyZXF1ZW5jeVwiLCBcImJhc2VGcmVxdWVuY3lcIl0sXG4gICAgW1wiYmFzZXByb2ZpbGVcIiwgXCJiYXNlUHJvZmlsZVwiXSxcbiAgICBbXCJjYWxjbW9kZVwiLCBcImNhbGNNb2RlXCJdLFxuICAgIFtcImNsaXBwYXRodW5pdHNcIiwgXCJjbGlwUGF0aFVuaXRzXCJdLFxuICAgIFtcImRpZmZ1c2Vjb25zdGFudFwiLCBcImRpZmZ1c2VDb25zdGFudFwiXSxcbiAgICBbXCJlZGdlbW9kZVwiLCBcImVkZ2VNb2RlXCJdLFxuICAgIFtcImZpbHRlcnVuaXRzXCIsIFwiZmlsdGVyVW5pdHNcIl0sXG4gICAgW1wiZ2x5cGhyZWZcIiwgXCJnbHlwaFJlZlwiXSxcbiAgICBbXCJncmFkaWVudHRyYW5zZm9ybVwiLCBcImdyYWRpZW50VHJhbnNmb3JtXCJdLFxuICAgIFtcImdyYWRpZW50dW5pdHNcIiwgXCJncmFkaWVudFVuaXRzXCJdLFxuICAgIFtcImtlcm5lbG1hdHJpeFwiLCBcImtlcm5lbE1hdHJpeFwiXSxcbiAgICBbXCJrZXJuZWx1bml0bGVuZ3RoXCIsIFwia2VybmVsVW5pdExlbmd0aFwiXSxcbiAgICBbXCJrZXlwb2ludHNcIiwgXCJrZXlQb2ludHNcIl0sXG4gICAgW1wia2V5c3BsaW5lc1wiLCBcImtleVNwbGluZXNcIl0sXG4gICAgW1wia2V5dGltZXNcIiwgXCJrZXlUaW1lc1wiXSxcbiAgICBbXCJsZW5ndGhhZGp1c3RcIiwgXCJsZW5ndGhBZGp1c3RcIl0sXG4gICAgW1wibGltaXRpbmdjb25lYW5nbGVcIiwgXCJsaW1pdGluZ0NvbmVBbmdsZVwiXSxcbiAgICBbXCJtYXJrZXJoZWlnaHRcIiwgXCJtYXJrZXJIZWlnaHRcIl0sXG4gICAgW1wibWFya2VydW5pdHNcIiwgXCJtYXJrZXJVbml0c1wiXSxcbiAgICBbXCJtYXJrZXJ3aWR0aFwiLCBcIm1hcmtlcldpZHRoXCJdLFxuICAgIFtcIm1hc2tjb250ZW50dW5pdHNcIiwgXCJtYXNrQ29udGVudFVuaXRzXCJdLFxuICAgIFtcIm1hc2t1bml0c1wiLCBcIm1hc2tVbml0c1wiXSxcbiAgICBbXCJudW1vY3RhdmVzXCIsIFwibnVtT2N0YXZlc1wiXSxcbiAgICBbXCJwYXRobGVuZ3RoXCIsIFwicGF0aExlbmd0aFwiXSxcbiAgICBbXCJwYXR0ZXJuY29udGVudHVuaXRzXCIsIFwicGF0dGVybkNvbnRlbnRVbml0c1wiXSxcbiAgICBbXCJwYXR0ZXJudHJhbnNmb3JtXCIsIFwicGF0dGVyblRyYW5zZm9ybVwiXSxcbiAgICBbXCJwYXR0ZXJudW5pdHNcIiwgXCJwYXR0ZXJuVW5pdHNcIl0sXG4gICAgW1wicG9pbnRzYXR4XCIsIFwicG9pbnRzQXRYXCJdLFxuICAgIFtcInBvaW50c2F0eVwiLCBcInBvaW50c0F0WVwiXSxcbiAgICBbXCJwb2ludHNhdHpcIiwgXCJwb2ludHNBdFpcIl0sXG4gICAgW1wicHJlc2VydmVhbHBoYVwiLCBcInByZXNlcnZlQWxwaGFcIl0sXG4gICAgW1wicHJlc2VydmVhc3BlY3RyYXRpb1wiLCBcInByZXNlcnZlQXNwZWN0UmF0aW9cIl0sXG4gICAgW1wicHJpbWl0aXZldW5pdHNcIiwgXCJwcmltaXRpdmVVbml0c1wiXSxcbiAgICBbXCJyZWZ4XCIsIFwicmVmWFwiXSxcbiAgICBbXCJyZWZ5XCIsIFwicmVmWVwiXSxcbiAgICBbXCJyZXBlYXRjb3VudFwiLCBcInJlcGVhdENvdW50XCJdLFxuICAgIFtcInJlcGVhdGR1clwiLCBcInJlcGVhdER1clwiXSxcbiAgICBbXCJyZXF1aXJlZGV4dGVuc2lvbnNcIiwgXCJyZXF1aXJlZEV4dGVuc2lvbnNcIl0sXG4gICAgW1wicmVxdWlyZWRmZWF0dXJlc1wiLCBcInJlcXVpcmVkRmVhdHVyZXNcIl0sXG4gICAgW1wic3BlY3VsYXJjb25zdGFudFwiLCBcInNwZWN1bGFyQ29uc3RhbnRcIl0sXG4gICAgW1wic3BlY3VsYXJleHBvbmVudFwiLCBcInNwZWN1bGFyRXhwb25lbnRcIl0sXG4gICAgW1wic3ByZWFkbWV0aG9kXCIsIFwic3ByZWFkTWV0aG9kXCJdLFxuICAgIFtcInN0YXJ0b2Zmc2V0XCIsIFwic3RhcnRPZmZzZXRcIl0sXG4gICAgW1wic3RkZGV2aWF0aW9uXCIsIFwic3RkRGV2aWF0aW9uXCJdLFxuICAgIFtcInN0aXRjaHRpbGVzXCIsIFwic3RpdGNoVGlsZXNcIl0sXG4gICAgW1wic3VyZmFjZXNjYWxlXCIsIFwic3VyZmFjZVNjYWxlXCJdLFxuICAgIFtcInN5c3RlbWxhbmd1YWdlXCIsIFwic3lzdGVtTGFuZ3VhZ2VcIl0sXG4gICAgW1widGFibGV2YWx1ZXNcIiwgXCJ0YWJsZVZhbHVlc1wiXSxcbiAgICBbXCJ0YXJnZXR4XCIsIFwidGFyZ2V0WFwiXSxcbiAgICBbXCJ0YXJnZXR5XCIsIFwidGFyZ2V0WVwiXSxcbiAgICBbXCJ0ZXh0bGVuZ3RoXCIsIFwidGV4dExlbmd0aFwiXSxcbiAgICBbXCJ2aWV3Ym94XCIsIFwidmlld0JveFwiXSxcbiAgICBbXCJ2aWV3dGFyZ2V0XCIsIFwidmlld1RhcmdldFwiXSxcbiAgICBbXCJ4Y2hhbm5lbHNlbGVjdG9yXCIsIFwieENoYW5uZWxTZWxlY3RvclwiXSxcbiAgICBbXCJ5Y2hhbm5lbHNlbGVjdG9yXCIsIFwieUNoYW5uZWxTZWxlY3RvclwiXSxcbiAgICBbXCJ6b29tYW5kcGFuXCIsIFwiem9vbUFuZFBhblwiXSxcbl0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG52YXIgRWxlbWVudFR5cGUgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcImRvbWVsZW1lbnR0eXBlXCIpKTtcbnZhciBlbnRpdGllc18xID0gcmVxdWlyZShcImVudGl0aWVzXCIpO1xuLyoqXG4gKiBNaXhlZC1jYXNlIFNWRyBhbmQgTWF0aE1MIHRhZ3MgJiBhdHRyaWJ1dGVzXG4gKiByZWNvZ25pemVkIGJ5IHRoZSBIVE1MIHBhcnNlci5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3BhcnNpbmcuaHRtbCNwYXJzaW5nLW1haW4taW5mb3JlaWduXG4gKi9cbnZhciBmb3JlaWduTmFtZXNfMSA9IHJlcXVpcmUoXCIuL2ZvcmVpZ25OYW1lc1wiKTtcbnZhciB1bmVuY29kZWRFbGVtZW50cyA9IG5ldyBTZXQoW1xuICAgIFwic3R5bGVcIixcbiAgICBcInNjcmlwdFwiLFxuICAgIFwieG1wXCIsXG4gICAgXCJpZnJhbWVcIixcbiAgICBcIm5vZW1iZWRcIixcbiAgICBcIm5vZnJhbWVzXCIsXG4gICAgXCJwbGFpbnRleHRcIixcbiAgICBcIm5vc2NyaXB0XCIsXG5dKTtcbi8qKlxuICogRm9ybWF0IGF0dHJpYnV0ZXNcbiAqL1xuZnVuY3Rpb24gZm9ybWF0QXR0cmlidXRlcyhhdHRyaWJ1dGVzLCBvcHRzKSB7XG4gICAgaWYgKCFhdHRyaWJ1dGVzKVxuICAgICAgICByZXR1cm47XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICB2YXIgdmFsdWUgPSAoX2EgPSBhdHRyaWJ1dGVzW2tleV0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFwiXCI7XG4gICAgICAgIGlmIChvcHRzLnhtbE1vZGUgPT09IFwiZm9yZWlnblwiKSB7XG4gICAgICAgICAgICAvKiBGaXggdXAgbWl4ZWQtY2FzZSBhdHRyaWJ1dGUgbmFtZXMgKi9cbiAgICAgICAgICAgIGtleSA9IChfYiA9IGZvcmVpZ25OYW1lc18xLmF0dHJpYnV0ZU5hbWVzLmdldChrZXkpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBrZXk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvcHRzLmVtcHR5QXR0cnMgJiYgIW9wdHMueG1sTW9kZSAmJiB2YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ga2V5ICsgXCI9XFxcIlwiICsgKG9wdHMuZGVjb2RlRW50aXRpZXMgIT09IGZhbHNlXG4gICAgICAgICAgICA/IGVudGl0aWVzXzEuZW5jb2RlWE1MKHZhbHVlKVxuICAgICAgICAgICAgOiB2YWx1ZS5yZXBsYWNlKC9cIi9nLCBcIiZxdW90O1wiKSkgKyBcIlxcXCJcIjtcbiAgICB9KVxuICAgICAgICAuam9pbihcIiBcIik7XG59XG4vKipcbiAqIFNlbGYtZW5jbG9zaW5nIHRhZ3NcbiAqL1xudmFyIHNpbmdsZVRhZyA9IG5ldyBTZXQoW1xuICAgIFwiYXJlYVwiLFxuICAgIFwiYmFzZVwiLFxuICAgIFwiYmFzZWZvbnRcIixcbiAgICBcImJyXCIsXG4gICAgXCJjb2xcIixcbiAgICBcImNvbW1hbmRcIixcbiAgICBcImVtYmVkXCIsXG4gICAgXCJmcmFtZVwiLFxuICAgIFwiaHJcIixcbiAgICBcImltZ1wiLFxuICAgIFwiaW5wdXRcIixcbiAgICBcImlzaW5kZXhcIixcbiAgICBcImtleWdlblwiLFxuICAgIFwibGlua1wiLFxuICAgIFwibWV0YVwiLFxuICAgIFwicGFyYW1cIixcbiAgICBcInNvdXJjZVwiLFxuICAgIFwidHJhY2tcIixcbiAgICBcIndiclwiLFxuXSk7XG4vKipcbiAqIFJlbmRlcnMgYSBET00gbm9kZSBvciBhbiBhcnJheSBvZiBET00gbm9kZXMgdG8gYSBzdHJpbmcuXG4gKlxuICogQ2FuIGJlIHRob3VnaHQgb2YgYXMgdGhlIGVxdWl2YWxlbnQgb2YgdGhlIGBvdXRlckhUTUxgIG9mIHRoZSBwYXNzZWQgbm9kZShzKS5cbiAqXG4gKiBAcGFyYW0gbm9kZSBOb2RlIHRvIGJlIHJlbmRlcmVkLlxuICogQHBhcmFtIG9wdGlvbnMgQ2hhbmdlcyBzZXJpYWxpemF0aW9uIGJlaGF2aW9yXG4gKi9cbmZ1bmN0aW9uIHJlbmRlcihub2RlLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgbm9kZXMgPSBcImxlbmd0aFwiIGluIG5vZGUgPyBub2RlIDogW25vZGVdO1xuICAgIHZhciBvdXRwdXQgPSBcIlwiO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgb3V0cHV0ICs9IHJlbmRlck5vZGUobm9kZXNbaV0sIG9wdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gcmVuZGVyO1xuZnVuY3Rpb24gcmVuZGVyTm9kZShub2RlLCBvcHRpb25zKSB7XG4gICAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICAgICAgY2FzZSBFbGVtZW50VHlwZS5Sb290OlxuICAgICAgICAgICAgcmV0dXJuIHJlbmRlcihub2RlLmNoaWxkcmVuLCBvcHRpb25zKTtcbiAgICAgICAgY2FzZSBFbGVtZW50VHlwZS5EaXJlY3RpdmU6XG4gICAgICAgIGNhc2UgRWxlbWVudFR5cGUuRG9jdHlwZTpcbiAgICAgICAgICAgIHJldHVybiByZW5kZXJEaXJlY3RpdmUobm9kZSk7XG4gICAgICAgIGNhc2UgRWxlbWVudFR5cGUuQ29tbWVudDpcbiAgICAgICAgICAgIHJldHVybiByZW5kZXJDb21tZW50KG5vZGUpO1xuICAgICAgICBjYXNlIEVsZW1lbnRUeXBlLkNEQVRBOlxuICAgICAgICAgICAgcmV0dXJuIHJlbmRlckNkYXRhKG5vZGUpO1xuICAgICAgICBjYXNlIEVsZW1lbnRUeXBlLlNjcmlwdDpcbiAgICAgICAgY2FzZSBFbGVtZW50VHlwZS5TdHlsZTpcbiAgICAgICAgY2FzZSBFbGVtZW50VHlwZS5UYWc6XG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyVGFnKG5vZGUsIG9wdGlvbnMpO1xuICAgICAgICBjYXNlIEVsZW1lbnRUeXBlLlRleHQ6XG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyVGV4dChub2RlLCBvcHRpb25zKTtcbiAgICB9XG59XG52YXIgZm9yZWlnbk1vZGVJbnRlZ3JhdGlvblBvaW50cyA9IG5ldyBTZXQoW1xuICAgIFwibWlcIixcbiAgICBcIm1vXCIsXG4gICAgXCJtblwiLFxuICAgIFwibXNcIixcbiAgICBcIm10ZXh0XCIsXG4gICAgXCJhbm5vdGF0aW9uLXhtbFwiLFxuICAgIFwiZm9yZWlnbk9iamVjdFwiLFxuICAgIFwiZGVzY1wiLFxuICAgIFwidGl0bGVcIixcbl0pO1xudmFyIGZvcmVpZ25FbGVtZW50cyA9IG5ldyBTZXQoW1wic3ZnXCIsIFwibWF0aFwiXSk7XG5mdW5jdGlvbiByZW5kZXJUYWcoZWxlbSwgb3B0cykge1xuICAgIHZhciBfYTtcbiAgICAvLyBIYW5kbGUgU1ZHIC8gTWF0aE1MIGluIEhUTUxcbiAgICBpZiAob3B0cy54bWxNb2RlID09PSBcImZvcmVpZ25cIikge1xuICAgICAgICAvKiBGaXggdXAgbWl4ZWQtY2FzZSBlbGVtZW50IG5hbWVzICovXG4gICAgICAgIGVsZW0ubmFtZSA9IChfYSA9IGZvcmVpZ25OYW1lc18xLmVsZW1lbnROYW1lcy5nZXQoZWxlbS5uYW1lKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogZWxlbS5uYW1lO1xuICAgICAgICAvKiBFeGl0IGZvcmVpZ24gbW9kZSBhdCBpbnRlZ3JhdGlvbiBwb2ludHMgKi9cbiAgICAgICAgaWYgKGVsZW0ucGFyZW50ICYmXG4gICAgICAgICAgICBmb3JlaWduTW9kZUludGVncmF0aW9uUG9pbnRzLmhhcyhlbGVtLnBhcmVudC5uYW1lKSkge1xuICAgICAgICAgICAgb3B0cyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRzKSwgeyB4bWxNb2RlOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIW9wdHMueG1sTW9kZSAmJiBmb3JlaWduRWxlbWVudHMuaGFzKGVsZW0ubmFtZSkpIHtcbiAgICAgICAgb3B0cyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRzKSwgeyB4bWxNb2RlOiBcImZvcmVpZ25cIiB9KTtcbiAgICB9XG4gICAgdmFyIHRhZyA9IFwiPFwiICsgZWxlbS5uYW1lO1xuICAgIHZhciBhdHRyaWJzID0gZm9ybWF0QXR0cmlidXRlcyhlbGVtLmF0dHJpYnMsIG9wdHMpO1xuICAgIGlmIChhdHRyaWJzKSB7XG4gICAgICAgIHRhZyArPSBcIiBcIiArIGF0dHJpYnM7XG4gICAgfVxuICAgIGlmIChlbGVtLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgICAob3B0cy54bWxNb2RlXG4gICAgICAgICAgICA/IC8vIEluIFhNTCBtb2RlIG9yIGZvcmVpZ24gbW9kZSwgYW5kIHVzZXIgaGFzbid0IGV4cGxpY2l0bHkgdHVybmVkIG9mZiBzZWxmLWNsb3NpbmcgdGFnc1xuICAgICAgICAgICAgICAgIG9wdHMuc2VsZkNsb3NpbmdUYWdzICE9PSBmYWxzZVxuICAgICAgICAgICAgOiAvLyBVc2VyIGV4cGxpY2l0bHkgYXNrZWQgZm9yIHNlbGYtY2xvc2luZyB0YWdzLCBldmVuIGluIEhUTUwgbW9kZVxuICAgICAgICAgICAgICAgIG9wdHMuc2VsZkNsb3NpbmdUYWdzICYmIHNpbmdsZVRhZy5oYXMoZWxlbS5uYW1lKSkpIHtcbiAgICAgICAgaWYgKCFvcHRzLnhtbE1vZGUpXG4gICAgICAgICAgICB0YWcgKz0gXCIgXCI7XG4gICAgICAgIHRhZyArPSBcIi8+XCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0YWcgKz0gXCI+XCI7XG4gICAgICAgIGlmIChlbGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRhZyArPSByZW5kZXIoZWxlbS5jaGlsZHJlbiwgb3B0cyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdHMueG1sTW9kZSB8fCAhc2luZ2xlVGFnLmhhcyhlbGVtLm5hbWUpKSB7XG4gICAgICAgICAgICB0YWcgKz0gXCI8L1wiICsgZWxlbS5uYW1lICsgXCI+XCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhZztcbn1cbmZ1bmN0aW9uIHJlbmRlckRpcmVjdGl2ZShlbGVtKSB7XG4gICAgcmV0dXJuIFwiPFwiICsgZWxlbS5kYXRhICsgXCI+XCI7XG59XG5mdW5jdGlvbiByZW5kZXJUZXh0KGVsZW0sIG9wdHMpIHtcbiAgICB2YXIgZGF0YSA9IGVsZW0uZGF0YSB8fCBcIlwiO1xuICAgIC8vIElmIGVudGl0aWVzIHdlcmVuJ3QgZGVjb2RlZCwgbm8gbmVlZCB0byBlbmNvZGUgdGhlbSBiYWNrXG4gICAgaWYgKG9wdHMuZGVjb2RlRW50aXRpZXMgIT09IGZhbHNlICYmXG4gICAgICAgICEoIW9wdHMueG1sTW9kZSAmJlxuICAgICAgICAgICAgZWxlbS5wYXJlbnQgJiZcbiAgICAgICAgICAgIHVuZW5jb2RlZEVsZW1lbnRzLmhhcyhlbGVtLnBhcmVudC5uYW1lKSkpIHtcbiAgICAgICAgZGF0YSA9IGVudGl0aWVzXzEuZW5jb2RlWE1MKGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbn1cbmZ1bmN0aW9uIHJlbmRlckNkYXRhKGVsZW0pIHtcbiAgICByZXR1cm4gXCI8IVtDREFUQVtcIiArIGVsZW0uY2hpbGRyZW5bMF0uZGF0YSArIFwiXV0+XCI7XG59XG5mdW5jdGlvbiByZW5kZXJDb21tZW50KGVsZW0pIHtcbiAgICByZXR1cm4gXCI8IS0tXCIgKyBlbGVtLmRhdGEgKyBcIi0tPlwiO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRvY3R5cGUgPSBleHBvcnRzLkNEQVRBID0gZXhwb3J0cy5UYWcgPSBleHBvcnRzLlN0eWxlID0gZXhwb3J0cy5TY3JpcHQgPSBleHBvcnRzLkNvbW1lbnQgPSBleHBvcnRzLkRpcmVjdGl2ZSA9IGV4cG9ydHMuVGV4dCA9IGV4cG9ydHMuUm9vdCA9IGV4cG9ydHMuaXNUYWcgPSBleHBvcnRzLkVsZW1lbnRUeXBlID0gdm9pZCAwO1xuLyoqIFR5cGVzIG9mIGVsZW1lbnRzIGZvdW5kIGluIGh0bWxwYXJzZXIyJ3MgRE9NICovXG52YXIgRWxlbWVudFR5cGU7XG4oZnVuY3Rpb24gKEVsZW1lbnRUeXBlKSB7XG4gICAgLyoqIFR5cGUgZm9yIHRoZSByb290IGVsZW1lbnQgb2YgYSBkb2N1bWVudCAqL1xuICAgIEVsZW1lbnRUeXBlW1wiUm9vdFwiXSA9IFwicm9vdFwiO1xuICAgIC8qKiBUeXBlIGZvciBUZXh0ICovXG4gICAgRWxlbWVudFR5cGVbXCJUZXh0XCJdID0gXCJ0ZXh0XCI7XG4gICAgLyoqIFR5cGUgZm9yIDw/IC4uLiA/PiAqL1xuICAgIEVsZW1lbnRUeXBlW1wiRGlyZWN0aXZlXCJdID0gXCJkaXJlY3RpdmVcIjtcbiAgICAvKiogVHlwZSBmb3IgPCEtLSAuLi4gLS0+ICovXG4gICAgRWxlbWVudFR5cGVbXCJDb21tZW50XCJdID0gXCJjb21tZW50XCI7XG4gICAgLyoqIFR5cGUgZm9yIDxzY3JpcHQ+IHRhZ3MgKi9cbiAgICBFbGVtZW50VHlwZVtcIlNjcmlwdFwiXSA9IFwic2NyaXB0XCI7XG4gICAgLyoqIFR5cGUgZm9yIDxzdHlsZT4gdGFncyAqL1xuICAgIEVsZW1lbnRUeXBlW1wiU3R5bGVcIl0gPSBcInN0eWxlXCI7XG4gICAgLyoqIFR5cGUgZm9yIEFueSB0YWcgKi9cbiAgICBFbGVtZW50VHlwZVtcIlRhZ1wiXSA9IFwidGFnXCI7XG4gICAgLyoqIFR5cGUgZm9yIDwhW0NEQVRBWyAuLi4gXV0+ICovXG4gICAgRWxlbWVudFR5cGVbXCJDREFUQVwiXSA9IFwiY2RhdGFcIjtcbiAgICAvKiogVHlwZSBmb3IgPCFkb2N0eXBlIC4uLj4gKi9cbiAgICBFbGVtZW50VHlwZVtcIkRvY3R5cGVcIl0gPSBcImRvY3R5cGVcIjtcbn0pKEVsZW1lbnRUeXBlID0gZXhwb3J0cy5FbGVtZW50VHlwZSB8fCAoZXhwb3J0cy5FbGVtZW50VHlwZSA9IHt9KSk7XG4vKipcbiAqIFRlc3RzIHdoZXRoZXIgYW4gZWxlbWVudCBpcyBhIHRhZyBvciBub3QuXG4gKlxuICogQHBhcmFtIGVsZW0gRWxlbWVudCB0byB0ZXN0XG4gKi9cbmZ1bmN0aW9uIGlzVGFnKGVsZW0pIHtcbiAgICByZXR1cm4gKGVsZW0udHlwZSA9PT0gRWxlbWVudFR5cGUuVGFnIHx8XG4gICAgICAgIGVsZW0udHlwZSA9PT0gRWxlbWVudFR5cGUuU2NyaXB0IHx8XG4gICAgICAgIGVsZW0udHlwZSA9PT0gRWxlbWVudFR5cGUuU3R5bGUpO1xufVxuZXhwb3J0cy5pc1RhZyA9IGlzVGFnO1xuLy8gRXhwb3J0cyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbi8qKiBUeXBlIGZvciB0aGUgcm9vdCBlbGVtZW50IG9mIGEgZG9jdW1lbnQgKi9cbmV4cG9ydHMuUm9vdCA9IEVsZW1lbnRUeXBlLlJvb3Q7XG4vKiogVHlwZSBmb3IgVGV4dCAqL1xuZXhwb3J0cy5UZXh0ID0gRWxlbWVudFR5cGUuVGV4dDtcbi8qKiBUeXBlIGZvciA8PyAuLi4gPz4gKi9cbmV4cG9ydHMuRGlyZWN0aXZlID0gRWxlbWVudFR5cGUuRGlyZWN0aXZlO1xuLyoqIFR5cGUgZm9yIDwhLS0gLi4uIC0tPiAqL1xuZXhwb3J0cy5Db21tZW50ID0gRWxlbWVudFR5cGUuQ29tbWVudDtcbi8qKiBUeXBlIGZvciA8c2NyaXB0PiB0YWdzICovXG5leHBvcnRzLlNjcmlwdCA9IEVsZW1lbnRUeXBlLlNjcmlwdDtcbi8qKiBUeXBlIGZvciA8c3R5bGU+IHRhZ3MgKi9cbmV4cG9ydHMuU3R5bGUgPSBFbGVtZW50VHlwZS5TdHlsZTtcbi8qKiBUeXBlIGZvciBBbnkgdGFnICovXG5leHBvcnRzLlRhZyA9IEVsZW1lbnRUeXBlLlRhZztcbi8qKiBUeXBlIGZvciA8IVtDREFUQVsgLi4uIF1dPiAqL1xuZXhwb3J0cy5DREFUQSA9IEVsZW1lbnRUeXBlLkNEQVRBO1xuLyoqIFR5cGUgZm9yIDwhZG9jdHlwZSAuLi4+ICovXG5leHBvcnRzLkRvY3R5cGUgPSBFbGVtZW50VHlwZS5Eb2N0eXBlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRG9tSGFuZGxlciA9IHZvaWQgMDtcbnZhciBkb21lbGVtZW50dHlwZV8xID0gcmVxdWlyZShcImRvbWVsZW1lbnR0eXBlXCIpO1xudmFyIG5vZGVfMSA9IHJlcXVpcmUoXCIuL25vZGVcIik7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vbm9kZVwiKSwgZXhwb3J0cyk7XG52YXIgcmVXaGl0ZXNwYWNlID0gL1xccysvZztcbi8vIERlZmF1bHQgb3B0aW9uc1xudmFyIGRlZmF1bHRPcHRzID0ge1xuICAgIG5vcm1hbGl6ZVdoaXRlc3BhY2U6IGZhbHNlLFxuICAgIHdpdGhTdGFydEluZGljZXM6IGZhbHNlLFxuICAgIHdpdGhFbmRJbmRpY2VzOiBmYWxzZSxcbiAgICB4bWxNb2RlOiBmYWxzZSxcbn07XG52YXIgRG9tSGFuZGxlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGVkIG9uY2UgcGFyc2luZyBoYXMgY29tcGxldGVkLlxuICAgICAqIEBwYXJhbSBvcHRpb25zIFNldHRpbmdzIGZvciB0aGUgaGFuZGxlci5cbiAgICAgKiBAcGFyYW0gZWxlbWVudENCIENhbGxiYWNrIHdoZW5ldmVyIGEgdGFnIGlzIGNsb3NlZC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBEb21IYW5kbGVyKGNhbGxiYWNrLCBvcHRpb25zLCBlbGVtZW50Q0IpIHtcbiAgICAgICAgLyoqIFRoZSBlbGVtZW50cyBvZiB0aGUgRE9NICovXG4gICAgICAgIHRoaXMuZG9tID0gW107XG4gICAgICAgIC8qKiBUaGUgcm9vdCBlbGVtZW50IGZvciB0aGUgRE9NICovXG4gICAgICAgIHRoaXMucm9vdCA9IG5ldyBub2RlXzEuRG9jdW1lbnQodGhpcy5kb20pO1xuICAgICAgICAvKiogSW5kaWNhdGVkIHdoZXRoZXIgcGFyc2luZyBoYXMgYmVlbiBjb21wbGV0ZWQuICovXG4gICAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgICAvKiogU3RhY2sgb2Ygb3BlbiB0YWdzLiAqL1xuICAgICAgICB0aGlzLnRhZ1N0YWNrID0gW3RoaXMucm9vdF07XG4gICAgICAgIC8qKiBBIGRhdGEgbm9kZSB0aGF0IGlzIHN0aWxsIGJlaW5nIHdyaXR0ZW4gdG8uICovXG4gICAgICAgIHRoaXMubGFzdE5vZGUgPSBudWxsO1xuICAgICAgICAvKiogUmVmZXJlbmNlIHRvIHRoZSBwYXJzZXIgaW5zdGFuY2UuIFVzZWQgZm9yIGxvY2F0aW9uIGluZm9ybWF0aW9uLiAqL1xuICAgICAgICB0aGlzLnBhcnNlciA9IG51bGw7XG4gICAgICAgIC8vIE1ha2UgaXQgcG9zc2libGUgdG8gc2tpcCBhcmd1bWVudHMsIGZvciBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eVxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgZWxlbWVudENCID0gb3B0aW9ucztcbiAgICAgICAgICAgIG9wdGlvbnMgPSBkZWZhdWx0T3B0cztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gY2FsbGJhY2s7XG4gICAgICAgICAgICBjYWxsYmFjayA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2sgIT09IG51bGwgJiYgY2FsbGJhY2sgIT09IHZvaWQgMCA/IGNhbGxiYWNrIDogbnVsbDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgPyBvcHRpb25zIDogZGVmYXVsdE9wdHM7XG4gICAgICAgIHRoaXMuZWxlbWVudENCID0gZWxlbWVudENCICE9PSBudWxsICYmIGVsZW1lbnRDQiAhPT0gdm9pZCAwID8gZWxlbWVudENCIDogbnVsbDtcbiAgICB9XG4gICAgRG9tSGFuZGxlci5wcm90b3R5cGUub25wYXJzZXJpbml0ID0gZnVuY3Rpb24gKHBhcnNlcikge1xuICAgICAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgICB9O1xuICAgIC8vIFJlc2V0cyB0aGUgaGFuZGxlciBiYWNrIHRvIHN0YXJ0aW5nIHN0YXRlXG4gICAgRG9tSGFuZGxlci5wcm90b3R5cGUub25yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kb20gPSBbXTtcbiAgICAgICAgdGhpcy5yb290ID0gbmV3IG5vZGVfMS5Eb2N1bWVudCh0aGlzLmRvbSk7XG4gICAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRhZ1N0YWNrID0gW3RoaXMucm9vdF07XG4gICAgICAgIHRoaXMubGFzdE5vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLnBhcnNlciA9IG51bGw7XG4gICAgfTtcbiAgICAvLyBTaWduYWxzIHRoZSBoYW5kbGVyIHRoYXQgcGFyc2luZyBpcyBkb25lXG4gICAgRG9tSGFuZGxlci5wcm90b3R5cGUub25lbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmRvbmUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG4gICAgICAgIHRoaXMucGFyc2VyID0gbnVsbDtcbiAgICAgICAgdGhpcy5oYW5kbGVDYWxsYmFjayhudWxsKTtcbiAgICB9O1xuICAgIERvbUhhbmRsZXIucHJvdG90eXBlLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVDYWxsYmFjayhlcnJvcik7XG4gICAgfTtcbiAgICBEb21IYW5kbGVyLnByb3RvdHlwZS5vbmNsb3NldGFnID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmxhc3ROb2RlID0gbnVsbDtcbiAgICAgICAgdmFyIGVsZW0gPSB0aGlzLnRhZ1N0YWNrLnBvcCgpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLndpdGhFbmRJbmRpY2VzKSB7XG4gICAgICAgICAgICBlbGVtLmVuZEluZGV4ID0gdGhpcy5wYXJzZXIuZW5kSW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudENCKVxuICAgICAgICAgICAgdGhpcy5lbGVtZW50Q0IoZWxlbSk7XG4gICAgfTtcbiAgICBEb21IYW5kbGVyLnByb3RvdHlwZS5vbm9wZW50YWcgPSBmdW5jdGlvbiAobmFtZSwgYXR0cmlicykge1xuICAgICAgICB2YXIgdHlwZSA9IHRoaXMub3B0aW9ucy54bWxNb2RlID8gZG9tZWxlbWVudHR5cGVfMS5FbGVtZW50VHlwZS5UYWcgOiB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBlbGVtZW50ID0gbmV3IG5vZGVfMS5FbGVtZW50KG5hbWUsIGF0dHJpYnMsIHVuZGVmaW5lZCwgdHlwZSk7XG4gICAgICAgIHRoaXMuYWRkTm9kZShlbGVtZW50KTtcbiAgICAgICAgdGhpcy50YWdTdGFjay5wdXNoKGVsZW1lbnQpO1xuICAgIH07XG4gICAgRG9tSGFuZGxlci5wcm90b3R5cGUub250ZXh0ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIG5vcm1hbGl6ZVdoaXRlc3BhY2UgPSB0aGlzLm9wdGlvbnMubm9ybWFsaXplV2hpdGVzcGFjZTtcbiAgICAgICAgdmFyIGxhc3ROb2RlID0gdGhpcy5sYXN0Tm9kZTtcbiAgICAgICAgaWYgKGxhc3ROb2RlICYmIGxhc3ROb2RlLnR5cGUgPT09IGRvbWVsZW1lbnR0eXBlXzEuRWxlbWVudFR5cGUuVGV4dCkge1xuICAgICAgICAgICAgaWYgKG5vcm1hbGl6ZVdoaXRlc3BhY2UpIHtcbiAgICAgICAgICAgICAgICBsYXN0Tm9kZS5kYXRhID0gKGxhc3ROb2RlLmRhdGEgKyBkYXRhKS5yZXBsYWNlKHJlV2hpdGVzcGFjZSwgXCIgXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGFzdE5vZGUuZGF0YSArPSBkYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy53aXRoRW5kSW5kaWNlcykge1xuICAgICAgICAgICAgICAgIGxhc3ROb2RlLmVuZEluZGV4ID0gdGhpcy5wYXJzZXIuZW5kSW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAobm9ybWFsaXplV2hpdGVzcGFjZSkge1xuICAgICAgICAgICAgICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UocmVXaGl0ZXNwYWNlLCBcIiBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBub2RlXzEuVGV4dChkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuYWRkTm9kZShub2RlKTtcbiAgICAgICAgICAgIHRoaXMubGFzdE5vZGUgPSBub2RlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEb21IYW5kbGVyLnByb3RvdHlwZS5vbmNvbW1lbnQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5sYXN0Tm9kZSAmJiB0aGlzLmxhc3ROb2RlLnR5cGUgPT09IGRvbWVsZW1lbnR0eXBlXzEuRWxlbWVudFR5cGUuQ29tbWVudCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0Tm9kZS5kYXRhICs9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgbm9kZV8xLkNvbW1lbnQoZGF0YSk7XG4gICAgICAgIHRoaXMuYWRkTm9kZShub2RlKTtcbiAgICAgICAgdGhpcy5sYXN0Tm9kZSA9IG5vZGU7XG4gICAgfTtcbiAgICBEb21IYW5kbGVyLnByb3RvdHlwZS5vbmNvbW1lbnRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubGFzdE5vZGUgPSBudWxsO1xuICAgIH07XG4gICAgRG9tSGFuZGxlci5wcm90b3R5cGUub25jZGF0YXN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdGV4dCA9IG5ldyBub2RlXzEuVGV4dChcIlwiKTtcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgbm9kZV8xLk5vZGVXaXRoQ2hpbGRyZW4oZG9tZWxlbWVudHR5cGVfMS5FbGVtZW50VHlwZS5DREFUQSwgW3RleHRdKTtcbiAgICAgICAgdGhpcy5hZGROb2RlKG5vZGUpO1xuICAgICAgICB0ZXh0LnBhcmVudCA9IG5vZGU7XG4gICAgICAgIHRoaXMubGFzdE5vZGUgPSB0ZXh0O1xuICAgIH07XG4gICAgRG9tSGFuZGxlci5wcm90b3R5cGUub25jZGF0YWVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5sYXN0Tm9kZSA9IG51bGw7XG4gICAgfTtcbiAgICBEb21IYW5kbGVyLnByb3RvdHlwZS5vbnByb2Nlc3NpbmdpbnN0cnVjdGlvbiA9IGZ1bmN0aW9uIChuYW1lLCBkYXRhKSB7XG4gICAgICAgIHZhciBub2RlID0gbmV3IG5vZGVfMS5Qcm9jZXNzaW5nSW5zdHJ1Y3Rpb24obmFtZSwgZGF0YSk7XG4gICAgICAgIHRoaXMuYWRkTm9kZShub2RlKTtcbiAgICB9O1xuICAgIERvbUhhbmRsZXIucHJvdG90eXBlLmhhbmRsZUNhbGxiYWNrID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5jYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKGVycm9yLCB0aGlzLmRvbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEb21IYW5kbGVyLnByb3RvdHlwZS5hZGROb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMudGFnU3RhY2tbdGhpcy50YWdTdGFjay5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIHByZXZpb3VzU2libGluZyA9IHBhcmVudC5jaGlsZHJlbltwYXJlbnQuY2hpbGRyZW4ubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMud2l0aFN0YXJ0SW5kaWNlcykge1xuICAgICAgICAgICAgbm9kZS5zdGFydEluZGV4ID0gdGhpcy5wYXJzZXIuc3RhcnRJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLndpdGhFbmRJbmRpY2VzKSB7XG4gICAgICAgICAgICBub2RlLmVuZEluZGV4ID0gdGhpcy5wYXJzZXIuZW5kSW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgcGFyZW50LmNoaWxkcmVuLnB1c2gobm9kZSk7XG4gICAgICAgIGlmIChwcmV2aW91c1NpYmxpbmcpIHtcbiAgICAgICAgICAgIG5vZGUucHJldiA9IHByZXZpb3VzU2libGluZztcbiAgICAgICAgICAgIHByZXZpb3VzU2libGluZy5uZXh0ID0gbm9kZTtcbiAgICAgICAgfVxuICAgICAgICBub2RlLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5sYXN0Tm9kZSA9IG51bGw7XG4gICAgfTtcbiAgICByZXR1cm4gRG9tSGFuZGxlcjtcbn0oKSk7XG5leHBvcnRzLkRvbUhhbmRsZXIgPSBEb21IYW5kbGVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gRG9tSGFuZGxlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNsb25lTm9kZSA9IGV4cG9ydHMuaGFzQ2hpbGRyZW4gPSBleHBvcnRzLmlzRG9jdW1lbnQgPSBleHBvcnRzLmlzRGlyZWN0aXZlID0gZXhwb3J0cy5pc0NvbW1lbnQgPSBleHBvcnRzLmlzVGV4dCA9IGV4cG9ydHMuaXNDREFUQSA9IGV4cG9ydHMuaXNUYWcgPSBleHBvcnRzLkVsZW1lbnQgPSBleHBvcnRzLkRvY3VtZW50ID0gZXhwb3J0cy5Ob2RlV2l0aENoaWxkcmVuID0gZXhwb3J0cy5Qcm9jZXNzaW5nSW5zdHJ1Y3Rpb24gPSBleHBvcnRzLkNvbW1lbnQgPSBleHBvcnRzLlRleHQgPSBleHBvcnRzLkRhdGFOb2RlID0gZXhwb3J0cy5Ob2RlID0gdm9pZCAwO1xudmFyIGRvbWVsZW1lbnR0eXBlXzEgPSByZXF1aXJlKFwiZG9tZWxlbWVudHR5cGVcIik7XG52YXIgbm9kZVR5cGVzID0gbmV3IE1hcChbXG4gICAgW2RvbWVsZW1lbnR0eXBlXzEuRWxlbWVudFR5cGUuVGFnLCAxXSxcbiAgICBbZG9tZWxlbWVudHR5cGVfMS5FbGVtZW50VHlwZS5TY3JpcHQsIDFdLFxuICAgIFtkb21lbGVtZW50dHlwZV8xLkVsZW1lbnRUeXBlLlN0eWxlLCAxXSxcbiAgICBbZG9tZWxlbWVudHR5cGVfMS5FbGVtZW50VHlwZS5EaXJlY3RpdmUsIDFdLFxuICAgIFtkb21lbGVtZW50dHlwZV8xLkVsZW1lbnRUeXBlLlRleHQsIDNdLFxuICAgIFtkb21lbGVtZW50dHlwZV8xLkVsZW1lbnRUeXBlLkNEQVRBLCA0XSxcbiAgICBbZG9tZWxlbWVudHR5cGVfMS5FbGVtZW50VHlwZS5Db21tZW50LCA4XSxcbiAgICBbZG9tZWxlbWVudHR5cGVfMS5FbGVtZW50VHlwZS5Sb290LCA5XSxcbl0pO1xuLyoqXG4gKiBUaGlzIG9iamVjdCB3aWxsIGJlIHVzZWQgYXMgdGhlIHByb3RvdHlwZSBmb3IgTm9kZXMgd2hlbiBjcmVhdGluZyBhXG4gKiBET00tTGV2ZWwtMS1jb21wbGlhbnQgc3RydWN0dXJlLlxuICovXG52YXIgTm9kZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIHRoZSBub2RlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIE5vZGUodHlwZSkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICAvKiogUGFyZW50IG9mIHRoZSBub2RlICovXG4gICAgICAgIHRoaXMucGFyZW50ID0gbnVsbDtcbiAgICAgICAgLyoqIFByZXZpb3VzIHNpYmxpbmcgKi9cbiAgICAgICAgdGhpcy5wcmV2ID0gbnVsbDtcbiAgICAgICAgLyoqIE5leHQgc2libGluZyAqL1xuICAgICAgICB0aGlzLm5leHQgPSBudWxsO1xuICAgICAgICAvKiogVGhlIHN0YXJ0IGluZGV4IG9mIHRoZSBub2RlLiBSZXF1aXJlcyBgd2l0aFN0YXJ0SW5kaWNlc2Agb24gdGhlIGhhbmRsZXIgdG8gYmUgYHRydWUuICovXG4gICAgICAgIHRoaXMuc3RhcnRJbmRleCA9IG51bGw7XG4gICAgICAgIC8qKiBUaGUgZW5kIGluZGV4IG9mIHRoZSBub2RlLiBSZXF1aXJlcyBgd2l0aEVuZEluZGljZXNgIG9uIHRoZSBoYW5kbGVyIHRvIGJlIGB0cnVlLiAqL1xuICAgICAgICB0aGlzLmVuZEluZGV4ID0gbnVsbDtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5vZGUucHJvdG90eXBlLCBcIm5vZGVUeXBlXCIsIHtcbiAgICAgICAgLy8gUmVhZC1vbmx5IGFsaWFzZXNcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFtET00gc3BlY10oaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNkb20tbm9kZS1ub2RldHlwZSktY29tcGF0aWJsZVxuICAgICAgICAgKiBub2RlIHtAbGluayB0eXBlfS5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgcmV0dXJuIChfYSA9IG5vZGVUeXBlcy5nZXQodGhpcy50eXBlKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogMTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb2RlLnByb3RvdHlwZSwgXCJwYXJlbnROb2RlXCIsIHtcbiAgICAgICAgLy8gUmVhZC13cml0ZSBhbGlhc2VzIGZvciBwcm9wZXJ0aWVzXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTYW1lIGFzIHtAbGluayBwYXJlbnR9LlxuICAgICAgICAgKiBbRE9NIHNwZWNdKGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZyktY29tcGF0aWJsZSBhbGlhcy5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChwYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5vZGUucHJvdG90eXBlLCBcInByZXZpb3VzU2libGluZ1wiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTYW1lIGFzIHtAbGluayBwcmV2fS5cbiAgICAgICAgICogW0RPTSBzcGVjXShodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcpLWNvbXBhdGlibGUgYWxpYXMuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByZXY7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHByZXYpIHtcbiAgICAgICAgICAgIHRoaXMucHJldiA9IHByZXY7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTm9kZS5wcm90b3R5cGUsIFwibmV4dFNpYmxpbmdcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2FtZSBhcyB7QGxpbmsgbmV4dH0uXG4gICAgICAgICAqIFtET00gc3BlY10oaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnKS1jb21wYXRpYmxlIGFsaWFzLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uZXh0O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICAgICAgICB0aGlzLm5leHQgPSBuZXh0O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQ2xvbmUgdGhpcyBub2RlLCBhbmQgb3B0aW9uYWxseSBpdHMgY2hpbGRyZW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVjdXJzaXZlIENsb25lIGNoaWxkIG5vZGVzIGFzIHdlbGwuXG4gICAgICogQHJldHVybnMgQSBjbG9uZSBvZiB0aGUgbm9kZS5cbiAgICAgKi9cbiAgICBOb2RlLnByb3RvdHlwZS5jbG9uZU5vZGUgPSBmdW5jdGlvbiAocmVjdXJzaXZlKSB7XG4gICAgICAgIGlmIChyZWN1cnNpdmUgPT09IHZvaWQgMCkgeyByZWN1cnNpdmUgPSBmYWxzZTsgfVxuICAgICAgICByZXR1cm4gY2xvbmVOb2RlKHRoaXMsIHJlY3Vyc2l2ZSk7XG4gICAgfTtcbiAgICByZXR1cm4gTm9kZTtcbn0oKSk7XG5leHBvcnRzLk5vZGUgPSBOb2RlO1xuLyoqXG4gKiBBIG5vZGUgdGhhdCBjb250YWlucyBzb21lIGRhdGEuXG4gKi9cbnZhciBEYXRhTm9kZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRGF0YU5vZGUsIF9zdXBlcik7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgdGhlIG5vZGVcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgY29udGVudCBvZiB0aGUgZGF0YSBub2RlXG4gICAgICovXG4gICAgZnVuY3Rpb24gRGF0YU5vZGUodHlwZSwgZGF0YSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0eXBlKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRGF0YU5vZGUucHJvdG90eXBlLCBcIm5vZGVWYWx1ZVwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTYW1lIGFzIHtAbGluayBkYXRhfS5cbiAgICAgICAgICogW0RPTSBzcGVjXShodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcpLWNvbXBhdGlibGUgYWxpYXMuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gRGF0YU5vZGU7XG59KE5vZGUpKTtcbmV4cG9ydHMuRGF0YU5vZGUgPSBEYXRhTm9kZTtcbi8qKlxuICogVGV4dCB3aXRoaW4gdGhlIGRvY3VtZW50LlxuICovXG52YXIgVGV4dCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVGV4dCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUZXh0KGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIGRvbWVsZW1lbnR0eXBlXzEuRWxlbWVudFR5cGUuVGV4dCwgZGF0YSkgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFRleHQ7XG59KERhdGFOb2RlKSk7XG5leHBvcnRzLlRleHQgPSBUZXh0O1xuLyoqXG4gKiBDb21tZW50cyB3aXRoaW4gdGhlIGRvY3VtZW50LlxuICovXG52YXIgQ29tbWVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ29tbWVudCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb21tZW50KGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIGRvbWVsZW1lbnR0eXBlXzEuRWxlbWVudFR5cGUuQ29tbWVudCwgZGF0YSkgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIENvbW1lbnQ7XG59KERhdGFOb2RlKSk7XG5leHBvcnRzLkNvbW1lbnQgPSBDb21tZW50O1xuLyoqXG4gKiBQcm9jZXNzaW5nIGluc3RydWN0aW9ucywgaW5jbHVkaW5nIGRvYyB0eXBlcy5cbiAqL1xudmFyIFByb2Nlc3NpbmdJbnN0cnVjdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUHJvY2Vzc2luZ0luc3RydWN0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFByb2Nlc3NpbmdJbnN0cnVjdGlvbihuYW1lLCBkYXRhKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRvbWVsZW1lbnR0eXBlXzEuRWxlbWVudFR5cGUuRGlyZWN0aXZlLCBkYXRhKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gUHJvY2Vzc2luZ0luc3RydWN0aW9uO1xufShEYXRhTm9kZSkpO1xuZXhwb3J0cy5Qcm9jZXNzaW5nSW5zdHJ1Y3Rpb24gPSBQcm9jZXNzaW5nSW5zdHJ1Y3Rpb247XG4vKipcbiAqIEEgYE5vZGVgIHRoYXQgY2FuIGhhdmUgY2hpbGRyZW4uXG4gKi9cbnZhciBOb2RlV2l0aENoaWxkcmVuID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhOb2RlV2l0aENoaWxkcmVuLCBfc3VwZXIpO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB0eXBlIFR5cGUgb2YgdGhlIG5vZGUuXG4gICAgICogQHBhcmFtIGNoaWxkcmVuIENoaWxkcmVuIG9mIHRoZSBub2RlLiBPbmx5IGNlcnRhaW4gbm9kZSB0eXBlcyBjYW4gaGF2ZSBjaGlsZHJlbi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBOb2RlV2l0aENoaWxkcmVuKHR5cGUsIGNoaWxkcmVuKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHR5cGUpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5vZGVXaXRoQ2hpbGRyZW4ucHJvdG90eXBlLCBcImZpcnN0Q2hpbGRcIiwge1xuICAgICAgICAvLyBBbGlhc2VzXG4gICAgICAgIC8qKiBGaXJzdCBjaGlsZCBvZiB0aGUgbm9kZS4gKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICByZXR1cm4gKF9hID0gdGhpcy5jaGlsZHJlblswXSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb2RlV2l0aENoaWxkcmVuLnByb3RvdHlwZSwgXCJsYXN0Q2hpbGRcIiwge1xuICAgICAgICAvKiogTGFzdCBjaGlsZCBvZiB0aGUgbm9kZS4gKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgPyB0aGlzLmNoaWxkcmVuW3RoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTm9kZVdpdGhDaGlsZHJlbi5wcm90b3R5cGUsIFwiY2hpbGROb2Rlc1wiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTYW1lIGFzIHtAbGluayBjaGlsZHJlbn0uXG4gICAgICAgICAqIFtET00gc3BlY10oaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnKS1jb21wYXRpYmxlIGFsaWFzLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBOb2RlV2l0aENoaWxkcmVuO1xufShOb2RlKSk7XG5leHBvcnRzLk5vZGVXaXRoQ2hpbGRyZW4gPSBOb2RlV2l0aENoaWxkcmVuO1xuLyoqXG4gKiBUaGUgcm9vdCBub2RlIG9mIHRoZSBkb2N1bWVudC5cbiAqL1xudmFyIERvY3VtZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhEb2N1bWVudCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBEb2N1bWVudChjaGlsZHJlbikge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgZG9tZWxlbWVudHR5cGVfMS5FbGVtZW50VHlwZS5Sb290LCBjaGlsZHJlbikgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIERvY3VtZW50O1xufShOb2RlV2l0aENoaWxkcmVuKSk7XG5leHBvcnRzLkRvY3VtZW50ID0gRG9jdW1lbnQ7XG4vKipcbiAqIEFuIGVsZW1lbnQgd2l0aGluIHRoZSBET00uXG4gKi9cbnZhciBFbGVtZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhFbGVtZW50LCBfc3VwZXIpO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIHRhZywgZWcuIGBkaXZgLCBgc3BhbmAuXG4gICAgICogQHBhcmFtIGF0dHJpYnMgT2JqZWN0IG1hcHBpbmcgYXR0cmlidXRlIG5hbWVzIHRvIGF0dHJpYnV0ZSB2YWx1ZXMuXG4gICAgICogQHBhcmFtIGNoaWxkcmVuIENoaWxkcmVuIG9mIHRoZSBub2RlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEVsZW1lbnQobmFtZSwgYXR0cmlicywgY2hpbGRyZW4sIHR5cGUpIHtcbiAgICAgICAgaWYgKGNoaWxkcmVuID09PSB2b2lkIDApIHsgY2hpbGRyZW4gPSBbXTsgfVxuICAgICAgICBpZiAodHlwZSA9PT0gdm9pZCAwKSB7IHR5cGUgPSBuYW1lID09PSBcInNjcmlwdFwiXG4gICAgICAgICAgICA/IGRvbWVsZW1lbnR0eXBlXzEuRWxlbWVudFR5cGUuU2NyaXB0XG4gICAgICAgICAgICA6IG5hbWUgPT09IFwic3R5bGVcIlxuICAgICAgICAgICAgICAgID8gZG9tZWxlbWVudHR5cGVfMS5FbGVtZW50VHlwZS5TdHlsZVxuICAgICAgICAgICAgICAgIDogZG9tZWxlbWVudHR5cGVfMS5FbGVtZW50VHlwZS5UYWc7IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHlwZSwgY2hpbGRyZW4pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICBfdGhpcy5hdHRyaWJzID0gYXR0cmlicztcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRWxlbWVudC5wcm90b3R5cGUsIFwidGFnTmFtZVwiLCB7XG4gICAgICAgIC8vIERPTSBMZXZlbCAxIGFsaWFzZXNcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNhbWUgYXMge0BsaW5rIG5hbWV9LlxuICAgICAgICAgKiBbRE9NIHNwZWNdKGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZyktY29tcGF0aWJsZSBhbGlhcy5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbGVtZW50LnByb3RvdHlwZSwgXCJhdHRyaWJ1dGVzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuYXR0cmlicykubWFwKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF90aGlzLmF0dHJpYnNbbmFtZV0sXG4gICAgICAgICAgICAgICAgICAgIG5hbWVzcGFjZTogKF9hID0gX3RoaXNbXCJ4LWF0dHJpYnNOYW1lc3BhY2VcIl0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVtuYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4OiAoX2IgPSBfdGhpc1tcIngtYXR0cmlic1ByZWZpeFwiXSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iW25hbWVdLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gRWxlbWVudDtcbn0oTm9kZVdpdGhDaGlsZHJlbikpO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbi8qKlxuICogQHBhcmFtIG5vZGUgTm9kZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgbm9kZSBpcyBhIGBFbGVtZW50YCwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKi9cbmZ1bmN0aW9uIGlzVGFnKG5vZGUpIHtcbiAgICByZXR1cm4gKDAsIGRvbWVsZW1lbnR0eXBlXzEuaXNUYWcpKG5vZGUpO1xufVxuZXhwb3J0cy5pc1RhZyA9IGlzVGFnO1xuLyoqXG4gKiBAcGFyYW0gbm9kZSBOb2RlIHRvIGNoZWNrLlxuICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBub2RlIGhhcyB0aGUgdHlwZSBgQ0RBVEFgLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqL1xuZnVuY3Rpb24gaXNDREFUQShub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUudHlwZSA9PT0gZG9tZWxlbWVudHR5cGVfMS5FbGVtZW50VHlwZS5DREFUQTtcbn1cbmV4cG9ydHMuaXNDREFUQSA9IGlzQ0RBVEE7XG4vKipcbiAqIEBwYXJhbSBub2RlIE5vZGUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG5vZGUgaGFzIHRoZSB0eXBlIGBUZXh0YCwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKi9cbmZ1bmN0aW9uIGlzVGV4dChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUudHlwZSA9PT0gZG9tZWxlbWVudHR5cGVfMS5FbGVtZW50VHlwZS5UZXh0O1xufVxuZXhwb3J0cy5pc1RleHQgPSBpc1RleHQ7XG4vKipcbiAqIEBwYXJhbSBub2RlIE5vZGUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG5vZGUgaGFzIHRoZSB0eXBlIGBDb21tZW50YCwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKi9cbmZ1bmN0aW9uIGlzQ29tbWVudChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUudHlwZSA9PT0gZG9tZWxlbWVudHR5cGVfMS5FbGVtZW50VHlwZS5Db21tZW50O1xufVxuZXhwb3J0cy5pc0NvbW1lbnQgPSBpc0NvbW1lbnQ7XG4vKipcbiAqIEBwYXJhbSBub2RlIE5vZGUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG5vZGUgaGFzIHRoZSB0eXBlIGBQcm9jZXNzaW5nSW5zdHJ1Y3Rpb25gLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqL1xuZnVuY3Rpb24gaXNEaXJlY3RpdmUobm9kZSkge1xuICAgIHJldHVybiBub2RlLnR5cGUgPT09IGRvbWVsZW1lbnR0eXBlXzEuRWxlbWVudFR5cGUuRGlyZWN0aXZlO1xufVxuZXhwb3J0cy5pc0RpcmVjdGl2ZSA9IGlzRGlyZWN0aXZlO1xuLyoqXG4gKiBAcGFyYW0gbm9kZSBOb2RlIHRvIGNoZWNrLlxuICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBub2RlIGhhcyB0aGUgdHlwZSBgUHJvY2Vzc2luZ0luc3RydWN0aW9uYCwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKi9cbmZ1bmN0aW9uIGlzRG9jdW1lbnQobm9kZSkge1xuICAgIHJldHVybiBub2RlLnR5cGUgPT09IGRvbWVsZW1lbnR0eXBlXzEuRWxlbWVudFR5cGUuUm9vdDtcbn1cbmV4cG9ydHMuaXNEb2N1bWVudCA9IGlzRG9jdW1lbnQ7XG4vKipcbiAqIEBwYXJhbSBub2RlIE5vZGUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG5vZGUgaXMgYSBgTm9kZVdpdGhDaGlsZHJlbmAgKGhhcyBjaGlsZHJlbiksIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICovXG5mdW5jdGlvbiBoYXNDaGlsZHJlbihub2RlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChub2RlLCBcImNoaWxkcmVuXCIpO1xufVxuZXhwb3J0cy5oYXNDaGlsZHJlbiA9IGhhc0NoaWxkcmVuO1xuLyoqXG4gKiBDbG9uZSBhIG5vZGUsIGFuZCBvcHRpb25hbGx5IGl0cyBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0gcmVjdXJzaXZlIENsb25lIGNoaWxkIG5vZGVzIGFzIHdlbGwuXG4gKiBAcmV0dXJucyBBIGNsb25lIG9mIHRoZSBub2RlLlxuICovXG5mdW5jdGlvbiBjbG9uZU5vZGUobm9kZSwgcmVjdXJzaXZlKSB7XG4gICAgaWYgKHJlY3Vyc2l2ZSA9PT0gdm9pZCAwKSB7IHJlY3Vyc2l2ZSA9IGZhbHNlOyB9XG4gICAgdmFyIHJlc3VsdDtcbiAgICBpZiAoaXNUZXh0KG5vZGUpKSB7XG4gICAgICAgIHJlc3VsdCA9IG5ldyBUZXh0KG5vZGUuZGF0YSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzQ29tbWVudChub2RlKSkge1xuICAgICAgICByZXN1bHQgPSBuZXcgQ29tbWVudChub2RlLmRhdGEpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc1RhZyhub2RlKSkge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSByZWN1cnNpdmUgPyBjbG9uZUNoaWxkcmVuKG5vZGUuY2hpbGRyZW4pIDogW107XG4gICAgICAgIHZhciBjbG9uZV8xID0gbmV3IEVsZW1lbnQobm9kZS5uYW1lLCBfX2Fzc2lnbih7fSwgbm9kZS5hdHRyaWJzKSwgY2hpbGRyZW4pO1xuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gKGNoaWxkLnBhcmVudCA9IGNsb25lXzEpOyB9KTtcbiAgICAgICAgaWYgKG5vZGUubmFtZXNwYWNlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNsb25lXzEubmFtZXNwYWNlID0gbm9kZS5uYW1lc3BhY2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGVbXCJ4LWF0dHJpYnNOYW1lc3BhY2VcIl0pIHtcbiAgICAgICAgICAgIGNsb25lXzFbXCJ4LWF0dHJpYnNOYW1lc3BhY2VcIl0gPSBfX2Fzc2lnbih7fSwgbm9kZVtcIngtYXR0cmlic05hbWVzcGFjZVwiXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGVbXCJ4LWF0dHJpYnNQcmVmaXhcIl0pIHtcbiAgICAgICAgICAgIGNsb25lXzFbXCJ4LWF0dHJpYnNQcmVmaXhcIl0gPSBfX2Fzc2lnbih7fSwgbm9kZVtcIngtYXR0cmlic1ByZWZpeFwiXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gY2xvbmVfMTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNDREFUQShub2RlKSkge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSByZWN1cnNpdmUgPyBjbG9uZUNoaWxkcmVuKG5vZGUuY2hpbGRyZW4pIDogW107XG4gICAgICAgIHZhciBjbG9uZV8yID0gbmV3IE5vZGVXaXRoQ2hpbGRyZW4oZG9tZWxlbWVudHR5cGVfMS5FbGVtZW50VHlwZS5DREFUQSwgY2hpbGRyZW4pO1xuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gKGNoaWxkLnBhcmVudCA9IGNsb25lXzIpOyB9KTtcbiAgICAgICAgcmVzdWx0ID0gY2xvbmVfMjtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNEb2N1bWVudChub2RlKSkge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSByZWN1cnNpdmUgPyBjbG9uZUNoaWxkcmVuKG5vZGUuY2hpbGRyZW4pIDogW107XG4gICAgICAgIHZhciBjbG9uZV8zID0gbmV3IERvY3VtZW50KGNoaWxkcmVuKTtcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIChjaGlsZC5wYXJlbnQgPSBjbG9uZV8zKTsgfSk7XG4gICAgICAgIGlmIChub2RlW1wieC1tb2RlXCJdKSB7XG4gICAgICAgICAgICBjbG9uZV8zW1wieC1tb2RlXCJdID0gbm9kZVtcIngtbW9kZVwiXTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSBjbG9uZV8zO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0RpcmVjdGl2ZShub2RlKSkge1xuICAgICAgICB2YXIgaW5zdHJ1Y3Rpb24gPSBuZXcgUHJvY2Vzc2luZ0luc3RydWN0aW9uKG5vZGUubmFtZSwgbm9kZS5kYXRhKTtcbiAgICAgICAgaWYgKG5vZGVbXCJ4LW5hbWVcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgaW5zdHJ1Y3Rpb25bXCJ4LW5hbWVcIl0gPSBub2RlW1wieC1uYW1lXCJdO1xuICAgICAgICAgICAgaW5zdHJ1Y3Rpb25bXCJ4LXB1YmxpY0lkXCJdID0gbm9kZVtcIngtcHVibGljSWRcIl07XG4gICAgICAgICAgICBpbnN0cnVjdGlvbltcIngtc3lzdGVtSWRcIl0gPSBub2RlW1wieC1zeXN0ZW1JZFwiXTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSBpbnN0cnVjdGlvbjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZCB5ZXQ6IFwiLmNvbmNhdChub2RlLnR5cGUpKTtcbiAgICB9XG4gICAgcmVzdWx0LnN0YXJ0SW5kZXggPSBub2RlLnN0YXJ0SW5kZXg7XG4gICAgcmVzdWx0LmVuZEluZGV4ID0gbm9kZS5lbmRJbmRleDtcbiAgICBpZiAobm9kZS5zb3VyY2VDb2RlTG9jYXRpb24gIT0gbnVsbCkge1xuICAgICAgICByZXN1bHQuc291cmNlQ29kZUxvY2F0aW9uID0gbm9kZS5zb3VyY2VDb2RlTG9jYXRpb247XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLmNsb25lTm9kZSA9IGNsb25lTm9kZTtcbmZ1bmN0aW9uIGNsb25lQ2hpbGRyZW4oY2hpbGRzKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gY2hpbGRzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIGNsb25lTm9kZShjaGlsZCwgdHJ1ZSk7IH0pO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2hpbGRyZW5baV0ucHJldiA9IGNoaWxkcmVuW2kgLSAxXTtcbiAgICAgICAgY2hpbGRyZW5baSAtIDFdLm5leHQgPSBjaGlsZHJlbltpXTtcbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldEZlZWQgPSB2b2lkIDA7XG52YXIgc3RyaW5naWZ5XzEgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnlcIik7XG52YXIgbGVnYWN5XzEgPSByZXF1aXJlKFwiLi9sZWdhY3lcIik7XG4vKipcbiAqIEdldCB0aGUgZmVlZCBvYmplY3QgZnJvbSB0aGUgcm9vdCBvZiBhIERPTSB0cmVlLlxuICpcbiAqIEBwYXJhbSBkb2MgLSBUaGUgRE9NIHRvIHRvIGV4dHJhY3QgdGhlIGZlZWQgZnJvbS5cbiAqIEByZXR1cm5zIFRoZSBmZWVkLlxuICovXG5mdW5jdGlvbiBnZXRGZWVkKGRvYykge1xuICAgIHZhciBmZWVkUm9vdCA9IGdldE9uZUVsZW1lbnQoaXNWYWxpZEZlZWQsIGRvYyk7XG4gICAgcmV0dXJuICFmZWVkUm9vdFxuICAgICAgICA/IG51bGxcbiAgICAgICAgOiBmZWVkUm9vdC5uYW1lID09PSBcImZlZWRcIlxuICAgICAgICAgICAgPyBnZXRBdG9tRmVlZChmZWVkUm9vdClcbiAgICAgICAgICAgIDogZ2V0UnNzRmVlZChmZWVkUm9vdCk7XG59XG5leHBvcnRzLmdldEZlZWQgPSBnZXRGZWVkO1xuLyoqXG4gKiBQYXJzZSBhbiBBdG9tIGZlZWQuXG4gKlxuICogQHBhcmFtIGZlZWRSb290IFRoZSByb290IG9mIHRoZSBmZWVkLlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBmZWVkLlxuICovXG5mdW5jdGlvbiBnZXRBdG9tRmVlZChmZWVkUm9vdCkge1xuICAgIHZhciBfYTtcbiAgICB2YXIgY2hpbGRzID0gZmVlZFJvb3QuY2hpbGRyZW47XG4gICAgdmFyIGZlZWQgPSB7XG4gICAgICAgIHR5cGU6IFwiYXRvbVwiLFxuICAgICAgICBpdGVtczogKDAsIGxlZ2FjeV8xLmdldEVsZW1lbnRzQnlUYWdOYW1lKShcImVudHJ5XCIsIGNoaWxkcykubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSBpdGVtLmNoaWxkcmVuO1xuICAgICAgICAgICAgdmFyIGVudHJ5ID0geyBtZWRpYTogZ2V0TWVkaWFFbGVtZW50cyhjaGlsZHJlbikgfTtcbiAgICAgICAgICAgIGFkZENvbmRpdGlvbmFsbHkoZW50cnksIFwiaWRcIiwgXCJpZFwiLCBjaGlsZHJlbik7XG4gICAgICAgICAgICBhZGRDb25kaXRpb25hbGx5KGVudHJ5LCBcInRpdGxlXCIsIFwidGl0bGVcIiwgY2hpbGRyZW4pO1xuICAgICAgICAgICAgdmFyIGhyZWYgPSAoX2EgPSBnZXRPbmVFbGVtZW50KFwibGlua1wiLCBjaGlsZHJlbikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hdHRyaWJzLmhyZWY7XG4gICAgICAgICAgICBpZiAoaHJlZikge1xuICAgICAgICAgICAgICAgIGVudHJ5LmxpbmsgPSBocmVmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGRlc2NyaXB0aW9uID0gZmV0Y2goXCJzdW1tYXJ5XCIsIGNoaWxkcmVuKSB8fCBmZXRjaChcImNvbnRlbnRcIiwgY2hpbGRyZW4pO1xuICAgICAgICAgICAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgZW50cnkuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwdWJEYXRlID0gZmV0Y2goXCJ1cGRhdGVkXCIsIGNoaWxkcmVuKTtcbiAgICAgICAgICAgIGlmIChwdWJEYXRlKSB7XG4gICAgICAgICAgICAgICAgZW50cnkucHViRGF0ZSA9IG5ldyBEYXRlKHB1YkRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICB9KSxcbiAgICB9O1xuICAgIGFkZENvbmRpdGlvbmFsbHkoZmVlZCwgXCJpZFwiLCBcImlkXCIsIGNoaWxkcyk7XG4gICAgYWRkQ29uZGl0aW9uYWxseShmZWVkLCBcInRpdGxlXCIsIFwidGl0bGVcIiwgY2hpbGRzKTtcbiAgICB2YXIgaHJlZiA9IChfYSA9IGdldE9uZUVsZW1lbnQoXCJsaW5rXCIsIGNoaWxkcykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hdHRyaWJzLmhyZWY7XG4gICAgaWYgKGhyZWYpIHtcbiAgICAgICAgZmVlZC5saW5rID0gaHJlZjtcbiAgICB9XG4gICAgYWRkQ29uZGl0aW9uYWxseShmZWVkLCBcImRlc2NyaXB0aW9uXCIsIFwic3VidGl0bGVcIiwgY2hpbGRzKTtcbiAgICB2YXIgdXBkYXRlZCA9IGZldGNoKFwidXBkYXRlZFwiLCBjaGlsZHMpO1xuICAgIGlmICh1cGRhdGVkKSB7XG4gICAgICAgIGZlZWQudXBkYXRlZCA9IG5ldyBEYXRlKHVwZGF0ZWQpO1xuICAgIH1cbiAgICBhZGRDb25kaXRpb25hbGx5KGZlZWQsIFwiYXV0aG9yXCIsIFwiZW1haWxcIiwgY2hpbGRzLCB0cnVlKTtcbiAgICByZXR1cm4gZmVlZDtcbn1cbi8qKlxuICogUGFyc2UgYSBSU1MgZmVlZC5cbiAqXG4gKiBAcGFyYW0gZmVlZFJvb3QgVGhlIHJvb3Qgb2YgdGhlIGZlZWQuXG4gKiBAcmV0dXJucyBUaGUgcGFyc2VkIGZlZWQuXG4gKi9cbmZ1bmN0aW9uIGdldFJzc0ZlZWQoZmVlZFJvb3QpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIHZhciBjaGlsZHMgPSAoX2IgPSAoX2EgPSBnZXRPbmVFbGVtZW50KFwiY2hhbm5lbFwiLCBmZWVkUm9vdC5jaGlsZHJlbikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jaGlsZHJlbikgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogW107XG4gICAgdmFyIGZlZWQgPSB7XG4gICAgICAgIHR5cGU6IGZlZWRSb290Lm5hbWUuc3Vic3RyKDAsIDMpLFxuICAgICAgICBpZDogXCJcIixcbiAgICAgICAgaXRlbXM6ICgwLCBsZWdhY3lfMS5nZXRFbGVtZW50c0J5VGFnTmFtZSkoXCJpdGVtXCIsIGZlZWRSb290LmNoaWxkcmVuKS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IGl0ZW0uY2hpbGRyZW47XG4gICAgICAgICAgICB2YXIgZW50cnkgPSB7IG1lZGlhOiBnZXRNZWRpYUVsZW1lbnRzKGNoaWxkcmVuKSB9O1xuICAgICAgICAgICAgYWRkQ29uZGl0aW9uYWxseShlbnRyeSwgXCJpZFwiLCBcImd1aWRcIiwgY2hpbGRyZW4pO1xuICAgICAgICAgICAgYWRkQ29uZGl0aW9uYWxseShlbnRyeSwgXCJ0aXRsZVwiLCBcInRpdGxlXCIsIGNoaWxkcmVuKTtcbiAgICAgICAgICAgIGFkZENvbmRpdGlvbmFsbHkoZW50cnksIFwibGlua1wiLCBcImxpbmtcIiwgY2hpbGRyZW4pO1xuICAgICAgICAgICAgYWRkQ29uZGl0aW9uYWxseShlbnRyeSwgXCJkZXNjcmlwdGlvblwiLCBcImRlc2NyaXB0aW9uXCIsIGNoaWxkcmVuKTtcbiAgICAgICAgICAgIHZhciBwdWJEYXRlID0gZmV0Y2goXCJwdWJEYXRlXCIsIGNoaWxkcmVuKTtcbiAgICAgICAgICAgIGlmIChwdWJEYXRlKVxuICAgICAgICAgICAgICAgIGVudHJ5LnB1YkRhdGUgPSBuZXcgRGF0ZShwdWJEYXRlKTtcbiAgICAgICAgICAgIHJldHVybiBlbnRyeTtcbiAgICAgICAgfSksXG4gICAgfTtcbiAgICBhZGRDb25kaXRpb25hbGx5KGZlZWQsIFwidGl0bGVcIiwgXCJ0aXRsZVwiLCBjaGlsZHMpO1xuICAgIGFkZENvbmRpdGlvbmFsbHkoZmVlZCwgXCJsaW5rXCIsIFwibGlua1wiLCBjaGlsZHMpO1xuICAgIGFkZENvbmRpdGlvbmFsbHkoZmVlZCwgXCJkZXNjcmlwdGlvblwiLCBcImRlc2NyaXB0aW9uXCIsIGNoaWxkcyk7XG4gICAgdmFyIHVwZGF0ZWQgPSBmZXRjaChcImxhc3RCdWlsZERhdGVcIiwgY2hpbGRzKTtcbiAgICBpZiAodXBkYXRlZCkge1xuICAgICAgICBmZWVkLnVwZGF0ZWQgPSBuZXcgRGF0ZSh1cGRhdGVkKTtcbiAgICB9XG4gICAgYWRkQ29uZGl0aW9uYWxseShmZWVkLCBcImF1dGhvclwiLCBcIm1hbmFnaW5nRWRpdG9yXCIsIGNoaWxkcywgdHJ1ZSk7XG4gICAgcmV0dXJuIGZlZWQ7XG59XG52YXIgTUVESUFfS0VZU19TVFJJTkcgPSBbXCJ1cmxcIiwgXCJ0eXBlXCIsIFwibGFuZ1wiXTtcbnZhciBNRURJQV9LRVlTX0lOVCA9IFtcbiAgICBcImZpbGVTaXplXCIsXG4gICAgXCJiaXRyYXRlXCIsXG4gICAgXCJmcmFtZXJhdGVcIixcbiAgICBcInNhbXBsaW5ncmF0ZVwiLFxuICAgIFwiY2hhbm5lbHNcIixcbiAgICBcImR1cmF0aW9uXCIsXG4gICAgXCJoZWlnaHRcIixcbiAgICBcIndpZHRoXCIsXG5dO1xuLyoqXG4gKiBHZXQgYWxsIG1lZGlhIGVsZW1lbnRzIG9mIGEgZmVlZCBpdGVtLlxuICpcbiAqIEBwYXJhbSB3aGVyZSBOb2RlcyB0byBzZWFyY2ggaW4uXG4gKiBAcmV0dXJucyBNZWRpYSBlbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gZ2V0TWVkaWFFbGVtZW50cyh3aGVyZSkge1xuICAgIHJldHVybiAoMCwgbGVnYWN5XzEuZ2V0RWxlbWVudHNCeVRhZ05hbWUpKFwibWVkaWE6Y29udGVudFwiLCB3aGVyZSkubWFwKGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgIHZhciBhdHRyaWJzID0gZWxlbS5hdHRyaWJzO1xuICAgICAgICB2YXIgbWVkaWEgPSB7XG4gICAgICAgICAgICBtZWRpdW06IGF0dHJpYnMubWVkaXVtLFxuICAgICAgICAgICAgaXNEZWZhdWx0OiAhIWF0dHJpYnMuaXNEZWZhdWx0LFxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIE1FRElBX0tFWVNfU1RSSU5HXzEgPSBNRURJQV9LRVlTX1NUUklORzsgX2kgPCBNRURJQV9LRVlTX1NUUklOR18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGF0dHJpYiA9IE1FRElBX0tFWVNfU1RSSU5HXzFbX2ldO1xuICAgICAgICAgICAgaWYgKGF0dHJpYnNbYXR0cmliXSkge1xuICAgICAgICAgICAgICAgIG1lZGlhW2F0dHJpYl0gPSBhdHRyaWJzW2F0dHJpYl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgX2EgPSAwLCBNRURJQV9LRVlTX0lOVF8xID0gTUVESUFfS0VZU19JTlQ7IF9hIDwgTUVESUFfS0VZU19JTlRfMS5sZW5ndGg7IF9hKyspIHtcbiAgICAgICAgICAgIHZhciBhdHRyaWIgPSBNRURJQV9LRVlTX0lOVF8xW19hXTtcbiAgICAgICAgICAgIGlmIChhdHRyaWJzW2F0dHJpYl0pIHtcbiAgICAgICAgICAgICAgICBtZWRpYVthdHRyaWJdID0gcGFyc2VJbnQoYXR0cmlic1thdHRyaWJdLCAxMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF0dHJpYnMuZXhwcmVzc2lvbikge1xuICAgICAgICAgICAgbWVkaWEuZXhwcmVzc2lvbiA9XG4gICAgICAgICAgICAgICAgYXR0cmlicy5leHByZXNzaW9uO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZWRpYTtcbiAgICB9KTtcbn1cbi8qKlxuICogR2V0IG9uZSBlbGVtZW50IGJ5IHRhZyBuYW1lLlxuICpcbiAqIEBwYXJhbSB0YWdOYW1lIFRhZyBuYW1lIHRvIGxvb2sgZm9yXG4gKiBAcGFyYW0gbm9kZSBOb2RlIHRvIHNlYXJjaCBpblxuICogQHJldHVybnMgVGhlIGVsZW1lbnQgb3IgbnVsbFxuICovXG5mdW5jdGlvbiBnZXRPbmVFbGVtZW50KHRhZ05hbWUsIG5vZGUpIHtcbiAgICByZXR1cm4gKDAsIGxlZ2FjeV8xLmdldEVsZW1lbnRzQnlUYWdOYW1lKSh0YWdOYW1lLCBub2RlLCB0cnVlLCAxKVswXTtcbn1cbi8qKlxuICogR2V0IHRoZSB0ZXh0IGNvbnRlbnQgb2YgYW4gZWxlbWVudCB3aXRoIGEgY2VydGFpbiB0YWcgbmFtZS5cbiAqXG4gKiBAcGFyYW0gdGFnTmFtZSBUYWcgbmFtZSB0byBsb29rIGZvci5cbiAqIEBwYXJhbSB3aGVyZSAgTm9kZSB0byBzZWFyY2ggaW4uXG4gKiBAcGFyYW0gcmVjdXJzZSBXaGV0aGVyIHRvIHJlY3Vyc2UgaW50byBjaGlsZCBub2Rlcy5cbiAqIEByZXR1cm5zIFRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIGVsZW1lbnQuXG4gKi9cbmZ1bmN0aW9uIGZldGNoKHRhZ05hbWUsIHdoZXJlLCByZWN1cnNlKSB7XG4gICAgaWYgKHJlY3Vyc2UgPT09IHZvaWQgMCkgeyByZWN1cnNlID0gZmFsc2U7IH1cbiAgICByZXR1cm4gKDAsIHN0cmluZ2lmeV8xLnRleHRDb250ZW50KSgoMCwgbGVnYWN5XzEuZ2V0RWxlbWVudHNCeVRhZ05hbWUpKHRhZ05hbWUsIHdoZXJlLCByZWN1cnNlLCAxKSkudHJpbSgpO1xufVxuLyoqXG4gKiBBZGRzIGEgcHJvcGVydHkgdG8gYW4gb2JqZWN0IGlmIGl0IGhhcyBhIHZhbHVlLlxuICpcbiAqIEBwYXJhbSBvYmogT2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0gcHJvcCBQcm9wZXJ0eSBuYW1lXG4gKiBAcGFyYW0gdGFnTmFtZSBUYWcgbmFtZSB0aGF0IGNvbnRhaW5zIHRoZSBjb25kaXRpb25hbGx5IGFkZGVkIHByb3BlcnR5XG4gKiBAcGFyYW0gd2hlcmUgRWxlbWVudCB0byBzZWFyY2ggZm9yIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHJlY3Vyc2UgV2hldGhlciB0byByZWN1cnNlIGludG8gY2hpbGQgbm9kZXMuXG4gKi9cbmZ1bmN0aW9uIGFkZENvbmRpdGlvbmFsbHkob2JqLCBwcm9wLCB0YWdOYW1lLCB3aGVyZSwgcmVjdXJzZSkge1xuICAgIGlmIChyZWN1cnNlID09PSB2b2lkIDApIHsgcmVjdXJzZSA9IGZhbHNlOyB9XG4gICAgdmFyIHZhbCA9IGZldGNoKHRhZ05hbWUsIHdoZXJlLCByZWN1cnNlKTtcbiAgICBpZiAodmFsKVxuICAgICAgICBvYmpbcHJvcF0gPSB2YWw7XG59XG4vKipcbiAqIENoZWNrcyBpZiBhbiBlbGVtZW50IGlzIGEgZmVlZCByb290IG5vZGUuXG4gKlxuICogQHBhcmFtIHZhbHVlIFRoZSBuYW1lIG9mIHRoZSBlbGVtZW50IHRvIGNoZWNrLlxuICogQHJldHVybnMgV2hldGhlciBhbiBlbGVtZW50IGlzIGEgZmVlZCByb290IG5vZGUuXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRGZWVkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBcInJzc1wiIHx8IHZhbHVlID09PSBcImZlZWRcIiB8fCB2YWx1ZSA9PT0gXCJyZGY6UkRGXCI7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudW5pcXVlU29ydCA9IGV4cG9ydHMuY29tcGFyZURvY3VtZW50UG9zaXRpb24gPSBleHBvcnRzLnJlbW92ZVN1YnNldHMgPSB2b2lkIDA7XG52YXIgZG9taGFuZGxlcl8xID0gcmVxdWlyZShcImRvbWhhbmRsZXJcIik7XG4vKipcbiAqIEdpdmVuIGFuIGFycmF5IG9mIG5vZGVzLCByZW1vdmUgYW55IG1lbWJlciB0aGF0IGlzIGNvbnRhaW5lZCBieSBhbm90aGVyLlxuICpcbiAqIEBwYXJhbSBub2RlcyBOb2RlcyB0byBmaWx0ZXIuXG4gKiBAcmV0dXJucyBSZW1haW5pbmcgbm9kZXMgdGhhdCBhcmVuJ3Qgc3VidHJlZXMgb2YgZWFjaCBvdGhlci5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlU3Vic2V0cyhub2Rlcykge1xuICAgIHZhciBpZHggPSBub2Rlcy5sZW5ndGg7XG4gICAgLypcbiAgICAgKiBDaGVjayBpZiBlYWNoIG5vZGUgKG9yIG9uZSBvZiBpdHMgYW5jZXN0b3JzKSBpcyBhbHJlYWR5IGNvbnRhaW5lZCBpbiB0aGVcbiAgICAgKiBhcnJheS5cbiAgICAgKi9cbiAgICB3aGlsZSAoLS1pZHggPj0gMCkge1xuICAgICAgICB2YXIgbm9kZSA9IG5vZGVzW2lkeF07XG4gICAgICAgIC8qXG4gICAgICAgICAqIFJlbW92ZSB0aGUgbm9kZSBpZiBpdCBpcyBub3QgdW5pcXVlLlxuICAgICAgICAgKiBXZSBhcmUgZ29pbmcgdGhyb3VnaCB0aGUgYXJyYXkgZnJvbSB0aGUgZW5kLCBzbyB3ZSBvbmx5XG4gICAgICAgICAqIGhhdmUgdG8gY2hlY2sgbm9kZXMgdGhhdCBwcmVjZWVkIHRoZSBub2RlIHVuZGVyIGNvbnNpZGVyYXRpb24gaW4gdGhlIGFycmF5LlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGlkeCA+IDAgJiYgbm9kZXMubGFzdEluZGV4T2Yobm9kZSwgaWR4IC0gMSkgPj0gMCkge1xuICAgICAgICAgICAgbm9kZXMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBhbmNlc3RvciA9IG5vZGUucGFyZW50OyBhbmNlc3RvcjsgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnQpIHtcbiAgICAgICAgICAgIGlmIChub2Rlcy5pbmNsdWRlcyhhbmNlc3RvcikpIHtcbiAgICAgICAgICAgICAgICBub2Rlcy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZXM7XG59XG5leHBvcnRzLnJlbW92ZVN1YnNldHMgPSByZW1vdmVTdWJzZXRzO1xuLyoqXG4gKiBDb21wYXJlIHRoZSBwb3NpdGlvbiBvZiBvbmUgbm9kZSBhZ2FpbnN0IGFub3RoZXIgbm9kZSBpbiBhbnkgb3RoZXIgZG9jdW1lbnQuXG4gKiBUaGUgcmV0dXJuIHZhbHVlIGlzIGEgYml0bWFzayB3aXRoIHRoZSBmb2xsb3dpbmcgdmFsdWVzOlxuICpcbiAqIERvY3VtZW50IG9yZGVyOlxuICogPiBUaGVyZSBpcyBhbiBvcmRlcmluZywgZG9jdW1lbnQgb3JkZXIsIGRlZmluZWQgb24gYWxsIHRoZSBub2RlcyBpbiB0aGVcbiAqID4gZG9jdW1lbnQgY29ycmVzcG9uZGluZyB0byB0aGUgb3JkZXIgaW4gd2hpY2ggdGhlIGZpcnN0IGNoYXJhY3RlciBvZiB0aGVcbiAqID4gWE1MIHJlcHJlc2VudGF0aW9uIG9mIGVhY2ggbm9kZSBvY2N1cnMgaW4gdGhlIFhNTCByZXByZXNlbnRhdGlvbiBvZiB0aGVcbiAqID4gZG9jdW1lbnQgYWZ0ZXIgZXhwYW5zaW9uIG9mIGdlbmVyYWwgZW50aXRpZXMuIFRodXMsIHRoZSBkb2N1bWVudCBlbGVtZW50XG4gKiA+IG5vZGUgd2lsbCBiZSB0aGUgZmlyc3Qgbm9kZS4gRWxlbWVudCBub2RlcyBvY2N1ciBiZWZvcmUgdGhlaXIgY2hpbGRyZW4uXG4gKiA+IFRodXMsIGRvY3VtZW50IG9yZGVyIG9yZGVycyBlbGVtZW50IG5vZGVzIGluIG9yZGVyIG9mIHRoZSBvY2N1cnJlbmNlIG9mXG4gKiA+IHRoZWlyIHN0YXJ0LXRhZyBpbiB0aGUgWE1MIChhZnRlciBleHBhbnNpb24gb2YgZW50aXRpZXMpLiBUaGUgYXR0cmlidXRlXG4gKiA+IG5vZGVzIG9mIGFuIGVsZW1lbnQgb2NjdXIgYWZ0ZXIgdGhlIGVsZW1lbnQgYW5kIGJlZm9yZSBpdHMgY2hpbGRyZW4uIFRoZVxuICogPiByZWxhdGl2ZSBvcmRlciBvZiBhdHRyaWJ1dGUgbm9kZXMgaXMgaW1wbGVtZW50YXRpb24tZGVwZW5kZW50Li9cbiAqXG4gKiBTb3VyY2U6XG4gKiBodHRwOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMy1Db3JlL2dsb3NzYXJ5Lmh0bWwjZHQtZG9jdW1lbnQtb3JkZXJcbiAqXG4gKiBAcGFyYW0gbm9kZUEgVGhlIGZpcnN0IG5vZGUgdG8gdXNlIGluIHRoZSBjb21wYXJpc29uXG4gKiBAcGFyYW0gbm9kZUIgVGhlIHNlY29uZCBub2RlIHRvIHVzZSBpbiB0aGUgY29tcGFyaXNvblxuICogQHJldHVybnMgQSBiaXRtYXNrIGRlc2NyaWJpbmcgdGhlIGlucHV0IG5vZGVzJyByZWxhdGl2ZSBwb3NpdGlvbi5cbiAqXG4gKiBTZWUgaHR0cDovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2RvbS1ub2RlLWNvbXBhcmVkb2N1bWVudHBvc2l0aW9uIGZvclxuICogYSBkZXNjcmlwdGlvbiBvZiB0aGVzZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIGNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG5vZGVBLCBub2RlQikge1xuICAgIHZhciBhUGFyZW50cyA9IFtdO1xuICAgIHZhciBiUGFyZW50cyA9IFtdO1xuICAgIGlmIChub2RlQSA9PT0gbm9kZUIpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHZhciBjdXJyZW50ID0gKDAsIGRvbWhhbmRsZXJfMS5oYXNDaGlsZHJlbikobm9kZUEpID8gbm9kZUEgOiBub2RlQS5wYXJlbnQ7XG4gICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgICAgYVBhcmVudHMudW5zaGlmdChjdXJyZW50KTtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50O1xuICAgIH1cbiAgICBjdXJyZW50ID0gKDAsIGRvbWhhbmRsZXJfMS5oYXNDaGlsZHJlbikobm9kZUIpID8gbm9kZUIgOiBub2RlQi5wYXJlbnQ7XG4gICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgICAgYlBhcmVudHMudW5zaGlmdChjdXJyZW50KTtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50O1xuICAgIH1cbiAgICB2YXIgbWF4SWR4ID0gTWF0aC5taW4oYVBhcmVudHMubGVuZ3RoLCBiUGFyZW50cy5sZW5ndGgpO1xuICAgIHZhciBpZHggPSAwO1xuICAgIHdoaWxlIChpZHggPCBtYXhJZHggJiYgYVBhcmVudHNbaWR4XSA9PT0gYlBhcmVudHNbaWR4XSkge1xuICAgICAgICBpZHgrKztcbiAgICB9XG4gICAgaWYgKGlkeCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMSAvKiBESVNDT05ORUNURUQgKi87XG4gICAgfVxuICAgIHZhciBzaGFyZWRQYXJlbnQgPSBhUGFyZW50c1tpZHggLSAxXTtcbiAgICB2YXIgc2libGluZ3MgPSBzaGFyZWRQYXJlbnQuY2hpbGRyZW47XG4gICAgdmFyIGFTaWJsaW5nID0gYVBhcmVudHNbaWR4XTtcbiAgICB2YXIgYlNpYmxpbmcgPSBiUGFyZW50c1tpZHhdO1xuICAgIGlmIChzaWJsaW5ncy5pbmRleE9mKGFTaWJsaW5nKSA+IHNpYmxpbmdzLmluZGV4T2YoYlNpYmxpbmcpKSB7XG4gICAgICAgIGlmIChzaGFyZWRQYXJlbnQgPT09IG5vZGVCKSB7XG4gICAgICAgICAgICByZXR1cm4gNCAvKiBGT0xMT1dJTkcgKi8gfCAxNiAvKiBDT05UQUlORURfQlkgKi87XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDQgLyogRk9MTE9XSU5HICovO1xuICAgIH1cbiAgICBpZiAoc2hhcmVkUGFyZW50ID09PSBub2RlQSkge1xuICAgICAgICByZXR1cm4gMiAvKiBQUkVDRURJTkcgKi8gfCA4IC8qIENPTlRBSU5TICovO1xuICAgIH1cbiAgICByZXR1cm4gMiAvKiBQUkVDRURJTkcgKi87XG59XG5leHBvcnRzLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uID0gY29tcGFyZURvY3VtZW50UG9zaXRpb247XG4vKipcbiAqIFNvcnQgYW4gYXJyYXkgb2Ygbm9kZXMgYmFzZWQgb24gdGhlaXIgcmVsYXRpdmUgcG9zaXRpb24gaW4gdGhlIGRvY3VtZW50IGFuZFxuICogcmVtb3ZlIGFueSBkdXBsaWNhdGUgbm9kZXMuIElmIHRoZSBhcnJheSBjb250YWlucyBub2RlcyB0aGF0IGRvIG5vdCBiZWxvbmdcbiAqIHRvIHRoZSBzYW1lIGRvY3VtZW50LCBzb3J0IG9yZGVyIGlzIHVuc3BlY2lmaWVkLlxuICpcbiAqIEBwYXJhbSBub2RlcyBBcnJheSBvZiBET00gbm9kZXMuXG4gKiBAcmV0dXJucyBDb2xsZWN0aW9uIG9mIHVuaXF1ZSBub2Rlcywgc29ydGVkIGluIGRvY3VtZW50IG9yZGVyLlxuICovXG5mdW5jdGlvbiB1bmlxdWVTb3J0KG5vZGVzKSB7XG4gICAgbm9kZXMgPSBub2Rlcy5maWx0ZXIoZnVuY3Rpb24gKG5vZGUsIGksIGFycikgeyByZXR1cm4gIWFyci5pbmNsdWRlcyhub2RlLCBpICsgMSk7IH0pO1xuICAgIG5vZGVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgdmFyIHJlbGF0aXZlID0gY29tcGFyZURvY3VtZW50UG9zaXRpb24oYSwgYik7XG4gICAgICAgIGlmIChyZWxhdGl2ZSAmIDIgLyogUFJFQ0VESU5HICovKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmVsYXRpdmUgJiA0IC8qIEZPTExPV0lORyAqLykge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5vZGVzO1xufVxuZXhwb3J0cy51bmlxdWVTb3J0ID0gdW5pcXVlU29ydDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhc0NoaWxkcmVuID0gZXhwb3J0cy5pc0RvY3VtZW50ID0gZXhwb3J0cy5pc0NvbW1lbnQgPSBleHBvcnRzLmlzVGV4dCA9IGV4cG9ydHMuaXNDREFUQSA9IGV4cG9ydHMuaXNUYWcgPSB2b2lkIDA7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vc3RyaW5naWZ5XCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90cmF2ZXJzYWxcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL21hbmlwdWxhdGlvblwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vcXVlcnlpbmdcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2xlZ2FjeVwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vaGVscGVyc1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZmVlZHNcIiksIGV4cG9ydHMpO1xuLyoqIEBkZXByZWNhdGVkIFVzZSB0aGVzZSBtZXRob2RzIGZyb20gYGRvbWhhbmRsZXJgIGRpcmVjdGx5LiAqL1xudmFyIGRvbWhhbmRsZXJfMSA9IHJlcXVpcmUoXCJkb21oYW5kbGVyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNUYWdcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvbWhhbmRsZXJfMS5pc1RhZzsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzQ0RBVEFcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvbWhhbmRsZXJfMS5pc0NEQVRBOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNUZXh0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb21oYW5kbGVyXzEuaXNUZXh0OyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNDb21tZW50XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb21oYW5kbGVyXzEuaXNDb21tZW50OyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNEb2N1bWVudFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9taGFuZGxlcl8xLmlzRG9jdW1lbnQ7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJoYXNDaGlsZHJlblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9taGFuZGxlcl8xLmhhc0NoaWxkcmVuOyB9IH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldEVsZW1lbnRzQnlUYWdUeXBlID0gZXhwb3J0cy5nZXRFbGVtZW50c0J5VGFnTmFtZSA9IGV4cG9ydHMuZ2V0RWxlbWVudEJ5SWQgPSBleHBvcnRzLmdldEVsZW1lbnRzID0gZXhwb3J0cy50ZXN0RWxlbWVudCA9IHZvaWQgMDtcbnZhciBkb21oYW5kbGVyXzEgPSByZXF1aXJlKFwiZG9taGFuZGxlclwiKTtcbnZhciBxdWVyeWluZ18xID0gcmVxdWlyZShcIi4vcXVlcnlpbmdcIik7XG52YXIgQ2hlY2tzID0ge1xuICAgIHRhZ19uYW1lOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBpZiAodHlwZW9mIG5hbWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiAoMCwgZG9taGFuZGxlcl8xLmlzVGFnKShlbGVtKSAmJiBuYW1lKGVsZW0ubmFtZSk7IH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBkb21oYW5kbGVyXzEuaXNUYWc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiAoMCwgZG9taGFuZGxlcl8xLmlzVGFnKShlbGVtKSAmJiBlbGVtLm5hbWUgPT09IG5hbWU7IH07XG4gICAgfSxcbiAgICB0YWdfdHlwZTogZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gdHlwZShlbGVtLnR5cGUpOyB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gZWxlbS50eXBlID09PSB0eXBlOyB9O1xuICAgIH0sXG4gICAgdGFnX2NvbnRhaW5zOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiAoMCwgZG9taGFuZGxlcl8xLmlzVGV4dCkoZWxlbSkgJiYgZGF0YShlbGVtLmRhdGEpOyB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gKDAsIGRvbWhhbmRsZXJfMS5pc1RleHQpKGVsZW0pICYmIGVsZW0uZGF0YSA9PT0gZGF0YTsgfTtcbiAgICB9LFxufTtcbi8qKlxuICogQHBhcmFtIGF0dHJpYiBBdHRyaWJ1dGUgdG8gY2hlY2suXG4gKiBAcGFyYW0gdmFsdWUgQXR0cmlidXRlIHZhbHVlIHRvIGxvb2sgZm9yLlxuICogQHJldHVybnMgQSBmdW5jdGlvbiB0byBjaGVjayB3aGV0aGVyIHRoZSBhIG5vZGUgaGFzIGFuIGF0dHJpYnV0ZSB3aXRoIGEgcGFydGljdWxhciB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0QXR0cmliQ2hlY2soYXR0cmliLCB2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuICgwLCBkb21oYW5kbGVyXzEuaXNUYWcpKGVsZW0pICYmIHZhbHVlKGVsZW0uYXR0cmlic1thdHRyaWJdKTsgfTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiAoMCwgZG9taGFuZGxlcl8xLmlzVGFnKShlbGVtKSAmJiBlbGVtLmF0dHJpYnNbYXR0cmliXSA9PT0gdmFsdWU7IH07XG59XG4vKipcbiAqIEBwYXJhbSBhIEZpcnN0IGZ1bmN0aW9uIHRvIGNvbWJpbmUuXG4gKiBAcGFyYW0gYiBTZWNvbmQgZnVuY3Rpb24gdG8gY29tYmluZS5cbiAqIEByZXR1cm5zIEEgZnVuY3Rpb24gdGFraW5nIGEgbm9kZSBhbmQgcmV0dXJuaW5nIGB0cnVlYCBpZiBlaXRoZXJcbiAqIG9mIHRoZSBpbnB1dCBmdW5jdGlvbnMgcmV0dXJucyBgdHJ1ZWAgZm9yIHRoZSBub2RlLlxuICovXG5mdW5jdGlvbiBjb21iaW5lRnVuY3MoYSwgYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gYShlbGVtKSB8fCBiKGVsZW0pOyB9O1xufVxuLyoqXG4gKiBAcGFyYW0gb3B0aW9ucyBBbiBvYmplY3QgZGVzY3JpYmluZyBub2RlcyB0byBsb29rIGZvci5cbiAqIEByZXR1cm5zIEEgZnVuY3Rpb24gZXhlY3V0aW5nIGFsbCBjaGVja3MgaW4gYG9wdGlvbnNgIGFuZCByZXR1cm5pbmcgYHRydWVgXG4gKiBpZiBhbnkgb2YgdGhlbSBtYXRjaCBhIG5vZGUuXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVUZXN0KG9wdGlvbnMpIHtcbiAgICB2YXIgZnVuY3MgPSBPYmplY3Qua2V5cyhvcHRpb25zKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBvcHRpb25zW2tleV07XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoQ2hlY2tzLCBrZXkpXG4gICAgICAgICAgICA/IENoZWNrc1trZXldKHZhbHVlKVxuICAgICAgICAgICAgOiBnZXRBdHRyaWJDaGVjayhrZXksIHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3MubGVuZ3RoID09PSAwID8gbnVsbCA6IGZ1bmNzLnJlZHVjZShjb21iaW5lRnVuY3MpO1xufVxuLyoqXG4gKiBAcGFyYW0gb3B0aW9ucyBBbiBvYmplY3QgZGVzY3JpYmluZyBub2RlcyB0byBsb29rIGZvci5cbiAqIEBwYXJhbSBub2RlIFRoZSBlbGVtZW50IHRvIHRlc3QuXG4gKiBAcmV0dXJucyBXaGV0aGVyIHRoZSBlbGVtZW50IG1hdGNoZXMgdGhlIGRlc2NyaXB0aW9uIGluIGBvcHRpb25zYC5cbiAqL1xuZnVuY3Rpb24gdGVzdEVsZW1lbnQob3B0aW9ucywgbm9kZSkge1xuICAgIHZhciB0ZXN0ID0gY29tcGlsZVRlc3Qob3B0aW9ucyk7XG4gICAgcmV0dXJuIHRlc3QgPyB0ZXN0KG5vZGUpIDogdHJ1ZTtcbn1cbmV4cG9ydHMudGVzdEVsZW1lbnQgPSB0ZXN0RWxlbWVudDtcbi8qKlxuICogQHBhcmFtIG9wdGlvbnMgQW4gb2JqZWN0IGRlc2NyaWJpbmcgbm9kZXMgdG8gbG9vayBmb3IuXG4gKiBAcGFyYW0gbm9kZXMgTm9kZXMgdG8gc2VhcmNoIHRocm91Z2guXG4gKiBAcGFyYW0gcmVjdXJzZSBBbHNvIGNvbnNpZGVyIGNoaWxkIG5vZGVzLlxuICogQHBhcmFtIGxpbWl0IE1heGltdW0gbnVtYmVyIG9mIG5vZGVzIHRvIHJldHVybi5cbiAqIEByZXR1cm5zIEFsbCBub2RlcyB0aGF0IG1hdGNoIGBvcHRpb25zYC5cbiAqL1xuZnVuY3Rpb24gZ2V0RWxlbWVudHMob3B0aW9ucywgbm9kZXMsIHJlY3Vyc2UsIGxpbWl0KSB7XG4gICAgaWYgKGxpbWl0ID09PSB2b2lkIDApIHsgbGltaXQgPSBJbmZpbml0eTsgfVxuICAgIHZhciB0ZXN0ID0gY29tcGlsZVRlc3Qob3B0aW9ucyk7XG4gICAgcmV0dXJuIHRlc3QgPyAoMCwgcXVlcnlpbmdfMS5maWx0ZXIpKHRlc3QsIG5vZGVzLCByZWN1cnNlLCBsaW1pdCkgOiBbXTtcbn1cbmV4cG9ydHMuZ2V0RWxlbWVudHMgPSBnZXRFbGVtZW50cztcbi8qKlxuICogQHBhcmFtIGlkIFRoZSB1bmlxdWUgSUQgYXR0cmlidXRlIHZhbHVlIHRvIGxvb2sgZm9yLlxuICogQHBhcmFtIG5vZGVzIE5vZGVzIHRvIHNlYXJjaCB0aHJvdWdoLlxuICogQHBhcmFtIHJlY3Vyc2UgQWxzbyBjb25zaWRlciBjaGlsZCBub2Rlcy5cbiAqIEByZXR1cm5zIFRoZSBub2RlIHdpdGggdGhlIHN1cHBsaWVkIElELlxuICovXG5mdW5jdGlvbiBnZXRFbGVtZW50QnlJZChpZCwgbm9kZXMsIHJlY3Vyc2UpIHtcbiAgICBpZiAocmVjdXJzZSA9PT0gdm9pZCAwKSB7IHJlY3Vyc2UgPSB0cnVlOyB9XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG5vZGVzKSlcbiAgICAgICAgbm9kZXMgPSBbbm9kZXNdO1xuICAgIHJldHVybiAoMCwgcXVlcnlpbmdfMS5maW5kT25lKShnZXRBdHRyaWJDaGVjayhcImlkXCIsIGlkKSwgbm9kZXMsIHJlY3Vyc2UpO1xufVxuZXhwb3J0cy5nZXRFbGVtZW50QnlJZCA9IGdldEVsZW1lbnRCeUlkO1xuLyoqXG4gKiBAcGFyYW0gdGFnTmFtZSBUYWcgbmFtZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIG5vZGVzIE5vZGVzIHRvIHNlYXJjaCB0aHJvdWdoLlxuICogQHBhcmFtIHJlY3Vyc2UgQWxzbyBjb25zaWRlciBjaGlsZCBub2Rlcy5cbiAqIEBwYXJhbSBsaW1pdCBNYXhpbXVtIG51bWJlciBvZiBub2RlcyB0byByZXR1cm4uXG4gKiBAcmV0dXJucyBBbGwgbm9kZXMgd2l0aCB0aGUgc3VwcGxpZWQgYHRhZ05hbWVgLlxuICovXG5mdW5jdGlvbiBnZXRFbGVtZW50c0J5VGFnTmFtZSh0YWdOYW1lLCBub2RlcywgcmVjdXJzZSwgbGltaXQpIHtcbiAgICBpZiAocmVjdXJzZSA9PT0gdm9pZCAwKSB7IHJlY3Vyc2UgPSB0cnVlOyB9XG4gICAgaWYgKGxpbWl0ID09PSB2b2lkIDApIHsgbGltaXQgPSBJbmZpbml0eTsgfVxuICAgIHJldHVybiAoMCwgcXVlcnlpbmdfMS5maWx0ZXIpKENoZWNrcy50YWdfbmFtZSh0YWdOYW1lKSwgbm9kZXMsIHJlY3Vyc2UsIGxpbWl0KTtcbn1cbmV4cG9ydHMuZ2V0RWxlbWVudHNCeVRhZ05hbWUgPSBnZXRFbGVtZW50c0J5VGFnTmFtZTtcbi8qKlxuICogQHBhcmFtIHR5cGUgRWxlbWVudCB0eXBlIHRvIGxvb2sgZm9yLlxuICogQHBhcmFtIG5vZGVzIE5vZGVzIHRvIHNlYXJjaCB0aHJvdWdoLlxuICogQHBhcmFtIHJlY3Vyc2UgQWxzbyBjb25zaWRlciBjaGlsZCBub2Rlcy5cbiAqIEBwYXJhbSBsaW1pdCBNYXhpbXVtIG51bWJlciBvZiBub2RlcyB0byByZXR1cm4uXG4gKiBAcmV0dXJucyBBbGwgbm9kZXMgd2l0aCB0aGUgc3VwcGxpZWQgYHR5cGVgLlxuICovXG5mdW5jdGlvbiBnZXRFbGVtZW50c0J5VGFnVHlwZSh0eXBlLCBub2RlcywgcmVjdXJzZSwgbGltaXQpIHtcbiAgICBpZiAocmVjdXJzZSA9PT0gdm9pZCAwKSB7IHJlY3Vyc2UgPSB0cnVlOyB9XG4gICAgaWYgKGxpbWl0ID09PSB2b2lkIDApIHsgbGltaXQgPSBJbmZpbml0eTsgfVxuICAgIHJldHVybiAoMCwgcXVlcnlpbmdfMS5maWx0ZXIpKENoZWNrcy50YWdfdHlwZSh0eXBlKSwgbm9kZXMsIHJlY3Vyc2UsIGxpbWl0KTtcbn1cbmV4cG9ydHMuZ2V0RWxlbWVudHNCeVRhZ1R5cGUgPSBnZXRFbGVtZW50c0J5VGFnVHlwZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wcmVwZW5kID0gZXhwb3J0cy5wcmVwZW5kQ2hpbGQgPSBleHBvcnRzLmFwcGVuZCA9IGV4cG9ydHMuYXBwZW5kQ2hpbGQgPSBleHBvcnRzLnJlcGxhY2VFbGVtZW50ID0gZXhwb3J0cy5yZW1vdmVFbGVtZW50ID0gdm9pZCAwO1xuLyoqXG4gKiBSZW1vdmUgYW4gZWxlbWVudCBmcm9tIHRoZSBkb21cbiAqXG4gKiBAcGFyYW0gZWxlbSBUaGUgZWxlbWVudCB0byBiZSByZW1vdmVkXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQoZWxlbSkge1xuICAgIGlmIChlbGVtLnByZXYpXG4gICAgICAgIGVsZW0ucHJldi5uZXh0ID0gZWxlbS5uZXh0O1xuICAgIGlmIChlbGVtLm5leHQpXG4gICAgICAgIGVsZW0ubmV4dC5wcmV2ID0gZWxlbS5wcmV2O1xuICAgIGlmIChlbGVtLnBhcmVudCkge1xuICAgICAgICB2YXIgY2hpbGRzID0gZWxlbS5wYXJlbnQuY2hpbGRyZW47XG4gICAgICAgIGNoaWxkcy5zcGxpY2UoY2hpbGRzLmxhc3RJbmRleE9mKGVsZW0pLCAxKTtcbiAgICB9XG59XG5leHBvcnRzLnJlbW92ZUVsZW1lbnQgPSByZW1vdmVFbGVtZW50O1xuLyoqXG4gKiBSZXBsYWNlIGFuIGVsZW1lbnQgaW4gdGhlIGRvbVxuICpcbiAqIEBwYXJhbSBlbGVtIFRoZSBlbGVtZW50IHRvIGJlIHJlcGxhY2VkXG4gKiBAcGFyYW0gcmVwbGFjZW1lbnQgVGhlIGVsZW1lbnQgdG8gYmUgYWRkZWRcbiAqL1xuZnVuY3Rpb24gcmVwbGFjZUVsZW1lbnQoZWxlbSwgcmVwbGFjZW1lbnQpIHtcbiAgICB2YXIgcHJldiA9IChyZXBsYWNlbWVudC5wcmV2ID0gZWxlbS5wcmV2KTtcbiAgICBpZiAocHJldikge1xuICAgICAgICBwcmV2Lm5leHQgPSByZXBsYWNlbWVudDtcbiAgICB9XG4gICAgdmFyIG5leHQgPSAocmVwbGFjZW1lbnQubmV4dCA9IGVsZW0ubmV4dCk7XG4gICAgaWYgKG5leHQpIHtcbiAgICAgICAgbmV4dC5wcmV2ID0gcmVwbGFjZW1lbnQ7XG4gICAgfVxuICAgIHZhciBwYXJlbnQgPSAocmVwbGFjZW1lbnQucGFyZW50ID0gZWxlbS5wYXJlbnQpO1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgdmFyIGNoaWxkcyA9IHBhcmVudC5jaGlsZHJlbjtcbiAgICAgICAgY2hpbGRzW2NoaWxkcy5sYXN0SW5kZXhPZihlbGVtKV0gPSByZXBsYWNlbWVudDtcbiAgICB9XG59XG5leHBvcnRzLnJlcGxhY2VFbGVtZW50ID0gcmVwbGFjZUVsZW1lbnQ7XG4vKipcbiAqIEFwcGVuZCBhIGNoaWxkIHRvIGFuIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIGVsZW0gVGhlIGVsZW1lbnQgdG8gYXBwZW5kIHRvLlxuICogQHBhcmFtIGNoaWxkIFRoZSBlbGVtZW50IHRvIGJlIGFkZGVkIGFzIGEgY2hpbGQuXG4gKi9cbmZ1bmN0aW9uIGFwcGVuZENoaWxkKGVsZW0sIGNoaWxkKSB7XG4gICAgcmVtb3ZlRWxlbWVudChjaGlsZCk7XG4gICAgY2hpbGQubmV4dCA9IG51bGw7XG4gICAgY2hpbGQucGFyZW50ID0gZWxlbTtcbiAgICBpZiAoZWxlbS5jaGlsZHJlbi5wdXNoKGNoaWxkKSA+IDEpIHtcbiAgICAgICAgdmFyIHNpYmxpbmcgPSBlbGVtLmNoaWxkcmVuW2VsZW0uY2hpbGRyZW4ubGVuZ3RoIC0gMl07XG4gICAgICAgIHNpYmxpbmcubmV4dCA9IGNoaWxkO1xuICAgICAgICBjaGlsZC5wcmV2ID0gc2libGluZztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNoaWxkLnByZXYgPSBudWxsO1xuICAgIH1cbn1cbmV4cG9ydHMuYXBwZW5kQ2hpbGQgPSBhcHBlbmRDaGlsZDtcbi8qKlxuICogQXBwZW5kIGFuIGVsZW1lbnQgYWZ0ZXIgYW5vdGhlci5cbiAqXG4gKiBAcGFyYW0gZWxlbSBUaGUgZWxlbWVudCB0byBhcHBlbmQgYWZ0ZXIuXG4gKiBAcGFyYW0gbmV4dCBUaGUgZWxlbWVudCBiZSBhZGRlZC5cbiAqL1xuZnVuY3Rpb24gYXBwZW5kKGVsZW0sIG5leHQpIHtcbiAgICByZW1vdmVFbGVtZW50KG5leHQpO1xuICAgIHZhciBwYXJlbnQgPSBlbGVtLnBhcmVudDtcbiAgICB2YXIgY3Vyck5leHQgPSBlbGVtLm5leHQ7XG4gICAgbmV4dC5uZXh0ID0gY3Vyck5leHQ7XG4gICAgbmV4dC5wcmV2ID0gZWxlbTtcbiAgICBlbGVtLm5leHQgPSBuZXh0O1xuICAgIG5leHQucGFyZW50ID0gcGFyZW50O1xuICAgIGlmIChjdXJyTmV4dCkge1xuICAgICAgICBjdXJyTmV4dC5wcmV2ID0gbmV4dDtcbiAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgdmFyIGNoaWxkcyA9IHBhcmVudC5jaGlsZHJlbjtcbiAgICAgICAgICAgIGNoaWxkcy5zcGxpY2UoY2hpbGRzLmxhc3RJbmRleE9mKGN1cnJOZXh0KSwgMCwgbmV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAocGFyZW50KSB7XG4gICAgICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKG5leHQpO1xuICAgIH1cbn1cbmV4cG9ydHMuYXBwZW5kID0gYXBwZW5kO1xuLyoqXG4gKiBQcmVwZW5kIGEgY2hpbGQgdG8gYW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gZWxlbSBUaGUgZWxlbWVudCB0byBwcmVwZW5kIGJlZm9yZS5cbiAqIEBwYXJhbSBjaGlsZCBUaGUgZWxlbWVudCB0byBiZSBhZGRlZCBhcyBhIGNoaWxkLlxuICovXG5mdW5jdGlvbiBwcmVwZW5kQ2hpbGQoZWxlbSwgY2hpbGQpIHtcbiAgICByZW1vdmVFbGVtZW50KGNoaWxkKTtcbiAgICBjaGlsZC5wYXJlbnQgPSBlbGVtO1xuICAgIGNoaWxkLnByZXYgPSBudWxsO1xuICAgIGlmIChlbGVtLmNoaWxkcmVuLnVuc2hpZnQoY2hpbGQpICE9PSAxKSB7XG4gICAgICAgIHZhciBzaWJsaW5nID0gZWxlbS5jaGlsZHJlblsxXTtcbiAgICAgICAgc2libGluZy5wcmV2ID0gY2hpbGQ7XG4gICAgICAgIGNoaWxkLm5leHQgPSBzaWJsaW5nO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY2hpbGQubmV4dCA9IG51bGw7XG4gICAgfVxufVxuZXhwb3J0cy5wcmVwZW5kQ2hpbGQgPSBwcmVwZW5kQ2hpbGQ7XG4vKipcbiAqIFByZXBlbmQgYW4gZWxlbWVudCBiZWZvcmUgYW5vdGhlci5cbiAqXG4gKiBAcGFyYW0gZWxlbSBUaGUgZWxlbWVudCB0byBwcmVwZW5kIGJlZm9yZS5cbiAqIEBwYXJhbSBwcmV2IFRoZSBlbGVtZW50IGJlIGFkZGVkLlxuICovXG5mdW5jdGlvbiBwcmVwZW5kKGVsZW0sIHByZXYpIHtcbiAgICByZW1vdmVFbGVtZW50KHByZXYpO1xuICAgIHZhciBwYXJlbnQgPSBlbGVtLnBhcmVudDtcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIHZhciBjaGlsZHMgPSBwYXJlbnQuY2hpbGRyZW47XG4gICAgICAgIGNoaWxkcy5zcGxpY2UoY2hpbGRzLmluZGV4T2YoZWxlbSksIDAsIHByZXYpO1xuICAgIH1cbiAgICBpZiAoZWxlbS5wcmV2KSB7XG4gICAgICAgIGVsZW0ucHJldi5uZXh0ID0gcHJldjtcbiAgICB9XG4gICAgcHJldi5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgcHJldi5wcmV2ID0gZWxlbS5wcmV2O1xuICAgIHByZXYubmV4dCA9IGVsZW07XG4gICAgZWxlbS5wcmV2ID0gcHJldjtcbn1cbmV4cG9ydHMucHJlcGVuZCA9IHByZXBlbmQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZmluZEFsbCA9IGV4cG9ydHMuZXhpc3RzT25lID0gZXhwb3J0cy5maW5kT25lID0gZXhwb3J0cy5maW5kT25lQ2hpbGQgPSBleHBvcnRzLmZpbmQgPSBleHBvcnRzLmZpbHRlciA9IHZvaWQgMDtcbnZhciBkb21oYW5kbGVyXzEgPSByZXF1aXJlKFwiZG9taGFuZGxlclwiKTtcbi8qKlxuICogU2VhcmNoIGEgbm9kZSBhbmQgaXRzIGNoaWxkcmVuIGZvciBub2RlcyBwYXNzaW5nIGEgdGVzdCBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0gdGVzdCBGdW5jdGlvbiB0byB0ZXN0IG5vZGVzIG9uLlxuICogQHBhcmFtIG5vZGUgTm9kZSB0byBzZWFyY2guIFdpbGwgYmUgaW5jbHVkZWQgaW4gdGhlIHJlc3VsdCBzZXQgaWYgaXQgbWF0Y2hlcy5cbiAqIEBwYXJhbSByZWN1cnNlIEFsc28gY29uc2lkZXIgY2hpbGQgbm9kZXMuXG4gKiBAcGFyYW0gbGltaXQgTWF4aW11bSBudW1iZXIgb2Ygbm9kZXMgdG8gcmV0dXJuLlxuICogQHJldHVybnMgQWxsIG5vZGVzIHBhc3NpbmcgYHRlc3RgLlxuICovXG5mdW5jdGlvbiBmaWx0ZXIodGVzdCwgbm9kZSwgcmVjdXJzZSwgbGltaXQpIHtcbiAgICBpZiAocmVjdXJzZSA9PT0gdm9pZCAwKSB7IHJlY3Vyc2UgPSB0cnVlOyB9XG4gICAgaWYgKGxpbWl0ID09PSB2b2lkIDApIHsgbGltaXQgPSBJbmZpbml0eTsgfVxuICAgIGlmICghQXJyYXkuaXNBcnJheShub2RlKSlcbiAgICAgICAgbm9kZSA9IFtub2RlXTtcbiAgICByZXR1cm4gZmluZCh0ZXN0LCBub2RlLCByZWN1cnNlLCBsaW1pdCk7XG59XG5leHBvcnRzLmZpbHRlciA9IGZpbHRlcjtcbi8qKlxuICogU2VhcmNoIGFuIGFycmF5IG9mIG5vZGUgYW5kIGl0cyBjaGlsZHJlbiBmb3Igbm9kZXMgcGFzc2luZyBhIHRlc3QgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHRlc3QgRnVuY3Rpb24gdG8gdGVzdCBub2RlcyBvbi5cbiAqIEBwYXJhbSBub2RlcyBBcnJheSBvZiBub2RlcyB0byBzZWFyY2guXG4gKiBAcGFyYW0gcmVjdXJzZSBBbHNvIGNvbnNpZGVyIGNoaWxkIG5vZGVzLlxuICogQHBhcmFtIGxpbWl0IE1heGltdW0gbnVtYmVyIG9mIG5vZGVzIHRvIHJldHVybi5cbiAqIEByZXR1cm5zIEFsbCBub2RlcyBwYXNzaW5nIGB0ZXN0YC5cbiAqL1xuZnVuY3Rpb24gZmluZCh0ZXN0LCBub2RlcywgcmVjdXJzZSwgbGltaXQpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwLCBub2Rlc18xID0gbm9kZXM7IF9pIDwgbm9kZXNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGVsZW0gPSBub2Rlc18xW19pXTtcbiAgICAgICAgaWYgKHRlc3QoZWxlbSkpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGVsZW0pO1xuICAgICAgICAgICAgaWYgKC0tbGltaXQgPD0gMClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVjdXJzZSAmJiAoMCwgZG9taGFuZGxlcl8xLmhhc0NoaWxkcmVuKShlbGVtKSAmJiBlbGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IGZpbmQodGVzdCwgZWxlbS5jaGlsZHJlbiwgcmVjdXJzZSwgbGltaXQpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2guYXBwbHkocmVzdWx0LCBjaGlsZHJlbik7XG4gICAgICAgICAgICBsaW1pdCAtPSBjaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICBpZiAobGltaXQgPD0gMClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5maW5kID0gZmluZDtcbi8qKlxuICogRmluZHMgdGhlIGZpcnN0IGVsZW1lbnQgaW5zaWRlIG9mIGFuIGFycmF5IHRoYXQgbWF0Y2hlcyBhIHRlc3QgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHRlc3QgRnVuY3Rpb24gdG8gdGVzdCBub2RlcyBvbi5cbiAqIEBwYXJhbSBub2RlcyBBcnJheSBvZiBub2RlcyB0byBzZWFyY2guXG4gKiBAcmV0dXJucyBUaGUgZmlyc3Qgbm9kZSBpbiB0aGUgYXJyYXkgdGhhdCBwYXNzZXMgYHRlc3RgLlxuICovXG5mdW5jdGlvbiBmaW5kT25lQ2hpbGQodGVzdCwgbm9kZXMpIHtcbiAgICByZXR1cm4gbm9kZXMuZmluZCh0ZXN0KTtcbn1cbmV4cG9ydHMuZmluZE9uZUNoaWxkID0gZmluZE9uZUNoaWxkO1xuLyoqXG4gKiBGaW5kcyBvbmUgZWxlbWVudCBpbiBhIHRyZWUgdGhhdCBwYXNzZXMgYSB0ZXN0LlxuICpcbiAqIEBwYXJhbSB0ZXN0IEZ1bmN0aW9uIHRvIHRlc3Qgbm9kZXMgb24uXG4gKiBAcGFyYW0gbm9kZXMgQXJyYXkgb2Ygbm9kZXMgdG8gc2VhcmNoLlxuICogQHBhcmFtIHJlY3Vyc2UgQWxzbyBjb25zaWRlciBjaGlsZCBub2Rlcy5cbiAqIEByZXR1cm5zIFRoZSBmaXJzdCBjaGlsZCBub2RlIHRoYXQgcGFzc2VzIGB0ZXN0YC5cbiAqL1xuZnVuY3Rpb24gZmluZE9uZSh0ZXN0LCBub2RlcywgcmVjdXJzZSkge1xuICAgIGlmIChyZWN1cnNlID09PSB2b2lkIDApIHsgcmVjdXJzZSA9IHRydWU7IH1cbiAgICB2YXIgZWxlbSA9IG51bGw7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGggJiYgIWVsZW07IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlZCA9IG5vZGVzW2ldO1xuICAgICAgICBpZiAoISgwLCBkb21oYW5kbGVyXzEuaXNUYWcpKGNoZWNrZWQpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0ZXN0KGNoZWNrZWQpKSB7XG4gICAgICAgICAgICBlbGVtID0gY2hlY2tlZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyZWN1cnNlICYmIGNoZWNrZWQuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZWxlbSA9IGZpbmRPbmUodGVzdCwgY2hlY2tlZC5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVsZW07XG59XG5leHBvcnRzLmZpbmRPbmUgPSBmaW5kT25lO1xuLyoqXG4gKiBAcGFyYW0gdGVzdCBGdW5jdGlvbiB0byB0ZXN0IG5vZGVzIG9uLlxuICogQHBhcmFtIG5vZGVzIEFycmF5IG9mIG5vZGVzIHRvIHNlYXJjaC5cbiAqIEByZXR1cm5zIFdoZXRoZXIgYSB0cmVlIG9mIG5vZGVzIGNvbnRhaW5zIGF0IGxlYXN0IG9uZSBub2RlIHBhc3NpbmcgYSB0ZXN0LlxuICovXG5mdW5jdGlvbiBleGlzdHNPbmUodGVzdCwgbm9kZXMpIHtcbiAgICByZXR1cm4gbm9kZXMuc29tZShmdW5jdGlvbiAoY2hlY2tlZCkge1xuICAgICAgICByZXR1cm4gKDAsIGRvbWhhbmRsZXJfMS5pc1RhZykoY2hlY2tlZCkgJiZcbiAgICAgICAgICAgICh0ZXN0KGNoZWNrZWQpIHx8XG4gICAgICAgICAgICAgICAgKGNoZWNrZWQuY2hpbGRyZW4ubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICBleGlzdHNPbmUodGVzdCwgY2hlY2tlZC5jaGlsZHJlbikpKTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZXhpc3RzT25lID0gZXhpc3RzT25lO1xuLyoqXG4gKiBTZWFyY2ggYW5kIGFycmF5IG9mIG5vZGVzIGFuZCBpdHMgY2hpbGRyZW4gZm9yIG5vZGVzIHBhc3NpbmcgYSB0ZXN0IGZ1bmN0aW9uLlxuICpcbiAqIFNhbWUgYXMgYGZpbmRgLCBvbmx5IHdpdGggbGVzcyBvcHRpb25zLCBsZWFkaW5nIHRvIHJlZHVjZWQgY29tcGxleGl0eS5cbiAqXG4gKiBAcGFyYW0gdGVzdCBGdW5jdGlvbiB0byB0ZXN0IG5vZGVzIG9uLlxuICogQHBhcmFtIG5vZGVzIEFycmF5IG9mIG5vZGVzIHRvIHNlYXJjaC5cbiAqIEByZXR1cm5zIEFsbCBub2RlcyBwYXNzaW5nIGB0ZXN0YC5cbiAqL1xuZnVuY3Rpb24gZmluZEFsbCh0ZXN0LCBub2Rlcykge1xuICAgIHZhciBfYTtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIHN0YWNrID0gbm9kZXMuZmlsdGVyKGRvbWhhbmRsZXJfMS5pc1RhZyk7XG4gICAgdmFyIGVsZW07XG4gICAgd2hpbGUgKChlbGVtID0gc3RhY2suc2hpZnQoKSkpIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gKF9hID0gZWxlbS5jaGlsZHJlbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZpbHRlcihkb21oYW5kbGVyXzEuaXNUYWcpO1xuICAgICAgICBpZiAoY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc3RhY2sudW5zaGlmdC5hcHBseShzdGFjaywgY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0ZXN0KGVsZW0pKVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goZWxlbSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLmZpbmRBbGwgPSBmaW5kQWxsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmlubmVyVGV4dCA9IGV4cG9ydHMudGV4dENvbnRlbnQgPSBleHBvcnRzLmdldFRleHQgPSBleHBvcnRzLmdldElubmVySFRNTCA9IGV4cG9ydHMuZ2V0T3V0ZXJIVE1MID0gdm9pZCAwO1xudmFyIGRvbWhhbmRsZXJfMSA9IHJlcXVpcmUoXCJkb21oYW5kbGVyXCIpO1xudmFyIGRvbV9zZXJpYWxpemVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImRvbS1zZXJpYWxpemVyXCIpKTtcbnZhciBkb21lbGVtZW50dHlwZV8xID0gcmVxdWlyZShcImRvbWVsZW1lbnR0eXBlXCIpO1xuLyoqXG4gKiBAcGFyYW0gbm9kZSBOb2RlIHRvIGdldCB0aGUgb3V0ZXIgSFRNTCBvZi5cbiAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgZm9yIHNlcmlhbGl6YXRpb24uXG4gKiBAZGVwcmVjYXRlZCBVc2UgdGhlIGBkb20tc2VyaWFsaXplcmAgbW9kdWxlIGRpcmVjdGx5LlxuICogQHJldHVybnMgYG5vZGVgJ3Mgb3V0ZXIgSFRNTC5cbiAqL1xuZnVuY3Rpb24gZ2V0T3V0ZXJIVE1MKG5vZGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gKDAsIGRvbV9zZXJpYWxpemVyXzEuZGVmYXVsdCkobm9kZSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmdldE91dGVySFRNTCA9IGdldE91dGVySFRNTDtcbi8qKlxuICogQHBhcmFtIG5vZGUgTm9kZSB0byBnZXQgdGhlIGlubmVyIEhUTUwgb2YuXG4gKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIGZvciBzZXJpYWxpemF0aW9uLlxuICogQGRlcHJlY2F0ZWQgVXNlIHRoZSBgZG9tLXNlcmlhbGl6ZXJgIG1vZHVsZSBkaXJlY3RseS5cbiAqIEByZXR1cm5zIGBub2RlYCdzIGlubmVyIEhUTUwuXG4gKi9cbmZ1bmN0aW9uIGdldElubmVySFRNTChub2RlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuICgwLCBkb21oYW5kbGVyXzEuaGFzQ2hpbGRyZW4pKG5vZGUpXG4gICAgICAgID8gbm9kZS5jaGlsZHJlbi5tYXAoZnVuY3Rpb24gKG5vZGUpIHsgcmV0dXJuIGdldE91dGVySFRNTChub2RlLCBvcHRpb25zKTsgfSkuam9pbihcIlwiKVxuICAgICAgICA6IFwiXCI7XG59XG5leHBvcnRzLmdldElubmVySFRNTCA9IGdldElubmVySFRNTDtcbi8qKlxuICogR2V0IGEgbm9kZSdzIGlubmVyIHRleHQuIFNhbWUgYXMgYHRleHRDb250ZW50YCwgYnV0IGluc2VydHMgbmV3bGluZXMgZm9yIGA8YnI+YCB0YWdzLlxuICpcbiAqIEBkZXByZWNhdGVkIFVzZSBgdGV4dENvbnRlbnRgIGluc3RlYWQuXG4gKiBAcGFyYW0gbm9kZSBOb2RlIHRvIGdldCB0aGUgaW5uZXIgdGV4dCBvZi5cbiAqIEByZXR1cm5zIGBub2RlYCdzIGlubmVyIHRleHQuXG4gKi9cbmZ1bmN0aW9uIGdldFRleHQobm9kZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKVxuICAgICAgICByZXR1cm4gbm9kZS5tYXAoZ2V0VGV4dCkuam9pbihcIlwiKTtcbiAgICBpZiAoKDAsIGRvbWhhbmRsZXJfMS5pc1RhZykobm9kZSkpXG4gICAgICAgIHJldHVybiBub2RlLm5hbWUgPT09IFwiYnJcIiA/IFwiXFxuXCIgOiBnZXRUZXh0KG5vZGUuY2hpbGRyZW4pO1xuICAgIGlmICgoMCwgZG9taGFuZGxlcl8xLmlzQ0RBVEEpKG5vZGUpKVxuICAgICAgICByZXR1cm4gZ2V0VGV4dChub2RlLmNoaWxkcmVuKTtcbiAgICBpZiAoKDAsIGRvbWhhbmRsZXJfMS5pc1RleHQpKG5vZGUpKVxuICAgICAgICByZXR1cm4gbm9kZS5kYXRhO1xuICAgIHJldHVybiBcIlwiO1xufVxuZXhwb3J0cy5nZXRUZXh0ID0gZ2V0VGV4dDtcbi8qKlxuICogR2V0IGEgbm9kZSdzIHRleHQgY29udGVudC5cbiAqXG4gKiBAcGFyYW0gbm9kZSBOb2RlIHRvIGdldCB0aGUgdGV4dCBjb250ZW50IG9mLlxuICogQHJldHVybnMgYG5vZGVgJ3MgdGV4dCBjb250ZW50LlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL05vZGUvdGV4dENvbnRlbnR9XG4gKi9cbmZ1bmN0aW9uIHRleHRDb250ZW50KG5vZGUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSlcbiAgICAgICAgcmV0dXJuIG5vZGUubWFwKHRleHRDb250ZW50KS5qb2luKFwiXCIpO1xuICAgIGlmICgoMCwgZG9taGFuZGxlcl8xLmhhc0NoaWxkcmVuKShub2RlKSAmJiAhKDAsIGRvbWhhbmRsZXJfMS5pc0NvbW1lbnQpKG5vZGUpKSB7XG4gICAgICAgIHJldHVybiB0ZXh0Q29udGVudChub2RlLmNoaWxkcmVuKTtcbiAgICB9XG4gICAgaWYgKCgwLCBkb21oYW5kbGVyXzEuaXNUZXh0KShub2RlKSlcbiAgICAgICAgcmV0dXJuIG5vZGUuZGF0YTtcbiAgICByZXR1cm4gXCJcIjtcbn1cbmV4cG9ydHMudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbi8qKlxuICogR2V0IGEgbm9kZSdzIGlubmVyIHRleHQuXG4gKlxuICogQHBhcmFtIG5vZGUgTm9kZSB0byBnZXQgdGhlIGlubmVyIHRleHQgb2YuXG4gKiBAcmV0dXJucyBgbm9kZWAncyBpbm5lciB0ZXh0LlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL05vZGUvaW5uZXJUZXh0fVxuICovXG5mdW5jdGlvbiBpbm5lclRleHQobm9kZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKVxuICAgICAgICByZXR1cm4gbm9kZS5tYXAoaW5uZXJUZXh0KS5qb2luKFwiXCIpO1xuICAgIGlmICgoMCwgZG9taGFuZGxlcl8xLmhhc0NoaWxkcmVuKShub2RlKSAmJiAobm9kZS50eXBlID09PSBkb21lbGVtZW50dHlwZV8xLkVsZW1lbnRUeXBlLlRhZyB8fCAoMCwgZG9taGFuZGxlcl8xLmlzQ0RBVEEpKG5vZGUpKSkge1xuICAgICAgICByZXR1cm4gaW5uZXJUZXh0KG5vZGUuY2hpbGRyZW4pO1xuICAgIH1cbiAgICBpZiAoKDAsIGRvbWhhbmRsZXJfMS5pc1RleHQpKG5vZGUpKVxuICAgICAgICByZXR1cm4gbm9kZS5kYXRhO1xuICAgIHJldHVybiBcIlwiO1xufVxuZXhwb3J0cy5pbm5lclRleHQgPSBpbm5lclRleHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucHJldkVsZW1lbnRTaWJsaW5nID0gZXhwb3J0cy5uZXh0RWxlbWVudFNpYmxpbmcgPSBleHBvcnRzLmdldE5hbWUgPSBleHBvcnRzLmhhc0F0dHJpYiA9IGV4cG9ydHMuZ2V0QXR0cmlidXRlVmFsdWUgPSBleHBvcnRzLmdldFNpYmxpbmdzID0gZXhwb3J0cy5nZXRQYXJlbnQgPSBleHBvcnRzLmdldENoaWxkcmVuID0gdm9pZCAwO1xudmFyIGRvbWhhbmRsZXJfMSA9IHJlcXVpcmUoXCJkb21oYW5kbGVyXCIpO1xudmFyIGVtcHR5QXJyYXkgPSBbXTtcbi8qKlxuICogR2V0IGEgbm9kZSdzIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSBlbGVtIE5vZGUgdG8gZ2V0IHRoZSBjaGlsZHJlbiBvZi5cbiAqIEByZXR1cm5zIGBlbGVtYCdzIGNoaWxkcmVuLCBvciBhbiBlbXB0eSBhcnJheS5cbiAqL1xuZnVuY3Rpb24gZ2V0Q2hpbGRyZW4oZWxlbSkge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gKF9hID0gZWxlbS5jaGlsZHJlbikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogZW1wdHlBcnJheTtcbn1cbmV4cG9ydHMuZ2V0Q2hpbGRyZW4gPSBnZXRDaGlsZHJlbjtcbi8qKlxuICogR2V0IGEgbm9kZSdzIHBhcmVudC5cbiAqXG4gKiBAcGFyYW0gZWxlbSBOb2RlIHRvIGdldCB0aGUgcGFyZW50IG9mLlxuICogQHJldHVybnMgYGVsZW1gJ3MgcGFyZW50IG5vZGUuXG4gKi9cbmZ1bmN0aW9uIGdldFBhcmVudChlbGVtKSB7XG4gICAgcmV0dXJuIGVsZW0ucGFyZW50IHx8IG51bGw7XG59XG5leHBvcnRzLmdldFBhcmVudCA9IGdldFBhcmVudDtcbi8qKlxuICogR2V0cyBhbiBlbGVtZW50cyBzaWJsaW5ncywgaW5jbHVkaW5nIHRoZSBlbGVtZW50IGl0c2VsZi5cbiAqXG4gKiBBdHRlbXB0cyB0byBnZXQgdGhlIGNoaWxkcmVuIHRocm91Z2ggdGhlIGVsZW1lbnQncyBwYXJlbnQgZmlyc3QuXG4gKiBJZiB3ZSBkb24ndCBoYXZlIGEgcGFyZW50ICh0aGUgZWxlbWVudCBpcyBhIHJvb3Qgbm9kZSksXG4gKiB3ZSB3YWxrIHRoZSBlbGVtZW50J3MgYHByZXZgICYgYG5leHRgIHRvIGdldCBhbGwgcmVtYWluaW5nIG5vZGVzLlxuICpcbiAqIEBwYXJhbSBlbGVtIEVsZW1lbnQgdG8gZ2V0IHRoZSBzaWJsaW5ncyBvZi5cbiAqIEByZXR1cm5zIGBlbGVtYCdzIHNpYmxpbmdzLlxuICovXG5mdW5jdGlvbiBnZXRTaWJsaW5ncyhlbGVtKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50KGVsZW0pO1xuICAgIGlmIChwYXJlbnQgIT0gbnVsbClcbiAgICAgICAgcmV0dXJuIGdldENoaWxkcmVuKHBhcmVudCk7XG4gICAgdmFyIHNpYmxpbmdzID0gW2VsZW1dO1xuICAgIHZhciBwcmV2ID0gZWxlbS5wcmV2LCBuZXh0ID0gZWxlbS5uZXh0O1xuICAgIHdoaWxlIChwcmV2ICE9IG51bGwpIHtcbiAgICAgICAgc2libGluZ3MudW5zaGlmdChwcmV2KTtcbiAgICAgICAgKF9hID0gcHJldiwgcHJldiA9IF9hLnByZXYpO1xuICAgIH1cbiAgICB3aGlsZSAobmV4dCAhPSBudWxsKSB7XG4gICAgICAgIHNpYmxpbmdzLnB1c2gobmV4dCk7XG4gICAgICAgIChfYiA9IG5leHQsIG5leHQgPSBfYi5uZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIHNpYmxpbmdzO1xufVxuZXhwb3J0cy5nZXRTaWJsaW5ncyA9IGdldFNpYmxpbmdzO1xuLyoqXG4gKiBHZXRzIGFuIGF0dHJpYnV0ZSBmcm9tIGFuIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIGVsZW0gRWxlbWVudCB0byBjaGVjay5cbiAqIEBwYXJhbSBuYW1lIEF0dHJpYnV0ZSBuYW1lIHRvIHJldHJpZXZlLlxuICogQHJldHVybnMgVGhlIGVsZW1lbnQncyBhdHRyaWJ1dGUgdmFsdWUsIG9yIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGVWYWx1ZShlbGVtLCBuYW1lKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAoX2EgPSBlbGVtLmF0dHJpYnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVtuYW1lXTtcbn1cbmV4cG9ydHMuZ2V0QXR0cmlidXRlVmFsdWUgPSBnZXRBdHRyaWJ1dGVWYWx1ZTtcbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgYW4gZWxlbWVudCBoYXMgYW4gYXR0cmlidXRlLlxuICpcbiAqIEBwYXJhbSBlbGVtIEVsZW1lbnQgdG8gY2hlY2suXG4gKiBAcGFyYW0gbmFtZSBBdHRyaWJ1dGUgbmFtZSB0byBsb29rIGZvci5cbiAqIEByZXR1cm5zIFJldHVybnMgd2hldGhlciBgZWxlbWAgaGFzIHRoZSBhdHRyaWJ1dGUgYG5hbWVgLlxuICovXG5mdW5jdGlvbiBoYXNBdHRyaWIoZWxlbSwgbmFtZSkge1xuICAgIHJldHVybiAoZWxlbS5hdHRyaWJzICE9IG51bGwgJiZcbiAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGVsZW0uYXR0cmlicywgbmFtZSkgJiZcbiAgICAgICAgZWxlbS5hdHRyaWJzW25hbWVdICE9IG51bGwpO1xufVxuZXhwb3J0cy5oYXNBdHRyaWIgPSBoYXNBdHRyaWI7XG4vKipcbiAqIEdldCB0aGUgdGFnIG5hbWUgb2YgYW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gZWxlbSBUaGUgZWxlbWVudCB0byBnZXQgdGhlIG5hbWUgZm9yLlxuICogQHJldHVybnMgVGhlIHRhZyBuYW1lIG9mIGBlbGVtYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmFtZShlbGVtKSB7XG4gICAgcmV0dXJuIGVsZW0ubmFtZTtcbn1cbmV4cG9ydHMuZ2V0TmFtZSA9IGdldE5hbWU7XG4vKipcbiAqIFJldHVybnMgdGhlIG5leHQgZWxlbWVudCBzaWJsaW5nIG9mIGEgbm9kZS5cbiAqXG4gKiBAcGFyYW0gZWxlbSBUaGUgZWxlbWVudCB0byBnZXQgdGhlIG5leHQgc2libGluZyBvZi5cbiAqIEByZXR1cm5zIGBlbGVtYCdzIG5leHQgc2libGluZyB0aGF0IGlzIGEgdGFnLlxuICovXG5mdW5jdGlvbiBuZXh0RWxlbWVudFNpYmxpbmcoZWxlbSkge1xuICAgIHZhciBfYTtcbiAgICB2YXIgbmV4dCA9IGVsZW0ubmV4dDtcbiAgICB3aGlsZSAobmV4dCAhPT0gbnVsbCAmJiAhKDAsIGRvbWhhbmRsZXJfMS5pc1RhZykobmV4dCkpXG4gICAgICAgIChfYSA9IG5leHQsIG5leHQgPSBfYS5uZXh0KTtcbiAgICByZXR1cm4gbmV4dDtcbn1cbmV4cG9ydHMubmV4dEVsZW1lbnRTaWJsaW5nID0gbmV4dEVsZW1lbnRTaWJsaW5nO1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBwcmV2aW91cyBlbGVtZW50IHNpYmxpbmcgb2YgYSBub2RlLlxuICpcbiAqIEBwYXJhbSBlbGVtIFRoZSBlbGVtZW50IHRvIGdldCB0aGUgcHJldmlvdXMgc2libGluZyBvZi5cbiAqIEByZXR1cm5zIGBlbGVtYCdzIHByZXZpb3VzIHNpYmxpbmcgdGhhdCBpcyBhIHRhZy5cbiAqL1xuZnVuY3Rpb24gcHJldkVsZW1lbnRTaWJsaW5nKGVsZW0pIHtcbiAgICB2YXIgX2E7XG4gICAgdmFyIHByZXYgPSBlbGVtLnByZXY7XG4gICAgd2hpbGUgKHByZXYgIT09IG51bGwgJiYgISgwLCBkb21oYW5kbGVyXzEuaXNUYWcpKHByZXYpKVxuICAgICAgICAoX2EgPSBwcmV2LCBwcmV2ID0gX2EucHJldik7XG4gICAgcmV0dXJuIHByZXY7XG59XG5leHBvcnRzLnByZXZFbGVtZW50U2libGluZyA9IHByZXZFbGVtZW50U2libGluZztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWNvZGVIVE1MID0gZXhwb3J0cy5kZWNvZGVIVE1MU3RyaWN0ID0gZXhwb3J0cy5kZWNvZGVYTUwgPSB2b2lkIDA7XG52YXIgZW50aXRpZXNfanNvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21hcHMvZW50aXRpZXMuanNvblwiKSk7XG52YXIgbGVnYWN5X2pzb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tYXBzL2xlZ2FjeS5qc29uXCIpKTtcbnZhciB4bWxfanNvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21hcHMveG1sLmpzb25cIikpO1xudmFyIGRlY29kZV9jb2RlcG9pbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9kZWNvZGVfY29kZXBvaW50XCIpKTtcbnZhciBzdHJpY3RFbnRpdHlSZSA9IC8mKD86W2EtekEtWjAtOV0rfCNbeFhdW1xcZGEtZkEtRl0rfCNcXGQrKTsvZztcbmV4cG9ydHMuZGVjb2RlWE1MID0gZ2V0U3RyaWN0RGVjb2Rlcih4bWxfanNvbl8xLmRlZmF1bHQpO1xuZXhwb3J0cy5kZWNvZGVIVE1MU3RyaWN0ID0gZ2V0U3RyaWN0RGVjb2RlcihlbnRpdGllc19qc29uXzEuZGVmYXVsdCk7XG5mdW5jdGlvbiBnZXRTdHJpY3REZWNvZGVyKG1hcCkge1xuICAgIHZhciByZXBsYWNlID0gZ2V0UmVwbGFjZXIobWFwKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0cikgeyByZXR1cm4gU3RyaW5nKHN0cikucmVwbGFjZShzdHJpY3RFbnRpdHlSZSwgcmVwbGFjZSk7IH07XG59XG52YXIgc29ydGVyID0gZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIChhIDwgYiA/IDEgOiAtMSk7IH07XG5leHBvcnRzLmRlY29kZUhUTUwgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBsZWdhY3kgPSBPYmplY3Qua2V5cyhsZWdhY3lfanNvbl8xLmRlZmF1bHQpLnNvcnQoc29ydGVyKTtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGVudGl0aWVzX2pzb25fMS5kZWZhdWx0KS5zb3J0KHNvcnRlcik7XG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobGVnYWN5W2pdID09PSBrZXlzW2ldKSB7XG4gICAgICAgICAgICBrZXlzW2ldICs9IFwiOz9cIjtcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGtleXNbaV0gKz0gXCI7XCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIHJlID0gbmV3IFJlZ0V4cChcIiYoPzpcIiArIGtleXMuam9pbihcInxcIikgKyBcInwjW3hYXVtcXFxcZGEtZkEtRl0rOz98I1xcXFxkKzs/KVwiLCBcImdcIik7XG4gICAgdmFyIHJlcGxhY2UgPSBnZXRSZXBsYWNlcihlbnRpdGllc19qc29uXzEuZGVmYXVsdCk7XG4gICAgZnVuY3Rpb24gcmVwbGFjZXIoc3RyKSB7XG4gICAgICAgIGlmIChzdHIuc3Vic3RyKC0xKSAhPT0gXCI7XCIpXG4gICAgICAgICAgICBzdHIgKz0gXCI7XCI7XG4gICAgICAgIHJldHVybiByZXBsYWNlKHN0cik7XG4gICAgfVxuICAgIC8vIFRPRE8gY29uc2lkZXIgY3JlYXRpbmcgYSBtZXJnZWQgbWFwXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdHIpIHsgcmV0dXJuIFN0cmluZyhzdHIpLnJlcGxhY2UocmUsIHJlcGxhY2VyKTsgfTtcbn0pKCk7XG5mdW5jdGlvbiBnZXRSZXBsYWNlcihtYXApIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShzdHIpIHtcbiAgICAgICAgaWYgKHN0ci5jaGFyQXQoMSkgPT09IFwiI1wiKSB7XG4gICAgICAgICAgICB2YXIgc2Vjb25kQ2hhciA9IHN0ci5jaGFyQXQoMik7XG4gICAgICAgICAgICBpZiAoc2Vjb25kQ2hhciA9PT0gXCJYXCIgfHwgc2Vjb25kQ2hhciA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlX2NvZGVwb2ludF8xLmRlZmF1bHQocGFyc2VJbnQoc3RyLnN1YnN0cigzKSwgMTYpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkZWNvZGVfY29kZXBvaW50XzEuZGVmYXVsdChwYXJzZUludChzdHIuc3Vic3RyKDIpLCAxMCkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJlZmVyLW51bGxpc2gtY29hbGVzY2luZ1xuICAgICAgICByZXR1cm4gbWFwW3N0ci5zbGljZSgxLCAtMSldIHx8IHN0cjtcbiAgICB9O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZGVjb2RlX2pzb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tYXBzL2RlY29kZS5qc29uXCIpKTtcbi8vIEFkYXB0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbWF0aGlhc2J5bmVucy9oZS9ibG9iL21hc3Rlci9zcmMvaGUuanMjTDk0LUwxMTlcbnZhciBmcm9tQ29kZVBvaW50ID0gXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVubmVjZXNzYXJ5LWNvbmRpdGlvblxuU3RyaW5nLmZyb21Db2RlUG9pbnQgfHxcbiAgICBmdW5jdGlvbiAoY29kZVBvaW50KSB7XG4gICAgICAgIHZhciBvdXRwdXQgPSBcIlwiO1xuICAgICAgICBpZiAoY29kZVBvaW50ID4gMHhmZmZmKSB7XG4gICAgICAgICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMDtcbiAgICAgICAgICAgIG91dHB1dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoY29kZVBvaW50ID4+PiAxMCkgJiAweDNmZikgfCAweGQ4MDApO1xuICAgICAgICAgICAgY29kZVBvaW50ID0gMHhkYzAwIHwgKGNvZGVQb2ludCAmIDB4M2ZmKTtcbiAgICAgICAgfVxuICAgICAgICBvdXRwdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpO1xuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH07XG5mdW5jdGlvbiBkZWNvZGVDb2RlUG9pbnQoY29kZVBvaW50KSB7XG4gICAgaWYgKChjb2RlUG9pbnQgPj0gMHhkODAwICYmIGNvZGVQb2ludCA8PSAweGRmZmYpIHx8IGNvZGVQb2ludCA+IDB4MTBmZmZmKSB7XG4gICAgICAgIHJldHVybiBcIlxcdUZGRkRcIjtcbiAgICB9XG4gICAgaWYgKGNvZGVQb2ludCBpbiBkZWNvZGVfanNvbl8xLmRlZmF1bHQpIHtcbiAgICAgICAgY29kZVBvaW50ID0gZGVjb2RlX2pzb25fMS5kZWZhdWx0W2NvZGVQb2ludF07XG4gICAgfVxuICAgIHJldHVybiBmcm9tQ29kZVBvaW50KGNvZGVQb2ludCk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBkZWNvZGVDb2RlUG9pbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZXNjYXBlVVRGOCA9IGV4cG9ydHMuZXNjYXBlID0gZXhwb3J0cy5lbmNvZGVOb25Bc2NpaUhUTUwgPSBleHBvcnRzLmVuY29kZUhUTUwgPSBleHBvcnRzLmVuY29kZVhNTCA9IHZvaWQgMDtcbnZhciB4bWxfanNvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21hcHMveG1sLmpzb25cIikpO1xudmFyIGludmVyc2VYTUwgPSBnZXRJbnZlcnNlT2JqKHhtbF9qc29uXzEuZGVmYXVsdCk7XG52YXIgeG1sUmVwbGFjZXIgPSBnZXRJbnZlcnNlUmVwbGFjZXIoaW52ZXJzZVhNTCk7XG4vKipcbiAqIEVuY29kZXMgYWxsIG5vbi1BU0NJSSBjaGFyYWN0ZXJzLCBhcyB3ZWxsIGFzIGNoYXJhY3RlcnMgbm90IHZhbGlkIGluIFhNTFxuICogZG9jdW1lbnRzIHVzaW5nIFhNTCBlbnRpdGllcy5cbiAqXG4gKiBJZiBhIGNoYXJhY3RlciBoYXMgbm8gZXF1aXZhbGVudCBlbnRpdHksIGFcbiAqIG51bWVyaWMgaGV4YWRlY2ltYWwgcmVmZXJlbmNlIChlZy4gYCYjeGZjO2ApIHdpbGwgYmUgdXNlZC5cbiAqL1xuZXhwb3J0cy5lbmNvZGVYTUwgPSBnZXRBU0NJSUVuY29kZXIoaW52ZXJzZVhNTCk7XG52YXIgZW50aXRpZXNfanNvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21hcHMvZW50aXRpZXMuanNvblwiKSk7XG52YXIgaW52ZXJzZUhUTUwgPSBnZXRJbnZlcnNlT2JqKGVudGl0aWVzX2pzb25fMS5kZWZhdWx0KTtcbnZhciBodG1sUmVwbGFjZXIgPSBnZXRJbnZlcnNlUmVwbGFjZXIoaW52ZXJzZUhUTUwpO1xuLyoqXG4gKiBFbmNvZGVzIGFsbCBlbnRpdGllcyBhbmQgbm9uLUFTQ0lJIGNoYXJhY3RlcnMgaW4gdGhlIGlucHV0LlxuICpcbiAqIFRoaXMgaW5jbHVkZXMgY2hhcmFjdGVycyB0aGF0IGFyZSB2YWxpZCBBU0NJSSBjaGFyYWN0ZXJzIGluIEhUTUwgZG9jdW1lbnRzLlxuICogRm9yIGV4YW1wbGUgYCNgIHdpbGwgYmUgZW5jb2RlZCBhcyBgJm51bTtgLiBUbyBnZXQgYSBtb3JlIGNvbXBhY3Qgb3V0cHV0LFxuICogY29uc2lkZXIgdXNpbmcgdGhlIGBlbmNvZGVOb25Bc2NpaUhUTUxgIGZ1bmN0aW9uLlxuICpcbiAqIElmIGEgY2hhcmFjdGVyIGhhcyBubyBlcXVpdmFsZW50IGVudGl0eSwgYVxuICogbnVtZXJpYyBoZXhhZGVjaW1hbCByZWZlcmVuY2UgKGVnLiBgJiN4ZmM7YCkgd2lsbCBiZSB1c2VkLlxuICovXG5leHBvcnRzLmVuY29kZUhUTUwgPSBnZXRJbnZlcnNlKGludmVyc2VIVE1MLCBodG1sUmVwbGFjZXIpO1xuLyoqXG4gKiBFbmNvZGVzIGFsbCBub24tQVNDSUkgY2hhcmFjdGVycywgYXMgd2VsbCBhcyBjaGFyYWN0ZXJzIG5vdCB2YWxpZCBpbiBIVE1MXG4gKiBkb2N1bWVudHMgdXNpbmcgSFRNTCBlbnRpdGllcy5cbiAqXG4gKiBJZiBhIGNoYXJhY3RlciBoYXMgbm8gZXF1aXZhbGVudCBlbnRpdHksIGFcbiAqIG51bWVyaWMgaGV4YWRlY2ltYWwgcmVmZXJlbmNlIChlZy4gYCYjeGZjO2ApIHdpbGwgYmUgdXNlZC5cbiAqL1xuZXhwb3J0cy5lbmNvZGVOb25Bc2NpaUhUTUwgPSBnZXRBU0NJSUVuY29kZXIoaW52ZXJzZUhUTUwpO1xuZnVuY3Rpb24gZ2V0SW52ZXJzZU9iaihvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKVxuICAgICAgICAuc29ydCgpXG4gICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGludmVyc2UsIG5hbWUpIHtcbiAgICAgICAgaW52ZXJzZVtvYmpbbmFtZV1dID0gXCImXCIgKyBuYW1lICsgXCI7XCI7XG4gICAgICAgIHJldHVybiBpbnZlcnNlO1xuICAgIH0sIHt9KTtcbn1cbmZ1bmN0aW9uIGdldEludmVyc2VSZXBsYWNlcihpbnZlcnNlKSB7XG4gICAgdmFyIHNpbmdsZSA9IFtdO1xuICAgIHZhciBtdWx0aXBsZSA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3Qua2V5cyhpbnZlcnNlKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGsgPSBfYVtfaV07XG4gICAgICAgIGlmIChrLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgLy8gQWRkIHZhbHVlIHRvIHNpbmdsZSBhcnJheVxuICAgICAgICAgICAgc2luZ2xlLnB1c2goXCJcXFxcXCIgKyBrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEFkZCB2YWx1ZSB0byBtdWx0aXBsZSBhcnJheVxuICAgICAgICAgICAgbXVsdGlwbGUucHVzaChrKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBBZGQgcmFuZ2VzIHRvIHNpbmdsZSBjaGFyYWN0ZXJzLlxuICAgIHNpbmdsZS5zb3J0KCk7XG4gICAgZm9yICh2YXIgc3RhcnQgPSAwOyBzdGFydCA8IHNpbmdsZS5sZW5ndGggLSAxOyBzdGFydCsrKSB7XG4gICAgICAgIC8vIEZpbmQgdGhlIGVuZCBvZiBhIHJ1biBvZiBjaGFyYWN0ZXJzXG4gICAgICAgIHZhciBlbmQgPSBzdGFydDtcbiAgICAgICAgd2hpbGUgKGVuZCA8IHNpbmdsZS5sZW5ndGggLSAxICYmXG4gICAgICAgICAgICBzaW5nbGVbZW5kXS5jaGFyQ29kZUF0KDEpICsgMSA9PT0gc2luZ2xlW2VuZCArIDFdLmNoYXJDb2RlQXQoMSkpIHtcbiAgICAgICAgICAgIGVuZCArPSAxO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb3VudCA9IDEgKyBlbmQgLSBzdGFydDtcbiAgICAgICAgLy8gV2Ugd2FudCB0byByZXBsYWNlIGF0IGxlYXN0IHRocmVlIGNoYXJhY3RlcnNcbiAgICAgICAgaWYgKGNvdW50IDwgMylcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBzaW5nbGUuc3BsaWNlKHN0YXJ0LCBjb3VudCwgc2luZ2xlW3N0YXJ0XSArIFwiLVwiICsgc2luZ2xlW2VuZF0pO1xuICAgIH1cbiAgICBtdWx0aXBsZS51bnNoaWZ0KFwiW1wiICsgc2luZ2xlLmpvaW4oXCJcIikgKyBcIl1cIik7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAobXVsdGlwbGUuam9pbihcInxcIiksIFwiZ1wiKTtcbn1cbi8vIC9bXlxcMC1cXHg3Rl0vZ3VcbnZhciByZU5vbkFTQ0lJID0gLyg/OltcXHg4MC1cXHVEN0ZGXFx1RTAwMC1cXHVGRkZGXXxbXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdfFtcXHVEODAwLVxcdURCRkZdKD8hW1xcdURDMDAtXFx1REZGRl0pfCg/OlteXFx1RDgwMC1cXHVEQkZGXXxeKVtcXHVEQzAwLVxcdURGRkZdKS9nO1xudmFyIGdldENvZGVQb2ludCA9IFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bm5lY2Vzc2FyeS1jb25kaXRpb25cblN0cmluZy5wcm90b3R5cGUuY29kZVBvaW50QXQgIT0gbnVsbFxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICAgZnVuY3Rpb24gKHN0cikgeyByZXR1cm4gc3RyLmNvZGVQb2ludEF0KDApOyB9XG4gICAgOiAvLyBodHRwOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nI3N1cnJvZ2F0ZS1mb3JtdWxhZVxuICAgICAgICBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgcmV0dXJuIChjLmNoYXJDb2RlQXQoMCkgLSAweGQ4MDApICogMHg0MDAgK1xuICAgICAgICAgICAgICAgIGMuY2hhckNvZGVBdCgxKSAtXG4gICAgICAgICAgICAgICAgMHhkYzAwICtcbiAgICAgICAgICAgICAgICAweDEwMDAwO1xuICAgICAgICB9O1xuZnVuY3Rpb24gc2luZ2xlQ2hhclJlcGxhY2VyKGMpIHtcbiAgICByZXR1cm4gXCImI3hcIiArIChjLmxlbmd0aCA+IDEgPyBnZXRDb2RlUG9pbnQoYykgOiBjLmNoYXJDb2RlQXQoMCkpXG4gICAgICAgIC50b1N0cmluZygxNilcbiAgICAgICAgLnRvVXBwZXJDYXNlKCkgKyBcIjtcIjtcbn1cbmZ1bmN0aW9uIGdldEludmVyc2UoaW52ZXJzZSwgcmUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgICAgICAgIC5yZXBsYWNlKHJlLCBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gaW52ZXJzZVtuYW1lXTsgfSlcbiAgICAgICAgICAgIC5yZXBsYWNlKHJlTm9uQVNDSUksIHNpbmdsZUNoYXJSZXBsYWNlcik7XG4gICAgfTtcbn1cbnZhciByZUVzY2FwZUNoYXJzID0gbmV3IFJlZ0V4cCh4bWxSZXBsYWNlci5zb3VyY2UgKyBcInxcIiArIHJlTm9uQVNDSUkuc291cmNlLCBcImdcIik7XG4vKipcbiAqIEVuY29kZXMgYWxsIG5vbi1BU0NJSSBjaGFyYWN0ZXJzLCBhcyB3ZWxsIGFzIGNoYXJhY3RlcnMgbm90IHZhbGlkIGluIFhNTFxuICogZG9jdW1lbnRzIHVzaW5nIG51bWVyaWMgaGV4YWRlY2ltYWwgcmVmZXJlbmNlIChlZy4gYCYjeGZjO2ApLlxuICpcbiAqIEhhdmUgYSBsb29rIGF0IGBlc2NhcGVVVEY4YCBpZiB5b3Ugd2FudCBhIG1vcmUgY29uY2lzZSBvdXRwdXQgYXQgdGhlIGV4cGVuc2VcbiAqIG9mIHJlZHVjZWQgdHJhbnNwb3J0YWJpbGl0eS5cbiAqXG4gKiBAcGFyYW0gZGF0YSBTdHJpbmcgdG8gZXNjYXBlLlxuICovXG5mdW5jdGlvbiBlc2NhcGUoZGF0YSkge1xuICAgIHJldHVybiBkYXRhLnJlcGxhY2UocmVFc2NhcGVDaGFycywgc2luZ2xlQ2hhclJlcGxhY2VyKTtcbn1cbmV4cG9ydHMuZXNjYXBlID0gZXNjYXBlO1xuLyoqXG4gKiBFbmNvZGVzIGFsbCBjaGFyYWN0ZXJzIG5vdCB2YWxpZCBpbiBYTUwgZG9jdW1lbnRzIHVzaW5nIG51bWVyaWMgaGV4YWRlY2ltYWxcbiAqIHJlZmVyZW5jZSAoZWcuIGAmI3hmYztgKS5cbiAqXG4gKiBOb3RlIHRoYXQgdGhlIG91dHB1dCB3aWxsIGJlIGNoYXJhY3Rlci1zZXQgZGVwZW5kZW50LlxuICpcbiAqIEBwYXJhbSBkYXRhIFN0cmluZyB0byBlc2NhcGUuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVVURjgoZGF0YSkge1xuICAgIHJldHVybiBkYXRhLnJlcGxhY2UoeG1sUmVwbGFjZXIsIHNpbmdsZUNoYXJSZXBsYWNlcik7XG59XG5leHBvcnRzLmVzY2FwZVVURjggPSBlc2NhcGVVVEY4O1xuZnVuY3Rpb24gZ2V0QVNDSUlFbmNvZGVyKG9iaikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gZGF0YS5yZXBsYWNlKHJlRXNjYXBlQ2hhcnMsIGZ1bmN0aW9uIChjKSB7IHJldHVybiBvYmpbY10gfHwgc2luZ2xlQ2hhclJlcGxhY2VyKGMpOyB9KTtcbiAgICB9O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlY29kZVhNTFN0cmljdCA9IGV4cG9ydHMuZGVjb2RlSFRNTDVTdHJpY3QgPSBleHBvcnRzLmRlY29kZUhUTUw0U3RyaWN0ID0gZXhwb3J0cy5kZWNvZGVIVE1MNSA9IGV4cG9ydHMuZGVjb2RlSFRNTDQgPSBleHBvcnRzLmRlY29kZUhUTUxTdHJpY3QgPSBleHBvcnRzLmRlY29kZUhUTUwgPSBleHBvcnRzLmRlY29kZVhNTCA9IGV4cG9ydHMuZW5jb2RlSFRNTDUgPSBleHBvcnRzLmVuY29kZUhUTUw0ID0gZXhwb3J0cy5lc2NhcGVVVEY4ID0gZXhwb3J0cy5lc2NhcGUgPSBleHBvcnRzLmVuY29kZU5vbkFzY2lpSFRNTCA9IGV4cG9ydHMuZW5jb2RlSFRNTCA9IGV4cG9ydHMuZW5jb2RlWE1MID0gZXhwb3J0cy5lbmNvZGUgPSBleHBvcnRzLmRlY29kZVN0cmljdCA9IGV4cG9ydHMuZGVjb2RlID0gdm9pZCAwO1xudmFyIGRlY29kZV8xID0gcmVxdWlyZShcIi4vZGVjb2RlXCIpO1xudmFyIGVuY29kZV8xID0gcmVxdWlyZShcIi4vZW5jb2RlXCIpO1xuLyoqXG4gKiBEZWNvZGVzIGEgc3RyaW5nIHdpdGggZW50aXRpZXMuXG4gKlxuICogQHBhcmFtIGRhdGEgU3RyaW5nIHRvIGRlY29kZS5cbiAqIEBwYXJhbSBsZXZlbCBPcHRpb25hbCBsZXZlbCB0byBkZWNvZGUgYXQuIDAgPSBYTUwsIDEgPSBIVE1MLiBEZWZhdWx0IGlzIDAuXG4gKiBAZGVwcmVjYXRlZCBVc2UgYGRlY29kZVhNTGAgb3IgYGRlY29kZUhUTUxgIGRpcmVjdGx5LlxuICovXG5mdW5jdGlvbiBkZWNvZGUoZGF0YSwgbGV2ZWwpIHtcbiAgICByZXR1cm4gKCFsZXZlbCB8fCBsZXZlbCA8PSAwID8gZGVjb2RlXzEuZGVjb2RlWE1MIDogZGVjb2RlXzEuZGVjb2RlSFRNTCkoZGF0YSk7XG59XG5leHBvcnRzLmRlY29kZSA9IGRlY29kZTtcbi8qKlxuICogRGVjb2RlcyBhIHN0cmluZyB3aXRoIGVudGl0aWVzLiBEb2VzIG5vdCBhbGxvdyBtaXNzaW5nIHRyYWlsaW5nIHNlbWljb2xvbnMgZm9yIGVudGl0aWVzLlxuICpcbiAqIEBwYXJhbSBkYXRhIFN0cmluZyB0byBkZWNvZGUuXG4gKiBAcGFyYW0gbGV2ZWwgT3B0aW9uYWwgbGV2ZWwgdG8gZGVjb2RlIGF0LiAwID0gWE1MLCAxID0gSFRNTC4gRGVmYXVsdCBpcyAwLlxuICogQGRlcHJlY2F0ZWQgVXNlIGBkZWNvZGVIVE1MU3RyaWN0YCBvciBgZGVjb2RlWE1MYCBkaXJlY3RseS5cbiAqL1xuZnVuY3Rpb24gZGVjb2RlU3RyaWN0KGRhdGEsIGxldmVsKSB7XG4gICAgcmV0dXJuICghbGV2ZWwgfHwgbGV2ZWwgPD0gMCA/IGRlY29kZV8xLmRlY29kZVhNTCA6IGRlY29kZV8xLmRlY29kZUhUTUxTdHJpY3QpKGRhdGEpO1xufVxuZXhwb3J0cy5kZWNvZGVTdHJpY3QgPSBkZWNvZGVTdHJpY3Q7XG4vKipcbiAqIEVuY29kZXMgYSBzdHJpbmcgd2l0aCBlbnRpdGllcy5cbiAqXG4gKiBAcGFyYW0gZGF0YSBTdHJpbmcgdG8gZW5jb2RlLlxuICogQHBhcmFtIGxldmVsIE9wdGlvbmFsIGxldmVsIHRvIGVuY29kZSBhdC4gMCA9IFhNTCwgMSA9IEhUTUwuIERlZmF1bHQgaXMgMC5cbiAqIEBkZXByZWNhdGVkIFVzZSBgZW5jb2RlSFRNTGAsIGBlbmNvZGVYTUxgIG9yIGBlbmNvZGVOb25Bc2NpaUhUTUxgIGRpcmVjdGx5LlxuICovXG5mdW5jdGlvbiBlbmNvZGUoZGF0YSwgbGV2ZWwpIHtcbiAgICByZXR1cm4gKCFsZXZlbCB8fCBsZXZlbCA8PSAwID8gZW5jb2RlXzEuZW5jb2RlWE1MIDogZW5jb2RlXzEuZW5jb2RlSFRNTCkoZGF0YSk7XG59XG5leHBvcnRzLmVuY29kZSA9IGVuY29kZTtcbnZhciBlbmNvZGVfMiA9IHJlcXVpcmUoXCIuL2VuY29kZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImVuY29kZVhNTFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZW5jb2RlXzIuZW5jb2RlWE1MOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZW5jb2RlSFRNTFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZW5jb2RlXzIuZW5jb2RlSFRNTDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImVuY29kZU5vbkFzY2lpSFRNTFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZW5jb2RlXzIuZW5jb2RlTm9uQXNjaWlIVE1MOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZXNjYXBlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBlbmNvZGVfMi5lc2NhcGU7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJlc2NhcGVVVEY4XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBlbmNvZGVfMi5lc2NhcGVVVEY4OyB9IH0pO1xuLy8gTGVnYWN5IGFsaWFzZXMgKGRlcHJlY2F0ZWQpXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJlbmNvZGVIVE1MNFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZW5jb2RlXzIuZW5jb2RlSFRNTDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImVuY29kZUhUTUw1XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBlbmNvZGVfMi5lbmNvZGVIVE1MOyB9IH0pO1xudmFyIGRlY29kZV8yID0gcmVxdWlyZShcIi4vZGVjb2RlXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVjb2RlWE1MXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkZWNvZGVfMi5kZWNvZGVYTUw7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWNvZGVIVE1MXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkZWNvZGVfMi5kZWNvZGVIVE1MOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVjb2RlSFRNTFN0cmljdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZGVjb2RlXzIuZGVjb2RlSFRNTFN0cmljdDsgfSB9KTtcbi8vIExlZ2FjeSBhbGlhc2VzIChkZXByZWNhdGVkKVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVjb2RlSFRNTDRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRlY29kZV8yLmRlY29kZUhUTUw7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWNvZGVIVE1MNVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZGVjb2RlXzIuZGVjb2RlSFRNTDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlY29kZUhUTUw0U3RyaWN0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkZWNvZGVfMi5kZWNvZGVIVE1MU3RyaWN0OyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVjb2RlSFRNTDVTdHJpY3RcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRlY29kZV8yLmRlY29kZUhUTUxTdHJpY3Q7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWNvZGVYTUxTdHJpY3RcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRlY29kZV8yLmRlY29kZVhNTDsgfSB9KTtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcblxuXG5jb25zdCB7IGFwcGVuZENoaWxkIH0gPSByZXF1aXJlKFwiZG9tdXRpbHNcIilcblxubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuY29udGVudC5pZCA9ICdjb250ZW50J1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoY29udGVudClcblxuY29udGVudC50ZXh0Q29udGVudCA9IFwiSGVsbG8gV29ybGRcIlxuY29udGVudC5jbGFzc0xpc3QuYWRkKCdyZWQnKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9