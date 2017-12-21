webpackJsonp([15837510573885],{

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(23);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _IconModule = __webpack_require__(109);
	
	var _IconModule2 = _interopRequireDefault(_IconModule);
	
	var _error = __webpack_require__(86);
	
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

/***/ 109:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"icon":"_-components-Icon----Icon-module---icon---1FWNI","inheritSize":"_-components-Icon----Icon-module---inheritSize---eWkre","blockLayout":"_-components-Icon----Icon-module---blockLayout---1WLhv"};

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

	'use strict';
	module.exports = function () {
		return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g;
	};


/***/ }),

/***/ 83:
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

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	var escapeStringRegexp = __webpack_require__(108);
	var ansiStyles = __webpack_require__(83);
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)))

/***/ }),

/***/ 48:
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

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

	var conversions = __webpack_require__(48);
	var route = __webpack_require__(90);
	
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

/***/ 90:
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

/***/ 63:
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

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

	/* MIT license */
	var colorNames = __webpack_require__(63);
	var swizzle = __webpack_require__(572);
	
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

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var colorString = __webpack_require__(268);
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

/***/ 54:
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

/***/ 108:
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

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var ansiRegex = __webpack_require__(46);
	var re = new RegExp(ansiRegex().source); // remove the `g` flag
	module.exports = re.test.bind(re);


/***/ }),

/***/ 388:
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

/***/ 133:
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

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isArrayish = __webpack_require__(388);
	
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

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var ansiRegex = __webpack_require__(46)();
	
	module.exports = function (str) {
		return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
	};


/***/ }),

/***/ 141:
/***/ (function(module, exports) {

	'use strict';
	module.exports = false;


/***/ }),

/***/ 142:
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

/***/ 27:
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

/***/ 591:
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

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

	/*
	 * Methods to check wcag accessibility.
	 */
	
	var color = __webpack_require__(591);
	
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

/***/ 144:
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

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _KebabModule = __webpack_require__(172);
	
	var _KebabModule2 = _interopRequireDefault(_KebabModule);
	
	var _Icon = __webpack_require__(29);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _ellipsis = __webpack_require__(578);
	
	var _ellipsis2 = _interopRequireDefault(_ellipsis);
	
	var _KebabMenu = __webpack_require__(233);
	
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
	    return _react2.default.createElement(
	      _KebabMenu2.default,
	      {
	        hideKebabMenu: this.hideKebabMenu,
	        position: this.getPosition()
	      },
	      this.props.children
	    );
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
	  children: _propTypes2.default.node.isRequired,
	  menuVisible: _propTypes2.default.bool
	};
	module.exports = exports['default'];

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"fieldKebabIconInner":"src-components-kebab----Kebab-module---fieldKebabIconInner---2YfnA","kebabIcon":"src-components-kebab----Kebab-module---kebabIcon---2fMMH","isOpen":"src-components-kebab----Kebab-module---isOpen---2Q4Iv","menuContainer":"src-components-kebab----Kebab-module---menuContainer---V2Bc8"};

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _KebabModule = __webpack_require__(172);
	
	var _KebabModule2 = _interopRequireDefault(_KebabModule);
	
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
	
	  KebabMenu.prototype.componentDidMount = function componentDidMount() {
	    document.addEventListener('click', this.handleDocumentClick, false);
	    window.addEventListener('resize', this.handleDocumentResize, false);
	    this.positionMenu();
	  };
	
	  KebabMenu.prototype.componentWillUnmount = function componentWillUnmount() {
	    document.removeEventListener('click', this.handleDocumentClick, false);
	    window.removeEventListener('resize', this.handleDocumentResize, false);
	  };
	
	  KebabMenu.prototype.positionMenu = function positionMenu() {
	    if (!this.props.position) {
	      return;
	    }
	    var pos = this.props.position;
	    var heightBetweenTopOfRowAndKebabIcon = (pos.bottom - pos.top) / 2;
	    var _window = window,
	        innerHeight = _window.innerHeight;
	
	    var rect = this.menu.getBoundingClientRect();
	    this.menu.style.left = this.calculateLeftOffset(window.scrollX, pos.right, rect.width);
	    this.menu.style.top = this.calculateTopOffset(window.scrollY, pos.top, heightBetweenTopOfRowAndKebabIcon);
	    if (pos.bottom > innerHeight - rect.height) {
	      this.menu.style.top = this.calculateShiftedUpTopOffset(window.scrollY, pos.top, rect.height - heightBetweenTopOfRowAndKebabIcon + 12);
	    }
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
	      {
	        className: _KebabModule2.default.menuContainer,
	        ref: this.menuRef,
	        onClick: function onClick() {
	          return props.hideKebabMenu();
	        }
	      },
	      props.children
	    );
	  };
	
	  return KebabMenu;
	}(_react2.default.Component);
	
	exports.default = KebabMenu;
	
	
	KebabMenu.propTypes = {
	  children: _propTypes2.default.node.isRequired,
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

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Kebab = __webpack_require__(232);
	
	var _Kebab2 = _interopRequireDefault(_Kebab);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Kebab2.default;
	module.exports = exports['default'];

/***/ }),

/***/ 71:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"menuList":"src-components-menu-list----Menu-module---menuList---2K1pI","header":"src-components-menu-list----Menu-module---header---yi-6w","header__title":"src-components-menu-list----Menu-module---header__title---2FFp5","header__subtitle":"src-components-menu-list----Menu-module---header__subtitle---1ChW9","menuItem":"src-components-menu-list----Menu-module---menuItem---3HJKd","menuItem__Icon":"src-components-menu-list----Menu-module---menuItem__Icon---1L27k","menuItem__Label":"src-components-menu-list----Menu-module---menuItem__Label---3Njju","hoverIcon":"src-components-menu-list----Menu-module---hoverIcon---3Jz7H","separator":"src-components-menu-list----Menu-module---separator---1OpXe"};

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _MenuModule = __webpack_require__(71);
	
	var _MenuModule2 = _interopRequireDefault(_MenuModule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MenuHeader = function MenuHeader(_ref) {
	  var title = _ref.title,
	      subtitle = _ref.subtitle;
	  return _react2.default.createElement(
	    'div',
	    { className: _MenuModule2.default.header },
	    _react2.default.createElement(
	      'span',
	      { className: _MenuModule2.default.header__title },
	      title
	    ),
	    _react2.default.createElement(
	      'span',
	      { className: _MenuModule2.default.header__subtitle },
	      subtitle
	    )
	  );
	};
	
	MenuHeader.propTypes = {
	  title: _propTypes2.default.string.isRequired,
	  subtitle: _propTypes2.default.string
	};
	
	exports.default = MenuHeader;
	module.exports = exports['default'];

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(23);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Icon = __webpack_require__(29);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _MenuModule = __webpack_require__(71);
	
	var _MenuModule2 = _interopRequireDefault(_MenuModule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MenuItem = function MenuItem(_ref) {
	  var _classNames;
	
	  var icon = _ref.icon,
	      hoverIcon = _ref.hoverIcon,
	      children = _ref.children,
	      action = _ref.action;
	
	  var isLink = typeof action === 'string',
	      label = _react2.default.createElement(
	    'span',
	    { className: _MenuModule2.default.menuItem__Label },
	    children
	  ),
	      iconNode = icon && _react2.default.createElement(
	    'span',
	    { className: _MenuModule2.default.menuItem__Icon },
	    _react2.default.createElement(_Icon2.default, { icon: icon, role: 'presentation' })
	  ),
	      href = isLink ? action : null,
	      handleOnClick = isLink ? null : action,
	      className = (0, _classnames2.default)((_classNames = {}, _classNames[_MenuModule2.default.menuItem] = true, _classNames[_MenuModule2.default.hoverIcon] = icon && hoverIcon, _classNames));
	  return _react2.default.createElement(
	    'a',
	    { href: href, onClick: handleOnClick, className: className },
	    label,
	    iconNode
	  );
	};
	
	MenuItem.propTypes = {
	  children: _propTypes2.default.node.isRequired,
	  action: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]).isRequired,
	  icon: _propTypes2.default.object,
	  hoverIcon: _propTypes2.default.bool
	};
	
	exports.default = MenuItem;
	module.exports = exports['default'];

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _MenuModule = __webpack_require__(71);
	
	var _MenuModule2 = _interopRequireDefault(_MenuModule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Menu = function Menu(_ref) {
	  var children = _ref.children;
	  return _react2.default.createElement(
	    'div',
	    { className: _MenuModule2.default.menuList },
	    children
	  );
	};
	
	Menu.propTypes = {
	  children: _propTypes2.default.node.isRequired
	};
	
	exports.default = Menu;
	module.exports = exports['default'];

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _MenuModule = __webpack_require__(71);
	
	var _MenuModule2 = _interopRequireDefault(_MenuModule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MenuSeparator = function MenuSeparator() {
	  return _react2.default.createElement('hr', { className: _MenuModule2.default.separator });
	};
	
	exports.default = MenuSeparator;
	module.exports = exports['default'];

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.MenuSeperator = exports.MenuItem = exports.MenuHeader = exports.MenuList = undefined;
	
	var _MenuList = __webpack_require__(237);
	
	var _MenuList2 = _interopRequireDefault(_MenuList);
	
	var _MenuHeader = __webpack_require__(235);
	
	var _MenuHeader2 = _interopRequireDefault(_MenuHeader);
	
	var _MenuItem = __webpack_require__(236);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _MenuSeperator = __webpack_require__(238);
	
	var _MenuSeperator2 = _interopRequireDefault(_MenuSeperator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.MenuList = _MenuList2.default;
	exports.MenuHeader = _MenuHeader2.default;
	exports.MenuItem = _MenuItem2.default;
	exports.MenuSeperator = _MenuSeperator2.default;
	exports.default = _MenuList2.default;

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMarkdown = __webpack_require__(207);
	
	var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);
	
	var _classnames = __webpack_require__(23);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Icon = __webpack_require__(29);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _success = __webpack_require__(221);
	
	var _success2 = _interopRequireDefault(_success);
	
	var _exclamation = __webpack_require__(579);
	
	var _exclamation2 = _interopRequireDefault(_exclamation);
	
	var _MarkdownContent = __webpack_require__(21);
	
	var _MarkdownContent2 = _interopRequireDefault(_MarkdownContent);
	
	var _TipCardModule = __webpack_require__(341);
	
	var _TipCardModule2 = _interopRequireDefault(_TipCardModule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TipCard = function TipCard(_ref) {
	  var title = _ref.title,
	      type = _ref.type,
	      content = _ref.content;
	
	  var icon = type === 'tip' ? _success2.default : _exclamation2.default,
	      iconColor = type === 'tip' ? 'tipIcon' : 'warningIcon';
	  return _react2.default.createElement(
	    'div',
	    { className: _TipCardModule2.default.cardWithHeader },
	    _react2.default.createElement(
	      'div',
	      { className: _TipCardModule2.default.cardHeader },
	      icon && _react2.default.createElement(
	        'span',
	        { className: (0, _classnames2.default)(_TipCardModule2.default.iconWrapper, _TipCardModule2.default[iconColor]) },
	        _react2.default.createElement(_Icon2.default, { icon: icon, role: 'presentation' })
	      ),
	      title
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: _TipCardModule2.default.cardBody },
	      _react2.default.createElement(_MarkdownContent2.default, { content: content })
	    )
	  );
	};
	
	exports.default = TipCard;
	module.exports = exports['default'];

/***/ }),

/***/ 341:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"card":"src-components-tip-card----TipCard-module---card---2jAko","cardWithHeader":"src-components-tip-card----TipCard-module---cardWithHeader---3libT src-components-tip-card----TipCard-module---card---2jAko","cardHeader":"src-components-tip-card----TipCard-module---cardHeader---2fYWe","cardBody":"src-components-tip-card----TipCard-module---cardBody---1Rs7G","iconWrapper":"src-components-tip-card----TipCard-module---iconWrapper---u5G6q","tipIcon":"src-components-tip-card----TipCard-module---tipIcon---3THNM","warningIcon":"src-components-tip-card----TipCard-module---warningIcon---1pbSl"};

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var TipCard = __webpack_require__(240);
	module.exports = TipCard;

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"colorCard":"src-pages-visuals-colors----ColorCard-module---colorCard---DLQRY src-components-card----Card-module---card---1WbKx","toggleIconWrapper":"src-pages-visuals-colors----ColorCard-module---toggleIconWrapper---3rxPk","subheader":"src-pages-visuals-colors----ColorCard-module---subheader---1M9CW","tile":"src-pages-visuals-colors----ColorCard-module---tile---1TYWC","small":"src-pages-visuals-colors----ColorCard-module---small---2atAC","large":"src-pages-visuals-colors----ColorCard-module---large---JIft0","colorBlock":"src-pages-visuals-colors----ColorCard-module---colorBlock---1saGd","colorBlockHalf":"src-pages-visuals-colors----ColorCard-module---colorBlockHalf---3HG5Z","whiteText":"src-pages-visuals-colors----ColorCard-module---whiteText---SrsXv","accessibilityIcon":"src-pages-visuals-colors----ColorCard-module---accessibilityIcon---1UQVF","kebabContainer":"src-pages-visuals-colors----ColorCard-module---kebabContainer---12G5B","colorBlockLabel":"src-pages-visuals-colors----ColorCard-module---colorBlockLabel---2vMNS","dropdownItem":"src-pages-visuals-colors----ColorCard-module---dropdownItem---1rV7s"};

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _color = __webpack_require__(149);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _classnames = __webpack_require__(23);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _wcag = __webpack_require__(222);
	
	var _wcag2 = _interopRequireDefault(_wcag);
	
	var _ColorBlockKebab = __webpack_require__(253);
	
	var _ColorBlockKebab2 = _interopRequireDefault(_ColorBlockKebab);
	
	var _ContrastIcon = __webpack_require__(146);
	
	var _ContrastIcon2 = _interopRequireDefault(_ContrastIcon);
	
	var _ColorCardModule = __webpack_require__(72);
	
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

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _kebab = __webpack_require__(234);
	
	var _kebab2 = _interopRequireDefault(_kebab);
	
	var _ColorCardModule = __webpack_require__(72);
	
	var _ColorCardModule2 = _interopRequireDefault(_ColorCardModule);
	
	var _duplicate = __webpack_require__(577);
	
	var _duplicate2 = _interopRequireDefault(_duplicate);
	
	var _menuList = __webpack_require__(239);
	
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
	    _react2.default.createElement(
	      _kebab2.default,
	      null,
	      _react2.default.createElement(
	        _menuList.MenuList,
	        null,
	        _react2.default.createElement(_menuList.MenuHeader, { title: 'Copy to clipboard' }),
	        _react2.default.createElement(_menuList.MenuItem, getColorDropdownItem('SASS', sassVar)),
	        _react2.default.createElement(_menuList.MenuItem, getColorDropdownItem('HEX', hex)),
	        _react2.default.createElement(_menuList.MenuItem, getColorDropdownItem('RGB', rgb)),
	        _react2.default.createElement(_menuList.MenuItem, getColorDropdownItem('CMYK', cmyk))
	      )
	    )
	  );
	};
	
	var getColorDropdownItem = function getColorDropdownItem(type, value) {
	  var input = void 0;
	  return {
	    children: _react2.default.createElement(
	      'div',
	      { className: _ColorCardModule2.default.dropdownItem },
	      _react2.default.createElement(
	        'strong',
	        null,
	        type
	      ),
	      _react2.default.createElement('input', {
	        type: 'text',
	        defaultValue: value,
	        value: value,
	        ref: function ref(i) {
	          return input = i;
	        }
	      })
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

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Icon = __webpack_require__(29);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _chevronUp = __webpack_require__(575);
	
	var _chevronUp2 = _interopRequireDefault(_chevronUp);
	
	var _chevronDown = __webpack_require__(574);
	
	var _chevronDown2 = _interopRequireDefault(_chevronDown);
	
	var _ColorCardModule = __webpack_require__(72);
	
	var _ColorCardModule2 = _interopRequireDefault(_ColorCardModule);
	
	var _ColorBlock = __webpack_require__(252);
	
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
	        key: amount,
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

/***/ 424:
/***/ (function(module, exports) {

	module.exports = "# Colors\n\nOur color palette is built with our core principles and guidelines as its\nfoundation. We are committed to complying with\n[WCAG AA standard contrast ratios](https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast).\n"

/***/ }),

/***/ 425:
/***/ (function(module, exports) {

	module.exports = "* TODO\n"

/***/ }),

/***/ 426:
/***/ (function(module, exports) {

	module.exports = "* TODO\n"

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.renderContrastHeaderIcons = renderContrastHeaderIcons;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _wcag = __webpack_require__(222);
	
	var _wcag2 = _interopRequireDefault(_wcag);
	
	var _classnames = __webpack_require__(23);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Icon = __webpack_require__(29);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _success = __webpack_require__(221);
	
	var _success2 = _interopRequireDefault(_success);
	
	var _Palette = __webpack_require__(147);
	
	var _Palette2 = _interopRequireDefault(_Palette);
	
	var _ColorCardModule = __webpack_require__(72);
	
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

/***/ 147:
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
	  stone: (0, _color2.default)('#f9f9f9'),
	  'positive-delta': (0, _color2.default)('#43e699'),
	  'negative-delta': (0, _color2.default)('#ff4757')
	};
	
	exports.default = Palette;
	module.exports = exports['default'];

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Link = __webpack_require__(47);
	
	var _Link2 = _interopRequireDefault(_Link);
	
	var _tipCard = __webpack_require__(241);
	
	var _tipCard2 = _interopRequireDefault(_tipCard);
	
	var _MarkdownContent = __webpack_require__(21);
	
	var _MarkdownContent2 = _interopRequireDefault(_MarkdownContent);
	
	var _indexModule = __webpack_require__(343);
	
	var _indexModule2 = _interopRequireDefault(_indexModule);
	
	var _ColorCard = __webpack_require__(254);
	
	var _ColorCard2 = _interopRequireDefault(_ColorCard);
	
	var _ColorsIntro = __webpack_require__(424);
	
	var _ColorsIntro2 = _interopRequireDefault(_ColorsIntro);
	
	var _ColorsShould = __webpack_require__(425);
	
	var _ColorsShould2 = _interopRequireDefault(_ColorsShould);
	
	var _ColorsShouldNot = __webpack_require__(426);
	
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
	      _react2.default.createElement(_MarkdownContent2.default, { content: _ColorsIntro2.default }),
	      _react2.default.createElement('hr', { className: _indexModule2.default.hr }),
	      _react2.default.createElement(
	        'div',
	        { className: _indexModule2.default.cardContainer },
	        this.renderColorSection('Primary Colors', ['Coral', 'Paper', 'Ink']),
	        this.renderColorSection('Secondary Colors', ['Seedling', 'Ocean', 'Lapis', 'Wisteria', 'Peach', 'Yuzu']),
	        this.renderColorSection('Tertiary Colors', ['Positive-Delta', 'Negative-Delta', 'Stone'])
	      ),
	      _react2.default.createElement(
	        'h2',
	        { className: _indexModule2.default.sectionTitle },
	        'Best Practices'
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: _indexModule2.default.tipsContainer },
	        _react2.default.createElement(_tipCard2.default, { title: 'Colors should\u2026', type: 'tip', content: _ColorsShould2.default }),
	        _react2.default.createElement(_tipCard2.default, {
	          title: 'Colors should not\u2026',
	          type: 'warning',
	          content: _ColorsShouldNot2.default
	        })
	      ),
	      _react2.default.createElement(
	        _Link2.default,
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
	        'h2',
	        { className: _indexModule2.default.sectionTitle },
	        title
	      ),
	      _react2.default.createElement(
	        _Link.ActionLink,
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

/***/ 343:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"cardContainer":"src-pages-visuals-colors----index-module---cardContainer---2OHji","gridHeader":"src-pages-visuals-colors----index-module---gridHeader---1S_Zc","title":"src-pages-visuals-colors----index-module---title---37qK2 src-components----HtmlContent-module---h1---3uH3R","sectionTitle":"src-pages-visuals-colors----index-module---sectionTitle---3Mttk src-components----HtmlContent-module---h2---1MBc-","tipsContainer":"src-pages-visuals-colors----index-module---tipsContainer---P9sT5","intro":"src-pages-visuals-colors----index-module---intro---3Zpr0","hr":"src-pages-visuals-colors----index-module---hr---12kpo"};

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

	var SpriteSymbol = __webpack_require__(27);
	var sprite = __webpack_require__(22);
	var symbol = new SpriteSymbol({
	  "id": "ca-icon-chevron-down",
	  "use": "ca-icon-chevron-down-usage",
	  "viewBox": "0 0 20 20",
	  "content": "<symbol viewBox=\"0 0 20 20\" id=\"ca-icon-chevron-down\"><defs><path id=\"ca-icon-chevron-down_a\" d=\"M6.18 6.845L10 10.747l3.82-3.902L15 8.049l-5 5.106-5-5.106z\" /></defs><use fill=\"currentColor\" xlink:href=\"#ca-icon-chevron-down_a\" fill-rule=\"evenodd\" /></symbol>"
	});
	var result = sprite.add(symbol);
	module.exports = symbol

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

	var SpriteSymbol = __webpack_require__(27);
	var sprite = __webpack_require__(22);
	var symbol = new SpriteSymbol({
	  "id": "ca-icon-chevron-up",
	  "use": "ca-icon-chevron-up-usage",
	  "viewBox": "0 0 20 20",
	  "content": "<symbol viewBox=\"0 0 20 20\" id=\"ca-icon-chevron-up\"><defs><path id=\"ca-icon-chevron-up_a\" d=\"M6.179 13.155L10 9.253l3.821 3.902 1.18-1.204L10 6.845l-5 5.106z\" /></defs><use fill=\"currentColor\" xlink:href=\"#ca-icon-chevron-up_a\" fill-rule=\"evenodd\" /></symbol>"
	});
	var result = sprite.add(symbol);
	module.exports = symbol

/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

	var SpriteSymbol = __webpack_require__(27);
	var sprite = __webpack_require__(22);
	var symbol = new SpriteSymbol({
	  "id": "ca-icon-duplicate",
	  "use": "ca-icon-duplicate-usage",
	  "viewBox": "0 0 20 20",
	  "content": "<symbol viewBox=\"0 0 20 20\" id=\"ca-icon-duplicate\"><defs><path d=\"M13.273 2H4.545c-.803 0-1.454.65-1.454 1.455v10.181h1.454V3.455h8.728V2zm2.182 2.91h-8C6.65 4.91 6 5.56 6 6.363v10.181C6 17.35 6.65 18 7.455 18h8c.803 0 1.454-.65 1.454-1.455V6.364c0-.804-.65-1.455-1.454-1.455z\" id=\"ca-icon-duplicate_a\" /></defs><use fill=\"currentColor\" xlink:href=\"#ca-icon-duplicate_a\" fill-rule=\"evenodd\" /></symbol>"
	});
	var result = sprite.add(symbol);
	module.exports = symbol

/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

	var SpriteSymbol = __webpack_require__(27);
	var sprite = __webpack_require__(22);
	var symbol = new SpriteSymbol({
	  "id": "ca-icon-ellipsis",
	  "use": "ca-icon-ellipsis-usage",
	  "viewBox": "0 0 20 20",
	  "content": "<symbol viewBox=\"0 0 20 20\" id=\"ca-icon-ellipsis\"><defs><path d=\"M4 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\" id=\"ca-icon-ellipsis_a\" /></defs><use fill=\"currentColor\" xlink:href=\"#ca-icon-ellipsis_a\" fill-rule=\"evenodd\" /></symbol>"
	});
	var result = sprite.add(symbol);
	module.exports = symbol

/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

	var SpriteSymbol = __webpack_require__(27);
	var sprite = __webpack_require__(22);
	var symbol = new SpriteSymbol({
	  "id": "ca-icon-exclamation",
	  "use": "ca-icon-exclamation-usage",
	  "viewBox": "0 0 20 20",
	  "content": "<symbol viewBox=\"0 0 20 20\" id=\"ca-icon-exclamation\"><defs><path d=\"M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm.8 12v-1.6H9.2V14h1.6zm0-3.2V6H9.2v4.8h1.6z\" id=\"ca-icon-exclamation_a\" /></defs><use fill=\"currentColor\" xlink:href=\"#ca-icon-exclamation_a\" fill-rule=\"evenodd\" /></symbol>"
	});
	var result = sprite.add(symbol);
	module.exports = symbol

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

	var SpriteSymbol = __webpack_require__(27);
	var sprite = __webpack_require__(22);
	var symbol = new SpriteSymbol({
	  "id": "ca-icon-success",
	  "use": "ca-icon-success-usage",
	  "viewBox": "0 0 20 20",
	  "content": "<symbol viewBox=\"0 0 20 20\" id=\"ca-icon-success\"><defs><path d=\"M10 2c4.416 0 8 3.584 8 8s-3.584 8-8 8-8-3.584-8-8 3.584-8 8-8zM8.4 14l7.2-7.2-1.128-1.136L8.4 11.736 5.528 8.872 4.4 10l4 4z\" id=\"ca-icon-success_a\" /></defs><use fill=\"currentColor\" xlink:href=\"#ca-icon-success_a\" fill-rule=\"evenodd\" /></symbol>"
	});
	var result = sprite.add(symbol);
	module.exports = symbol

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var chalk = __webpack_require__(89);
	
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

/***/ 22:
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

/***/ })

});
//# sourceMappingURL=component---src-pages-visuals-colors-index-js-142f3987f78a00c27ba7.js.map