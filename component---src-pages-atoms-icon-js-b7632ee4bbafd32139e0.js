webpackJsonp([103700555733728],{

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
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

/***/ 47:
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
	var ansiRegex = __webpack_require__(47);
	var re = new RegExp(ansiRegex().source); // remove the `g` flag
	module.exports = re.test.bind(re);


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

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var ansiRegex = __webpack_require__(47)();
	
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

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _DemoModule = __webpack_require__(110);
	
	var _DemoModule2 = _interopRequireDefault(_DemoModule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MIN_CANVAS_WIDTH = 240;
	
	var SMALL = Symbol('small');
	var MEDIUM = Symbol('medium');
	var LARGE = Symbol('large');
	var RANDOM = Symbol('random');
	var FULL = Symbol('full');
	
	var Demo = function (_React$Component) {
	  _inherits(Demo, _React$Component);
	
	  function Demo() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Demo);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      selectedPreset: 0,
	      assignedCanvasWidth: null,
	      actualCanvasDimensions: {
	        width: null,
	        height: null
	      }
	    }, _this.onSelectPreset = function (e) {
	      var selectedPreset = parseInt(e.target.value);
	      _this.setState(_extends({}, _this.state, { selectedPreset: selectedPreset }));
	    }, _this.onResize = function () {
	      if (_this.resizing) return;
	
	      _this.resizing = true;
	      window.requestAnimationFrame(_this.onResizeFrame);
	    }, _this.onResizeFrame = function () {
	      if (_this.isResizeComplete()) {
	        _this.resizing = false;
	        return;
	      }
	
	      var _this$canvas = _this.canvas,
	          clientWidth = _this$canvas.clientWidth,
	          clientHeight = _this$canvas.clientHeight;
	
	      _this.setState(_extends({}, _this.state, {
	        actualCanvasDimensions: {
	          width: clientWidth,
	          height: clientHeight
	        }
	      }));
	
	      window.requestAnimationFrame(_this.onResizeFrame);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  Demo.prototype.render = function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: _DemoModule2.default.root },
	      this.renderPresetList(),
	      this.renderCanvas(),
	      _react2.default.createElement(
	        'div',
	        { className: _DemoModule2.default.controls },
	        this.renderSizePresets(),
	        this.renderCanvasDimensions(),
	        this.renderComponentTypes()
	      )
	    );
	  };
	
	  Demo.prototype.renderPresetList = function renderPresetList() {
	    var presets = this.props.presets;
	    var selectedPreset = this.state.selectedPreset;
	
	
	    return _react2.default.createElement(
	      'div',
	      { className: _DemoModule2.default.selectPreset },
	      _react2.default.createElement(
	        'select',
	        { onChange: this.onSelectPreset, value: selectedPreset },
	        presets.map(function (preset, index) {
	          return _react2.default.createElement(
	            'option',
	            { key: index, value: index },
	            preset.name
	          );
	        })
	      )
	    );
	  };
	
	  Demo.prototype.renderCanvas = function renderCanvas() {
	    var _this2 = this;
	
	    var Component = this.props.component;
	
	    return _react2.default.createElement(
	      'div',
	      { className: _DemoModule2.default.frame, ref: function ref(div) {
	          return _this2.frame = div;
	        } },
	      _react2.default.createElement(
	        'div',
	        {
	          className: _DemoModule2.default.canvas,
	          style: { width: this.state.assignedCanvasWidth },
	          ref: function ref(div) {
	            return _this2.canvas = div;
	          }
	        },
	        _react2.default.createElement(Component, this.selectedPresetProps())
	      )
	    );
	  };
	
	  Demo.prototype.selectedPresetProps = function selectedPresetProps() {
	    return this.props.presets[this.state.selectedPreset].props;
	  };
	
	  Demo.prototype.renderSizePresets = function renderSizePresets() {
	    return _react2.default.createElement(
	      'div',
	      { className: _DemoModule2.default.sizePresets },
	      _react2.default.createElement(
	        'button',
	        { onClick: this.onClickResizeTo(FULL) },
	        'Full'
	      ),
	      _react2.default.createElement(
	        'button',
	        { onClick: this.onClickResizeTo(RANDOM) },
	        'Random'
	      ),
	      _react2.default.createElement(
	        'button',
	        { onClick: this.onClickResizeTo(LARGE) },
	        'Large'
	      ),
	      _react2.default.createElement(
	        'button',
	        { onClick: this.onClickResizeTo(MEDIUM) },
	        'Medium'
	      ),
	      _react2.default.createElement(
	        'button',
	        { onClick: this.onClickResizeTo(SMALL) },
	        'Small'
	      )
	    );
	  };
	
	  Demo.prototype.renderCanvasDimensions = function renderCanvasDimensions() {
	    var _state$actualCanvasDi = this.state.actualCanvasDimensions,
	        width = _state$actualCanvasDi.width,
	        height = _state$actualCanvasDi.height;
	
	
	    return width && height && _react2.default.createElement(
	      'div',
	      { className: _DemoModule2.default.canvasDimensions },
	      _react2.default.createElement(
	        'span',
	        { className: _DemoModule2.default.dimension },
	        width,
	        'px'
	      ),
	      ' × ',
	      _react2.default.createElement(
	        'span',
	        { className: _DemoModule2.default.dimension },
	        height,
	        'px'
	      ),
	      ' viewport'
	    );
	  };
	
	  Demo.prototype.renderComponentTypes = function renderComponentTypes() {
	    return _react2.default.createElement(
	      'div',
	      { className: _DemoModule2.default.componentTypes },
	      _react2.default.createElement(
	        'button',
	        null,
	        'React'
	      )
	    );
	  };
	
	  Demo.prototype.componentDidMount = function componentDidMount() {
	    window.addEventListener('resize', this.onResize);
	    this.onResize();
	  };
	
	  Demo.prototype.componentWillUnmount = function componentWillUnmount() {
	    window.removeEventListener('resize', this.onResize);
	  };
	
	  Demo.prototype.onClickResizeTo = function onClickResizeTo(size) {
	    var _this3 = this;
	
	    return function (e) {
	      return _this3.resizeToSize(size);
	    };
	  };
	
	  Demo.prototype.resizeToSize = function resizeToSize(size) {
	    switch (size) {
	      case FULL:
	        this.resizeTo();
	        break;
	      case RANDOM:
	        this.resizeTo(randomBetween(MIN_CANVAS_WIDTH, this.maxCanvasWidth()));
	        break;
	      case LARGE:
	        this.resizeTo(randomBetween(800, 1200));
	        break;
	      case MEDIUM:
	        this.resizeTo(randomBetween(500, 800));
	        break;
	      case SMALL:
	        this.resizeTo(randomBetween(MIN_CANVAS_WIDTH, 500));
	        break;
	    }
	  };
	
	  Demo.prototype.resizeTo = function resizeTo() {
	    var _this4 = this;
	
	    var assignedCanvasWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	
	    assignedCanvasWidth = assignedCanvasWidth && Math.min(assignedCanvasWidth, this.maxCanvasWidth());
	
	    if (this.state.assignedCanvasWidth === null && assignedCanvasWidth) {
	      // prepare for CSS transition from width: auto
	      this.setAssignedCanvasWidth(this.maxCanvasWidth());
	    }
	
	    window.requestAnimationFrame(function () {
	      _this4.setAssignedCanvasWidth(assignedCanvasWidth);
	    });
	  };
	
	  Demo.prototype.setAssignedCanvasWidth = function setAssignedCanvasWidth(assignedCanvasWidth) {
	    this.setState(_extends({}, this.state, { assignedCanvasWidth: assignedCanvasWidth }));
	    this.onResize();
	  };
	
	  Demo.prototype.maxCanvasWidth = function maxCanvasWidth() {
	    return this.frame.clientWidth;
	  };
	
	  Demo.prototype.isResizeComplete = function isResizeComplete() {
	    var _canvas = this.canvas,
	        clientWidth = _canvas.clientWidth,
	        clientHeight = _canvas.clientHeight;
	    var _state = this.state,
	        assignedCanvasWidth = _state.assignedCanvasWidth,
	        _state$actualCanvasDi2 = _state.actualCanvasDimensions,
	        canvasWidth = _state$actualCanvasDi2.width,
	        canvasHeight = _state$actualCanvasDi2.height;
	
	
	    return clientWidth == canvasWidth && clientHeight == canvasHeight && (!assignedCanvasWidth || clientWidth == assignedCanvasWidth);
	  };
	
	  return Demo;
	}(_react2.default.Component);
	
	exports.default = Demo;
	
	
	function randomBetween(min, max) {
	  return Math.floor(Math.random() * (max - min) + min);
	}
	module.exports = exports['default'];

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"src-components----Demo-module---root---3wwTo","frame":"src-components----Demo-module---frame---3OdyG","canvas":"src-components----Demo-module---canvas---KNZxY","selectPreset":"src-components----Demo-module---selectPreset---HqP0Z","controls":"src-components----Demo-module---controls---2Soui","dimension":"src-components----Demo-module---dimension---15b1z"};

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Link = __webpack_require__(30);
	
	var _Link2 = _interopRequireDefault(_Link);
	
	var _Demo = __webpack_require__(85);
	
	var _Demo2 = _interopRequireDefault(_Demo);
	
	var _Icon = __webpack_require__(29);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _configure = __webpack_require__(587);
	
	var _configure2 = _interopRequireDefault(_configure);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var iconPresets = [{
	  name: 'Meaningful',
	  props: { icon: _configure2.default, role: 'img', title: 'Warning' }
	}, {
	  name: 'Presentational',
	  props: { icon: _configure2.default, role: 'presentation' }
	}, {
	  name: 'Inherit size',
	  props: { icon: _configure2.default, inheritSize: true, role: 'presentation' }
	}];
	
	var Page = function Page() {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'h1',
	      null,
	      'Icons'
	    ),
	    _react2.default.createElement(
	      'p',
	      null,
	      'An icon! To control its color, set color on a parent element, and it will be inherited.'
	    ),
	    _react2.default.createElement(_Demo2.default, { component: _Icon2.default, presets: iconPresets }),
	    _react2.default.createElement(
	      _Link2.default,
	      { to: '/' },
	      'Go back to the homepage'
	    )
	  );
	};
	
	exports.default = Page;
	module.exports = exports['default'];

/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

	var SpriteSymbol = __webpack_require__(27);
	var sprite = __webpack_require__(22);
	var symbol = new SpriteSymbol({
	  "id": "ca-icon-configure",
	  "use": "ca-icon-configure-usage",
	  "viewBox": "0 0 20 20",
	  "content": "<symbol viewBox=\"0 0 20 20\" id=\"ca-icon-configure\"><defs><path d=\"M17.537 4.683L14.37 7.85l-2.22-2.22 3.167-3.165c-1.747-.837-3.93-.546-5.385.909a4.71 4.71 0 0 0-1.055 5.021l-6.658 6.66c-.292.29-.292.763 0 1.018l1.71 1.71c.255.29.728.29 1.018 0l6.659-6.659a4.71 4.71 0 0 0 5.021-1.055c1.454-1.455 1.746-3.638.91-5.385\" id=\"ca-icon-configure_a\" /></defs><use fill=\"currentColor\" xlink:href=\"#ca-icon-configure_a\" fill-rule=\"evenodd\" /></symbol>"
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
//# sourceMappingURL=component---src-pages-atoms-icon-js-b7632ee4bbafd32139e0.js.map