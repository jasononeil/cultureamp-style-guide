webpackJsonp([274576253422262],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = whitespace;
	
	var fromCode = String.fromCharCode;
	var re = /\s/;
	
	/* Check if the given character code, or the character
	 * code at the first character, is a whitespace character. */
	function whitespace(character) {
	  return re.test(
	    typeof character === 'number' ? fromCode(character) : character.charAt(0)
	  );
	}


/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _browserSprite = __webpack_require__(142);
	
	var _browserSprite2 = _interopRequireDefault(_browserSprite);
	
	var _domready = __webpack_require__(54);
	
	var _domready2 = _interopRequireDefault(_domready);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Copy-pasted from svg-sprite-loader/runtime/browser-sprite.js to customize
	// `attrs` passed to BrowserSprite constructor.
	// See https://github.com/kisenka/svg-sprite-loader/issues/200 for an issue that
	// may lead to a cleaner way of customising this.
	
	var spriteNodeId = '__SVG_SPRITE_NODE__';
	var spriteGlobalVarName = '__SVG_SPRITE__';
	var isSpriteExists = !!window[spriteGlobalVarName];
	
	// eslint-disable-next-line import/no-mutable-exports
	var sprite = void 0;
	
	if (isSpriteExists) {
	  sprite = window[spriteGlobalVarName];
	} else {
	  var _attrs;
	
	  sprite = new _browserSprite2.default({
	    // customized to hide from screen readers
	    attrs: (_attrs = { id: spriteNodeId }, _attrs['aria-hidden'] = 'true', _attrs.focusable = 'false', _attrs)
	  });
	  window[spriteGlobalVarName] = sprite;
	}
	
	var loadSprite = function loadSprite() {
	  /**
	   * Check for page already contains sprite node
	   * If found - attach to and reuse it's content
	   * If not - render and mount the new sprite
	   */
	  var existing = document.getElementById(spriteNodeId);
	
	  if (existing) {
	    sprite.attach(existing);
	  } else {
	    sprite.mount(document.body, true);
	  }
	};
	
	if (document.body) {
	  loadSprite();
	} else {
	  (0, _domready2.default)(loadSprite);
	}
	
	exports.default = sprite;
	module.exports = exports['default'];

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
		 true ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
		(global.BrowserSpriteSymbol = factory());
	}(this, (function () { 'use strict';
	
	var SpriteSymbol = function SpriteSymbol(ref) {
	  var id = ref.id;
	  var viewBox = ref.viewBox;
	  var content = ref.content;
	
	  this.id = id;
	  this.viewBox = viewBox;
	  this.content = content;
	};
	
	/**
	 * @return {string}
	 */
	SpriteSymbol.prototype.stringify = function stringify () {
	  return this.content;
	};
	
	/**
	 * @return {string}
	 */
	SpriteSymbol.prototype.toString = function toString () {
	  return this.stringify();
	};
	
	SpriteSymbol.prototype.destroy = function destroy () {
	    var this$1 = this;
	
	  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
	};
	
	/**
	 * @param {string} content
	 * @return {Element}
	 */
	var parse = function (content) {
	  var hasImportNode = !!document.importNode;
	  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;
	
	  /**
	   * Fix for browser which are throwing WrongDocumentError
	   * if you insert an element which is not part of the document
	   * @see http://stackoverflow.com/a/7986519/4624403
	   */
	  if (hasImportNode) {
	    return document.importNode(doc, true);
	  }
	
	  return doc;
	};
	
	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
	
	
	
	
	
	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}
	
	var index = createCommonjsModule(function (module, exports) {
	(function (root, factory) {
	    if (false) {
	        undefined(factory);
	    } else {
	        module.exports = factory();
	    }
	}(commonjsGlobal, function () {
	
	function isMergeableObject(val) {
	    var nonNullObject = val && typeof val === 'object';
	
	    return nonNullObject
	        && Object.prototype.toString.call(val) !== '[object RegExp]'
	        && Object.prototype.toString.call(val) !== '[object Date]'
	}
	
	function emptyTarget(val) {
	    return Array.isArray(val) ? [] : {}
	}
	
	function cloneIfNecessary(value, optionsArgument) {
	    var clone = optionsArgument && optionsArgument.clone === true;
	    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
	}
	
	function defaultArrayMerge(target, source, optionsArgument) {
	    var destination = target.slice();
	    source.forEach(function(e, i) {
	        if (typeof destination[i] === 'undefined') {
	            destination[i] = cloneIfNecessary(e, optionsArgument);
	        } else if (isMergeableObject(e)) {
	            destination[i] = deepmerge(target[i], e, optionsArgument);
	        } else if (target.indexOf(e) === -1) {
	            destination.push(cloneIfNecessary(e, optionsArgument));
	        }
	    });
	    return destination
	}
	
	function mergeObject(target, source, optionsArgument) {
	    var destination = {};
	    if (isMergeableObject(target)) {
	        Object.keys(target).forEach(function (key) {
	            destination[key] = cloneIfNecessary(target[key], optionsArgument);
	        });
	    }
	    Object.keys(source).forEach(function (key) {
	        if (!isMergeableObject(source[key]) || !target[key]) {
	            destination[key] = cloneIfNecessary(source[key], optionsArgument);
	        } else {
	            destination[key] = deepmerge(target[key], source[key], optionsArgument);
	        }
	    });
	    return destination
	}
	
	function deepmerge(target, source, optionsArgument) {
	    var array = Array.isArray(source);
	    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
	    var arrayMerge = options.arrayMerge || defaultArrayMerge;
	
	    if (array) {
	        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
	    } else {
	        return mergeObject(target, source, optionsArgument)
	    }
	}
	
	deepmerge.all = function deepmergeAll(array, optionsArgument) {
	    if (!Array.isArray(array) || array.length < 2) {
	        throw new Error('first argument should be an array with at least two elements')
	    }
	
	    // we are sure there are at least 2 values, so it is safe to have no initial value
	    return array.reduce(function(prev, next) {
	        return deepmerge(prev, next, optionsArgument)
	    })
	};
	
	return deepmerge
	
	}));
	});
	
	var namespaces_1 = createCommonjsModule(function (module, exports) {
	var namespaces = {
	  svg: {
	    name: 'xmlns',
	    uri: 'http://www.w3.org/2000/svg'
	  },
	  xlink: {
	    name: 'xmlns:xlink',
	    uri: 'http://www.w3.org/1999/xlink'
	  }
	};
	
	exports.default = namespaces;
	module.exports = exports.default;
	});
	
	/**
	 * @param {Object} attrs
	 * @return {string}
	 */
	var objectToAttrsString = function (attrs) {
	  return Object.keys(attrs).map(function (attr) {
	    var value = attrs[attr].toString().replace(/"/g, '&quot;');
	    return (attr + "=\"" + value + "\"");
	  }).join(' ');
	};
	
	var svg = namespaces_1.svg;
	var xlink = namespaces_1.xlink;
	
	var defaultAttrs = {};
	defaultAttrs[svg.name] = svg.uri;
	defaultAttrs[xlink.name] = xlink.uri;
	
	/**
	 * @param {string} [content]
	 * @param {Object} [attributes]
	 * @return {string}
	 */
	var wrapInSvgString = function (content, attributes) {
	  if ( content === void 0 ) content = '';
	
	  var attrs = index(defaultAttrs, attributes || {});
	  var attrsRendered = objectToAttrsString(attrs);
	  return ("<svg " + attrsRendered + ">" + content + "</svg>");
	};
	
	var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
	  function BrowserSpriteSymbol () {
	    SpriteSymbol$$1.apply(this, arguments);
	  }
	
	  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
	  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
	  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;
	
	  var prototypeAccessors = { isMounted: {} };
	
	  prototypeAccessors.isMounted.get = function () {
	    return !!this.node;
	  };
	
	  /**
	   * @param {Element} node
	   * @return {BrowserSpriteSymbol}
	   */
	  BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode (node) {
	    return new BrowserSpriteSymbol({
	      id: node.getAttribute('id'),
	      viewBox: node.getAttribute('viewBox'),
	      content: node.outerHTML
	    });
	  };
	
	  BrowserSpriteSymbol.prototype.destroy = function destroy () {
	    if (this.isMounted) {
	      this.unmount();
	    }
	    SpriteSymbol$$1.prototype.destroy.call(this);
	  };
	
	  /**
	   * @param {Element|string} target
	   * @return {Element}
	   */
	  BrowserSpriteSymbol.prototype.mount = function mount (target) {
	    if (this.isMounted) {
	      return this.node;
	    }
	
	    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
	    var node = this.render();
	    this.node = node;
	
	    mountTarget.appendChild(node);
	
	    return node;
	  };
	
	  /**
	   * @return {Element}
	   */
	  BrowserSpriteSymbol.prototype.render = function render () {
	    var content = this.stringify();
	    return parse(wrapInSvgString(content)).childNodes[0];
	  };
	
	  BrowserSpriteSymbol.prototype.unmount = function unmount () {
	    this.node.parentNode.removeChild(this.node);
	  };
	
	  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );
	
	  return BrowserSpriteSymbol;
	}(SpriteSymbol));
	
	return BrowserSpriteSymbol;
	
	})));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	module.exports = extend
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	function extend() {
	    var target = {}
	
	    for (var i = 0; i < arguments.length; i++) {
	        var source = arguments[i]
	
	        for (var key in source) {
	            if (hasOwnProperty.call(source, key)) {
	                target[key] = source[key]
	            }
	        }
	    }
	
	    return target
	}


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(24);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _IconModule = __webpack_require__(108);
	
	var _IconModule2 = _interopRequireDefault(_IconModule);
	
	var _error = __webpack_require__(85);
	
	var _reactHtmlId = __webpack_require__(133);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var IMG = 'img';
	var PRESENTATION = 'presentation';
	var roles = [IMG, // meaningful, title should be read aloud to users who can't see it
	PRESENTATION];
	
	var Icon = function (_React$Component) {
	  _inherits(Icon, _React$Component);
	
	  function Icon() {
	    _classCallCheck(this, Icon);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this));
	
	    (0, _reactHtmlId.enableUniqueIds)(_this);
	    return _this;
	  }
	
	  Icon.prototype.render = function render() {
	    var _classNames;
	
	    var _props = this.props,
	        icon = _props.icon,
	        inheritSize = _props.inheritSize,
	        role = _props.role,
	        title = _props.title,
	        desc = _props.desc;
	
	
	    var classes = (0, _classnames2.default)(_IconModule2.default.icon, (_classNames = {}, _classNames[_IconModule2.default.inheritSize] = inheritSize, _classNames));
	
	    return _react2.default.createElement(
	      'svg',
	      _extends({
	        className: classes,
	        viewBox: icon.viewBox,
	        focusable: 'false' // Work around IE11 making all SVGs focusable. See http://simplyaccessible.com/article/7-solutions-svgs/#acc-heading-4
	      }, this.accessibilityProps()),
	      this.renderTitle(),
	      this.renderDesc(),
	      _react2.default.createElement('use', { xlinkHref: '#' + icon.id })
	    );
	  };
	
	  Icon.prototype.accessibilityProps = function accessibilityProps() {
	    var _ref;
	
	    return _ref = {
	      role: this.props.role
	    }, _ref['aria-hidden'] = !this.isMeaningfulImg() || undefined, _ref['aria-labelledby'] = this.labelledBy(), _ref;
	  };
	
	  Icon.prototype.labelledBy = function labelledBy() {
	    if (this.isMeaningfulImg()) return this.props.desc ? this.getUniqueId('title') + ' ' + this.getUniqueId('desc') // read out title and description together if both are present
	    : this.getUniqueId('title');
	  };
	
	  Icon.prototype.renderTitle = function renderTitle() {
	    if (this.isMeaningfulImg()) return _react2.default.createElement(
	      'title',
	      { id: this.getUniqueId('title') },
	      this.props.title
	    );
	  };
	
	  Icon.prototype.renderDesc = function renderDesc() {
	    if (this.isMeaningfulImg() && this.props.desc) return _react2.default.createElement(
	      'desc',
	      { id: this.getUniqueId('desc') },
	      desc
	    );
	  };
	
	  Icon.prototype.isMeaningfulImg = function isMeaningfulImg() {
	    return this.props.role === IMG;
	  };
	
	  Icon.prototype.componentWillMount = function componentWillMount() {
	    if (this.isMeaningfulImg() && !this.props.title) {
	      (0, _error.warn)('\n        Icon with role "' + IMG + '" missing a title attribute.\n\n        Assistive technologies that enable vision-impaired users to read web pages\n        can treat images (including icons) as either decorative or meaningful. Only\n        images with a role of "' + IMG + '" (meaningful) will be read aloud to the user.\n        These images must therefore have a title attribute to provide the text that\n        will be read aloud.\n\n        Either add the missing title prop, or set this icon\'s role to\n        "' + PRESENTATION + '" to indicate it is not meaningful.\n      ');
	    }
	  };
	
	  return Icon;
	}(_react2.default.Component);
	
	Icon.propTypes = {
	  icon: _propTypes2.default.shape({
	    id: _propTypes2.default.string.isRequired,
	    viewBox: _propTypes2.default.string.isRequired
	  }).isRequired,
	  inheritSize: _propTypes2.default.bool,
	  role: _propTypes2.default.oneOf(roles),
	  title: _propTypes2.default.string,
	  desc: _propTypes2.default.string
	};
	Icon.defaultProps = {
	  inheritSize: false,
	  role: IMG
	};
	exports.default = Icon;
	module.exports = exports['default'];

/***/ }),
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */
/***/ (function(module, exports) {

	
	exports = module.exports = trim;
	
	function trim(str){
	  return str.replace(/^\s*|\s*$/g, '');
	}
	
	exports.left = function(str){
	  return str.replace(/^\s*/, '');
	};
	
	exports.right = function(str){
	  return str.replace(/\s*$/, '');
	};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

	'use strict';
	module.exports = function () {
		return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g;
	};


/***/ }),
/* 47 */,
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	/* MIT license */
	var cssKeywords = __webpack_require__(63);
	
	// NOTE: conversions should only return primitive values (i.e. arrays, or
	//       values that give correct `typeof` results).
	//       do not use box values types (i.e. Number(), String(), etc.)
	
	var reverseKeywords = {};
	for (var key in cssKeywords) {
		if (cssKeywords.hasOwnProperty(key)) {
			reverseKeywords[cssKeywords[key]] = key;
		}
	}
	
	var convert = module.exports = {
		rgb: {channels: 3, labels: 'rgb'},
		hsl: {channels: 3, labels: 'hsl'},
		hsv: {channels: 3, labels: 'hsv'},
		hwb: {channels: 3, labels: 'hwb'},
		cmyk: {channels: 4, labels: 'cmyk'},
		xyz: {channels: 3, labels: 'xyz'},
		lab: {channels: 3, labels: 'lab'},
		lch: {channels: 3, labels: 'lch'},
		hex: {channels: 1, labels: ['hex']},
		keyword: {channels: 1, labels: ['keyword']},
		ansi16: {channels: 1, labels: ['ansi16']},
		ansi256: {channels: 1, labels: ['ansi256']},
		hcg: {channels: 3, labels: ['h', 'c', 'g']},
		apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
		gray: {channels: 1, labels: ['gray']}
	};
	
	// hide .channels and .labels properties
	for (var model in convert) {
		if (convert.hasOwnProperty(model)) {
			if (!('channels' in convert[model])) {
				throw new Error('missing channels property: ' + model);
			}
	
			if (!('labels' in convert[model])) {
				throw new Error('missing channel labels property: ' + model);
			}
	
			if (convert[model].labels.length !== convert[model].channels) {
				throw new Error('channel and label counts mismatch: ' + model);
			}
	
			var channels = convert[model].channels;
			var labels = convert[model].labels;
			delete convert[model].channels;
			delete convert[model].labels;
			Object.defineProperty(convert[model], 'channels', {value: channels});
			Object.defineProperty(convert[model], 'labels', {value: labels});
		}
	}
	
	convert.rgb.hsl = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;
		var min = Math.min(r, g, b);
		var max = Math.max(r, g, b);
		var delta = max - min;
		var h;
		var s;
		var l;
	
		if (max === min) {
			h = 0;
		} else if (r === max) {
			h = (g - b) / delta;
		} else if (g === max) {
			h = 2 + (b - r) / delta;
		} else if (b === max) {
			h = 4 + (r - g) / delta;
		}
	
		h = Math.min(h * 60, 360);
	
		if (h < 0) {
			h += 360;
		}
	
		l = (min + max) / 2;
	
		if (max === min) {
			s = 0;
		} else if (l <= 0.5) {
			s = delta / (max + min);
		} else {
			s = delta / (2 - max - min);
		}
	
		return [h, s * 100, l * 100];
	};
	
	convert.rgb.hsv = function (rgb) {
		var r = rgb[0];
		var g = rgb[1];
		var b = rgb[2];
		var min = Math.min(r, g, b);
		var max = Math.max(r, g, b);
		var delta = max - min;
		var h;
		var s;
		var v;
	
		if (max === 0) {
			s = 0;
		} else {
			s = (delta / max * 1000) / 10;
		}
	
		if (max === min) {
			h = 0;
		} else if (r === max) {
			h = (g - b) / delta;
		} else if (g === max) {
			h = 2 + (b - r) / delta;
		} else if (b === max) {
			h = 4 + (r - g) / delta;
		}
	
		h = Math.min(h * 60, 360);
	
		if (h < 0) {
			h += 360;
		}
	
		v = ((max / 255) * 1000) / 10;
	
		return [h, s, v];
	};
	
	convert.rgb.hwb = function (rgb) {
		var r = rgb[0];
		var g = rgb[1];
		var b = rgb[2];
		var h = convert.rgb.hsl(rgb)[0];
		var w = 1 / 255 * Math.min(r, Math.min(g, b));
	
		b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
	
		return [h, w * 100, b * 100];
	};
	
	convert.rgb.cmyk = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;
		var c;
		var m;
		var y;
		var k;
	
		k = Math.min(1 - r, 1 - g, 1 - b);
		c = (1 - r - k) / (1 - k) || 0;
		m = (1 - g - k) / (1 - k) || 0;
		y = (1 - b - k) / (1 - k) || 0;
	
		return [c * 100, m * 100, y * 100, k * 100];
	};
	
	/**
	 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
	 * */
	function comparativeDistance(x, y) {
		return (
			Math.pow(x[0] - y[0], 2) +
			Math.pow(x[1] - y[1], 2) +
			Math.pow(x[2] - y[2], 2)
		);
	}
	
	convert.rgb.keyword = function (rgb) {
		var reversed = reverseKeywords[rgb];
		if (reversed) {
			return reversed;
		}
	
		var currentClosestDistance = Infinity;
		var currentClosestKeyword;
	
		for (var keyword in cssKeywords) {
			if (cssKeywords.hasOwnProperty(keyword)) {
				var value = cssKeywords[keyword];
	
				// Compute comparative distance
				var distance = comparativeDistance(rgb, value);
	
				// Check if its less, if so set as closest
				if (distance < currentClosestDistance) {
					currentClosestDistance = distance;
					currentClosestKeyword = keyword;
				}
			}
		}
	
		return currentClosestKeyword;
	};
	
	convert.keyword.rgb = function (keyword) {
		return cssKeywords[keyword];
	};
	
	convert.rgb.xyz = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;
	
		// assume sRGB
		r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
		g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
		b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);
	
		var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
		var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
		var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);
	
		return [x * 100, y * 100, z * 100];
	};
	
	convert.rgb.lab = function (rgb) {
		var xyz = convert.rgb.xyz(rgb);
		var x = xyz[0];
		var y = xyz[1];
		var z = xyz[2];
		var l;
		var a;
		var b;
	
		x /= 95.047;
		y /= 100;
		z /= 108.883;
	
		x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
		y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
		z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);
	
		l = (116 * y) - 16;
		a = 500 * (x - y);
		b = 200 * (y - z);
	
		return [l, a, b];
	};
	
	convert.hsl.rgb = function (hsl) {
		var h = hsl[0] / 360;
		var s = hsl[1] / 100;
		var l = hsl[2] / 100;
		var t1;
		var t2;
		var t3;
		var rgb;
		var val;
	
		if (s === 0) {
			val = l * 255;
			return [val, val, val];
		}
	
		if (l < 0.5) {
			t2 = l * (1 + s);
		} else {
			t2 = l + s - l * s;
		}
	
		t1 = 2 * l - t2;
	
		rgb = [0, 0, 0];
		for (var i = 0; i < 3; i++) {
			t3 = h + 1 / 3 * -(i - 1);
			if (t3 < 0) {
				t3++;
			}
			if (t3 > 1) {
				t3--;
			}
	
			if (6 * t3 < 1) {
				val = t1 + (t2 - t1) * 6 * t3;
			} else if (2 * t3 < 1) {
				val = t2;
			} else if (3 * t3 < 2) {
				val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
			} else {
				val = t1;
			}
	
			rgb[i] = val * 255;
		}
	
		return rgb;
	};
	
	convert.hsl.hsv = function (hsl) {
		var h = hsl[0];
		var s = hsl[1] / 100;
		var l = hsl[2] / 100;
		var smin = s;
		var lmin = Math.max(l, 0.01);
		var sv;
		var v;
	
		l *= 2;
		s *= (l <= 1) ? l : 2 - l;
		smin *= lmin <= 1 ? lmin : 2 - lmin;
		v = (l + s) / 2;
		sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);
	
		return [h, sv * 100, v * 100];
	};
	
	convert.hsv.rgb = function (hsv) {
		var h = hsv[0] / 60;
		var s = hsv[1] / 100;
		var v = hsv[2] / 100;
		var hi = Math.floor(h) % 6;
	
		var f = h - Math.floor(h);
		var p = 255 * v * (1 - s);
		var q = 255 * v * (1 - (s * f));
		var t = 255 * v * (1 - (s * (1 - f)));
		v *= 255;
	
		switch (hi) {
			case 0:
				return [v, t, p];
			case 1:
				return [q, v, p];
			case 2:
				return [p, v, t];
			case 3:
				return [p, q, v];
			case 4:
				return [t, p, v];
			case 5:
				return [v, p, q];
		}
	};
	
	convert.hsv.hsl = function (hsv) {
		var h = hsv[0];
		var s = hsv[1] / 100;
		var v = hsv[2] / 100;
		var vmin = Math.max(v, 0.01);
		var lmin;
		var sl;
		var l;
	
		l = (2 - s) * v;
		lmin = (2 - s) * vmin;
		sl = s * vmin;
		sl /= (lmin <= 1) ? lmin : 2 - lmin;
		sl = sl || 0;
		l /= 2;
	
		return [h, sl * 100, l * 100];
	};
	
	// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
	convert.hwb.rgb = function (hwb) {
		var h = hwb[0] / 360;
		var wh = hwb[1] / 100;
		var bl = hwb[2] / 100;
		var ratio = wh + bl;
		var i;
		var v;
		var f;
		var n;
	
		// wh + bl cant be > 1
		if (ratio > 1) {
			wh /= ratio;
			bl /= ratio;
		}
	
		i = Math.floor(6 * h);
		v = 1 - bl;
		f = 6 * h - i;
	
		if ((i & 0x01) !== 0) {
			f = 1 - f;
		}
	
		n = wh + f * (v - wh); // linear interpolation
	
		var r;
		var g;
		var b;
		switch (i) {
			default:
			case 6:
			case 0: r = v; g = n; b = wh; break;
			case 1: r = n; g = v; b = wh; break;
			case 2: r = wh; g = v; b = n; break;
			case 3: r = wh; g = n; b = v; break;
			case 4: r = n; g = wh; b = v; break;
			case 5: r = v; g = wh; b = n; break;
		}
	
		return [r * 255, g * 255, b * 255];
	};
	
	convert.cmyk.rgb = function (cmyk) {
		var c = cmyk[0] / 100;
		var m = cmyk[1] / 100;
		var y = cmyk[2] / 100;
		var k = cmyk[3] / 100;
		var r;
		var g;
		var b;
	
		r = 1 - Math.min(1, c * (1 - k) + k);
		g = 1 - Math.min(1, m * (1 - k) + k);
		b = 1 - Math.min(1, y * (1 - k) + k);
	
		return [r * 255, g * 255, b * 255];
	};
	
	convert.xyz.rgb = function (xyz) {
		var x = xyz[0] / 100;
		var y = xyz[1] / 100;
		var z = xyz[2] / 100;
		var r;
		var g;
		var b;
	
		r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
		g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
		b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);
	
		// assume sRGB
		r = r > 0.0031308
			? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
			: r * 12.92;
	
		g = g > 0.0031308
			? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
			: g * 12.92;
	
		b = b > 0.0031308
			? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
			: b * 12.92;
	
		r = Math.min(Math.max(0, r), 1);
		g = Math.min(Math.max(0, g), 1);
		b = Math.min(Math.max(0, b), 1);
	
		return [r * 255, g * 255, b * 255];
	};
	
	convert.xyz.lab = function (xyz) {
		var x = xyz[0];
		var y = xyz[1];
		var z = xyz[2];
		var l;
		var a;
		var b;
	
		x /= 95.047;
		y /= 100;
		z /= 108.883;
	
		x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
		y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
		z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);
	
		l = (116 * y) - 16;
		a = 500 * (x - y);
		b = 200 * (y - z);
	
		return [l, a, b];
	};
	
	convert.lab.xyz = function (lab) {
		var l = lab[0];
		var a = lab[1];
		var b = lab[2];
		var x;
		var y;
		var z;
	
		y = (l + 16) / 116;
		x = a / 500 + y;
		z = y - b / 200;
	
		var y2 = Math.pow(y, 3);
		var x2 = Math.pow(x, 3);
		var z2 = Math.pow(z, 3);
		y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
		x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
		z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;
	
		x *= 95.047;
		y *= 100;
		z *= 108.883;
	
		return [x, y, z];
	};
	
	convert.lab.lch = function (lab) {
		var l = lab[0];
		var a = lab[1];
		var b = lab[2];
		var hr;
		var h;
		var c;
	
		hr = Math.atan2(b, a);
		h = hr * 360 / 2 / Math.PI;
	
		if (h < 0) {
			h += 360;
		}
	
		c = Math.sqrt(a * a + b * b);
	
		return [l, c, h];
	};
	
	convert.lch.lab = function (lch) {
		var l = lch[0];
		var c = lch[1];
		var h = lch[2];
		var a;
		var b;
		var hr;
	
		hr = h / 360 * 2 * Math.PI;
		a = c * Math.cos(hr);
		b = c * Math.sin(hr);
	
		return [l, a, b];
	};
	
	convert.rgb.ansi16 = function (args) {
		var r = args[0];
		var g = args[1];
		var b = args[2];
		var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization
	
		value = Math.round(value / 50);
	
		if (value === 0) {
			return 30;
		}
	
		var ansi = 30
			+ ((Math.round(b / 255) << 2)
			| (Math.round(g / 255) << 1)
			| Math.round(r / 255));
	
		if (value === 2) {
			ansi += 60;
		}
	
		return ansi;
	};
	
	convert.hsv.ansi16 = function (args) {
		// optimization here; we already know the value and don't need to get
		// it converted for us.
		return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
	};
	
	convert.rgb.ansi256 = function (args) {
		var r = args[0];
		var g = args[1];
		var b = args[2];
	
		// we use the extended greyscale palette here, with the exception of
		// black and white. normal palette only has 4 greyscale shades.
		if (r === g && g === b) {
			if (r < 8) {
				return 16;
			}
	
			if (r > 248) {
				return 231;
			}
	
			return Math.round(((r - 8) / 247) * 24) + 232;
		}
	
		var ansi = 16
			+ (36 * Math.round(r / 255 * 5))
			+ (6 * Math.round(g / 255 * 5))
			+ Math.round(b / 255 * 5);
	
		return ansi;
	};
	
	convert.ansi16.rgb = function (args) {
		var color = args % 10;
	
		// handle greyscale
		if (color === 0 || color === 7) {
			if (args > 50) {
				color += 3.5;
			}
	
			color = color / 10.5 * 255;
	
			return [color, color, color];
		}
	
		var mult = (~~(args > 50) + 1) * 0.5;
		var r = ((color & 1) * mult) * 255;
		var g = (((color >> 1) & 1) * mult) * 255;
		var b = (((color >> 2) & 1) * mult) * 255;
	
		return [r, g, b];
	};
	
	convert.ansi256.rgb = function (args) {
		// handle greyscale
		if (args >= 232) {
			var c = (args - 232) * 10 + 8;
			return [c, c, c];
		}
	
		args -= 16;
	
		var rem;
		var r = Math.floor(args / 36) / 5 * 255;
		var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
		var b = (rem % 6) / 5 * 255;
	
		return [r, g, b];
	};
	
	convert.rgb.hex = function (args) {
		var integer = ((Math.round(args[0]) & 0xFF) << 16)
			+ ((Math.round(args[1]) & 0xFF) << 8)
			+ (Math.round(args[2]) & 0xFF);
	
		var string = integer.toString(16).toUpperCase();
		return '000000'.substring(string.length) + string;
	};
	
	convert.hex.rgb = function (args) {
		var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
		if (!match) {
			return [0, 0, 0];
		}
	
		var colorString = match[0];
	
		if (match[0].length === 3) {
			colorString = colorString.split('').map(function (char) {
				return char + char;
			}).join('');
		}
	
		var integer = parseInt(colorString, 16);
		var r = (integer >> 16) & 0xFF;
		var g = (integer >> 8) & 0xFF;
		var b = integer & 0xFF;
	
		return [r, g, b];
	};
	
	convert.rgb.hcg = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;
		var max = Math.max(Math.max(r, g), b);
		var min = Math.min(Math.min(r, g), b);
		var chroma = (max - min);
		var grayscale;
		var hue;
	
		if (chroma < 1) {
			grayscale = min / (1 - chroma);
		} else {
			grayscale = 0;
		}
	
		if (chroma <= 0) {
			hue = 0;
		} else
		if (max === r) {
			hue = ((g - b) / chroma) % 6;
		} else
		if (max === g) {
			hue = 2 + (b - r) / chroma;
		} else {
			hue = 4 + (r - g) / chroma + 4;
		}
	
		hue /= 6;
		hue %= 1;
	
		return [hue * 360, chroma * 100, grayscale * 100];
	};
	
	convert.hsl.hcg = function (hsl) {
		var s = hsl[1] / 100;
		var l = hsl[2] / 100;
		var c = 1;
		var f = 0;
	
		if (l < 0.5) {
			c = 2.0 * s * l;
		} else {
			c = 2.0 * s * (1.0 - l);
		}
	
		if (c < 1.0) {
			f = (l - 0.5 * c) / (1.0 - c);
		}
	
		return [hsl[0], c * 100, f * 100];
	};
	
	convert.hsv.hcg = function (hsv) {
		var s = hsv[1] / 100;
		var v = hsv[2] / 100;
	
		var c = s * v;
		var f = 0;
	
		if (c < 1.0) {
			f = (v - c) / (1 - c);
		}
	
		return [hsv[0], c * 100, f * 100];
	};
	
	convert.hcg.rgb = function (hcg) {
		var h = hcg[0] / 360;
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;
	
		if (c === 0.0) {
			return [g * 255, g * 255, g * 255];
		}
	
		var pure = [0, 0, 0];
		var hi = (h % 1) * 6;
		var v = hi % 1;
		var w = 1 - v;
		var mg = 0;
	
		switch (Math.floor(hi)) {
			case 0:
				pure[0] = 1; pure[1] = v; pure[2] = 0; break;
			case 1:
				pure[0] = w; pure[1] = 1; pure[2] = 0; break;
			case 2:
				pure[0] = 0; pure[1] = 1; pure[2] = v; break;
			case 3:
				pure[0] = 0; pure[1] = w; pure[2] = 1; break;
			case 4:
				pure[0] = v; pure[1] = 0; pure[2] = 1; break;
			default:
				pure[0] = 1; pure[1] = 0; pure[2] = w;
		}
	
		mg = (1.0 - c) * g;
	
		return [
			(c * pure[0] + mg) * 255,
			(c * pure[1] + mg) * 255,
			(c * pure[2] + mg) * 255
		];
	};
	
	convert.hcg.hsv = function (hcg) {
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;
	
		var v = c + g * (1.0 - c);
		var f = 0;
	
		if (v > 0.0) {
			f = c / v;
		}
	
		return [hcg[0], f * 100, v * 100];
	};
	
	convert.hcg.hsl = function (hcg) {
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;
	
		var l = g * (1.0 - c) + 0.5 * c;
		var s = 0;
	
		if (l > 0.0 && l < 0.5) {
			s = c / (2 * l);
		} else
		if (l >= 0.5 && l < 1.0) {
			s = c / (2 * (1 - l));
		}
	
		return [hcg[0], s * 100, l * 100];
	};
	
	convert.hcg.hwb = function (hcg) {
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;
		var v = c + g * (1.0 - c);
		return [hcg[0], (v - c) * 100, (1 - v) * 100];
	};
	
	convert.hwb.hcg = function (hwb) {
		var w = hwb[1] / 100;
		var b = hwb[2] / 100;
		var v = 1 - b;
		var c = v - w;
		var g = 0;
	
		if (c < 1) {
			g = (v - c) / (1 - c);
		}
	
		return [hwb[0], c * 100, g * 100];
	};
	
	convert.apple.rgb = function (apple) {
		return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
	};
	
	convert.rgb.apple = function (rgb) {
		return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
	};
	
	convert.gray.rgb = function (args) {
		return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
	};
	
	convert.gray.hsl = convert.gray.hsv = function (args) {
		return [0, 0, args[0]];
	};
	
	convert.gray.hwb = function (gray) {
		return [0, 100, gray[0]];
	};
	
	convert.gray.cmyk = function (gray) {
		return [0, 0, 0, gray[0]];
	};
	
	convert.gray.lab = function (gray) {
		return [gray[0], 0, 0];
	};
	
	convert.gray.hex = function (gray) {
		var val = Math.round(gray[0] / 100 * 255) & 0xFF;
		var integer = (val << 16) + (val << 8) + val;
	
		var string = integer.toString(16).toUpperCase();
		return '000000'.substring(string.length) + string;
	};
	
	convert.rgb.gray = function (rgb) {
		var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
		return [val / 255 * 100];
	};


/***/ }),
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	/*!
	  * domready (c) Dustin Diaz 2014 - License MIT
	  */
	!function (name, definition) {
	
	  if (true) module.exports = definition()
	  else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)
	  else this[name] = definition()
	
	}('domready', function () {
	
	  var fns = [], listener
	    , doc = document
	    , hack = doc.documentElement.doScroll
	    , domContentLoaded = 'DOMContentLoaded'
	    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)
	
	
	  if (!loaded)
	  doc.addEventListener(domContentLoaded, listener = function () {
	    doc.removeEventListener(domContentLoaded, listener)
	    loaded = 1
	    while (listener = fns.shift()) listener()
	  })
	
	  return function (fn) {
	    loaded ? setTimeout(fn, 0) : fns.push(fn)
	  }
	
	});


/***/ }),
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	var conversions = __webpack_require__(48);
	var route = __webpack_require__(89);
	
	var convert = {};
	
	var models = Object.keys(conversions);
	
	function wrapRaw(fn) {
		var wrappedFn = function (args) {
			if (args === undefined || args === null) {
				return args;
			}
	
			if (arguments.length > 1) {
				args = Array.prototype.slice.call(arguments);
			}
	
			return fn(args);
		};
	
		// preserve .conversion property if there is one
		if ('conversion' in fn) {
			wrappedFn.conversion = fn.conversion;
		}
	
		return wrappedFn;
	}
	
	function wrapRounded(fn) {
		var wrappedFn = function (args) {
			if (args === undefined || args === null) {
				return args;
			}
	
			if (arguments.length > 1) {
				args = Array.prototype.slice.call(arguments);
			}
	
			var result = fn(args);
	
			// we're assuming the result is an array here.
			// see notice in conversions.js; don't use box types
			// in conversion functions.
			if (typeof result === 'object') {
				for (var len = result.length, i = 0; i < len; i++) {
					result[i] = Math.round(result[i]);
				}
			}
	
			return result;
		};
	
		// preserve .conversion property if there is one
		if ('conversion' in fn) {
			wrappedFn.conversion = fn.conversion;
		}
	
		return wrappedFn;
	}
	
	models.forEach(function (fromModel) {
		convert[fromModel] = {};
	
		Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
		Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});
	
		var routes = route(fromModel);
		var routeModels = Object.keys(routes);
	
		routeModels.forEach(function (toModel) {
			var fn = routes[toModel];
	
			convert[fromModel][toModel] = wrapRounded(fn);
			convert[fromModel][toModel].raw = wrapRaw(fn);
		});
	});
	
	module.exports = convert;


/***/ }),
/* 63 */
/***/ (function(module, exports) {

	'use strict'
	
	module.exports = {
		"aliceblue": [240, 248, 255],
		"antiquewhite": [250, 235, 215],
		"aqua": [0, 255, 255],
		"aquamarine": [127, 255, 212],
		"azure": [240, 255, 255],
		"beige": [245, 245, 220],
		"bisque": [255, 228, 196],
		"black": [0, 0, 0],
		"blanchedalmond": [255, 235, 205],
		"blue": [0, 0, 255],
		"blueviolet": [138, 43, 226],
		"brown": [165, 42, 42],
		"burlywood": [222, 184, 135],
		"cadetblue": [95, 158, 160],
		"chartreuse": [127, 255, 0],
		"chocolate": [210, 105, 30],
		"coral": [255, 127, 80],
		"cornflowerblue": [100, 149, 237],
		"cornsilk": [255, 248, 220],
		"crimson": [220, 20, 60],
		"cyan": [0, 255, 255],
		"darkblue": [0, 0, 139],
		"darkcyan": [0, 139, 139],
		"darkgoldenrod": [184, 134, 11],
		"darkgray": [169, 169, 169],
		"darkgreen": [0, 100, 0],
		"darkgrey": [169, 169, 169],
		"darkkhaki": [189, 183, 107],
		"darkmagenta": [139, 0, 139],
		"darkolivegreen": [85, 107, 47],
		"darkorange": [255, 140, 0],
		"darkorchid": [153, 50, 204],
		"darkred": [139, 0, 0],
		"darksalmon": [233, 150, 122],
		"darkseagreen": [143, 188, 143],
		"darkslateblue": [72, 61, 139],
		"darkslategray": [47, 79, 79],
		"darkslategrey": [47, 79, 79],
		"darkturquoise": [0, 206, 209],
		"darkviolet": [148, 0, 211],
		"deeppink": [255, 20, 147],
		"deepskyblue": [0, 191, 255],
		"dimgray": [105, 105, 105],
		"dimgrey": [105, 105, 105],
		"dodgerblue": [30, 144, 255],
		"firebrick": [178, 34, 34],
		"floralwhite": [255, 250, 240],
		"forestgreen": [34, 139, 34],
		"fuchsia": [255, 0, 255],
		"gainsboro": [220, 220, 220],
		"ghostwhite": [248, 248, 255],
		"gold": [255, 215, 0],
		"goldenrod": [218, 165, 32],
		"gray": [128, 128, 128],
		"green": [0, 128, 0],
		"greenyellow": [173, 255, 47],
		"grey": [128, 128, 128],
		"honeydew": [240, 255, 240],
		"hotpink": [255, 105, 180],
		"indianred": [205, 92, 92],
		"indigo": [75, 0, 130],
		"ivory": [255, 255, 240],
		"khaki": [240, 230, 140],
		"lavender": [230, 230, 250],
		"lavenderblush": [255, 240, 245],
		"lawngreen": [124, 252, 0],
		"lemonchiffon": [255, 250, 205],
		"lightblue": [173, 216, 230],
		"lightcoral": [240, 128, 128],
		"lightcyan": [224, 255, 255],
		"lightgoldenrodyellow": [250, 250, 210],
		"lightgray": [211, 211, 211],
		"lightgreen": [144, 238, 144],
		"lightgrey": [211, 211, 211],
		"lightpink": [255, 182, 193],
		"lightsalmon": [255, 160, 122],
		"lightseagreen": [32, 178, 170],
		"lightskyblue": [135, 206, 250],
		"lightslategray": [119, 136, 153],
		"lightslategrey": [119, 136, 153],
		"lightsteelblue": [176, 196, 222],
		"lightyellow": [255, 255, 224],
		"lime": [0, 255, 0],
		"limegreen": [50, 205, 50],
		"linen": [250, 240, 230],
		"magenta": [255, 0, 255],
		"maroon": [128, 0, 0],
		"mediumaquamarine": [102, 205, 170],
		"mediumblue": [0, 0, 205],
		"mediumorchid": [186, 85, 211],
		"mediumpurple": [147, 112, 219],
		"mediumseagreen": [60, 179, 113],
		"mediumslateblue": [123, 104, 238],
		"mediumspringgreen": [0, 250, 154],
		"mediumturquoise": [72, 209, 204],
		"mediumvioletred": [199, 21, 133],
		"midnightblue": [25, 25, 112],
		"mintcream": [245, 255, 250],
		"mistyrose": [255, 228, 225],
		"moccasin": [255, 228, 181],
		"navajowhite": [255, 222, 173],
		"navy": [0, 0, 128],
		"oldlace": [253, 245, 230],
		"olive": [128, 128, 0],
		"olivedrab": [107, 142, 35],
		"orange": [255, 165, 0],
		"orangered": [255, 69, 0],
		"orchid": [218, 112, 214],
		"palegoldenrod": [238, 232, 170],
		"palegreen": [152, 251, 152],
		"paleturquoise": [175, 238, 238],
		"palevioletred": [219, 112, 147],
		"papayawhip": [255, 239, 213],
		"peachpuff": [255, 218, 185],
		"peru": [205, 133, 63],
		"pink": [255, 192, 203],
		"plum": [221, 160, 221],
		"powderblue": [176, 224, 230],
		"purple": [128, 0, 128],
		"rebeccapurple": [102, 51, 153],
		"red": [255, 0, 0],
		"rosybrown": [188, 143, 143],
		"royalblue": [65, 105, 225],
		"saddlebrown": [139, 69, 19],
		"salmon": [250, 128, 114],
		"sandybrown": [244, 164, 96],
		"seagreen": [46, 139, 87],
		"seashell": [255, 245, 238],
		"sienna": [160, 82, 45],
		"silver": [192, 192, 192],
		"skyblue": [135, 206, 235],
		"slateblue": [106, 90, 205],
		"slategray": [112, 128, 144],
		"slategrey": [112, 128, 144],
		"snow": [255, 250, 250],
		"springgreen": [0, 255, 127],
		"steelblue": [70, 130, 180],
		"tan": [210, 180, 140],
		"teal": [0, 128, 128],
		"thistle": [216, 191, 216],
		"tomato": [255, 99, 71],
		"turquoise": [64, 224, 208],
		"violet": [238, 130, 238],
		"wheat": [245, 222, 179],
		"white": [255, 255, 255],
		"whitesmoke": [245, 245, 245],
		"yellow": [255, 255, 0],
		"yellowgreen": [154, 205, 50]
	};


/***/ }),
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"colorCard":"src-pages-atoms-colors----ColorCard-module---colorCard---WKH3L src-components-card----Card-module---card---1WbKx","toggleIconWrapper":"src-pages-atoms-colors----ColorCard-module---toggleIconWrapper---6FZE-","subheader":"src-pages-atoms-colors----ColorCard-module---subheader---1IEy3","tile":"src-pages-atoms-colors----ColorCard-module---tile---1sojO","small":"src-pages-atoms-colors----ColorCard-module---small---3gnFT","large":"src-pages-atoms-colors----ColorCard-module---large---iZ1w4","colorBlock":"src-pages-atoms-colors----ColorCard-module---colorBlock---30WQ4","colorBlockHalf":"src-pages-atoms-colors----ColorCard-module---colorBlockHalf---2qW35","whiteText":"src-pages-atoms-colors----ColorCard-module---whiteText---3w0ih","accessibilityIcon":"src-pages-atoms-colors----ColorCard-module---accessibilityIcon---paOM_","kebabContainer":"src-pages-atoms-colors----ColorCard-module---kebabContainer---1lzCP","colorBlockLabel":"src-pages-atoms-colors----ColorCard-module---colorBlockLabel---3xsjR","dropdownItem":"src-pages-atoms-colors----ColorCard-module---dropdownItem---yTnw0"};

/***/ }),
/* 72 */,
/* 73 */,
/* 74 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = decimal;
	
	/* Check if the given character code, or the character
	 * code at the first character, is decimal. */
	function decimal(character) {
	  var code = typeof character === 'string' ?
	    character.charCodeAt(0) : character;
	
	  return code >= 48 && code <= 57; /* 0-9 */
	}


/***/ }),
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = visit;
	
	var is = __webpack_require__(576);
	
	var CONTINUE = true;
	var SKIP = 'skip';
	var EXIT = false;
	
	visit.CONTINUE = CONTINUE;
	visit.SKIP = SKIP;
	visit.EXIT = EXIT;
	
	function visit(tree, test, visitor, reverse) {
	  if (typeof test === 'function' && typeof visitor !== 'function') {
	    reverse = visitor;
	    visitor = test;
	    test = null;
	  }
	
	  one(tree);
	
	  /* Visit a single node. */
	  function one(node, index, parent) {
	    var result;
	
	    index = index || (parent ? 0 : null);
	
	    if (!test || node.type === test || is(test, node, index, parent || null)) {
	      result = visitor(node, index, parent || null);
	    }
	
	    if (result === EXIT) {
	      return result;
	    }
	
	    if (node.children && result !== SKIP) {
	      return all(node.children, node) === EXIT ? EXIT : result;
	    }
	
	    return result;
	  }
	
	  /* Visit children in `parent`. */
	  function all(children, parent) {
	    var step = reverse ? -1 : 1;
	    var index = (reverse ? children.length : -1) + step;
	    var child;
	    var result;
	
	    while (index > -1 && index < children.length) {
	      child = children[index];
	      result = child && one(child, index, parent);
	
	      if (result === EXIT) {
	        return result;
	      }
	
	      index = typeof result === 'number' ? result : index + step;
	    }
	
	    return CONTINUE;
	  }
	}


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	const colorConvert = __webpack_require__(62);
	
	const wrapAnsi16 = (fn, offset) => function () {
		const code = fn.apply(colorConvert, arguments);
		return `\u001B[${code + offset}m`;
	};
	
	const wrapAnsi256 = (fn, offset) => function () {
		const code = fn.apply(colorConvert, arguments);
		return `\u001B[${38 + offset};5;${code}m`;
	};
	
	const wrapAnsi16m = (fn, offset) => function () {
		const rgb = fn.apply(colorConvert, arguments);
		return `\u001B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
	};
	
	function assembleStyles() {
		const codes = new Map();
		const styles = {
			modifier: {
				reset: [0, 0],
				// 21 isn't widely supported and 22 does the same thing
				bold: [1, 22],
				dim: [2, 22],
				italic: [3, 23],
				underline: [4, 24],
				inverse: [7, 27],
				hidden: [8, 28],
				strikethrough: [9, 29]
			},
			color: {
				black: [30, 39],
				red: [31, 39],
				green: [32, 39],
				yellow: [33, 39],
				blue: [34, 39],
				magenta: [35, 39],
				cyan: [36, 39],
				white: [37, 39],
				gray: [90, 39],
	
				// Bright color
				redBright: [91, 39],
				greenBright: [92, 39],
				yellowBright: [93, 39],
				blueBright: [94, 39],
				magentaBright: [95, 39],
				cyanBright: [96, 39],
				whiteBright: [97, 39]
			},
			bgColor: {
				bgBlack: [40, 49],
				bgRed: [41, 49],
				bgGreen: [42, 49],
				bgYellow: [43, 49],
				bgBlue: [44, 49],
				bgMagenta: [45, 49],
				bgCyan: [46, 49],
				bgWhite: [47, 49],
	
				// Bright color
				bgBlackBright: [100, 49],
				bgRedBright: [101, 49],
				bgGreenBright: [102, 49],
				bgYellowBright: [103, 49],
				bgBlueBright: [104, 49],
				bgMagentaBright: [105, 49],
				bgCyanBright: [106, 49],
				bgWhiteBright: [107, 49]
			}
		};
	
		// Fix humans
		styles.color.grey = styles.color.gray;
	
		for (const groupName of Object.keys(styles)) {
			const group = styles[groupName];
	
			for (const styleName of Object.keys(group)) {
				const style = group[styleName];
	
				styles[styleName] = {
					open: `\u001B[${style[0]}m`,
					close: `\u001B[${style[1]}m`
				};
	
				group[styleName] = styles[styleName];
	
				codes.set(style[0], style[1]);
			}
	
			Object.defineProperty(styles, groupName, {
				value: group,
				enumerable: false
			});
	
			Object.defineProperty(styles, 'codes', {
				value: codes,
				enumerable: false
			});
		}
	
		const rgb2rgb = (r, g, b) => [r, g, b];
	
		styles.color.close = '\u001B[39m';
		styles.bgColor.close = '\u001B[49m';
	
		styles.color.ansi = {};
		styles.color.ansi256 = {};
		styles.color.ansi16m = {
			rgb: wrapAnsi16m(rgb2rgb, 0)
		};
	
		styles.bgColor.ansi = {};
		styles.bgColor.ansi256 = {};
		styles.bgColor.ansi16m = {
			rgb: wrapAnsi16m(rgb2rgb, 10)
		};
	
		for (const key of Object.keys(colorConvert)) {
			if (typeof colorConvert[key] !== 'object') {
				continue;
			}
	
			const suite = colorConvert[key];
	
			if ('ansi16' in suite) {
				styles.color.ansi[key] = wrapAnsi16(suite.ansi16, 0);
				styles.bgColor.ansi[key] = wrapAnsi16(suite.ansi16, 10);
			}
	
			if ('ansi256' in suite) {
				styles.color.ansi256[key] = wrapAnsi256(suite.ansi256, 0);
				styles.bgColor.ansi256[key] = wrapAnsi256(suite.ansi256, 10);
			}
	
			if ('rgb' in suite) {
				styles.color.ansi16m[key] = wrapAnsi16m(suite.rgb, 0);
				styles.bgColor.ansi16m[key] = wrapAnsi16m(suite.rgb, 10);
			}
		}
	
		return styles;
	}
	
	// Make the export immutable
	Object.defineProperty(module, 'exports', {
		enumerable: true,
		get: assembleStyles
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(144)(module)))

/***/ }),
/* 83 */,
/* 84 */,
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var chalk = __webpack_require__(88);
	
	function error(message) {
	  throw new Error(chalk.red('\nCULTUREAMP STYLE GUIDE ERROR:\n' + singleLine(message) + '\n'));
	}
	
	function warn(message) {
	  console.warn(chalk.yellow('\nCULTUREAMP STYLE GUIDE WARNING:\n' + singleLine(message) + '\n'));
	}
	
	function singleLine(string) {
	  return string.replace(/^ +/gm, ' ').replace(/\n|\r/gm, '').trim();
	}
	
	module.exports = {
	  default: error,
	  error: error,
	  warn: warn
	};

/***/ }),
/* 86 */,
/* 87 */,
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	var escapeStringRegexp = __webpack_require__(107);
	var ansiStyles = __webpack_require__(82);
	var stripAnsi = __webpack_require__(140);
	var hasAnsi = __webpack_require__(112);
	var supportsColor = __webpack_require__(141);
	var defineProps = Object.defineProperties;
	var isSimpleWindowsTerm = process.platform === 'win32' && !/^xterm/i.test(({"NODE_ENV":"production","PUBLIC_DIR":"/Users/jason.oneil/workspace/cultureamp/cultureamp-style-guide/guide/public"}).TERM);
	
	function Chalk(options) {
		// detect mode if not set manually
		this.enabled = !options || options.enabled === undefined ? supportsColor : options.enabled;
	}
	
	// use bright blue on Windows as the normal blue color is illegible
	if (isSimpleWindowsTerm) {
		ansiStyles.blue.open = '\u001b[94m';
	}
	
	var styles = (function () {
		var ret = {};
	
		Object.keys(ansiStyles).forEach(function (key) {
			ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');
	
			ret[key] = {
				get: function () {
					return build.call(this, this._styles.concat(key));
				}
			};
		});
	
		return ret;
	})();
	
	var proto = defineProps(function chalk() {}, styles);
	
	function build(_styles) {
		var builder = function () {
			return applyStyle.apply(builder, arguments);
		};
	
		builder._styles = _styles;
		builder.enabled = this.enabled;
		// __proto__ is used because we must return a function, but there is
		// no way to create a function with a different prototype.
		/* eslint-disable no-proto */
		builder.__proto__ = proto;
	
		return builder;
	}
	
	function applyStyle() {
		// support varags, but simply cast to string in case there's only one arg
		var args = arguments;
		var argsLen = args.length;
		var str = argsLen !== 0 && String(arguments[0]);
	
		if (argsLen > 1) {
			// don't slice `arguments`, it prevents v8 optimizations
			for (var a = 1; a < argsLen; a++) {
				str += ' ' + args[a];
			}
		}
	
		if (!this.enabled || !str) {
			return str;
		}
	
		var nestedStyles = this._styles;
		var i = nestedStyles.length;
	
		// Turns out that on Windows dimmed gray text becomes invisible in cmd.exe,
		// see https://github.com/chalk/chalk/issues/58
		// If we're on Windows and we're dealing with a gray color, temporarily make 'dim' a noop.
		var originalDim = ansiStyles.dim.open;
		if (isSimpleWindowsTerm && (nestedStyles.indexOf('gray') !== -1 || nestedStyles.indexOf('grey') !== -1)) {
			ansiStyles.dim.open = '';
		}
	
		while (i--) {
			var code = ansiStyles[nestedStyles[i]];
	
			// Replace any instances already present with a re-opening code
			// otherwise only the part of the string until said closing code
			// will be colored, and the rest will simply be 'plain'.
			str = code.open + str.replace(code.closeRe, code.open) + code.close;
		}
	
		// Reset the original 'dim' if we changed it to work around the Windows dimmed gray issue.
		ansiStyles.dim.open = originalDim;
	
		return str;
	}
	
	function init() {
		var ret = {};
	
		Object.keys(styles).forEach(function (name) {
			ret[name] = {
				get: function () {
					return build.call(this, [name]);
				}
			};
		});
	
		return ret;
	}
	
	defineProps(Chalk.prototype, init());
	
	module.exports = new Chalk();
	module.exports.styles = ansiStyles;
	module.exports.hasColor = hasAnsi;
	module.exports.stripColor = stripAnsi;
	module.exports.supportsColor = supportsColor;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	var conversions = __webpack_require__(48);
	
	/*
		this function routes a model to all other models.
	
		all functions that are routed have a property `.conversion` attached
		to the returned synthetic function. This property is an array
		of strings, each with the steps in between the 'from' and 'to'
		color models (inclusive).
	
		conversions that are not possible simply are not included.
	*/
	
	function buildGraph() {
		var graph = {};
		// https://jsperf.com/object-keys-vs-for-in-with-closure/3
		var models = Object.keys(conversions);
	
		for (var len = models.length, i = 0; i < len; i++) {
			graph[models[i]] = {
				// http://jsperf.com/1-vs-infinity
				// micro-opt, but this is simple.
				distance: -1,
				parent: null
			};
		}
	
		return graph;
	}
	
	// https://en.wikipedia.org/wiki/Breadth-first_search
	function deriveBFS(fromModel) {
		var graph = buildGraph();
		var queue = [fromModel]; // unshift -> queue -> pop
	
		graph[fromModel].distance = 0;
	
		while (queue.length) {
			var current = queue.pop();
			var adjacents = Object.keys(conversions[current]);
	
			for (var len = adjacents.length, i = 0; i < len; i++) {
				var adjacent = adjacents[i];
				var node = graph[adjacent];
	
				if (node.distance === -1) {
					node.distance = graph[current].distance + 1;
					node.parent = current;
					queue.unshift(adjacent);
				}
			}
		}
	
		return graph;
	}
	
	function link(from, to) {
		return function (args) {
			return to(from(args));
		};
	}
	
	function wrapConversion(toModel, graph) {
		var path = [graph[toModel].parent, toModel];
		var fn = conversions[graph[toModel].parent][toModel];
	
		var cur = graph[toModel].parent;
		while (graph[cur].parent) {
			path.unshift(graph[cur].parent);
			fn = link(conversions[graph[cur].parent][cur], fn);
			cur = graph[cur].parent;
		}
	
		fn.conversion = path;
		return fn;
	}
	
	module.exports = function (fromModel) {
		var graph = deriveBFS(fromModel);
		var conversion = {};
	
		var models = Object.keys(graph);
		for (var len = models.length, i = 0; i < len; i++) {
			var toModel = models[i];
			var node = graph[toModel];
	
			if (node.parent === null) {
				// no possible conversion, or this node is the source model.
				continue;
			}
	
			conversion[toModel] = wrapConversion(toModel, graph);
		}
	
		return conversion;
	};
	


/***/ }),
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */
/***/ (function(module, exports) {

	'use strict';
	
	var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
	
	module.exports = function (str) {
		if (typeof str !== 'string') {
			throw new TypeError('Expected a string');
		}
	
		return str.replace(matchOperatorsRe, '\\$&');
	};


/***/ }),
/* 108 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"icon":"_-components-Icon----Icon-module---icon---1FWNI","inheritSize":"_-components-Icon----Icon-module---inheritSize---eWkre","blockLayout":"_-components-Icon----Icon-module---blockLayout---1WLhv"};

/***/ }),
/* 109 */,
/* 110 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"container":"src-components-kebab----KebabMenu-module---container---3rHaf","menuItemLink":"src-components-kebab----KebabMenu-module---menuItemLink---8Wa4m","menuItemAction":"src-components-kebab----KebabMenu-module---menuItemAction---1G1Q6","menuItem__icon":"src-components-kebab----KebabMenu-module---menuItem__icon---1CcFr","headerContainer":"src-components-kebab----KebabMenu-module---headerContainer---34hEB","headerTitle":"src-components-kebab----KebabMenu-module---headerTitle---xX0xZ","headerContent":"src-components-kebab----KebabMenu-module---headerContent---Eyc2L","hoverIcon":"src-components-kebab----KebabMenu-module---hoverIcon---EglVi","menuItem__title":"src-components-kebab----KebabMenu-module---menuItem__title---2Kmco","separator":"src-components-kebab----KebabMenu-module---separator---hfChw"};

/***/ }),
/* 111 */,
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var ansiRegex = __webpack_require__(46);
	var re = new RegExp(ansiRegex().source); // remove the `g` flag
	module.exports = re.test.bind(re);


/***/ }),
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/* Dependencies. */
	var characterEntities = __webpack_require__(407);
	var legacy = __webpack_require__(406);
	var invalid = __webpack_require__(408);
	var decimal = __webpack_require__(74);
	var hexadecimal = __webpack_require__(389);
	var alphanumerical = __webpack_require__(386);
	
	/* Expose. */
	module.exports = wrapper;
	
	/* Methods. */
	var own = {}.hasOwnProperty;
	var fromCharCode = String.fromCharCode;
	var noop = Function.prototype;
	
	/* Characters. */
	var REPLACEMENT = '\uFFFD';
	var FORM_FEED = '\f';
	var AMPERSAND = '&';
	var OCTOTHORP = '#';
	var SEMICOLON = ';';
	var NEWLINE = '\n';
	var X_LOWER = 'x';
	var X_UPPER = 'X';
	var SPACE = ' ';
	var LESS_THAN = '<';
	var EQUAL = '=';
	var EMPTY = '';
	var TAB = '\t';
	
	/* Default settings. */
	var defaults = {
	  warning: null,
	  reference: null,
	  text: null,
	  warningContext: null,
	  referenceContext: null,
	  textContext: null,
	  position: {},
	  additional: null,
	  attribute: false,
	  nonTerminated: true
	};
	
	/* Reference types. */
	var NAMED = 'named';
	var HEXADECIMAL = 'hexadecimal';
	var DECIMAL = 'decimal';
	
	/* Map of bases. */
	var BASE = {};
	
	BASE[HEXADECIMAL] = 16;
	BASE[DECIMAL] = 10;
	
	/* Map of types to tests. Each type of character reference
	 * accepts different characters. This test is used to
	 * detect whether a reference has ended (as the semicolon
	 * is not strictly needed). */
	var TESTS = {};
	
	TESTS[NAMED] = alphanumerical;
	TESTS[DECIMAL] = decimal;
	TESTS[HEXADECIMAL] = hexadecimal;
	
	/* Warning messages. */
	var NAMED_NOT_TERMINATED = 1;
	var NUMERIC_NOT_TERMINATED = 2;
	var NAMED_EMPTY = 3;
	var NUMERIC_EMPTY = 4;
	var NAMED_UNKNOWN = 5;
	var NUMERIC_DISALLOWED = 6;
	var NUMERIC_PROHIBITED = 7;
	
	var NUMERIC_REFERENCE = 'Numeric character references';
	var NAMED_REFERENCE = 'Named character references';
	var TERMINATED = ' must be terminated by a semicolon';
	var VOID = ' cannot be empty';
	
	var MESSAGES = {};
	
	MESSAGES[NAMED_NOT_TERMINATED] = NAMED_REFERENCE + TERMINATED;
	MESSAGES[NUMERIC_NOT_TERMINATED] = NUMERIC_REFERENCE + TERMINATED;
	MESSAGES[NAMED_EMPTY] = NAMED_REFERENCE + VOID;
	MESSAGES[NUMERIC_EMPTY] = NUMERIC_REFERENCE + VOID;
	MESSAGES[NAMED_UNKNOWN] = NAMED_REFERENCE + ' must be known';
	MESSAGES[NUMERIC_DISALLOWED] = NUMERIC_REFERENCE + ' cannot be disallowed';
	MESSAGES[NUMERIC_PROHIBITED] = NUMERIC_REFERENCE + ' cannot be outside the ' +
	    'permissible Unicode range';
	
	/* Wrap to ensure clean parameters are given to `parse`. */
	function wrapper(value, options) {
	  var settings = {};
	  var option;
	  var key;
	
	  if (!options) {
	    options = {};
	  }
	
	  for (key in defaults) {
	    option = options[key];
	    settings[key] = option === null || option === undefined ? defaults[key] : option;
	  }
	
	  if (settings.position.indent || settings.position.start) {
	    settings.indent = settings.position.indent || [];
	    settings.position = settings.position.start;
	  }
	
	  return parse(value, settings);
	}
	
	/* Parse entities. */
	function parse(value, settings) {
	  var additional = settings.additional;
	  var nonTerminated = settings.nonTerminated;
	  var handleText = settings.text;
	  var handleReference = settings.reference;
	  var handleWarning = settings.warning;
	  var textContext = settings.textContext;
	  var referenceContext = settings.referenceContext;
	  var warningContext = settings.warningContext;
	  var pos = settings.position;
	  var indent = settings.indent || [];
	  var length = value.length;
	  var index = 0;
	  var lines = -1;
	  var column = pos.column || 1;
	  var line = pos.line || 1;
	  var queue = EMPTY;
	  var result = [];
	  var entityCharacters;
	  var terminated;
	  var characters;
	  var character;
	  var reference;
	  var following;
	  var warning;
	  var reason;
	  var output;
	  var entity;
	  var begin;
	  var start;
	  var type;
	  var test;
	  var prev;
	  var next;
	  var diff;
	  var end;
	
	  /* Cache the current point. */
	  prev = now();
	
	  /* Wrap `handleWarning`. */
	  warning = handleWarning ? parseError : noop;
	
	  /* Ensure the algorithm walks over the first character
	   * and the end (inclusive). */
	  index--;
	  length++;
	
	  while (++index < length) {
	    /* If the previous character was a newline. */
	    if (character === NEWLINE) {
	      column = indent[lines] || 1;
	    }
	
	    character = at(index);
	
	    /* Handle anything other than an ampersand,
	     * including newlines and EOF. */
	    if (character !== AMPERSAND) {
	      if (character === NEWLINE) {
	        line++;
	        lines++;
	        column = 0;
	      }
	
	      if (character) {
	        queue += character;
	        column++;
	      } else {
	        flush();
	      }
	    } else {
	      following = at(index + 1);
	
	      /* The behaviour depends on the identity of the next
	       * character. */
	      if (
	        following === TAB ||
	        following === NEWLINE ||
	        following === FORM_FEED ||
	        following === SPACE ||
	        following === LESS_THAN ||
	        following === AMPERSAND ||
	        following === EMPTY ||
	        (additional && following === additional)
	      ) {
	        /* Not a character reference. No characters
	         * are consumed, and nothing is returned.
	         * This is not an error, either. */
	        queue += character;
	        column++;
	
	        continue;
	      }
	
	      start = index + 1;
	      begin = start;
	      end = start;
	
	      /* Numerical entity. */
	      if (following !== OCTOTHORP) {
	        type = NAMED;
	      } else {
	        end = ++begin;
	
	        /* The behaviour further depends on the
	         * character after the U+0023 NUMBER SIGN. */
	        following = at(end);
	
	        if (following === X_LOWER || following === X_UPPER) {
	          /* ASCII hex digits. */
	          type = HEXADECIMAL;
	          end = ++begin;
	        } else {
	          /* ASCII digits. */
	          type = DECIMAL;
	        }
	      }
	
	      entityCharacters = EMPTY;
	      entity = EMPTY;
	      characters = EMPTY;
	      test = TESTS[type];
	      end--;
	
	      while (++end < length) {
	        following = at(end);
	
	        if (!test(following)) {
	          break;
	        }
	
	        characters += following;
	
	        /* Check if we can match a legacy named
	         * reference.  If so, we cache that as the
	         * last viable named reference.  This
	         * ensures we do not need to walk backwards
	         * later. */
	        if (type === NAMED && own.call(legacy, characters)) {
	          entityCharacters = characters;
	          entity = legacy[characters];
	        }
	      }
	
	      terminated = at(end) === SEMICOLON;
	
	      if (terminated) {
	        end++;
	
	        if (type === NAMED && own.call(characterEntities, characters)) {
	          entityCharacters = characters;
	          entity = characterEntities[characters];
	        }
	      }
	
	      diff = 1 + end - start;
	
	      if (!terminated && !nonTerminated) {
	        /* Empty. */
	      } else if (!characters) {
	        /* An empty (possible) entity is valid, unless
	         * its numeric (thus an ampersand followed by
	         * an octothorp). */
	        if (type !== NAMED) {
	          warning(NUMERIC_EMPTY, diff);
	        }
	      } else if (type === NAMED) {
	        /* An ampersand followed by anything
	         * unknown, and not terminated, is invalid. */
	        if (terminated && !entity) {
	          warning(NAMED_UNKNOWN, 1);
	        } else {
	          /* If theres something after an entity
	           * name which is not known, cap the
	           * reference. */
	          if (entityCharacters !== characters) {
	            end = begin + entityCharacters.length;
	            diff = 1 + end - begin;
	            terminated = false;
	          }
	
	          /* If the reference is not terminated,
	           * warn. */
	          if (!terminated) {
	            reason = entityCharacters ?
	              NAMED_NOT_TERMINATED :
	              NAMED_EMPTY;
	
	            if (!settings.attribute) {
	              warning(reason, diff);
	            } else {
	              following = at(end);
	
	              if (following === EQUAL) {
	                warning(reason, diff);
	                entity = null;
	              } else if (alphanumerical(following)) {
	                entity = null;
	              } else {
	                warning(reason, diff);
	              }
	            }
	          }
	        }
	
	        reference = entity;
	      } else {
	        if (!terminated) {
	          /* All non-terminated numeric entities are
	           * not rendered, and trigger a warning. */
	          warning(NUMERIC_NOT_TERMINATED, diff);
	        }
	
	        /* When terminated and number, parse as
	         * either hexadecimal or decimal. */
	        reference = parseInt(characters, BASE[type]);
	
	        /* Trigger a warning when the parsed number
	         * is prohibited, and replace with
	         * replacement character. */
	        if (isProhibited(reference)) {
	          warning(NUMERIC_PROHIBITED, diff);
	
	          reference = REPLACEMENT;
	        } else if (reference in invalid) {
	          /* Trigger a warning when the parsed number
	           * is disallowed, and replace by an
	           * alternative. */
	          warning(NUMERIC_DISALLOWED, diff);
	
	          reference = invalid[reference];
	        } else {
	          /* Parse the number. */
	          output = EMPTY;
	
	          /* Trigger a warning when the parsed
	           * number should not be used. */
	          if (isWarning(reference)) {
	            warning(NUMERIC_DISALLOWED, diff);
	          }
	
	          /* Stringify the number. */
	          if (reference > 0xFFFF) {
	            reference -= 0x10000;
	            output += fromCharCode((reference >>> (10 & 0x3FF)) | 0xD800);
	            reference = 0xDC00 | (reference & 0x3FF);
	          }
	
	          reference = output + fromCharCode(reference);
	        }
	      }
	
	      /* If we could not find a reference, queue the
	       * checked characters (as normal characters),
	       * and move the pointer to their end. This is
	       * possible because we can be certain neither
	       * newlines nor ampersands are included. */
	      if (!reference) {
	        characters = value.slice(start - 1, end);
	        queue += characters;
	        column += characters.length;
	        index = end - 1;
	      } else {
	        /* Found it! First eat the queued
	         * characters as normal text, then eat
	         * an entity. */
	        flush();
	
	        prev = now();
	        index = end - 1;
	        column += end - start + 1;
	        result.push(reference);
	        next = now();
	        next.offset++;
	
	        if (handleReference) {
	          handleReference.call(referenceContext, reference, {
	            start: prev,
	            end: next
	          }, value.slice(start - 1, end));
	        }
	
	        prev = next;
	      }
	    }
	  }
	
	  /* Return the reduced nodes, and any possible warnings. */
	  return result.join(EMPTY);
	
	  /* Get current position. */
	  function now() {
	    return {
	      line: line,
	      column: column,
	      offset: index + (pos.offset || 0)
	    };
	  }
	
	  /* “Throw” a parse-error: a warning. */
	  function parseError(code, offset) {
	    var position = now();
	
	    position.column += offset;
	    position.offset += offset;
	
	    handleWarning.call(warningContext, MESSAGES[code], position, code);
	  }
	
	  /* Get character at position. */
	  function at(position) {
	    return value.charAt(position);
	  }
	
	  /* Flush `queue` (normal text). Macro invoked before
	   * each entity and at the end of `value`.
	   * Does nothing when `queue` is empty. */
	  function flush() {
	    if (queue) {
	      result.push(queue);
	
	      if (handleText) {
	        handleText.call(textContext, queue, {
	          start: prev,
	          end: now()
	        });
	      }
	
	      queue = EMPTY;
	    }
	  }
	}
	
	/* Check if `character` is outside the permissible
	 * unicode range. */
	function isProhibited(code) {
	  return (code >= 0xD800 && code <= 0xDFFF) || (code > 0x10FFFF);
	}
	
	/* Check if `character` is disallowed. */
	function isWarning(code) {
	  if (
	    (code >= 0x0001 && code <= 0x0008) ||
	    code === 0x000B ||
	    (code >= 0x000D && code <= 0x001F) ||
	    (code >= 0x007F && code <= 0x009F) ||
	    (code >= 0xFDD0 && code <= 0xFDEF) ||
	    (code & 0xFFFF) === 0xFFFF ||
	    (code & 0xFFFF) === 0xFFFE
	  ) {
	    return true;
	  }
	
	  return false;
	}


/***/ }),
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */
/***/ (function(module, exports) {

	/* Copyright (c) 2017 Hampus Joakim Nilsson
	 * Licensed via the MIT license.
	 **/
	
	// Unique counter per COMPONENT that uniqueness is added to
	var _globallyUniqueIdCounter = 0
	
	function resetUniqueIds() {
	    _globallyUniqueIdCounter = 0
	}
	
	function injectUniqueness(component) {
	
	    // Store all state in the closure for the member functions
	    var _willUpdate = component.componentWillUpdate
	    var _htmlIds = {}
	    var _uniqueIdCounter = 0
	    var _uniqueInstance = ++_globallyUniqueIdCounter
	
	    // Inject the following functions into the component
	    component.componentWillUpdate = function(nextProps, nextState) {
	        _uniqueIdCounter = 0
	        if (typeof _willUpdate != 'undefined') {
	            _willUpdate.apply(component, nextProps, nextState)
	        }
	    }
	
	    component.nextUniqueId = function() {
	        ++_uniqueIdCounter
	        return 'id-' + _uniqueInstance + '-' + _uniqueIdCounter
	    }
	
	    component.lastUniqueId = function() {
	        return 'id-' + _uniqueInstance + '-' + _uniqueIdCounter
	    }
	
	    component.getUniqueId = function(identifier) {
	        if (typeof identifier !== 'string') {
	            console.log('Warning: Expected string identifer passed to `getUniqueId`')
	            identifier = '' + identifier
	        }
	
	        if (!_htmlIds[identifier]) {
	            _htmlIds[identifier] = 'id-' + _uniqueInstance + '-' + identifier
	        }
	
	        return _htmlIds[identifier]
	    }
	}
	
	module.exports = {
	    resetUniqueIds: resetUniqueIds,
	    enableUniqueIds: injectUniqueness,
	}


/***/ }),
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = interrupt;
	
	function interrupt(interruptors, tokenizers, ctx, params) {
	  var bools = ['pedantic', 'commonmark'];
	  var count = bools.length;
	  var length = interruptors.length;
	  var index = -1;
	  var interruptor;
	  var config;
	  var fn;
	  var offset;
	  var bool;
	  var ignore;
	
	  while (++index < length) {
	    interruptor = interruptors[index];
	    config = interruptor[1] || {};
	    fn = interruptor[0];
	    offset = -1;
	    ignore = false;
	
	    while (++offset < count) {
	      bool = bools[offset];
	
	      if (config[bool] !== undefined && config[bool] !== ctx.options[bool]) {
	        ignore = true;
	        break;
	      }
	    }
	
	    if (ignore) {
	      continue;
	    }
	
	    if (tokenizers[fn].apply(ctx, params)) {
	      return true;
	    }
	  }
	
	  return false;
	}


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var collapseWhiteSpace = __webpack_require__(261);
	
	module.exports = normalize;
	
	/* Normalize an identifier.  Collapses multiple white space
	 * characters into a single space, and removes casing. */
	function normalize(value) {
	  return collapseWhiteSpace(value).toLowerCase();
	}


/***/ }),
/* 139 */
/***/ (function(module, exports) {

	/*!
	 * repeat-string <https://github.com/jonschlinkert/repeat-string>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	/**
	 * Results cache
	 */
	
	var res = '';
	var cache;
	
	/**
	 * Expose `repeat`
	 */
	
	module.exports = repeat;
	
	/**
	 * Repeat the given `string` the specified `number`
	 * of times.
	 *
	 * **Example:**
	 *
	 * ```js
	 * var repeat = require('repeat-string');
	 * repeat('A', 5);
	 * //=> AAAAA
	 * ```
	 *
	 * @param {String} `string` The string to repeat
	 * @param {Number} `number` The number of times to repeat the string
	 * @return {String} Repeated string
	 * @api public
	 */
	
	function repeat(str, num) {
	  if (typeof str !== 'string') {
	    throw new TypeError('expected a string');
	  }
	
	  // cover common, quick use cases
	  if (num === 1) return str;
	  if (num === 2) return str + str;
	
	  var max = str.length * num;
	  if (cache !== str || typeof cache === 'undefined') {
	    cache = str;
	    res = '';
	  } else if (res.length >= max) {
	    return res.substr(0, max);
	  }
	
	  while (max > res.length && num > 1) {
	    if (num & 1) {
	      res += str;
	    }
	
	    num >>= 1;
	    str += str;
	  }
	
	  res += str;
	  res = res.substr(0, max);
	  return res;
	}


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var ansiRegex = __webpack_require__(46)();
	
	module.exports = function (str) {
		return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
	};


/***/ }),
/* 141 */
/***/ (function(module, exports) {

	'use strict';
	module.exports = false;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
		 true ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
		(global.BrowserSprite = factory());
	}(this, (function () { 'use strict';
	
	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
	
	
	
	
	
	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}
	
	var index = createCommonjsModule(function (module, exports) {
	(function (root, factory) {
	    if (false) {
	        undefined(factory);
	    } else {
	        module.exports = factory();
	    }
	}(commonjsGlobal, function () {
	
	function isMergeableObject(val) {
	    var nonNullObject = val && typeof val === 'object';
	
	    return nonNullObject
	        && Object.prototype.toString.call(val) !== '[object RegExp]'
	        && Object.prototype.toString.call(val) !== '[object Date]'
	}
	
	function emptyTarget(val) {
	    return Array.isArray(val) ? [] : {}
	}
	
	function cloneIfNecessary(value, optionsArgument) {
	    var clone = optionsArgument && optionsArgument.clone === true;
	    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
	}
	
	function defaultArrayMerge(target, source, optionsArgument) {
	    var destination = target.slice();
	    source.forEach(function(e, i) {
	        if (typeof destination[i] === 'undefined') {
	            destination[i] = cloneIfNecessary(e, optionsArgument);
	        } else if (isMergeableObject(e)) {
	            destination[i] = deepmerge(target[i], e, optionsArgument);
	        } else if (target.indexOf(e) === -1) {
	            destination.push(cloneIfNecessary(e, optionsArgument));
	        }
	    });
	    return destination
	}
	
	function mergeObject(target, source, optionsArgument) {
	    var destination = {};
	    if (isMergeableObject(target)) {
	        Object.keys(target).forEach(function (key) {
	            destination[key] = cloneIfNecessary(target[key], optionsArgument);
	        });
	    }
	    Object.keys(source).forEach(function (key) {
	        if (!isMergeableObject(source[key]) || !target[key]) {
	            destination[key] = cloneIfNecessary(source[key], optionsArgument);
	        } else {
	            destination[key] = deepmerge(target[key], source[key], optionsArgument);
	        }
	    });
	    return destination
	}
	
	function deepmerge(target, source, optionsArgument) {
	    var array = Array.isArray(source);
	    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
	    var arrayMerge = options.arrayMerge || defaultArrayMerge;
	
	    if (array) {
	        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
	    } else {
	        return mergeObject(target, source, optionsArgument)
	    }
	}
	
	deepmerge.all = function deepmergeAll(array, optionsArgument) {
	    if (!Array.isArray(array) || array.length < 2) {
	        throw new Error('first argument should be an array with at least two elements')
	    }
	
	    // we are sure there are at least 2 values, so it is safe to have no initial value
	    return array.reduce(function(prev, next) {
	        return deepmerge(prev, next, optionsArgument)
	    })
	};
	
	return deepmerge
	
	}));
	});
	
	//      
	// An event handler can take an optional event argument
	// and should not return a value
	                                          
	// An array of all currently registered event handlers for a type
	                                            
	// A map of event types and their corresponding event handlers.
	                        
	                                   
	  
	
	/** Mitt: Tiny (~200b) functional event emitter / pubsub.
	 *  @name mitt
	 *  @returns {Mitt}
	 */
	function mitt(all                 ) {
		all = all || Object.create(null);
	
		return {
			/**
			 * Register an event handler for the given type.
			 *
			 * @param  {String} type	Type of event to listen for, or `"*"` for all events
			 * @param  {Function} handler Function to call in response to given event
			 * @memberOf mitt
			 */
			on: function on(type        , handler              ) {
				(all[type] || (all[type] = [])).push(handler);
			},
	
			/**
			 * Remove an event handler for the given type.
			 *
			 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
			 * @param  {Function} handler Handler function to remove
			 * @memberOf mitt
			 */
			off: function off(type        , handler              ) {
				if (all[type]) {
					all[type].splice(all[type].indexOf(handler) >>> 0, 1);
				}
			},
	
			/**
			 * Invoke all handlers for the given type.
			 * If present, `"*"` handlers are invoked after type-matched handlers.
			 *
			 * @param {String} type  The event type to invoke
			 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
			 * @memberof mitt
			 */
			emit: function emit(type        , evt     ) {
				(all[type] || []).map(function (handler) { handler(evt); });
				(all['*'] || []).map(function (handler) { handler(type, evt); });
			}
		};
	}
	
	var namespaces_1 = createCommonjsModule(function (module, exports) {
	var namespaces = {
	  svg: {
	    name: 'xmlns',
	    uri: 'http://www.w3.org/2000/svg'
	  },
	  xlink: {
	    name: 'xmlns:xlink',
	    uri: 'http://www.w3.org/1999/xlink'
	  }
	};
	
	exports.default = namespaces;
	module.exports = exports.default;
	});
	
	/**
	 * @param {Object} attrs
	 * @return {string}
	 */
	var objectToAttrsString = function (attrs) {
	  return Object.keys(attrs).map(function (attr) {
	    var value = attrs[attr].toString().replace(/"/g, '&quot;');
	    return (attr + "=\"" + value + "\"");
	  }).join(' ');
	};
	
	var svg = namespaces_1.svg;
	var xlink = namespaces_1.xlink;
	
	var defaultAttrs = {};
	defaultAttrs[svg.name] = svg.uri;
	defaultAttrs[xlink.name] = xlink.uri;
	
	/**
	 * @param {string} [content]
	 * @param {Object} [attributes]
	 * @return {string}
	 */
	var wrapInSvgString = function (content, attributes) {
	  if ( content === void 0 ) content = '';
	
	  var attrs = index(defaultAttrs, attributes || {});
	  var attrsRendered = objectToAttrsString(attrs);
	  return ("<svg " + attrsRendered + ">" + content + "</svg>");
	};
	
	var svg$1 = namespaces_1.svg;
	var xlink$1 = namespaces_1.xlink;
	
	var defaultConfig = {
	  attrs: ( obj = {
	    style: ['position: absolute', 'width: 0', 'height: 0'].join('; ')
	  }, obj[svg$1.name] = svg$1.uri, obj[xlink$1.name] = xlink$1.uri, obj )
	};
	var obj;
	
	var Sprite = function Sprite(config) {
	  this.config = index(defaultConfig, config || {});
	  this.symbols = [];
	};
	
	/**
	 * Add new symbol. If symbol with the same id exists it will be replaced.
	 * @param {SpriteSymbol} symbol
	 * @return {boolean} `true` - symbol was added, `false` - replaced
	 */
	Sprite.prototype.add = function add (symbol) {
	  var ref = this;
	    var symbols = ref.symbols;
	  var existing = this.find(symbol.id);
	
	  if (existing) {
	    symbols[symbols.indexOf(existing)] = symbol;
	    return false;
	  }
	
	  symbols.push(symbol);
	  return true;
	};
	
	/**
	 * Remove symbol & destroy it
	 * @param {string} id
	 * @return {boolean} `true` - symbol was found & successfully destroyed, `false` - otherwise
	 */
	Sprite.prototype.remove = function remove (id) {
	  var ref = this;
	    var symbols = ref.symbols;
	  var symbol = this.find(id);
	
	  if (symbol) {
	    symbols.splice(symbols.indexOf(symbol), 1);
	    symbol.destroy();
	    return true;
	  }
	
	  return false;
	};
	
	/**
	 * @param {string} id
	 * @return {SpriteSymbol|null}
	 */
	Sprite.prototype.find = function find (id) {
	  return this.symbols.filter(function (s) { return s.id === id; })[0] || null;
	};
	
	/**
	 * @param {string} id
	 * @return {boolean}
	 */
	Sprite.prototype.has = function has (id) {
	  return this.find(id) !== null;
	};
	
	/**
	 * @return {string}
	 */
	Sprite.prototype.stringify = function stringify () {
	  var ref = this.config;
	    var attrs = ref.attrs;
	  var stringifiedSymbols = this.symbols.map(function (s) { return s.stringify(); }).join('');
	  return wrapInSvgString(stringifiedSymbols, attrs);
	};
	
	/**
	 * @return {string}
	 */
	Sprite.prototype.toString = function toString () {
	  return this.stringify();
	};
	
	Sprite.prototype.destroy = function destroy () {
	  this.symbols.forEach(function (s) { return s.destroy(); });
	};
	
	var SpriteSymbol = function SpriteSymbol(ref) {
	  var id = ref.id;
	  var viewBox = ref.viewBox;
	  var content = ref.content;
	
	  this.id = id;
	  this.viewBox = viewBox;
	  this.content = content;
	};
	
	/**
	 * @return {string}
	 */
	SpriteSymbol.prototype.stringify = function stringify () {
	  return this.content;
	};
	
	/**
	 * @return {string}
	 */
	SpriteSymbol.prototype.toString = function toString () {
	  return this.stringify();
	};
	
	SpriteSymbol.prototype.destroy = function destroy () {
	    var this$1 = this;
	
	  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
	};
	
	/**
	 * @param {string} content
	 * @return {Element}
	 */
	var parse = function (content) {
	  var hasImportNode = !!document.importNode;
	  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;
	
	  /**
	   * Fix for browser which are throwing WrongDocumentError
	   * if you insert an element which is not part of the document
	   * @see http://stackoverflow.com/a/7986519/4624403
	   */
	  if (hasImportNode) {
	    return document.importNode(doc, true);
	  }
	
	  return doc;
	};
	
	var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
	  function BrowserSpriteSymbol () {
	    SpriteSymbol$$1.apply(this, arguments);
	  }
	
	  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
	  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
	  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;
	
	  var prototypeAccessors = { isMounted: {} };
	
	  prototypeAccessors.isMounted.get = function () {
	    return !!this.node;
	  };
	
	  /**
	   * @param {Element} node
	   * @return {BrowserSpriteSymbol}
	   */
	  BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode (node) {
	    return new BrowserSpriteSymbol({
	      id: node.getAttribute('id'),
	      viewBox: node.getAttribute('viewBox'),
	      content: node.outerHTML
	    });
	  };
	
	  BrowserSpriteSymbol.prototype.destroy = function destroy () {
	    if (this.isMounted) {
	      this.unmount();
	    }
	    SpriteSymbol$$1.prototype.destroy.call(this);
	  };
	
	  /**
	   * @param {Element|string} target
	   * @return {Element}
	   */
	  BrowserSpriteSymbol.prototype.mount = function mount (target) {
	    if (this.isMounted) {
	      return this.node;
	    }
	
	    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
	    var node = this.render();
	    this.node = node;
	
	    mountTarget.appendChild(node);
	
	    return node;
	  };
	
	  /**
	   * @return {Element}
	   */
	  BrowserSpriteSymbol.prototype.render = function render () {
	    var content = this.stringify();
	    return parse(wrapInSvgString(content)).childNodes[0];
	  };
	
	  BrowserSpriteSymbol.prototype.unmount = function unmount () {
	    this.node.parentNode.removeChild(this.node);
	  };
	
	  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );
	
	  return BrowserSpriteSymbol;
	}(SpriteSymbol));
	
	var defaultConfig$1 = {
	  /**
	   * Should following options be automatically configured:
	   * - `syncUrlsWithBaseTag`
	   * - `locationChangeAngularEmitter`
	   * - `moveGradientsOutsideSymbol`
	   * @type {boolean}
	   */
	  autoConfigure: true,
	
	  /**
	   * Default mounting selector
	   * @type {string}
	   */
	  mountTo: 'body',
	
	  /**
	   * Fix disappearing SVG elements when <base href> exists.
	   * Executes when sprite mounted.
	   * @see http://stackoverflow.com/a/18265336/796152
	   * @see https://github.com/everdimension/angular-svg-base-fix
	   * @see https://github.com/angular/angular.js/issues/8934#issuecomment-56568466
	   * @type {boolean}
	   */
	  syncUrlsWithBaseTag: false,
	
	  /**
	   * Should sprite listen custom location change event
	   * @type {boolean}
	   */
	  listenLocationChangeEvent: true,
	
	  /**
	   * Custom window event name which should be emitted to update sprite urls
	   * @type {string}
	   */
	  locationChangeEvent: 'locationChange',
	
	  /**
	   * Emit location change event in Angular automatically
	   * @type {boolean}
	   */
	  locationChangeAngularEmitter: false,
	
	  /**
	   * Selector to find symbols usages when updating sprite urls
	   * @type {string}
	   */
	  usagesToUpdate: 'use[*|href]',
	
	  /**
	   * Fix Firefox bug when gradients and patterns don't work if they are within a symbol.
	   * Executes when sprite is rendered, but not mounted.
	   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=306674
	   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=353575
	   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=1235364
	   * @type {boolean}
	   */
	  moveGradientsOutsideSymbol: false
	};
	
	/**
	 * @param {*} arrayLike
	 * @return {Array}
	 */
	var arrayFrom = function (arrayLike) {
	  return Array.prototype.slice.call(arrayLike, 0);
	};
	
	var ua = navigator.userAgent;
	
	var browser = {
	  isChrome: /chrome/i.test(ua),
	  isFirefox: /firefox/i.test(ua),
	
	  // https://msdn.microsoft.com/en-us/library/ms537503(v=vs.85).aspx
	  isIE: /msie/i.test(ua) || /trident/i.test(ua),
	  isEdge: /edge/i.test(ua)
	};
	
	/**
	 * @param {string} name
	 * @param {*} data
	 */
	var dispatchEvent = function (name, data) {
	  var event = document.createEvent('CustomEvent');
	  event.initCustomEvent(name, false, false, data);
	  window.dispatchEvent(event);
	};
	
	/**
	 * IE doesn't evaluate <style> tags in SVGs that are dynamically added to the page.
	 * This trick will trigger IE to read and use any existing SVG <style> tags.
	 * @see https://github.com/iconic/SVGInjector/issues/23
	 * @see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
	 *
	 * @param {Element} node DOM Element to search <style> tags in
	 * @return {Array<HTMLStyleElement>}
	 */
	var evalStylesIEWorkaround = function (node) {
	  var updatedNodes = [];
	
	  arrayFrom(node.querySelectorAll('style'))
	    .forEach(function (style) {
	      style.textContent += '';
	      updatedNodes.push(style);
	    });
	
	  return updatedNodes;
	};
	
	/**
	 * @param {string} [url] If not provided - current URL will be used
	 * @return {string}
	 */
	var getUrlWithoutFragment = function (url) {
	  return (url || window.location.href).split('#')[0];
	};
	
	/* global angular */
	/**
	 * @param {string} eventName
	 */
	var locationChangeAngularEmitter = function (eventName) {
	  angular.module('ng').run(['$rootScope', function ($rootScope) {
	    $rootScope.$on('$locationChangeSuccess', function (e, newUrl, oldUrl) {
	      dispatchEvent(eventName, { oldUrl: oldUrl, newUrl: newUrl });
	    });
	  }]);
	};
	
	var defaultSelector = 'linearGradient, radialGradient, pattern';
	
	/**
	 * @param {Element} svg
	 * @param {string} [selector]
	 * @return {Element}
	 */
	var moveGradientsOutsideSymbol = function (svg, selector) {
	  if ( selector === void 0 ) selector = defaultSelector;
	
	  arrayFrom(svg.querySelectorAll('symbol')).forEach(function (symbol) {
	    arrayFrom(symbol.querySelectorAll(selector)).forEach(function (node) {
	      symbol.parentNode.insertBefore(node, symbol);
	    });
	  });
	  return svg;
	};
	
	/**
	 * @param {NodeList} nodes
	 * @param {Function} [matcher]
	 * @return {Attr[]}
	 */
	function selectAttributes(nodes, matcher) {
	  var attrs = arrayFrom(nodes).reduce(function (acc, node) {
	    if (!node.attributes) {
	      return acc;
	    }
	
	    var arrayfied = arrayFrom(node.attributes);
	    var matched = matcher ? arrayfied.filter(matcher) : arrayfied;
	    return acc.concat(matched);
	  }, []);
	
	  return attrs;
	}
	
	/**
	 * @param {NodeList|Node} nodes
	 * @param {boolean} [clone=true]
	 * @return {string}
	 */
	
	var xLinkNS = namespaces_1.xlink.uri;
	var xLinkAttrName = 'xlink:href';
	
	// eslint-disable-next-line no-useless-escape
	var specialUrlCharsPattern = /[{}|\\\^\[\]`"<>]/g;
	
	function encoder(url) {
	  return url.replace(specialUrlCharsPattern, function (match) {
	    return ("%" + (match[0].charCodeAt(0).toString(16).toUpperCase()));
	  });
	}
	
	/**
	 * @param {NodeList} nodes
	 * @param {string} startsWith
	 * @param {string} replaceWith
	 * @return {NodeList}
	 */
	function updateReferences(nodes, startsWith, replaceWith) {
	  arrayFrom(nodes).forEach(function (node) {
	    var href = node.getAttribute(xLinkAttrName);
	    if (href && href.indexOf(startsWith) === 0) {
	      var newUrl = href.replace(startsWith, replaceWith);
	      node.setAttributeNS(xLinkNS, xLinkAttrName, newUrl);
	    }
	  });
	
	  return nodes;
	}
	
	/**
	 * List of SVG attributes to update url() target in them
	 */
	var attList = [
	  'clipPath',
	  'colorProfile',
	  'src',
	  'cursor',
	  'fill',
	  'filter',
	  'marker',
	  'markerStart',
	  'markerMid',
	  'markerEnd',
	  'mask',
	  'stroke',
	  'style'
	];
	
	var attSelector = attList.map(function (attr) { return ("[" + attr + "]"); }).join(',');
	
	/**
	 * Update URLs in svg image (like `fill="url(...)"`) and update referencing elements
	 * @param {Element} svg
	 * @param {NodeList} references
	 * @param {string|RegExp} startsWith
	 * @param {string} replaceWith
	 * @return {void}
	 *
	 * @example
	 * const sprite = document.querySelector('svg.sprite');
	 * const usages = document.querySelectorAll('use');
	 * updateUrls(sprite, usages, '#', 'prefix#');
	 */
	var updateUrls = function (svg, references, startsWith, replaceWith) {
	  var startsWithEncoded = encoder(startsWith);
	  var replaceWithEncoded = encoder(replaceWith);
	
	  var nodes = svg.querySelectorAll(attSelector);
	  var attrs = selectAttributes(nodes, function (ref) {
	    var localName = ref.localName;
	    var value = ref.value;
	
	    return attList.indexOf(localName) !== -1 && value.indexOf(("url(" + startsWithEncoded)) !== -1;
	  });
	
	  attrs.forEach(function (attr) { return attr.value = attr.value.replace(startsWithEncoded, replaceWithEncoded); });
	  updateReferences(references, startsWithEncoded, replaceWithEncoded);
	};
	
	/**
	 * Internal emitter events
	 * @enum
	 * @private
	 */
	var Events = {
	  MOUNT: 'mount',
	  SYMBOL_MOUNT: 'symbol_mount'
	};
	
	var BrowserSprite = (function (Sprite$$1) {
	  function BrowserSprite(cfg) {
	    var this$1 = this;
	    if ( cfg === void 0 ) cfg = {};
	
	    Sprite$$1.call(this, index(defaultConfig$1, cfg));
	
	    var emitter = mitt();
	    this._emitter = emitter;
	    this.node = null;
	
	    var ref = this;
	    var config = ref.config;
	
	    if (config.autoConfigure) {
	      this._autoConfigure(cfg);
	    }
	
	    if (config.syncUrlsWithBaseTag) {
	      var baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
	      emitter.on(Events.MOUNT, function () { return this$1.updateUrls('#', baseUrl); });
	    }
	
	    var handleLocationChange = this._handleLocationChange.bind(this);
	    this._handleLocationChange = handleLocationChange;
	
	    // Provide way to update sprite urls externally via dispatching custom window event
	    if (config.listenLocationChangeEvent) {
	      window.addEventListener(config.locationChangeEvent, handleLocationChange);
	    }
	
	    // Emit location change event in Angular automatically
	    if (config.locationChangeAngularEmitter) {
	      locationChangeAngularEmitter(config.locationChangeEvent);
	    }
	
	    // After sprite mounted
	    emitter.on(Events.MOUNT, function (spriteNode) {
	      if (config.moveGradientsOutsideSymbol) {
	        moveGradientsOutsideSymbol(spriteNode);
	      }
	    });
	
	    // After symbol mounted into sprite
	    emitter.on(Events.SYMBOL_MOUNT, function (symbolNode) {
	      if (config.moveGradientsOutsideSymbol) {
	        moveGradientsOutsideSymbol(symbolNode.parentNode);
	      }
	
	      if (browser.isIE || browser.isEdge) {
	        evalStylesIEWorkaround(symbolNode);
	      }
	    });
	  }
	
	  if ( Sprite$$1 ) BrowserSprite.__proto__ = Sprite$$1;
	  BrowserSprite.prototype = Object.create( Sprite$$1 && Sprite$$1.prototype );
	  BrowserSprite.prototype.constructor = BrowserSprite;
	
	  var prototypeAccessors = { isMounted: {} };
	
	  /**
	   * @return {boolean}
	   */
	  prototypeAccessors.isMounted.get = function () {
	    return !!this.node;
	  };
	
	  /**
	   * Automatically configure following options
	   * - `syncUrlsWithBaseTag`
	   * - `locationChangeAngularEmitter`
	   * - `moveGradientsOutsideSymbol`
	   * @param {Object} cfg
	   * @private
	   */
	  BrowserSprite.prototype._autoConfigure = function _autoConfigure (cfg) {
	    var ref = this;
	    var config = ref.config;
	
	    if (typeof cfg.syncUrlsWithBaseTag === 'undefined') {
	      config.syncUrlsWithBaseTag = typeof document.getElementsByTagName('base')[0] !== 'undefined';
	    }
	
	    if (typeof cfg.locationChangeAngularEmitter === 'undefined') {
	      config.locationChangeAngularEmitter = 'angular' in window;
	    }
	
	    if (typeof cfg.moveGradientsOutsideSymbol === 'undefined') {
	      config.moveGradientsOutsideSymbol = browser.isFirefox;
	    }
	  };
	
	  /**
	   * @param {Event} event
	   * @param {Object} event.detail
	   * @param {string} event.detail.oldUrl
	   * @param {string} event.detail.newUrl
	   * @private
	   */
	  BrowserSprite.prototype._handleLocationChange = function _handleLocationChange (event) {
	    var ref = event.detail;
	    var oldUrl = ref.oldUrl;
	    var newUrl = ref.newUrl;
	    this.updateUrls(oldUrl, newUrl);
	  };
	
	  /**
	   * Add new symbol. If symbol with the same id exists it will be replaced.
	   * If sprite already mounted - `symbol.mount(sprite.node)` will be called.
	   * @fires Events#SYMBOL_MOUNT
	   * @param {BrowserSpriteSymbol} symbol
	   * @return {boolean} `true` - symbol was added, `false` - replaced
	   */
	  BrowserSprite.prototype.add = function add (symbol) {
	    var sprite = this;
	    var isNewSymbol = Sprite$$1.prototype.add.call(this, symbol);
	
	    if (this.isMounted && isNewSymbol) {
	      symbol.mount(sprite.node);
	      this._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
	    }
	
	    return isNewSymbol;
	  };
	
	  /**
	   * Attach to existing DOM node
	   * @param {string|Element} target
	   * @return {Element|null} attached DOM Element. null if node to attach not found.
	   */
	  BrowserSprite.prototype.attach = function attach (target) {
	    var this$1 = this;
	
	    var sprite = this;
	
	    if (sprite.isMounted) {
	      return sprite.node;
	    }
	
	    /** @type Element */
	    var node = typeof target === 'string' ? document.querySelector(target) : target;
	    sprite.node = node;
	
	    // Already added symbols needs to be mounted
	    this.symbols.forEach(function (symbol) {
	      symbol.mount(sprite.node);
	      this$1._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
	    });
	
	    // Create symbols from existing DOM nodes, add and mount them
	    arrayFrom(node.querySelectorAll('symbol'))
	      .forEach(function (symbolNode) {
	        var symbol = BrowserSpriteSymbol.createFromExistingNode(symbolNode);
	        symbol.node = symbolNode; // hack to prevent symbol mounting to sprite when adding
	        sprite.add(symbol);
	      });
	
	    this._emitter.emit(Events.MOUNT, node);
	
	    return node;
	  };
	
	  BrowserSprite.prototype.destroy = function destroy () {
	    var ref = this;
	    var config = ref.config;
	    var symbols = ref.symbols;
	    var _emitter = ref._emitter;
	
	    symbols.forEach(function (s) { return s.destroy(); });
	
	    _emitter.off('*');
	    window.removeEventListener(config.locationChangeEvent, this._handleLocationChange);
	
	    if (this.isMounted) {
	      this.unmount();
	    }
	  };
	
	  /**
	   * @fires Events#MOUNT
	   * @param {string|Element} [target]
	   * @param {boolean} [prepend=false]
	   * @return {Element|null} rendered sprite node. null if mount node not found.
	   */
	  BrowserSprite.prototype.mount = function mount (target, prepend) {
	    if ( target === void 0 ) target = this.config.mountTo;
	    if ( prepend === void 0 ) prepend = false;
	
	    var sprite = this;
	
	    if (sprite.isMounted) {
	      return sprite.node;
	    }
	
	    var mountNode = typeof target === 'string' ? document.querySelector(target) : target;
	    var node = sprite.render();
	    this.node = node;
	
	    if (prepend && mountNode.childNodes[0]) {
	      mountNode.insertBefore(node, mountNode.childNodes[0]);
	    } else {
	      mountNode.appendChild(node);
	    }
	
	    this._emitter.emit(Events.MOUNT, node);
	
	    return node;
	  };
	
	  /**
	   * @return {Element}
	   */
	  BrowserSprite.prototype.render = function render () {
	    return parse(this.stringify());
	  };
	
	  /**
	   * Detach sprite from the DOM
	   */
	  BrowserSprite.prototype.unmount = function unmount () {
	    this.node.parentNode.removeChild(this.node);
	  };
	
	  /**
	   * Update URLs in sprite and usage elements
	   * @param {string} oldUrl
	   * @param {string} newUrl
	   * @return {boolean} `true` - URLs was updated, `false` - sprite is not mounted
	   */
	  BrowserSprite.prototype.updateUrls = function updateUrls$1 (oldUrl, newUrl) {
	    if (!this.isMounted) {
	      return false;
	    }
	
	    var usages = document.querySelectorAll(this.config.usagesToUpdate);
	
	    updateUrls(
	      this.node,
	      usages,
	      ((getUrlWithoutFragment(oldUrl)) + "#"),
	      ((getUrlWithoutFragment(newUrl)) + "#")
	    );
	
	    return true;
	  };
	
	  Object.defineProperties( BrowserSprite.prototype, prototypeAccessors );
	
	  return BrowserSprite;
	}(Sprite));
	
	return BrowserSprite;
	
	})));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 143 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = trimTrailingLines;
	
	var line = '\n';
	
	/* Remove final newline characters from `value`. */
	function trimTrailingLines(value) {
	  var val = String(value);
	  var index = val.length;
	
	  while (val.charAt(--index) === line) { /* empty */ }
	
	  return val.slice(0, index + 1);
	}


/***/ }),
/* 144 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 145 */,
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.renderContrastHeaderIcons = renderContrastHeaderIcons;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wcag = __webpack_require__(218);
	
	var _wcag2 = _interopRequireDefault(_wcag);
	
	var _classnames = __webpack_require__(24);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Icon = __webpack_require__(29);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _success = __webpack_require__(217);
	
	var _success2 = _interopRequireDefault(_success);
	
	var _Palette = __webpack_require__(147);
	
	var _Palette2 = _interopRequireDefault(_Palette);
	
	var _ColorCardModule = __webpack_require__(71);
	
	var _ColorCardModule2 = _interopRequireDefault(_ColorCardModule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function contrastIsLevelAA(background, foreground, fontSize) {
	  return _wcag2.default.verifyContrastRatio(background.hex(), foreground.hex(), fontSize).WCAG_AA;
	}
	
	function prepareAccessibilityHeaderIcon(style, size, colorHex) {
	  var _classNames;
	
	  return {
	    bgColor: style == 'light' && colorHex,
	    className: (0, _classnames2.default)((_classNames = {}, _classNames[_ColorCardModule2.default.tile] = true, _classNames[_ColorCardModule2.default.small] = size === 'small', _classNames[_ColorCardModule2.default.large] = size === 'large', _classNames[_ColorCardModule2.default.whiteText] = style === 'light', _classNames)),
	    title: (style == 'light' ? 'White text ' : 'Ink text ') + (size == 'large' ? '18pt (24px) or larger' : 'smaller than 18pt (24px)')
	  };
	}
	
	function renderContrastHeaderIcons(colorHex) {
	  var iconCombinations = [prepareAccessibilityHeaderIcon('light', 'small', colorHex), prepareAccessibilityHeaderIcon('light', 'large', colorHex), prepareAccessibilityHeaderIcon('dark', 'small', colorHex), prepareAccessibilityHeaderIcon('dark', 'large', colorHex)];
	  return iconCombinations.map(function (icon, i) {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'span',
	        {
	          className: icon.className,
	          key: i,
	          style: { background: icon.bgColor },
	          title: icon.title
	        },
	        'A'
	      )
	    );
	  });
	}
	
	var ContrastIcon = function ContrastIcon(_ref) {
	  var color = _ref.color,
	      colorName = _ref.colorName,
	      text = _ref.text,
	      size = _ref.size;
	
	  var textColor = _Palette2.default[text.toLowerCase()],
	      isValid = contrastIsLevelAA(color, textColor, size),
	      title = text + ' text on \'' + name + '\' with a font size of at least ' + size + 'pt is level AA contrast.';
	  return _react2.default.createElement(
	    'div',
	    {
	      className: _ColorCardModule2.default.accessibilityIcon,
	      style: { color: textColor.rgb() }
	    },
	    isValid && _react2.default.createElement(_Icon2.default, { icon: _success2.default, role: 'img', title: title })
	  );
	};
	
	exports.default = ContrastIcon;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _color = __webpack_require__(149);
	
	var _color2 = _interopRequireDefault(_color);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Palette = {
	  white: (0, _color2.default)('#ffffff'),
	  ink: (0, _color2.default)('#3e4543'),
	  paper: (0, _color2.default)('#f2edde'),
	  coral: (0, _color2.default)('#f04c5d'),
	  seedling: (0, _color2.default)('#45ad8f'),
	  ocean: (0, _color2.default)('#1b7688'),
	  wisteria: (0, _color2.default)('#727193'),
	  lapis: (0, _color2.default)('#253c64'),
	  peach: (0, _color2.default)('#f3786d'),
	  yuzu: (0, _color2.default)('#ffce1e'),
	  stone: (0, _color2.default)('#f2f2f2'),
	  'positive-delta': (0, _color2.default)('#43e699'),
	  'negative-delta': (0, _color2.default)('#ff4757')
	};
	
	exports.default = Palette;
	module.exports = exports['default'];

/***/ }),
/* 148 */,
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var colorString = __webpack_require__(262);
	var convert = __webpack_require__(62);
	
	var _slice = [].slice;
	
	var skippedModels = [
		// to be honest, I don't really feel like keyword belongs in color convert, but eh.
		'keyword',
	
		// gray conflicts with some method names, and has its own method defined.
		'gray',
	
		// shouldn't really be in color-convert either...
		'hex'
	];
	
	var hashedModelKeys = {};
	Object.keys(convert).forEach(function (model) {
		hashedModelKeys[_slice.call(convert[model].labels).sort().join('')] = model;
	});
	
	var limiters = {};
	
	function Color(obj, model) {
		if (!(this instanceof Color)) {
			return new Color(obj, model);
		}
	
		if (model && model in skippedModels) {
			model = null;
		}
	
		if (model && !(model in convert)) {
			throw new Error('Unknown model: ' + model);
		}
	
		var i;
		var channels;
	
		if (!obj) {
			this.model = 'rgb';
			this.color = [0, 0, 0];
			this.valpha = 1;
		} else if (obj instanceof Color) {
			this.model = obj.model;
			this.color = obj.color.slice();
			this.valpha = obj.valpha;
		} else if (typeof obj === 'string') {
			var result = colorString.get(obj);
			if (result === null) {
				throw new Error('Unable to parse color from string: ' + obj);
			}
	
			this.model = result.model;
			channels = convert[this.model].channels;
			this.color = result.value.slice(0, channels);
			this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
		} else if (obj.length) {
			this.model = model || 'rgb';
			channels = convert[this.model].channels;
			var newArr = _slice.call(obj, 0, channels);
			this.color = zeroArray(newArr, channels);
			this.valpha = typeof obj[channels] === 'number' ? obj[channels] : 1;
		} else if (typeof obj === 'number') {
			// this is always RGB - can be converted later on.
			obj &= 0xFFFFFF;
			this.model = 'rgb';
			this.color = [
				(obj >> 16) & 0xFF,
				(obj >> 8) & 0xFF,
				obj & 0xFF
			];
			this.valpha = 1;
		} else {
			this.valpha = 1;
	
			var keys = Object.keys(obj);
			if ('alpha' in obj) {
				keys.splice(keys.indexOf('alpha'), 1);
				this.valpha = typeof obj.alpha === 'number' ? obj.alpha : 0;
			}
	
			var hashedKeys = keys.sort().join('');
			if (!(hashedKeys in hashedModelKeys)) {
				throw new Error('Unable to parse color from object: ' + JSON.stringify(obj));
			}
	
			this.model = hashedModelKeys[hashedKeys];
	
			var labels = convert[this.model].labels;
			var color = [];
			for (i = 0; i < labels.length; i++) {
				color.push(obj[labels[i]]);
			}
	
			this.color = zeroArray(color);
		}
	
		// perform limitations (clamping, etc.)
		if (limiters[this.model]) {
			channels = convert[this.model].channels;
			for (i = 0; i < channels; i++) {
				var limit = limiters[this.model][i];
				if (limit) {
					this.color[i] = limit(this.color[i]);
				}
			}
		}
	
		this.valpha = Math.max(0, Math.min(1, this.valpha));
	
		if (Object.freeze) {
			Object.freeze(this);
		}
	}
	
	Color.prototype = {
		toString: function () {
			return this.string();
		},
	
		toJSON: function () {
			return this[this.model]();
		},
	
		string: function (places) {
			var self = this.model in colorString.to ? this : this.rgb();
			self = self.round(typeof places === 'number' ? places : 1);
			var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
			return colorString.to[self.model](args);
		},
	
		percentString: function (places) {
			var self = this.rgb().round(typeof places === 'number' ? places : 1);
			var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
			return colorString.to.rgb.percent(args);
		},
	
		array: function () {
			return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
		},
	
		object: function () {
			var result = {};
			var channels = convert[this.model].channels;
			var labels = convert[this.model].labels;
	
			for (var i = 0; i < channels; i++) {
				result[labels[i]] = this.color[i];
			}
	
			if (this.valpha !== 1) {
				result.alpha = this.valpha;
			}
	
			return result;
		},
	
		unitArray: function () {
			var rgb = this.rgb().color;
			rgb[0] /= 255;
			rgb[1] /= 255;
			rgb[2] /= 255;
	
			if (this.valpha !== 1) {
				rgb.push(this.valpha);
			}
	
			return rgb;
		},
	
		unitObject: function () {
			var rgb = this.rgb().object();
			rgb.r /= 255;
			rgb.g /= 255;
			rgb.b /= 255;
	
			if (this.valpha !== 1) {
				rgb.alpha = this.valpha;
			}
	
			return rgb;
		},
	
		round: function (places) {
			places = Math.max(places || 0, 0);
			return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
		},
	
		alpha: function (val) {
			if (arguments.length) {
				return new Color(this.color.concat(Math.max(0, Math.min(1, val))), this.model);
			}
	
			return this.valpha;
		},
	
		// rgb
		red: getset('rgb', 0, maxfn(255)),
		green: getset('rgb', 1, maxfn(255)),
		blue: getset('rgb', 2, maxfn(255)),
	
		hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, function (val) { return ((val % 360) + 360) % 360; }), // eslint-disable-line brace-style
	
		saturationl: getset('hsl', 1, maxfn(100)),
		lightness: getset('hsl', 2, maxfn(100)),
	
		saturationv: getset('hsv', 1, maxfn(100)),
		value: getset('hsv', 2, maxfn(100)),
	
		chroma: getset('hcg', 1, maxfn(100)),
		gray: getset('hcg', 2, maxfn(100)),
	
		white: getset('hwb', 1, maxfn(100)),
		wblack: getset('hwb', 2, maxfn(100)),
	
		cyan: getset('cmyk', 0, maxfn(100)),
		magenta: getset('cmyk', 1, maxfn(100)),
		yellow: getset('cmyk', 2, maxfn(100)),
		black: getset('cmyk', 3, maxfn(100)),
	
		x: getset('xyz', 0, maxfn(100)),
		y: getset('xyz', 1, maxfn(100)),
		z: getset('xyz', 2, maxfn(100)),
	
		l: getset('lab', 0, maxfn(100)),
		a: getset('lab', 1),
		b: getset('lab', 2),
	
		keyword: function (val) {
			if (arguments.length) {
				return new Color(val);
			}
	
			return convert[this.model].keyword(this.color);
		},
	
		hex: function (val) {
			if (arguments.length) {
				return new Color(val);
			}
	
			return colorString.to.hex(this.rgb().round().color);
		},
	
		rgbNumber: function () {
			var rgb = this.rgb().color;
			return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
		},
	
		luminosity: function () {
			// http://www.w3.org/TR/WCAG20/#relativeluminancedef
			var rgb = this.rgb().color;
	
			var lum = [];
			for (var i = 0; i < rgb.length; i++) {
				var chan = rgb[i] / 255;
				lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
			}
	
			return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
		},
	
		contrast: function (color2) {
			// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
			var lum1 = this.luminosity();
			var lum2 = color2.luminosity();
	
			if (lum1 > lum2) {
				return (lum1 + 0.05) / (lum2 + 0.05);
			}
	
			return (lum2 + 0.05) / (lum1 + 0.05);
		},
	
		level: function (color2) {
			var contrastRatio = this.contrast(color2);
			if (contrastRatio >= 7.1) {
				return 'AAA';
			}
	
			return (contrastRatio >= 4.5) ? 'AA' : '';
		},
	
		dark: function () {
			// YIQ equation from http://24ways.org/2010/calculating-color-contrast
			var rgb = this.rgb().color;
			var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
			return yiq < 128;
		},
	
		light: function () {
			return !this.dark();
		},
	
		negate: function () {
			var rgb = this.rgb();
			for (var i = 0; i < 3; i++) {
				rgb.color[i] = 255 - rgb.color[i];
			}
			return rgb;
		},
	
		lighten: function (ratio) {
			var hsl = this.hsl();
			hsl.color[2] += hsl.color[2] * ratio;
			return hsl;
		},
	
		darken: function (ratio) {
			var hsl = this.hsl();
			hsl.color[2] -= hsl.color[2] * ratio;
			return hsl;
		},
	
		saturate: function (ratio) {
			var hsl = this.hsl();
			hsl.color[1] += hsl.color[1] * ratio;
			return hsl;
		},
	
		desaturate: function (ratio) {
			var hsl = this.hsl();
			hsl.color[1] -= hsl.color[1] * ratio;
			return hsl;
		},
	
		whiten: function (ratio) {
			var hwb = this.hwb();
			hwb.color[1] += hwb.color[1] * ratio;
			return hwb;
		},
	
		blacken: function (ratio) {
			var hwb = this.hwb();
			hwb.color[2] += hwb.color[2] * ratio;
			return hwb;
		},
	
		grayscale: function () {
			// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
			var rgb = this.rgb().color;
			var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
			return Color.rgb(val, val, val);
		},
	
		fade: function (ratio) {
			return this.alpha(this.valpha - (this.valpha * ratio));
		},
	
		opaquer: function (ratio) {
			return this.alpha(this.valpha + (this.valpha * ratio));
		},
	
		rotate: function (degrees) {
			var hsl = this.hsl();
			var hue = hsl.color[0];
			hue = (hue + degrees) % 360;
			hue = hue < 0 ? 360 + hue : hue;
			hsl.color[0] = hue;
			return hsl;
		},
	
		mix: function (mixinColor, weight) {
			// ported from sass implementation in C
			// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
			var color1 = mixinColor.rgb();
			var color2 = this.rgb();
			var p = weight === undefined ? 0.5 : weight;
	
			var w = 2 * p - 1;
			var a = color1.alpha() - color2.alpha();
	
			var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
			var w2 = 1 - w1;
	
			return Color.rgb(
					w1 * color1.red() + w2 * color2.red(),
					w1 * color1.green() + w2 * color2.green(),
					w1 * color1.blue() + w2 * color2.blue(),
					color1.alpha() * p + color2.alpha() * (1 - p));
		}
	};
	
	// model conversion methods and static constructors
	Object.keys(convert).forEach(function (model) {
		if (skippedModels.indexOf(model) !== -1) {
			return;
		}
	
		var channels = convert[model].channels;
	
		// conversion methods
		Color.prototype[model] = function () {
			if (this.model === model) {
				return new Color(this);
			}
	
			if (arguments.length) {
				return new Color(arguments, model);
			}
	
			var newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
			return new Color(assertArray(convert[this.model][model].raw(this.color)).concat(newAlpha), model);
		};
	
		// 'static' construction methods
		Color[model] = function (color) {
			if (typeof color === 'number') {
				color = zeroArray(_slice.call(arguments), channels);
			}
			return new Color(color, model);
		};
	});
	
	function roundTo(num, places) {
		return Number(num.toFixed(places));
	}
	
	function roundToPlace(places) {
		return function (num) {
			return roundTo(num, places);
		};
	}
	
	function getset(model, channel, modifier) {
		model = Array.isArray(model) ? model : [model];
	
		model.forEach(function (m) {
			(limiters[m] || (limiters[m] = []))[channel] = modifier;
		});
	
		model = model[0];
	
		return function (val) {
			var result;
	
			if (arguments.length) {
				if (modifier) {
					val = modifier(val);
				}
	
				result = this[model]();
				result.color[channel] = val;
				return result;
			}
	
			result = this[model]().color[channel];
			if (modifier) {
				result = modifier(result);
			}
	
			return result;
		};
	}
	
	function maxfn(max) {
		return function (v) {
			return Math.max(0, Math.min(max, v));
		};
	}
	
	function assertArray(val) {
		return Array.isArray(val) ? val : [val];
	}
	
	function zeroArray(arr, length) {
		for (var i = 0; i < length; i++) {
			if (typeof arr[i] !== 'number') {
				arr[i] = 0;
			}
		}
	
		return arr;
	}
	
	module.exports = Color;


/***/ }),
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = alphabetical;
	
	/* Check if the given character code, or the character
	 * code at the first character, is alphabetical. */
	function alphabetical(character) {
	  var code = typeof character === 'string' ?
	    character.charCodeAt(0) : character;
	
	  return (code >= 97 && code <= 122) || /* a-z */
	    (code >= 65 && code <= 90); /* A-Z */
	}


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	// resolves . and .. elements in a path array with directory names there
	// must be no slashes, empty elements, or device names (c:\) in the array
	// (so also no leading and trailing slashes - it does not distinguish
	// relative and absolute paths)
	function normalizeArray(parts, allowAboveRoot) {
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = parts.length - 1; i >= 0; i--) {
	    var last = parts[i];
	    if (last === '.') {
	      parts.splice(i, 1);
	    } else if (last === '..') {
	      parts.splice(i, 1);
	      up++;
	    } else if (up) {
	      parts.splice(i, 1);
	      up--;
	    }
	  }
	
	  // if the path is allowed to go above the root, restore leading ..s
	  if (allowAboveRoot) {
	    for (; up--; up) {
	      parts.unshift('..');
	    }
	  }
	
	  return parts;
	}
	
	// Split a filename into [root, dir, basename, ext], unix version
	// 'root' is just a slash, or nothing.
	var splitPathRe =
	    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
	var splitPath = function(filename) {
	  return splitPathRe.exec(filename).slice(1);
	};
	
	// path.resolve([from ...], to)
	// posix version
	exports.resolve = function() {
	  var resolvedPath = '',
	      resolvedAbsolute = false;
	
	  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
	    var path = (i >= 0) ? arguments[i] : process.cwd();
	
	    // Skip empty and invalid entries
	    if (typeof path !== 'string') {
	      throw new TypeError('Arguments to path.resolve must be strings');
	    } else if (!path) {
	      continue;
	    }
	
	    resolvedPath = path + '/' + resolvedPath;
	    resolvedAbsolute = path.charAt(0) === '/';
	  }
	
	  // At this point the path should be resolved to a full absolute path, but
	  // handle relative paths to be safe (might happen when process.cwd() fails)
	
	  // Normalize the path
	  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
	    return !!p;
	  }), !resolvedAbsolute).join('/');
	
	  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
	};
	
	// path.normalize(path)
	// posix version
	exports.normalize = function(path) {
	  var isAbsolute = exports.isAbsolute(path),
	      trailingSlash = substr(path, -1) === '/';
	
	  // Normalize the path
	  path = normalizeArray(filter(path.split('/'), function(p) {
	    return !!p;
	  }), !isAbsolute).join('/');
	
	  if (!path && !isAbsolute) {
	    path = '.';
	  }
	  if (path && trailingSlash) {
	    path += '/';
	  }
	
	  return (isAbsolute ? '/' : '') + path;
	};
	
	// posix version
	exports.isAbsolute = function(path) {
	  return path.charAt(0) === '/';
	};
	
	// posix version
	exports.join = function() {
	  var paths = Array.prototype.slice.call(arguments, 0);
	  return exports.normalize(filter(paths, function(p, index) {
	    if (typeof p !== 'string') {
	      throw new TypeError('Arguments to path.join must be strings');
	    }
	    return p;
	  }).join('/'));
	};
	
	
	// path.relative(from, to)
	// posix version
	exports.relative = function(from, to) {
	  from = exports.resolve(from).substr(1);
	  to = exports.resolve(to).substr(1);
	
	  function trim(arr) {
	    var start = 0;
	    for (; start < arr.length; start++) {
	      if (arr[start] !== '') break;
	    }
	
	    var end = arr.length - 1;
	    for (; end >= 0; end--) {
	      if (arr[end] !== '') break;
	    }
	
	    if (start > end) return [];
	    return arr.slice(start, end - start + 1);
	  }
	
	  var fromParts = trim(from.split('/'));
	  var toParts = trim(to.split('/'));
	
	  var length = Math.min(fromParts.length, toParts.length);
	  var samePartsLength = length;
	  for (var i = 0; i < length; i++) {
	    if (fromParts[i] !== toParts[i]) {
	      samePartsLength = i;
	      break;
	    }
	  }
	
	  var outputParts = [];
	  for (var i = samePartsLength; i < fromParts.length; i++) {
	    outputParts.push('..');
	  }
	
	  outputParts = outputParts.concat(toParts.slice(samePartsLength));
	
	  return outputParts.join('/');
	};
	
	exports.sep = '/';
	exports.delimiter = ':';
	
	exports.dirname = function(path) {
	  var result = splitPath(path),
	      root = result[0],
	      dir = result[1];
	
	  if (!root && !dir) {
	    // No dirname whatsoever
	    return '.';
	  }
	
	  if (dir) {
	    // It has a dirname, strip trailing slash
	    dir = dir.substr(0, dir.length - 1);
	  }
	
	  return root + dir;
	};
	
	
	exports.basename = function(path, ext) {
	  var f = splitPath(path)[2];
	  // TODO: make this comparison case-insensitive on windows?
	  if (ext && f.substr(-1 * ext.length) === ext) {
	    f = f.substr(0, f.length - ext.length);
	  }
	  return f;
	};
	
	
	exports.extname = function(path) {
	  return splitPath(path)[3];
	};
	
	function filter (xs, f) {
	    if (xs.filter) return xs.filter(f);
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        if (f(xs[i], i, xs)) res.push(xs[i]);
	    }
	    return res;
	}
	
	// String.prototype.substr - negative index don't work in IE8
	var substr = 'ab'.substr(-1) === 'b'
	    ? function (str, start, len) { return str.substr(start, len) }
	    : function (str, start, len) {
	        if (start < 0) start = str.length + start;
	        return str.substr(start, len);
	    }
	;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ }),
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	  position: true,
	  gfm: true,
	  commonmark: false,
	  footnotes: false,
	  pedantic: false,
	  blocks: __webpack_require__(409)
	};


/***/ }),
/* 213 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = locate;
	
	function locate(value, fromIndex) {
	  var link = value.indexOf('[', fromIndex);
	  var image = value.indexOf('![', fromIndex);
	
	  if (image === -1) {
	    return link;
	  }
	
	  /* Link can never be `-1` if an image is found, so we don’t need
	   * to check for that :) */
	  return link < image ? link : image;
	}


/***/ }),
/* 214 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = locate;
	
	function locate(value, fromIndex) {
	  return value.indexOf('<', fromIndex);
	}


/***/ }),
/* 215 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = indentation;
	
	/* Map of characters, and their column length,
	 * which can be used as indentation. */
	var characters = {' ': 1, '\t': 4};
	
	/* Gets indentation information for a line. */
	function indentation(value) {
	  var index = 0;
	  var indent = 0;
	  var character = value.charAt(index);
	  var stops = {};
	  var size;
	
	  while (character in characters) {
	    size = characters[character];
	
	    indent += size;
	
	    if (size > 1) {
	      indent = Math.floor(indent / size) * size;
	    }
	
	    stops[indent] = index;
	
	    character = value.charAt(++index);
	  }
	
	  return {indent: indent, stops: stops};
	}


/***/ }),
/* 216 */
/***/ (function(module, exports) {

	'use strict';
	
	var attributeName = '[a-zA-Z_:][a-zA-Z0-9:._-]*';
	var unquoted = '[^"\'=<>`\\u0000-\\u0020]+';
	var singleQuoted = '\'[^\']*\'';
	var doubleQuoted = '"[^"]*"';
	var attributeValue = '(?:' + unquoted + '|' + singleQuoted + '|' + doubleQuoted + ')';
	var attribute = '(?:\\s+' + attributeName + '(?:\\s*=\\s*' + attributeValue + ')?)';
	var openTag = '<[A-Za-z][A-Za-z0-9\\-]*' + attribute + '*\\s*\\/?>';
	var closeTag = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>';
	var comment = '<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->';
	var processing = '<[?].*?[?]>';
	var declaration = '<![A-Za-z]+\\s+[^>]*>';
	var cdata = '<!\\[CDATA\\[[\\s\\S]*?\\]\\]>';
	
	exports.openCloseTag = new RegExp('^(?:' + openTag + '|' + closeTag + ')');
	
	exports.tag = new RegExp('^(?:' +
	  openTag + '|' +
	  closeTag + '|' +
	  comment + '|' +
	  processing + '|' +
	  declaration + '|' +
	  cdata +
	')');


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

	var SpriteSymbol = __webpack_require__(27);
	var sprite = __webpack_require__(23);
	var symbol = new SpriteSymbol({
	  "id": "ca-icon-success",
	  "use": "ca-icon-success-usage",
	  "viewBox": "0 0 20 20",
	  "content": "<symbol viewBox=\"0 0 20 20\" id=\"ca-icon-success\"><defs><path d=\"M10 2c4.416 0 8 3.584 8 8s-3.584 8-8 8-8-3.584-8-8 3.584-8 8-8zM8.4 14l7.2-7.2-1.128-1.136L8.4 11.736 5.528 8.872 4.4 10l4 4z\" id=\"ca-icon-success_a\" /></defs><use fill=\"currentColor\" xlink:href=\"#ca-icon-success_a\" fill-rule=\"evenodd\" /></symbol>"
	});
	var result = sprite.add(symbol);
	module.exports = symbol

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	 * Methods to check wcag accessibility.
	 */
	
	var color = __webpack_require__(584);
	
	var WCAG_REQ_RATIO_AA_LG = 3.0,
	    WCAG_REQ_RATIO_AA_SM = 4.5,
	    WCAG_REQ_RATIO_AAA_LG = 4.5,
	    WCAG_REQ_RATIO_AAA_SM = 7.0,
	    WCAG_FONT_CUTOFF = 18;
	
	var resultsClass = {
	  toString: function() {
	    return '< WCAG-AA: ' + ((this.WCAG_AA) ? 'pass' : 'fail') +
	           ' WCAG-AAA: ' + ((this.WCAG_AAA) ? 'pass' : 'fail') +
	           ' >';
	  }
	};
	
	var getContrastRatio = function(colorA, colorB) {
	  var ratio,
	      lumA,
	      lumB,
	      lighter,
	      darker;
	
	  lumA = color.relativeLuminance(colorA);
	  lumB = color.relativeLuminance(colorB);
	
	  if (lumA >= lumB) {
	    lighter = lumA;
	    darker = lumB;
	  } else {
	    lighter = lumB;
	    darker = lumA;
	  }
	
	  ratio = (lighter + 0.05) / (darker + 0.05);
	
	  return ratio;
	};
	
	var verifyContrastRatio = function(colorA, colorB, lFontSize) {
	  var ratio = 0,
	      results = Object.create(resultsClass),
	      fontSize = lFontSize || 12;
	
	  ratio = getContrastRatio(colorA, colorB);
	
	  if (fontSize >= WCAG_FONT_CUTOFF) {
	    results.WCAG_AA = (ratio >= WCAG_REQ_RATIO_AA_LG);
	    results.WCAG_AAA = (ratio >= WCAG_REQ_RATIO_AAA_LG);
	  } else {
	    results.WCAG_AA = (ratio >= WCAG_REQ_RATIO_AA_SM);
	    results.WCAG_AAA = (ratio >= WCAG_REQ_RATIO_AAA_SM);
	  }
	
	  return results;
	};
	
	module.exports = {
	  getContrastRatio: getContrastRatio,
	  verifyContrastRatio: verifyContrastRatio
	};


/***/ }),
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(24);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Icon = __webpack_require__(29);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _CardModule = __webpack_require__(337);
	
	var _CardModule2 = _interopRequireDefault(_CardModule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Card = function Card(_ref) {
	  var _classNames;
	
	  var title = _ref.title,
	      icon = _ref.icon,
	      iconColor = _ref.iconColor,
	      children = _ref.children;
	
	  if (!title) {
	    return _react2.default.createElement(
	      'div',
	      { className: _CardModule2.default.card },
	      children
	    );
	  }
	  var header = _react2.default.createElement(
	    'div',
	    { className: _CardModule2.default.cardHeader },
	    icon && _react2.default.createElement(
	      'span',
	      {
	        className: (0, _classnames2.default)((_classNames = {}, _classNames[_CardModule2.default.iconWrapper] = true, _classNames[_CardModule2.default[iconColor]] = iconColor, _classNames))
	      },
	      _react2.default.createElement(_Icon2.default, { icon: icon, role: 'presentation' })
	    ),
	    title
	  );
	  return _react2.default.createElement(
	    'div',
	    { className: _CardModule2.default.cardWithHeader },
	    title && header,
	    _react2.default.createElement(
	      'div',
	      { className: _CardModule2.default.cardBody },
	      children
	    )
	  );
	};
	
	exports.default = Card;
	module.exports = exports['default'];

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Card = __webpack_require__(227);
	
	var _Card2 = _interopRequireDefault(_Card);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = _Card2.default;

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _KebabModule = __webpack_require__(338);
	
	var _KebabModule2 = _interopRequireDefault(_KebabModule);
	
	var _Icon = __webpack_require__(29);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _ellipsis = __webpack_require__(571);
	
	var _ellipsis2 = _interopRequireDefault(_ellipsis);
	
	var _KebabMenu = __webpack_require__(230);
	
	var _KebabMenu2 = _interopRequireDefault(_KebabMenu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Kebab = function (_React$Component) {
	  _inherits(Kebab, _React$Component);
	
	  function Kebab() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Kebab);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      isKebabMenuVisible: Boolean(_this.props.menuVisible)
	    }, _this.toggleKebabMenu = function (e) {
	      e.stopPropagation();
	      var currentState = _this.state.isKebabMenuVisible;
	      _this.setState({
	        isKebabMenuVisible: !currentState
	      });
	    }, _this.hideKebabMenu = function () {
	      _this.setState({
	        isKebabMenuVisible: false
	      });
	    }, _this.kebabRef = function (c) {
	      _this.kebab = c;
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  Kebab.prototype.getPosition = function getPosition() {
	    return this.kebab ? this.kebab.getBoundingClientRect() : null;
	  };
	
	  Kebab.prototype.renderKebabMenu = function renderKebabMenu() {
	    return _react2.default.createElement(_KebabMenu2.default, {
	      headerTitle: this.props.title,
	      headerInfo: this.props.headerInfo,
	      headerClass: this.props.headerClass,
	      links: this.props.links,
	      actions: this.props.actions,
	      hideKebabMenu: this.hideKebabMenu,
	      position: this.getPosition()
	    });
	  };
	
	  Kebab.prototype.render = function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: _KebabModule2.default.fieldKebabIconInner },
	      _react2.default.createElement(
	        'div',
	        {
	          className: _KebabModule2.default.kebabIcon,
	          onClick: this.toggleKebabMenu,
	          ref: this.kebabRef
	        },
	        _react2.default.createElement(
	          'div',
	          { className: this.state.isKebabMenuVisible ? _KebabModule2.default.isOpen : '' },
	          _react2.default.createElement(_Icon2.default, { icon: _ellipsis2.default, role: 'img', title: this.props.title })
	        )
	      ),
	      this.state.isKebabMenuVisible && this.renderKebabMenu()
	    );
	  };
	
	  return Kebab;
	}(_react2.default.Component);
	
	exports.default = Kebab;
	
	
	Kebab.propTypes = {
	  title: _propTypes2.default.string.isRequired,
	  headerInfo: _propTypes2.default.string,
	  headerClass: _propTypes2.default.string,
	  links: _propTypes2.default.array.isRequired,
	  actions: _propTypes2.default.array.isRequired,
	  menuVisible: _propTypes2.default.bool
	};
	module.exports = exports['default'];

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _KebabMenuModule = __webpack_require__(110);
	
	var _KebabMenuModule2 = _interopRequireDefault(_KebabMenuModule);
	
	var _KebabMenuList = __webpack_require__(232);
	
	var _KebabMenuList2 = _interopRequireDefault(_KebabMenuList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var KebabMenu = function (_React$Component) {
	  _inherits(KebabMenu, _React$Component);
	
	  function KebabMenu() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, KebabMenu);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.menuRef = function (c) {
	      _this.menu = c;
	    }, _this.handleDocumentClick = function (e) {
	      if (_this.menu && !_this.menu.contains(e.target)) {
	        _this.props.hideKebabMenu();
	      }
	    }, _this.handleDocumentResize = function () {
	      _this.props.hideKebabMenu();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	  // componentDidMount() {
	  //   document.addEventListener('click', this.handleDocumentClick, false);
	  //   window.addEventListener('resize', this.handleDocumentResize, false);
	  //   this.positionMenu();
	  // }
	
	  // componentWillUnmount() {
	  //   document.removeEventListener('click', this.handleDocumentClick, false);
	  //   window.removeEventListener('resize', this.handleDocumentResize, false);
	  // }
	
	  KebabMenu.prototype.positionMenu = function positionMenu() {
	    // if (!this.props.position) {
	    //   return;
	    // }
	    // const pos = this.props.position;
	    // const heightBetweenTopOfRowAndKebabIcon = (pos.bottom - pos.top) / 2;
	    // const { innerHeight } = window;
	    // const rect = this.menu.getBoundingClientRect();
	    // this.menu.style.left = this.calculateLeftOffset(
	    //   window.scrollX,
	    //   pos.right,
	    //   rect.width
	    // );
	    // this.menu.style.top = this.calculateTopOffset(
	    //   window.scrollY,
	    //   pos.top,
	    //   heightBetweenTopOfRowAndKebabIcon
	    // );
	    // if (pos.bottom > innerHeight - rect.height) {
	    //   this.menu.style.top = this.calculateShiftedUpTopOffset(
	    //     window.scrollY,
	    //     pos.top,
	    //     rect.height - heightBetweenTopOfRowAndKebabIcon + 12
	    //   );
	    // }
	  };
	
	  KebabMenu.prototype.convertToPx = function convertToPx(pixel) {
	    return pixel + 'px';
	  };
	
	  KebabMenu.prototype.calculateLeftOffset = function calculateLeftOffset(scrollDistanceFromLeft, rightOfRow, rectWidth) {
	    return this.convertToPx(scrollDistanceFromLeft + rightOfRow - rectWidth);
	  };
	
	  KebabMenu.prototype.calculateTopOffset = function calculateTopOffset(scrollDistanceFromTop, topOfRow, yOffset) {
	    return this.convertToPx(scrollDistanceFromTop + (topOfRow + yOffset));
	  };
	
	  KebabMenu.prototype.calculateShiftedUpTopOffset = function calculateShiftedUpTopOffset(scrollDistanceFromTop, topOfRow, yOffset) {
	    return this.convertToPx(scrollDistanceFromTop + (topOfRow - yOffset));
	  };
	
	  KebabMenu.prototype.render = function render() {
	    var props = this.props;
	    return _react2.default.createElement(
	      'div',
	      { className: _KebabMenuModule2.default.container, ref: this.menuRef },
	      _react2.default.createElement(_KebabMenuList2.default, {
	        headerTitle: props.headerTitle,
	        headerInfo: props.headerInfo,
	        headerClass: props.headerClass,
	        links: props.links,
	        actions: props.actions,
	        hideKebabMenu: props.hideKebabMenu
	      })
	    );
	  };
	
	  return KebabMenu;
	}(_react2.default.Component);
	
	exports.default = KebabMenu;
	
	
	KebabMenu.propTypes = {
	  headerTitle: _propTypes2.default.string.isRequired,
	  headerInfo: _propTypes2.default.string,
	  headerClass: _propTypes2.default.string,
	  links: _propTypes2.default.array.isRequired,
	  actions: _propTypes2.default.array.isRequired,
	  hideKebabMenu: _propTypes2.default.func.isRequired,
	  position: _propTypes2.default.shape({
	    top: _propTypes2.default.number,
	    bottom: _propTypes2.default.number,
	    left: _propTypes2.default.number,
	    right: _propTypes2.default.number
	  })
	};
	module.exports = exports['default'];

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.MenuItemAction = exports.MenuItemLink = undefined;
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _KebabMenuModule = __webpack_require__(110);
	
	var _KebabMenuModule2 = _interopRequireDefault(_KebabMenuModule);
	
	var _Icon = __webpack_require__(29);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MenuItemLink = exports.MenuItemLink = function MenuItemLink(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: _KebabMenuModule2.default.menuItemLink },
	    _react2.default.createElement(
	      'a',
	      { href: props.link },
	      _react2.default.createElement(
	        'span',
	        { className: _KebabMenuModule2.default.menuItem__title },
	        props.text
	      )
	    )
	  );
	};
	
	var MenuItemAction = exports.MenuItemAction = function MenuItemAction(props) {
	  var handleOnClick = function handleOnClick(event) {
	    if (props.hideKebabMenu) {
	      props.hideKebabMenu();
	    }
	    props.action(event);
	  };
	
	  var className = _KebabMenuModule2.default.menuItemAction;
	  if (props.hoverIcon) {
	    className += ' ' + _KebabMenuModule2.default.hoverIcon;
	  }
	
	  return _react2.default.createElement(
	    'div',
	    { className: className, onClick: handleOnClick },
	    _react2.default.createElement(
	      'a',
	      null,
	      _react2.default.createElement(
	        'span',
	        { className: _KebabMenuModule2.default.menuItem__title },
	        props.text
	      ),
	      _react2.default.createElement(
	        'span',
	        { className: _KebabMenuModule2.default.menuItem__icon },
	        _react2.default.createElement(_Icon2.default, { icon: props.icon, role: 'presentation' })
	      )
	    )
	  );
	};
	
	MenuItemLink.propTypes = {
	  link: _propTypes2.default.string,
	  text: _propTypes2.default.node
	};
	
	MenuItemAction.propTypes = {
	  action: _propTypes2.default.func.isRequired,
	  text: _propTypes2.default.node.isRequired,
	  icon: _propTypes2.default.object,
	  hoverIcon: _propTypes2.default.bool,
	  hideKebabMenu: _propTypes2.default.func
	};

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(24);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _KebabMenuModule = __webpack_require__(110);
	
	var _KebabMenuModule2 = _interopRequireDefault(_KebabMenuModule);
	
	var _KebabMenuItems = __webpack_require__(231);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var KebabMenuList = function (_React$Component) {
	  _inherits(KebabMenuList, _React$Component);
	
	  function KebabMenuList() {
	    _classCallCheck(this, KebabMenuList);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  KebabMenuList.prototype.renderLinks = function renderLinks(links) {
	    return links.map(function (item, index) {
	      return _react2.default.createElement(_KebabMenuItems.MenuItemLink, { text: item.text, link: item.link, key: index });
	    });
	  };
	
	  KebabMenuList.prototype.renderActions = function renderActions(actions) {
	    var _this2 = this;
	
	    return actions.map(function (item, index) {
	      return _react2.default.createElement(_KebabMenuItems.MenuItemAction, {
	        text: item.text,
	        action: item.action,
	        icon: item.icon,
	        hoverIcon: item.hoverIcon,
	        key: index,
	        hideKebabMenu: _this2.props.hideKebabMenu
	      });
	    });
	  };
	
	  KebabMenuList.prototype.renderLinksContainer = function renderLinksContainer(links) {
	    if (links.length > 0) {
	      return _react2.default.createElement(
	        'div',
	        { className: _KebabMenuModule2.default.linksContainer },
	        this.renderLinks(links)
	      );
	    }
	  };
	
	  KebabMenuList.prototype.renderActionsContainer = function renderActionsContainer(actions) {
	    if (actions.length > 0) {
	      return _react2.default.createElement(
	        'div',
	        { className: _KebabMenuModule2.default.actionsContainer },
	        this.renderActions(actions)
	      );
	    }
	  };
	
	  KebabMenuList.prototype.renderSeparator = function renderSeparator(props) {
	    return props.links.length > 0 && props.actions.length > 0 ? _react2.default.createElement('hr', { className: _KebabMenuModule2.default.separator }) : '';
	  };
	
	  KebabMenuList.prototype.render = function render() {
	    var _classNames;
	
	    var props = this.props;
	    var headerClasses = (0, _classnames2.default)((_classNames = {}, _classNames[_KebabMenuModule2.default.headerContainer] = true, _classNames[_KebabMenuModule2.default[props.headerClass]] = props.headerClass, _classNames));
	
	    return _react2.default.createElement(
	      'div',
	      { className: _KebabMenuModule2.default.menuContainer },
	      _react2.default.createElement(
	        'div',
	        { className: headerClasses },
	        _react2.default.createElement(
	          'span',
	          { className: _KebabMenuModule2.default.headerTitle },
	          props.headerTitle
	        ),
	        _react2.default.createElement(
	          'span',
	          { className: _KebabMenuModule2.default.headerContent },
	          props.headerInfo
	        )
	      ),
	      this.renderLinksContainer(props.links),
	      this.renderSeparator(props),
	      this.renderActionsContainer(props.actions)
	    );
	  };
	
	  return KebabMenuList;
	}(_react2.default.Component);
	
	exports.default = KebabMenuList;
	
	
	KebabMenuList.propTypes = {
	  headerTitle: _propTypes2.default.string.isRequired,
	  headerInfo: _propTypes2.default.string,
	  headerClass: _propTypes2.default.string,
	  links: _propTypes2.default.array.isRequired,
	  actions: _propTypes2.default.array.isRequired,
	  hideKebabMenu: _propTypes2.default.func
	};
	module.exports = exports['default'];

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Kebab = __webpack_require__(229);
	module.exports = Kebab;

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMarkdown = __webpack_require__(488);
	
	var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);
	
	var _card = __webpack_require__(228);
	
	var _card2 = _interopRequireDefault(_card);
	
	var _success = __webpack_require__(217);
	
	var _success2 = _interopRequireDefault(_success);
	
	var _exclamation = __webpack_require__(572);
	
	var _exclamation2 = _interopRequireDefault(_exclamation);
	
	var _TextContentModule = __webpack_require__(339);
	
	var _TextContentModule2 = _interopRequireDefault(_TextContentModule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TipCard = function TipCard(_ref) {
	  var title = _ref.title,
	      type = _ref.type,
	      content = _ref.content;
	  return _react2.default.createElement(
	    _card2.default,
	    {
	      title: title,
	      icon: type == 'tip' ? _success2.default : _exclamation2.default,
	      iconColor: type == 'tip' ? 'seedling' : 'coral'
	    },
	    _react2.default.createElement(
	      'div',
	      { className: _TextContentModule2.default.textContent },
	      _react2.default.createElement(_reactMarkdown2.default, { source: content })
	    )
	  );
	};
	
	exports.default = TipCard;
	module.exports = exports['default'];

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var TipCard = __webpack_require__(234);
	module.exports = TipCard;

/***/ }),
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _color = __webpack_require__(149);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _classnames = __webpack_require__(24);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _wcag = __webpack_require__(218);
	
	var _wcag2 = _interopRequireDefault(_wcag);
	
	var _ColorBlockKebab = __webpack_require__(240);
	
	var _ColorBlockKebab2 = _interopRequireDefault(_ColorBlockKebab);
	
	var _ContrastIcon = __webpack_require__(146);
	
	var _ContrastIcon2 = _interopRequireDefault(_ContrastIcon);
	
	var _ColorCardModule = __webpack_require__(71);
	
	var _ColorCardModule2 = _interopRequireDefault(_ColorCardModule);
	
	var _Palette = __webpack_require__(147);
	
	var _Palette2 = _interopRequireDefault(_Palette);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function addTint(color, percentage) {
	  return color.mix((0, _color2.default)('#ffffff'), percentage / 100);
	}
	
	function addShade(color, percentage) {
	  return color.mix((0, _color2.default)('#000000'), percentage / 100);
	}
	
	function shouldUseWhiteText(color) {
	  var whiteContrast = _wcag2.default.getContrastRatio(color.hex(), '#ffffff'),
	      blackContrast = _wcag2.default.getContrastRatio(color.hex(), _Palette2.default.ink.hex());
	  return whiteContrast > blackContrast;
	}
	
	var ColorBlock = function ColorBlock(_ref) {
	  var colorName = _ref.colorName,
	      amount = _ref.amount,
	      showContrast = _ref.showContrast;
	
	  var isHalfBlock = false,
	      label = '100%',
	      sassVar = '$ca-palette-' + colorName.toLowerCase(),
	      bgColor = _Palette2.default[colorName.toLowerCase()];
	
	  if (amount != 0) {
	    var absAmount = Math.abs(amount);
	    if (amount > 0) {
	      bgColor = addTint(bgColor, absAmount);
	      sassVar = 'add-tint(' + sassVar + ', ' + absAmount + '%)';
	      label = '+' + absAmount + '% White';
	    } else {
	      bgColor = addShade(bgColor, absAmount);
	      sassVar = 'add-shade(' + sassVar + ', ' + absAmount + '%)';
	      label = '+' + absAmount + '% Black';
	    }
	    isHalfBlock = true;
	  }
	
	  var shouldUseWhite = shouldUseWhiteText(bgColor);
	
	  var classes = (0, _classnames2.default)(_ColorCardModule2.default['colorBlock'], isHalfBlock && _ColorCardModule2.default['colorBlockHalf'], shouldUseWhite && _ColorCardModule2.default['whiteText']),
	      name = colorName + ' ' + label;
	  var icons = showContrast ? [_react2.default.createElement(_ContrastIcon2.default, { color: bgColor, name: name, text: 'White', size: 12 }), _react2.default.createElement(_ContrastIcon2.default, { color: bgColor, name: name, text: 'White', size: 18 }), _react2.default.createElement(_ContrastIcon2.default, { color: bgColor, name: name, text: 'Ink', size: 12 }), _react2.default.createElement(_ContrastIcon2.default, { color: bgColor, name: name, text: 'Ink', size: 18 })] : _react2.default.createElement(_ColorBlockKebab2.default, { bgColor: bgColor, sassVar: sassVar });
	
	  return _react2.default.createElement(
	    'div',
	    {
	      key: bgColor.rgb().string(),
	      className: classes,
	      style: { background: bgColor.rgb().string() }
	    },
	    _react2.default.createElement(
	      'span',
	      { className: _ColorCardModule2.default.colorBlockLabel },
	      label
	    ),
	    icons
	  );
	};
	
	exports.default = ColorBlock;
	module.exports = exports['default'];

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _kebab = __webpack_require__(233);
	
	var _kebab2 = _interopRequireDefault(_kebab);
	
	var _ColorCardModule = __webpack_require__(71);
	
	var _ColorCardModule2 = _interopRequireDefault(_ColorCardModule);
	
	var _duplicate = __webpack_require__(570);
	
	var _duplicate2 = _interopRequireDefault(_duplicate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ColorBlockKebab = function ColorBlockKebab(_ref) {
	  var bgColor = _ref.bgColor,
	      sassVar = _ref.sassVar;
	
	  var hex = bgColor.hex(),
	      rgb = bgColor.rgb().array().map(Math.round).join(', '),
	      cmyk = bgColor.cmyk().array().map(Math.round).join(', ');
	  return _react2.default.createElement(
	    'span',
	    { className: _ColorCardModule2.default.kebabContainer },
	    _react2.default.createElement(_kebab2.default, {
	      links: [],
	      actions: [getColorDropdownItem('SASS', sassVar), getColorDropdownItem('HEX', hex), getColorDropdownItem('RGB', rgb), getColorDropdownItem('CMYK', cmyk)],
	      title: 'Copy To Clipboard'
	    })
	  );
	};
	
	var getColorDropdownItem = function getColorDropdownItem(type, value) {
	  var input = void 0;
	  return {
	    text: _react2.default.createElement(
	      'div',
	      { className: _ColorCardModule2.default.dropdownItem },
	      _react2.default.createElement(
	        'strong',
	        null,
	        type
	      ),
	      ' ',
	      _react2.default.createElement(
	        'small',
	        null,
	        value
	      ),
	      _react2.default.createElement('input', { type: 'text', defaultValue: value, ref: function ref(i) {
	          return input = i;
	        } })
	    ),
	    action: function action() {
	      if (input) {
	        input.select();
	        document.execCommand('copy');
	      }
	    },
	    icon: _duplicate2.default,
	    hoverIcon: true
	  };
	};
	
	exports.default = ColorBlockKebab;
	module.exports = exports['default'];

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Icon = __webpack_require__(29);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _chevronUp = __webpack_require__(568);
	
	var _chevronUp2 = _interopRequireDefault(_chevronUp);
	
	var _chevronDown = __webpack_require__(567);
	
	var _chevronDown2 = _interopRequireDefault(_chevronDown);
	
	var _ColorCardModule = __webpack_require__(71);
	
	var _ColorCardModule2 = _interopRequireDefault(_ColorCardModule);
	
	var _ColorBlock = __webpack_require__(239);
	
	var _ColorBlock2 = _interopRequireDefault(_ColorBlock);
	
	var _ContrastIcon = __webpack_require__(146);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ColorCard = function (_React$Component) {
	  _inherits(ColorCard, _React$Component);
	
	  function ColorCard() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, ColorCard);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      expanded: false
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  ColorCard.prototype.render = function render() {
	    var name = this.props.name,
	        colorClassName = _ColorCardModule2.default[name.toLowerCase()];
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'div',
	        { className: _ColorCardModule2.default.colorCard },
	        _react2.default.createElement(
	          'h3',
	          null,
	          this.renderColorTitleAndToggle()
	        ),
	        this.renderSubtitle(),
	        this.renderColorBlocks(this.state.expanded)
	      )
	    );
	  };
	
	  ColorCard.prototype.renderColorTitleAndToggle = function renderColorTitleAndToggle() {
	    var _this2 = this;
	
	    if (!this.isExpandable()) {
	      return _react2.default.createElement(
	        'span',
	        null,
	        this.props.name
	      );
	    }
	    var toggleIcon = this.state.expanded ? _chevronUp2.default : _chevronDown2.default,
	        toggleTitle = this.state.expanded ? 'Collapse Color' : 'Expand Color';
	    return _react2.default.createElement(
	      'a',
	      { onClick: function onClick() {
	          return _this2.toggleOpen();
	        } },
	      this.props.name,
	      _react2.default.createElement(
	        'span',
	        { className: _ColorCardModule2.default.toggleIconWrapper },
	        _react2.default.createElement(_Icon2.default, { icon: toggleIcon, role: 'img', title: toggleTitle })
	      )
	    );
	  };
	
	  ColorCard.prototype.isExpandable = function isExpandable() {
	    return this.props.name !== 'Stone';
	  };
	
	  ColorCard.prototype.toggleOpen = function toggleOpen() {
	    this.setState({ expanded: !this.state.expanded });
	  };
	
	  ColorCard.prototype.renderSubtitle = function renderSubtitle() {
	    var showContrast = this.props.showAccessibility,
	        title = showContrast ? 'WCAG 2.0 AA' : 'Tint & Shade';
	    return _react2.default.createElement(
	      'div',
	      { className: _ColorCardModule2.default.subheader },
	      _react2.default.createElement(
	        'h4',
	        null,
	        title
	      ),
	      showContrast && (0, _ContrastIcon.renderContrastHeaderIcons)()
	    );
	  };
	
	  ColorCard.prototype.renderColorBlocks = function renderColorBlocks(showVariations) {
	    var _this3 = this;
	
	    var colorName = this.props.name;
	    var variations = showVariations && this.isExpandable() ? [90, 70, 50, 30, 10, 0, -10, -20, -30, -40, -50] : [0];
	    return variations.map(function (amount) {
	      return _react2.default.createElement(_ColorBlock2.default, {
	        colorName: colorName,
	        amount: amount,
	        showContrast: _this3.props.showAccessibility
	      });
	    });
	  };
	
	  return ColorCard;
	}(_react2.default.Component);
	
	exports.default = ColorCard;
	module.exports = exports['default'];

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Elements = __webpack_require__(11);
	
	var _tipCard = __webpack_require__(235);
	
	var _tipCard2 = _interopRequireDefault(_tipCard);
	
	var _indexModule = __webpack_require__(341);
	
	var _indexModule2 = _interopRequireDefault(_indexModule);
	
	var _ColorCard = __webpack_require__(241);
	
	var _ColorCard2 = _interopRequireDefault(_ColorCard);
	
	var _ColorsShould = __webpack_require__(417);
	
	var _ColorsShould2 = _interopRequireDefault(_ColorsShould);
	
	var _ColorsShouldNot = __webpack_require__(418);
	
	var _ColorsShouldNot2 = _interopRequireDefault(_ColorsShouldNot);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Page = function (_React$Component) {
	  _inherits(Page, _React$Component);
	
	  function Page() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Page);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      showAccessibility: {}
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  Page.prototype.render = function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _Elements.Heading1,
	        null,
	        'Colors'
	      ),
	      _react2.default.createElement(
	        'p',
	        { className: _indexModule2.default.intro },
	        'Our color palette is built with our core principles and guidelines as its foundation.',
	        _react2.default.createElement('br', null),
	        'We are committed to complying with',
	        ' ',
	        _react2.default.createElement(
	          _Elements.ExternalLink,
	          { to: 'https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast' },
	          'AA standard contrast ratios'
	        ),
	        '.'
	      ),
	      _react2.default.createElement('hr', { className: _indexModule2.default.hr }),
	      _react2.default.createElement(
	        'div',
	        { className: _indexModule2.default.cardContainer },
	        this.renderColorSection('Primary Colors', ['Coral', 'Paper', 'Ink']),
	        this.renderColorSection('Secondary Colors', ['Seedling', 'Ocean', 'Lapis', 'Wisteria', 'Peach', 'Yuzu']),
	        this.renderColorSection('Tertiary Colors', ['Positive-Delta', 'Negative-Delta', 'Stone'])
	      ),
	      _react2.default.createElement(
	        _Elements.Heading2,
	        null,
	        'Best Practices'
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: _indexModule2.default.tipsContainer },
	        _react2.default.createElement(_tipCard2.default, { title: 'Colors should...', type: 'tip', content: _ColorsShould2.default }),
	        _react2.default.createElement(_tipCard2.default, {
	          title: 'Colors should not...',
	          type: 'warning',
	          content: _ColorsShouldNot2.default
	        })
	      ),
	      _react2.default.createElement(
	        _Elements.Link,
	        { to: '/' },
	        'Go back to the homepage'
	      )
	    );
	  };
	
	  Page.prototype.renderColorSection = function renderColorSection(title, colors) {
	    var _this2 = this;
	
	    var showAccessibility = this.state.showAccessibility[title];
	    return [_react2.default.createElement(
	      'div',
	      { className: _indexModule2.default.gridHeader, key: title },
	      _react2.default.createElement(
	        _Elements.Heading2,
	        null,
	        title
	      ),
	      _react2.default.createElement(
	        _Elements.ActionLink,
	        { action: function action() {
	            return _this2.toggleAccessibility(title);
	          } },
	        showAccessibility ? 'Hide Contrast Checker' : 'Show Contrast Checker'
	      )
	    ), colors.map(function (color) {
	      return _react2.default.createElement(_ColorCard2.default, {
	        name: color,
	        key: color,
	        showAccessibility: showAccessibility
	      });
	    })];
	  };
	
	  Page.prototype.toggleAccessibility = function toggleAccessibility(section) {
	    var _extends2;
	
	    var currentValue = this.state.showAccessibility[section];
	    this.setState({
	      showAccessibility: _extends({}, this.state.showAccessibility, (_extends2 = {}, _extends2[section] = !currentValue, _extends2))
	    });
	  };
	
	  return Page;
	}(_react2.default.Component);
	
	exports.default = Page;
	module.exports = exports['default'];

/***/ }),
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = bail;
	
	function bail(err) {
	  if (err) {
	    throw err;
	  }
	}


/***/ }),
/* 261 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = collapse;
	
	/* collapse(' \t\nbar \nbaz\t'); // ' bar baz ' */
	function collapse(value) {
	  return String(value).replace(/\s+/g, ' ');
	}


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

	/* MIT license */
	var colorNames = __webpack_require__(63);
	var swizzle = __webpack_require__(565);
	
	var reverseNames = {};
	
	// create a list of reverse color names
	for (var name in colorNames) {
		if (colorNames.hasOwnProperty(name)) {
			reverseNames[colorNames[name]] = name;
		}
	}
	
	var cs = module.exports = {
		to: {}
	};
	
	cs.get = function (string) {
		var prefix = string.substring(0, 3).toLowerCase();
		var val;
		var model;
		switch (prefix) {
			case 'hsl':
				val = cs.get.hsl(string);
				model = 'hsl';
				break;
			case 'hwb':
				val = cs.get.hwb(string);
				model = 'hwb';
				break;
			default:
				val = cs.get.rgb(string);
				model = 'rgb';
				break;
		}
	
		if (!val) {
			return null;
		}
	
		return {model: model, value: val};
	};
	
	cs.get.rgb = function (string) {
		if (!string) {
			return null;
		}
	
		var abbr = /^#([a-f0-9]{3,4})$/i;
		var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
		var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
		var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
		var keyword = /(\D+)/;
	
		var rgb = [0, 0, 0, 1];
		var match;
		var i;
		var hexAlpha;
	
		if (match = string.match(hex)) {
			hexAlpha = match[2];
			match = match[1];
	
			for (i = 0; i < 3; i++) {
				// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
				var i2 = i * 2;
				rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
			}
	
			if (hexAlpha) {
				rgb[3] = Math.round((parseInt(hexAlpha, 16) / 255) * 100) / 100;
			}
		} else if (match = string.match(abbr)) {
			match = match[1];
			hexAlpha = match[3];
	
			for (i = 0; i < 3; i++) {
				rgb[i] = parseInt(match[i] + match[i], 16);
			}
	
			if (hexAlpha) {
				rgb[3] = Math.round((parseInt(hexAlpha + hexAlpha, 16) / 255) * 100) / 100;
			}
		} else if (match = string.match(rgba)) {
			for (i = 0; i < 3; i++) {
				rgb[i] = parseInt(match[i + 1], 0);
			}
	
			if (match[4]) {
				rgb[3] = parseFloat(match[4]);
			}
		} else if (match = string.match(per)) {
			for (i = 0; i < 3; i++) {
				rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
			}
	
			if (match[4]) {
				rgb[3] = parseFloat(match[4]);
			}
		} else if (match = string.match(keyword)) {
			if (match[1] === 'transparent') {
				return [0, 0, 0, 0];
			}
	
			rgb = colorNames[match[1]];
	
			if (!rgb) {
				return null;
			}
	
			rgb[3] = 1;
	
			return rgb;
		} else {
			return null;
		}
	
		for (i = 0; i < 3; i++) {
			rgb[i] = clamp(rgb[i], 0, 255);
		}
		rgb[3] = clamp(rgb[3], 0, 1);
	
		return rgb;
	};
	
	cs.get.hsl = function (string) {
		if (!string) {
			return null;
		}
	
		var hsl = /^hsla?\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
		var match = string.match(hsl);
	
		if (match) {
			var alpha = parseFloat(match[4]);
			var h = ((parseFloat(match[1]) % 360) + 360) % 360;
			var s = clamp(parseFloat(match[2]), 0, 100);
			var l = clamp(parseFloat(match[3]), 0, 100);
			var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
	
			return [h, s, l, a];
		}
	
		return null;
	};
	
	cs.get.hwb = function (string) {
		if (!string) {
			return null;
		}
	
		var hwb = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
		var match = string.match(hwb);
	
		if (match) {
			var alpha = parseFloat(match[4]);
			var h = ((parseFloat(match[1]) % 360) + 360) % 360;
			var w = clamp(parseFloat(match[2]), 0, 100);
			var b = clamp(parseFloat(match[3]), 0, 100);
			var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
			return [h, w, b, a];
		}
	
		return null;
	};
	
	cs.to.hex = function () {
		var rgba = swizzle(arguments);
	
		return (
			'#' +
			hexDouble(rgba[0]) +
			hexDouble(rgba[1]) +
			hexDouble(rgba[2]) +
			(rgba[3] < 1
				? (hexDouble(Math.round(rgba[3] * 255)))
				: '')
		);
	};
	
	cs.to.rgb = function () {
		var rgba = swizzle(arguments);
	
		return rgba.length < 4 || rgba[3] === 1
			? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
			: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
	};
	
	cs.to.rgb.percent = function () {
		var rgba = swizzle(arguments);
	
		var r = Math.round(rgba[0] / 255 * 100);
		var g = Math.round(rgba[1] / 255 * 100);
		var b = Math.round(rgba[2] / 255 * 100);
	
		return rgba.length < 4 || rgba[3] === 1
			? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
			: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
	};
	
	cs.to.hsl = function () {
		var hsla = swizzle(arguments);
		return hsla.length < 4 || hsla[3] === 1
			? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
			: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
	};
	
	// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
	// (hwb have alpha optional & 1 is default value)
	cs.to.hwb = function () {
		var hwba = swizzle(arguments);
	
		var a = '';
		if (hwba.length >= 4 && hwba[3] !== 1) {
			a = ', ' + hwba[3];
		}
	
		return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
	};
	
	cs.to.keyword = function (rgb) {
		return reverseNames[rgb.slice(0, 3)];
	};
	
	// helpers
	function clamp(num, min, max) {
		return Math.min(Math.max(min, num), max);
	}
	
	function hexDouble(num) {
		var str = num.toString(16).toUpperCase();
		return (str.length < 2) ? '0' + str : str;
	}


/***/ }),
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */
/***/ (function(module, exports) {

	'use strict';
	
	var hasOwn = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	
	var isArray = function isArray(arr) {
		if (typeof Array.isArray === 'function') {
			return Array.isArray(arr);
		}
	
		return toStr.call(arr) === '[object Array]';
	};
	
	var isPlainObject = function isPlainObject(obj) {
		if (!obj || toStr.call(obj) !== '[object Object]') {
			return false;
		}
	
		var hasOwnConstructor = hasOwn.call(obj, 'constructor');
		var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
		// Not own constructor property must be Object
		if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
			return false;
		}
	
		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		var key;
		for (key in obj) { /**/ }
	
		return typeof key === 'undefined' || hasOwn.call(obj, key);
	};
	
	module.exports = function extend() {
		var options, name, src, copy, copyIsArray, clone;
		var target = arguments[0];
		var i = 1;
		var length = arguments.length;
		var deep = false;
	
		// Handle a deep copy situation
		if (typeof target === 'boolean') {
			deep = target;
			target = arguments[1] || {};
			// skip the boolean and the target
			i = 2;
		}
		if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
			target = {};
		}
	
		for (; i < length; ++i) {
			options = arguments[i];
			// Only deal with non-null/undefined values
			if (options != null) {
				// Extend the base object
				for (name in options) {
					src = target[name];
					copy = options[name];
	
					// Prevent never-ending loop
					if (target !== copy) {
						// Recurse if we're merging plain objects or arrays
						if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && isArray(src) ? src : [];
							} else {
								clone = src && isPlainObject(src) ? src : {};
							}
	
							// Never move original objects, clone them
							target[name] = extend(deep, clone, copy);
	
						// Don't bring in undefined values
						} else if (typeof copy !== 'undefined') {
							target[name] = copy;
						}
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};


/***/ }),
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"card":"src-components-card----Card-module---card---1WbKx","cardWithHeader":"src-components-card----Card-module---cardWithHeader---1bmdf src-components-card----Card-module---card---1WbKx","cardHeader":"src-components-card----Card-module---cardHeader---1ReSX","cardBody":"src-components-card----Card-module---cardBody---1jrwZ","iconWrapper":"src-components-card----Card-module---iconWrapper---vyVhq","coral":"src-components-card----Card-module---coral---3ZJIP","seedling":"src-components-card----Card-module---seedling---1ETgU"};

/***/ }),
/* 338 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fieldKebabIconInner":"src-components-kebab----Kebab-module---fieldKebabIconInner---2YfnA","kebabIcon":"src-components-kebab----Kebab-module---kebabIcon---2fMMH","isOpen":"src-components-kebab----Kebab-module---isOpen---2Q4Iv"};

/***/ }),
/* 339 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"textContent":"src-components-tip-card----TextContent-module---textContent---3ryzN"};

/***/ }),
/* 340 */,
/* 341 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"cardContainer":"src-pages-atoms-colors----index-module---cardContainer---K7vSj","gridHeader":"src-pages-atoms-colors----index-module---gridHeader---LFLqa","tipsContainer":"src-pages-atoms-colors----index-module---tipsContainer---PzIeW","intro":"src-pages-atoms-colors----index-module---intro---JUrzf","hr":"src-pages-atoms-colors----index-module---hr---1uzXC"};

/***/ }),
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */
/***/ (function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var alphabetical = __webpack_require__(177);
	var decimal = __webpack_require__(74);
	
	module.exports = alphanumerical;
	
	/* Check if the given character code, or the character
	 * code at the first character, is alphanumerical. */
	function alphanumerical(character) {
	  return alphabetical(character) || decimal(character);
	}


/***/ }),
/* 387 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function isArrayish(obj) {
		if (!obj || typeof obj === 'string') {
			return false;
		}
	
		return obj instanceof Array || Array.isArray(obj) ||
			(obj.length >= 0 && (obj.splice instanceof Function ||
				(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
	};


/***/ }),
/* 388 */
/***/ (function(module, exports) {

	/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <https://feross.org>
	 * @license  MIT
	 */
	
	// The _isBuffer check is for Safari 5-7 support, because it's missing
	// Object.prototype.constructor. Remove this eventually
	module.exports = function (obj) {
	  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
	}
	
	function isBuffer (obj) {
	  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}
	
	// For Node v0.10 support. Remove this eventually.
	function isSlowBuffer (obj) {
	  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
	}


/***/ }),
/* 389 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = hexadecimal;
	
	/* Check if the given character code, or the character
	 * code at the first character, is hexadecimal. */
	function hexadecimal(character) {
	  var code = typeof character === 'string' ?
	    character.charCodeAt(0) : character;
	
	  return (code >= 97 /* a */ && code <= 102 /* z */) ||
	    (code >= 65 /* A */ && code <= 70 /* Z */) ||
	    (code >= 48 /* A */ && code <= 57 /* Z */);
	}


/***/ }),
/* 390 */
/***/ (function(module, exports) {

	'use strict';
	var toString = Object.prototype.toString;
	
	module.exports = function (x) {
		var prototype;
		return toString.call(x) === '[object Object]' && (prototype = Object.getPrototypeOf(x), prototype === null || prototype === Object.getPrototypeOf({}));
	};


/***/ }),
/* 391 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = wordCharacter;
	
	var fromCode = String.fromCharCode;
	var re = /\w/;
	
	/* Check if the given character code, or the character
	 * code at the first character, is a word character. */
	function wordCharacter(character) {
	  return re.test(
	    typeof character === 'number' ? fromCode(character) : character.charAt(0)
	  );
	}


/***/ }),
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */
/***/ (function(module, exports) {

	module.exports = {"AElig":"Æ","AMP":"&","Aacute":"Á","Acirc":"Â","Agrave":"À","Aring":"Å","Atilde":"Ã","Auml":"Ä","COPY":"©","Ccedil":"Ç","ETH":"Ð","Eacute":"É","Ecirc":"Ê","Egrave":"È","Euml":"Ë","GT":">","Iacute":"Í","Icirc":"Î","Igrave":"Ì","Iuml":"Ï","LT":"<","Ntilde":"Ñ","Oacute":"Ó","Ocirc":"Ô","Ograve":"Ò","Oslash":"Ø","Otilde":"Õ","Ouml":"Ö","QUOT":"\"","REG":"®","THORN":"Þ","Uacute":"Ú","Ucirc":"Û","Ugrave":"Ù","Uuml":"Ü","Yacute":"Ý","aacute":"á","acirc":"â","acute":"´","aelig":"æ","agrave":"à","amp":"&","aring":"å","atilde":"ã","auml":"ä","brvbar":"¦","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","curren":"¤","deg":"°","divide":"÷","eacute":"é","ecirc":"ê","egrave":"è","eth":"ð","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","iacute":"í","icirc":"î","iexcl":"¡","igrave":"ì","iquest":"¿","iuml":"ï","laquo":"«","lt":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","ntilde":"ñ","oacute":"ó","ocirc":"ô","ograve":"ò","ordf":"ª","ordm":"º","oslash":"ø","otilde":"õ","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\"","raquo":"»","reg":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","thorn":"þ","times":"×","uacute":"ú","ucirc":"û","ugrave":"ù","uml":"¨","uuml":"ü","yacute":"ý","yen":"¥","yuml":"ÿ"}

/***/ }),
/* 407 */
/***/ (function(module, exports) {

	module.exports = {"AEli":"Æ","AElig":"Æ","AM":"&","AMP":"&","Aacut":"Á","Aacute":"Á","Abreve":"Ă","Acir":"Â","Acirc":"Â","Acy":"А","Afr":"𝔄","Agrav":"À","Agrave":"À","Alpha":"Α","Amacr":"Ā","And":"⩓","Aogon":"Ą","Aopf":"𝔸","ApplyFunction":"⁡","Arin":"Å","Aring":"Å","Ascr":"𝒜","Assign":"≔","Atild":"Ã","Atilde":"Ã","Aum":"Ä","Auml":"Ä","Backslash":"∖","Barv":"⫧","Barwed":"⌆","Bcy":"Б","Because":"∵","Bernoullis":"ℬ","Beta":"Β","Bfr":"𝔅","Bopf":"𝔹","Breve":"˘","Bscr":"ℬ","Bumpeq":"≎","CHcy":"Ч","COP":"©","COPY":"©","Cacute":"Ć","Cap":"⋒","CapitalDifferentialD":"ⅅ","Cayleys":"ℭ","Ccaron":"Č","Ccedi":"Ç","Ccedil":"Ç","Ccirc":"Ĉ","Cconint":"∰","Cdot":"Ċ","Cedilla":"¸","CenterDot":"·","Cfr":"ℭ","Chi":"Χ","CircleDot":"⊙","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","Colon":"∷","Colone":"⩴","Congruent":"≡","Conint":"∯","ContourIntegral":"∮","Copf":"ℂ","Coproduct":"∐","CounterClockwiseContourIntegral":"∳","Cross":"⨯","Cscr":"𝒞","Cup":"⋓","CupCap":"≍","DD":"ⅅ","DDotrahd":"⤑","DJcy":"Ђ","DScy":"Ѕ","DZcy":"Џ","Dagger":"‡","Darr":"↡","Dashv":"⫤","Dcaron":"Ď","Dcy":"Д","Del":"∇","Delta":"Δ","Dfr":"𝔇","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","Diamond":"⋄","DifferentialD":"ⅆ","Dopf":"𝔻","Dot":"¨","DotDot":"⃜","DotEqual":"≐","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrow":"↓","DownArrowBar":"⤓","DownArrowUpArrow":"⇵","DownBreve":"̑","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVector":"↽","DownLeftVectorBar":"⥖","DownRightTeeVector":"⥟","DownRightVector":"⇁","DownRightVectorBar":"⥗","DownTee":"⊤","DownTeeArrow":"↧","Downarrow":"⇓","Dscr":"𝒟","Dstrok":"Đ","ENG":"Ŋ","ET":"Ð","ETH":"Ð","Eacut":"É","Eacute":"É","Ecaron":"Ě","Ecir":"Ê","Ecirc":"Ê","Ecy":"Э","Edot":"Ė","Efr":"𝔈","Egrav":"È","Egrave":"È","Element":"∈","Emacr":"Ē","EmptySmallSquare":"◻","EmptyVerySmallSquare":"▫","Eogon":"Ę","Eopf":"𝔼","Epsilon":"Ε","Equal":"⩵","EqualTilde":"≂","Equilibrium":"⇌","Escr":"ℰ","Esim":"⩳","Eta":"Η","Eum":"Ë","Euml":"Ë","Exists":"∃","ExponentialE":"ⅇ","Fcy":"Ф","Ffr":"𝔉","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","Fopf":"𝔽","ForAll":"∀","Fouriertrf":"ℱ","Fscr":"ℱ","GJcy":"Ѓ","G":">","GT":">","Gamma":"Γ","Gammad":"Ϝ","Gbreve":"Ğ","Gcedil":"Ģ","Gcirc":"Ĝ","Gcy":"Г","Gdot":"Ġ","Gfr":"𝔊","Gg":"⋙","Gopf":"𝔾","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","Gt":"≫","HARDcy":"Ъ","Hacek":"ˇ","Hat":"^","Hcirc":"Ĥ","Hfr":"ℌ","HilbertSpace":"ℋ","Hopf":"ℍ","HorizontalLine":"─","Hscr":"ℋ","Hstrok":"Ħ","HumpDownHump":"≎","HumpEqual":"≏","IEcy":"Е","IJlig":"Ĳ","IOcy":"Ё","Iacut":"Í","Iacute":"Í","Icir":"Î","Icirc":"Î","Icy":"И","Idot":"İ","Ifr":"ℑ","Igrav":"Ì","Igrave":"Ì","Im":"ℑ","Imacr":"Ī","ImaginaryI":"ⅈ","Implies":"⇒","Int":"∬","Integral":"∫","Intersection":"⋂","InvisibleComma":"⁣","InvisibleTimes":"⁢","Iogon":"Į","Iopf":"𝕀","Iota":"Ι","Iscr":"ℐ","Itilde":"Ĩ","Iukcy":"І","Ium":"Ï","Iuml":"Ï","Jcirc":"Ĵ","Jcy":"Й","Jfr":"𝔍","Jopf":"𝕁","Jscr":"𝒥","Jsercy":"Ј","Jukcy":"Є","KHcy":"Х","KJcy":"Ќ","Kappa":"Κ","Kcedil":"Ķ","Kcy":"К","Kfr":"𝔎","Kopf":"𝕂","Kscr":"𝒦","LJcy":"Љ","L":"<","LT":"<","Lacute":"Ĺ","Lambda":"Λ","Lang":"⟪","Laplacetrf":"ℒ","Larr":"↞","Lcaron":"Ľ","Lcedil":"Ļ","Lcy":"Л","LeftAngleBracket":"⟨","LeftArrow":"←","LeftArrowBar":"⇤","LeftArrowRightArrow":"⇆","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVector":"⇃","LeftDownVectorBar":"⥙","LeftFloor":"⌊","LeftRightArrow":"↔","LeftRightVector":"⥎","LeftTee":"⊣","LeftTeeArrow":"↤","LeftTeeVector":"⥚","LeftTriangle":"⊲","LeftTriangleBar":"⧏","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVector":"↿","LeftUpVectorBar":"⥘","LeftVector":"↼","LeftVectorBar":"⥒","Leftarrow":"⇐","Leftrightarrow":"⇔","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","LessLess":"⪡","LessSlantEqual":"⩽","LessTilde":"≲","Lfr":"𝔏","Ll":"⋘","Lleftarrow":"⇚","Lmidot":"Ŀ","LongLeftArrow":"⟵","LongLeftRightArrow":"⟷","LongRightArrow":"⟶","Longleftarrow":"⟸","Longleftrightarrow":"⟺","Longrightarrow":"⟹","Lopf":"𝕃","LowerLeftArrow":"↙","LowerRightArrow":"↘","Lscr":"ℒ","Lsh":"↰","Lstrok":"Ł","Lt":"≪","Map":"⤅","Mcy":"М","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","MinusPlus":"∓","Mopf":"𝕄","Mscr":"ℳ","Mu":"Μ","NJcy":"Њ","Nacute":"Ń","Ncaron":"Ň","Ncedil":"Ņ","Ncy":"Н","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\n","Nfr":"𝔑","NoBreak":"⁠","NonBreakingSpace":" ","Nopf":"ℕ","Not":"⫬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","NotLeftTriangle":"⋪","NotLeftTriangleBar":"⧏̸","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangle":"⋫","NotRightTriangleBar":"⧐̸","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","Nscr":"𝒩","Ntild":"Ñ","Ntilde":"Ñ","Nu":"Ν","OElig":"Œ","Oacut":"Ó","Oacute":"Ó","Ocir":"Ô","Ocirc":"Ô","Ocy":"О","Odblac":"Ő","Ofr":"𝔒","Ograv":"Ò","Ograve":"Ò","Omacr":"Ō","Omega":"Ω","Omicron":"Ο","Oopf":"𝕆","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","Or":"⩔","Oscr":"𝒪","Oslas":"Ø","Oslash":"Ø","Otild":"Õ","Otilde":"Õ","Otimes":"⨷","Oum":"Ö","Ouml":"Ö","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","PartialD":"∂","Pcy":"П","Pfr":"𝔓","Phi":"Φ","Pi":"Π","PlusMinus":"±","Poincareplane":"ℌ","Popf":"ℙ","Pr":"⪻","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","Prime":"″","Product":"∏","Proportion":"∷","Proportional":"∝","Pscr":"𝒫","Psi":"Ψ","QUO":"\"","QUOT":"\"","Qfr":"𝔔","Qopf":"ℚ","Qscr":"𝒬","RBarr":"⤐","RE":"®","REG":"®","Racute":"Ŕ","Rang":"⟫","Rarr":"↠","Rarrtl":"⤖","Rcaron":"Ř","Rcedil":"Ŗ","Rcy":"Р","Re":"ℜ","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","Rfr":"ℜ","Rho":"Ρ","RightAngleBracket":"⟩","RightArrow":"→","RightArrowBar":"⇥","RightArrowLeftArrow":"⇄","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVector":"⇂","RightDownVectorBar":"⥕","RightFloor":"⌋","RightTee":"⊢","RightTeeArrow":"↦","RightTeeVector":"⥛","RightTriangle":"⊳","RightTriangleBar":"⧐","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVector":"↾","RightUpVectorBar":"⥔","RightVector":"⇀","RightVectorBar":"⥓","Rightarrow":"⇒","Ropf":"ℝ","RoundImplies":"⥰","Rrightarrow":"⇛","Rscr":"ℛ","Rsh":"↱","RuleDelayed":"⧴","SHCHcy":"Щ","SHcy":"Ш","SOFTcy":"Ь","Sacute":"Ś","Sc":"⪼","Scaron":"Š","Scedil":"Ş","Scirc":"Ŝ","Scy":"С","Sfr":"𝔖","ShortDownArrow":"↓","ShortLeftArrow":"←","ShortRightArrow":"→","ShortUpArrow":"↑","Sigma":"Σ","SmallCircle":"∘","Sopf":"𝕊","Sqrt":"√","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","Sscr":"𝒮","Star":"⋆","Sub":"⋐","Subset":"⋐","SubsetEqual":"⊆","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","SuchThat":"∋","Sum":"∑","Sup":"⋑","Superset":"⊃","SupersetEqual":"⊇","Supset":"⋑","THOR":"Þ","THORN":"Þ","TRADE":"™","TSHcy":"Ћ","TScy":"Ц","Tab":"\t","Tau":"Τ","Tcaron":"Ť","Tcedil":"Ţ","Tcy":"Т","Tfr":"𝔗","Therefore":"∴","Theta":"Θ","ThickSpace":"  ","ThinSpace":" ","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","Topf":"𝕋","TripleDot":"⃛","Tscr":"𝒯","Tstrok":"Ŧ","Uacut":"Ú","Uacute":"Ú","Uarr":"↟","Uarrocir":"⥉","Ubrcy":"Ў","Ubreve":"Ŭ","Ucir":"Û","Ucirc":"Û","Ucy":"У","Udblac":"Ű","Ufr":"𝔘","Ugrav":"Ù","Ugrave":"Ù","Umacr":"Ū","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","Uopf":"𝕌","UpArrow":"↑","UpArrowBar":"⤒","UpArrowDownArrow":"⇅","UpDownArrow":"↕","UpEquilibrium":"⥮","UpTee":"⊥","UpTeeArrow":"↥","Uparrow":"⇑","Updownarrow":"⇕","UpperLeftArrow":"↖","UpperRightArrow":"↗","Upsi":"ϒ","Upsilon":"Υ","Uring":"Ů","Uscr":"𝒰","Utilde":"Ũ","Uum":"Ü","Uuml":"Ü","VDash":"⊫","Vbar":"⫫","Vcy":"В","Vdash":"⊩","Vdashl":"⫦","Vee":"⋁","Verbar":"‖","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","Vopf":"𝕍","Vscr":"𝒱","Vvdash":"⊪","Wcirc":"Ŵ","Wedge":"⋀","Wfr":"𝔚","Wopf":"𝕎","Wscr":"𝒲","Xfr":"𝔛","Xi":"Ξ","Xopf":"𝕏","Xscr":"𝒳","YAcy":"Я","YIcy":"Ї","YUcy":"Ю","Yacut":"Ý","Yacute":"Ý","Ycirc":"Ŷ","Ycy":"Ы","Yfr":"𝔜","Yopf":"𝕐","Yscr":"𝒴","Yuml":"Ÿ","ZHcy":"Ж","Zacute":"Ź","Zcaron":"Ž","Zcy":"З","Zdot":"Ż","ZeroWidthSpace":"​","Zeta":"Ζ","Zfr":"ℨ","Zopf":"ℤ","Zscr":"𝒵","aacut":"á","aacute":"á","abreve":"ă","ac":"∾","acE":"∾̳","acd":"∿","acir":"â","acirc":"â","acut":"´","acute":"´","acy":"а","aeli":"æ","aelig":"æ","af":"⁡","afr":"𝔞","agrav":"à","agrave":"à","alefsym":"ℵ","aleph":"ℵ","alpha":"α","amacr":"ā","amalg":"⨿","am":"&","amp":"&","and":"∧","andand":"⩕","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsd":"∡","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","aogon":"ą","aopf":"𝕒","ap":"≈","apE":"⩰","apacir":"⩯","ape":"≊","apid":"≋","apos":"'","approx":"≈","approxeq":"≊","arin":"å","aring":"å","ascr":"𝒶","ast":"*","asymp":"≈","asympeq":"≍","atild":"ã","atilde":"ã","aum":"ä","auml":"ä","awconint":"∳","awint":"⨑","bNot":"⫭","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","barvee":"⊽","barwed":"⌅","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","beta":"β","beth":"ℶ","between":"≬","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bnot":"⌐","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxDL":"╗","boxDR":"╔","boxDl":"╖","boxDr":"╓","boxH":"═","boxHD":"╦","boxHU":"╩","boxHd":"╤","boxHu":"╧","boxUL":"╝","boxUR":"╚","boxUl":"╜","boxUr":"╙","boxV":"║","boxVH":"╬","boxVL":"╣","boxVR":"╠","boxVh":"╫","boxVl":"╢","boxVr":"╟","boxbox":"⧉","boxdL":"╕","boxdR":"╒","boxdl":"┐","boxdr":"┌","boxh":"─","boxhD":"╥","boxhU":"╨","boxhd":"┬","boxhu":"┴","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxuL":"╛","boxuR":"╘","boxul":"┘","boxur":"└","boxv":"│","boxvH":"╪","boxvL":"╡","boxvR":"╞","boxvh":"┼","boxvl":"┤","boxvr":"├","bprime":"‵","breve":"˘","brvba":"¦","brvbar":"¦","bscr":"𝒷","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsol":"\\","bsolb":"⧅","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","bumpeq":"≏","cacute":"ć","cap":"∩","capand":"⩄","capbrcup":"⩉","capcap":"⩋","capcup":"⩇","capdot":"⩀","caps":"∩︀","caret":"⁁","caron":"ˇ","ccaps":"⩍","ccaron":"č","ccedi":"ç","ccedil":"ç","ccirc":"ĉ","ccups":"⩌","ccupssm":"⩐","cdot":"ċ","cedi":"¸","cedil":"¸","cemptyv":"⦲","cen":"¢","cent":"¢","centerdot":"·","cfr":"𝔠","chcy":"ч","check":"✓","checkmark":"✓","chi":"χ","cir":"○","cirE":"⧃","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledR":"®","circledS":"Ⓢ","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","clubs":"♣","clubsuit":"♣","colon":":","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","conint":"∮","copf":"𝕔","coprod":"∐","cop":"©","copy":"©","copysr":"℗","crarr":"↵","cross":"✗","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cup":"∪","cupbrcap":"⩈","cupcap":"⩆","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curre":"¤","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dArr":"⇓","dHar":"⥥","dagger":"†","daleth":"ℸ","darr":"↓","dash":"‐","dashv":"⊣","dbkarow":"⤏","dblac":"˝","dcaron":"ď","dcy":"д","dd":"ⅆ","ddagger":"‡","ddarr":"⇊","ddotseq":"⩷","de":"°","deg":"°","delta":"δ","demptyv":"⦱","dfisht":"⥿","dfr":"𝔡","dharl":"⇃","dharr":"⇂","diam":"⋄","diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","digamma":"ϝ","disin":"⋲","div":"÷","divid":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","dopf":"𝕕","dot":"˙","doteq":"≐","doteqdot":"≑","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","downarrow":"↓","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","dscr":"𝒹","dscy":"ѕ","dsol":"⧶","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","dzcy":"џ","dzigrarr":"⟿","eDDot":"⩷","eDot":"≑","eacut":"é","eacute":"é","easter":"⩮","ecaron":"ě","ecir":"ê","ecirc":"ê","ecolon":"≕","ecy":"э","edot":"ė","ee":"ⅇ","efDot":"≒","efr":"𝔢","eg":"⪚","egrav":"è","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","emacr":"ē","empty":"∅","emptyset":"∅","emptyv":"∅","emsp13":" ","emsp14":" ","emsp":" ","eng":"ŋ","ensp":" ","eogon":"ę","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","equals":"=","equest":"≟","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erDot":"≓","erarr":"⥱","escr":"ℯ","esdot":"≐","esim":"≂","eta":"η","et":"ð","eth":"ð","eum":"ë","euml":"ë","euro":"€","excl":"!","exist":"∃","expectation":"ℰ","exponentiale":"ⅇ","fallingdotseq":"≒","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","ffr":"𝔣","filig":"ﬁ","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","fopf":"𝕗","forall":"∀","fork":"⋔","forkv":"⫙","fpartint":"⨍","frac1":"¼","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac3":"¾","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","gE":"≧","gEl":"⪌","gacute":"ǵ","gamma":"γ","gammad":"ϝ","gap":"⪆","gbreve":"ğ","gcirc":"ĝ","gcy":"г","gdot":"ġ","ge":"≥","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","ges":"⩾","gescc":"⪩","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","gfr":"𝔤","gg":"≫","ggg":"⋙","gimel":"ℷ","gjcy":"ѓ","gl":"≷","glE":"⪒","gla":"⪥","glj":"⪤","gnE":"≩","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gneq":"⪈","gneqq":"≩","gnsim":"⋧","gopf":"𝕘","grave":"`","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","g":">","gt":">","gtcc":"⪧","gtcir":"⩺","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","hArr":"⇔","hairsp":" ","half":"½","hamilt":"ℋ","hardcy":"ъ","harr":"↔","harrcir":"⥈","harrw":"↭","hbar":"ℏ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","horbar":"―","hscr":"𝒽","hslash":"ℏ","hstrok":"ħ","hybull":"⁃","hyphen":"‐","iacut":"í","iacute":"í","ic":"⁣","icir":"î","icirc":"î","icy":"и","iecy":"е","iexc":"¡","iexcl":"¡","iff":"⇔","ifr":"𝔦","igrav":"ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","ijlig":"ĳ","imacr":"ī","image":"ℑ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","imof":"⊷","imped":"Ƶ","in":"∈","incare":"℅","infin":"∞","infintie":"⧝","inodot":"ı","int":"∫","intcal":"⊺","integers":"ℤ","intercal":"⊺","intlarhk":"⨗","intprod":"⨼","iocy":"ё","iogon":"į","iopf":"𝕚","iota":"ι","iprod":"⨼","iques":"¿","iquest":"¿","iscr":"𝒾","isin":"∈","isinE":"⋹","isindot":"⋵","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","itilde":"ĩ","iukcy":"і","ium":"ï","iuml":"ï","jcirc":"ĵ","jcy":"й","jfr":"𝔧","jmath":"ȷ","jopf":"𝕛","jscr":"𝒿","jsercy":"ј","jukcy":"є","kappa":"κ","kappav":"ϰ","kcedil":"ķ","kcy":"к","kfr":"𝔨","kgreen":"ĸ","khcy":"х","kjcy":"ќ","kopf":"𝕜","kscr":"𝓀","lAarr":"⇚","lArr":"⇐","lAtail":"⤛","lBarr":"⤎","lE":"≦","lEg":"⪋","lHar":"⥢","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","lambda":"λ","lang":"⟨","langd":"⦑","langle":"⟨","lap":"⪅","laqu":"«","laquo":"«","larr":"←","larrb":"⇤","larrbfs":"⤟","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","lat":"⪫","latail":"⤙","late":"⪭","lates":"⪭︀","lbarr":"⤌","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","lcaron":"ľ","lcedil":"ļ","lceil":"⌈","lcub":"{","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","leftarrow":"←","leftarrowtail":"↢","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","leftthreetimes":"⋋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","les":"⩽","lescc":"⪨","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","lessgtr":"≶","lesssim":"≲","lfisht":"⥼","lfloor":"⌊","lfr":"𝔩","lg":"≶","lgE":"⪑","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","ljcy":"љ","ll":"≪","llarr":"⇇","llcorner":"⌞","llhard":"⥫","lltri":"◺","lmidot":"ŀ","lmoust":"⎰","lmoustache":"⎰","lnE":"≨","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","longleftrightarrow":"⟷","longmapsto":"⟼","longrightarrow":"⟶","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","lstrok":"ł","l":"<","lt":"<","ltcc":"⪦","ltcir":"⩹","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltrPar":"⦖","ltri":"◃","ltrie":"⊴","ltrif":"◂","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","mDDot":"∺","mac":"¯","macr":"¯","male":"♂","malt":"✠","maltese":"✠","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","mcy":"м","mdash":"—","measuredangle":"∡","mfr":"𝔪","mho":"℧","micr":"µ","micro":"µ","mid":"∣","midast":"*","midcir":"⫰","middo":"·","middot":"·","minus":"−","minusb":"⊟","minusd":"∸","minusdu":"⨪","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","mopf":"𝕞","mp":"∓","mscr":"𝓂","mstpos":"∾","mu":"μ","multimap":"⊸","mumap":"⊸","nGg":"⋙̸","nGt":"≫⃒","nGtv":"≫̸","nLeftarrow":"⇍","nLeftrightarrow":"⇎","nLl":"⋘̸","nLt":"≪⃒","nLtv":"≪̸","nRightarrow":"⇏","nVDash":"⊯","nVdash":"⊮","nabla":"∇","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natur":"♮","natural":"♮","naturals":"ℕ","nbs":" ","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","ncaron":"ň","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","ncy":"н","ndash":"–","ne":"≠","neArr":"⇗","nearhk":"⤤","nearr":"↗","nearrow":"↗","nedot":"≐̸","nequiv":"≢","nesear":"⤨","nesim":"≂̸","nexist":"∄","nexists":"∄","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","ngsim":"≵","ngt":"≯","ngtr":"≯","nhArr":"⇎","nharr":"↮","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","njcy":"њ","nlArr":"⇍","nlE":"≦̸","nlarr":"↚","nldr":"‥","nle":"≰","nleftarrow":"↚","nleftrightarrow":"↮","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nlsim":"≴","nlt":"≮","nltri":"⋪","nltrie":"⋬","nmid":"∤","nopf":"𝕟","no":"¬","not":"¬","notin":"∉","notinE":"⋹̸","notindot":"⋵̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","npar":"∦","nparallel":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","npre":"⪯̸","nprec":"⊀","npreceq":"⪯̸","nrArr":"⇏","nrarr":"↛","nrarrc":"⤳̸","nrarrw":"↝̸","nrightarrow":"↛","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","ntild":"ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","nu":"ν","num":"#","numero":"№","numsp":" ","nvDash":"⊭","nvHarr":"⤄","nvap":"≍⃒","nvdash":"⊬","nvge":"≥⃒","nvgt":">⃒","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwArr":"⇖","nwarhk":"⤣","nwarr":"↖","nwarrow":"↖","nwnear":"⤧","oS":"Ⓢ","oacut":"ó","oacute":"ó","oast":"⊛","ocir":"ô","ocirc":"ô","ocy":"о","odash":"⊝","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","oelig":"œ","ofcir":"⦿","ofr":"𝔬","ogon":"˛","ograv":"ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","omacr":"ō","omega":"ω","omicron":"ο","omid":"⦶","ominus":"⊖","oopf":"𝕠","opar":"⦷","operp":"⦹","oplus":"⊕","or":"∨","orarr":"↻","ord":"º","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oscr":"ℴ","oslas":"ø","oslash":"ø","osol":"⊘","otild":"õ","otilde":"õ","otimes":"⊗","otimesas":"⨶","oum":"ö","ouml":"ö","ovbar":"⌽","par":"¶","para":"¶","parallel":"∥","parsim":"⫳","parsl":"⫽","part":"∂","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","pfr":"𝔭","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plus":"+","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plusdo":"∔","plusdu":"⨥","pluse":"⩲","plusm":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","pointint":"⨕","popf":"𝕡","poun":"£","pound":"£","pr":"≺","prE":"⪳","prap":"⪷","prcue":"≼","pre":"⪯","prec":"≺","precapprox":"⪷","preccurlyeq":"≼","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","precsim":"≾","prime":"′","primes":"ℙ","prnE":"⪵","prnap":"⪹","prnsim":"⋨","prod":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","propto":"∝","prsim":"≾","prurel":"⊰","pscr":"𝓅","psi":"ψ","puncsp":" ","qfr":"𝔮","qint":"⨌","qopf":"𝕢","qprime":"⁗","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quo":"\"","quot":"\"","rAarr":"⇛","rArr":"⇒","rAtail":"⤜","rBarr":"⤏","rHar":"⥤","race":"∽̱","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","rangd":"⦒","range":"⦥","rangle":"⟩","raqu":"»","raquo":"»","rarr":"→","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","rarrtl":"↣","rarrw":"↝","ratail":"⤚","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","rcaron":"ř","rcedil":"ŗ","rceil":"⌉","rcub":"}","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","rect":"▭","re":"®","reg":"®","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","rhard":"⇁","rharu":"⇀","rharul":"⥬","rho":"ρ","rhov":"ϱ","rightarrow":"→","rightarrowtail":"↣","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","rightthreetimes":"⋌","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoust":"⎱","rmoustache":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","roplus":"⨮","rotimes":"⨵","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","rsaquo":"›","rscr":"𝓇","rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","ruluhar":"⥨","rx":"℞","sacute":"ś","sbquo":"‚","sc":"≻","scE":"⪴","scap":"⪸","scaron":"š","sccue":"≽","sce":"⪰","scedil":"ş","scirc":"ŝ","scnE":"⪶","scnap":"⪺","scnsim":"⋩","scpolint":"⨓","scsim":"≿","scy":"с","sdot":"⋅","sdotb":"⊡","sdote":"⩦","seArr":"⇘","searhk":"⤥","searr":"↘","searrow":"↘","sec":"§","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","sfr":"𝔰","sfrown":"⌢","sharp":"♯","shchcy":"щ","shcy":"ш","shortmid":"∣","shortparallel":"∥","sh":"­","shy":"­","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","softcy":"ь","sol":"/","solb":"⧄","solbar":"⌿","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","squ":"□","square":"□","squarf":"▪","squf":"▪","srarr":"→","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","subE":"⫅","subdot":"⪽","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","subseteq":"⊆","subseteqq":"⫅","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succ":"≻","succapprox":"⪸","succcurlyeq":"≽","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","sum":"∑","sung":"♪","sup":"⊃","sup1":"¹","sup2":"²","sup3":"³","supE":"⫆","supdot":"⪾","supdsub":"⫘","supe":"⊇","supedot":"⫄","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swArr":"⇙","swarhk":"⤦","swarr":"↙","swarrow":"↙","swnwar":"⤪","szli":"ß","szlig":"ß","target":"⌖","tau":"τ","tbrk":"⎴","tcaron":"ť","tcedil":"ţ","tcy":"т","tdot":"⃛","telrec":"⌕","tfr":"𝔱","there4":"∴","therefore":"∴","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","thinsp":" ","thkap":"≈","thksim":"∼","thor":"þ","thorn":"þ","tilde":"˜","time":"×","times":"×","timesb":"⊠","timesbar":"⨱","timesd":"⨰","tint":"∭","toea":"⤨","top":"⊤","topbot":"⌶","topcir":"⫱","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","tscr":"𝓉","tscy":"ц","tshcy":"ћ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","uArr":"⇑","uHar":"⥣","uacut":"ú","uacute":"ú","uarr":"↑","ubrcy":"ў","ubreve":"ŭ","ucir":"û","ucirc":"û","ucy":"у","udarr":"⇅","udblac":"ű","udhar":"⥮","ufisht":"⥾","ufr":"𝔲","ugrav":"ù","ugrave":"ù","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","umacr":"ū","um":"¨","uml":"¨","uogon":"ų","uopf":"𝕦","uparrow":"↑","updownarrow":"↕","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","upsi":"υ","upsih":"ϒ","upsilon":"υ","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","uring":"ů","urtri":"◹","uscr":"𝓊","utdot":"⋰","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","uum":"ü","uuml":"ü","uwangle":"⦧","vArr":"⇕","vBar":"⫨","vBarv":"⫩","vDash":"⊨","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vcy":"в","vdash":"⊢","vee":"∨","veebar":"⊻","veeeq":"≚","vellip":"⋮","verbar":"|","vert":"|","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","vopf":"𝕧","vprop":"∝","vrtri":"⊳","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","vzigzag":"⦚","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","wedgeq":"≙","weierp":"℘","wfr":"𝔴","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","xfr":"𝔵","xhArr":"⟺","xharr":"⟷","xi":"ξ","xlArr":"⟸","xlarr":"⟵","xmap":"⟼","xnis":"⋻","xodot":"⨀","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrArr":"⟹","xrarr":"⟶","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","yacut":"ý","yacute":"ý","yacy":"я","ycirc":"ŷ","ycy":"ы","ye":"¥","yen":"¥","yfr":"𝔶","yicy":"ї","yopf":"𝕪","yscr":"𝓎","yucy":"ю","yum":"ÿ","yuml":"ÿ","zacute":"ź","zcaron":"ž","zcy":"з","zdot":"ż","zeetrf":"ℨ","zeta":"ζ","zfr":"𝔷","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","zscr":"𝓏","zwj":"‍","zwnj":"‌"}

/***/ }),
/* 408 */
/***/ (function(module, exports) {

	module.exports = {"0":"�","128":"€","130":"‚","131":"ƒ","132":"„","133":"…","134":"†","135":"‡","136":"ˆ","137":"‰","138":"Š","139":"‹","140":"Œ","142":"Ž","145":"‘","146":"’","147":"“","148":"”","149":"•","150":"–","151":"—","152":"˜","153":"™","154":"š","155":"›","156":"œ","158":"ž","159":"Ÿ"}

/***/ }),
/* 409 */
/***/ (function(module, exports) {

	module.exports = ["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","legend","li","link","main","menu","menuitem","meta","nav","noframes","ol","optgroup","option","p","param","pre","section","source","title","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"]

/***/ }),
/* 410 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = escapes;
	
	var defaults = [
	  '\\',
	  '`',
	  '*',
	  '{',
	  '}',
	  '[',
	  ']',
	  '(',
	  ')',
	  '#',
	  '+',
	  '-',
	  '.',
	  '!',
	  '_',
	  '>'
	];
	
	var gfm = defaults.concat(['~', '|']);
	
	var commonmark = gfm.concat([
	  '\n',
	  '"',
	  '$',
	  '%',
	  '&',
	  '\'',
	  ',',
	  '/',
	  ':',
	  ';',
	  '<',
	  '=',
	  '?',
	  '@',
	  '^'
	]);
	
	escapes.default = defaults;
	escapes.gfm = gfm;
	escapes.commonmark = commonmark;
	
	/* Get markdown escapes. */
	function escapes(options) {
	  var settings = options || {};
	
	  if (settings.commonmark) {
	    return commonmark;
	  }
	
	  return settings.gfm ? gfm : defaults;
	}


/***/ }),
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */
/***/ (function(module, exports) {

	module.exports = "module.exports = \"* Be pretty\\n* Be sufficient contrast\\n\""

/***/ }),
/* 418 */
/***/ (function(module, exports) {

	module.exports = "module.exports = \"* Be ugly\\n* By low contrast\\n\""

/***/ }),
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var xtend = __webpack_require__(28);
	
	function astToReact(node, options) {
	  var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	
	  if (node.type === 'text') {
	    return node.value;
	  }
	
	  var renderer = options.renderers[node.type];
	  if (typeof renderer !== 'function' && typeof renderer !== 'string') {
	    throw new Error('Renderer for type `' + node.type + '` not defined or is not renderable');
	  }
	
	  var pos = node.position.start;
	  var key = [node.type, pos.line, pos.column].join('-');
	  var nodeProps = getNodeProps(node, key, options, renderer, parent, index);
	
	  return React.createElement(renderer, nodeProps, nodeProps.children || resolveChildren() || undefined);
	
	  function resolveChildren() {
	    return node.children && node.children.map(function (childNode, i) {
	      return astToReact(childNode, options, { node: node, props: nodeProps }, i);
	    });
	  }
	}
	
	// eslint-disable-next-line max-params, complexity
	function getNodeProps(node, key, opts, renderer, parent, index) {
	  var props = { key: key
	
	    // `sourcePos` is true if the user wants source information (line/column info from markdown source)
	  };if (opts.sourcePos && node.position) {
	    props['data-sourcepos'] = flattenPosition(node.position);
	  }
	
	  var ref = node.identifier ? opts.definitions[node.identifier] || {} : null;
	
	  switch (node.type) {
	    case 'root':
	      assignDefined(props, { className: opts.className });
	      break;
	    case 'heading':
	      props.level = node.depth;
	      break;
	    case 'list':
	      props.start = node.start;
	      props.ordered = node.ordered;
	      props.tight = !node.loose;
	      break;
	    case 'listItem':
	      props.checked = node.checked;
	      props.tight = !node.loose;
	      props.children = (props.tight ? unwrapParagraphs(node) : node.children).map(function (childNode, i) {
	        return astToReact(childNode, opts, { node: node, props: props }, i);
	      });
	      break;
	    case 'definition':
	      assignDefined(props, { identifier: node.identifier, title: node.title, url: node.url });
	      break;
	    case 'code':
	      assignDefined(props, { language: node.lang });
	      break;
	    case 'inlineCode':
	      props.children = node.value;
	      props.inline = true;
	      break;
	    case 'link':
	      assignDefined(props, {
	        title: node.title || undefined,
	        href: opts.transformLinkUri ? opts.transformLinkUri(node.url, node.children, node.title) : node.url
	      });
	      break;
	    case 'image':
	      assignDefined(props, {
	        alt: node.alt || undefined,
	        title: node.title || undefined,
	        src: opts.transformImageUri ? opts.transformImageUri(node.url, node.children, node.title, node.alt) : node.url
	      });
	      break;
	    case 'linkReference':
	      assignDefined(props, xtend(ref, {
	        href: opts.transformLinkUri ? opts.transformLinkUri(ref.href) : ref.href
	      }));
	      break;
	    case 'imageReference':
	      assignDefined(props, {
	        src: ref.href,
	        title: ref.title || undefined,
	        alt: node.alt || undefined
	      });
	      break;
	    case 'table':
	    case 'tableHead':
	    case 'tableBody':
	      props.columnAlignment = node.align;
	      break;
	    case 'tableRow':
	      props.isHeader = parent.node.type === 'tableHead';
	      props.columnAlignment = parent.props.columnAlignment;
	      break;
	    case 'tableCell':
	      assignDefined(props, {
	        isHeader: parent.props.isHeader,
	        align: parent.props.columnAlignment[index]
	      });
	      break;
	    case 'virtualHtml':
	      props.tag = node.tag;
	      break;
	    case 'html':
	      // @todo find a better way than this
	      props.isBlock = node.position.start.line !== node.position.end.line;
	      props.escapeHtml = opts.escapeHtml;
	      props.skipHtml = opts.skipHtml;
	      break;
	    default:
	  }
	
	  if (typeof renderer !== 'string' && node.value) {
	    props.value = node.value;
	  }
	
	  return props;
	}
	
	function assignDefined(target, attrs) {
	  for (var key in attrs) {
	    if (typeof attrs[key] !== 'undefined') {
	      target[key] = attrs[key];
	    }
	  }
	}
	
	function flattenPosition(pos) {
	  return [pos.start.line, ':', pos.start.column, '-', pos.end.line, ':', pos.end.column].map(String).join('');
	}
	
	function unwrapParagraphs(node) {
	  return node.children.reduce(function (array, child) {
	    return array.concat(child.type === 'paragraph' ? child.children || [] : [child]);
	  }, []);
	}
	
	module.exports = astToReact;

/***/ }),
/* 485 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function getDefinitions(node) {
	  var defs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  return (node.children || []).reduce(function (definitions, child) {
	    if (child.type === 'definition') {
	      definitions[child.identifier] = {
	        href: child.url,
	        title: child.title
	      };
	    }
	
	    return getDefinitions(child, definitions);
	  }, defs);
	};

/***/ }),
/* 486 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var visit = __webpack_require__(81);
	
	exports.ofType = function (types, mode) {
	  return function (node) {
	    types.forEach(function (type) {
	      return visit(node, type, disallow, true);
	    });
	    return node;
	  };
	
	  function disallow(node, index, parent) {
	    if (parent) {
	      untangle(node, index, parent, mode);
	    }
	  }
	};
	
	exports.ifNotMatch = function (allowNode, mode) {
	  return function (node) {
	    visit(node, disallow, true);
	    return node;
	  };
	
	  function disallow(node, index, parent) {
	    if (parent && !allowNode(node, index, parent)) {
	      untangle(node, index, parent, mode);
	    }
	  }
	};
	
	function untangle(node, index, parent, mode) {
	  if (mode === 'remove') {
	    parent.children.splice(index, 1);
	  } else if (mode === 'unwrap') {
	    var args = [index, 1].concat(node.children);
	    Array.prototype.splice.apply(parent.children, args);
	  }
	}

/***/ }),
/* 487 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Naive, simple plugin to match inline nodes without attributes
	 * This allows say <strong>foo</strong>, but not <strong class="very">foo</strong>
	 * For proper HTML support, you'll want a different plugin
	 **/
	var visit = __webpack_require__(81);
	
	var type = 'virtualHtml';
	var selfClosingRe = /^<(area|base|br|col|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)\s*\/?>$/i;
	var simpleTagRe = /^<(\/?)([a-z]+)\s*>$/;
	
	module.exports = function (tree) {
	  var open = void 0;
	  var currentParent = void 0;
	  visit(tree, 'html', function (node, index, parent) {
	    if (currentParent !== parent) {
	      open = [];
	      currentParent = parent;
	    }
	
	    var selfClosing = getSelfClosing(node);
	    if (selfClosing) {
	      parent.children.splice(index, 1, {
	        type: type,
	        tag: selfClosing,
	        position: node.position
	      });
	      return true;
	    }
	
	    var current = getSimpleTag(node, parent);
	    if (!current) {
	      return true;
	    }
	
	    var matching = findAndPull(open, current.tag);
	
	    if (matching) {
	      parent.children.splice(index, 0, virtual(current, matching, parent));
	    } else if (!current.opening) {
	      open.push(current);
	    }
	
	    return true;
	  }, true // Iterate in reverse
	  );
	
	  return tree;
	};
	
	function findAndPull(open, matchingTag) {
	  var i = open.length;
	  while (i--) {
	    if (open[i].tag === matchingTag) {
	      return open.splice(i, 1)[0];
	    }
	  }
	
	  return false;
	}
	
	function getSimpleTag(node, parent) {
	  var match = node.value.match(simpleTagRe);
	  return match ? { tag: match[2], opening: !match[1], node: node } : false;
	}
	
	function getSelfClosing(node) {
	  var match = node.value.match(selfClosingRe);
	  return match ? match[1] : false;
	}
	
	function virtual(fromNode, toNode, parent) {
	  var fromIndex = parent.children.indexOf(fromNode.node);
	  var toIndex = parent.children.indexOf(toNode.node);
	
	  var extracted = parent.children.splice(fromIndex, toIndex - fromIndex + 1);
	  var children = extracted.slice(1, -1);
	  return {
	    type: type,
	    children: children,
	    tag: fromNode.tag,
	    position: {
	      start: fromNode.node.position.start,
	      end: toNode.node.position.end,
	      indent: []
	    }
	  };
	}

/***/ }),
/* 488 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var xtend = __webpack_require__(28);
	var unified = __webpack_require__(575);
	var parse = __webpack_require__(521);
	var PropTypes = __webpack_require__(6);
	var naiveHtml = __webpack_require__(487);
	var disallowNode = __webpack_require__(486);
	var astToReact = __webpack_require__(484);
	var wrapTableRows = __webpack_require__(491);
	var getDefinitions = __webpack_require__(485);
	var uriTransformer = __webpack_require__(490);
	var defaultRenderers = __webpack_require__(489);
	
	var allTypes = Object.keys(defaultRenderers);
	
	var ReactMarkdown = function ReactMarkdown(props) {
	  var src = props.source || props.children || '';
	
	  if (props.allowedTypes && props.disallowedTypes) {
	    throw new Error('Only one of `allowedTypes` and `disallowedTypes` should be defined');
	  }
	
	  var renderers = xtend(defaultRenderers, props.renderers);
	
	  var plugins = [parse].concat(props.plugins || []);
	  var parser = plugins.reduce(applyParserPlugin, unified());
	
	  var rawAst = parser.parse(src);
	  var renderProps = xtend(props, {
	    renderers: renderers,
	    definitions: getDefinitions(rawAst)
	  });
	
	  var astPlugins = determineAstPlugins(props);
	  var ast = astPlugins.reduce(function (node, plugin) {
	    return plugin(node, renderProps);
	  }, rawAst);
	
	  return astToReact(ast, renderProps);
	};
	
	function applyParserPlugin(parser, plugin) {
	  return Array.isArray(plugin) ? parser.use(plugin[0], plugin[1]) : parser.use(plugin);
	}
	
	function determineAstPlugins(props) {
	  var plugins = [wrapTableRows];
	
	  var disallowedTypes = props.disallowedTypes;
	  if (props.allowedTypes) {
	    disallowedTypes = allTypes.filter(function (type) {
	      return type !== 'root' && props.allowedTypes.indexOf(type) === -1;
	    });
	  }
	
	  var removalMethod = props.unwrapDisallowed ? 'unwrap' : 'remove';
	  if (disallowedTypes && disallowedTypes.length > 0) {
	    plugins.push(disallowNode.ofType(disallowedTypes, removalMethod));
	  }
	
	  if (props.allowNode) {
	    plugins.push(disallowNode.ifNotMatch(props.allowNode, removalMethod));
	  }
	
	  var renderHtml = !props.escapeHtml && !props.skipHtml;
	  if (renderHtml) {
	    plugins.push(naiveHtml);
	  }
	
	  return props.astPlugins ? plugins.concat(props.astPlugins) : plugins;
	}
	
	ReactMarkdown.defaultProps = {
	  renderers: {},
	  escapeHtml: true,
	  skipHtml: false,
	  transformLinkUri: uriTransformer
	};
	
	ReactMarkdown.propTypes = {
	  className: PropTypes.string,
	  source: PropTypes.string,
	  children: PropTypes.string,
	  sourcePos: PropTypes.bool,
	  escapeHtml: PropTypes.bool,
	  skipHtml: PropTypes.bool,
	  allowNode: PropTypes.func,
	  allowedTypes: PropTypes.arrayOf(PropTypes.oneOf(allTypes)),
	  disallowedTypes: PropTypes.arrayOf(PropTypes.oneOf(allTypes)),
	  transformLinkUri: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
	  transformImageUri: PropTypes.func,
	  astPlugins: PropTypes.arrayOf(PropTypes.func),
	  unwrapDisallowed: PropTypes.bool,
	  renderers: PropTypes.object
	};
	
	ReactMarkdown.types = allTypes;
	ReactMarkdown.renderers = defaultRenderers;
	ReactMarkdown.uriTransformer = uriTransformer;
	
	module.exports = ReactMarkdown;

/***/ }),
/* 489 */
/***/ (function(module, exports, __webpack_require__) {

	/* eslint-disable react/prop-types, react/no-multi-comp */
	'use strict';
	
	var xtend = __webpack_require__(28);
	var React = __webpack_require__(1);
	var createElement = React.createElement;
	
	module.exports = {
	  root: 'div',
	  break: 'br',
	  paragraph: 'p',
	  emphasis: 'em',
	  strong: 'strong',
	  thematicBreak: 'hr',
	  blockquote: 'blockquote',
	  delete: 'del',
	  link: 'a',
	  image: 'img',
	  linkReference: 'a',
	  imageReference: 'img',
	  table: SimpleRenderer.bind(null, 'table'),
	  tableHead: SimpleRenderer.bind(null, 'thead'),
	  tableBody: SimpleRenderer.bind(null, 'tbody'),
	  tableRow: SimpleRenderer.bind(null, 'tr'),
	  tableCell: TableCell,
	
	  list: List,
	  listItem: ListItem,
	  definition: NullRenderer,
	  heading: Heading,
	  inlineCode: InlineCode,
	  code: CodeBlock,
	  html: Html,
	  virtualHtml: VirtualHtml
	};
	
	function SimpleRenderer(tag, props) {
	  return createElement(tag, getCoreProps(props), props.children);
	}
	
	function TableCell(props) {
	  var style = props.align ? { textAlign: props.align } : undefined;
	  var coreProps = getCoreProps(props);
	  return createElement(props.isHeader ? 'th' : 'td', style ? xtend({ style: style }, coreProps) : coreProps, props.children);
	}
	
	function Heading(props) {
	  return createElement('h' + props.level, getCoreProps(props), props.children);
	}
	
	function List(props) {
	  var attrs = getCoreProps(props);
	  if (props.start !== null && props.start !== 1) {
	    attrs.start = props.start.toString();
	  }
	
	  return createElement(props.ordered ? 'ol' : 'ul', attrs, props.children);
	}
	
	function ListItem(props) {
	  var checkbox = null;
	  if (props.checked !== null) {
	    var checked = props.checked;
	    checkbox = createElement('input', { type: 'checkbox', checked: checked, readOnly: true });
	  }
	
	  return createElement('li', getCoreProps(props), checkbox, props.children);
	}
	
	function CodeBlock(props) {
	  var className = props.language && 'language-' + props.language;
	  var code = createElement('code', className ? { className: className } : null, props.value);
	  return createElement('pre', getCoreProps(props), code);
	}
	
	function InlineCode(props) {
	  return createElement('code', getCoreProps(props), props.children);
	}
	
	function Html(props) {
	  if (props.skipHtml) {
	    return null;
	  }
	
	  var tag = props.isBlock ? 'div' : 'span';
	  if (props.escapeHtml) {
	    // @todo when fiber lands, we can simply render props.value
	    return createElement(tag, null, props.value);
	  }
	
	  var nodeProps = { dangerouslySetInnerHTML: { __html: props.value } };
	  return createElement(tag, nodeProps);
	}
	
	function VirtualHtml(props) {
	  return createElement(props.tag, getCoreProps(props), props.children);
	}
	
	function NullRenderer() {
	  return null;
	}
	
	function getCoreProps(props) {
	  return props['data-sourcepos'] ? { 'data-sourcepos': props['data-sourcepos'] } : {};
	}

/***/ }),
/* 490 */
/***/ (function(module, exports) {

	'use strict';
	
	var protocols = ['http', 'https', 'mailto', 'tel'];
	
	module.exports = function uriTransformer(uri) {
	  var url = (uri || '').trim();
	  var first = url.charAt(0);
	
	  if (first === '#' || first === '/') {
	    return url;
	  }
	
	  var colon = url.indexOf(':');
	  if (colon === -1) {
	    return url;
	  }
	
	  var length = protocols.length;
	  var index = -1;
	
	  while (++index < length) {
	    var protocol = protocols[index];
	
	    if (colon === protocol.length && url.slice(0, protocol.length) === protocol) {
	      return url;
	    }
	  }
	
	  index = url.indexOf('?');
	  if (index !== -1 && colon > index) {
	    return url;
	  }
	
	  index = url.indexOf('#');
	  if (index !== -1 && colon > index) {
	    return url;
	  }
	
	  // eslint-disable-next-line no-script-url
	  return 'javascript:void(0)';
	};

/***/ }),
/* 491 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var visit = __webpack_require__(81);
	
	module.exports = function (node) {
	  visit(node, 'table', wrap);
	  return node;
	};
	
	function wrap(table) {
	  var children = table.children;
	  table.children = [{
	    type: 'tableHead',
	    align: table.align,
	    children: [children[0]],
	    position: children[0].position
	  }, {
	    type: 'tableBody',
	    align: table.align,
	    children: children.slice(1),
	    position: {
	      start: children[1].position.start,
	      end: children[children.length - 1].position.end
	    }
	  }];
	}

/***/ }),
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var unherit = __webpack_require__(574);
	var xtend = __webpack_require__(28);
	var Parser = __webpack_require__(531);
	
	module.exports = parse;
	parse.Parser = Parser;
	
	function parse(options) {
	  var Local = unherit(Parser);
	  Local.prototype.options = xtend(Local.prototype.options, this.data('settings'), options);
	  this.Parser = Local;
	}


/***/ }),
/* 522 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var entities = __webpack_require__(116);
	
	module.exports = factory;
	
	/* Factory to create an entity decoder. */
	function factory(ctx) {
	  decoder.raw = decodeRaw;
	
	  return decoder;
	
	  /* Normalize `position` to add an `indent`. */
	  function normalize(position) {
	    var offsets = ctx.offset;
	    var line = position.line;
	    var result = [];
	
	    while (++line) {
	      if (!(line in offsets)) {
	        break;
	      }
	
	      result.push((offsets[line] || 0) + 1);
	    }
	
	    return {
	      start: position,
	      indent: result
	    };
	  }
	
	  /* Handle a warning.
	   * See https://github.com/wooorm/parse-entities
	   * for the warnings. */
	  function handleWarning(reason, position, code) {
	    if (code === 3) {
	      return;
	    }
	
	    ctx.file.message(reason, position);
	  }
	
	  /* Decode `value` (at `position`) into text-nodes. */
	  function decoder(value, position, handler) {
	    entities(value, {
	      position: normalize(position),
	      warning: handleWarning,
	      text: handler,
	      reference: handler,
	      textContext: ctx,
	      referenceContext: ctx
	    });
	  }
	
	  /* Decode `value` (at `position`) into a string. */
	  function decodeRaw(value, position) {
	    return entities(value, {
	      position: normalize(position),
	      warning: handleWarning
	    });
	  }
	}


/***/ }),
/* 523 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = locate;
	
	function locate(value, fromIndex) {
	  var index = value.indexOf('\n', fromIndex);
	
	  while (index > fromIndex) {
	    if (value.charAt(index - 1) !== ' ') {
	      break;
	    }
	
	    index--;
	  }
	
	  return index;
	}


/***/ }),
/* 524 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = locate;
	
	function locate(value, fromIndex) {
	  return value.indexOf('`', fromIndex);
	}


/***/ }),
/* 525 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = locate;
	
	function locate(value, fromIndex) {
	  return value.indexOf('~~', fromIndex);
	}


/***/ }),
/* 526 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = locate;
	
	function locate(value, fromIndex) {
	  var asterisk = value.indexOf('*', fromIndex);
	  var underscore = value.indexOf('_', fromIndex);
	
	  if (underscore === -1) {
	    return asterisk;
	  }
	
	  if (asterisk === -1) {
	    return underscore;
	  }
	
	  return underscore < asterisk ? underscore : asterisk;
	}


/***/ }),
/* 527 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = locate;
	
	function locate(value, fromIndex) {
	  return value.indexOf('\\', fromIndex);
	}


/***/ }),
/* 528 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = locate;
	
	function locate(value, fromIndex) {
	  var asterisk = value.indexOf('**', fromIndex);
	  var underscore = value.indexOf('__', fromIndex);
	
	  if (underscore === -1) {
	    return asterisk;
	  }
	
	  if (asterisk === -1) {
	    return underscore;
	  }
	
	  return underscore < asterisk ? underscore : asterisk;
	}


/***/ }),
/* 529 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = locate;
	
	var PROTOCOLS = ['https://', 'http://', 'mailto:'];
	
	function locate(value, fromIndex) {
	  var length = PROTOCOLS.length;
	  var index = -1;
	  var min = -1;
	  var position;
	
	  if (!this.options.gfm) {
	    return -1;
	  }
	
	  while (++index < length) {
	    position = value.indexOf(PROTOCOLS[index], fromIndex);
	
	    if (position !== -1 && (position < min || min === -1)) {
	      min = position;
	    }
	  }
	
	  return min;
	}


/***/ }),
/* 530 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var xtend = __webpack_require__(28);
	var removePosition = __webpack_require__(577);
	
	module.exports = parse;
	
	var C_NEWLINE = '\n';
	var EXPRESSION_LINE_BREAKS = /\r\n|\r/g;
	
	/* Parse the bound file. */
	function parse() {
	  var self = this;
	  var value = String(self.file);
	  var start = {line: 1, column: 1, offset: 0};
	  var content = xtend(start);
	  var node;
	
	  /* Clean non-unix newlines: `\r\n` and `\r` are all
	   * changed to `\n`.  This should not affect positional
	   * information. */
	  value = value.replace(EXPRESSION_LINE_BREAKS, C_NEWLINE);
	
	  if (value.charCodeAt(0) === 0xFEFF) {
	    value = value.slice(1);
	
	    content.column++;
	    content.offset++;
	  }
	
	  node = {
	    type: 'root',
	    children: self.tokenizeBlock(value, content),
	    position: {
	      start: start,
	      end: self.eof || xtend(start)
	    }
	  };
	
	  if (!self.options.position) {
	    removePosition(node, true);
	  }
	
	  return node;
	}


/***/ }),
/* 531 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var xtend = __webpack_require__(28);
	var toggle = __webpack_require__(566);
	var vfileLocation = __webpack_require__(580);
	var unescape = __webpack_require__(559);
	var decode = __webpack_require__(522);
	var tokenizer = __webpack_require__(558);
	
	module.exports = Parser;
	
	function Parser(doc, file) {
	  this.file = file;
	  this.offset = {};
	  this.options = xtend(this.options);
	  this.setOptions({});
	
	  this.inList = false;
	  this.inBlock = false;
	  this.inLink = false;
	  this.atStart = true;
	
	  this.toOffset = vfileLocation(file).toOffset;
	  this.unescape = unescape(this, 'escape');
	  this.decode = decode(this);
	}
	
	var proto = Parser.prototype;
	
	/* Expose core. */
	proto.setOptions = __webpack_require__(532);
	proto.parse = __webpack_require__(530);
	
	/* Expose `defaults`. */
	proto.options = __webpack_require__(212);
	
	/* Enter and exit helpers. */
	proto.exitStart = toggle('atStart', true);
	proto.enterList = toggle('inList', false);
	proto.enterLink = toggle('inLink', false);
	proto.enterBlock = toggle('inBlock', false);
	
	/* Nodes that can interupt a paragraph:
	 *
	 * ```markdown
	 * A paragraph, followed by a thematic break.
	 * ___
	 * ```
	 *
	 * In the above example, the thematic break “interupts”
	 * the paragraph. */
	proto.interruptParagraph = [
	  ['thematicBreak'],
	  ['atxHeading'],
	  ['fencedCode'],
	  ['blockquote'],
	  ['html'],
	  ['setextHeading', {commonmark: false}],
	  ['definition', {commonmark: false}],
	  ['footnote', {commonmark: false}]
	];
	
	/* Nodes that can interupt a list:
	 *
	 * ```markdown
	 * - One
	 * ___
	 * ```
	 *
	 * In the above example, the thematic break “interupts”
	 * the list. */
	proto.interruptList = [
	  ['fencedCode', {pedantic: false}],
	  ['thematicBreak', {pedantic: false}],
	  ['definition', {commonmark: false}],
	  ['footnote', {commonmark: false}]
	];
	
	/* Nodes that can interupt a blockquote:
	 *
	 * ```markdown
	 * > A paragraph.
	 * ___
	 * ```
	 *
	 * In the above example, the thematic break “interupts”
	 * the blockquote. */
	proto.interruptBlockquote = [
	  ['indentedCode', {commonmark: true}],
	  ['fencedCode', {commonmark: true}],
	  ['atxHeading', {commonmark: true}],
	  ['setextHeading', {commonmark: true}],
	  ['thematicBreak', {commonmark: true}],
	  ['html', {commonmark: true}],
	  ['list', {commonmark: true}],
	  ['definition', {commonmark: false}],
	  ['footnote', {commonmark: false}]
	];
	
	/* Handlers. */
	proto.blockTokenizers = {
	  newline: __webpack_require__(550),
	  indentedCode: __webpack_require__(537),
	  fencedCode: __webpack_require__(536),
	  blockquote: __webpack_require__(534),
	  atxHeading: __webpack_require__(544),
	  thematicBreak: __webpack_require__(556),
	  list: __webpack_require__(549),
	  setextHeading: __webpack_require__(545),
	  html: __webpack_require__(546),
	  footnote: __webpack_require__(543),
	  definition: __webpack_require__(539),
	  table: __webpack_require__(554),
	  paragraph: __webpack_require__(551)
	};
	
	proto.inlineTokenizers = {
	  escape: __webpack_require__(542),
	  autoLink: __webpack_require__(533),
	  url: __webpack_require__(557),
	  html: __webpack_require__(547),
	  link: __webpack_require__(548),
	  reference: __webpack_require__(552),
	  strong: __webpack_require__(553),
	  emphasis: __webpack_require__(541),
	  deletion: __webpack_require__(540),
	  code: __webpack_require__(538),
	  break: __webpack_require__(535),
	  text: __webpack_require__(555)
	};
	
	/* Expose precedence. */
	proto.blockMethods = keys(proto.blockTokenizers);
	proto.inlineMethods = keys(proto.inlineTokenizers);
	
	/* Tokenizers. */
	proto.tokenizeBlock = tokenizer('block');
	proto.tokenizeInline = tokenizer('inline');
	proto.tokenizeFactory = tokenizer;
	
	/* Get all keys in `value`. */
	function keys(value) {
	  var result = [];
	  var key;
	
	  for (key in value) {
	    result.push(key);
	  }
	
	  return result;
	}


/***/ }),
/* 532 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var xtend = __webpack_require__(28);
	var escapes = __webpack_require__(410);
	var defaults = __webpack_require__(212);
	
	module.exports = setOptions;
	
	function setOptions(options) {
	  var self = this;
	  var current = self.options;
	  var key;
	  var value;
	
	  if (options == null) {
	    options = {};
	  } else if (typeof options === 'object') {
	    options = xtend(options);
	  } else {
	    throw new Error(
	      'Invalid value `' + options + '` ' +
	      'for setting `options`'
	    );
	  }
	
	  for (key in defaults) {
	    value = options[key];
	
	    if (value == null) {
	      value = current[key];
	    }
	
	    if (
	      (key !== 'blocks' && typeof value !== 'boolean') ||
	      (key === 'blocks' && typeof value !== 'object')
	    ) {
	      throw new Error('Invalid value `' + value + '` for setting `options.' + key + '`');
	    }
	
	    options[key] = value;
	  }
	
	  self.options = options;
	  self.escape = escapes(options);
	
	  return self;
	}


/***/ }),
/* 533 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var whitespace = __webpack_require__(14);
	var decode = __webpack_require__(116);
	var locate = __webpack_require__(214);
	
	module.exports = autoLink;
	autoLink.locator = locate;
	autoLink.notInLink = true;
	
	var C_LT = '<';
	var C_GT = '>';
	var C_AT_SIGN = '@';
	var C_SLASH = '/';
	var MAILTO = 'mailto:';
	var MAILTO_LENGTH = MAILTO.length;
	
	/* Tokenise a link. */
	function autoLink(eat, value, silent) {
	  var self;
	  var subvalue;
	  var length;
	  var index;
	  var queue;
	  var character;
	  var hasAtCharacter;
	  var link;
	  var now;
	  var content;
	  var tokenize;
	  var exit;
	
	  if (value.charAt(0) !== C_LT) {
	    return;
	  }
	
	  self = this;
	  subvalue = '';
	  length = value.length;
	  index = 0;
	  queue = '';
	  hasAtCharacter = false;
	  link = '';
	
	  index++;
	  subvalue = C_LT;
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (
	      whitespace(character) ||
	      character === C_GT ||
	      character === C_AT_SIGN ||
	      (character === ':' && value.charAt(index + 1) === C_SLASH)
	    ) {
	      break;
	    }
	
	    queue += character;
	    index++;
	  }
	
	  if (!queue) {
	    return;
	  }
	
	  link += queue;
	  queue = '';
	
	  character = value.charAt(index);
	  link += character;
	  index++;
	
	  if (character === C_AT_SIGN) {
	    hasAtCharacter = true;
	  } else {
	    if (
	      character !== ':' ||
	      value.charAt(index + 1) !== C_SLASH
	    ) {
	      return;
	    }
	
	    link += C_SLASH;
	    index++;
	  }
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (whitespace(character) || character === C_GT) {
	      break;
	    }
	
	    queue += character;
	    index++;
	  }
	
	  character = value.charAt(index);
	
	  if (!queue || character !== C_GT) {
	    return;
	  }
	
	  /* istanbul ignore if - never used (yet) */
	  if (silent) {
	    return true;
	  }
	
	  link += queue;
	  content = link;
	  subvalue += link + character;
	  now = eat.now();
	  now.column++;
	  now.offset++;
	
	  if (hasAtCharacter) {
	    if (link.slice(0, MAILTO_LENGTH).toLowerCase() === MAILTO) {
	      content = content.substr(MAILTO_LENGTH);
	      now.column += MAILTO_LENGTH;
	      now.offset += MAILTO_LENGTH;
	    } else {
	      link = MAILTO + link;
	    }
	  }
	
	  /* Temporarily remove support for escapes in autolinks. */
	  tokenize = self.inlineTokenizers.escape;
	  self.inlineTokenizers.escape = null;
	  exit = self.enterLink();
	
	  content = self.tokenizeInline(content, now);
	
	  self.inlineTokenizers.escape = tokenize;
	  exit();
	
	  return eat(subvalue)({
	    type: 'link',
	    title: null,
	    url: decode(link),
	    children: content
	  });
	}


/***/ }),
/* 534 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var trim = __webpack_require__(45);
	var interrupt = __webpack_require__(137);
	
	module.exports = blockquote;
	
	var C_NEWLINE = '\n';
	var C_TAB = '\t';
	var C_SPACE = ' ';
	var C_GT = '>';
	
	/* Tokenise a blockquote. */
	function blockquote(eat, value, silent) {
	  var self = this;
	  var offsets = self.offset;
	  var tokenizers = self.blockTokenizers;
	  var interruptors = self.interruptBlockquote;
	  var now = eat.now();
	  var currentLine = now.line;
	  var length = value.length;
	  var values = [];
	  var contents = [];
	  var indents = [];
	  var add;
	  var index = 0;
	  var character;
	  var rest;
	  var nextIndex;
	  var content;
	  var line;
	  var startIndex;
	  var prefixed;
	  var exit;
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (character !== C_SPACE && character !== C_TAB) {
	      break;
	    }
	
	    index++;
	  }
	
	  if (value.charAt(index) !== C_GT) {
	    return;
	  }
	
	  if (silent) {
	    return true;
	  }
	
	  index = 0;
	
	  while (index < length) {
	    nextIndex = value.indexOf(C_NEWLINE, index);
	    startIndex = index;
	    prefixed = false;
	
	    if (nextIndex === -1) {
	      nextIndex = length;
	    }
	
	    while (index < length) {
	      character = value.charAt(index);
	
	      if (character !== C_SPACE && character !== C_TAB) {
	        break;
	      }
	
	      index++;
	    }
	
	    if (value.charAt(index) === C_GT) {
	      index++;
	      prefixed = true;
	
	      if (value.charAt(index) === C_SPACE) {
	        index++;
	      }
	    } else {
	      index = startIndex;
	    }
	
	    content = value.slice(index, nextIndex);
	
	    if (!prefixed && !trim(content)) {
	      index = startIndex;
	      break;
	    }
	
	    if (!prefixed) {
	      rest = value.slice(index);
	
	      /* Check if the following code contains a possible
	       * block. */
	      if (interrupt(interruptors, tokenizers, self, [eat, rest, true])) {
	        break;
	      }
	    }
	
	    line = startIndex === index ? content : value.slice(startIndex, nextIndex);
	
	    indents.push(index - startIndex);
	    values.push(line);
	    contents.push(content);
	
	    index = nextIndex + 1;
	  }
	
	  index = -1;
	  length = indents.length;
	  add = eat(values.join(C_NEWLINE));
	
	  while (++index < length) {
	    offsets[currentLine] = (offsets[currentLine] || 0) + indents[index];
	    currentLine++;
	  }
	
	  exit = self.enterBlock();
	  contents = self.tokenizeBlock(contents.join(C_NEWLINE), now);
	  exit();
	
	  return add({
	    type: 'blockquote',
	    children: contents
	  });
	}


/***/ }),
/* 535 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var locate = __webpack_require__(523);
	
	module.exports = hardBreak;
	hardBreak.locator = locate;
	
	var MIN_BREAK_LENGTH = 2;
	
	function hardBreak(eat, value, silent) {
	  var length = value.length;
	  var index = -1;
	  var queue = '';
	  var character;
	
	  while (++index < length) {
	    character = value.charAt(index);
	
	    if (character === '\n') {
	      if (index < MIN_BREAK_LENGTH) {
	        return;
	      }
	
	      /* istanbul ignore if - never used (yet) */
	      if (silent) {
	        return true;
	      }
	
	      queue += character;
	
	      return eat(queue)({type: 'break'});
	    }
	
	    if (character !== ' ') {
	      return;
	    }
	
	    queue += character;
	  }
	}


/***/ }),
/* 536 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var trim = __webpack_require__(143);
	
	module.exports = fencedCode;
	
	var C_NEWLINE = '\n';
	var C_TAB = '\t';
	var C_SPACE = ' ';
	var C_TILDE = '~';
	var C_TICK = '`';
	
	var MIN_FENCE_COUNT = 3;
	var CODE_INDENT_COUNT = 4;
	
	function fencedCode(eat, value, silent) {
	  var self = this;
	  var settings = self.options;
	  var length = value.length + 1;
	  var index = 0;
	  var subvalue = '';
	  var fenceCount;
	  var marker;
	  var character;
	  var flag;
	  var queue;
	  var content;
	  var exdentedContent;
	  var closing;
	  var exdentedClosing;
	  var indent;
	  var now;
	
	  if (!settings.gfm) {
	    return;
	  }
	
	  /* Eat initial spacing. */
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (character !== C_SPACE && character !== C_TAB) {
	      break;
	    }
	
	    subvalue += character;
	    index++;
	  }
	
	  indent = index;
	
	  /* Eat the fence. */
	  character = value.charAt(index);
	
	  if (character !== C_TILDE && character !== C_TICK) {
	    return;
	  }
	
	  index++;
	  marker = character;
	  fenceCount = 1;
	  subvalue += character;
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (character !== marker) {
	      break;
	    }
	
	    subvalue += character;
	    fenceCount++;
	    index++;
	  }
	
	  if (fenceCount < MIN_FENCE_COUNT) {
	    return;
	  }
	
	  /* Eat spacing before flag. */
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (character !== C_SPACE && character !== C_TAB) {
	      break;
	    }
	
	    subvalue += character;
	    index++;
	  }
	
	  /* Eat flag. */
	  flag = '';
	  queue = '';
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (
	      character === C_NEWLINE ||
	      character === C_TILDE ||
	      character === C_TICK
	    ) {
	      break;
	    }
	
	    if (character === C_SPACE || character === C_TAB) {
	      queue += character;
	    } else {
	      flag += queue + character;
	      queue = '';
	    }
	
	    index++;
	  }
	
	  character = value.charAt(index);
	
	  if (character && character !== C_NEWLINE) {
	    return;
	  }
	
	  if (silent) {
	    return true;
	  }
	
	  now = eat.now();
	  now.column += subvalue.length;
	  now.offset += subvalue.length;
	
	  subvalue += flag;
	  flag = self.decode.raw(self.unescape(flag), now);
	
	  if (queue) {
	    subvalue += queue;
	  }
	
	  queue = '';
	  closing = '';
	  exdentedClosing = '';
	  content = '';
	  exdentedContent = '';
	
	  /* Eat content. */
	  while (index < length) {
	    character = value.charAt(index);
	    content += closing;
	    exdentedContent += exdentedClosing;
	    closing = '';
	    exdentedClosing = '';
	
	    if (character !== C_NEWLINE) {
	      content += character;
	      exdentedClosing += character;
	      index++;
	      continue;
	    }
	
	    /* Add the newline to `subvalue` if its the first
	     * character.  Otherwise, add it to the `closing`
	     * queue. */
	    if (content) {
	      closing += character;
	      exdentedClosing += character;
	    } else {
	      subvalue += character;
	    }
	
	    queue = '';
	    index++;
	
	    while (index < length) {
	      character = value.charAt(index);
	
	      if (character !== C_SPACE) {
	        break;
	      }
	
	      queue += character;
	      index++;
	    }
	
	    closing += queue;
	    exdentedClosing += queue.slice(indent);
	
	    if (queue.length >= CODE_INDENT_COUNT) {
	      continue;
	    }
	
	    queue = '';
	
	    while (index < length) {
	      character = value.charAt(index);
	
	      if (character !== marker) {
	        break;
	      }
	
	      queue += character;
	      index++;
	    }
	
	    closing += queue;
	    exdentedClosing += queue;
	
	    if (queue.length < fenceCount) {
	      continue;
	    }
	
	    queue = '';
	
	    while (index < length) {
	      character = value.charAt(index);
	
	      if (character !== C_SPACE && character !== C_TAB) {
	        break;
	      }
	
	      closing += character;
	      exdentedClosing += character;
	      index++;
	    }
	
	    if (!character || character === C_NEWLINE) {
	      break;
	    }
	  }
	
	  subvalue += content + closing;
	
	  return eat(subvalue)({
	    type: 'code',
	    lang: flag || null,
	    value: trim(exdentedContent)
	  });
	}


/***/ }),
/* 537 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var repeat = __webpack_require__(139);
	var trim = __webpack_require__(143);
	
	module.exports = indentedCode;
	
	var C_NEWLINE = '\n';
	var C_TAB = '\t';
	var C_SPACE = ' ';
	
	var CODE_INDENT_COUNT = 4;
	var CODE_INDENT = repeat(C_SPACE, CODE_INDENT_COUNT);
	
	/* Tokenise indented code. */
	function indentedCode(eat, value, silent) {
	  var index = -1;
	  var length = value.length;
	  var subvalue = '';
	  var content = '';
	  var subvalueQueue = '';
	  var contentQueue = '';
	  var character;
	  var blankQueue;
	  var indent;
	
	  while (++index < length) {
	    character = value.charAt(index);
	
	    if (indent) {
	      indent = false;
	
	      subvalue += subvalueQueue;
	      content += contentQueue;
	      subvalueQueue = '';
	      contentQueue = '';
	
	      if (character === C_NEWLINE) {
	        subvalueQueue = character;
	        contentQueue = character;
	      } else {
	        subvalue += character;
	        content += character;
	
	        while (++index < length) {
	          character = value.charAt(index);
	
	          if (!character || character === C_NEWLINE) {
	            contentQueue = character;
	            subvalueQueue = character;
	            break;
	          }
	
	          subvalue += character;
	          content += character;
	        }
	      }
	    } else if (
	      character === C_SPACE &&
	      value.charAt(index + 1) === character &&
	      value.charAt(index + 2) === character &&
	      value.charAt(index + 3) === character
	    ) {
	      subvalueQueue += CODE_INDENT;
	      index += 3;
	      indent = true;
	    } else if (character === C_TAB) {
	      subvalueQueue += character;
	      indent = true;
	    } else {
	      blankQueue = '';
	
	      while (character === C_TAB || character === C_SPACE) {
	        blankQueue += character;
	        character = value.charAt(++index);
	      }
	
	      if (character !== C_NEWLINE) {
	        break;
	      }
	
	      subvalueQueue += blankQueue + character;
	      contentQueue += character;
	    }
	  }
	
	  if (content) {
	    if (silent) {
	      return true;
	    }
	
	    return eat(subvalue)({
	      type: 'code',
	      lang: null,
	      value: trim(content)
	    });
	  }
	}


/***/ }),
/* 538 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var whitespace = __webpack_require__(14);
	var locate = __webpack_require__(524);
	
	module.exports = inlineCode;
	inlineCode.locator = locate;
	
	var C_TICK = '`';
	
	/* Tokenise inline code. */
	function inlineCode(eat, value, silent) {
	  var length = value.length;
	  var index = 0;
	  var queue = '';
	  var tickQueue = '';
	  var contentQueue;
	  var subqueue;
	  var count;
	  var openingCount;
	  var subvalue;
	  var character;
	  var found;
	  var next;
	
	  while (index < length) {
	    if (value.charAt(index) !== C_TICK) {
	      break;
	    }
	
	    queue += C_TICK;
	    index++;
	  }
	
	  if (!queue) {
	    return;
	  }
	
	  subvalue = queue;
	  openingCount = index;
	  queue = '';
	  next = value.charAt(index);
	  count = 0;
	
	  while (index < length) {
	    character = next;
	    next = value.charAt(index + 1);
	
	    if (character === C_TICK) {
	      count++;
	      tickQueue += character;
	    } else {
	      count = 0;
	      queue += character;
	    }
	
	    if (count && next !== C_TICK) {
	      if (count === openingCount) {
	        subvalue += queue + tickQueue;
	        found = true;
	        break;
	      }
	
	      queue += tickQueue;
	      tickQueue = '';
	    }
	
	    index++;
	  }
	
	  if (!found) {
	    if (openingCount % 2 !== 0) {
	      return;
	    }
	
	    queue = '';
	  }
	
	  /* istanbul ignore if - never used (yet) */
	  if (silent) {
	    return true;
	  }
	
	  contentQueue = '';
	  subqueue = '';
	  length = queue.length;
	  index = -1;
	
	  while (++index < length) {
	    character = queue.charAt(index);
	
	    if (whitespace(character)) {
	      subqueue += character;
	      continue;
	    }
	
	    if (subqueue) {
	      if (contentQueue) {
	        contentQueue += subqueue;
	      }
	
	      subqueue = '';
	    }
	
	    contentQueue += character;
	  }
	
	  return eat(subvalue)({
	    type: 'inlineCode',
	    value: contentQueue
	  });
	}


/***/ }),
/* 539 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var whitespace = __webpack_require__(14);
	var normalize = __webpack_require__(138);
	
	module.exports = definition;
	definition.notInList = true;
	definition.notInBlock = true;
	
	var C_DOUBLE_QUOTE = '"';
	var C_SINGLE_QUOTE = '\'';
	var C_BACKSLASH = '\\';
	var C_NEWLINE = '\n';
	var C_TAB = '\t';
	var C_SPACE = ' ';
	var C_BRACKET_OPEN = '[';
	var C_BRACKET_CLOSE = ']';
	var C_PAREN_OPEN = '(';
	var C_PAREN_CLOSE = ')';
	var C_COLON = ':';
	var C_LT = '<';
	var C_GT = '>';
	
	function definition(eat, value, silent) {
	  var self = this;
	  var commonmark = self.options.commonmark;
	  var index = 0;
	  var length = value.length;
	  var subvalue = '';
	  var beforeURL;
	  var beforeTitle;
	  var queue;
	  var character;
	  var test;
	  var identifier;
	  var url;
	  var title;
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (character !== C_SPACE && character !== C_TAB) {
	      break;
	    }
	
	    subvalue += character;
	    index++;
	  }
	
	  character = value.charAt(index);
	
	  if (character !== C_BRACKET_OPEN) {
	    return;
	  }
	
	  index++;
	  subvalue += character;
	  queue = '';
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (character === C_BRACKET_CLOSE) {
	      break;
	    } else if (character === C_BACKSLASH) {
	      queue += character;
	      index++;
	      character = value.charAt(index);
	    }
	
	    queue += character;
	    index++;
	  }
	
	  if (
	    !queue ||
	    value.charAt(index) !== C_BRACKET_CLOSE ||
	    value.charAt(index + 1) !== C_COLON
	  ) {
	    return;
	  }
	
	  identifier = queue;
	  subvalue += queue + C_BRACKET_CLOSE + C_COLON;
	  index = subvalue.length;
	  queue = '';
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (
	      character !== C_TAB &&
	      character !== C_SPACE &&
	      character !== C_NEWLINE
	    ) {
	      break;
	    }
	
	    subvalue += character;
	    index++;
	  }
	
	  character = value.charAt(index);
	  queue = '';
	  beforeURL = subvalue;
	
	  if (character === C_LT) {
	    index++;
	
	    while (index < length) {
	      character = value.charAt(index);
	
	      if (!isEnclosedURLCharacter(character)) {
	        break;
	      }
	
	      queue += character;
	      index++;
	    }
	
	    character = value.charAt(index);
	
	    if (character === isEnclosedURLCharacter.delimiter) {
	      subvalue += C_LT + queue + character;
	      index++;
	    } else {
	      if (commonmark) {
	        return;
	      }
	
	      index -= queue.length + 1;
	      queue = '';
	    }
	  }
	
	  if (!queue) {
	    while (index < length) {
	      character = value.charAt(index);
	
	      if (!isUnclosedURLCharacter(character)) {
	        break;
	      }
	
	      queue += character;
	      index++;
	    }
	
	    subvalue += queue;
	  }
	
	  if (!queue) {
	    return;
	  }
	
	  url = queue;
	  queue = '';
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (
	      character !== C_TAB &&
	      character !== C_SPACE &&
	      character !== C_NEWLINE
	    ) {
	      break;
	    }
	
	    queue += character;
	    index++;
	  }
	
	  character = value.charAt(index);
	  test = null;
	
	  if (character === C_DOUBLE_QUOTE) {
	    test = C_DOUBLE_QUOTE;
	  } else if (character === C_SINGLE_QUOTE) {
	    test = C_SINGLE_QUOTE;
	  } else if (character === C_PAREN_OPEN) {
	    test = C_PAREN_CLOSE;
	  }
	
	  if (!test) {
	    queue = '';
	    index = subvalue.length;
	  } else if (queue) {
	    subvalue += queue + character;
	    index = subvalue.length;
	    queue = '';
	
	    while (index < length) {
	      character = value.charAt(index);
	
	      if (character === test) {
	        break;
	      }
	
	      if (character === C_NEWLINE) {
	        index++;
	        character = value.charAt(index);
	
	        if (character === C_NEWLINE || character === test) {
	          return;
	        }
	
	        queue += C_NEWLINE;
	      }
	
	      queue += character;
	      index++;
	    }
	
	    character = value.charAt(index);
	
	    if (character !== test) {
	      return;
	    }
	
	    beforeTitle = subvalue;
	    subvalue += queue + character;
	    index++;
	    title = queue;
	    queue = '';
	  } else {
	    return;
	  }
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (character !== C_TAB && character !== C_SPACE) {
	      break;
	    }
	
	    subvalue += character;
	    index++;
	  }
	
	  character = value.charAt(index);
	
	  if (!character || character === C_NEWLINE) {
	    if (silent) {
	      return true;
	    }
	
	    beforeURL = eat(beforeURL).test().end;
	    url = self.decode.raw(self.unescape(url), beforeURL);
	
	    if (title) {
	      beforeTitle = eat(beforeTitle).test().end;
	      title = self.decode.raw(self.unescape(title), beforeTitle);
	    }
	
	    return eat(subvalue)({
	      type: 'definition',
	      identifier: normalize(identifier),
	      title: title || null,
	      url: url
	    });
	  }
	}
	
	/* Check if `character` can be inside an enclosed URI. */
	function isEnclosedURLCharacter(character) {
	  return character !== C_GT &&
	    character !== C_BRACKET_OPEN &&
	    character !== C_BRACKET_CLOSE;
	}
	
	isEnclosedURLCharacter.delimiter = C_GT;
	
	/* Check if `character` can be inside an unclosed URI. */
	function isUnclosedURLCharacter(character) {
	  return character !== C_BRACKET_OPEN &&
	    character !== C_BRACKET_CLOSE &&
	    !whitespace(character);
	}


/***/ }),
/* 540 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var whitespace = __webpack_require__(14);
	var locate = __webpack_require__(525);
	
	module.exports = strikethrough;
	strikethrough.locator = locate;
	
	var C_TILDE = '~';
	var DOUBLE = '~~';
	
	function strikethrough(eat, value, silent) {
	  var self = this;
	  var character = '';
	  var previous = '';
	  var preceding = '';
	  var subvalue = '';
	  var index;
	  var length;
	  var now;
	
	  if (
	    !self.options.gfm ||
	    value.charAt(0) !== C_TILDE ||
	    value.charAt(1) !== C_TILDE ||
	    whitespace(value.charAt(2))
	  ) {
	    return;
	  }
	
	  index = 1;
	  length = value.length;
	  now = eat.now();
	  now.column += 2;
	  now.offset += 2;
	
	  while (++index < length) {
	    character = value.charAt(index);
	
	    if (
	      character === C_TILDE &&
	      previous === C_TILDE &&
	      (!preceding || !whitespace(preceding))
	    ) {
	      /* istanbul ignore if - never used (yet) */
	      if (silent) {
	        return true;
	      }
	
	      return eat(DOUBLE + subvalue + DOUBLE)({
	        type: 'delete',
	        children: self.tokenizeInline(subvalue, now)
	      });
	    }
	
	    subvalue += previous;
	    preceding = previous;
	    previous = character;
	  }
	}


/***/ }),
/* 541 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var trim = __webpack_require__(45);
	var word = __webpack_require__(391);
	var whitespace = __webpack_require__(14);
	var locate = __webpack_require__(526);
	
	module.exports = emphasis;
	emphasis.locator = locate;
	
	var C_ASTERISK = '*';
	var C_UNDERSCORE = '_';
	
	function emphasis(eat, value, silent) {
	  var self = this;
	  var index = 0;
	  var character = value.charAt(index);
	  var now;
	  var pedantic;
	  var marker;
	  var queue;
	  var subvalue;
	  var length;
	  var prev;
	
	  if (character !== C_ASTERISK && character !== C_UNDERSCORE) {
	    return;
	  }
	
	  pedantic = self.options.pedantic;
	  subvalue = character;
	  marker = character;
	  length = value.length;
	  index++;
	  queue = '';
	  character = '';
	
	  if (pedantic && whitespace(value.charAt(index))) {
	    return;
	  }
	
	  while (index < length) {
	    prev = character;
	    character = value.charAt(index);
	
	    if (character === marker && (!pedantic || !whitespace(prev))) {
	      character = value.charAt(++index);
	
	      if (character !== marker) {
	        if (!trim(queue) || prev === marker) {
	          return;
	        }
	
	        if (!pedantic && marker === C_UNDERSCORE && word(character)) {
	          queue += marker;
	          continue;
	        }
	
	        /* istanbul ignore if - never used (yet) */
	        if (silent) {
	          return true;
	        }
	
	        now = eat.now();
	        now.column++;
	        now.offset++;
	
	        return eat(subvalue + queue + marker)({
	          type: 'emphasis',
	          children: self.tokenizeInline(queue, now)
	        });
	      }
	
	      queue += marker;
	    }
	
	    if (!pedantic && character === '\\') {
	      queue += character;
	      character = value.charAt(++index);
	    }
	
	    queue += character;
	    index++;
	  }
	}


/***/ }),
/* 542 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var locate = __webpack_require__(527);
	
	module.exports = escape;
	escape.locator = locate;
	
	function escape(eat, value, silent) {
	  var self = this;
	  var character;
	  var node;
	
	  if (value.charAt(0) === '\\') {
	    character = value.charAt(1);
	
	    if (self.escape.indexOf(character) !== -1) {
	      /* istanbul ignore if - never used (yet) */
	      if (silent) {
	        return true;
	      }
	
	      if (character === '\n') {
	        node = {type: 'break'};
	      } else {
	        node = {
	          type: 'text',
	          value: character
	        };
	      }
	
	      return eat('\\' + character)(node);
	    }
	  }
	}


/***/ }),
/* 543 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var whitespace = __webpack_require__(14);
	var normalize = __webpack_require__(138);
	
	module.exports = footnoteDefinition;
	footnoteDefinition.notInList = true;
	footnoteDefinition.notInBlock = true;
	
	var C_BACKSLASH = '\\';
	var C_NEWLINE = '\n';
	var C_TAB = '\t';
	var C_SPACE = ' ';
	var C_BRACKET_OPEN = '[';
	var C_BRACKET_CLOSE = ']';
	var C_CARET = '^';
	var C_COLON = ':';
	
	var EXPRESSION_INITIAL_TAB = /^( {4}|\t)?/gm;
	
	function footnoteDefinition(eat, value, silent) {
	  var self = this;
	  var offsets = self.offset;
	  var index;
	  var length;
	  var subvalue;
	  var now;
	  var currentLine;
	  var content;
	  var queue;
	  var subqueue;
	  var character;
	  var identifier;
	  var add;
	  var exit;
	
	  if (!self.options.footnotes) {
	    return;
	  }
	
	  index = 0;
	  length = value.length;
	  subvalue = '';
	  now = eat.now();
	  currentLine = now.line;
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (!whitespace(character)) {
	      break;
	    }
	
	    subvalue += character;
	    index++;
	  }
	
	  if (
	    value.charAt(index) !== C_BRACKET_OPEN ||
	    value.charAt(index + 1) !== C_CARET
	  ) {
	    return;
	  }
	
	  subvalue += C_BRACKET_OPEN + C_CARET;
	  index = subvalue.length;
	  queue = '';
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (character === C_BRACKET_CLOSE) {
	      break;
	    } else if (character === C_BACKSLASH) {
	      queue += character;
	      index++;
	      character = value.charAt(index);
	    }
	
	    queue += character;
	    index++;
	  }
	
	  if (
	    !queue ||
	    value.charAt(index) !== C_BRACKET_CLOSE ||
	    value.charAt(index + 1) !== C_COLON
	  ) {
	    return;
	  }
	
	  if (silent) {
	    return true;
	  }
	
	  identifier = normalize(queue);
	  subvalue += queue + C_BRACKET_CLOSE + C_COLON;
	  index = subvalue.length;
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (character !== C_TAB && character !== C_SPACE) {
	      break;
	    }
	
	    subvalue += character;
	    index++;
	  }
	
	  now.column += subvalue.length;
	  now.offset += subvalue.length;
	  queue = '';
	  content = '';
	  subqueue = '';
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (character === C_NEWLINE) {
	      subqueue = character;
	      index++;
	
	      while (index < length) {
	        character = value.charAt(index);
	
	        if (character !== C_NEWLINE) {
	          break;
	        }
	
	        subqueue += character;
	        index++;
	      }
	
	      queue += subqueue;
	      subqueue = '';
	
	      while (index < length) {
	        character = value.charAt(index);
	
	        if (character !== C_SPACE) {
	          break;
	        }
	
	        subqueue += character;
	        index++;
	      }
	
	      if (subqueue.length === 0) {
	        break;
	      }
	
	      queue += subqueue;
	    }
	
	    if (queue) {
	      content += queue;
	      queue = '';
	    }
	
	    content += character;
	    index++;
	  }
	
	  subvalue += content;
	
	  content = content.replace(EXPRESSION_INITIAL_TAB, function (line) {
	    offsets[currentLine] = (offsets[currentLine] || 0) + line.length;
	    currentLine++;
	
	    return '';
	  });
	
	  add = eat(subvalue);
	
	  exit = self.enterBlock();
	  content = self.tokenizeBlock(content, now);
	  exit();
	
	  return add({
	    type: 'footnoteDefinition',
	    identifier: identifier,
	    children: content
	  });
	}


/***/ }),
/* 544 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = atxHeading;
	
	var C_NEWLINE = '\n';
	var C_TAB = '\t';
	var C_SPACE = ' ';
	var C_HASH = '#';
	
	var MAX_ATX_COUNT = 6;
	
	function atxHeading(eat, value, silent) {
	  var self = this;
	  var settings = self.options;
	  var length = value.length + 1;
	  var index = -1;
	  var now = eat.now();
	  var subvalue = '';
	  var content = '';
	  var character;
	  var queue;
	  var depth;
	
	  /* Eat initial spacing. */
	  while (++index < length) {
	    character = value.charAt(index);
	
	    if (character !== C_SPACE && character !== C_TAB) {
	      index--;
	      break;
	    }
	
	    subvalue += character;
	  }
	
	  /* Eat hashes. */
	  depth = 0;
	
	  while (++index <= length) {
	    character = value.charAt(index);
	
	    if (character !== C_HASH) {
	      index--;
	      break;
	    }
	
	    subvalue += character;
	    depth++;
	  }
	
	  if (depth > MAX_ATX_COUNT) {
	    return;
	  }
	
	  if (
	    !depth ||
	    (!settings.pedantic && value.charAt(index + 1) === C_HASH)
	  ) {
	    return;
	  }
	
	  length = value.length + 1;
	
	  /* Eat intermediate white-space. */
	  queue = '';
	
	  while (++index < length) {
	    character = value.charAt(index);
	
	    if (character !== C_SPACE && character !== C_TAB) {
	      index--;
	      break;
	    }
	
	    queue += character;
	  }
	
	  /* Exit when not in pedantic mode without spacing. */
	  if (
	    !settings.pedantic &&
	    queue.length === 0 &&
	    character &&
	    character !== C_NEWLINE
	  ) {
	    return;
	  }
	
	  if (silent) {
	    return true;
	  }
	
	  /* Eat content. */
	  subvalue += queue;
	  queue = '';
	  content = '';
	
	  while (++index < length) {
	    character = value.charAt(index);
	
	    if (!character || character === C_NEWLINE) {
	      break;
	    }
	
	    if (
	      character !== C_SPACE &&
	      character !== C_TAB &&
	      character !== C_HASH
	    ) {
	      content += queue + character;
	      queue = '';
	      continue;
	    }
	
	    while (character === C_SPACE || character === C_TAB) {
	      queue += character;
	      character = value.charAt(++index);
	    }
	
	    while (character === C_HASH) {
	      queue += character;
	      character = value.charAt(++index);
	    }
	
	    while (character === C_SPACE || character === C_TAB) {
	      queue += character;
	      character = value.charAt(++index);
	    }
	
	    index--;
	  }
	
	  now.column += subvalue.length;
	  now.offset += subvalue.length;
	  subvalue += content + queue;
	
	  return eat(subvalue)({
	    type: 'heading',
	    depth: depth,
	    children: self.tokenizeInline(content, now)
	  });
	}


/***/ }),
/* 545 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = setextHeading;
	
	var C_NEWLINE = '\n';
	var C_TAB = '\t';
	var C_SPACE = ' ';
	var C_EQUALS = '=';
	var C_DASH = '-';
	
	var MAX_HEADING_INDENT = 3;
	
	/* Map of characters which can be used to mark setext
	 * headers, mapping to their corresponding depth. */
	var SETEXT_MARKERS = {};
	
	SETEXT_MARKERS[C_EQUALS] = 1;
	SETEXT_MARKERS[C_DASH] = 2;
	
	function setextHeading(eat, value, silent) {
	  var self = this;
	  var now = eat.now();
	  var length = value.length;
	  var index = -1;
	  var subvalue = '';
	  var content;
	  var queue;
	  var character;
	  var marker;
	  var depth;
	
	  /* Eat initial indentation. */
	  while (++index < length) {
	    character = value.charAt(index);
	
	    if (character !== C_SPACE || index >= MAX_HEADING_INDENT) {
	      index--;
	      break;
	    }
	
	    subvalue += character;
	  }
	
	  /* Eat content. */
	  content = '';
	  queue = '';
	
	  while (++index < length) {
	    character = value.charAt(index);
	
	    if (character === C_NEWLINE) {
	      index--;
	      break;
	    }
	
	    if (character === C_SPACE || character === C_TAB) {
	      queue += character;
	    } else {
	      content += queue + character;
	      queue = '';
	    }
	  }
	
	  now.column += subvalue.length;
	  now.offset += subvalue.length;
	  subvalue += content + queue;
	
	  /* Ensure the content is followed by a newline and a
	   * valid marker. */
	  character = value.charAt(++index);
	  marker = value.charAt(++index);
	
	  if (character !== C_NEWLINE || !SETEXT_MARKERS[marker]) {
	    return;
	  }
	
	  subvalue += character;
	
	  /* Eat Setext-line. */
	  queue = marker;
	  depth = SETEXT_MARKERS[marker];
	
	  while (++index < length) {
	    character = value.charAt(index);
	
	    if (character !== marker) {
	      if (character !== C_NEWLINE) {
	        return;
	      }
	
	      index--;
	      break;
	    }
	
	    queue += character;
	  }
	
	  if (silent) {
	    return true;
	  }
	
	  return eat(subvalue + queue)({
	    type: 'heading',
	    depth: depth,
	    children: self.tokenizeInline(content, now)
	  });
	}


/***/ }),
/* 546 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var openCloseTag = __webpack_require__(216).openCloseTag;
	
	module.exports = blockHTML;
	
	var C_TAB = '\t';
	var C_SPACE = ' ';
	var C_NEWLINE = '\n';
	var C_LT = '<';
	
	function blockHTML(eat, value, silent) {
	  var self = this;
	  var blocks = self.options.blocks;
	  var length = value.length;
	  var index = 0;
	  var next;
	  var line;
	  var offset;
	  var character;
	  var count;
	  var sequence;
	  var subvalue;
	
	  var sequences = [
	    [/^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, true],
	    [/^<!--/, /-->/, true],
	    [/^<\?/, /\?>/, true],
	    [/^<![A-Za-z]/, />/, true],
	    [/^<!\[CDATA\[/, /\]\]>/, true],
	    [new RegExp('^</?(' + blocks.join('|') + ')(?=(\\s|/?>|$))', 'i'), /^$/, true],
	    [new RegExp(openCloseTag.source + '\\s*$'), /^$/, false]
	  ];
	
	  /* Eat initial spacing. */
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (character !== C_TAB && character !== C_SPACE) {
	      break;
	    }
	
	    index++;
	  }
	
	  if (value.charAt(index) !== C_LT) {
	    return;
	  }
	
	  next = value.indexOf(C_NEWLINE, index + 1);
	  next = next === -1 ? length : next;
	  line = value.slice(index, next);
	  offset = -1;
	  count = sequences.length;
	
	  while (++offset < count) {
	    if (sequences[offset][0].test(line)) {
	      sequence = sequences[offset];
	      break;
	    }
	  }
	
	  if (!sequence) {
	    return;
	  }
	
	  if (silent) {
	    return sequence[2];
	  }
	
	  index = next;
	
	  if (!sequence[1].test(line)) {
	    while (index < length) {
	      next = value.indexOf(C_NEWLINE, index + 1);
	      next = next === -1 ? length : next;
	      line = value.slice(index + 1, next);
	
	      if (sequence[1].test(line)) {
	        if (line) {
	          index = next;
	        }
	
	        break;
	      }
	
	      index = next;
	    }
	  }
	
	  subvalue = value.slice(0, index);
	
	  return eat(subvalue)({type: 'html', value: subvalue});
	}


/***/ }),
/* 547 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var alphabetical = __webpack_require__(177);
	var locate = __webpack_require__(214);
	var tag = __webpack_require__(216).tag;
	
	module.exports = inlineHTML;
	inlineHTML.locator = locate;
	
	var EXPRESSION_HTML_LINK_OPEN = /^<a /i;
	var EXPRESSION_HTML_LINK_CLOSE = /^<\/a>/i;
	
	function inlineHTML(eat, value, silent) {
	  var self = this;
	  var length = value.length;
	  var character;
	  var subvalue;
	
	  if (value.charAt(0) !== '<' || length < 3) {
	    return;
	  }
	
	  character = value.charAt(1);
	
	  if (
	    !alphabetical(character) &&
	    character !== '?' &&
	    character !== '!' &&
	    character !== '/'
	  ) {
	    return;
	  }
	
	  subvalue = value.match(tag);
	
	  if (!subvalue) {
	    return;
	  }
	
	  /* istanbul ignore if - not used yet. */
	  if (silent) {
	    return true;
	  }
	
	  subvalue = subvalue[0];
	
	  if (!self.inLink && EXPRESSION_HTML_LINK_OPEN.test(subvalue)) {
	    self.inLink = true;
	  } else if (self.inLink && EXPRESSION_HTML_LINK_CLOSE.test(subvalue)) {
	    self.inLink = false;
	  }
	
	  return eat(subvalue)({type: 'html', value: subvalue});
	}


/***/ }),
/* 548 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var whitespace = __webpack_require__(14);
	var locate = __webpack_require__(213);
	
	module.exports = link;
	link.locator = locate;
	
	var own = {}.hasOwnProperty;
	
	var C_BACKSLASH = '\\';
	var C_BRACKET_OPEN = '[';
	var C_BRACKET_CLOSE = ']';
	var C_PAREN_OPEN = '(';
	var C_PAREN_CLOSE = ')';
	var C_LT = '<';
	var C_GT = '>';
	var C_TICK = '`';
	var C_DOUBLE_QUOTE = '"';
	var C_SINGLE_QUOTE = '\'';
	
	/* Map of characters, which can be used to mark link
	 * and image titles. */
	var LINK_MARKERS = {};
	
	LINK_MARKERS[C_DOUBLE_QUOTE] = C_DOUBLE_QUOTE;
	LINK_MARKERS[C_SINGLE_QUOTE] = C_SINGLE_QUOTE;
	
	/* Map of characters, which can be used to mark link
	 * and image titles in commonmark-mode. */
	var COMMONMARK_LINK_MARKERS = {};
	
	COMMONMARK_LINK_MARKERS[C_DOUBLE_QUOTE] = C_DOUBLE_QUOTE;
	COMMONMARK_LINK_MARKERS[C_SINGLE_QUOTE] = C_SINGLE_QUOTE;
	COMMONMARK_LINK_MARKERS[C_PAREN_OPEN] = C_PAREN_CLOSE;
	
	function link(eat, value, silent) {
	  var self = this;
	  var subvalue = '';
	  var index = 0;
	  var character = value.charAt(0);
	  var pedantic = self.options.pedantic;
	  var commonmark = self.options.commonmark;
	  var gfm = self.options.gfm;
	  var closed;
	  var count;
	  var opening;
	  var beforeURL;
	  var beforeTitle;
	  var subqueue;
	  var hasMarker;
	  var markers;
	  var isImage;
	  var content;
	  var marker;
	  var length;
	  var title;
	  var depth;
	  var queue;
	  var url;
	  var now;
	  var exit;
	  var node;
	
	  /* Detect whether this is an image. */
	  if (character === '!') {
	    isImage = true;
	    subvalue = character;
	    character = value.charAt(++index);
	  }
	
	  /* Eat the opening. */
	  if (character !== C_BRACKET_OPEN) {
	    return;
	  }
	
	  /* Exit when this is a link and we’re already inside
	   * a link. */
	  if (!isImage && self.inLink) {
	    return;
	  }
	
	  subvalue += character;
	  queue = '';
	  index++;
	
	  /* Eat the content. */
	  length = value.length;
	  now = eat.now();
	  depth = 0;
	
	  now.column += index;
	  now.offset += index;
	
	  while (index < length) {
	    character = value.charAt(index);
	    subqueue = character;
	
	    if (character === C_TICK) {
	      /* Inline-code in link content. */
	      count = 1;
	
	      while (value.charAt(index + 1) === C_TICK) {
	        subqueue += character;
	        index++;
	        count++;
	      }
	
	      if (!opening) {
	        opening = count;
	      } else if (count >= opening) {
	        opening = 0;
	      }
	    } else if (character === C_BACKSLASH) {
	      /* Allow brackets to be escaped. */
	      index++;
	      subqueue += value.charAt(index);
	    /* In GFM mode, brackets in code still count.
	     * In all other modes, they don’t.  This empty
	     * block prevents the next statements are
	     * entered. */
	    } else if ((!opening || gfm) && character === C_BRACKET_OPEN) {
	      depth++;
	    } else if ((!opening || gfm) && character === C_BRACKET_CLOSE) {
	      if (depth) {
	        depth--;
	      } else {
	        /* Allow white-space between content and
	         * url in GFM mode. */
	        if (!pedantic) {
	          while (index < length) {
	            character = value.charAt(index + 1);
	
	            if (!whitespace(character)) {
	              break;
	            }
	
	            subqueue += character;
	            index++;
	          }
	        }
	
	        if (value.charAt(index + 1) !== C_PAREN_OPEN) {
	          return;
	        }
	
	        subqueue += C_PAREN_OPEN;
	        closed = true;
	        index++;
	
	        break;
	      }
	    }
	
	    queue += subqueue;
	    subqueue = '';
	    index++;
	  }
	
	  /* Eat the content closing. */
	  if (!closed) {
	    return;
	  }
	
	  content = queue;
	  subvalue += queue + subqueue;
	  index++;
	
	  /* Eat white-space. */
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (!whitespace(character)) {
	      break;
	    }
	
	    subvalue += character;
	    index++;
	  }
	
	  /* Eat the URL. */
	  character = value.charAt(index);
	  markers = commonmark ? COMMONMARK_LINK_MARKERS : LINK_MARKERS;
	  queue = '';
	  beforeURL = subvalue;
	
	  if (character === C_LT) {
	    index++;
	    beforeURL += C_LT;
	
	    while (index < length) {
	      character = value.charAt(index);
	
	      if (character === C_GT) {
	        break;
	      }
	
	      if (commonmark && character === '\n') {
	        return;
	      }
	
	      queue += character;
	      index++;
	    }
	
	    if (value.charAt(index) !== C_GT) {
	      return;
	    }
	
	    subvalue += C_LT + queue + C_GT;
	    url = queue;
	    index++;
	  } else {
	    character = null;
	    subqueue = '';
	
	    while (index < length) {
	      character = value.charAt(index);
	
	      if (subqueue && own.call(markers, character)) {
	        break;
	      }
	
	      if (whitespace(character)) {
	        if (!pedantic) {
	          break;
	        }
	
	        subqueue += character;
	      } else {
	        if (character === C_PAREN_OPEN) {
	          depth++;
	        } else if (character === C_PAREN_CLOSE) {
	          if (depth === 0) {
	            break;
	          }
	
	          depth--;
	        }
	
	        queue += subqueue;
	        subqueue = '';
	
	        if (character === C_BACKSLASH) {
	          queue += C_BACKSLASH;
	          character = value.charAt(++index);
	        }
	
	        queue += character;
	      }
	
	      index++;
	    }
	
	    subvalue += queue;
	    url = queue;
	    index = subvalue.length;
	  }
	
	  /* Eat white-space. */
	  queue = '';
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (!whitespace(character)) {
	      break;
	    }
	
	    queue += character;
	    index++;
	  }
	
	  character = value.charAt(index);
	  subvalue += queue;
	
	  /* Eat the title. */
	  if (queue && own.call(markers, character)) {
	    index++;
	    subvalue += character;
	    queue = '';
	    marker = markers[character];
	    beforeTitle = subvalue;
	
	    /* In commonmark-mode, things are pretty easy: the
	     * marker cannot occur inside the title.
	     *
	     * Non-commonmark does, however, support nested
	     * delimiters. */
	    if (commonmark) {
	      while (index < length) {
	        character = value.charAt(index);
	
	        if (character === marker) {
	          break;
	        }
	
	        if (character === C_BACKSLASH) {
	          queue += C_BACKSLASH;
	          character = value.charAt(++index);
	        }
	
	        index++;
	        queue += character;
	      }
	
	      character = value.charAt(index);
	
	      if (character !== marker) {
	        return;
	      }
	
	      title = queue;
	      subvalue += queue + character;
	      index++;
	
	      while (index < length) {
	        character = value.charAt(index);
	
	        if (!whitespace(character)) {
	          break;
	        }
	
	        subvalue += character;
	        index++;
	      }
	    } else {
	      subqueue = '';
	
	      while (index < length) {
	        character = value.charAt(index);
	
	        if (character === marker) {
	          if (hasMarker) {
	            queue += marker + subqueue;
	            subqueue = '';
	          }
	
	          hasMarker = true;
	        } else if (!hasMarker) {
	          queue += character;
	        } else if (character === C_PAREN_CLOSE) {
	          subvalue += queue + marker + subqueue;
	          title = queue;
	          break;
	        } else if (whitespace(character)) {
	          subqueue += character;
	        } else {
	          queue += marker + subqueue + character;
	          subqueue = '';
	          hasMarker = false;
	        }
	
	        index++;
	      }
	    }
	  }
	
	  if (value.charAt(index) !== C_PAREN_CLOSE) {
	    return;
	  }
	
	  /* istanbul ignore if - never used (yet) */
	  if (silent) {
	    return true;
	  }
	
	  subvalue += C_PAREN_CLOSE;
	
	  url = self.decode.raw(self.unescape(url), eat(beforeURL).test().end);
	
	  if (title) {
	    beforeTitle = eat(beforeTitle).test().end;
	    title = self.decode.raw(self.unescape(title), beforeTitle);
	  }
	
	  node = {
	    type: isImage ? 'image' : 'link',
	    title: title || null,
	    url: url
	  };
	
	  if (isImage) {
	    node.alt = self.decode.raw(self.unescape(content), now) || null;
	  } else {
	    exit = self.enterLink();
	    node.children = self.tokenizeInline(content, now);
	    exit();
	  }
	
	  return eat(subvalue)(node);
	}


/***/ }),
/* 549 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/* eslint-disable max-params */
	
	var trim = __webpack_require__(45);
	var repeat = __webpack_require__(139);
	var decimal = __webpack_require__(74);
	var getIndent = __webpack_require__(215);
	var removeIndent = __webpack_require__(560);
	var interrupt = __webpack_require__(137);
	
	module.exports = list;
	
	var C_ASTERISK = '*';
	var C_UNDERSCORE = '_';
	var C_PLUS = '+';
	var C_DASH = '-';
	var C_DOT = '.';
	var C_SPACE = ' ';
	var C_NEWLINE = '\n';
	var C_TAB = '\t';
	var C_PAREN_CLOSE = ')';
	var C_X_LOWER = 'x';
	
	var TAB_SIZE = 4;
	var EXPRESSION_LOOSE_LIST_ITEM = /\n\n(?!\s*$)/;
	var EXPRESSION_TASK_ITEM = /^\[([ \t]|x|X)][ \t]/;
	var EXPRESSION_BULLET = /^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/;
	var EXPRESSION_PEDANTIC_BULLET = /^([ \t]*)([*+-]|\d+[.)])([ \t]+)/;
	var EXPRESSION_INITIAL_INDENT = /^( {1,4}|\t)?/gm;
	
	/* Map of characters which can be used to mark
	 * list-items. */
	var LIST_UNORDERED_MARKERS = {};
	
	LIST_UNORDERED_MARKERS[C_ASTERISK] = true;
	LIST_UNORDERED_MARKERS[C_PLUS] = true;
	LIST_UNORDERED_MARKERS[C_DASH] = true;
	
	/* Map of characters which can be used to mark
	 * list-items after a digit. */
	var LIST_ORDERED_MARKERS = {};
	
	LIST_ORDERED_MARKERS[C_DOT] = true;
	
	/* Map of characters which can be used to mark
	 * list-items after a digit. */
	var LIST_ORDERED_COMMONMARK_MARKERS = {};
	
	LIST_ORDERED_COMMONMARK_MARKERS[C_DOT] = true;
	LIST_ORDERED_COMMONMARK_MARKERS[C_PAREN_CLOSE] = true;
	
	function list(eat, value, silent) {
	  var self = this;
	  var commonmark = self.options.commonmark;
	  var pedantic = self.options.pedantic;
	  var tokenizers = self.blockTokenizers;
	  var interuptors = self.interruptList;
	  var markers;
	  var index = 0;
	  var length = value.length;
	  var start = null;
	  var size = 0;
	  var queue;
	  var ordered;
	  var character;
	  var marker;
	  var nextIndex;
	  var startIndex;
	  var prefixed;
	  var currentMarker;
	  var content;
	  var line;
	  var prevEmpty;
	  var empty;
	  var items;
	  var allLines;
	  var emptyLines;
	  var item;
	  var enterTop;
	  var exitBlockquote;
	  var isLoose;
	  var node;
	  var now;
	  var end;
	  var indented;
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (character === C_TAB) {
	      size += TAB_SIZE - (size % TAB_SIZE);
	    } else if (character === C_SPACE) {
	      size++;
	    } else {
	      break;
	    }
	
	    index++;
	  }
	
	  if (size >= TAB_SIZE) {
	    return;
	  }
	
	  character = value.charAt(index);
	
	  markers = commonmark ?
	    LIST_ORDERED_COMMONMARK_MARKERS :
	    LIST_ORDERED_MARKERS;
	
	  if (LIST_UNORDERED_MARKERS[character] === true) {
	    marker = character;
	    ordered = false;
	  } else {
	    ordered = true;
	    queue = '';
	
	    while (index < length) {
	      character = value.charAt(index);
	
	      if (!decimal(character)) {
	        break;
	      }
	
	      queue += character;
	      index++;
	    }
	
	    character = value.charAt(index);
	
	    if (!queue || markers[character] !== true) {
	      return;
	    }
	
	    start = parseInt(queue, 10);
	    marker = character;
	  }
	
	  character = value.charAt(++index);
	
	  if (character !== C_SPACE && character !== C_TAB) {
	    return;
	  }
	
	  if (silent) {
	    return true;
	  }
	
	  index = 0;
	  items = [];
	  allLines = [];
	  emptyLines = [];
	
	  while (index < length) {
	    nextIndex = value.indexOf(C_NEWLINE, index);
	    startIndex = index;
	    prefixed = false;
	    indented = false;
	
	    if (nextIndex === -1) {
	      nextIndex = length;
	    }
	
	    end = index + TAB_SIZE;
	    size = 0;
	
	    while (index < length) {
	      character = value.charAt(index);
	
	      if (character === C_TAB) {
	        size += TAB_SIZE - (size % TAB_SIZE);
	      } else if (character === C_SPACE) {
	        size++;
	      } else {
	        break;
	      }
	
	      index++;
	    }
	
	    if (size >= TAB_SIZE) {
	      indented = true;
	    }
	
	    if (item && size >= item.indent) {
	      indented = true;
	    }
	
	    character = value.charAt(index);
	    currentMarker = null;
	
	    if (!indented) {
	      if (LIST_UNORDERED_MARKERS[character] === true) {
	        currentMarker = character;
	        index++;
	        size++;
	      } else {
	        queue = '';
	
	        while (index < length) {
	          character = value.charAt(index);
	
	          if (!decimal(character)) {
	            break;
	          }
	
	          queue += character;
	          index++;
	        }
	
	        character = value.charAt(index);
	        index++;
	
	        if (queue && markers[character] === true) {
	          currentMarker = character;
	          size += queue.length + 1;
	        }
	      }
	
	      if (currentMarker) {
	        character = value.charAt(index);
	
	        if (character === C_TAB) {
	          size += TAB_SIZE - (size % TAB_SIZE);
	          index++;
	        } else if (character === C_SPACE) {
	          end = index + TAB_SIZE;
	
	          while (index < end) {
	            if (value.charAt(index) !== C_SPACE) {
	              break;
	            }
	
	            index++;
	            size++;
	          }
	
	          if (index === end && value.charAt(index) === C_SPACE) {
	            index -= TAB_SIZE - 1;
	            size -= TAB_SIZE - 1;
	          }
	        } else if (character !== C_NEWLINE && character !== '') {
	          currentMarker = null;
	        }
	      }
	    }
	
	    if (currentMarker) {
	      if (!pedantic && marker !== currentMarker) {
	        break;
	      }
	
	      prefixed = true;
	    } else {
	      if (!commonmark && !indented && value.charAt(startIndex) === C_SPACE) {
	        indented = true;
	      } else if (commonmark && item) {
	        indented = size >= item.indent || size > TAB_SIZE;
	      }
	
	      prefixed = false;
	      index = startIndex;
	    }
	
	    line = value.slice(startIndex, nextIndex);
	    content = startIndex === index ? line : value.slice(index, nextIndex);
	
	    if (
	      currentMarker === C_ASTERISK ||
	      currentMarker === C_UNDERSCORE ||
	      currentMarker === C_DASH
	    ) {
	      if (tokenizers.thematicBreak.call(self, eat, line, true)) {
	        break;
	      }
	    }
	
	    prevEmpty = empty;
	    empty = !trim(content).length;
	
	    if (indented && item) {
	      item.value = item.value.concat(emptyLines, line);
	      allLines = allLines.concat(emptyLines, line);
	      emptyLines = [];
	    } else if (prefixed) {
	      if (emptyLines.length !== 0) {
	        item.value.push('');
	        item.trail = emptyLines.concat();
	      }
	
	      item = {
	        value: [line],
	        indent: size,
	        trail: []
	      };
	
	      items.push(item);
	      allLines = allLines.concat(emptyLines, line);
	      emptyLines = [];
	    } else if (empty) {
	      if (prevEmpty) {
	        break;
	      }
	
	      emptyLines.push(line);
	    } else {
	      if (prevEmpty) {
	        break;
	      }
	
	      if (interrupt(interuptors, tokenizers, self, [eat, line, true])) {
	        break;
	      }
	
	      item.value = item.value.concat(emptyLines, line);
	      allLines = allLines.concat(emptyLines, line);
	      emptyLines = [];
	    }
	
	    index = nextIndex + 1;
	  }
	
	  node = eat(allLines.join(C_NEWLINE)).reset({
	    type: 'list',
	    ordered: ordered,
	    start: start,
	    loose: null,
	    children: []
	  });
	
	  enterTop = self.enterList();
	  exitBlockquote = self.enterBlock();
	  isLoose = false;
	  index = -1;
	  length = items.length;
	
	  while (++index < length) {
	    item = items[index].value.join(C_NEWLINE);
	    now = eat.now();
	
	    item = eat(item)(listItem(self, item, now), node);
	
	    if (item.loose) {
	      isLoose = true;
	    }
	
	    item = items[index].trail.join(C_NEWLINE);
	
	    if (index !== length - 1) {
	      item += C_NEWLINE;
	    }
	
	    eat(item);
	  }
	
	  enterTop();
	  exitBlockquote();
	
	  node.loose = isLoose;
	
	  return node;
	}
	
	function listItem(ctx, value, position) {
	  var offsets = ctx.offset;
	  var fn = ctx.options.pedantic ? pedanticListItem : normalListItem;
	  var checked = null;
	  var task;
	  var indent;
	
	  value = fn.apply(null, arguments);
	
	  if (ctx.options.gfm) {
	    task = value.match(EXPRESSION_TASK_ITEM);
	
	    if (task) {
	      indent = task[0].length;
	      checked = task[1].toLowerCase() === C_X_LOWER;
	      offsets[position.line] += indent;
	      value = value.slice(indent);
	    }
	  }
	
	  return {
	    type: 'listItem',
	    loose: EXPRESSION_LOOSE_LIST_ITEM.test(value) ||
	      value.charAt(value.length - 1) === C_NEWLINE,
	    checked: checked,
	    children: ctx.tokenizeBlock(value, position)
	  };
	}
	
	/* Create a list-item using overly simple mechanics. */
	function pedanticListItem(ctx, value, position) {
	  var offsets = ctx.offset;
	  var line = position.line;
	
	  /* Remove the list-item’s bullet. */
	  value = value.replace(EXPRESSION_PEDANTIC_BULLET, replacer);
	
	  /* The initial line was also matched by the below, so
	   * we reset the `line`. */
	  line = position.line;
	
	  return value.replace(EXPRESSION_INITIAL_INDENT, replacer);
	
	  /* A simple replacer which removed all matches,
	   * and adds their length to `offset`. */
	  function replacer($0) {
	    offsets[line] = (offsets[line] || 0) + $0.length;
	    line++;
	
	    return '';
	  }
	}
	
	/* Create a list-item using sane mechanics. */
	function normalListItem(ctx, value, position) {
	  var offsets = ctx.offset;
	  var line = position.line;
	  var max;
	  var bullet;
	  var rest;
	  var lines;
	  var trimmedLines;
	  var index;
	  var length;
	
	  /* Remove the list-item’s bullet. */
	  value = value.replace(EXPRESSION_BULLET, replacer);
	
	  lines = value.split(C_NEWLINE);
	
	  trimmedLines = removeIndent(value, getIndent(max).indent).split(C_NEWLINE);
	
	  /* We replaced the initial bullet with something
	   * else above, which was used to trick
	   * `removeIndentation` into removing some more
	   * characters when possible.  However, that could
	   * result in the initial line to be stripped more
	   * than it should be. */
	  trimmedLines[0] = rest;
	
	  offsets[line] = (offsets[line] || 0) + bullet.length;
	  line++;
	
	  index = 0;
	  length = lines.length;
	
	  while (++index < length) {
	    offsets[line] = (offsets[line] || 0) +
	      lines[index].length - trimmedLines[index].length;
	    line++;
	  }
	
	  return trimmedLines.join(C_NEWLINE);
	
	  function replacer($0, $1, $2, $3, $4) {
	    bullet = $1 + $2 + $3;
	    rest = $4;
	
	    /* Make sure that the first nine numbered list items
	     * can indent with an extra space.  That is, when
	     * the bullet did not receive an extra final space. */
	    if (Number($2) < 10 && bullet.length % 2 === 1) {
	      $2 = C_SPACE + $2;
	    }
	
	    max = $1 + repeat(C_SPACE, $2.length) + $3;
	
	    return max + rest;
	  }
	}


/***/ }),
/* 550 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var whitespace = __webpack_require__(14);
	
	module.exports = newline;
	
	/* Tokenise newline. */
	function newline(eat, value, silent) {
	  var character = value.charAt(0);
	  var length;
	  var subvalue;
	  var queue;
	  var index;
	
	  if (character !== '\n') {
	    return;
	  }
	
	  /* istanbul ignore if - never used (yet) */
	  if (silent) {
	    return true;
	  }
	
	  index = 1;
	  length = value.length;
	  subvalue = character;
	  queue = '';
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (!whitespace(character)) {
	      break;
	    }
	
	    queue += character;
	
	    if (character === '\n') {
	      subvalue += queue;
	      queue = '';
	    }
	
	    index++;
	  }
	
	  eat(subvalue);
	}


/***/ }),
/* 551 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var trim = __webpack_require__(45);
	var decimal = __webpack_require__(74);
	var trimTrailingLines = __webpack_require__(143);
	var interrupt = __webpack_require__(137);
	
	module.exports = paragraph;
	
	var C_NEWLINE = '\n';
	var C_TAB = '\t';
	var C_SPACE = ' ';
	
	var TAB_SIZE = 4;
	
	/* Tokenise paragraph. */
	function paragraph(eat, value, silent) {
	  var self = this;
	  var settings = self.options;
	  var commonmark = settings.commonmark;
	  var gfm = settings.gfm;
	  var tokenizers = self.blockTokenizers;
	  var interruptors = self.interruptParagraph;
	  var index = value.indexOf(C_NEWLINE);
	  var length = value.length;
	  var position;
	  var subvalue;
	  var character;
	  var size;
	  var now;
	
	  while (index < length) {
	    /* Eat everything if there’s no following newline. */
	    if (index === -1) {
	      index = length;
	      break;
	    }
	
	    /* Stop if the next character is NEWLINE. */
	    if (value.charAt(index + 1) === C_NEWLINE) {
	      break;
	    }
	
	    /* In commonmark-mode, following indented lines
	     * are part of the paragraph. */
	    if (commonmark) {
	      size = 0;
	      position = index + 1;
	
	      while (position < length) {
	        character = value.charAt(position);
	
	        if (character === C_TAB) {
	          size = TAB_SIZE;
	          break;
	        } else if (character === C_SPACE) {
	          size++;
	        } else {
	          break;
	        }
	
	        position++;
	      }
	
	      if (size >= TAB_SIZE) {
	        index = value.indexOf(C_NEWLINE, index + 1);
	        continue;
	      }
	    }
	
	    subvalue = value.slice(index + 1);
	
	    /* Check if the following code contains a possible
	     * block. */
	    if (interrupt(interruptors, tokenizers, self, [eat, subvalue, true])) {
	      break;
	    }
	
	    /* Break if the following line starts a list, when
	     * already in a list, or when in commonmark, or when
	     * in gfm mode and the bullet is *not* numeric. */
	    if (
	      tokenizers.list.call(self, eat, subvalue, true) &&
	      (
	        self.inList ||
	        commonmark ||
	        (gfm && !decimal(trim.left(subvalue).charAt(0)))
	      )
	    ) {
	      break;
	    }
	
	    position = index;
	    index = value.indexOf(C_NEWLINE, index + 1);
	
	    if (index !== -1 && trim(value.slice(position, index)) === '') {
	      index = position;
	      break;
	    }
	  }
	
	  subvalue = value.slice(0, index);
	
	  if (trim(subvalue) === '') {
	    eat(subvalue);
	
	    return null;
	  }
	
	  /* istanbul ignore if - never used (yet) */
	  if (silent) {
	    return true;
	  }
	
	  now = eat.now();
	  subvalue = trimTrailingLines(subvalue);
	
	  return eat(subvalue)({
	    type: 'paragraph',
	    children: self.tokenizeInline(subvalue, now)
	  });
	}


/***/ }),
/* 552 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var whitespace = __webpack_require__(14);
	var locate = __webpack_require__(213);
	var normalize = __webpack_require__(138);
	
	module.exports = reference;
	reference.locator = locate;
	
	var T_LINK = 'link';
	var T_IMAGE = 'image';
	var T_FOOTNOTE = 'footnote';
	var REFERENCE_TYPE_SHORTCUT = 'shortcut';
	var REFERENCE_TYPE_COLLAPSED = 'collapsed';
	var REFERENCE_TYPE_FULL = 'full';
	var C_CARET = '^';
	var C_BACKSLASH = '\\';
	var C_BRACKET_OPEN = '[';
	var C_BRACKET_CLOSE = ']';
	
	function reference(eat, value, silent) {
	  var self = this;
	  var character = value.charAt(0);
	  var index = 0;
	  var length = value.length;
	  var subvalue = '';
	  var intro = '';
	  var type = T_LINK;
	  var referenceType = REFERENCE_TYPE_SHORTCUT;
	  var content;
	  var identifier;
	  var now;
	  var node;
	  var exit;
	  var queue;
	  var bracketed;
	  var depth;
	
	  /* Check whether we’re eating an image. */
	  if (character === '!') {
	    type = T_IMAGE;
	    intro = character;
	    character = value.charAt(++index);
	  }
	
	  if (character !== C_BRACKET_OPEN) {
	    return;
	  }
	
	  index++;
	  intro += character;
	  queue = '';
	
	  /* Check whether we’re eating a footnote. */
	  if (
	    self.options.footnotes &&
	    type === T_LINK &&
	    value.charAt(index) === C_CARET
	  ) {
	    intro += C_CARET;
	    index++;
	    type = T_FOOTNOTE;
	  }
	
	  /* Eat the text. */
	  depth = 0;
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (character === C_BRACKET_OPEN) {
	      bracketed = true;
	      depth++;
	    } else if (character === C_BRACKET_CLOSE) {
	      if (!depth) {
	        break;
	      }
	
	      depth--;
	    }
	
	    if (character === C_BACKSLASH) {
	      queue += C_BACKSLASH;
	      character = value.charAt(++index);
	    }
	
	    queue += character;
	    index++;
	  }
	
	  subvalue = queue;
	  content = queue;
	  character = value.charAt(index);
	
	  if (character !== C_BRACKET_CLOSE) {
	    return;
	  }
	
	  index++;
	  subvalue += character;
	  queue = '';
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (!whitespace(character)) {
	      break;
	    }
	
	    queue += character;
	    index++;
	  }
	
	  character = value.charAt(index);
	
	  /* Inline footnotes cannot have an identifier. */
	  if (type !== T_FOOTNOTE && character === C_BRACKET_OPEN) {
	    identifier = '';
	    queue += character;
	    index++;
	
	    while (index < length) {
	      character = value.charAt(index);
	
	      if (character === C_BRACKET_OPEN || character === C_BRACKET_CLOSE) {
	        break;
	      }
	
	      if (character === C_BACKSLASH) {
	        identifier += C_BACKSLASH;
	        character = value.charAt(++index);
	      }
	
	      identifier += character;
	      index++;
	    }
	
	    character = value.charAt(index);
	
	    if (character === C_BRACKET_CLOSE) {
	      referenceType = identifier ? REFERENCE_TYPE_FULL : REFERENCE_TYPE_COLLAPSED;
	      queue += identifier + character;
	      index++;
	    } else {
	      identifier = '';
	    }
	
	    subvalue += queue;
	    queue = '';
	  } else {
	    if (!content) {
	      return;
	    }
	
	    identifier = content;
	  }
	
	  /* Brackets cannot be inside the identifier. */
	  if (referenceType !== REFERENCE_TYPE_FULL && bracketed) {
	    return;
	  }
	
	  subvalue = intro + subvalue;
	
	  if (type === T_LINK && self.inLink) {
	    return null;
	  }
	
	  /* istanbul ignore if - never used (yet) */
	  if (silent) {
	    return true;
	  }
	
	  if (type === T_FOOTNOTE && content.indexOf(' ') !== -1) {
	    return eat(subvalue)({
	      type: 'footnote',
	      children: this.tokenizeInline(content, eat.now())
	    });
	  }
	
	  now = eat.now();
	  now.column += intro.length;
	  now.offset += intro.length;
	  identifier = referenceType === REFERENCE_TYPE_FULL ? identifier : content;
	
	  node = {
	    type: type + 'Reference',
	    identifier: normalize(identifier)
	  };
	
	  if (type === T_LINK || type === T_IMAGE) {
	    node.referenceType = referenceType;
	  }
	
	  if (type === T_LINK) {
	    exit = self.enterLink();
	    node.children = self.tokenizeInline(content, now);
	    exit();
	  } else if (type === T_IMAGE) {
	    node.alt = self.decode.raw(self.unescape(content), now) || null;
	  }
	
	  return eat(subvalue)(node);
	}


/***/ }),
/* 553 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var trim = __webpack_require__(45);
	var whitespace = __webpack_require__(14);
	var locate = __webpack_require__(528);
	
	module.exports = strong;
	strong.locator = locate;
	
	var C_ASTERISK = '*';
	var C_UNDERSCORE = '_';
	
	function strong(eat, value, silent) {
	  var self = this;
	  var index = 0;
	  var character = value.charAt(index);
	  var now;
	  var pedantic;
	  var marker;
	  var queue;
	  var subvalue;
	  var length;
	  var prev;
	
	  if (
	    (character !== C_ASTERISK && character !== C_UNDERSCORE) ||
	    value.charAt(++index) !== character
	  ) {
	    return;
	  }
	
	  pedantic = self.options.pedantic;
	  marker = character;
	  subvalue = marker + marker;
	  length = value.length;
	  index++;
	  queue = '';
	  character = '';
	
	  if (pedantic && whitespace(value.charAt(index))) {
	    return;
	  }
	
	  while (index < length) {
	    prev = character;
	    character = value.charAt(index);
	
	    if (
	      character === marker &&
	      value.charAt(index + 1) === marker &&
	      (!pedantic || !whitespace(prev))
	    ) {
	      character = value.charAt(index + 2);
	
	      if (character !== marker) {
	        if (!trim(queue)) {
	          return;
	        }
	
	        /* istanbul ignore if - never used (yet) */
	        if (silent) {
	          return true;
	        }
	
	        now = eat.now();
	        now.column += 2;
	        now.offset += 2;
	
	        return eat(subvalue + queue + subvalue)({
	          type: 'strong',
	          children: self.tokenizeInline(queue, now)
	        });
	      }
	    }
	
	    if (!pedantic && character === '\\') {
	      queue += character;
	      character = value.charAt(++index);
	    }
	
	    queue += character;
	    index++;
	  }
	}


/***/ }),
/* 554 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var whitespace = __webpack_require__(14);
	
	module.exports = table;
	
	var C_BACKSLASH = '\\';
	var C_TICK = '`';
	var C_DASH = '-';
	var C_PIPE = '|';
	var C_COLON = ':';
	var C_SPACE = ' ';
	var C_NEWLINE = '\n';
	var C_TAB = '\t';
	
	var MIN_TABLE_COLUMNS = 1;
	var MIN_TABLE_ROWS = 2;
	
	var TABLE_ALIGN_LEFT = 'left';
	var TABLE_ALIGN_CENTER = 'center';
	var TABLE_ALIGN_RIGHT = 'right';
	var TABLE_ALIGN_NONE = null;
	
	function table(eat, value, silent) {
	  var self = this;
	  var index;
	  var alignments;
	  var alignment;
	  var subvalue;
	  var row;
	  var length;
	  var lines;
	  var queue;
	  var character;
	  var hasDash;
	  var align;
	  var cell;
	  var preamble;
	  var count;
	  var opening;
	  var now;
	  var position;
	  var lineCount;
	  var line;
	  var rows;
	  var table;
	  var lineIndex;
	  var pipeIndex;
	  var first;
	
	  /* Exit when not in gfm-mode. */
	  if (!self.options.gfm) {
	    return;
	  }
	
	  /* Get the rows.
	   * Detecting tables soon is hard, so there are some
	   * checks for performance here, such as the minimum
	   * number of rows, and allowed characters in the
	   * alignment row. */
	  index = 0;
	  lineCount = 0;
	  length = value.length + 1;
	  lines = [];
	
	  while (index < length) {
	    lineIndex = value.indexOf(C_NEWLINE, index);
	    pipeIndex = value.indexOf(C_PIPE, index + 1);
	
	    if (lineIndex === -1) {
	      lineIndex = value.length;
	    }
	
	    if (pipeIndex === -1 || pipeIndex > lineIndex) {
	      if (lineCount < MIN_TABLE_ROWS) {
	        return;
	      }
	
	      break;
	    }
	
	    lines.push(value.slice(index, lineIndex));
	    lineCount++;
	    index = lineIndex + 1;
	  }
	
	  /* Parse the alignment row. */
	  subvalue = lines.join(C_NEWLINE);
	  alignments = lines.splice(1, 1)[0] || [];
	  index = 0;
	  length = alignments.length;
	  lineCount--;
	  alignment = false;
	  align = [];
	
	  while (index < length) {
	    character = alignments.charAt(index);
	
	    if (character === C_PIPE) {
	      hasDash = null;
	
	      if (alignment === false) {
	        if (first === false) {
	          return;
	        }
	      } else {
	        align.push(alignment);
	        alignment = false;
	      }
	
	      first = false;
	    } else if (character === C_DASH) {
	      hasDash = true;
	      alignment = alignment || TABLE_ALIGN_NONE;
	    } else if (character === C_COLON) {
	      if (alignment === TABLE_ALIGN_LEFT) {
	        alignment = TABLE_ALIGN_CENTER;
	      } else if (hasDash && alignment === TABLE_ALIGN_NONE) {
	        alignment = TABLE_ALIGN_RIGHT;
	      } else {
	        alignment = TABLE_ALIGN_LEFT;
	      }
	    } else if (!whitespace(character)) {
	      return;
	    }
	
	    index++;
	  }
	
	  if (alignment !== false) {
	    align.push(alignment);
	  }
	
	  /* Exit when without enough columns. */
	  if (align.length < MIN_TABLE_COLUMNS) {
	    return;
	  }
	
	  /* istanbul ignore if - never used (yet) */
	  if (silent) {
	    return true;
	  }
	
	  /* Parse the rows. */
	  position = -1;
	  rows = [];
	
	  table = eat(subvalue).reset({
	    type: 'table',
	    align: align,
	    children: rows
	  });
	
	  while (++position < lineCount) {
	    line = lines[position];
	    row = {type: 'tableRow', children: []};
	
	    /* Eat a newline character when this is not the
	     * first row. */
	    if (position) {
	      eat(C_NEWLINE);
	    }
	
	    /* Eat the row. */
	    eat(line).reset(row, table);
	
	    length = line.length + 1;
	    index = 0;
	    queue = '';
	    cell = '';
	    preamble = true;
	    count = null;
	    opening = null;
	
	    while (index < length) {
	      character = line.charAt(index);
	
	      if (character === C_TAB || character === C_SPACE) {
	        if (cell) {
	          queue += character;
	        } else {
	          eat(character);
	        }
	
	        index++;
	        continue;
	      }
	
	      if (character === '' || character === C_PIPE) {
	        if (preamble) {
	          eat(character);
	        } else {
	          if (character && opening) {
	            queue += character;
	            index++;
	            continue;
	          }
	
	          if ((cell || character) && !preamble) {
	            subvalue = cell;
	
	            if (queue.length > 1) {
	              if (character) {
	                subvalue += queue.slice(0, queue.length - 1);
	                queue = queue.charAt(queue.length - 1);
	              } else {
	                subvalue += queue;
	                queue = '';
	              }
	            }
	
	            now = eat.now();
	
	            eat(subvalue)({
	              type: 'tableCell',
	              children: self.tokenizeInline(cell, now)
	            }, row);
	          }
	
	          eat(queue + character);
	
	          queue = '';
	          cell = '';
	        }
	      } else {
	        if (queue) {
	          cell += queue;
	          queue = '';
	        }
	
	        cell += character;
	
	        if (character === C_BACKSLASH && index !== length - 2) {
	          cell += line.charAt(index + 1);
	          index++;
	        }
	
	        if (character === C_TICK) {
	          count = 1;
	
	          while (line.charAt(index + 1) === character) {
	            cell += character;
	            index++;
	            count++;
	          }
	
	          if (!opening) {
	            opening = count;
	          } else if (count >= opening) {
	            opening = 0;
	          }
	        }
	      }
	
	      preamble = false;
	      index++;
	    }
	
	    /* Eat the alignment row. */
	    if (!position) {
	      eat(C_NEWLINE + alignments);
	    }
	  }
	
	  return table;
	}


/***/ }),
/* 555 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = text;
	
	function text(eat, value, silent) {
	  var self = this;
	  var methods;
	  var tokenizers;
	  var index;
	  var length;
	  var subvalue;
	  var position;
	  var tokenizer;
	  var name;
	  var min;
	  var now;
	
	  /* istanbul ignore if - never used (yet) */
	  if (silent) {
	    return true;
	  }
	
	  methods = self.inlineMethods;
	  length = methods.length;
	  tokenizers = self.inlineTokenizers;
	  index = -1;
	  min = value.length;
	
	  while (++index < length) {
	    name = methods[index];
	
	    if (name === 'text' || !tokenizers[name]) {
	      continue;
	    }
	
	    tokenizer = tokenizers[name].locator;
	
	    if (!tokenizer) {
	      eat.file.fail('Missing locator: `' + name + '`');
	    }
	
	    position = tokenizer.call(self, value, 1);
	
	    if (position !== -1 && position < min) {
	      min = position;
	    }
	  }
	
	  subvalue = value.slice(0, min);
	  now = eat.now();
	
	  self.decode(subvalue, now, function (content, position, source) {
	    eat(source || content)({
	      type: 'text',
	      value: content
	    });
	  });
	}


/***/ }),
/* 556 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = thematicBreak;
	
	var C_NEWLINE = '\n';
	var C_TAB = '\t';
	var C_SPACE = ' ';
	var C_ASTERISK = '*';
	var C_UNDERSCORE = '_';
	var C_DASH = '-';
	
	var THEMATIC_BREAK_MARKER_COUNT = 3;
	
	function thematicBreak(eat, value, silent) {
	  var index = -1;
	  var length = value.length + 1;
	  var subvalue = '';
	  var character;
	  var marker;
	  var markerCount;
	  var queue;
	
	  while (++index < length) {
	    character = value.charAt(index);
	
	    if (character !== C_TAB && character !== C_SPACE) {
	      break;
	    }
	
	    subvalue += character;
	  }
	
	  if (
	    character !== C_ASTERISK &&
	    character !== C_DASH &&
	    character !== C_UNDERSCORE
	  ) {
	    return;
	  }
	
	  marker = character;
	  subvalue += character;
	  markerCount = 1;
	  queue = '';
	
	  while (++index < length) {
	    character = value.charAt(index);
	
	    if (character === marker) {
	      markerCount++;
	      subvalue += queue + marker;
	      queue = '';
	    } else if (character === C_SPACE) {
	      queue += character;
	    } else if (
	      markerCount >= THEMATIC_BREAK_MARKER_COUNT &&
	      (!character || character === C_NEWLINE)
	    ) {
	      subvalue += queue;
	
	      if (silent) {
	        return true;
	      }
	
	      return eat(subvalue)({type: 'thematicBreak'});
	    } else {
	      return;
	    }
	  }
	}


/***/ }),
/* 557 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var decode = __webpack_require__(116);
	var whitespace = __webpack_require__(14);
	var locate = __webpack_require__(529);
	
	module.exports = url;
	url.locator = locate;
	url.notInLink = true;
	
	var C_BRACKET_OPEN = '[';
	var C_BRACKET_CLOSE = ']';
	var C_PAREN_OPEN = '(';
	var C_PAREN_CLOSE = ')';
	var C_LT = '<';
	var C_AT_SIGN = '@';
	
	var HTTP_PROTOCOL = 'http://';
	var HTTPS_PROTOCOL = 'https://';
	var MAILTO_PROTOCOL = 'mailto:';
	
	var PROTOCOLS = [
	  HTTP_PROTOCOL,
	  HTTPS_PROTOCOL,
	  MAILTO_PROTOCOL
	];
	
	var PROTOCOLS_LENGTH = PROTOCOLS.length;
	
	function url(eat, value, silent) {
	  var self = this;
	  var subvalue;
	  var content;
	  var character;
	  var index;
	  var position;
	  var protocol;
	  var match;
	  var length;
	  var queue;
	  var parenCount;
	  var nextCharacter;
	  var exit;
	
	  if (!self.options.gfm) {
	    return;
	  }
	
	  subvalue = '';
	  index = -1;
	  length = PROTOCOLS_LENGTH;
	
	  while (++index < length) {
	    protocol = PROTOCOLS[index];
	    match = value.slice(0, protocol.length);
	
	    if (match.toLowerCase() === protocol) {
	      subvalue = match;
	      break;
	    }
	  }
	
	  if (!subvalue) {
	    return;
	  }
	
	  index = subvalue.length;
	  length = value.length;
	  queue = '';
	  parenCount = 0;
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (whitespace(character) || character === C_LT) {
	      break;
	    }
	
	    if (
	      character === '.' ||
	      character === ',' ||
	      character === ':' ||
	      character === ';' ||
	      character === '"' ||
	      character === '\'' ||
	      character === ')' ||
	      character === ']'
	    ) {
	      nextCharacter = value.charAt(index + 1);
	
	      if (!nextCharacter || whitespace(nextCharacter)) {
	        break;
	      }
	    }
	
	    if (character === C_PAREN_OPEN || character === C_BRACKET_OPEN) {
	      parenCount++;
	    }
	
	    if (character === C_PAREN_CLOSE || character === C_BRACKET_CLOSE) {
	      parenCount--;
	
	      if (parenCount < 0) {
	        break;
	      }
	    }
	
	    queue += character;
	    index++;
	  }
	
	  if (!queue) {
	    return;
	  }
	
	  subvalue += queue;
	  content = subvalue;
	
	  if (protocol === MAILTO_PROTOCOL) {
	    position = queue.indexOf(C_AT_SIGN);
	
	    if (position === -1 || position === length - 1) {
	      return;
	    }
	
	    content = content.substr(MAILTO_PROTOCOL.length);
	  }
	
	  /* istanbul ignore if - never used (yet) */
	  if (silent) {
	    return true;
	  }
	
	  exit = self.enterLink();
	  content = self.tokenizeInline(content, eat.now());
	  exit();
	
	  return eat(subvalue)({
	    type: 'link',
	    title: null,
	    url: decode(subvalue),
	    children: content
	  });
	}


/***/ }),
/* 558 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = factory;
	
	var MERGEABLE_NODES = {
	  text: mergeText,
	  blockquote: mergeBlockquote
	};
	
	/* Check whether a node is mergeable with adjacent nodes. */
	function mergeable(node) {
	  var start;
	  var end;
	
	  if (node.type !== 'text' || !node.position) {
	    return true;
	  }
	
	  start = node.position.start;
	  end = node.position.end;
	
	  /* Only merge nodes which occupy the same size as their
	   * `value`. */
	  return start.line !== end.line ||
	      end.column - start.column === node.value.length;
	}
	
	/* Merge two text nodes: `node` into `prev`. */
	function mergeText(prev, node) {
	  prev.value += node.value;
	
	  return prev;
	}
	
	/* Merge two blockquotes: `node` into `prev`, unless in
	 * CommonMark mode. */
	function mergeBlockquote(prev, node) {
	  if (this.options.commonmark) {
	    return node;
	  }
	
	  prev.children = prev.children.concat(node.children);
	
	  return prev;
	}
	
	/* Construct a tokenizer.  This creates both
	 * `tokenizeInline` and `tokenizeBlock`. */
	function factory(type) {
	  return tokenize;
	
	  /* Tokenizer for a bound `type`. */
	  function tokenize(value, location) {
	    var self = this;
	    var offset = self.offset;
	    var tokens = [];
	    var methods = self[type + 'Methods'];
	    var tokenizers = self[type + 'Tokenizers'];
	    var line = location.line;
	    var column = location.column;
	    var index;
	    var length;
	    var method;
	    var name;
	    var matched;
	    var valueLength;
	
	    /* Trim white space only lines. */
	    if (!value) {
	      return tokens;
	    }
	
	    /* Expose on `eat`. */
	    eat.now = now;
	    eat.file = self.file;
	
	    /* Sync initial offset. */
	    updatePosition('');
	
	    /* Iterate over `value`, and iterate over all
	     * tokenizers.  When one eats something, re-iterate
	     * with the remaining value.  If no tokenizer eats,
	     * something failed (should not happen) and an
	     * exception is thrown. */
	    while (value) {
	      index = -1;
	      length = methods.length;
	      matched = false;
	
	      while (++index < length) {
	        name = methods[index];
	        method = tokenizers[name];
	
	        if (
	          method &&
	          /* istanbul ignore next */ (!method.onlyAtStart || self.atStart) &&
	          (!method.notInList || !self.inList) &&
	          (!method.notInBlock || !self.inBlock) &&
	          (!method.notInLink || !self.inLink)
	        ) {
	          valueLength = value.length;
	
	          method.apply(self, [eat, value]);
	
	          matched = valueLength !== value.length;
	
	          if (matched) {
	            break;
	          }
	        }
	      }
	
	      /* istanbul ignore if */
	      if (!matched) {
	        self.file.fail(new Error('Infinite loop'), eat.now());
	      }
	    }
	
	    self.eof = now();
	
	    return tokens;
	
	    /* Update line, column, and offset based on
	     * `value`. */
	    function updatePosition(subvalue) {
	      var lastIndex = -1;
	      var index = subvalue.indexOf('\n');
	
	      while (index !== -1) {
	        line++;
	        lastIndex = index;
	        index = subvalue.indexOf('\n', index + 1);
	      }
	
	      if (lastIndex === -1) {
	        column += subvalue.length;
	      } else {
	        column = subvalue.length - lastIndex;
	      }
	
	      if (line in offset) {
	        if (lastIndex !== -1) {
	          column += offset[line];
	        } else if (column <= offset[line]) {
	          column = offset[line] + 1;
	        }
	      }
	    }
	
	    /* Get offset.  Called before the first character is
	     * eaten to retrieve the range's offsets. */
	    function getOffset() {
	      var indentation = [];
	      var pos = line + 1;
	
	      /* Done.  Called when the last character is
	       * eaten to retrieve the range’s offsets. */
	      return function () {
	        var last = line + 1;
	
	        while (pos < last) {
	          indentation.push((offset[pos] || 0) + 1);
	
	          pos++;
	        }
	
	        return indentation;
	      };
	    }
	
	    /* Get the current position. */
	    function now() {
	      var pos = {line: line, column: column};
	
	      pos.offset = self.toOffset(pos);
	
	      return pos;
	    }
	
	    /* Store position information for a node. */
	    function Position(start) {
	      this.start = start;
	      this.end = now();
	    }
	
	    /* Throw when a value is incorrectly eaten.
	     * This shouldn’t happen but will throw on new,
	     * incorrect rules. */
	    function validateEat(subvalue) {
	      /* istanbul ignore if */
	      if (value.substring(0, subvalue.length) !== subvalue) {
	        /* Capture stack-trace. */
	        self.file.fail(
	          new Error(
	            'Incorrectly eaten value: please report this ' +
	            'warning on http://git.io/vg5Ft'
	          ),
	          now()
	        );
	      }
	    }
	
	    /* Mark position and patch `node.position`. */
	    function position() {
	      var before = now();
	
	      return update;
	
	      /* Add the position to a node. */
	      function update(node, indent) {
	        var prev = node.position;
	        var start = prev ? prev.start : before;
	        var combined = [];
	        var n = prev && prev.end.line;
	        var l = before.line;
	
	        node.position = new Position(start);
	
	        /* If there was already a `position`, this
	         * node was merged.  Fixing `start` wasn’t
	         * hard, but the indent is different.
	         * Especially because some information, the
	         * indent between `n` and `l` wasn’t
	         * tracked.  Luckily, that space is
	         * (should be?) empty, so we can safely
	         * check for it now. */
	        if (prev && indent && prev.indent) {
	          combined = prev.indent;
	
	          if (n < l) {
	            while (++n < l) {
	              combined.push((offset[n] || 0) + 1);
	            }
	
	            combined.push(before.column);
	          }
	
	          indent = combined.concat(indent);
	        }
	
	        node.position.indent = indent || [];
	
	        return node;
	      }
	    }
	
	    /* Add `node` to `parent`s children or to `tokens`.
	     * Performs merges where possible. */
	    function add(node, parent) {
	      var children = parent ? parent.children : tokens;
	      var prev = children[children.length - 1];
	
	      if (
	        prev &&
	        node.type === prev.type &&
	        node.type in MERGEABLE_NODES &&
	        mergeable(prev) &&
	        mergeable(node)
	      ) {
	        node = MERGEABLE_NODES[node.type].call(self, prev, node);
	      }
	
	      if (node !== prev) {
	        children.push(node);
	      }
	
	      if (self.atStart && tokens.length !== 0) {
	        self.exitStart();
	      }
	
	      return node;
	    }
	
	    /* Remove `subvalue` from `value`.
	     * `subvalue` must be at the start of `value`. */
	    function eat(subvalue) {
	      var indent = getOffset();
	      var pos = position();
	      var current = now();
	
	      validateEat(subvalue);
	
	      apply.reset = reset;
	      reset.test = test;
	      apply.test = test;
	
	      value = value.substring(subvalue.length);
	
	      updatePosition(subvalue);
	
	      indent = indent();
	
	      return apply;
	
	      /* Add the given arguments, add `position` to
	       * the returned node, and return the node. */
	      function apply(node, parent) {
	        return pos(add(pos(node), parent), indent);
	      }
	
	      /* Functions just like apply, but resets the
	       * content:  the line and column are reversed,
	       * and the eaten value is re-added.
	       * This is useful for nodes with a single
	       * type of content, such as lists and tables.
	       * See `apply` above for what parameters are
	       * expected. */
	      function reset() {
	        var node = apply.apply(null, arguments);
	
	        line = current.line;
	        column = current.column;
	        value = subvalue + value;
	
	        return node;
	      }
	
	      /* Test the position, after eating, and reverse
	       * to a not-eaten state. */
	      function test() {
	        var result = pos({});
	
	        line = current.line;
	        column = current.column;
	        value = subvalue + value;
	
	        return result.position;
	      }
	    }
	  }
	}


/***/ }),
/* 559 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = factory;
	
	/* Factory to de-escape a value, based on a list at `key`
	 * in `ctx`. */
	function factory(ctx, key) {
	  return unescape;
	
	  /* De-escape a string using the expression at `key`
	   * in `ctx`. */
	  function unescape(value) {
	    var prev = 0;
	    var index = value.indexOf('\\');
	    var escape = ctx[key];
	    var queue = [];
	    var character;
	
	    while (index !== -1) {
	      queue.push(value.slice(prev, index));
	      prev = index + 1;
	      character = value.charAt(prev);
	
	      /* If the following character is not a valid escape,
	       * add the slash. */
	      if (!character || escape.indexOf(character) === -1) {
	        queue.push('\\');
	      }
	
	      index = value.indexOf('\\', prev);
	    }
	
	    queue.push(value.slice(prev));
	
	    return queue.join('');
	  }
	}


/***/ }),
/* 560 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var trim = __webpack_require__(45);
	var repeat = __webpack_require__(139);
	var getIndent = __webpack_require__(215);
	
	module.exports = indentation;
	
	var C_SPACE = ' ';
	var C_NEWLINE = '\n';
	var C_TAB = '\t';
	
	/* Remove the minimum indent from every line in `value`.
	 * Supports both tab, spaced, and mixed indentation (as
	 * well as possible). */
	function indentation(value, maximum) {
	  var values = value.split(C_NEWLINE);
	  var position = values.length + 1;
	  var minIndent = Infinity;
	  var matrix = [];
	  var index;
	  var indentation;
	  var stops;
	  var padding;
	
	  values.unshift(repeat(C_SPACE, maximum) + '!');
	
	  while (position--) {
	    indentation = getIndent(values[position]);
	
	    matrix[position] = indentation.stops;
	
	    if (trim(values[position]).length === 0) {
	      continue;
	    }
	
	    if (indentation.indent) {
	      if (indentation.indent > 0 && indentation.indent < minIndent) {
	        minIndent = indentation.indent;
	      }
	    } else {
	      minIndent = Infinity;
	
	      break;
	    }
	  }
	
	  if (minIndent !== Infinity) {
	    position = values.length;
	
	    while (position--) {
	      stops = matrix[position];
	      index = minIndent;
	
	      while (index && !(index in stops)) {
	        index--;
	      }
	
	      if (
	        trim(values[position]).length !== 0 &&
	        minIndent &&
	        index !== minIndent
	      ) {
	        padding = C_TAB;
	      } else {
	        padding = '';
	      }
	
	      values[position] = padding + values[position].slice(
	        index in stops ? stops[index] + 1 : 0
	      );
	    }
	  }
	
	  values.shift();
	
	  return values.join(C_NEWLINE);
	}


/***/ }),
/* 561 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var path = __webpack_require__(178);
	
	function replaceExt(npath, ext) {
	  if (typeof npath !== 'string') {
	    return npath;
	  }
	
	  if (npath.length === 0) {
	    return npath;
	  }
	
	  var nFileName = path.basename(npath, path.extname(npath)) + ext;
	  return path.join(path.dirname(npath), nFileName);
	}
	
	module.exports = replaceExt;


/***/ }),
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isArrayish = __webpack_require__(387);
	
	var concat = Array.prototype.concat;
	var slice = Array.prototype.slice;
	
	var swizzle = module.exports = function swizzle(args) {
		var results = [];
	
		for (var i = 0, len = args.length; i < len; i++) {
			var arg = args[i];
	
			if (isArrayish(arg)) {
				// http://jsperf.com/javascript-array-concat-vs-push/98
				results = concat.call(results, slice.call(arg));
			} else {
				results.push(arg);
			}
		}
	
		return results;
	};
	
	swizzle.wrap = function (fn) {
		return function () {
			return fn(swizzle(arguments));
		};
	};


/***/ }),
/* 566 */
/***/ (function(module, exports) {

	/**
	 * @author Titus Wormer
	 * @copyright 2016 Titus Wormer
	 * @license MIT
	 * @module state-toggle
	 * @fileoverview Enter/exit a state.
	 */
	
	'use strict';
	
	/* eslint-env commonjs */
	
	/* Expose. */
	module.exports = factory;
	
	/**
	 * Construct a state `toggler`: a function which inverses
	 * `property` in context based on its current value.
	 * The by `toggler` returned function restores that value.
	 *
	 * @param {string} key - Property to toggle.
	 * @param {boolean} state - Default state.
	 * @param {Object?} [ctx] - Context object.
	 * @return {Function} - Enter.
	 */
	function factory(key, state, ctx) {
	  /**
	   * Enter a state.
	   *
	   * @return {Function} - Exit state.
	   */
	  return function () {
	    var context = ctx || this;
	    var current = context[key];
	
	    context[key] = !state;
	
	    /**
	     * Cancel state to its value before entering.
	     */
	    return function () {
	      context[key] = current;
	    };
	  };
	}


/***/ }),
/* 567 */
/***/ (function(module, exports, __webpack_require__) {

	var SpriteSymbol = __webpack_require__(27);
	var sprite = __webpack_require__(23);
	var symbol = new SpriteSymbol({
	  "id": "ca-icon-chevron-down",
	  "use": "ca-icon-chevron-down-usage",
	  "viewBox": "0 0 20 20",
	  "content": "<symbol viewBox=\"0 0 20 20\" id=\"ca-icon-chevron-down\"><defs><path id=\"ca-icon-chevron-down_a\" d=\"M6.18 6.845L10 10.747l3.82-3.902L15 8.049l-5 5.106-5-5.106z\" /></defs><use fill=\"currentColor\" xlink:href=\"#ca-icon-chevron-down_a\" fill-rule=\"evenodd\" /></symbol>"
	});
	var result = sprite.add(symbol);
	module.exports = symbol

/***/ }),
/* 568 */
/***/ (function(module, exports, __webpack_require__) {

	var SpriteSymbol = __webpack_require__(27);
	var sprite = __webpack_require__(23);
	var symbol = new SpriteSymbol({
	  "id": "ca-icon-chevron-up",
	  "use": "ca-icon-chevron-up-usage",
	  "viewBox": "0 0 20 20",
	  "content": "<symbol viewBox=\"0 0 20 20\" id=\"ca-icon-chevron-up\"><defs><path id=\"ca-icon-chevron-up_a\" d=\"M6.179 13.155L10 9.253l3.821 3.902 1.18-1.204L10 6.845l-5 5.106z\" /></defs><use fill=\"currentColor\" xlink:href=\"#ca-icon-chevron-up_a\" fill-rule=\"evenodd\" /></symbol>"
	});
	var result = sprite.add(symbol);
	module.exports = symbol

/***/ }),
/* 569 */,
/* 570 */
/***/ (function(module, exports, __webpack_require__) {

	var SpriteSymbol = __webpack_require__(27);
	var sprite = __webpack_require__(23);
	var symbol = new SpriteSymbol({
	  "id": "ca-icon-duplicate",
	  "use": "ca-icon-duplicate-usage",
	  "viewBox": "0 0 20 20",
	  "content": "<symbol viewBox=\"0 0 20 20\" id=\"ca-icon-duplicate\"><defs><path d=\"M13.273 2H4.545c-.803 0-1.454.65-1.454 1.455v10.181h1.454V3.455h8.728V2zm2.182 2.91h-8C6.65 4.91 6 5.56 6 6.363v10.181C6 17.35 6.65 18 7.455 18h8c.803 0 1.454-.65 1.454-1.455V6.364c0-.804-.65-1.455-1.454-1.455z\" id=\"ca-icon-duplicate_a\" /></defs><use fill=\"currentColor\" xlink:href=\"#ca-icon-duplicate_a\" fill-rule=\"evenodd\" /></symbol>"
	});
	var result = sprite.add(symbol);
	module.exports = symbol

/***/ }),
/* 571 */
/***/ (function(module, exports, __webpack_require__) {

	var SpriteSymbol = __webpack_require__(27);
	var sprite = __webpack_require__(23);
	var symbol = new SpriteSymbol({
	  "id": "ca-icon-ellipsis",
	  "use": "ca-icon-ellipsis-usage",
	  "viewBox": "0 0 20 20",
	  "content": "<symbol viewBox=\"0 0 20 20\" id=\"ca-icon-ellipsis\"><defs><path d=\"M4 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\" id=\"ca-icon-ellipsis_a\" /></defs><use fill=\"currentColor\" xlink:href=\"#ca-icon-ellipsis_a\" fill-rule=\"evenodd\" /></symbol>"
	});
	var result = sprite.add(symbol);
	module.exports = symbol

/***/ }),
/* 572 */
/***/ (function(module, exports, __webpack_require__) {

	var SpriteSymbol = __webpack_require__(27);
	var sprite = __webpack_require__(23);
	var symbol = new SpriteSymbol({
	  "id": "ca-icon-exclamation",
	  "use": "ca-icon-exclamation-usage",
	  "viewBox": "0 0 20 20",
	  "content": "<symbol viewBox=\"0 0 20 20\" id=\"ca-icon-exclamation\"><defs><path d=\"M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm.8 12v-1.6H9.2V14h1.6zm0-3.2V6H9.2v4.8h1.6z\" id=\"ca-icon-exclamation_a\" /></defs><use fill=\"currentColor\" xlink:href=\"#ca-icon-exclamation_a\" fill-rule=\"evenodd\" /></symbol>"
	});
	var result = sprite.add(symbol);
	module.exports = symbol

/***/ }),
/* 573 */
/***/ (function(module, exports) {

	'use strict';
	
	/* Expose. */
	module.exports = trough;
	
	/* Methods. */
	var slice = [].slice;
	
	/* Create new middleware. */
	function trough() {
	  var fns = [];
	  var middleware = {};
	
	  middleware.run = run;
	  middleware.use = use;
	
	  return middleware;
	
	  /* Run `fns`.  Last argument must be
	   * a completion handler. */
	  function run() {
	    var index = -1;
	    var input = slice.call(arguments, 0, -1);
	    var done = arguments[arguments.length - 1];
	
	    if (typeof done !== 'function') {
	      throw new Error('Expected function as last argument, not ' + done);
	    }
	
	    next.apply(null, [null].concat(input));
	
	    /* Run the next `fn`, if any. */
	    function next(err) {
	      var fn = fns[++index];
	      var params = slice.call(arguments, 0);
	      var values = params.slice(1);
	      var length = input.length;
	      var pos = -1;
	
	      if (err) {
	        done(err);
	        return;
	      }
	
	      /* Copy non-nully input into values. */
	      while (++pos < length) {
	        if (values[pos] === null || values[pos] === undefined) {
	          values[pos] = input[pos];
	        }
	      }
	
	      input = values;
	
	      /* Next or done. */
	      if (fn) {
	        wrap(fn, next).apply(null, input);
	      } else {
	        done.apply(null, [null].concat(input));
	      }
	    }
	  }
	
	  /* Add `fn` to the list. */
	  function use(fn) {
	    if (typeof fn !== 'function') {
	      throw new Error('Expected `fn` to be a function, not ' + fn);
	    }
	
	    fns.push(fn);
	
	    return middleware;
	  }
	}
	
	/* Wrap `fn`.  Can be sync or async; return a promise,
	 * receive a completion handler, return new values and
	 * errors. */
	function wrap(fn, next) {
	  var invoked;
	
	  return wrapped;
	
	  function wrapped() {
	    var params = slice.call(arguments, 0);
	    var callback = fn.length > params.length;
	    var result;
	
	    if (callback) {
	      params.push(done);
	    }
	
	    try {
	      result = fn.apply(null, params);
	    } catch (err) {
	      /* Well, this is quite the pickle.  `fn` received
	       * a callback and invoked it (thus continuing the
	       * pipeline), but later also threw an error.
	       * We’re not about to restart the pipeline again,
	       * so the only thing left to do is to throw the
	       * thing instea. */
	      if (callback && invoked) {
	        throw err;
	      }
	
	      return done(err);
	    }
	
	    if (!callback) {
	      if (result && typeof result.then === 'function') {
	        result.then(then, done);
	      } else if (result instanceof Error) {
	        done(result);
	      } else {
	        then(result);
	      }
	    }
	  }
	
	  /* Invoke `next`, only once. */
	  function done() {
	    if (!invoked) {
	      invoked = true;
	
	      next.apply(null, arguments);
	    }
	  }
	
	  /* Invoke `done` with one value.
	   * Tracks if an error is passed, too. */
	  function then(value) {
	    done(null, value);
	  }
	}


/***/ }),
/* 574 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module unherit
	 * @fileoverview Create a custom constructor which can be modified
	 *   without affecting the original class.
	 */
	
	'use strict';
	
	/* Dependencies. */
	var xtend = __webpack_require__(28);
	var inherits = __webpack_require__(385);
	
	/* Expose. */
	module.exports = unherit;
	
	/**
	 * Create a custom constructor which can be modified
	 * without affecting the original class.
	 *
	 * @param {Function} Super - Super-class.
	 * @return {Function} - Constructor acting like `Super`,
	 *   which can be modified without affecting the original
	 *   class.
	 */
	function unherit(Super) {
	  var result;
	  var key;
	  var value;
	
	  inherits(Of, Super);
	  inherits(From, Of);
	
	  /* Clone values. */
	  result = Of.prototype;
	
	  for (key in result) {
	    value = result[key];
	
	    if (value && typeof value === 'object') {
	      result[key] = 'concat' in value ? value.concat() : xtend(value);
	    }
	  }
	
	  return Of;
	
	  /**
	   * Constructor accepting a single argument,
	   * which itself is an `arguments` object.
	   */
	  function From(parameters) {
	    return Super.apply(this, parameters);
	  }
	
	  /**
	   * Constructor accepting variadic arguments.
	   */
	  function Of() {
	    if (!(this instanceof Of)) {
	      return new From(arguments);
	    }
	
	    return Super.apply(this, arguments);
	  }
	}


/***/ }),
/* 575 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	/* Dependencies. */
	var extend = __webpack_require__(333);
	var bail = __webpack_require__(260);
	var vfile = __webpack_require__(583);
	var trough = __webpack_require__(573);
	var string = __webpack_require__(586);
	var func = __webpack_require__(585);
	var plain = __webpack_require__(390);
	
	/* Expose a frozen processor. */
	module.exports = unified().freeze();
	
	var slice = [].slice;
	var own = {}.hasOwnProperty;
	
	/* Process pipeline. */
	var pipeline = trough().use(pipelineParse).use(pipelineRun).use(pipelineStringify);
	
	function pipelineParse(p, ctx) {
	  ctx.tree = p.parse(ctx.file);
	}
	
	function pipelineRun(p, ctx, next) {
	  p.run(ctx.tree, ctx.file, done);
	
	  function done(err, tree, file) {
	    if (err) {
	      next(err);
	    } else {
	      ctx.tree = tree;
	      ctx.file = file;
	      next();
	    }
	  }
	}
	
	function pipelineStringify(p, ctx) {
	  ctx.file.contents = p.stringify(ctx.tree, ctx.file);
	}
	
	/* Function to create the first processor. */
	function unified() {
	  var attachers = [];
	  var transformers = trough();
	  var namespace = {};
	  var frozen = false;
	  var freezeIndex = -1;
	
	  /* Data management. */
	  processor.data = data;
	
	  /* Lock. */
	  processor.freeze = freeze;
	
	  /* Plug-ins. */
	  processor.attachers = attachers;
	  processor.use = use;
	
	  /* API. */
	  processor.parse = parse;
	  processor.stringify = stringify;
	  processor.run = run;
	  processor.runSync = runSync;
	  processor.process = process;
	  processor.processSync = processSync;
	
	  /* Expose. */
	  return processor;
	
	  /* Create a new processor based on the processor
	   * in the current scope. */
	  function processor() {
	    var destination = unified();
	    var length = attachers.length;
	    var index = -1;
	
	    while (++index < length) {
	      destination.use.apply(null, attachers[index]);
	    }
	
	    destination.data(extend(true, {}, namespace));
	
	    return destination;
	  }
	
	  /* Freeze: used to signal a processor that has finished
	   * configuration.
	   *
	   * For example, take unified itself.  It’s frozen.
	   * Plug-ins should not be added to it.  Rather, it should
	   * be extended, by invoking it, before modifying it.
	   *
	   * In essence, always invoke this when exporting a
	   * processor. */
	  function freeze() {
	    var values;
	    var plugin;
	    var options;
	    var transformer;
	
	    if (frozen) {
	      return processor;
	    }
	
	    while (++freezeIndex < attachers.length) {
	      values = attachers[freezeIndex];
	      plugin = values[0];
	      options = values[1];
	      transformer = null;
	
	      if (options === false) {
	        continue;
	      }
	
	      if (options === true) {
	        values[1] = undefined;
	      }
	
	      transformer = plugin.apply(processor, values.slice(1));
	
	      if (func(transformer)) {
	        transformers.use(transformer);
	      }
	    }
	
	    frozen = true;
	    freezeIndex = Infinity;
	
	    return processor;
	  }
	
	  /* Data management.
	   * Getter / setter for processor-specific informtion. */
	  function data(key, value) {
	    if (string(key)) {
	      /* Set `key`. */
	      if (arguments.length === 2) {
	        assertUnfrozen('data', frozen);
	
	        namespace[key] = value;
	
	        return processor;
	      }
	
	      /* Get `key`. */
	      return (own.call(namespace, key) && namespace[key]) || null;
	    }
	
	    /* Set space. */
	    if (key) {
	      assertUnfrozen('data', frozen);
	      namespace = key;
	      return processor;
	    }
	
	    /* Get space. */
	    return namespace;
	  }
	
	  /* Plug-in management.
	   *
	   * Pass it:
	   * *   an attacher and options,
	   * *   a preset,
	   * *   a list of presets, attachers, and arguments (list
	   *     of attachers and options). */
	  function use(value) {
	    var settings;
	
	    assertUnfrozen('use', frozen);
	
	    if (value === null || value === undefined) {
	      /* Empty */
	    } else if (func(value)) {
	      addPlugin.apply(null, arguments);
	    } else if (typeof value === 'object') {
	      if ('length' in value) {
	        addList(value);
	      } else {
	        addPreset(value);
	      }
	    } else {
	      throw new Error('Expected usable value, not `' + value + '`');
	    }
	
	    if (settings) {
	      namespace.settings = extend(namespace.settings || {}, settings);
	    }
	
	    return processor;
	
	    function addPreset(result) {
	      addList(result.plugins);
	
	      if (result.settings) {
	        settings = extend(settings || {}, result.settings);
	      }
	    }
	
	    function add(value) {
	      if (func(value)) {
	        addPlugin(value);
	      } else if (typeof value === 'object') {
	        if ('length' in value) {
	          addPlugin.apply(null, value);
	        } else {
	          addPreset(value);
	        }
	      } else {
	        throw new Error('Expected usable value, not `' + value + '`');
	      }
	    }
	
	    function addList(plugins) {
	      var length;
	      var index;
	
	      if (plugins === null || plugins === undefined) {
	        /* Empty */
	      } else if (typeof plugins === 'object' && 'length' in plugins) {
	        length = plugins.length;
	        index = -1;
	
	        while (++index < length) {
	          add(plugins[index]);
	        }
	      } else {
	        throw new Error('Expected a list of plugins, not `' + plugins + '`');
	      }
	    }
	
	    function addPlugin(plugin, value) {
	      var entry = find(plugin);
	
	      if (entry) {
	        if (plain(entry[1]) && plain(value)) {
	          value = extend(entry[1], value);
	        }
	
	        entry[1] = value;
	      } else {
	        attachers.push(slice.call(arguments));
	      }
	    }
	  }
	
	  function find(plugin) {
	    var length = attachers.length;
	    var index = -1;
	    var entry;
	
	    while (++index < length) {
	      entry = attachers[index];
	
	      if (entry[0] === plugin) {
	        return entry;
	      }
	    }
	  }
	
	  /* Parse a file (in string or VFile representation)
	   * into a Unist node using the `Parser` on the
	   * processor. */
	  function parse(doc) {
	    var file = vfile(doc);
	    var Parser;
	
	    freeze();
	    Parser = processor.Parser;
	    assertParser('parse', Parser);
	
	    if (newable(Parser)) {
	      return new Parser(String(file), file).parse();
	    }
	
	    return Parser(String(file), file); // eslint-disable-line new-cap
	  }
	
	  /* Run transforms on a Unist node representation of a file
	   * (in string or VFile representation), async. */
	  function run(node, file, cb) {
	    assertNode(node);
	    freeze();
	
	    if (!cb && func(file)) {
	      cb = file;
	      file = null;
	    }
	
	    if (!cb) {
	      return new Promise(executor);
	    }
	
	    executor(null, cb);
	
	    function executor(resolve, reject) {
	      transformers.run(node, vfile(file), done);
	
	      function done(err, tree, file) {
	        tree = tree || node;
	        if (err) {
	          reject(err);
	        } else if (resolve) {
	          resolve(tree);
	        } else {
	          cb(null, tree, file);
	        }
	      }
	    }
	  }
	
	  /* Run transforms on a Unist node representation of a file
	   * (in string or VFile representation), sync. */
	  function runSync(node, file) {
	    var complete = false;
	    var result;
	
	    run(node, file, done);
	
	    assertDone('runSync', 'run', complete);
	
	    return result;
	
	    function done(err, tree) {
	      complete = true;
	      bail(err);
	      result = tree;
	    }
	  }
	
	  /* Stringify a Unist node representation of a file
	   * (in string or VFile representation) into a string
	   * using the `Compiler` on the processor. */
	  function stringify(node, doc) {
	    var file = vfile(doc);
	    var Compiler;
	
	    freeze();
	    Compiler = processor.Compiler;
	    assertCompiler('stringify', Compiler);
	    assertNode(node);
	
	    if (newable(Compiler)) {
	      return new Compiler(node, file).compile();
	    }
	
	    return Compiler(node, file); // eslint-disable-line new-cap
	  }
	
	  /* Parse a file (in string or VFile representation)
	   * into a Unist node using the `Parser` on the processor,
	   * then run transforms on that node, and compile the
	   * resulting node using the `Compiler` on the processor,
	   * and store that result on the VFile. */
	  function process(doc, cb) {
	    freeze();
	    assertParser('process', processor.Parser);
	    assertCompiler('process', processor.Compiler);
	
	    if (!cb) {
	      return new Promise(executor);
	    }
	
	    executor(null, cb);
	
	    function executor(resolve, reject) {
	      var file = vfile(doc);
	
	      pipeline.run(processor, {file: file}, done);
	
	      function done(err) {
	        if (err) {
	          reject(err);
	        } else if (resolve) {
	          resolve(file);
	        } else {
	          cb(null, file);
	        }
	      }
	    }
	  }
	
	  /* Process the given document (in string or VFile
	   * representation), sync. */
	  function processSync(doc) {
	    var complete = false;
	    var file;
	
	    freeze();
	    assertParser('processSync', processor.Parser);
	    assertCompiler('processSync', processor.Compiler);
	    file = vfile(doc);
	
	    process(file, done);
	
	    assertDone('processSync', 'process', complete);
	
	    return file;
	
	    function done(err) {
	      complete = true;
	      bail(err);
	    }
	  }
	}
	
	/* Check if `func` is a constructor. */
	function newable(value) {
	  return func(value) && keys(value.prototype);
	}
	
	/* Check if `value` is an object with keys. */
	function keys(value) {
	  var key;
	  for (key in value) {
	    return true;
	  }
	  return false;
	}
	
	/* Assert a parser is available. */
	function assertParser(name, Parser) {
	  if (!func(Parser)) {
	    throw new Error('Cannot `' + name + '` without `Parser`');
	  }
	}
	
	/* Assert a compiler is available. */
	function assertCompiler(name, Compiler) {
	  if (!func(Compiler)) {
	    throw new Error('Cannot `' + name + '` without `Compiler`');
	  }
	}
	
	/* Assert the processor is not frozen. */
	function assertUnfrozen(name, frozen) {
	  if (frozen) {
	    throw new Error(
	      'Cannot invoke `' + name + '` on a frozen processor.\n' +
	      'Create a new processor first, by invoking it: ' +
	      'use `processor()` instead of `processor`.'
	    );
	  }
	}
	
	/* Assert `node` is a Unist node. */
	function assertNode(node) {
	  if (!node || !string(node.type)) {
	    throw new Error('Expected node, got `' + node + '`');
	  }
	}
	
	/* Assert that `complete` is `true`. */
	function assertDone(name, asyncName, complete) {
	  if (!complete) {
	    throw new Error('`' + name + '` finished async. Use `' + asyncName + '` instead');
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ }),
/* 576 */
/***/ (function(module, exports) {

	'use strict';
	
	/* eslint-disable max-params */
	
	/* Expose. */
	module.exports = is;
	
	/* Assert if `test` passes for `node`.
	 * When a `parent` node is known the `index` of node */
	function is(test, node, index, parent, context) {
	  var hasParent = parent !== null && parent !== undefined;
	  var hasIndex = index !== null && index !== undefined;
	  var check = convert(test);
	
	  if (
	    hasIndex &&
	    (typeof index !== 'number' || index < 0 || index === Infinity)
	  ) {
	    throw new Error('Expected positive finite index or child node');
	  }
	
	  if (hasParent && (!is(null, parent) || !parent.children)) {
	    throw new Error('Expected parent node');
	  }
	
	  if (!node || !node.type || typeof node.type !== 'string') {
	    return false;
	  }
	
	  if (hasParent !== hasIndex) {
	    throw new Error('Expected both parent and index');
	  }
	
	  return Boolean(check.call(context, node, index, parent));
	}
	
	function convert(test) {
	  if (typeof test === 'string') {
	    return typeFactory(test);
	  }
	
	  if (test === null || test === undefined) {
	    return ok;
	  }
	
	  if (typeof test === 'object') {
	    return ('length' in test ? anyFactory : matchesFactory)(test);
	  }
	
	  if (typeof test === 'function') {
	    return test;
	  }
	
	  throw new Error('Expected function, string, or object as test');
	}
	
	function convertAll(tests) {
	  var results = [];
	  var length = tests.length;
	  var index = -1;
	
	  while (++index < length) {
	    results[index] = convert(tests[index]);
	  }
	
	  return results;
	}
	
	/* Utility assert each property in `test` is represented
	 * in `node`, and each values are strictly equal. */
	function matchesFactory(test) {
	  return matches;
	
	  function matches(node) {
	    var key;
	
	    for (key in test) {
	      if (node[key] !== test[key]) {
	        return false;
	      }
	    }
	
	    return true;
	  }
	}
	
	function anyFactory(tests) {
	  var checks = convertAll(tests);
	  var length = checks.length;
	
	  return matches;
	
	  function matches() {
	    var index = -1;
	
	    while (++index < length) {
	      if (checks[index].apply(this, arguments)) {
	        return true;
	      }
	    }
	
	    return false;
	  }
	}
	
	/* Utility to convert a string into a function which checks
	 * a given node’s type for said string. */
	function typeFactory(test) {
	  return type;
	
	  function type(node) {
	    return Boolean(node && node.type === test);
	  }
	}
	
	/* Utility to return true. */
	function ok() {
	  return true;
	}


/***/ }),
/* 577 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var visit = __webpack_require__(81);
	
	module.exports = removePosition;
	
	/* Remove `position`s from `tree`. */
	function removePosition(node, force) {
	  visit(node, force ? hard : soft);
	  return node;
	}
	
	function hard(node) {
	  delete node.position;
	}
	
	function soft(node) {
	  node.position = undefined;
	}


/***/ }),
/* 578 */
/***/ (function(module, exports) {

	'use strict';
	
	var own = {}.hasOwnProperty;
	
	module.exports = stringify;
	
	function stringify(value) {
	  /* Nothing. */
	  if (!value || typeof value !== 'object') {
	    return null;
	  }
	
	  /* Node. */
	  if (own.call(value, 'position') || own.call(value, 'type')) {
	    return location(value.position);
	  }
	
	  /* Location. */
	  if (own.call(value, 'start') || own.call(value, 'end')) {
	    return location(value);
	  }
	
	  /* Position. */
	  if (own.call(value, 'line') || own.call(value, 'column')) {
	    return position(value);
	  }
	
	  /* ? */
	  return null;
	}
	
	function position(pos) {
	  if (!pos || typeof pos !== 'object') {
	    pos = {};
	  }
	
	  return index(pos.line) + ':' + index(pos.column);
	}
	
	function location(loc) {
	  if (!loc || typeof loc !== 'object') {
	    loc = {};
	  }
	
	  return position(loc.start) + '-' + position(loc.end);
	}
	
	function index(value) {
	  return value && typeof value === 'number' ? value : 1;
	}


/***/ }),
/* 579 */,
/* 580 */
/***/ (function(module, exports) {

	'use strict';
	
	/* Expose. */
	module.exports = factory;
	
	/* Factory. */
	function factory(file) {
	  var contents = indices(String(file));
	
	  return {
	    toPosition: offsetToPositionFactory(contents),
	    toOffset: positionToOffsetFactory(contents)
	  };
	}
	
	/* Factory to get the line and column-based `position` for
	 * `offset` in the bound indices. */
	function offsetToPositionFactory(indices) {
	  return offsetToPosition;
	
	  /* Get the line and column-based `position` for
	   * `offset` in the bound indices. */
	  function offsetToPosition(offset) {
	    var index = -1;
	    var length = indices.length;
	
	    if (offset < 0) {
	      return {};
	    }
	
	    while (++index < length) {
	      if (indices[index] > offset) {
	        return {
	          line: index + 1,
	          column: (offset - (indices[index - 1] || 0)) + 1,
	          offset: offset
	        };
	      }
	    }
	
	    return {};
	  }
	}
	
	/* Factory to get the `offset` for a line and column-based
	 * `position` in the bound indices. */
	function positionToOffsetFactory(indices) {
	  return positionToOffset;
	
	  /* Get the `offset` for a line and column-based
	   * `position` in the bound indices. */
	  function positionToOffset(position) {
	    var line = position && position.line;
	    var column = position && position.column;
	
	    if (!isNaN(line) && !isNaN(column) && line - 1 in indices) {
	      return ((indices[line - 2] || 0) + column - 1) || 0;
	    }
	
	    return -1;
	  }
	}
	
	/* Get indices of line-breaks in `value`. */
	function indices(value) {
	  var result = [];
	  var index = value.indexOf('\n');
	
	  while (index !== -1) {
	    result.push(index + 1);
	    index = value.indexOf('\n', index + 1);
	  }
	
	  result.push(value.length + 1);
	
	  return result;
	}


/***/ }),
/* 581 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var stringify = __webpack_require__(578);
	
	module.exports = VMessage;
	
	/* Inherit from `Error#`. */
	function VMessagePrototype() {}
	VMessagePrototype.prototype = Error.prototype;
	VMessage.prototype = new VMessagePrototype();
	
	/* Message properties. */
	var proto = VMessage.prototype;
	
	proto.file = '';
	proto.name = '';
	proto.reason = '';
	proto.message = '';
	proto.stack = '';
	proto.fatal = null;
	proto.column = null;
	proto.line = null;
	
	/* Construct a new VMessage.
	 *
	 * Note: We cannot invoke `Error` on the created context,
	 * as that adds readonly `line` and `column` attributes on
	 * Safari 9, thus throwing and failing the data. */
	function VMessage(reason, position, origin) {
	  var parts;
	  var range;
	  var location;
	
	  if (typeof position === 'string') {
	    origin = position;
	    position = null;
	  }
	
	  parts = parseOrigin(origin);
	  range = stringify(position) || '1:1';
	
	  location = {
	    start: {line: null, column: null},
	    end: {line: null, column: null}
	  };
	
	  /* Node. */
	  if (position && position.position) {
	    position = position.position;
	  }
	
	  if (position) {
	    /* Position. */
	    if (position.start) {
	      location = position;
	      position = position.start;
	    } else {
	      /* Point. */
	      location.start = position;
	    }
	  }
	
	  if (reason.stack) {
	    this.stack = reason.stack;
	    reason = reason.message;
	  }
	
	  this.message = reason;
	  this.name = range;
	  this.reason = reason;
	  this.line = position ? position.line : null;
	  this.column = position ? position.column : null;
	  this.location = location;
	  this.source = parts[0];
	  this.ruleId = parts[1];
	}
	
	function parseOrigin(origin) {
	  var result = [null, null];
	  var index;
	
	  if (typeof origin === 'string') {
	    index = origin.indexOf(':');
	
	    if (index === -1) {
	      result[1] = origin;
	    } else {
	      result[0] = origin.slice(0, index);
	      result[1] = origin.slice(index + 1);
	    }
	  }
	
	  return result;
	}


/***/ }),
/* 582 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var path = __webpack_require__(178);
	var replace = __webpack_require__(561);
	var buffer = __webpack_require__(388);
	
	module.exports = VFile;
	
	var own = {}.hasOwnProperty;
	var proto = VFile.prototype;
	
	proto.toString = toString;
	
	/* Order of setting (least specific to most), we need this because
	 * otherwise `{stem: 'a', path: '~/b.js'}` would throw, as a path
	 * is needed before a stem can be set. */
	var order = [
	  'history',
	  'path',
	  'basename',
	  'stem',
	  'extname',
	  'dirname'
	];
	
	/* Construct a new file. */
	function VFile(options) {
	  var prop;
	  var index;
	  var length;
	
	  if (!options) {
	    options = {};
	  } else if (typeof options === 'string' || buffer(options)) {
	    options = {contents: options};
	  } else if ('message' in options && 'messages' in options) {
	    return options;
	  }
	
	  if (!(this instanceof VFile)) {
	    return new VFile(options);
	  }
	
	  this.data = {};
	  this.messages = [];
	  this.history = [];
	  this.cwd = process.cwd();
	
	  /* Set path related properties in the correct order. */
	  index = -1;
	  length = order.length;
	
	  while (++index < length) {
	    prop = order[index];
	
	    if (own.call(options, prop)) {
	      this[prop] = options[prop];
	    }
	  }
	
	  /* Set non-path related properties. */
	  for (prop in options) {
	    if (order.indexOf(prop) === -1) {
	      this[prop] = options[prop];
	    }
	  }
	}
	
	/* Access full path (`~/index.min.js`). */
	Object.defineProperty(proto, 'path', {
	  get: function () {
	    return this.history[this.history.length - 1];
	  },
	  set: function (path) {
	    assertNonEmpty(path, 'path');
	
	    if (path !== this.path) {
	      this.history.push(path);
	    }
	  }
	});
	
	/* Access parent path (`~`). */
	Object.defineProperty(proto, 'dirname', {
	  get: function () {
	    return typeof this.path === 'string' ? path.dirname(this.path) : undefined;
	  },
	  set: function (dirname) {
	    assertPath(this.path, 'dirname');
	    this.path = path.join(dirname || '', this.basename);
	  }
	});
	
	/* Access basename (`index.min.js`). */
	Object.defineProperty(proto, 'basename', {
	  get: function () {
	    return typeof this.path === 'string' ? path.basename(this.path) : undefined;
	  },
	  set: function (basename) {
	    assertNonEmpty(basename, 'basename');
	    assertPart(basename, 'basename');
	    this.path = path.join(this.dirname || '', basename);
	  }
	});
	
	/* Access extname (`.js`). */
	Object.defineProperty(proto, 'extname', {
	  get: function () {
	    return typeof this.path === 'string' ? path.extname(this.path) : undefined;
	  },
	  set: function (extname) {
	    var ext = extname || '';
	
	    assertPart(ext, 'extname');
	    assertPath(this.path, 'extname');
	
	    if (ext) {
	      if (ext.charAt(0) !== '.') {
	        throw new Error('`extname` must start with `.`');
	      }
	
	      if (ext.indexOf('.', 1) !== -1) {
	        throw new Error('`extname` cannot contain multiple dots');
	      }
	    }
	
	    this.path = replace(this.path, ext);
	  }
	});
	
	/* Access stem (`index.min`). */
	Object.defineProperty(proto, 'stem', {
	  get: function () {
	    return typeof this.path === 'string' ? path.basename(this.path, this.extname) : undefined;
	  },
	  set: function (stem) {
	    assertNonEmpty(stem, 'stem');
	    assertPart(stem, 'stem');
	    this.path = path.join(this.dirname || '', stem + (this.extname || ''));
	  }
	});
	
	/* Get the value of the file. */
	function toString(encoding) {
	  var value = this.contents || '';
	  return buffer(value) ? value.toString(encoding) : String(value);
	}
	
	/* Assert that `part` is not a path (i.e., does
	 * not contain `path.sep`). */
	function assertPart(part, name) {
	  if (part.indexOf(path.sep) !== -1) {
	    throw new Error('`' + name + '` cannot be a path: did not expect `' + path.sep + '`');
	  }
	}
	
	/* Assert that `part` is not empty. */
	function assertNonEmpty(part, name) {
	  if (!part) {
	    throw new Error('`' + name + '` cannot be empty');
	  }
	}
	
	/* Assert `path` exists. */
	function assertPath(path, name) {
	  if (!path) {
	    throw new Error('Setting `' + name + '` requires `path` to be set too');
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ }),
/* 583 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var VMessage = __webpack_require__(581);
	var VFile = __webpack_require__(582);
	
	module.exports = VFile;
	
	var proto = VFile.prototype;
	
	proto.message = message;
	proto.info = info;
	proto.fail = fail;
	
	/* Slight backwards compatibility.  Remove in the future. */
	proto.warn = message;
	
	/* Create a message with `reason` at `position`.
	 * When an error is passed in as `reason`, copies the stack. */
	function message(reason, position, origin) {
	  var filePath = this.path;
	  var message = new VMessage(reason, position, origin);
	
	  if (filePath) {
	    message.name = filePath + ':' + message.name;
	    message.file = filePath;
	  }
	
	  message.fatal = false;
	
	  this.messages.push(message);
	
	  return message;
	}
	
	/* Fail. Creates a vmessage, associates it with the file,
	 * and throws it. */
	function fail() {
	  var message = this.message.apply(this, arguments);
	
	  message.fatal = true;
	
	  throw message;
	}
	
	/* Info. Creates a vmessage, associates it with the file,
	 * and marks the fatality as null. */
	function info() {
	  var message = this.message.apply(this, arguments);
	
	  message.fatal = null;
	
	  return message;
	}


/***/ }),
/* 584 */
/***/ (function(module, exports) {

	/*
	 * Various color functions
	 */
	
	rgbClass = {
	  toString: function() {
	    return '<r: ' + this.r +
	           ' g: ' + this.g +
	           ' b: ' + this.b +
	           ' >';
	  }
	};
	
	function getRGBFromHex(color) {
	  var rgb = Object.create(rgbClass),
	      rVal,
	      gVal,
	      bVal;
	
	  if (typeof color !== 'string') {
	    throw new Error('must use string');
	  }
	
	  rVal = parseInt(color.slice(1, 3), 16);
	  gVal = parseInt(color.slice(3, 5), 16);
	  bVal = parseInt(color.slice(5, 7), 16);
	
	  rgb.r = rVal;
	  rgb.g = gVal;
	  rgb.b = bVal;
	
	  return rgb;
	}
	
	function constructRGB(rgba) {
	  var rgb = Object.create(rgbClass);
	
	  rgb.r = rgba.r;
	  rgb.g = rgba.g;
	  rgb.b = rgba.b;
	
	  return rgba;
	}
	
	function calculateSRGB(rgb) {
	 var sRGB = Object.create(rgbClass),
	     key;
	
	  for (key in rgb) {
	    if (rgb.hasOwnProperty(key)) {
	      sRGB[key] = parseFloat((rgb[key] / 255), 10);
	    }
	  }
	
	  return sRGB;
	}
	
	function calculateLRGB(sRGB) {
	  var lRGB = Object.create(rgbClass),
	      key,
	      val = 0;
	
	  for (key in sRGB) {
	    if (sRGB.hasOwnProperty(key)) {
	      val = parseFloat(sRGB[key], 10);
	      if (val <= 0.03928) {
	        lRGB[key] = (val / 12.92);
	      } else {
	        lRGB[key] = Math.pow(((val + 0.055) / 1.055), 2.4);
	      }
	    }
	  }
	
	  return lRGB;
	}
	
	function calculateLuminance(lRGB) {
	  return (0.2126 * lRGB.r) + (0.7152 * lRGB.g) + (0.0722 * lRGB.b);
	}
	
	exports.relativeLuminance = function(color) {
	  var rgb,
	      sRGB,
	      lRGB,
	      lum = 0,
	      key;
	
	  if (typeof color === 'string') {
	    rgb = getRGBFromHex(color);
	  } else {
	    rgb = constructRGB(color);
	  }
	
	  sRGB = calculateSRGB(rgb);
	  lRGB = calculateLRGB(sRGB);
	  lum = calculateLuminance(lRGB);
	
	  return lum;
	};
	


/***/ }),
/* 585 */
/***/ (function(module, exports) {

	module.exports = function isFunction (fn) {
	  return Object.prototype.toString.call(fn) === '[object Function]'
	}


/***/ }),
/* 586 */
/***/ (function(module, exports) {

	var toString = Object.prototype.toString
	
	module.exports = isString
	
	function isString(obj) {
	    return toString.call(obj) === "[object String]"
	}


/***/ })
]);
//# sourceMappingURL=component---src-pages-atoms-colors-index-js-6bc73c2f33ef38de61d8.js.map