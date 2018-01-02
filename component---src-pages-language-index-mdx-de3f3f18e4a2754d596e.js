webpackJsonp([172129060392273],{

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _IconModule = __webpack_require__(58);
	
	var _IconModule2 = _interopRequireDefault(_IconModule);
	
	var _error = __webpack_require__(49);
	
	var _reactHtmlId = __webpack_require__(64);
	
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

/***/ 58:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"icon":"_-components-Icon----Icon-module---icon---1FWNI","inheritSize":"_-components-Icon----Icon-module---inheritSize---eWkre","blockLayout":"_-components-Icon----Icon-module---blockLayout---1WLhv"};

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

	'use strict';
	module.exports = function () {
		return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g;
	};


/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	const colorConvert = __webpack_require__(32);
	
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(69)(module)))

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	var escapeStringRegexp = __webpack_require__(57);
	var ansiStyles = __webpack_require__(48);
	var stripAnsi = __webpack_require__(66);
	var hasAnsi = __webpack_require__(59);
	var supportsColor = __webpack_require__(67);
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(42)))

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

	/* MIT license */
	var cssKeywords = __webpack_require__(33);
	
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

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

	var conversions = __webpack_require__(27);
	var route = __webpack_require__(51);
	
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

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

	var conversions = __webpack_require__(27);
	
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

/***/ 33:
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

/***/ 57:
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

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var ansiRegex = __webpack_require__(26);
	var re = new RegExp(ansiRegex().source); // remove the `g` flag
	module.exports = re.test.bind(re);


/***/ }),

/***/ 64:
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

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var ansiRegex = __webpack_require__(26)();
	
	module.exports = function (str) {
		return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
	};


/***/ }),

/***/ 67:
/***/ (function(module, exports) {

	'use strict';
	module.exports = false;


/***/ }),

/***/ 68:
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

/***/ 18:
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

/***/ 69:
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

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(16);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Icon = __webpack_require__(22);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _success = __webpack_require__(90);
	
	var _success2 = _interopRequireDefault(_success);
	
	var _exclamation = __webpack_require__(136);
	
	var _exclamation2 = _interopRequireDefault(_exclamation);
	
	var _AdmonitionModule = __webpack_require__(333);
	
	var _AdmonitionModule2 = _interopRequireDefault(_AdmonitionModule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Admonition = function Admonition(_ref) {
	  var type = _ref.type,
	      children = _ref.children;
	
	  var icon = type === 'tip' ? _success2.default : _exclamation2.default;
	  return _react2.default.createElement(
	    'div',
	    { className: (0, _classnames2.default)(_AdmonitionModule2.default.admonition, _AdmonitionModule2.default[type]) },
	    _react2.default.createElement(
	      'span',
	      { className: _AdmonitionModule2.default.iconWrapper },
	      _react2.default.createElement(_Icon2.default, { icon: icon, role: 'img', title: type, inheritSize: true })
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: _AdmonitionModule2.default.content },
	      children
	    )
	  );
	};
	
	Admonition.PropTypes = {
	  children: _propTypes2.default.node,
	  type: _propTypes2.default.oneOf(['tip', 'warning'])
	};
	
	exports.default = Admonition;
	module.exports = exports['default'];

/***/ }),

/***/ 333:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"card":"src-components----Admonition-module---card---O0kTD","admonition":"src-components----Admonition-module---admonition---1wMXy","iconWrapper":"src-components----Admonition-module---iconWrapper---2ybs9","content":"src-components----Admonition-module---content---36EYe","tip":"src-components----Admonition-module---tip---2NoPW","warning":"src-components----Admonition-module---warning---3LqfA"};

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "108ccd64dd744d9af9408ec63355ee6c.png";

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "aa66f076b74f6dae5e9233e2dea6b69d.png";

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b02b6e2fc04e76a198e048283412a461.png";

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "5b81cd79e0ee3719fda2fc22cad80afd.png";

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "76850fb0acddf4e3c1e0c5d44aa5284f.png";

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6302ec105d62165df27dcbbbd4604920.png";

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "8d80c7f0d3b1804ca380c1e065b1fb8f.png";

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "78d605a30057487d703ca8f2fe6eb557.png";

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "8d80c7f0d3b1804ca380c1e065b1fb8f.png";

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	// Module generated from Markdown by Markdown Component Loader v1.0.0
	
	
	var _HtmlContentModule = __webpack_require__(10);
	
	var _HtmlContentModule2 = _interopRequireDefault(_HtmlContentModule);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Link = __webpack_require__(9);
	
	var _Link2 = _interopRequireDefault(_Link);
	
	var _Admonition = __webpack_require__(217);
	
	var _Admonition2 = _interopRequireDefault(_Admonition);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	MarkdownComponent.propTypes = {
	  className: _propTypes2.default.string,
	  style: _propTypes2.default.object,
	  elementProps: _propTypes2.default.object
	};
	
	MarkdownComponent.defaultProps = {
	  elementProps: {}
	};
	
	function MarkdownComponent(props) {
	  var className = props.className,
	      style = props.style,
	      elementProps = props.elementProps;
	
	
	  return _react2.default.createElement(
	    'div',
	    { className: className, style: style },
	    _react2.default.createElement(
	      'h1',
	      _extends({ id: 'product-language-style-guide' }, elementProps['h1']),
	      'Product Language Style Guide'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'This document defines styles for Culture Amp product and product-related (but not marketing) communications.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'It also contains writing advice for these different contexts.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'This document is intended for use by anyone who adds text to the Culture Amp product or related properties, including Designers, Product Managers and, of course, Product Writers. However, the writing advice is intended primarily for use by people who are not professional writers.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'You can also view the ',
	      _react2.default.createElement(
	        _Link2.default,
	        _extends({ to: '/language/checklist' }, elementProps['Link']),
	        'Product Writing Checklist'
	      ),
	      ' to quickly check any text you are adding to the Culture Amp product or related communications.'
	    ),
	    _react2.default.createElement(
	      'h2',
	      _extends({ id: 'table-of-contents' }, elementProps['h2']),
	      'Table of Contents'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      _react2.default.createElement(
	        'div',
	        _extends({ className: 'table-of-contents' }, elementProps['div']),
	        _react2.default.createElement(
	          'ul',
	          elementProps['ul'],
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            _react2.default.createElement(
	              'a',
	              _extends({ href: '#table-of-contents' }, elementProps['a']),
	              'Table of Contents'
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            _react2.default.createElement(
	              'a',
	              _extends({ href: '#culture-amp-brand-tone-and-design-principles' }, elementProps['a']),
	              'Culture Amp: brand tone and design principles'
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            _react2.default.createElement(
	              'a',
	              _extends({ href: '#moments-of-delight-and-language' }, elementProps['a']),
	              'Moments of delight and language'
	            ),
	            _react2.default.createElement(
	              'ul',
	              elementProps['ul'],
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'a',
	                  _extends({ href: '#asking-product-writers-for-help' }, elementProps['a']),
	                  'Asking Product Writers for help'
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            _react2.default.createElement(
	              'a',
	              _extends({ href: '#writing-advice-product-interface-text' }, elementProps['a']),
	              'Writing advice: Product interface text'
	            ),
	            _react2.default.createElement(
	              'ul',
	              elementProps['ul'],
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'a',
	                  _extends({ href: '#writing-process' }, elementProps['a']),
	                  'Writing process'
	                ),
	                _react2.default.createElement(
	                  'ul',
	                  elementProps['ul'],
	                  _react2.default.createElement(
	                    'li',
	                    elementProps['li'],
	                    _react2.default.createElement(
	                      'a',
	                      _extends({ href: '#understand-the-context' }, elementProps['a']),
	                      'Understand the context'
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    elementProps['li'],
	                    _react2.default.createElement(
	                      'a',
	                      _extends({ href: '#think-about-users-and-cultures' }, elementProps['a']),
	                      'Think about users and cultures'
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    elementProps['li'],
	                    _react2.default.createElement(
	                      'a',
	                      _extends({ href: '#check-the-component-specifications' }, elementProps['a']),
	                      'Check the component specifications'
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    elementProps['li'],
	                    _react2.default.createElement(
	                      'a',
	                      _extends({ href: '#write-the-message' }, elementProps['a']),
	                      'Write the message'
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    elementProps['li'],
	                    _react2.default.createElement(
	                      'a',
	                      _extends({ href: '#tighten-up-your-text' }, elementProps['a']),
	                      'Tighten up your text'
	                    )
	                  )
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            _react2.default.createElement(
	              'a',
	              _extends({ href: '#writing-advice-transactional-email' }, elementProps['a']),
	              'Writing advice: Transactional email'
	            ),
	            _react2.default.createElement(
	              'ul',
	              elementProps['ul'],
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'a',
	                  _extends({ href: '#purposes' }, elementProps['a']),
	                  'Purposes'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'a',
	                  _extends({ href: '#general-guidelines' }, elementProps['a']),
	                  'General guidelines'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'a',
	                  _extends({ href: '#writing-process' }, elementProps['a']),
	                  'Writing process'
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            _react2.default.createElement(
	              'a',
	              _extends({ href: '#writing-advice-intercom-messages' }, elementProps['a']),
	              'Writing advice: Intercom messages'
	            ),
	            _react2.default.createElement(
	              'ul',
	              elementProps['ul'],
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'a',
	                  _extends({ href: '#purposes' }, elementProps['a']),
	                  'Purposes'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'a',
	                  _extends({ href: '#general-guidelines' }, elementProps['a']),
	                  'General guidelines'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'a',
	                  _extends({ href: '#writing-process' }, elementProps['a']),
	                  'Writing process'
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            _react2.default.createElement(
	              'a',
	              _extends({ href: '#writing-advice-academy-articles' }, elementProps['a']),
	              'Writing advice: Academy articles'
	            ),
	            _react2.default.createElement(
	              'ul',
	              elementProps['ul'],
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'a',
	                  _extends({ href: '#purpose' }, elementProps['a']),
	                  'Purpose'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'a',
	                  _extends({ href: '#general-guidelines' }, elementProps['a']),
	                  'General guidelines'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'a',
	                  _extends({ href: '#writing-process' }, elementProps['a']),
	                  'Writing process'
	                ),
	                _react2.default.createElement(
	                  'ul',
	                  elementProps['ul'],
	                  _react2.default.createElement(
	                    'li',
	                    elementProps['li'],
	                    _react2.default.createElement(
	                      'a',
	                      _extends({ href: '#consider-users-and-context' }, elementProps['a']),
	                      'Consider users and context'
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    elementProps['li'],
	                    _react2.default.createElement(
	                      'a',
	                      _extends({ href: '#identify-their-goal-within-the-product' }, elementProps['a']),
	                      'Identify their goal within the product'
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    elementProps['li'],
	                    _react2.default.createElement(
	                      'a',
	                      _extends({ href: '#map-the-process-to-achieve-that-goal' }, elementProps['a']),
	                      'Map the process to achieve that goal'
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'li',
	                    elementProps['li'],
	                    _react2.default.createElement(
	                      'a',
	                      _extends({ href: '#tighten-up-the-text' }, elementProps['a']),
	                      'Tighten up the text'
	                    )
	                  )
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            _react2.default.createElement(
	              'a',
	              _extends({ href: '#product-lexicon' }, elementProps['a']),
	              'Product lexicon'
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            _react2.default.createElement(
	              'a',
	              _extends({ href: '#component-specifications' }, elementProps['a']),
	              'Component Specifications'
	            ),
	            _react2.default.createElement(
	              'ul',
	              elementProps['ul'],
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'a',
	                  _extends({ href: '#buttons' }, elementProps['a']),
	                  'Buttons'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'a',
	                  _extends({ href: '#notifications' }, elementProps['a']),
	                  'Notifications'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'a',
	                  _extends({ href: '#not-applicable-na-values' }, elementProps['a']),
	                  'Not Applicable (NA) values'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'a',
	                  _extends({ href: '#nil-values' }, elementProps['a']),
	                  'Nil values'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'a',
	                  _extends({ href: '#tooltips' }, elementProps['a']),
	                  'Tooltips'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'a',
	                  _extends({ href: '#empty-states' }, elementProps['a']),
	                  'Empty states'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'a',
	                  _extends({ href: '#errors' }, elementProps['a']),
	                  'Errors'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'a',
	                  _extends({ href: '#page-titles' }, elementProps['a']),
	                  'Page titles'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'a',
	                  _extends({ href: '#placeholder-text' }, elementProps['a']),
	                  'Placeholder text'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'a',
	                  _extends({ href: '#onboarding-messages' }, elementProps['a']),
	                  'Onboarding messages'
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            _react2.default.createElement(
	              'a',
	              _extends({ href: '#general-styles' }, elementProps['a']),
	              'General styles'
	            )
	          )
	        )
	      )
	    ),
	    _react2.default.createElement(
	      'h2',
	      _extends({ id: 'culture-amp-brand-tone-and-design-principles' }, elementProps['h2']),
	      'Culture Amp: brand tone and design principles'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Most style guides begin with tone and brand advice. However in the case of product writing for non-writers, this is not often a very useful starting point. The Culture Amp Design Principles, developed in light of the Culture Amp values, are a better one.'
	    ),
	    _react2.default.createElement(
	      'table',
	      elementProps['table'],
	      _react2.default.createElement(
	        'tr',
	        elementProps['tr'],
	        _react2.default.createElement(
	          'th',
	          elementProps['th'],
	          _react2.default.createElement(
	            'p',
	            elementProps['p'],
	            'Design principle'
	          )
	        ),
	        _react2.default.createElement(
	          'th',
	          elementProps['th'],
	          _react2.default.createElement(
	            'p',
	            elementProps['p'],
	            'All interface text must be\u2026'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'tr',
	        elementProps['tr'],
	        _react2.default.createElement(
	          'td',
	          elementProps['td'],
	          _react2.default.createElement(
	            'p',
	            elementProps['p'],
	            'Nurture to grow'
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          elementProps['td'],
	          _react2.default.createElement(
	            'p',
	            elementProps['p'],
	            'Guiding: don\'t presume.'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'tr',
	        elementProps['tr'],
	        _react2.default.createElement(
	          'td',
	          elementProps['td'],
	          _react2.default.createElement(
	            'p',
	            elementProps['p'],
	            'We\'re all human'
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          elementProps['td'],
	          _react2.default.createElement(
	            'p',
	            elementProps['p'],
	            'Human: be understanding and empathetic.'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'tr',
	        elementProps['tr'],
	        _react2.default.createElement(
	          'td',
	          elementProps['td'],
	          _react2.default.createElement(
	            'p',
	            elementProps['p'],
	            'Honest and purposeful'
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          elementProps['td'],
	          _react2.default.createElement(
	            'p',
	            elementProps['p'],
	            'Clear: be direct, not subtle.'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'tr',
	        elementProps['tr'],
	        _react2.default.createElement(
	          'td',
	          elementProps['td'],
	          _react2.default.createElement(
	            'p',
	            elementProps['p'],
	            'Consider everyone'
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          elementProps['td'],
	          _react2.default.createElement(
	            'p',
	            elementProps['p'],
	            'Inclusive: write at a grade 7 level or lower.'
	          )
	        )
	      )
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Every time you write or review product text, ask yourself if it reflects the four qualities listed above. If it doesn\u2019t, you can improve it using the advice in this guide.'
	    ),
	    _react2.default.createElement(
	      _Admonition2.default,
	      _extends({ type: 'tip' }, elementProps['Admonition']),
	      _react2.default.createElement(
	        'p',
	        elementProps['p'],
	        _react2.default.createElement(
	          'strong',
	          elementProps['strong'],
	          _react2.default.createElement(
	            'em',
	            elementProps['em'],
	            'Importantly'
	          )
	        ),
	        ', these principles encourage us to:'
	      ),
	      _react2.default.createElement(
	        'ul',
	        elementProps['ul'],
	        _react2.default.createElement(
	          'li',
	          elementProps['li'],
	          'refer to the user (you) and ourselves (we) in the interface and product communications'
	        ),
	        _react2.default.createElement(
	          'li',
	          elementProps['li'],
	          'write as if we are speaking to the people using the product.'
	        )
	      ),
	      _react2.default.createElement(
	        'p',
	        elementProps['p'],
	        'This helps us avoid \u201Ccomputer speak\u201D. For example, \u201C16 items deleted\u201D becomes \u201CYou deleted 16 items\u201D.'
	      )
	    ),
	    _react2.default.createElement('p', elementProps['p']),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'If you\u2019re writing longer text and you\u2019re wondering about tone, the Brand tone of voice is:'
	    ),
	    _react2.default.createElement(
	      'ul',
	      elementProps['ul'],
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Friendly but not casual'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Educational but not dull'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Expert but not dictatorial'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Familiar but not inappropriate'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Positive but not unopinionated'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Vulnerable but not hesitant'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Warm but not mushy'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Fun but not childish'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'A community but not a clique.'
	      )
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Select from these to shape the tone depending on the use case and persona. Always keep in mind the many languages into which the text will be translated, and the cultures in which it will be used. For advice on internationalization of text, see the ',
	      _react2.default.createElement(
	        'a',
	        _extends({ href: '(http://www-01.ibm.com/software/globalization/guidelines/guideb.html).' }, elementProps['a']),
	        'IBM Globalization guidelines'
	      )
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Also, if you apply Brand tone of voice, be sure to check what you\u2019ve written with a Product Writer.'
	    ),
	    _react2.default.createElement(
	      'h2',
	      _extends({ id: 'moments-of-delight-and-language' }, elementProps['h2']),
	      'Moments of delight and language'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'If you want to use language to help build a \u201Cmoment of delight\u201D, check it with a Product Writer. Don\u2019t rely solely on language to create a moment of delight, otherwise you risk jarring the user experience.'
	    ),
	    _react2.default.createElement('img', _extends({ src: __webpack_require__(353), alt: 'Screenshot of culture amp "Delete Survey" confirmation where the user must type "SMASH!" to confirm' }, elementProps['img'])),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Delight is usually best engendered through the combination of design, interaction and language used in a way that consistently reflects the brand and culture.'
	    ),
	    _react2.default.createElement(
	      'h3',
	      _extends({ id: 'asking-product-writers-for-help' }, elementProps['h3']),
	      'Asking Product Writers for help'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'If you\u2019re in doubt about anything you write, or anything in this guide, have the courage to be vulnerable and ask a Product Writer. When you\u2019re writing high-stakes text, or text that requires the application of brand tone, you ',
	      _react2.default.createElement(
	        'em',
	        elementProps['em'],
	        'definitely'
	      ),
	      ' need to have a writer involved.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Using this guide and the associated training, you should be able to develop basic interface text without too much trouble, including labels, button names, and so on. You may need some \u2013 or more \u2013 writer involvement on longer text, like errors and emails.'
	    ),
	    _react2.default.createElement(
	      'h2',
	      _extends({ id: 'writing-advice-product-interface-text' }, elementProps['h2']),
	      'Writing advice: Product interface text'
	    ),
	    _react2.default.createElement(
	      'h3',
	      _extends({ id: 'writing-process' }, elementProps['h3']),
	      'Writing process'
	    ),
	    _react2.default.createElement(
	      'ol',
	      elementProps['ol'],
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'h4',
	          _extends({ id: 'understand-the-context' }, elementProps['h4']),
	          'Understand the context'
	        ),
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          'Where does the text appear in the user flow? What\u2019s just happened? How did the user get here? What else in the current context gives the user cues and clues about possible next steps?'
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'h4',
	          _extends({ id: 'think-about-users-and-cultures' }, elementProps['h4']),
	          'Think about users and cultures'
	        ),
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          'Consider the personas (and actual people) using the interface, and the languages and cultures into which it will be translated. That means you\u2019ll avoid:'
	        ),
	        _react2.default.createElement(
	          'ul',
	          elementProps['ul'],
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            'jargon'
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            'colloquialisms'
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            'references to popular culture and in-jokes'
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            'humour (unless you\u2019re working with a Product Writer)'
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            'language that suggests or references violence or destruction.'
	          )
	        ),
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          'Next, identify likely audience feelings at this moment in the UX. What are they trying to get done and how do they feel about it?'
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'h4',
	          _extends({ id: 'check-the-component-specifications' }, elementProps['h4']),
	          'Check the component specifications'
	        ),
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          'The Culture Amp design team has set specifications for certain interface components (buttons, tooltips, and so on). Check the Component Specifications section of this guide to see if the component you\u2019re working on is defined there. If it is, you\u2019ll need to write to those specifications.'
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'h4',
	          _extends({ id: 'write-the-message' }, elementProps['h4']),
	          'Write the message'
	        ),
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          'The message is the key information you need to communicate at this moment to help the user achieve their objective with Culture Amp.'
	        ),
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          'Ask yourself:'
	        ),
	        _react2.default.createElement(
	          'ol',
	          elementProps['ol'],
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            'What\u2019s the goal of this text? What is its role in helping the user achieve their larger objective within Culture Amp?'
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            'At its ',
	            _react2.default.createElement(
	              'em',
	              elementProps['em'],
	              'most basic'
	            ),
	            ', what\u2019s the message we need to communicate? Write this as if you were ',
	            _react2.default.createElement(
	              'em',
	              elementProps['em'],
	              'speaking'
	            ),
	            ' to the person trying to use the product.'
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            'What in 2) is not communicated elsewhere on the page/in the context? The point here is to avoid stating the already-obvious, but take care to consider non-visual users who may not be able to see other visual cues. Consider the example below. Here, the heading puts the action into the continuous tense \u2014 it\u2019s happening now. We have the little three-step process diagram at top-right. And we have the three bullets (which change colour as the progress bar gets filled in and each one is completed). In this context, the word \u201Ccurrently\u201D and the line \u201CWhat we\u2019re processing\u201D seem unnecessary.'
	          )
	        ),
	        _react2.default.createElement('img', _extends({ src: __webpack_require__(347), alt: 'Analyze Imports' }, elementProps['img'])),
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          'With your answers to the three questions above, write down what the text ',
	          _react2.default.createElement(
	            'em',
	            elementProps['em'],
	            'must'
	          ),
	          ' communicate in fewer than 10 words (obviously for buttons and labels the text will be ',
	          _react2.default.createElement(
	            'em',
	            elementProps['em'],
	            'much'
	          ),
	          ' shorter).'
	        ),
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          'Don\u2019t write like a marketer. Use plain English. If it helps, imagine you\u2019re explaining to someone who doesn\u2019t speak English as a first language \u2013 not because our users can\u2019t speak English, but because you\u2019re probably very close to the product, and you\u2019ve likely been looking at this process or interaction for a while. You want to get outside that mindset to make the text work.'
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'h4',
	          _extends({ id: 'tighten-up-your-text' }, elementProps['h4']),
	          'Tighten up your text'
	        ),
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          'Revise the message by asking yourself these questions. Note that you\u2019ll likely need to balance these points against one another to arrive at a best-case scenario for each piece of text.'
	        ),
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          'These guidelines are summarized for easy reference in the ',
	          _react2.default.createElement(
	            _Link2.default,
	            _extends({ to: '/language/checklist' }, elementProps['Link']),
	            'Product Writing Checklist'
	          )
	        ),
	        _react2.default.createElement(
	          'ol',
	          elementProps['ol'],
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            _react2.default.createElement(
	              'p',
	              elementProps['p'],
	              _react2.default.createElement(
	                'strong',
	                elementProps['strong'],
	                'Does your text talk about what the user has just done?'
	              ),
	              ' They already know that, so you can cut that part.'
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            _react2.default.createElement(
	              'p',
	              elementProps['p'],
	              _react2.default.createElement(
	                'strong',
	                elementProps['strong'],
	                'Does your text talk in terms of the product, or descriptions?'
	              ),
	              ' Put the focus on people and actions instead.'
	            ),
	            _react2.default.createElement(
	              'ul',
	              elementProps['ul'],
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'strong',
	                  elementProps['strong'],
	                  'Needs work:'
	                ),
	                ' The latest import of employee data was successful. You can now manage your surveys or employee data.'
	              ),
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'strong',
	                  elementProps['strong'],
	                  'Good:'
	                ),
	                ' Your import worked. Now, go to your surveys or employee data.'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            _react2.default.createElement(
	              'p',
	              elementProps['p'],
	              _react2.default.createElement(
	                'strong',
	                elementProps['strong'],
	                'Does your text talk in the negative?'
	              ),
	              ' Rephrase it to the positive wherever possible.'
	            ),
	            _react2.default.createElement(
	              'ul',
	              elementProps['ul'],
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'strong',
	                  elementProps['strong'],
	                  'Needs work:'
	                ),
	                ' Don\u2019t click Delete unless...'
	              ),
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'strong',
	                  elementProps['strong'],
	                  'Good:'
	                ),
	                ' If you click Delete you will...'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            _react2.default.createElement(
	              'p',
	              elementProps['p'],
	              _react2.default.createElement(
	                'strong',
	                elementProps['strong'],
	                'Is your text polite?'
	              ),
	              ' As with the examples above, polite text is usually longer than plain language. Opt for the plainest language you can write. Plain doesn\u2019t mean rude.'
	            ),
	            _react2.default.createElement(
	              'ul',
	              elementProps['ul'],
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'strong',
	                  elementProps['strong'],
	                  'Needs work:'
	                ),
	                ' Sorry, that didn\u2019t work. Please try again, and if you\u2019re still having problems feel free to get in touch with us at support@cultureamp.com'
	              ),
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'strong',
	                  elementProps['strong'],
	                  'Good:'
	                ),
	                ' Sorry, that didn\u2019t work. Try again, or contact us at support@cultureamp.com.'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            _react2.default.createElement(
	              'p',
	              elementProps['p'],
	              _react2.default.createElement(
	                'strong',
	                elementProps['strong'],
	                'Shorten or break up sentences wherever you can.'
	              )
	            ),
	            _react2.default.createElement(
	              'ul',
	              elementProps['ul'],
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'strong',
	                  elementProps['strong'],
	                  'Needs work:'
	                ),
	                ' Along with options to launch, share and complete multiple 360 processes, you can now change due dates, set reminders, or delete multiple 360s in just one click!'
	              ),
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'strong',
	                  elementProps['strong'],
	                  'Good:'
	                ),
	                ' It\u2019s now easier than ever to manage multiple 360 processes. Change due dates, set reminders, and delete multiple 360s in one click.'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            _react2.default.createElement(
	              'p',
	              elementProps['p'],
	              _react2.default.createElement(
	                'strong',
	                elementProps['strong'],
	                'Check each word'
	              ),
	              ' and make sure it aligns with contextual interface text'
	            ),
	            _react2.default.createElement(
	              'p',
	              elementProps['p'],
	              'and the product lexicon:'
	            ),
	            _react2.default.createElement(
	              'ul',
	              elementProps['ul'],
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'p',
	                  elementProps['p'],
	                  'Use consistent capitalization and spelling.'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'p',
	                  elementProps['p'],
	                  'Use consistent nomenclature. In this example, \u201Capply\u201D would ideally be \u201Creview\u201D because we\u2019re at the Review step in the import process, and the heading reflects this.'
	                ),
	                _react2.default.createElement('img', _extends({ src: __webpack_require__(348), alt: 'Screenshot of import modal' }, elementProps['img']))
	              )
	            ),
	            _react2.default.createElement(
	              'ul',
	              elementProps['ul'],
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'p',
	                  elementProps['p'],
	                  'Check that your text has the same grammatical structure as parallel text on the page (that is, text that serves the same purpose in the same level of the interface). For example, in the form below, the final heading (and button text) should ideally reflect the verb-noun structure of the other two. It could read: Extract Survey Data.'
	                ),
	                _react2.default.createElement('img', _extends({ src: __webpack_require__(354), alt: 'Screenshot of survey admin' }, elementProps['img']))
	              ),
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'p',
	                  elementProps['p'],
	                  'Remove any redundancy. For example, in the warning below, \u201Cno longer\u201D is redundant in the context of a reference to the \u201Cfuture\u201D. We could rephrase this to: If you delete a demographic, it won\u2019t be available to use in future surveys, but it will stay in existing surveys.'
	                ),
	                _react2.default.createElement('img', _extends({ src: __webpack_require__(351), alt: 'Screenshot of Culture Amp warning' }, elementProps['img']))
	              ),
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'p',
	                  elementProps['p'],
	                  'If, as you write, you need to associate particular concepts with a feature (e.g. working with/managing \u201Cbatches\u201D of 360\xB0 processes), choose language that you can use consistently, and ask the Product Writer to add it to the product lexicon so that it is used consistently.'
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            _react2.default.createElement(
	              'p',
	              elementProps['p'],
	              _react2.default.createElement(
	                'strong',
	                elementProps['strong'],
	                'For words that don\u2019t appear elsewhere in the interface, try to find a synonym that\u2019s simpler'
	              ),
	              ' and has fewer syllables. Use a thesaurus (e.g. Apple thesaurus) if you need to.'
	            ),
	            _react2.default.createElement(
	              'ul',
	              elementProps['ul'],
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'p',
	                  elementProps['p'],
	                  _react2.default.createElement(
	                    'strong',
	                    elementProps['strong'],
	                    'Needs work:'
	                  ),
	                  ' We\u2019ve been notified and are investigating the issue.'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'p',
	                  elementProps['p'],
	                  _react2.default.createElement(
	                    'strong',
	                    elementProps['strong'],
	                    'Good:'
	                  ),
	                  ' We\u2019re working on the problem now.'
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            _react2.default.createElement(
	              'p',
	              elementProps['p'],
	              _react2.default.createElement(
	                'strong',
	                elementProps['strong'],
	                'Check the tense.'
	              ),
	              ' Make sure that the text maintains the same tense throughout, unless a change in tense is needed. Present tense is most commonly needed for interface text. Change tense (e.g. from present to future text) only when it\u2019s needed (e.g. when you\u2019re talking about the consequences of an action).'
	            ),
	            _react2.default.createElement(
	              'ul',
	              elementProps['ul'],
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'strong',
	                  elementProps['strong'],
	                  'Needs work:'
	                ),
	                ' We\u2019ve added some features that would make it easy for you to manage 360 surveys at scale.'
	              ),
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'strong',
	                  elementProps['strong'],
	                  'Good:'
	                ),
	                ' New features make it easier for you to manage 360 surveys at scale.'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            _react2.default.createElement(
	              'p',
	              elementProps['p'],
	              _react2.default.createElement(
	                'strong',
	                elementProps['strong'],
	                'Remove -ing verbs'
	              ),
	              ' (gerunds and continuous constructions).'
	            ),
	            _react2.default.createElement(
	              'p',
	              elementProps['p'],
	              'Ing verbs tend to add syllables and complicate grammar, which often raises the reading level of text for no benefit. These verbs fall into 2 categories:'
	            ),
	            _react2.default.createElement(
	              'ul',
	              elementProps['ul'],
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                'Continuous verbs, which we use to describe actions that have begun but haven\u2019t finished (e.g. We\u2019re saving your changes).'
	              ),
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                'Gerunds, or ing-verbs acting as nouns. (e.g. Saving will make your changes live.)'
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              elementProps['p'],
	              'Continuous verbs are fine if you\u2019re alerting people about a process that\u2019s in progress. In all other cases, reword text to avoid verbs that end in ing.'
	            ),
	            _react2.default.createElement(
	              'ul',
	              elementProps['ul'],
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'strong',
	                  elementProps['strong'],
	                  'Needs work:'
	                ),
	                ' Deleting survey name will also delete any associated responses and reporting data.'
	              ),
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'strong',
	                  elementProps['strong'],
	                  'Good:'
	                ),
	                ' If you delete survey name, the survey and its data will be gone forever.'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            _react2.default.createElement(
	              'p',
	              elementProps['p'],
	              _react2.default.createElement(
	                'strong',
	                elementProps['strong'],
	                'Make sure the text is active, not passive.'
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              elementProps['p'],
	              'There are two kinds of construction in English: active and passive.'
	            ),
	            _react2.default.createElement(
	              'p',
	              elementProps['p'],
	              'Active sentences have an ',
	              _react2.default.createElement(
	                'u',
	                elementProps['u'],
	                'actor'
	              ),
	              ', an ',
	              _react2.default.createElement(
	                'b',
	                elementProps['b'],
	                'action'
	              ),
	              ', and a ',
	              _react2.default.createElement(
	                'i',
	                elementProps['i'],
	                'thing that receives the action'
	              ),
	              ': ',
	              _react2.default.createElement(
	                'u',
	                elementProps['u'],
	                'The cat'
	              ),
	              ' ',
	              _react2.default.createElement(
	                'b',
	                elementProps['b'],
	                'sat'
	              ),
	              ' on ',
	              _react2.default.createElement(
	                'i',
	                elementProps['i'],
	                'the mat'
	              ),
	              '.'
	            ),
	            _react2.default.createElement(
	              'p',
	              elementProps['p'],
	              'Passive sentences demote the actor (or remove them entirely) to prioritize either the action, or the thing that\u2019s receiving action: ',
	              _react2.default.createElement(
	                'i',
	                elementProps['i'],
	                'The mat'
	              ),
	              ' was ',
	              _react2.default.createElement(
	                'b',
	                elementProps['b'],
	                'sat on'
	              ),
	              ' [by ',
	              _react2.default.createElement(
	                'u',
	                elementProps['u'],
	                'the cat'
	              ),
	              '].'
	            ),
	            _react2.default.createElement(
	              'p',
	              elementProps['p'],
	              'As you can see, passive sentences tend to be longer. They\u2019re also murkier. Let\u2019s look at the previous example, which is passive:'
	            ),
	            _react2.default.createElement(
	              'p',
	              elementProps['p'],
	              _react2.default.createElement(
	                'b',
	                elementProps['b'],
	                'Deleting'
	              ),
	              ' ',
	              _react2.default.createElement(
	                'i',
	                elementProps['i'],
	                'survey name'
	              ),
	              ' will also ',
	              _react2.default.createElement(
	                'b',
	                elementProps['b'],
	                'delete'
	              ),
	              ' any ',
	              _react2.default.createElement(
	                'i',
	                elementProps['i'],
	                'associated responses and reporting data'
	              ),
	              '.'
	            ),
	            _react2.default.createElement(
	              'p',
	              elementProps['p'],
	              'To fix it, we can add the actor and make \u201Cdeleting\u201D the action (that is, a verb) rather than the name of a task (that is, a gerund).'
	            ),
	            _react2.default.createElement(
	              'p',
	              elementProps['p'],
	              'If ',
	              _react2.default.createElement(
	                'u',
	                elementProps['u'],
	                'you'
	              ),
	              ' ',
	              _react2.default.createElement(
	                'b',
	                elementProps['b'],
	                'delete'
	              ),
	              ' ',
	              _react2.default.createElement(
	                'i',
	                elementProps['i'],
	                'survey name'
	              ),
	              ' ',
	              _react2.default.createElement(
	                'u',
	                elementProps['u'],
	                'you\u2019ll'
	              ),
	              ' also ',
	              _react2.default.createElement(
	                'b',
	                elementProps['b'],
	                'delete'
	              ),
	              ' its ',
	              _react2.default.createElement(
	                'i',
	                elementProps['i'],
	                'responses and report data'
	              ),
	              '.'
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            _react2.default.createElement(
	              'p',
	              elementProps['p'],
	              _react2.default.createElement(
	                'strong',
	                elementProps['strong'],
	                'Check that you\u2019ve used American English.'
	              ),
	              ' See the General Styles for details.'
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            _react2.default.createElement(
	              'p',
	              elementProps['p'],
	              _react2.default.createElement(
	                'strong',
	                elementProps['strong'],
	                'Check that your usage of Culture Amp language aligns with the Product Lexicon.'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            _react2.default.createElement(
	              'p',
	              elementProps['p'],
	              _react2.default.createElement(
	                'strong',
	                elementProps['strong'],
	                'Check punctuation'
	              ),
	              ' and any other questions against the information in this style guide and the AP Stylebook.'
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            _react2.default.createElement(
	              'p',
	              elementProps['p'],
	              _react2.default.createElement(
	                'strong',
	                elementProps['strong'],
	                'Check the readability of your text'
	              ),
	              ' at https://www.webpagefx.com/tools/read-able/check.php, or on your own copy of ',
	              _react2.default.createElement(
	                'a',
	                _extends({ href: 'http://www.hemingwayapp.com/desktop.html' }, elementProps['a']),
	                'Hemingway for desktop'
	              ),
	              '. It should be at grade 7 level or below. To reduce the reading level:'
	            ),
	            _react2.default.createElement(
	              'ul',
	              elementProps['ul'],
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                'shorten sentences'
	              ),
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                'make sentences active'
	              ),
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                'use simpler words'
	              ),
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                'cut words.'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            _react2.default.createElement(
	              'p',
	              elementProps['p'],
	              _react2.default.createElement(
	                'strong',
	                elementProps['strong'],
	                'Show your text to a friend'
	              ),
	              ' in design for a sanity check.'
	            )
	          )
	        )
	      )
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'For tips on user-testing interface text, see https://userresearch.blog.gov.uk/2015/07/01/what-does-this-mean-tips-for-testing-your-words/'
	    ),
	    _react2.default.createElement(
	      'h2',
	      _extends({ id: 'writing-advice-transactional-email' }, elementProps['h2']),
	      'Writing advice: Transactional email'
	    ),
	    _react2.default.createElement(
	      'h3',
	      _extends({ id: 'purposes' }, elementProps['h3']),
	      'Purposes'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Transactional emails are usually used:'
	    ),
	    _react2.default.createElement(
	      'ul',
	      elementProps['ul'],
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'to alert users about changes to their permissions/capabilities'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'to remind users to take a survey'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'to inform users that an auto-upload has completed.'
	      )
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Note that occasionally email will be sent through Intercom to notify people who haven\u2019t logged into the platform for weeks about a piece of news.'
	    ),
	    _react2.default.createElement(
	      'h3',
	      _extends({ id: 'general-guidelines' }, elementProps['h3']),
	      'General guidelines'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'To write transactional emails, follow the writing process below. Keep these points in mind:'
	    ),
	    _react2.default.createElement(
	      'ul',
	      elementProps['ul'],
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Prioritize the action you want the reader to take. Make this the focus of your email.'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Prioritize the reader. Don\u2019t tell them, \u201Cwe\u2019ve done this.\u201D Tell them, \u201Cnow you can do this.\u201D'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Avoid providing advice or instructions, either for things like meeting with employees, or how to use the interface, in the email itself. Instead, create a piece of Academy content that can be complete, and to which you can link from the email.'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Do ',
	        _react2.default.createElement(
	          'em',
	          elementProps['em'],
	          'everything you can'
	        ),
	        ' to reduce formality, reduce the reading level of your text, and make it read naturally. If you\u2019re having trouble doing that, paste it sentence by sentence into the ',
	        _react2.default.createElement(
	          'a',
	          _extends({ href: 'https://www.webpagefx.com/tools/read-able/' }, elementProps['a']),
	          'text analysis tool'
	        ),
	        ' (or use Hemingway) so you can identify and improve the specific ones that are problematic.'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Try to avoid using the kinds of words that spam filters focus on. Check your message against ',
	        _react2.default.createElement(
	          'a',
	          _extends({ href: 'https://prospect.io/blog/455-email-spam-trigger-words-avoid-2017/' }, elementProps['a']),
	          'a list like this one'
	        ),
	        '.'
	      )
	    ),
	    _react2.default.createElement(
	      'h3',
	      _extends({ id: 'writing-process-2' }, elementProps['h3']),
	      'Writing process'
	    ),
	    _react2.default.createElement(
	      'ul',
	      elementProps['ul'],
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Identify the action you\u2019re trying to generate, considering the user, their point in the process, and so on. If all you\u2019re doing is confirming something, first ask yourself if an email is actually necessary \u2014 can you confirm whatever the user has requested in the interface?'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Write the messaging ',
	        _react2.default.createElement(
	          'em',
	          elementProps['em'],
	          'just'
	        ),
	        ' for that action or confirmation (ideally 5 words or fewer).'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Use that messaging as the basis for writing the email subject line (5 words or fewer).'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Insert a greeting between the subject line and the call to action.'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Write why that action is needed (ideally no more than a sentence).'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Offer help with the action (or confirmation) \u2013 either link to the Academy or include the support email address, or both.'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Write a signoff.'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Tighten up the text. Use the advice in Step 5 in the writing advice for Product interface text to help.'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Apply the Product lexicon and General styles included in this guide. If you need more information, check the AP Stylebook. If, as you write, you need to associate particular concepts with a feature (e.g. working with/managing \u201Cbatches\u201D of 360\xB0 processes), choose language that you can use consistently, and ask a Product Writer to add it to the product lexicon so that it is used consistently.'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Check the readability of your text at https://www.webpagefx.com/tools/read-able/check.php, or on your own copy of ',
	        _react2.default.createElement(
	          'a',
	          _extends({ href: 'http://www.hemingwayapp.com/desktop.html' }, elementProps['a']),
	          'Hemingway for desktop'
	        ),
	        '. It should be at grade 7 level or below. To reduce the reading level:',
	        _react2.default.createElement(
	          'ul',
	          elementProps['ul'],
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            'shorten sentences'
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            'make sentences active'
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            'use simpler words'
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            'cut words.'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Proofread and then show your system emails to a Product Writer, ideally before you make them live.'
	      )
	    ),
	    _react2.default.createElement(
	      'h2',
	      _extends({ id: 'writing-advice-intercom-messages' }, elementProps['h2']),
	      'Writing advice: Intercom messages'
	    ),
	    _react2.default.createElement(
	      'h3',
	      _extends({ id: 'purposes-2' }, elementProps['h3']),
	      'Purposes'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Intercom messages are used primarily:'
	    ),
	    _react2.default.createElement(
	      'ul',
	      elementProps['ul'],
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'to alert users to a system outage in which the platform remains accessible'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'to reassure users previously alerted about an outage that the service has resumed'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'to tell users about a coming feature change so that they can choose to opt out if they wish'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'to tell users about a feature change that has taken place'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'to remind users about regular actions (like maintenance) that will make the product, or parts of it, unavailable'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'to solicit quantitative feedback from users about a feature, where you don\u2019t have the time or contacts to work with the Customer team to do this.'
	      )
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'As a new feature is progressively rolled out, funnelled Intercom messages about it can also be valuable if used judiciously.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'To communicate about launches through Intercom, speak to Product Marketing.'
	    ),
	    _react2.default.createElement(
	      'h3',
	      _extends({ id: 'general-guidelines-2' }, elementProps['h3']),
	      'General guidelines'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Guidelines for writing Intercom messages:'
	    ),
	    _react2.default.createElement(
	      'ul',
	      elementProps['ul'],
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Focus on communicating the action/s the user needs to take now.'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'The shorter the message, the better.'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Include one small image if you need to highlight a change to the interface.'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Prioritize the reader. Don\u2019t tell them, \u201Cwe\u2019ve done this.\u201D Tell them, \u201Cnow you can do this.\u201D'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Where possible, display the primary call to action on a button, unless you\u2019re linking to a website (e.g. the Academy).'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Use the thumbs up/down tool to gauge broad user sentiment about the message.'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Don\u2019t engage with users in a chat thread within Intercom.'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Have another PM, or a Product Writer, read over the text for tone before you make it live.'
	      )
	    ),
	    _react2.default.createElement(
	      'h3',
	      _extends({ id: 'writing-process-3' }, elementProps['h3']),
	      'Writing process'
	    ),
	    _react2.default.createElement(
	      'ul',
	      elementProps['ul'],
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Identify the action you\u2019re trying to generate (considering the user, their point in the process, etc.).'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Write the messaging for that action (ideally 5 words or fewer).'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Above this, greet the user and say why you\u2019re interrupting them (one sentence).'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'After your action message, provide essential supporting detail (ideally one sentence).'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Offer help with the action \u2013 either link to the Academy or include the support email address, or both.'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Tighten up the text. Use the advice in Step 5 in the writing advice for Product interface text to help.'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Apply the Product lexicon and General styles included in this guide. If you need more information, check the AP Stylebook. If, as you write, you need to associate particular concepts with a feature (e.g. working with/managing \u201Cbatches\u201D of 360\xB0 processes), choose language that you can use consistently, and ask a Product Writer to add it to the product lexicon so that it is used consistently.'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Check the readability of your text at https://www.webpagefx.com/tools/read-able/check.php, or on your own copy of ',
	        _react2.default.createElement(
	          'a',
	          _extends({ href: 'http://www.hemingwayapp.com/desktop.html' }, elementProps['a']),
	          'Hemingway for desktop'
	        ),
	        '. It should be at grade 7 level or below. To reduce the reading level:',
	        _react2.default.createElement(
	          'ul',
	          elementProps['ul'],
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            'shorten sentences'
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            'make sentences active'
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            'use simpler words'
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            'cut words.'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Proofread the message, then have another PM proofread your work.'
	      )
	    ),
	    _react2.default.createElement(
	      'h2',
	      _extends({ id: 'writing-advice-academy-articles' }, elementProps['h2']),
	      'Writing advice: Academy articles'
	    ),
	    _react2.default.createElement(
	      'h3',
	      _extends({ id: 'purpose' }, elementProps['h3']),
	      'Purpose'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Culture Amp Academy articles help customers get things done with Culture Amp.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Avoid writing Academy articles as product documentation. Consider every content item a tool to help someone use the product to achieve a goal.'
	    ),
	    _react2.default.createElement(
	      'h3',
	      _extends({ id: 'general-guidelines-3' }, elementProps['h3']),
	      'General guidelines'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'When you\u2019re writing help content:'
	    ),
	    _react2.default.createElement(
	      'ul',
	      elementProps['ul'],
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          'Write step-by-step, numbered instructions.'
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          'Write in short sentences and paragraphs.'
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          'Use lists to present alternatives or options within a step.'
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          'Start from the same point in the software every time (e.g. agree between product teams that Step 1 is always Log into Culture Amp, and subsequent steps show how to access the functionality in question from there).'
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          'Make sure that the text maintains the same tense throughout, unless a change in tense is needed. Change tense (e.g. from present to future tense) only when it\u2019s needed \u2013 for example, when you\u2019re talking about the consequences of an action.'
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          'Use images and ALT text wherever they logically make sense.'
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          'Use a blue arrow to highlight important features of product screen captures.'
	        ),
	        _react2.default.createElement(
	          'ul',
	          elementProps['ul'],
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            _react2.default.createElement(
	              'strong',
	              elementProps['strong'],
	              'This style is pending designer review.'
	            )
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          'If you add See Also links, consider the next steps a user is likely to take after they use the help article you\u2019re writing.'
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          'If you include a video, include a transcript of it.'
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          'Don\u2019t forget to ',
	          _react2.default.createElement(
	            'a',
	            _extends({ href: 'https://academy.cultureamp.com/hc/en-us/articles/205062809-Using-Academy-maintaining-articles' }, elementProps['a']),
	            'maintain your articles in the Academy'
	          ),
	          ' over time.'
	        )
	      )
	    ),
	    _react2.default.createElement(
	      'h3',
	      _extends({ id: 'writing-process-4' }, elementProps['h3']),
	      'Writing process'
	    ),
	    _react2.default.createElement(
	      'ol',
	      elementProps['ol'],
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'h4',
	          _extends({ id: 'consider-users-and-context' }, elementProps['h4']),
	          'Consider users and context'
	        ),
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          'Orient yourself to the user\u2019s mindset. How do they feel when they reach this piece of help content? Consider their stresses, frustrations and desires in this moment.'
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'h4',
	          _extends({ id: 'identify-their-goal-within-the-product' }, elementProps['h4']),
	          'Identify their goal within the product'
	        ),
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          'Define what the user wants to do in around five words.'
	        ),
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          'Shape this into a title for your help article. In doing this:'
	        ),
	        _react2.default.createElement(
	          'ul',
	          elementProps['ul'],
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            'consider the title\u2019s searchability and the natural language of users'
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            'consider the scannability of the title in a list of categorised articles'
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            'ensure How-to titles begin with a present-simple-tense verb:',
	            _react2.default.createElement(
	              'ul',
	              elementProps['ul'],
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'strong',
	                  elementProps['strong'],
	                  'Needs work:'
	                ),
	                ' Running Onboard & Exit Surveys'
	              ),
	              _react2.default.createElement(
	                'li',
	                elementProps['li'],
	                _react2.default.createElement(
	                  'strong',
	                  elementProps['strong'],
	                  'Good:'
	                ),
	                ' Run Onboard and Exit Surveys'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            'ensure titles are written in sentence case with appropriate product- and feature-name capitalization.'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'h4',
	          _extends({ id: 'map-the-process-to-achieve-that-goal' }, elementProps['h4']),
	          'Map the process to achieve that goal'
	        ),
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          'Map the process as a series of numbered steps. Allocate a new step for each interaction a user must make (e.g. each click, each field-completion-and-click, and so on).'
	        ),
	        _react2.default.createElement(
	          'ul',
	          elementProps['ul'],
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            _react2.default.createElement(
	              'strong',
	              elementProps['strong'],
	              'Use an image'
	            ),
	            ' to clarify any point that might confuse users.'
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            _react2.default.createElement(
	              'strong',
	              elementProps['strong'],
	              'Use subheadings'
	            ),
	            ' to break up parallel chunks of information that must logically appear in the same help article.'
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            _react2.default.createElement(
	              'strong',
	              elementProps['strong'],
	              'Use a Note'
	            ),
	            ' to highlight information which is not a direct part of the process of achieving the user\u2019s goal, but will help them complete that process.'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'h4',
	          _extends({ id: 'tighten-up-the-text' }, elementProps['h4']),
	          'Tighten up the text'
	        )
	      )
	    ),
	    _react2.default.createElement(
	      'ul',
	      elementProps['ul'],
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Shorten or break up sentences wherever you can.'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Put the focus on users and actions.'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Is your text talking in the negative? Rephrase it to the positive wherever possible.',
	        _react2.default.createElement(
	          'ul',
	          elementProps['ul'],
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            _react2.default.createElement(
	              'strong',
	              elementProps['strong'],
	              'Needs work:'
	            ),
	            ' Don\u2019t click Delete unless\u2026.'
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            _react2.default.createElement(
	              'strong',
	              elementProps['strong'],
	              'Good:'
	            ),
	            ' Click Delete to...'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Talk in the singular unless the help is specifically focused on completing multiple actions, or acting on multiple items at once.',
	        _react2.default.createElement(
	          'ul',
	          elementProps['ul'],
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            _react2.default.createElement(
	              'strong',
	              elementProps['strong'],
	              'Needs work:'
	            ),
	            ' To archive surveys...'
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            _react2.default.createElement(
	              'strong',
	              elementProps['strong'],
	              'Good:'
	            ),
	            ' To archive a survey\u2026'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Check each word and make sure it aligns with contextual interface text and the product lexicon. Note that if, as you write, you need to associate particular concepts with a feature (e.g. working with/managing \u201Cbatches\u201D of 360\xB0 processes), choose language that you can use consistently, and ask a Product Writer to add it to the product lexicon so that it is used consistently.'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'For non-contextual words, try to find a synonym that\u2019s simpler and has fewer syllables. Use a thesaurus (e.g. Apple thesaurus) if you need to.'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Remove ing verbs (gerunds and continuous constructions). See this point in the writing advice for Product interface text for details.'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Make sure the text is active, not passive. See this point in the writing advice for Product interface text for details.'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Check that you\u2019ve used American English.'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Check punctuation and any other questions against the information in this style guide.'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Apply the Product lexicon and General styles included in this guide. If you need more information, check the AP Stylebook. If, as you write, you need to associate particular concepts with a feature (e.g. working with/managing \u201Cbatches\u201D of 360\xB0 processes), choose language that you can use consistently, and ask a Product Writer to add it to the product lexicon so that it is used consistently.'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Check the readability of your text at https://www.webpagefx.com/tools/read-able/check.php, or on your own copy of ',
	        _react2.default.createElement(
	          'a',
	          _extends({ href: 'http://www.hemingwayapp.com/desktop.html' }, elementProps['a']),
	          'Hemingway for desktop'
	        ),
	        '. It should be at grade 7 level or below. To reduce the reading level:',
	        _react2.default.createElement(
	          'ul',
	          elementProps['ul'],
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            'shorten sentences'
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            'make sentences active'
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            'use simpler words'
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            'cut words.'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Proofread the message, then have another PM proofread your work.'
	      )
	    ),
	    _react2.default.createElement(
	      'h2',
	      _extends({ id: 'product-lexicon' }, elementProps['h2']),
	      'Product lexicon'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      _react2.default.createElement(
	        'strong',
	        elementProps['strong'],
	        'Info:'
	      ),
	      ' As of November 2017, Product Managers and the ',
	      _react2.default.createElement(
	        'a',
	        _extends({ href: 'https://cultureamp.atlassian.net/wiki/spaces/PRODMARKETING/overview' }, elementProps['a']),
	        'Product Marketing'
	      ),
	      ' team are working on the product lexicon.'
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'modules-plans-tiers' }, elementProps['h5']),
	      'Modules, Plans, Tiers'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Culture Amp is a platform with three modules: Employee Engagement, Employee Experience, and Employee Effectiveness. You can subscribe to two plans, which contain different modules. Each plan contains three tiers, which dictate service levels, product inclusions, and price.'
	    ),
	    _react2.default.createElement(
	      'h2',
	      _extends({ id: 'component-specifications' }, elementProps['h2']),
	      'Component Specifications'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      _react2.default.createElement(
	        'strong',
	        elementProps['strong'],
	        'Info:'
	      ),
	      ' Images to come'
	    ),
	    _react2.default.createElement(
	      'h3',
	      _extends({ id: 'buttons' }, elementProps['h3']),
	      'Buttons'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Maximum character length: 2-3 words. Avoid phrases.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Capitalization: Sentence case.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Punctuation: No finishing punctuation.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Other: Put verbs first; use only verbs where possible. Let the button identify the action the user is taking. An angle bracket before or after the text shows which direction in the process the user\u2019s click on the button will take them.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      _react2.default.createElement(
	        'strong',
	        elementProps['strong'],
	        'Warning:'
	      ),
	      ' The \u201Cbackward\u201D and \u201Cforward\u201D directions for arrows are dependent on the writing direction (specifically, they are reversed in right-to-left writing systems).'
	    ),
	    _react2.default.createElement(
	      'ul',
	      elementProps['ul'],
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'strong',
	          elementProps['strong'],
	          'Good:'
	        ),
	        ' Create survey'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'strong',
	          elementProps['strong'],
	          'Needs work:'
	        ),
	        ' New survey'
	      )
	    ),
	    _react2.default.createElement('img', _extends({ src: __webpack_require__(349), alt: 'Restart import' }, elementProps['img'])),
	    _react2.default.createElement('img', _extends({ src: __webpack_require__(350), alt: 'Review' }, elementProps['img'])),
	    _react2.default.createElement(
	      'h3',
	      _extends({ id: 'notifications' }, elementProps['h3']),
	      'Notifications'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Maximum length: ideally 90 characters for single-line and toast notifications. If the text is longer, use a multi-line notification broken at 90 characters.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Capitalization: Sentence case.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Punctuation: As usual for prose.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Other: Must have a heading which reflects the key message of the text. That is, it may say less than the text. It shouldn\u2019t simply identify the topic of the notification; it must give the user some indication of why the information is important.'
	    ),
	    _react2.default.createElement(
	      'ul',
	      elementProps['ul'],
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'strong',
	          elementProps['strong'],
	          'Good:'
	        ),
	        ' Your questions have moved'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'strong',
	          elementProps['strong'],
	          'Needs work:'
	        ),
	        ' Deleted section and moved questions'
	      )
	    ),
	    _react2.default.createElement(
	      'h3',
	      _extends({ id: 'not-applicable-na-values' }, elementProps['h3']),
	      'Not Applicable (NA) values'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Use NA, without spaces, slashes or stops, when the function or data are not applicable.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'See also ',
	      _react2.default.createElement(
	        'a',
	        _extends({ href: '#nil-values' }, elementProps['a']),
	        'Nil values'
	      ),
	      '.'
	    ),
	    _react2.default.createElement(
	      'h3',
	      _extends({ id: 'nil-values' }, elementProps['h3']),
	      'Nil values'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'A nil value is a value for which there is no result or value.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Nil values are shown as an en-dash (\u2013) presented as an icon. Refer to the Component Library for details.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'See also ',
	      _react2.default.createElement(
	        'a',
	        _extends({ href: '#not-applicable-na-values' }, elementProps['a']),
	        'Not Applicable (NA) values'
	      ),
	      '.'
	    ),
	    _react2.default.createElement(
	      'h3',
	      _extends({ id: 'tooltips' }, elementProps['h3']),
	      'Tooltips'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Maximum length: depends on the tooltip\u2019s purpose.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Capitalization: Sentence case.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Punctuation: Explained below.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Other:'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Tooltips are used for two purposes:'
	    ),
	    _react2.default.createElement(
	      'ul',
	      elementProps['ul'],
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          'To explain an element of the interface.'
	        ),
	        _react2.default.createElement('img', _extends({ src: __webpack_require__(170), alt: 'Tooltip saying \'Feedback is complete\'' }, elementProps['img'])),
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          'Maximum length: 4 words.'
	        ),
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          'Punctuation: No finishing punctuation'
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          'To give guidance on concepts inherent in the product.'
	        ),
	        _react2.default.createElement('img', _extends({ src: __webpack_require__(170), alt: 'Tooltip with \'Survey Administrator\' heading and large paragraph of text' }, elementProps['img'])),
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          'Maximum length: 35 words, including optional title.'
	        ),
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          'Punctuation: Where the tooltip comprises a full sentence (or more), use finishing punctuation.'
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          'Other: contains a header that reflects the topic of the guidance.'
	        )
	      )
	    ),
	    _react2.default.createElement(
	      'h3',
	      _extends({ id: 'empty-states' }, elementProps['h3']),
	      'Empty states'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      _react2.default.createElement(
	        'strong',
	        elementProps['strong'],
	        'Warning:'
	      ),
	      ' These guidelines require confirmation and clarification.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Maximum character length: N/A'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Capitalization: Sentence case.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Punctuation: As usual for prose.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Other:'
	    ),
	    _react2.default.createElement(
	      'ul',
	      elementProps['ul'],
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'The empty state displays a sentence explaining why there\u2019s nothing to show.'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'If the message displays on its own page, it includes:',
	        _react2.default.createElement(
	          'ul',
	          elementProps['ul'],
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            'a subheading'
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            'an explanation of what will appear on the page, and when'
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            'a back link to take the user to the previous page'
	          ),
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            'a line drawing or sketch.'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'If it\u2019s practical, include an explanation to the user about what to do if they want to see data in the currently-empty state.'
	      )
	    ),
	    _react2.default.createElement(
	      'h3',
	      _extends({ id: 'errors' }, elementProps['h3']),
	      'Errors'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Maximum character length: N/A'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Capitalization: Sentence case.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Punctuation: As usual for prose.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Other: Say sorry, and lead with that, not the error number (if there is one). Don\u2019t tell users not to worry. Don\u2019t use \u201Cplease.\u201D Don\u2019t be cute (unless you\u2019re working with a Product Writer).'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Provide options, as appropriate, to:'
	    ),
	    _react2.default.createElement(
	      'ul',
	      elementProps['ul'],
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'try again'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'go home'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'go back'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'visit/contact support.'
	      )
	    ),
	    _react2.default.createElement(
	      'h3',
	      _extends({ id: 'page-titles' }, elementProps['h3']),
	      'Page titles'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Maximum character length: N/A'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Capitalization: Title case. Don\u2019t capitalise articles (a, the, an) or prepositions (e.g. in, on, at).'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Punctuation: No finishing punctuation.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Other: Keep them short and direct. Focus on nouns; page titles are not calls to action, nor are they descriptions.'
	    ),
	    _react2.default.createElement(
	      'h3',
	      _extends({ id: 'placeholder-text' }, elementProps['h3']),
	      'Placeholder text'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Maximum character length: N/A'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Capitalization: Sentence case.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Punctuation: No finishing punctuation.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Other: Placeholder text is used in any form field which isn\u2019t prefilled on pageload. It is always preceded by: e.g. in lowercase, regardless of the fact that nothing precedes it. Common patterns we use for placeholder text are:'
	    ),
	    _react2.default.createElement(
	      'ul',
	      elementProps['ul'],
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Email addresses: contact@example.com',
	        _react2.default.createElement(
	          'ul',
	          elementProps['ul'],
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            _react2.default.createElement(
	              'strong',
	              elementProps['strong'],
	              'Georgina says:'
	            ),
	            ' This is not shown in the example below but I think it would be a good generic one to use, rather than changing the placeholder email depending on the type of email we need.'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Names: Given-name Family-name (as \u201CFirst name\u201D and \u201Clast name\u201D are reversed in different cultures).'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Dates: mmm, dd, yyyy'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Generic: example label; example title, example description'
	      )
	    ),
	    _react2.default.createElement('img', _extends({ src: __webpack_require__(352), alt: 'Example input field showing placeholder which says \'e.g. support@example.com\'' }, elementProps['img'])),
	    _react2.default.createElement(
	      'h3',
	      _extends({ id: 'onboarding-messages' }, elementProps['h3']),
	      'Onboarding messages'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      _react2.default.createElement(
	        'em',
	        elementProps['em'],
	        'Undefined as yet.'
	      )
	    ),
	    _react2.default.createElement(
	      'h2',
	      _extends({ id: 'general-styles' }, elementProps['h2']),
	      'General styles'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'For full details of general styles, refer to the AP Stylebook online. Each Product Manager has a license, as does Product Marketing.'
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'american-spellings' }, elementProps['h5']),
	      'American spellings'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'If you have a word whose spelling you need to confirm, use https://www.merriam-webster.com/ or the Apple dictionary. The first spelling displayed in both is the dominant American English form.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Check https://en.oxforddictionaries.com/spelling/british-and-spelling to understand what kinds of words have regionalized spellings.'
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'andor' }, elementProps['h5']),
	      'and/or'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'And is used for addition. Or is used to introduce an alternative, that is, in cases where only one option can be selected.'
	    ),
	    _react2.default.createElement(
	      'ul',
	      elementProps['ul'],
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'strong',
	          elementProps['strong'],
	          'Needs work:'
	        ),
	        ' Please see our website for up-to-date pricing plans, or you can contact someone to arrange a demonstration.'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'strong',
	          elementProps['strong'],
	          'Good:'
	        ),
	        ' See our pricing plans and contact us to arrange a demonstration.'
	      )
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: '' }, elementProps['h5']),
	      '&'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'An ampersand is included in some product feature names, and must be included in them every time, in every instance.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Otherwise, don\u2019t use ampersands in prose, nor in titles or labels or other text.'
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'apostrophes' }, elementProps['h5']),
	      'Apostrophes'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'For a singular possessive, the apostrophe comes before the s: the employee\u2019s review.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'For a plural possessive, it comes after the s: the employees\u2019 change rooms.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'In possessives forms of plurals that don\u2019t simply take an s in the plural, the apostrophe goes before the s: women\u2019s, children\u2019s.'
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'bold-text' }, elementProps['h5']),
	      'Bold text'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'See also ',
	      _react2.default.createElement(
	        'a',
	        _extends({ href: '#references-to-interface-elements' }, elementProps['a']),
	        'References to interface elements'
	      ),
	      '.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Unless you\u2019re referring to interface elements, avoid making text bold. Do not use bold text or talking marks for emphasis, nor to draw users\u2019 attention to particular text. Instead, rewrite the text to highlight the part you want to draw attention to. Perhaps consider a list (see also ',
	      _react2.default.createElement(
	        'a',
	        _extends({ href: '#lists' }, elementProps['a']),
	        'Lists'
	      ),
	      ').'
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'capitalization' }, elementProps['h5']),
	      'Capitalization'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Names of product features must take initial capitals in all cases: Account Demographics, not Account demographics.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Capitalise proper nouns (e.g. names of cities and people) as per the AP Stylebook, and Culture Amp products and features only as they appear in the Product Lexicon.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Avoid unnecessary capitalization, for example, using initial capitals on words you want to emphasize, or feel are important.'
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'colons-and-semicolons' }, elementProps['h5']),
	      'Colons and semicolons'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'A colon introduces a list (see also ',
	      _react2.default.createElement(
	        'a',
	        _extends({ href: '#lists' }, elementProps['a']),
	        'Lists'
	      ),
	      '). Colons also separate hours from minutes when we\u2019re talking about time (see also ',
	      _react2.default.createElement(
	        'a',
	        _extends({ href: '#times' }, elementProps['a']),
	        'Times'
	      ),
	      ').'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'You\u2019ll probably never need to use a semicolon.'
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'commas' }, elementProps['h5']),
	      'Commas'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Refer to the AP Stylebook.'
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'contractions' }, elementProps['h5']),
	      'Contractions'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Use common contractions whenever you can: you\u2019ll, we\u2019ll, it\u2019s, you\u2019re.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Don\u2019t use contractions that aren\u2019t commonly written: this\u2019ll, we\u2019ll\u2019ve.'
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'dashes' }, elementProps['h5']),
	      'Dashes'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Use ',
	      _react2.default.createElement(
	        'strong',
	        elementProps['strong'],
	        'spaced en dashes'
	      ),
	      ', like \u2013 this.'
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'dates' }, elementProps['h5']),
	      'Dates'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'For dates, use this format: ',
	      _react2.default.createElement(
	        'code',
	        elementProps['code'],
	        'Mmm DD, YYYY'
	      ),
	      ' or ',
	      _react2.default.createElement(
	        'strong',
	        elementProps['strong'],
	        'Jun 12, 2017'
	      ),
	      '. This is consistent with our employee data import practices (which may change in the future). Including the month in letters instead of numbers supports internationalization for our global audience by removing the ambiguity in dates like 06/12/2017 \u2013 is this referring to DD/MM/YYYY or MM/DD/YYYY?'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'For dates that include days 1-9 of the month, the day takes a single digit: Jun 3, 2017.'
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'dates-and-times' }, elementProps['h5']),
	      'Dates and times'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'We use the user\u2019s local time without a time zone in all cases where that\u2019s clear and unambiguous. The examples below show time zones for completeness.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'For dates and times, use the above considerations and combine like this: ',
	      _react2.default.createElement(
	        'strong',
	        elementProps['strong'],
	        'Oct 17, 2017 at 4:00 p.m. (EST).'
	      )
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'For dates that include days 1-9 of the month, the day takes a single digit: ',
	      _react2.default.createElement(
	        'strong',
	        elementProps['strong'],
	        'Oct 7, 2017 at 4:00 p.m. (EST).'
	      )
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'eg' }, elementProps['h5']),
	      'e.g.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'See also ',
	      _react2.default.createElement(
	        'a',
	        _extends({ href: '#ie' }, elementProps['a']),
	        'i.e.'
	      )
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'e.g. can be used to introduce an example or a suggestion within a sentence. Don\u2019t use it to present a recommendation.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'If you want to use e.g. at the beginning of a sentence, don\u2019t. Instead, write \u201CFor example\u201D or \u201COne example is.\u201D'
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'ellipses' }, elementProps['h5']),
	      'Ellipses'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Ellipses have two purposes. They\u2019re used:'
	    ),
	    _react2.default.createElement(
	      'ul',
	      elementProps['ul'],
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'when a word in the interface needs to be truncated due to space constraints'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'to indicate that a menu item will take a user to a new screen.'
	      )
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Otherwise, avoid using ellipses. They wear thin quickly.'
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'etc' }, elementProps['h5']),
	      'etc.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Use \u201Cand so on\u201D rather than etc.'
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'exclamation-marks' }, elementProps['h5']),
	      'Exclamation marks'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Avoid using these. They wear thin quickly.'
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'gender' }, elementProps['h5']),
	      'Gender'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Avoid using gendered language. Refer to \u201Cpeople\u201D, and \u201Cthe person\u201D rather than \u201Che or she.\u201D'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      _react2.default.createElement(
	        'strong',
	        elementProps['strong'],
	        'Note'
	      ),
	      ': ',
	      _react2.default.createElement(
	        'em',
	        elementProps['em'],
	        'This may need to change depending on what language the PMs choose to use to refer to users.'
	      )
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Note that gender describes the characteristics that a society or culture delineates as masculine or feminine, while sex refers to biological differences; chromosomes, hormonal profiles, internal and external sex organs. (',
	      _react2.default.createElement(
	        'a',
	        _extends({ href: 'http://www.med.monash.edu.au/gendermed/sexandgender.html' }, elementProps['a']),
	        'Source'
	      ),
	      '.)'
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'headings-and-titles' }, elementProps['h5']),
	      'Headings and titles'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Page titles in the product take title case.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Titles in the Academy take sentence case, without finishing punctuation.'
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'ie' }, elementProps['h5']),
	      'i.e.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'See also ',
	      _react2.default.createElement(
	        'a',
	        _extends({ href: '#eg' }, elementProps['a']),
	        'e.g.'
	      )
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Use \u201Cthat is\u201D rather than i.e.'
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'internationalization-of-text' }, elementProps['h5']),
	      'Internationalization of text'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Culture Amp is already translated into numerous languages, and the scope for this work will only increase. IBM presents good ',
	      _react2.default.createElement(
	        'a',
	        _extends({ href: 'http://www-01.ibm.com/software/globalization/guidelines/guideb.html' }, elementProps['a']),
	        'guidelines for writing text that is to be translated'
	      ),
	      '.'
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'links' }, elementProps['h5']),
	      'Links'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Make link text communicate information, so that it\u2019s scannable and accessible.'
	    ),
	    _react2.default.createElement(
	      'ul',
	      elementProps['ul'],
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          _react2.default.createElement(
	            'strong',
	            elementProps['strong'],
	            'Needs work:'
	          ),
	          ' You can see our reports with some sample data here.'
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          _react2.default.createElement(
	            'strong',
	            elementProps['strong'],
	            'Good:'
	          ),
	          ' Our new Employee Data Import Wizard ships on Monday.'
	        )
	      )
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'If a link appears at the end of a sentence, make sure the sentence has a period which is ',
	      _react2.default.createElement(
	        'em',
	        elementProps['em'],
	        'not'
	      ),
	      ' part of the link.'
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'lists' }, elementProps['h5']),
	      'Lists'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Standardize the grammatical structure of list items.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'If the list items are full sentences, give each one sentence case and finishing punctuation.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'If the list items are not grammatically complete sentences:'
	    ),
	    _react2.default.createElement(
	      'ul',
	      elementProps['ul'],
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'don\u2019t give them initial capitals or finishing punctuation'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'make sure the initial word in each list item follows on from the stem sentence (that is, the sentence that introduces your list)'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'give the final item a period.'
	      )
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Bulleted lists are a good way of making paragraph text scannable, as in this example:'
	    ),
	    _react2.default.createElement(
	      'blockquote',
	      elementProps['blockquote'],
	      _react2.default.createElement(
	        'p',
	        elementProps['p'],
	        'Hi ',
	        _react2.default.createElement(
	          'code',
	          elementProps['code'],
	          '<name>'
	        ),
	        ', Good news. You can now manage 360 surveys in batches:'
	      ),
	      _react2.default.createElement(
	        'p',
	        elementProps['p'],
	        'In one click, you can:'
	      ),
	      _react2.default.createElement(
	        'ul',
	        elementProps['ul'],
	        _react2.default.createElement(
	          'li',
	          elementProps['li'],
	          'send reminders'
	        ),
	        _react2.default.createElement(
	          'li',
	          elementProps['li'],
	          'change due dates, and'
	        ),
	        _react2.default.createElement(
	          'li',
	          elementProps['li'],
	          'delete multiple 360 surveys.'
	        )
	      ),
	      _react2.default.createElement(
	        'p',
	        elementProps['p'],
	        'Got questions? Contact us at support@cultureamp.com.'
	      )
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'loginlogin' }, elementProps['h5']),
	      'Login/login'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'See ',
	      _react2.default.createElement(
	        'a',
	        _extends({ href: '#two-words-or-one' }, elementProps['a']),
	        'Two words or one?'
	      )
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'not-applicablenil-values' }, elementProps['h5']),
	      'Not Applicable/Nil values'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Not Applicable (NA) and Nil values are represented differently in the interface.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'See the ',
	      _react2.default.createElement(
	        'a',
	        _extends({ href: '#nil-values' }, elementProps['a']),
	        'Component Specifications'
	      ),
	      ' in this guide for details.'
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'numbers' }, elementProps['h5']),
	      'Numbers'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Should you use numbers or words in prose? Numbers.'
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'okay' }, elementProps['h5']),
	      'Okay'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'If you use it, use the full word, not ok or o.k.'
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'oxford-comma' }, elementProps['h5']),
	      'Oxford comma'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Culture Amp refers to the AP Stylebook for general styles, and the AP Stylebook advocates against the use of the Oxford comma. As in, no.'
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'paragraphs' }, elementProps['h5']),
	      'Paragraphs'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Start a new paragraph with each new point or thought.'
	    ),
	    _react2.default.createElement(
	      'ul',
	      elementProps['ul'],
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          _react2.default.createElement(
	            'strong',
	            elementProps['strong'],
	            'Paragraph needs work:'
	          )
	        ),
	        _react2.default.createElement(
	          'blockquote',
	          elementProps['blockquote'],
	          _react2.default.createElement(
	            'p',
	            elementProps['p'],
	            'The Survey & Interview Workflow is used where you want the option for someone to follow up with the employee for an onboard/exit interview once they have completed their survey, and have this captured in Culture Amp. It provides the opportunity for a more detailed exploration of the employee\u2019s responses and therefore the possibility of direct intervention or action based on the employee\u2019s response. Some people use the basic setup and do occasional interviews but the Survey & Interview Workflow is used when this is a standard approach. The Survey & Interview Workflow introduces the concept of an \'Interviewer\'. The Interviewer is an individual who is responsible for managing and potentially reviewing responses from the onboard/exit process. This is typically the employee\u2019s manager or someone from HR. Interviewers and Administrators can review the employee\'s individual responses prior to the interview to capture any notes and prepare. The Survey & Interview Workflow is illustrated below.'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          _react2.default.createElement(
	            'strong',
	            elementProps['strong'],
	            'Good paragraphs ',
	            _react2.default.createElement(
	              'em',
	              elementProps['em'],
	              '(note the text does not follow the advice in this guide)'
	            ),
	            ':'
	          )
	        ),
	        _react2.default.createElement(
	          'blockquote',
	          elementProps['blockquote'],
	          _react2.default.createElement(
	            'p',
	            elementProps['p'],
	            'The Survey & Interview Workflow is used where you want the option for someone to follow up with the employee for an onboard/exit interview once they have completed their survey, and have this captured in Culture Amp.'
	          ),
	          _react2.default.createElement(
	            'p',
	            elementProps['p'],
	            'It provides the opportunity for a more detailed exploration of the employee\u2019s responses and therefore the possibility of direct intervention or action based on the employee\u2019s response. Some people use the basic setup and do occasional interviews but the Survey & Interview Workflow is used when this is a standard approach.'
	          ),
	          _react2.default.createElement(
	            'p',
	            elementProps['p'],
	            'The Survey & Interview Workflow introduces the concept of an \'Interviewer\'. The Interviewer is an individual who is responsible for managing and potentially reviewing responses from the onboard/exit process. This is typically the employee\u2019s manager or someone from HR. Interviewers and Administrators can review the employee\'s individual responses prior to the interview to capture any notes and prepare.'
	          ),
	          _react2.default.createElement(
	            'p',
	            elementProps['p'],
	            'The Survey & Interview Workflow is illustrated below.'
	          )
	        )
	      )
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'personal-pronouns' }, elementProps['h5']),
	      'Personal pronouns'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'See also ',
	      _react2.default.createElement(
	        'a',
	        _extends({ href: '#us-and-them-and-we-you-they-i' }, elementProps['a']),
	        'Us and them'
	      ),
	      '.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Use personal pronouns where they\u2019re needed. They\u2019re a good way to make prose conversational, put it in the active voice, and avoid \u201Ccomputer-speak.\u201D But for labels, for example, you may be able to avoid them entirely (e.g. instead of My Profile, just call it Profile). Where you use them will likely depend on use cases and their implications.'
	    ),
	    _react2.default.createElement(
	      'ul',
	      elementProps['ul'],
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'I \u2013 reserved for user actions where ownership/agency is important. Eg. I agree to the terms of service.'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'You \u2013 should be the most common personal pronoun. In general, text should talk about users, not Culture Amp.'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'We \u2013 used where the user is waiting on Culture Amp to do something, or a problem the user is experiencing is our fault. For example, a waiting message that talks about an ongoing process might explain that \u201Cwe\u2019re\u201D doing something.'
	      )
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'please' }, elementProps['h5']),
	      'Please'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'It\u2019s rarely necessary to say please. Users don\u2019t notice if it\u2019s not there. In the interests of keeping text concise and direct, the preference is to omit it, particularly in interface text.'
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'references-to-interface-elements' }, elementProps['h5']),
	      'References to interface elements'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'You may need to refer to elements of the interface in emails, Academy articles and intercom messages.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Make the reference to the label that appears in the interface bold and italicized. Or, in the Academy, red and italicized.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      _react2.default.createElement(
	        'strong',
	        elementProps['strong'],
	        'Note:'
	      ),
	      ' ',
	      _react2.default.createElement(
	        'em',
	        elementProps['em'],
	        'This style is pending designer review.'
	      )
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Describe the interaction as simply as possible: click, drag, select, highlight.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Use the most active and clearest verb you can.'
	    ),
	    _react2.default.createElement(
	      'ul',
	      elementProps['ul'],
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          _react2.default.createElement(
	            'strong',
	            elementProps['strong'],
	            'Good:'
	          ),
	          ' If none of the existing surveys or templates suit your needs, click'
	        ),
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          _react2.default.createElement(
	            'strong',
	            elementProps['strong'],
	            'Create Blank Survey'
	          ),
	          ' to make a new one.'
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          _react2.default.createElement(
	            'strong',
	            elementProps['strong'],
	            'Good:'
	          ),
	          ' Can\u2019t find a survey that suits your need? Click ',
	          _react2.default.createElement(
	            'strong',
	            elementProps['strong'],
	            'Create Blank Survey'
	          ),
	          ' to make a new one.'
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          _react2.default.createElement(
	            'strong',
	            elementProps['strong'],
	            'Needs work:'
	          ),
	          ' If no existing surveys and templates really suit what you\'re looking for, you can make your own survey using the ',
	          _react2.default.createElement(
	            'strong',
	            elementProps['strong'],
	            'Create Blank Survey'
	          )
	        ),
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          'button.'
	        )
	      )
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'sex' }, elementProps['h5']),
	      'Sex'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'See ',
	      _react2.default.createElement(
	        'a',
	        _extends({ href: '#gender' }, elementProps['a']),
	        'Gender'
	      ),
	      '.'
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'sign-insignin' }, elementProps['h5']),
	      'Sign in/signin'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'See ',
	      _react2.default.createElement(
	        'a',
	        _extends({ href: '#two-words-or-one' }, elementProps['a']),
	        'Two words or one?'
	      )
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'slashes' }, elementProps['h5']),
	      'Slashes'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'In prose, use the word \u201Cor\u201D instead of a slash.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Use stops instead of a slash in a contraction (see also [Stops][#stops]).'
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'stops' }, elementProps['h5']),
	      'Stops'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Stops are used between e.g., p.m., and a.m., and after contractions like Ms., vs. and etc.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'They\u2019re not used for capitalized abbreviations like EST, PDT, or NA.'
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'times' }, elementProps['h5']),
	      'Times'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'For times, use the user\u2019s local time without a time zone if that\u2019s clear and unambiguous. If it\u2019s necessary to distinguish the user\u2019s time zone from others (the most likely scenario), show local time with time zone: ',
	      _react2.default.createElement(
	        'code',
	        elementProps['code'],
	        '4:00 p.m. (EST)'
	      ),
	      '. For ',
	      _react2.default.createElement(
	        'em',
	        elementProps['em'],
	        'midnight'
	      ),
	      '/',
	      _react2.default.createElement(
	        'em',
	        elementProps['em'],
	        'noon'
	      ),
	      ', use the words instead of awkward timestamps (00:00/12:00 or 12:00 a.m.).'
	    ),
	    _react2.default.createElement(
	      'ul',
	      elementProps['ul'],
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'Use ',
	        _react2.default.createElement(
	          'strong',
	          elementProps['strong'],
	          'non-breaking spaces'
	        ),
	        ' between the time and the meridiem a.m. or p.m. marker. If possible, use non-breaking spaces between the meridiem a.m. or p.m. marker and time zone as well.'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        'A ',
	        _react2.default.createElement(
	          'strong',
	          elementProps['strong'],
	          'colon'
	        ),
	        ' separates hours from minutes.'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'strong',
	          elementProps['strong'],
	          'Time ranges use spaced en dashes'
	        ),
	        ', e.g. 8:30 a.m. \u2013 9:45 a.m.'
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'strong',
	          elementProps['strong'],
	          'Time ranges in a sentence use words to separate them'
	        ),
	        ': Automatically run sync between midnight and 3:00 a.m. (PDT)',
	        _react2.default.createElement(
	          'ul',
	          elementProps['ul'],
	          _react2.default.createElement(
	            'li',
	            elementProps['li'],
	            'Note: this is a ',
	            _react2.default.createElement(
	              'em',
	              elementProps['em'],
	              'window'
	            ),
	            ' of time so the sync could occur at any time within that window. If the sync started at midnight and continued until 3:00 a.m., then it should say \u201CAutomatically run sync ',
	            _react2.default.createElement(
	              'strong',
	              elementProps['strong'],
	              'from'
	            ),
	            ' midnight ',
	            _react2.default.createElement(
	              'strong',
	              elementProps['strong'],
	              'to'
	            ),
	            ' 3:00 a.m. (PDT).\u201D'
	          )
	        )
	      )
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'two-words-or-one' }, elementProps['h5']),
	      'Two words or one?'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'If you\u2019re worried about whether words like log in, log out, sign in and sign out are two words or one, they\u2019re both.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'The single word login is used as a noun: You need a login. The single word can also be used as an adjective: Rewrite the login CTA. The two-word version is used as a phrasal verb, to talk about the action: You need to log in.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'Every day is two words unless you\u2019re using it as an adjective: an everyday action.'
	    ),
	    _react2.default.createElement(
	      'h5',
	      _extends({ id: 'us-and-them-and-we-you-they-i' }, elementProps['h5']),
	      'Us and them (and we, you, they, I)'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      'See also ',
	      _react2.default.createElement(
	        'a',
	        _extends({ href: '#personal-pronouns' }, elementProps['a']),
	        'Personal Pronouns'
	      ),
	      '.'
	    ),
	    _react2.default.createElement(
	      'p',
	      elementProps['p'],
	      _react2.default.createElement(
	        'em',
	        elementProps['em'],
	        'They'
	      ),
	      ' are more important than ',
	      _react2.default.createElement(
	        'em',
	        elementProps['em'],
	        'we'
	      ),
	      ' are. In other words, always prioritize the reader. Don\u2019t tell them, \u201Cwe\u2019ve changed this.\u201D Tell them, \u201Cnow you can do this.\u201D'
	    ),
	    _react2.default.createElement(
	      'ul',
	      elementProps['ul'],
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          _react2.default.createElement(
	            'strong',
	            elementProps['strong'],
	            'Needs work'
	          ),
	          ': We\u2019ve added some features to make it easy for you to manage 360 surveys at scale.'
	        )
	      ),
	      _react2.default.createElement(
	        'li',
	        elementProps['li'],
	        _react2.default.createElement(
	          'p',
	          elementProps['p'],
	          _react2.default.createElement(
	            'strong',
	            elementProps['strong'],
	            'Good'
	          ),
	          ': You can now manage 360 surveys in batches.'
	        )
	      )
	    )
	  );
	};
	
	var WrappedMarkdownComponent = function WrappedMarkdownComponent() {
	  return _react2.default.createElement(
	    'div',
	    { className: _HtmlContentModule2.default.contentContainer },
	    _react2.default.createElement(MarkdownComponent, { elementProps: {
	        h1: { className: _HtmlContentModule2.default.h1 },
	        h2: { className: _HtmlContentModule2.default.h2 },
	        h3: { className: _HtmlContentModule2.default.h3 },
	        table: { className: _HtmlContentModule2.default.table },
	        blockquote: { className: _HtmlContentModule2.default.blockquote },
	        hr: { className: _HtmlContentModule2.default.hr },
	        img: { className: _HtmlContentModule2.default.img },
	        a: { className: _HtmlContentModule2.default.link }
	      } })
	  );
	};
	exports.default = WrappedMarkdownComponent;

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

	var SpriteSymbol = __webpack_require__(18);
	var sprite = __webpack_require__(15);
	var symbol = new SpriteSymbol({
	  "id": "ca-icon-exclamation",
	  "use": "ca-icon-exclamation-usage",
	  "viewBox": "0 0 20 20",
	  "content": "<symbol viewBox=\"0 0 20 20\" id=\"ca-icon-exclamation\"><defs><path d=\"M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm.8 12v-1.6H9.2V14h1.6zm0-3.2V6H9.2v4.8h1.6z\" id=\"ca-icon-exclamation_a\" /></defs><use fill=\"currentColor\" xlink:href=\"#ca-icon-exclamation_a\" fill-rule=\"evenodd\" /></symbol>"
	});
	var result = sprite.add(symbol);
	module.exports = symbol

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

	var SpriteSymbol = __webpack_require__(18);
	var sprite = __webpack_require__(15);
	var symbol = new SpriteSymbol({
	  "id": "ca-icon-success",
	  "use": "ca-icon-success-usage",
	  "viewBox": "0 0 20 20",
	  "content": "<symbol viewBox=\"0 0 20 20\" id=\"ca-icon-success\"><defs><path d=\"M10 2c4.416 0 8 3.584 8 8s-3.584 8-8 8-8-3.584-8-8 3.584-8 8-8zM8.4 14l7.2-7.2-1.128-1.136L8.4 11.736 5.528 8.872 4.4 10l4 4z\" id=\"ca-icon-success_a\" /></defs><use fill=\"currentColor\" xlink:href=\"#ca-icon-success_a\" fill-rule=\"evenodd\" /></symbol>"
	});
	var result = sprite.add(symbol);
	module.exports = symbol

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var chalk = __webpack_require__(50);
	
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

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _browserSprite = __webpack_require__(68);
	
	var _browserSprite2 = _interopRequireDefault(_browserSprite);
	
	var _domready = __webpack_require__(79);
	
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
//# sourceMappingURL=component---src-pages-language-index-mdx-de3f3f18e4a2754d596e.js.map