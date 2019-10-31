/*
 * Copyright 2019, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (global = global || self, factory(global.ReactIntl = {}, global.React));
}(this, function (exports, React) { 'use strict';

    function defineMessages(messageDescriptors) {
      // This simply returns what's passed-in because it's meant to be a hook for
      // babel-plugin-react-intl.
      return messageDescriptors;
    }

    function _typeof(obj) {
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function (obj) {
          return typeof obj;
        };
      } else {
        _typeof = function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }

      return _typeof(obj);
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    function _possibleConstructorReturn(self, call) {
      if (call && (typeof call === "object" || typeof call === "function")) {
        return call;
      }

      return _assertThisInitialized(self);
    }

    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }

    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

        return arr2;
      }
    }

    function _iterableToArray(iter) {
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
    }

    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    var TYPE;

    (function (TYPE) {
      /**
       * Raw text
       */
      TYPE[TYPE["literal"] = 0] = "literal";
      /**
       * Variable w/o any format, e.g `var` in `this is a {var}`
       */

      TYPE[TYPE["argument"] = 1] = "argument";
      /**
       * Variable w/ number format
       */

      TYPE[TYPE["number"] = 2] = "number";
      /**
       * Variable w/ date format
       */

      TYPE[TYPE["date"] = 3] = "date";
      /**
       * Variable w/ time format
       */

      TYPE[TYPE["time"] = 4] = "time";
      /**
       * Variable w/ select format
       */

      TYPE[TYPE["select"] = 5] = "select";
      /**
       * Variable w/ plural format
       */

      TYPE[TYPE["plural"] = 6] = "plural";
    })(TYPE || (TYPE = {}));
    /**
     * Type Guards
     */


    function isLiteralElement(el) {
      return el.type === TYPE.literal;
    }
    function isArgumentElement(el) {
      return el.type === TYPE.argument;
    }
    function isNumberElement(el) {
      return el.type === TYPE.number;
    }
    function isDateElement(el) {
      return el.type === TYPE.date;
    }
    function isTimeElement(el) {
      return el.type === TYPE.time;
    }
    function isSelectElement(el) {
      return el.type === TYPE.select;
    }
    function isPluralElement(el) {
      return el.type === TYPE.plural;
    }

    // tslint:disable:only-arrow-functions
    // tslint:disable:object-literal-shorthand
    // tslint:disable:trailing-comma
    // tslint:disable:object-literal-sort-keys
    // tslint:disable:one-variable-per-declaration
    // tslint:disable:max-line-length
    // tslint:disable:no-consecutive-blank-lines
    // tslint:disable:align
    var __extends = undefined && undefined.__extends || function () {
      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      return function (d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var __assign = undefined && undefined.__assign || function () {
      __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return __assign.apply(this, arguments);
    }; // Generated by PEG.js v. 0.10.0 (ts-pegjs plugin v. 0.2.5 )

    var SyntaxError =
    /** @class */
    function (_super) {
      __extends(SyntaxError, _super);

      function SyntaxError(message, expected, found, location) {
        var _this = _super.call(this) || this;

        _this.message = message;
        _this.expected = expected;
        _this.found = found;
        _this.location = location;
        _this.name = "SyntaxError";

        if (typeof Error.captureStackTrace === "function") {
          Error.captureStackTrace(_this, SyntaxError);
        }

        return _this;
      }

      SyntaxError.buildMessage = function (expected, found) {
        function hex(ch) {
          return ch.charCodeAt(0).toString(16).toUpperCase();
        }

        function literalEscape(s) {
          return s.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function (ch) {
            return "\\x0" + hex(ch);
          }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
            return "\\x" + hex(ch);
          });
        }

        function classEscape(s) {
          return s.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function (ch) {
            return "\\x0" + hex(ch);
          }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
            return "\\x" + hex(ch);
          });
        }

        function describeExpectation(expectation) {
          switch (expectation.type) {
            case "literal":
              return "\"" + literalEscape(expectation.text) + "\"";

            case "class":
              var escapedParts = expectation.parts.map(function (part) {
                return Array.isArray(part) ? classEscape(part[0]) + "-" + classEscape(part[1]) : classEscape(part);
              });
              return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";

            case "any":
              return "any character";

            case "end":
              return "end of input";

            case "other":
              return expectation.description;
          }
        }

        function describeExpected(expected1) {
          var descriptions = expected1.map(describeExpectation);
          var i;
          var j;
          descriptions.sort();

          if (descriptions.length > 0) {
            for (i = 1, j = 1; i < descriptions.length; i++) {
              if (descriptions[i - 1] !== descriptions[i]) {
                descriptions[j] = descriptions[i];
                j++;
              }
            }

            descriptions.length = j;
          }

          switch (descriptions.length) {
            case 1:
              return descriptions[0];

            case 2:
              return descriptions[0] + " or " + descriptions[1];

            default:
              return descriptions.slice(0, -1).join(", ") + ", or " + descriptions[descriptions.length - 1];
          }
        }

        function describeFound(found1) {
          return found1 ? "\"" + literalEscape(found1) + "\"" : "end of input";
        }

        return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
      };

      return SyntaxError;
    }(Error);

    function peg$parse(input, options) {
      options = options !== undefined ? options : {};
      var peg$FAILED = {};
      var peg$startRuleFunctions = {
        start: peg$parsestart
      };
      var peg$startRuleFunction = peg$parsestart;

      var peg$c0 = function peg$c0(parts) {
        return parts.join('');
      };

      var peg$c1 = function peg$c1(messageText) {
        return __assign({
          type: TYPE.literal,
          value: messageText
        }, insertLocation());
      };

      var peg$c2 = peg$otherExpectation("argumentElement");
      var peg$c3 = "{";
      var peg$c4 = peg$literalExpectation("{", false);
      var peg$c5 = "}";
      var peg$c6 = peg$literalExpectation("}", false);

      var peg$c7 = function peg$c7(value) {
        return __assign({
          type: TYPE.argument,
          value: value
        }, insertLocation());
      };

      var peg$c8 = peg$otherExpectation("numberSkeletonId");
      var peg$c9 = /^['\/{}]/;
      var peg$c10 = peg$classExpectation(["'", "/", "{", "}"], false, false);
      var peg$c11 = peg$anyExpectation();
      var peg$c12 = peg$otherExpectation("numberSkeletonTokenOption");
      var peg$c13 = "/";
      var peg$c14 = peg$literalExpectation("/", false);

      var peg$c15 = function peg$c15(option) {
        return option;
      };

      var peg$c16 = peg$otherExpectation("numberSkeletonToken");

      var peg$c17 = function peg$c17(stem, options) {
        return {
          stem: stem,
          options: options
        };
      };

      var peg$c18 = function peg$c18(tokens) {
        return __assign({
          type: 0
          /* number */
          ,
          tokens: tokens
        }, insertLocation());
      };

      var peg$c19 = "::";
      var peg$c20 = peg$literalExpectation("::", false);

      var peg$c21 = function peg$c21(skeleton) {
        return skeleton;
      };

      var peg$c22 = function peg$c22(style) {
        return style.replace(/\s*$/, '');
      };

      var peg$c23 = ",";
      var peg$c24 = peg$literalExpectation(",", false);
      var peg$c25 = "number";
      var peg$c26 = peg$literalExpectation("number", false);

      var peg$c27 = function peg$c27(value, type, style) {
        return __assign({
          type: type === 'number' ? TYPE.number : type === 'date' ? TYPE.date : TYPE.time,
          style: style && style[2],
          value: value
        }, insertLocation());
      };

      var peg$c28 = function peg$c28(pattern) {
        return __assign({
          type: 1
          /* date */
          ,
          pattern: pattern
        }, insertLocation());
      };

      var peg$c29 = "date";
      var peg$c30 = peg$literalExpectation("date", false);
      var peg$c31 = "time";
      var peg$c32 = peg$literalExpectation("time", false);
      var peg$c33 = "plural";
      var peg$c34 = peg$literalExpectation("plural", false);
      var peg$c35 = "selectordinal";
      var peg$c36 = peg$literalExpectation("selectordinal", false);
      var peg$c37 = "offset:";
      var peg$c38 = peg$literalExpectation("offset:", false);

      var peg$c39 = function peg$c39(value, pluralType, offset, options) {
        return __assign({
          type: TYPE.plural,
          pluralType: pluralType === 'plural' ? 'cardinal' : 'ordinal',
          value: value,
          offset: offset ? offset[2] : 0,
          options: options.reduce(function (all, _a) {
            var id = _a.id,
                value = _a.value,
                location = _a.location;
            all[id] = {
              value: value,
              location: location
            };
            return all;
          }, {})
        }, insertLocation());
      };

      var peg$c40 = "select";
      var peg$c41 = peg$literalExpectation("select", false);

      var peg$c42 = function peg$c42(value, options) {
        return __assign({
          type: TYPE.select,
          value: value,
          options: options.reduce(function (all, _a) {
            var id = _a.id,
                value = _a.value,
                location = _a.location;
            all[id] = {
              value: value,
              location: location
            };
            return all;
          }, {})
        }, insertLocation());
      };

      var peg$c43 = "=";
      var peg$c44 = peg$literalExpectation("=", false);

      var peg$c45 = function peg$c45(id, value) {
        return __assign({
          id: id,
          value: value
        }, insertLocation());
      };

      var peg$c46 = function peg$c46(id, value) {
        return __assign({
          id: id,
          value: value
        }, insertLocation());
      };

      var peg$c47 = /^[\t-\r \x85\u200E\u200F\u2028\u2029]/;
      var peg$c48 = peg$classExpectation([["\t", "\r"], " ", "\x85", "\u200E", "\u200F", "\u2028", "\u2029"], false, false);
      var peg$c49 = /^[!-\/:-@[-\^`{-~\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u2010-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46]/;
      var peg$c50 = peg$classExpectation([["!", "/"], [":", "@"], ["[", "^"], "`", ["{", "~"], ["\xA1", "\xA7"], "\xA9", "\xAB", "\xAC", "\xAE", "\xB0", "\xB1", "\xB6", "\xBB", "\xBF", "\xD7", "\xF7", ["\u2010", "\u2027"], ["\u2030", "\u203E"], ["\u2041", "\u2053"], ["\u2055", "\u205E"], ["\u2190", "\u245F"], ["\u2500", "\u2775"], ["\u2794", "\u2BFF"], ["\u2E00", "\u2E7F"], ["\u3001", "\u3003"], ["\u3008", "\u3020"], "\u3030", "\uFD3E", "\uFD3F", "\uFE45", "\uFE46"], false, false);
      var peg$c51 = peg$otherExpectation("optional whitespace");
      var peg$c52 = /^[0-9]/;
      var peg$c53 = peg$classExpectation([["0", "9"]], false, false);

      var peg$c54 = function peg$c54(digits) {
        return parseInt(digits.join(''), 10);
      };
      var peg$c56 = "'";
      var peg$c57 = peg$literalExpectation("'", false);
      var peg$c58 = peg$otherExpectation("double apostrophes");
      var peg$c59 = "''";
      var peg$c60 = peg$literalExpectation("''", false);

      var peg$c61 = function peg$c61() {
        return "'";
      };

      var peg$c62 = /^[{}]/;
      var peg$c63 = peg$classExpectation(["{", "}"], false, false);
      var peg$c64 = /^[^']/;
      var peg$c65 = peg$classExpectation(["'"], true, false);

      var peg$c66 = function peg$c66(escapedChar, quotedChars) {
        return escapedChar + quotedChars.replace("''", "'");
      };

      var peg$c67 = /^[^{}]/;
      var peg$c68 = peg$classExpectation(["{", "}"], true, false);
      var peg$c69 = peg$otherExpectation("keyword");
      var peg$currPos = 0;
      var peg$savedPos = 0;
      var peg$posDetailsCache = [{
        line: 1,
        column: 1
      }];
      var peg$maxFailPos = 0;
      var peg$maxFailExpected = [];
      var peg$silentFails = 0;
      var peg$result;

      if (options.startRule !== undefined) {
        if (!(options.startRule in peg$startRuleFunctions)) {
          throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
        }

        peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
      }

      function location() {
        return peg$computeLocation(peg$savedPos, peg$currPos);
      }

      function peg$literalExpectation(text1, ignoreCase) {
        return {
          type: "literal",
          text: text1,
          ignoreCase: ignoreCase
        };
      }

      function peg$classExpectation(parts, inverted, ignoreCase) {
        return {
          type: "class",
          parts: parts,
          inverted: inverted,
          ignoreCase: ignoreCase
        };
      }

      function peg$anyExpectation() {
        return {
          type: "any"
        };
      }

      function peg$endExpectation() {
        return {
          type: "end"
        };
      }

      function peg$otherExpectation(description) {
        return {
          type: "other",
          description: description
        };
      }

      function peg$computePosDetails(pos) {
        var details = peg$posDetailsCache[pos];
        var p;

        if (details) {
          return details;
        } else {
          p = pos - 1;

          while (!peg$posDetailsCache[p]) {
            p--;
          }

          details = peg$posDetailsCache[p];
          details = {
            line: details.line,
            column: details.column
          };

          while (p < pos) {
            if (input.charCodeAt(p) === 10) {
              details.line++;
              details.column = 1;
            } else {
              details.column++;
            }

            p++;
          }

          peg$posDetailsCache[pos] = details;
          return details;
        }
      }

      function peg$computeLocation(startPos, endPos) {
        var startPosDetails = peg$computePosDetails(startPos);
        var endPosDetails = peg$computePosDetails(endPos);
        return {
          start: {
            offset: startPos,
            line: startPosDetails.line,
            column: startPosDetails.column
          },
          end: {
            offset: endPos,
            line: endPosDetails.line,
            column: endPosDetails.column
          }
        };
      }

      function peg$fail(expected1) {
        if (peg$currPos < peg$maxFailPos) {
          return;
        }

        if (peg$currPos > peg$maxFailPos) {
          peg$maxFailPos = peg$currPos;
          peg$maxFailExpected = [];
        }

        peg$maxFailExpected.push(expected1);
      }

      function peg$buildStructuredError(expected1, found, location1) {
        return new SyntaxError(SyntaxError.buildMessage(expected1, found), expected1, found, location1);
      }

      function peg$parsestart() {
        var s0;
        s0 = peg$parsemessage();
        return s0;
      }

      function peg$parsemessage() {
        var s0, s1;
        s0 = [];
        s1 = peg$parsemessageElement();

        while (s1 !== peg$FAILED) {
          s0.push(s1);
          s1 = peg$parsemessageElement();
        }

        return s0;
      }

      function peg$parsemessageElement() {
        var s0;
        s0 = peg$parseliteralElement();

        if (s0 === peg$FAILED) {
          s0 = peg$parseargumentElement();

          if (s0 === peg$FAILED) {
            s0 = peg$parsesimpleFormatElement();

            if (s0 === peg$FAILED) {
              s0 = peg$parsepluralElement();

              if (s0 === peg$FAILED) {
                s0 = peg$parseselectElement();
              }
            }
          }
        }

        return s0;
      }

      function peg$parsemessageText() {
        var s0, s1, s2;
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parsedoubleApostrophes();

        if (s2 === peg$FAILED) {
          s2 = peg$parsequotedString();

          if (s2 === peg$FAILED) {
            s2 = peg$parseunquotedString();
          }
        }

        if (s2 !== peg$FAILED) {
          while (s2 !== peg$FAILED) {
            s1.push(s2);
            s2 = peg$parsedoubleApostrophes();

            if (s2 === peg$FAILED) {
              s2 = peg$parsequotedString();

              if (s2 === peg$FAILED) {
                s2 = peg$parseunquotedString();
              }
            }
          }
        } else {
          s1 = peg$FAILED;
        }

        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c0(s1);
        }

        s0 = s1;
        return s0;
      }

      function peg$parseliteralElement() {
        var s0, s1;
        s0 = peg$currPos;
        s1 = peg$parsemessageText();

        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c1(s1);
        }

        s0 = s1;
        return s0;
      }

      function peg$parseargName() {
        var s0, s1;
        s0 = peg$currPos;
        s1 = peg$parsenumber();

        if (s1 === peg$FAILED) {
          s1 = peg$parsekeyword();
        }

        if (s1 !== peg$FAILED) {
          s0 = input.substring(s0, peg$currPos);
        } else {
          s0 = s1;
        }

        return s0;
      }

      function peg$parseargumentElement() {
        var s0, s1, s2, s3, s4, s5;
        peg$silentFails++;
        s0 = peg$currPos;

        if (input.charCodeAt(peg$currPos) === 123) {
          s1 = peg$c3;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c4);
          }
        }

        if (s1 !== peg$FAILED) {
          s2 = peg$parse_();

          if (s2 !== peg$FAILED) {
            s3 = peg$parseargName();

            if (s3 !== peg$FAILED) {
              s4 = peg$parse_();

              if (s4 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 125) {
                  s5 = peg$c5;
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;

                  if (peg$silentFails === 0) {
                    peg$fail(peg$c6);
                  }
                }

                if (s5 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c7(s3);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        peg$silentFails--;

        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c2);
          }
        }

        return s0;
      }

      function peg$parsenumberSkeletonId() {
        var s0, s1, s2, s3, s4;
        peg$silentFails++;
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$currPos;
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parsepatternWhiteSpace();

        if (s4 === peg$FAILED) {
          if (peg$c9.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c10);
            }
          }
        }

        peg$silentFails--;

        if (s4 === peg$FAILED) {
          s3 = undefined;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c11);
            }
          }

          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }

        if (s2 !== peg$FAILED) {
          while (s2 !== peg$FAILED) {
            s1.push(s2);
            s2 = peg$currPos;
            s3 = peg$currPos;
            peg$silentFails++;
            s4 = peg$parsepatternWhiteSpace();

            if (s4 === peg$FAILED) {
              if (peg$c9.test(input.charAt(peg$currPos))) {
                s4 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s4 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c10);
                }
              }
            }

            peg$silentFails--;

            if (s4 === peg$FAILED) {
              s3 = undefined;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }

            if (s3 !== peg$FAILED) {
              if (input.length > peg$currPos) {
                s4 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s4 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c11);
                }
              }

              if (s4 !== peg$FAILED) {
                s3 = [s3, s4];
                s2 = s3;
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          }
        } else {
          s1 = peg$FAILED;
        }

        if (s1 !== peg$FAILED) {
          s0 = input.substring(s0, peg$currPos);
        } else {
          s0 = s1;
        }

        peg$silentFails--;

        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c8);
          }
        }

        return s0;
      }

      function peg$parsenumberSkeletonTokenOption() {
        var s0, s1, s2;
        peg$silentFails++;
        s0 = peg$currPos;

        if (input.charCodeAt(peg$currPos) === 47) {
          s1 = peg$c13;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c14);
          }
        }

        if (s1 !== peg$FAILED) {
          s2 = peg$parsenumberSkeletonId();

          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c15(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        peg$silentFails--;

        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c12);
          }
        }

        return s0;
      }

      function peg$parsenumberSkeletonToken() {
        var s0, s1, s2, s3, s4;
        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$parse_();

        if (s1 !== peg$FAILED) {
          s2 = peg$parsenumberSkeletonId();

          if (s2 !== peg$FAILED) {
            s3 = [];
            s4 = peg$parsenumberSkeletonTokenOption();

            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$parsenumberSkeletonTokenOption();
            }

            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c17(s2, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        peg$silentFails--;

        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c16);
          }
        }

        return s0;
      }

      function peg$parsenumberSkeleton() {
        var s0, s1, s2;
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parsenumberSkeletonToken();

        if (s2 !== peg$FAILED) {
          while (s2 !== peg$FAILED) {
            s1.push(s2);
            s2 = peg$parsenumberSkeletonToken();
          }
        } else {
          s1 = peg$FAILED;
        }

        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c18(s1);
        }

        s0 = s1;
        return s0;
      }

      function peg$parsenumberArgStyle() {
        var s0, s1, s2;
        s0 = peg$currPos;

        if (input.substr(peg$currPos, 2) === peg$c19) {
          s1 = peg$c19;
          peg$currPos += 2;
        } else {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c20);
          }
        }

        if (s1 !== peg$FAILED) {
          s2 = peg$parsenumberSkeleton();

          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c21(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parsemessageText();

          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c22(s1);
          }

          s0 = s1;
        }

        return s0;
      }

      function peg$parsenumberFormatElement() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;
        s0 = peg$currPos;

        if (input.charCodeAt(peg$currPos) === 123) {
          s1 = peg$c3;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c4);
          }
        }

        if (s1 !== peg$FAILED) {
          s2 = peg$parse_();

          if (s2 !== peg$FAILED) {
            s3 = peg$parseargName();

            if (s3 !== peg$FAILED) {
              s4 = peg$parse_();

              if (s4 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 44) {
                  s5 = peg$c23;
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;

                  if (peg$silentFails === 0) {
                    peg$fail(peg$c24);
                  }
                }

                if (s5 !== peg$FAILED) {
                  s6 = peg$parse_();

                  if (s6 !== peg$FAILED) {
                    if (input.substr(peg$currPos, 6) === peg$c25) {
                      s7 = peg$c25;
                      peg$currPos += 6;
                    } else {
                      s7 = peg$FAILED;

                      if (peg$silentFails === 0) {
                        peg$fail(peg$c26);
                      }
                    }

                    if (s7 !== peg$FAILED) {
                      s8 = peg$parse_();

                      if (s8 !== peg$FAILED) {
                        s9 = peg$currPos;

                        if (input.charCodeAt(peg$currPos) === 44) {
                          s10 = peg$c23;
                          peg$currPos++;
                        } else {
                          s10 = peg$FAILED;

                          if (peg$silentFails === 0) {
                            peg$fail(peg$c24);
                          }
                        }

                        if (s10 !== peg$FAILED) {
                          s11 = peg$parse_();

                          if (s11 !== peg$FAILED) {
                            s12 = peg$parsenumberArgStyle();

                            if (s12 !== peg$FAILED) {
                              s10 = [s10, s11, s12];
                              s9 = s10;
                            } else {
                              peg$currPos = s9;
                              s9 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s9;
                            s9 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s9;
                          s9 = peg$FAILED;
                        }

                        if (s9 === peg$FAILED) {
                          s9 = null;
                        }

                        if (s9 !== peg$FAILED) {
                          s10 = peg$parse_();

                          if (s10 !== peg$FAILED) {
                            if (input.charCodeAt(peg$currPos) === 125) {
                              s11 = peg$c5;
                              peg$currPos++;
                            } else {
                              s11 = peg$FAILED;

                              if (peg$silentFails === 0) {
                                peg$fail(peg$c6);
                              }
                            }

                            if (s11 !== peg$FAILED) {
                              peg$savedPos = s0;
                              s1 = peg$c27(s3, s7, s9);
                              s0 = s1;
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        return s0;
      }

      function peg$parsedateOrTimeSkeleton() {
        var s0, s1;
        s0 = peg$currPos;
        s1 = peg$parsemessageText();

        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c28(s1);
        }

        s0 = s1;
        return s0;
      }

      function peg$parsedateOrTimeArgStyle() {
        var s0, s1, s2;
        s0 = peg$currPos;

        if (input.substr(peg$currPos, 2) === peg$c19) {
          s1 = peg$c19;
          peg$currPos += 2;
        } else {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c20);
          }
        }

        if (s1 !== peg$FAILED) {
          s2 = peg$parsedateOrTimeSkeleton();

          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c21(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parsemessageText();

          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c22(s1);
          }

          s0 = s1;
        }

        return s0;
      }

      function peg$parsedateOrTimeFormatElement() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;
        s0 = peg$currPos;

        if (input.charCodeAt(peg$currPos) === 123) {
          s1 = peg$c3;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c4);
          }
        }

        if (s1 !== peg$FAILED) {
          s2 = peg$parse_();

          if (s2 !== peg$FAILED) {
            s3 = peg$parseargName();

            if (s3 !== peg$FAILED) {
              s4 = peg$parse_();

              if (s4 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 44) {
                  s5 = peg$c23;
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;

                  if (peg$silentFails === 0) {
                    peg$fail(peg$c24);
                  }
                }

                if (s5 !== peg$FAILED) {
                  s6 = peg$parse_();

                  if (s6 !== peg$FAILED) {
                    if (input.substr(peg$currPos, 4) === peg$c29) {
                      s7 = peg$c29;
                      peg$currPos += 4;
                    } else {
                      s7 = peg$FAILED;

                      if (peg$silentFails === 0) {
                        peg$fail(peg$c30);
                      }
                    }

                    if (s7 === peg$FAILED) {
                      if (input.substr(peg$currPos, 4) === peg$c31) {
                        s7 = peg$c31;
                        peg$currPos += 4;
                      } else {
                        s7 = peg$FAILED;

                        if (peg$silentFails === 0) {
                          peg$fail(peg$c32);
                        }
                      }
                    }

                    if (s7 !== peg$FAILED) {
                      s8 = peg$parse_();

                      if (s8 !== peg$FAILED) {
                        s9 = peg$currPos;

                        if (input.charCodeAt(peg$currPos) === 44) {
                          s10 = peg$c23;
                          peg$currPos++;
                        } else {
                          s10 = peg$FAILED;

                          if (peg$silentFails === 0) {
                            peg$fail(peg$c24);
                          }
                        }

                        if (s10 !== peg$FAILED) {
                          s11 = peg$parse_();

                          if (s11 !== peg$FAILED) {
                            s12 = peg$parsedateOrTimeArgStyle();

                            if (s12 !== peg$FAILED) {
                              s10 = [s10, s11, s12];
                              s9 = s10;
                            } else {
                              peg$currPos = s9;
                              s9 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s9;
                            s9 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s9;
                          s9 = peg$FAILED;
                        }

                        if (s9 === peg$FAILED) {
                          s9 = null;
                        }

                        if (s9 !== peg$FAILED) {
                          s10 = peg$parse_();

                          if (s10 !== peg$FAILED) {
                            if (input.charCodeAt(peg$currPos) === 125) {
                              s11 = peg$c5;
                              peg$currPos++;
                            } else {
                              s11 = peg$FAILED;

                              if (peg$silentFails === 0) {
                                peg$fail(peg$c6);
                              }
                            }

                            if (s11 !== peg$FAILED) {
                              peg$savedPos = s0;
                              s1 = peg$c27(s3, s7, s9);
                              s0 = s1;
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        return s0;
      }

      function peg$parsesimpleFormatElement() {
        var s0;
        s0 = peg$parsenumberFormatElement();

        if (s0 === peg$FAILED) {
          s0 = peg$parsedateOrTimeFormatElement();
        }

        return s0;
      }

      function peg$parsepluralElement() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15;
        s0 = peg$currPos;

        if (input.charCodeAt(peg$currPos) === 123) {
          s1 = peg$c3;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c4);
          }
        }

        if (s1 !== peg$FAILED) {
          s2 = peg$parse_();

          if (s2 !== peg$FAILED) {
            s3 = peg$parseargName();

            if (s3 !== peg$FAILED) {
              s4 = peg$parse_();

              if (s4 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 44) {
                  s5 = peg$c23;
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;

                  if (peg$silentFails === 0) {
                    peg$fail(peg$c24);
                  }
                }

                if (s5 !== peg$FAILED) {
                  s6 = peg$parse_();

                  if (s6 !== peg$FAILED) {
                    if (input.substr(peg$currPos, 6) === peg$c33) {
                      s7 = peg$c33;
                      peg$currPos += 6;
                    } else {
                      s7 = peg$FAILED;

                      if (peg$silentFails === 0) {
                        peg$fail(peg$c34);
                      }
                    }

                    if (s7 === peg$FAILED) {
                      if (input.substr(peg$currPos, 13) === peg$c35) {
                        s7 = peg$c35;
                        peg$currPos += 13;
                      } else {
                        s7 = peg$FAILED;

                        if (peg$silentFails === 0) {
                          peg$fail(peg$c36);
                        }
                      }
                    }

                    if (s7 !== peg$FAILED) {
                      s8 = peg$parse_();

                      if (s8 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 44) {
                          s9 = peg$c23;
                          peg$currPos++;
                        } else {
                          s9 = peg$FAILED;

                          if (peg$silentFails === 0) {
                            peg$fail(peg$c24);
                          }
                        }

                        if (s9 !== peg$FAILED) {
                          s10 = peg$parse_();

                          if (s10 !== peg$FAILED) {
                            s11 = peg$currPos;

                            if (input.substr(peg$currPos, 7) === peg$c37) {
                              s12 = peg$c37;
                              peg$currPos += 7;
                            } else {
                              s12 = peg$FAILED;

                              if (peg$silentFails === 0) {
                                peg$fail(peg$c38);
                              }
                            }

                            if (s12 !== peg$FAILED) {
                              s13 = peg$parse_();

                              if (s13 !== peg$FAILED) {
                                s14 = peg$parsenumber();

                                if (s14 !== peg$FAILED) {
                                  s12 = [s12, s13, s14];
                                  s11 = s12;
                                } else {
                                  peg$currPos = s11;
                                  s11 = peg$FAILED;
                                }
                              } else {
                                peg$currPos = s11;
                                s11 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s11;
                              s11 = peg$FAILED;
                            }

                            if (s11 === peg$FAILED) {
                              s11 = null;
                            }

                            if (s11 !== peg$FAILED) {
                              s12 = peg$parse_();

                              if (s12 !== peg$FAILED) {
                                s13 = [];
                                s14 = peg$parsepluralOption();

                                if (s14 !== peg$FAILED) {
                                  while (s14 !== peg$FAILED) {
                                    s13.push(s14);
                                    s14 = peg$parsepluralOption();
                                  }
                                } else {
                                  s13 = peg$FAILED;
                                }

                                if (s13 !== peg$FAILED) {
                                  s14 = peg$parse_();

                                  if (s14 !== peg$FAILED) {
                                    if (input.charCodeAt(peg$currPos) === 125) {
                                      s15 = peg$c5;
                                      peg$currPos++;
                                    } else {
                                      s15 = peg$FAILED;

                                      if (peg$silentFails === 0) {
                                        peg$fail(peg$c6);
                                      }
                                    }

                                    if (s15 !== peg$FAILED) {
                                      peg$savedPos = s0;
                                      s1 = peg$c39(s3, s7, s11, s13);
                                      s0 = s1;
                                    } else {
                                      peg$currPos = s0;
                                      s0 = peg$FAILED;
                                    }
                                  } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                  }
                                } else {
                                  peg$currPos = s0;
                                  s0 = peg$FAILED;
                                }
                              } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        return s0;
      }

      function peg$parseselectElement() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13;
        s0 = peg$currPos;

        if (input.charCodeAt(peg$currPos) === 123) {
          s1 = peg$c3;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c4);
          }
        }

        if (s1 !== peg$FAILED) {
          s2 = peg$parse_();

          if (s2 !== peg$FAILED) {
            s3 = peg$parseargName();

            if (s3 !== peg$FAILED) {
              s4 = peg$parse_();

              if (s4 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 44) {
                  s5 = peg$c23;
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;

                  if (peg$silentFails === 0) {
                    peg$fail(peg$c24);
                  }
                }

                if (s5 !== peg$FAILED) {
                  s6 = peg$parse_();

                  if (s6 !== peg$FAILED) {
                    if (input.substr(peg$currPos, 6) === peg$c40) {
                      s7 = peg$c40;
                      peg$currPos += 6;
                    } else {
                      s7 = peg$FAILED;

                      if (peg$silentFails === 0) {
                        peg$fail(peg$c41);
                      }
                    }

                    if (s7 !== peg$FAILED) {
                      s8 = peg$parse_();

                      if (s8 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 44) {
                          s9 = peg$c23;
                          peg$currPos++;
                        } else {
                          s9 = peg$FAILED;

                          if (peg$silentFails === 0) {
                            peg$fail(peg$c24);
                          }
                        }

                        if (s9 !== peg$FAILED) {
                          s10 = peg$parse_();

                          if (s10 !== peg$FAILED) {
                            s11 = [];
                            s12 = peg$parseselectOption();

                            if (s12 !== peg$FAILED) {
                              while (s12 !== peg$FAILED) {
                                s11.push(s12);
                                s12 = peg$parseselectOption();
                              }
                            } else {
                              s11 = peg$FAILED;
                            }

                            if (s11 !== peg$FAILED) {
                              s12 = peg$parse_();

                              if (s12 !== peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 125) {
                                  s13 = peg$c5;
                                  peg$currPos++;
                                } else {
                                  s13 = peg$FAILED;

                                  if (peg$silentFails === 0) {
                                    peg$fail(peg$c6);
                                  }
                                }

                                if (s13 !== peg$FAILED) {
                                  peg$savedPos = s0;
                                  s1 = peg$c42(s3, s11);
                                  s0 = s1;
                                } else {
                                  peg$currPos = s0;
                                  s0 = peg$FAILED;
                                }
                              } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        return s0;
      }

      function peg$parsepluralRuleSelectValue() {
        var s0, s1, s2, s3;
        s0 = peg$currPos;
        s1 = peg$currPos;

        if (input.charCodeAt(peg$currPos) === 61) {
          s2 = peg$c43;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c44);
          }
        }

        if (s2 !== peg$FAILED) {
          s3 = peg$parsenumber();

          if (s3 !== peg$FAILED) {
            s2 = [s2, s3];
            s1 = s2;
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }

        if (s1 !== peg$FAILED) {
          s0 = input.substring(s0, peg$currPos);
        } else {
          s0 = s1;
        }

        if (s0 === peg$FAILED) {
          s0 = peg$parsekeyword();
        }

        return s0;
      }

      function peg$parseselectOption() {
        var s0, s1, s2, s3, s4, s5, s6;
        s0 = peg$currPos;
        s1 = peg$parse_();

        if (s1 !== peg$FAILED) {
          s2 = peg$parsekeyword();

          if (s2 !== peg$FAILED) {
            s3 = peg$parse_();

            if (s3 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 123) {
                s4 = peg$c3;
                peg$currPos++;
              } else {
                s4 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c4);
                }
              }

              if (s4 !== peg$FAILED) {
                s5 = peg$parsemessage();

                if (s5 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 125) {
                    s6 = peg$c5;
                    peg$currPos++;
                  } else {
                    s6 = peg$FAILED;

                    if (peg$silentFails === 0) {
                      peg$fail(peg$c6);
                    }
                  }

                  if (s6 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c45(s2, s5);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        return s0;
      }

      function peg$parsepluralOption() {
        var s0, s1, s2, s3, s4, s5, s6;
        s0 = peg$currPos;
        s1 = peg$parse_();

        if (s1 !== peg$FAILED) {
          s2 = peg$parsepluralRuleSelectValue();

          if (s2 !== peg$FAILED) {
            s3 = peg$parse_();

            if (s3 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 123) {
                s4 = peg$c3;
                peg$currPos++;
              } else {
                s4 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c4);
                }
              }

              if (s4 !== peg$FAILED) {
                s5 = peg$parsemessage();

                if (s5 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 125) {
                    s6 = peg$c5;
                    peg$currPos++;
                  } else {
                    s6 = peg$FAILED;

                    if (peg$silentFails === 0) {
                      peg$fail(peg$c6);
                    }
                  }

                  if (s6 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c46(s2, s5);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        return s0;
      }

      function peg$parsepatternWhiteSpace() {
        var s0;

        if (peg$c47.test(input.charAt(peg$currPos))) {
          s0 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s0 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c48);
          }
        }

        return s0;
      }

      function peg$parsepatternSyntax() {
        var s0;

        if (peg$c49.test(input.charAt(peg$currPos))) {
          s0 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s0 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c50);
          }
        }

        return s0;
      }

      function peg$parse_() {
        var s0, s1, s2;
        peg$silentFails++;
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parsepatternWhiteSpace();

        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parsepatternWhiteSpace();
        }

        if (s1 !== peg$FAILED) {
          s0 = input.substring(s0, peg$currPos);
        } else {
          s0 = s1;
        }

        peg$silentFails--;

        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c51);
          }
        }

        return s0;
      }

      function peg$parsenumber() {
        var s0, s1, s2;
        s0 = peg$currPos;
        s1 = [];

        if (peg$c52.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c53);
          }
        }

        if (s2 !== peg$FAILED) {
          while (s2 !== peg$FAILED) {
            s1.push(s2);

            if (peg$c52.test(input.charAt(peg$currPos))) {
              s2 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s2 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c53);
              }
            }
          }
        } else {
          s1 = peg$FAILED;
        }

        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c54(s1);
        }

        s0 = s1;
        return s0;
      }

      function peg$parsedoubleApostrophes() {
        var s0, s1;
        peg$silentFails++;
        s0 = peg$currPos;

        if (input.substr(peg$currPos, 2) === peg$c59) {
          s1 = peg$c59;
          peg$currPos += 2;
        } else {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c60);
          }
        }

        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c61();
        }

        s0 = s1;
        peg$silentFails--;

        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c58);
          }
        }

        return s0;
      }

      function peg$parsequotedString() {
        var s0, s1, s2, s3, s4, s5;
        s0 = peg$currPos;

        if (input.charCodeAt(peg$currPos) === 39) {
          s1 = peg$c56;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c57);
          }
        }

        if (s1 !== peg$FAILED) {
          if (peg$c62.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c63);
            }
          }

          if (s2 !== peg$FAILED) {
            s3 = peg$currPos;
            s4 = [];

            if (input.substr(peg$currPos, 2) === peg$c59) {
              s5 = peg$c59;
              peg$currPos += 2;
            } else {
              s5 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c60);
              }
            }

            if (s5 === peg$FAILED) {
              if (peg$c64.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c65);
                }
              }
            }

            while (s5 !== peg$FAILED) {
              s4.push(s5);

              if (input.substr(peg$currPos, 2) === peg$c59) {
                s5 = peg$c59;
                peg$currPos += 2;
              } else {
                s5 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c60);
                }
              }

              if (s5 === peg$FAILED) {
                if (peg$c64.test(input.charAt(peg$currPos))) {
                  s5 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;

                  if (peg$silentFails === 0) {
                    peg$fail(peg$c65);
                  }
                }
              }
            }

            if (s4 !== peg$FAILED) {
              s3 = input.substring(s3, peg$currPos);
            } else {
              s3 = s4;
            }

            if (s3 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 39) {
                s4 = peg$c56;
                peg$currPos++;
              } else {
                s4 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c57);
                }
              }

              if (s4 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c66(s2, s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        return s0;
      }

      function peg$parseunquotedString() {
        var s0, s1;
        s0 = peg$currPos;

        if (peg$c67.test(input.charAt(peg$currPos))) {
          s1 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c68);
          }
        }

        if (s1 !== peg$FAILED) {
          s0 = input.substring(s0, peg$currPos);
        } else {
          s0 = s1;
        }

        return s0;
      }

      function peg$parsekeyword() {
        var s0, s1, s2, s3, s4;
        peg$silentFails++;
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$currPos;
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parsepatternWhiteSpace();

        if (s4 === peg$FAILED) {
          s4 = peg$parsepatternSyntax();
        }

        peg$silentFails--;

        if (s4 === peg$FAILED) {
          s3 = undefined;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c11);
            }
          }

          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }

        if (s2 !== peg$FAILED) {
          while (s2 !== peg$FAILED) {
            s1.push(s2);
            s2 = peg$currPos;
            s3 = peg$currPos;
            peg$silentFails++;
            s4 = peg$parsepatternWhiteSpace();

            if (s4 === peg$FAILED) {
              s4 = peg$parsepatternSyntax();
            }

            peg$silentFails--;

            if (s4 === peg$FAILED) {
              s3 = undefined;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }

            if (s3 !== peg$FAILED) {
              if (input.length > peg$currPos) {
                s4 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s4 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c11);
                }
              }

              if (s4 !== peg$FAILED) {
                s3 = [s3, s4];
                s2 = s3;
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          }
        } else {
          s1 = peg$FAILED;
        }

        if (s1 !== peg$FAILED) {
          s0 = input.substring(s0, peg$currPos);
        } else {
          s0 = s1;
        }

        peg$silentFails--;

        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c69);
          }
        }

        return s0;
      }

      function insertLocation() {
        return options && options.captureLocation ? {
          location: location()
        } : {};
      }

      peg$result = peg$startRuleFunction();

      if (peg$result !== peg$FAILED && peg$currPos === input.length) {
        return peg$result;
      } else {
        if (peg$result !== peg$FAILED && peg$currPos < input.length) {
          peg$fail(peg$endExpectation());
        }

        throw peg$buildStructuredError(peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1) : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
      }
    }

    var parse = peg$parse;

    var PLURAL_HASHTAG_REGEX = /(^|[^\\])#/g;
    /**
     * Whether to convert `#` in plural rule options
     * to `{var, number}`
     * @param el AST Element
     * @param pluralStack current plural stack
     */

    function normalizeHashtagInPlural(els) {
      els.forEach(function (el) {
        // If we're encountering a plural el
        if (!isPluralElement(el)) {
          return;
        } // Go down the options and search for # in any literal element


        Object.keys(el.options).forEach(function (id) {
          var _a;

          var opt = el.options[id]; // If we got a match, we have to split this
          // and inject a NumberElement in the middle

          var matchingLiteralElIndex = -1;
          var literalEl = undefined;

          for (var i = 0; i < opt.value.length; i++) {
            var el_1 = opt.value[i];

            if (isLiteralElement(el_1) && PLURAL_HASHTAG_REGEX.test(el_1.value)) {
              matchingLiteralElIndex = i;
              literalEl = el_1;
              break;
            }
          }

          if (literalEl) {
            var newValue = literalEl.value.replace(PLURAL_HASHTAG_REGEX, "$1{" + el.value + ", number}");
            var newEls = parse(newValue);

            (_a = opt.value).splice.apply(_a, [matchingLiteralElIndex, 1].concat(newEls));
          }

          normalizeHashtagInPlural(opt.value);
        });
      });
    }

    function parse$1(input, opts) {
      var els = parse(input, opts);

      if (!opts || opts.normalizeHashtagInPlural !== false) {
        normalizeHashtagInPlural(els);
      }

      return els;
    }

    /*
    Copyright (c) 2014, Yahoo! Inc. All rights reserved.
    Copyrights licensed under the New BSD License.
    See the accompanying LICENSE file for terms.
    */
    // -- Utilities ----------------------------------------------------------------
    function getCacheId(inputs) {
      return JSON.stringify(inputs.map(function (input) {
        return input && _typeof(input) === 'object' ? orderedProps(input) : input;
      }));
    }

    function orderedProps(obj) {
      return Object.keys(obj).sort().map(function (k) {
        var _a;

        return _a = {}, _a[k] = obj[k], _a;
      });
    }

    var memoizeFormatConstructor = function memoizeFormatConstructor(FormatConstructor, cache) {
      if (cache === void 0) {
        cache = {};
      }

      return function () {
        var _a;

        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        var cacheId = getCacheId(args);
        var format = cacheId && cache[cacheId];

        if (!format) {
          format = new ((_a = FormatConstructor).bind.apply(_a, [void 0].concat(args)))();

          if (cacheId) {
            cache[cacheId] = format;
          }
        }

        return format;
      };
    };

    var __extends$1 = undefined && undefined.__extends || function () {
      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      return function (d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var ESCAPE_HASH_REGEX = /\\#/g;

    var FormatError =
    /** @class */
    function (_super) {
      __extends$1(FormatError, _super);

      function FormatError(msg, variableId) {
        var _this = _super.call(this, msg) || this;

        _this.variableId = variableId;
        return _this;
      }

      return FormatError;
    }(Error);

    function mergeLiteral(parts) {
      if (parts.length < 2) {
        return parts;
      }

      return parts.reduce(function (all, part) {
        var lastPart = all[all.length - 1];

        if (!lastPart || lastPart.type !== 0
        /* literal */
        || part.type !== 0
        /* literal */
        ) {
            all.push(part);
          } else {
          lastPart.value += part.value;
        }

        return all;
      }, []);
    } // TODO(skeleton): add skeleton support


    function formatToParts(els, locales, formatters, formats, values, // For debugging
    originalMessage) {
      // Hot path for straight simple msg translations
      if (els.length === 1 && isLiteralElement(els[0])) {
        return [{
          type: 0
          /* literal */
          ,
          value: els[0].value.replace(ESCAPE_HASH_REGEX, '#')
        }];
      }

      var result = [];

      for (var _i = 0, els_1 = els; _i < els_1.length; _i++) {
        var el = els_1[_i]; // Exit early for string parts.

        if (isLiteralElement(el)) {
          result.push({
            type: 0
            /* literal */
            ,
            value: el.value.replace(ESCAPE_HASH_REGEX, '#')
          });
          continue;
        }

        var varName = el.value; // Enforce that all required values are provided by the caller.

        if (!(values && varName in values)) {
          throw new FormatError("The intl string context variable \"" + varName + "\" was not provided to the string \"" + originalMessage + "\"");
        }

        var value = values[varName];

        if (isArgumentElement(el)) {
          if (!value || typeof value === 'string' || typeof value === 'number') {
            result.push({
              type: 0
              /* literal */
              ,
              value: typeof value === 'string' || typeof value === 'number' ? String(value) : ''
            });
          } else {
            result.push({
              type: 1
              /* argument */
              ,
              value: value
            });
          }

          continue;
        } // Recursively format plural and select parts' option — which can be a
        // nested pattern structure. The choosing of the option to use is
        // abstracted-by and delegated-to the part helper object.


        if (isDateElement(el)) {
          var style = typeof el.style === 'string' ? formats.date[el.style] : undefined;
          result.push({
            type: 0
            /* literal */
            ,
            value: formatters.getDateTimeFormat(locales, style).format(value)
          });
          continue;
        }

        if (isTimeElement(el)) {
          var style = typeof el.style === 'string' ? formats.time[el.style] : undefined;
          result.push({
            type: 0
            /* literal */
            ,
            value: formatters.getDateTimeFormat(locales, style).format(value)
          });
          continue;
        }

        if (isNumberElement(el)) {
          var style = typeof el.style === 'string' ? formats.number[el.style] : undefined;
          result.push({
            type: 0
            /* literal */
            ,
            value: formatters.getNumberFormat(locales, style).format(value)
          });
          continue;
        }

        if (isSelectElement(el)) {
          var opt = el.options[value] || el.options.other;

          if (!opt) {
            throw new RangeError("Invalid values for \"" + el.value + "\": \"" + value + "\". Options are \"" + Object.keys(el.options).join('", "') + "\"");
          }

          result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values));
          continue;
        }

        if (isPluralElement(el)) {
          var opt = el.options["=" + value];

          if (!opt) {
            var rule = formatters.getPluralRules(locales, {
              type: el.pluralType
            }).select(value - (el.offset || 0));
            opt = el.options[rule] || el.options.other;
          }

          if (!opt) {
            throw new RangeError("Invalid values for \"" + el.value + "\": \"" + value + "\". Options are \"" + Object.keys(el.options).join('", "') + "\"");
          }

          result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values));
          continue;
        }
      }

      return mergeLiteral(result);
    }
    function formatToString(els, locales, formatters, formats, values, // For debugging
    originalMessage) {
      var parts = formatToParts(els, locales, formatters, formats, values, originalMessage); // Hot path for straight simple msg translations

      if (parts.length === 1) {
        return parts[0].value;
      }

      return parts.reduce(function (all, part) {
        return all += part.value;
      }, '');
    } // Singleton

    var domParser;
    var TOKEN_DELIMITER = '@@';
    var TOKEN_REGEX = /@@(.*?)@@/g;
    var counter = 0;

    function generateId() {
      return Date.now() + "_" + ++counter;
    }

    function restoreRichPlaceholderMessage(text, objectParts) {
      return text.split(TOKEN_REGEX).filter(Boolean).map(function (c) {
        return objectParts[c] || c;
      });
    }

    function formatXMLMessage(els, locales, formatters, formats, values, // For debugging
    originalMessage) {
      var parts = formatToParts(els, locales, formatters, formats, values, originalMessage);
      var objectParts = {};
      var formattedMessage = parts.reduce(function (all, part) {
        if (typeof part.value === 'string' || part.type === 0
        /* literal */
        ) {
            return all += part.value;
          }

        var id = generateId();
        objectParts[id] = part.value;
        return all += "" + TOKEN_DELIMITER + id + TOKEN_DELIMITER;
      }, ''); // Not designed to filter out aggressively

      if (!~formattedMessage.indexOf('<')) {
        return restoreRichPlaceholderMessage(formattedMessage, objectParts);
      }

      if (!values) {
        throw new FormatError('Message has placeholders but no values was given');
      }

      if (typeof DOMParser === 'undefined') {
        throw new FormatError('Cannot format XML message without DOMParser');
      }

      if (!domParser) {
        domParser = new DOMParser();
      } // XML, not HTML since HTMl is strict about self-closing tag


      var dom = domParser.parseFromString("<template>" + formattedMessage + "</template>", 'application/xml');

      if (dom.getElementsByTagName('parsererror').length) {
        throw new FormatError("Malformed XML message " + dom.getElementsByTagName('parsererror')[0].innerHTML);
      }

      var content = dom.firstChild;

      if (!content) {
        throw new FormatError("Malformed XML message " + formattedMessage);
      }

      var tagsToFormat = Object.keys(values).filter(function (varName) {
        return !!dom.getElementsByTagName(varName).length;
      }); // No tags to format

      if (!tagsToFormat.length) {
        return restoreRichPlaceholderMessage(formattedMessage, objectParts);
      }

      var childNodes = Array.prototype.slice.call(content.childNodes);
      return childNodes.reduce(function (reconstructedChunks, _a) {
        var tagName = _a.tagName,
            outerHTML = _a.outerHTML,
            textContent = _a.textContent; // Regular text

        if (!tagName) {
          var chunks = restoreRichPlaceholderMessage(textContent || '', objectParts);
          return reconstructedChunks.concat(chunks);
        } // Legacy HTML


        if (!values[tagName]) {
          var chunks = restoreRichPlaceholderMessage(outerHTML, objectParts);

          if (chunks.length === 1) {
            return reconstructedChunks.concat([chunks[0]]);
          }

          return reconstructedChunks.concat(chunks);
        } // XML Tag replacement


        var formatFnOrValue = values[tagName];

        if (typeof formatFnOrValue === 'function') {
          if (textContent == null) {
            return reconstructedChunks.concat([formatFnOrValue(textContent || undefined)]);
          }

          var chunks = restoreRichPlaceholderMessage(textContent, objectParts);
          return reconstructedChunks.concat([formatFnOrValue.apply(void 0, chunks)]);
        }

        return reconstructedChunks.concat([formatFnOrValue]);
      }, []);
    }

    /*
    Copyright (c) 2014, Yahoo! Inc. All rights reserved.
    Copyrights licensed under the New BSD License.
    See the accompanying LICENSE file for terms.
    */
    var __assign$1 = undefined && undefined.__assign || function () {
      __assign$1 = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return __assign$1.apply(this, arguments);
    };

    function resolveLocale(locales) {
      if (typeof locales === 'string') {
        locales = [locales];
      }

      try {
        return Intl.NumberFormat.supportedLocalesOf(locales, {
          // IE11 localeMatcher `lookup` seems to convert `en` -> `en-US`
          // but not other browsers,
          localeMatcher: 'best fit'
        })[0];
      } catch (e) {
        return IntlMessageFormat.defaultLocale;
      }
    } // TODO(skeleton): add skeleton support


    function prewarmFormatters(els, locales, formatters, formats) {
      els.filter(function (el) {
        return !isArgumentElement(el) && !isLiteralElement(el);
      }).forEach(function (el) {
        // Recursively format plural and select parts' option — which can be a
        // nested pattern structure. The choosing of the option to use is
        // abstracted-by and delegated-to the part helper object.
        if (isDateElement(el)) {
          var style = typeof el.style === 'string' ? formats.date[el.style] : undefined;
          formatters.getDateTimeFormat(locales, style);
        }

        if (isTimeElement(el)) {
          var style = typeof el.style === 'string' ? formats.time[el.style] : undefined;
          formatters.getDateTimeFormat(locales, style);
        }

        if (isNumberElement(el)) {
          var style = typeof el.style === 'string' ? formats.number[el.style] : undefined;
          formatters.getNumberFormat(locales, style);
        }

        if (isSelectElement(el)) {
          Object.keys(el.options).forEach(function (id) {
            return prewarmFormatters(el.options[id].value, locales, formatters, formats);
          });
        }

        if (isPluralElement(el)) {
          formatters.getPluralRules(locales, {
            type: el.pluralType
          });
          Object.keys(el.options).forEach(function (id) {
            return prewarmFormatters(el.options[id].value, locales, formatters, formats);
          });
        }
      });
    }

    function mergeConfig(c1, c2) {
      if (!c2) {
        return c1;
      }

      return __assign$1({}, c1 || {}, c2 || {}, Object.keys(c1).reduce(function (all, k) {
        all[k] = __assign$1({}, c1[k], c2[k] || {});
        return all;
      }, {}));
    }

    function mergeConfigs(defaultConfig, configs) {
      if (!configs) {
        return defaultConfig;
      }

      return Object.keys(defaultConfig).reduce(function (all, k) {
        all[k] = mergeConfig(defaultConfig[k], configs[k]);
        return all;
      }, __assign$1({}, defaultConfig));
    }

    function createDefaultFormatters(cache) {
      if (cache === void 0) {
        cache = {
          number: {},
          dateTime: {},
          pluralRules: {}
        };
      }

      return {
        getNumberFormat: memoizeFormatConstructor(Intl.NumberFormat, cache.number),
        getDateTimeFormat: memoizeFormatConstructor(Intl.DateTimeFormat, cache.dateTime),
        getPluralRules: memoizeFormatConstructor(Intl.PluralRules, cache.pluralRules)
      };
    }

    var IntlMessageFormat =
    /** @class */
    function () {
      function IntlMessageFormat(message, locales, overrideFormats, opts) {
        var _this = this;

        if (locales === void 0) {
          locales = IntlMessageFormat.defaultLocale;
        }

        this.formatterCache = {
          number: {},
          dateTime: {},
          pluralRules: {}
        };

        this.format = function (values) {
          return formatToString(_this.ast, _this.locale, _this.formatters, _this.formats, values, _this.message);
        };

        this.formatToParts = function (values) {
          return formatToParts(_this.ast, _this.locale, _this.formatters, _this.formats, values, _this.message);
        };

        this.formatXMLMessage = function (values) {
          return formatXMLMessage(_this.ast, _this.locale, _this.formatters, _this.formats, values, _this.message);
        };

        this.resolvedOptions = function () {
          return {
            locale: _this.locale
          };
        };

        this.getAst = function () {
          return _this.ast;
        };

        if (typeof message === 'string') {
          this.message = message;

          if (!IntlMessageFormat.__parse) {
            throw new TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
          } // Parse string messages into an AST.


          this.ast = IntlMessageFormat.__parse(message);
        } else {
          this.ast = message;
        }

        if (!Array.isArray(this.ast)) {
          throw new TypeError('A message must be provided as a String or AST.');
        } // Creates a new object with the specified `formats` merged with the default
        // formats.


        this.formats = mergeConfigs(IntlMessageFormat.formats, overrideFormats); // Defined first because it's used to build the format pattern.

        this.locale = resolveLocale(locales || []);
        this.formatters = opts && opts.formatters || createDefaultFormatters(this.formatterCache);
        prewarmFormatters(this.ast, this.locale, this.formatters, this.formats);
      }

      IntlMessageFormat.defaultLocale = 'en';
      IntlMessageFormat.__parse = undefined; // Default format options used as the prototype of the `formats` provided to the
      // constructor. These are used when constructing the internal Intl.NumberFormat
      // and Intl.DateTimeFormat instances.

      IntlMessageFormat.formats = {
        number: {
          currency: {
            style: 'currency'
          },
          percent: {
            style: 'percent'
          }
        },
        date: {
          short: {
            month: 'numeric',
            day: 'numeric',
            year: '2-digit'
          },
          medium: {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          },
          long: {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          },
          full: {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          }
        },
        time: {
          short: {
            hour: 'numeric',
            minute: 'numeric'
          },
          medium: {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
          },
          long: {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZoneName: 'short'
          },
          full: {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZoneName: 'short'
          }
        }
      };
      return IntlMessageFormat;
    }();

    /*
    Copyright (c) 2014, Yahoo! Inc. All rights reserved.
    Copyrights licensed under the New BSD License.
    See the accompanying LICENSE file for terms.
    */
    IntlMessageFormat.__parse = parse$1;

    /*
    HTML escaping is the same as React's
    (on purpose.) Therefore, it has the following Copyright and Licensing:

    Copyright 2013-2014, Facebook, Inc.
    All rights reserved.

    This source code is licensed under the BSD-style license found in the LICENSE
    file in the root directory of React's source tree.
    */

    var invariant = require('invariant');

    var ESCAPED_CHARS = {
      38: '&amp;',
      62: '&gt;',
      60: '&lt;',
      34: '&quot;',
      39: '&#x27;'
    };
    var UNSAFE_CHARS_REGEX = /[&><"']/g;
    function escape(str) {
      return ('' + str).replace(UNSAFE_CHARS_REGEX, function (match) {
        return ESCAPED_CHARS[match.charCodeAt(0)];
      });
    }
    function filterProps(props, whitelist) {
      var defaults = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return whitelist.reduce(function (filtered, name) {
        if (props.hasOwnProperty(name)) {
          filtered[name] = props[name];
        } else if (defaults.hasOwnProperty(name)) {
          filtered[name] = defaults[name];
        }

        return filtered;
      }, {});
    }
    function invariantIntlContext(intl) {
      invariant(intl, '[React Intl] Could not find required `intl` object. ' + '<IntlProvider> needs to exist in the component ancestry.');
    }
    function createError(message, exception) {
      var eMsg = exception ? "\n".concat(exception.stack) : '';
      return "[React Intl] ".concat(message).concat(eMsg);
    }
    function defaultErrorHandler(error) {
      if (process.env.NODE_ENV !== 'production') {
        console.error(error);
      }
    }
    var DEFAULT_INTL_CONFIG = {
      formats: {},
      messages: {},
      timeZone: undefined,
      textComponent: React.Fragment,
      defaultLocale: 'en',
      defaultFormats: {},
      onError: defaultErrorHandler
    };
    function createIntlCache() {
      return {
        dateTime: {},
        number: {},
        message: {},
        relativeTime: {},
        pluralRules: {}
      };
    }
    /**
     * Create intl formatters and populate cache
     * @param cache explicit cache to prevent leaking memory
     */

    function createFormatters() {
      var cache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : createIntlCache();
      return {
        getDateTimeFormat: memoizeFormatConstructor(Intl.DateTimeFormat, cache.dateTime),
        getNumberFormat: memoizeFormatConstructor(Intl.NumberFormat, cache.number),
        getMessageFormat: memoizeFormatConstructor(IntlMessageFormat, cache.message),
        getRelativeTimeFormat: memoizeFormatConstructor(Intl.RelativeTimeFormat, cache.relativeTime),
        getPluralRules: memoizeFormatConstructor(Intl.PluralRules, cache.pluralRules)
      };
    }

    // this is to interop with TypeScript since `invariant`
    // does not export a default
    // https://github.com/rollup/rollup/issues/1267

    var hoistNonReactStatics = require('hoist-non-react-statics');

    function getDisplayName(Component) {
      return Component.displayName || Component.name || 'Component';
    } // TODO: We should provide initial value here


    var IntlContext = React.createContext(null);
    var IntlConsumer = IntlContext.Consumer,
        IntlProvider = IntlContext.Provider;
    var Provider = IntlProvider;
    var Context = IntlContext;
    function injectIntl(WrappedComponent, options) {
      var _ref = options || {},
          _ref$intlPropName = _ref.intlPropName,
          intlPropName = _ref$intlPropName === void 0 ? 'intl' : _ref$intlPropName,
          _ref$forwardRef = _ref.forwardRef,
          forwardRef = _ref$forwardRef === void 0 ? false : _ref$forwardRef,
          _ref$enforceContext = _ref.enforceContext,
          enforceContext = _ref$enforceContext === void 0 ? true : _ref$enforceContext;

      var WithIntl = function WithIntl(props) {
        return React.createElement(IntlConsumer, null, function (intl) {
          if (enforceContext) {
            invariantIntlContext(intl);
          }

          return React.createElement(WrappedComponent, Object.assign({}, props, _defineProperty({}, intlPropName, intl), {
            ref: forwardRef ? props.forwardedRef : null
          }));
        });
      };

      WithIntl.displayName = "injectIntl(".concat(getDisplayName(WrappedComponent), ")");
      WithIntl.WrappedComponent = WrappedComponent;

      if (forwardRef) {
        return hoistNonReactStatics(React.forwardRef(function (props, ref) {
          return React.createElement(WithIntl, Object.assign({}, props, {
            forwardedRef: ref
          }));
        }), WrappedComponent);
      }

      return hoistNonReactStatics(WithIntl, WrappedComponent);
    }

    function createFormattedComponent(type) {
      var Component = function Component(props) {
        var value = props.value,
            children = props.children,
            _props$intl = props.intl,
            formatFn = _props$intl[type],
            Text = _props$intl.textComponent;
        var formattedValue = formatFn(value, props);

        if (typeof children === 'function') {
          return children(formattedValue);
        }

        if (Text) {
          return React.createElement(Text, null, formattedValue);
        } // Work around @types/react where React.FC cannot return string


        return formattedValue;
      };

      Component.displayName = type === 'formatDate' ? 'FormattedDate' : type === 'formatTime' ? 'FormattedTime' : 'FormattedNumber';
      return {
        Component: injectIntl(Component)
      };
    }

    function useIntl() {
      var intl = React.useContext(Context);
      invariantIntlContext(intl);
      return intl;
    }

    /*
     * Copyright 2015, Yahoo Inc.
     * Copyrights licensed under the New BSD License.
     * See the accompanying LICENSE file for terms.
     */
    var invariant$1 = require('invariant');
    var DATE_TIME_FORMAT_OPTIONS = ['localeMatcher', 'formatMatcher', 'timeZone', 'hour12', 'weekday', 'era', 'year', 'month', 'day', 'hour', 'minute', 'second', 'timeZoneName'];
    var NUMBER_FORMAT_OPTIONS = ['localeMatcher', 'style', 'currency', 'currencyDisplay', 'useGrouping', 'minimumIntegerDigits', 'minimumFractionDigits', 'maximumFractionDigits', 'minimumSignificantDigits', 'maximumSignificantDigits'];
    var RELATIVE_FORMAT_OPTIONS = ['numeric', 'style'];
    var PLURAL_FORMAT_OPTIONS = ['localeMatcher', 'type'];

    function getNamedFormat(formats, type, name, onError) {
      var formatType = formats && formats[type];
      var format;

      if (formatType) {
        format = formatType[name];
      }

      if (format) {
        return format;
      }

      onError(createError("No ".concat(type, " format named: ").concat(name)));
    }
    /**
     * Escape a raw msg when we run in prod mode
     * https://github.com/formatjs/formatjs/blob/master/packages/intl-messageformat-parser/src/parser.pegjs#L155
     */


    function escapeUnformattedMessage(msg) {
      return msg.replace(/'\{(.*?)\}'/g, "{$1}");
    }

    function formatDate(_ref, state, value) {
      var locale = _ref.locale,
          formats = _ref.formats,
          onError = _ref.onError,
          timeZone = _ref.timeZone;
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var format = options.format;
      var defaults = Object.assign({}, timeZone && {
        timeZone: timeZone
      }, format && getNamedFormat(formats, 'date', format, onError));
      var filteredOptions = filterProps(options, DATE_TIME_FORMAT_OPTIONS, defaults);

      try {
        return state.getDateTimeFormat(locale, filteredOptions).format(value);
      } catch (e) {
        onError(createError('Error formatting date.', e));
      }

      return String(value);
    }
    function formatTime(_ref2, state, value) {
      var locale = _ref2.locale,
          formats = _ref2.formats,
          onError = _ref2.onError,
          timeZone = _ref2.timeZone;
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var format = options.format;
      var defaults = Object.assign({}, timeZone && {
        timeZone: timeZone
      }, format && getNamedFormat(formats, 'time', format, onError));
      var filteredOptions = filterProps(options, DATE_TIME_FORMAT_OPTIONS, defaults);

      if (!filteredOptions.hour && !filteredOptions.minute && !filteredOptions.second) {
        // Add default formatting options if hour, minute, or second isn't defined.
        filteredOptions = Object.assign({}, filteredOptions, {
          hour: 'numeric',
          minute: 'numeric'
        });
      }

      try {
        return state.getDateTimeFormat(locale, filteredOptions).format(value);
      } catch (e) {
        onError(createError('Error formatting time.', e));
      }

      return String(value);
    }
    function formatRelativeTime(_ref3, state, value) {
      var locale = _ref3.locale,
          formats = _ref3.formats,
          onError = _ref3.onError;
      var unit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'second';
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      var format = options.format;
      var defaults = !!format && getNamedFormat(formats, 'relative', format, onError) || {};
      var filteredOptions = filterProps(options, RELATIVE_FORMAT_OPTIONS, defaults);

      try {
        return state.getRelativeTimeFormat(locale, filteredOptions).format(value, unit);
      } catch (e) {
        onError(createError('Error formatting relative time.', e));
      }

      return String(value);
    }
    function formatNumber(_ref4, state, value) {
      var locale = _ref4.locale,
          formats = _ref4.formats,
          onError = _ref4.onError;
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var format = options.format;
      var defaults = format && getNamedFormat(formats, 'number', format, onError) || {};
      var filteredOptions = filterProps(options, NUMBER_FORMAT_OPTIONS, defaults);

      try {
        return state.getNumberFormat(locale, filteredOptions).format(value);
      } catch (e) {
        onError(createError('Error formatting number.', e));
      }

      return String(value);
    }
    function formatPlural(_ref5, state, value) {
      var locale = _ref5.locale,
          onError = _ref5.onError;
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var filteredOptions = filterProps(options, PLURAL_FORMAT_OPTIONS);

      try {
        return state.getPluralRules(locale, filteredOptions).select(value);
      } catch (e) {
        onError(createError('Error formatting plural.', e));
      }

      return 'other';
    }
    function formatMessage(_ref6, state) {
      var locale = _ref6.locale,
          formats = _ref6.formats,
          messages = _ref6.messages,
          defaultLocale = _ref6.defaultLocale,
          defaultFormats = _ref6.defaultFormats,
          onError = _ref6.onError;
      var messageDescriptor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        id: ''
      };
      var values = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var id = messageDescriptor.id,
          defaultMessage = messageDescriptor.defaultMessage; // `id` is a required field of a Message Descriptor.

      invariant$1(id, '[React Intl] An `id` must be provided to format a message.');
      var message = messages && messages[id];
      var hasValues = Object.keys(values).length > 0; // Avoid expensive message formatting for simple messages without values. In
      // development messages will always be formatted in case of missing values.

      if (!hasValues && process.env.NODE_ENV === 'production') {
        var val = message || defaultMessage || id;

        if (typeof val === 'string') {
          return escapeUnformattedMessage(val);
        }

        invariant$1(val.length === 1 && val[0].type === TYPE.literal, 'Message has placeholders but no values was provided');
        return val[0].value;
      }

      var formattedMessageParts = [];

      if (message) {
        try {
          var formatter = state.getMessageFormat(message, locale, formats, {
            formatters: state
          });
          formattedMessageParts = formatter.formatXMLMessage(values);
        } catch (e) {
          onError(createError("Error formatting message: \"".concat(id, "\" for locale: \"").concat(locale, "\"") + (defaultMessage ? ', using default message as fallback.' : ''), e));
        }
      } else {
        // This prevents warnings from littering the console in development
        // when no `messages` are passed into the <IntlProvider> for the
        // default locale, and a default message is in the source.
        if (!defaultMessage || locale && locale.toLowerCase() !== defaultLocale.toLowerCase()) {
          onError(createError("Missing message: \"".concat(id, "\" for locale: \"").concat(locale, "\"") + (defaultMessage ? ', using default message as fallback.' : '')));
        }
      }

      if (!formattedMessageParts.length && defaultMessage) {
        try {
          var _formatter = state.getMessageFormat(defaultMessage, defaultLocale, defaultFormats);

          formattedMessageParts = _formatter.formatXMLMessage(values);
        } catch (e) {
          onError(createError("Error formatting the default message for: \"".concat(id, "\""), e));
        }
      }

      if (!formattedMessageParts.length) {
        onError(createError("Cannot format message: \"".concat(id, "\", ") + "using message ".concat(message || defaultMessage ? 'source' : 'id', " as fallback.")));

        if (typeof message === 'string') {
          return message || defaultMessage || id;
        }

        return defaultMessage || id;
      }

      if (formattedMessageParts.length === 1 && typeof formattedMessageParts[0] === 'string') {
        return formattedMessageParts[0] || defaultMessage || id;
      }

      return formattedMessageParts;
    }
    function formatHTMLMessage(config, state) {
      var messageDescriptor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        id: ''
      };
      var rawValues = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      // Process all the values before they are used when formatting the ICU
      // Message string. Since the formatted message might be injected via
      // `innerHTML`, all String-based values need to be HTML-escaped.
      var escapedValues = Object.keys(rawValues).reduce(function (escaped, name) {
        var value = rawValues[name];
        escaped[name] = typeof value === 'string' ? escape(value) : value;
        return escaped;
      }, {});
      return formatMessage(config, state, messageDescriptor, escapedValues);
    }

    /*
     * Copyright 2015, Yahoo Inc.
     * Copyrights licensed under the New BSD License.
     * See the accompanying LICENSE file for terms.
     */
    var DEFAULT_CONSTRUCTORS = [Intl.DateTimeFormat, Intl.NumberFormat, Intl.PluralRules];
    function areIntlLocalesSupported(locales, constructorsToCheck) {
      if (constructorsToCheck === void 0) {
        constructorsToCheck = DEFAULT_CONSTRUCTORS;
      }

      if (typeof Intl === 'undefined') {
        return false;
      }

      if (!locales) {
        throw new Error('locales must be supplied.');
      }

      if (!Array.isArray(locales)) {
        locales = [locales];
      }

      var intlConstructors = constructorsToCheck.filter(Boolean);

      if (intlConstructors.length === 0) {
        return false;
      }

      return intlConstructors.every(function (intlConstructor) {
        return intlConstructor.supportedLocalesOf(locales).length === locales.length;
      });
    }

    var shallowEquals = require('shallow-equal/objects');

    var IntlProvider$1 =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _inherits(IntlProvider, _React$PureComponent);

      function IntlProvider() {
        var _this;

        _classCallCheck(this, IntlProvider);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(IntlProvider).apply(this, arguments));
        _this.cache = createIntlCache();
        _this.state = {
          cache: _this.cache,
          intl: undefined,
          prevProps: {
            locale: _this.props.locale
          }
        };
        return _this;
      }

      _createClass(IntlProvider, [{
        key: "render",
        value: function render() {
          invariantIntlContext(this.state.intl);
          return React.createElement(Provider, {
            value: this.state.intl
          }, this.props.children);
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: function getDerivedStateFromProps(props, _ref) {
          var prevProps = _ref.prevProps,
              cache = _ref.cache;
          var locale = props.locale,
              timeZone = props.timeZone,
              formats = props.formats,
              textComponent = props.textComponent,
              messages = props.messages,
              defaultLocale = props.defaultLocale,
              defaultFormats = props.defaultFormats,
              onError = props.onError;
          var filteredProps = {
            locale: locale,
            timeZone: timeZone,
            formats: formats,
            textComponent: textComponent,
            messages: messages,
            defaultLocale: defaultLocale,
            defaultFormats: defaultFormats,
            onError: onError
          };

          if (!shallowEquals(prevProps, filteredProps)) {
            return {
              intl: createIntl(filteredProps, cache),
              prevProps: filteredProps
            };
          }

          return null;
        }
      }]);

      return IntlProvider;
    }(React.PureComponent);
    IntlProvider$1.displayName = 'IntlProvider';
    IntlProvider$1.defaultProps = DEFAULT_INTL_CONFIG;
    /**
     * Create intl object
     * @param config intl config
     * @param cache cache for formatter instances to prevent memory leak
     */

    function createIntl(config, cache) {
      var formatters = createFormatters(cache);
      var resolvedConfig = Object.assign({}, DEFAULT_INTL_CONFIG, config);

      if (!resolvedConfig.locale || !areIntlLocalesSupported(resolvedConfig.locale)) {
        var locale = resolvedConfig.locale,
            defaultLocale = resolvedConfig.defaultLocale,
            onError = resolvedConfig.onError;

        if (typeof onError === 'function') {
          onError(createError("Missing locale data for locale: \"".concat(locale, "\". ") + "Using default locale: \"".concat(defaultLocale, "\" as fallback.")));
        } // Since there's no registered locale data for `locale`, this will
        // fallback to the `defaultLocale` to make sure things can render.
        // The `messages` are overridden to the `defaultProps` empty object
        // to maintain referential equality across re-renders. It's assumed
        // each <FormattedMessage> contains a `defaultMessage` prop.


        resolvedConfig.locale = resolvedConfig.defaultLocale || 'en';
      }

      return Object.assign({}, resolvedConfig, {
        formatters: formatters,
        formatNumber: formatNumber.bind(undefined, resolvedConfig, formatters),
        formatRelativeTime: formatRelativeTime.bind(undefined, resolvedConfig, formatters),
        formatDate: formatDate.bind(undefined, resolvedConfig, formatters),
        formatTime: formatTime.bind(undefined, resolvedConfig, formatters),
        formatPlural: formatPlural.bind(undefined, resolvedConfig, formatters),
        formatMessage: formatMessage.bind(undefined, resolvedConfig, formatters),
        formatHTMLMessage: formatHTMLMessage.bind(undefined, resolvedConfig, formatters)
      });
    }

    var invariant$2 = require('invariant');

    var MINUTE = 60;
    var HOUR = 60 * 60;
    var DAY = 60 * 60 * 24;

    function selectUnit(seconds) {
      var absValue = Math.abs(seconds);

      if (absValue < MINUTE) {
        return 'second';
      }

      if (absValue < HOUR) {
        return 'minute';
      }

      if (absValue < DAY) {
        return 'hour';
      }

      return 'day';
    }

    function getDurationInSeconds(unit) {
      switch (unit) {
        case 'second':
          return 1;

        case 'minute':
          return MINUTE;

        case 'hour':
          return HOUR;

        default:
          return DAY;
      }
    }

    function valueToSeconds(value, unit) {
      if (!value) {
        return 0;
      }

      switch (unit) {
        case 'second':
          return value;

        case 'minute':
          return value * MINUTE;

        default:
          return value * HOUR;
      }
    }

    var INCREMENTABLE_UNITS = ['second', 'minute', 'hour'];

    function canIncrement() {
      var unit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'second';
      return INCREMENTABLE_UNITS.includes(unit);
    }

    function verifyProps(updateIntervalInSeconds, unit) {
      invariant$2(!updateIntervalInSeconds || updateIntervalInSeconds && canIncrement(unit), 'Cannot schedule update with unit longer than hour');
    }

    var FormattedRelativeTime =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _inherits(FormattedRelativeTime, _React$PureComponent);

      function FormattedRelativeTime(props, context) {
        var _this;

        _classCallCheck(this, FormattedRelativeTime);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(FormattedRelativeTime).call(this, props)); // Public for testing

        _this._updateTimer = null;
        _this.state = {
          prevUnit: _this.props.unit,
          prevValue: _this.props.value,
          currentValueInSeconds: canIncrement(_this.props.unit) ? valueToSeconds(_this.props.value, _this.props.unit) : 0
        };
        invariantIntlContext(context);
        verifyProps(props.updateIntervalInSeconds, props.unit);
        return _this;
      }

      _createClass(FormattedRelativeTime, [{
        key: "scheduleNextUpdate",
        value: function scheduleNextUpdate(_ref, _ref2) {
          var _this2 = this;

          var updateIntervalInSeconds = _ref.updateIntervalInSeconds,
              unit = _ref.unit;
          var currentValueInSeconds = _ref2.currentValueInSeconds;
          clearTimeout(this._updateTimer);
          this._updateTimer = null; // If there's no interval and we cannot increment this unit, do nothing

          if (!updateIntervalInSeconds || !canIncrement(unit)) {
            return;
          } // Figure out the next interesting time


          var nextValueInSeconds = currentValueInSeconds - updateIntervalInSeconds;
          var nextUnit = selectUnit(nextValueInSeconds); // We've reached the max auto incrementable unit, don't schedule another update

          if (nextUnit === 'day') {
            return;
          }

          var unitDuration = getDurationInSeconds(nextUnit);
          var remainder = nextValueInSeconds % unitDuration;
          var prevInterestingValueInSeconds = nextValueInSeconds - remainder;
          var nextInterestingValueInSeconds = prevInterestingValueInSeconds >= currentValueInSeconds ? prevInterestingValueInSeconds - unitDuration : prevInterestingValueInSeconds;
          var delayInSeconds = Math.abs(nextInterestingValueInSeconds - currentValueInSeconds);
          this._updateTimer = setTimeout(function () {
            return _this2.setState({
              currentValueInSeconds: nextInterestingValueInSeconds
            });
          }, delayInSeconds * 1e3);
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          this.scheduleNextUpdate(this.props, this.state);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          this.scheduleNextUpdate(this.props, this.state);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          clearTimeout(this._updateTimer);
          this._updateTimer = null;
        }
      }, {
        key: "render",
        value: function render() {
          var _this$context = this.context,
              formatRelativeTime = _this$context.formatRelativeTime,
              Text = _this$context.textComponent;
          var _this$props = this.props,
              children = _this$props.children,
              value = _this$props.value,
              unit = _this$props.unit,
              updateIntervalInSeconds = _this$props.updateIntervalInSeconds;
          var currentValueInSeconds = this.state.currentValueInSeconds;
          var currentValue = value || 0;
          var currentUnit = unit;

          if (canIncrement(unit) && currentValueInSeconds && updateIntervalInSeconds) {
            currentUnit = selectUnit(currentValueInSeconds);
            var unitDuration = getDurationInSeconds(currentUnit);
            currentValue = Math.round(currentValueInSeconds / unitDuration);
          }

          var formattedRelativeTime = formatRelativeTime(currentValue, currentUnit, Object.assign({}, this.props));

          if (typeof children === 'function') {
            return children(formattedRelativeTime);
          }

          if (Text) {
            return React.createElement(Text, null, formattedRelativeTime);
          }

          return formattedRelativeTime;
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: function getDerivedStateFromProps(props, state) {
          if (props.unit !== state.prevUnit || props.value !== state.prevValue) {
            return {
              prevValue: props.value,
              prevUnit: props.unit,
              currentValueInSeconds: canIncrement(props.unit) ? valueToSeconds(props.value, props.unit) : 0
            };
          }

          return null;
        }
      }]);

      return FormattedRelativeTime;
    }(React.PureComponent);
    FormattedRelativeTime.displayName = 'FormattedRelativeTime';
    FormattedRelativeTime.defaultProps = {
      value: 0,
      unit: 'second'
    };
    FormattedRelativeTime.contextType = Context;

    /*
     * Copyright 2015, Yahoo Inc.
     * Copyrights licensed under the New BSD License.
     * See the accompanying LICENSE file for terms.
     */

    var FormattedPlural = function FormattedPlural(props) {
      var value = props.value,
          other = props.other,
          children = props.children,
          _props$intl = props.intl,
          formatPlural = _props$intl.formatPlural,
          Text = _props$intl.textComponent;
      var pluralCategory = formatPlural(value, props);
      var formattedPlural = props[pluralCategory] || other;

      if (typeof children === 'function') {
        return children(formattedPlural);
      }

      if (Text) {
        return React.createElement(Text, null, formattedPlural);
      } // Work around @types/react where React.FC cannot return string


      return formattedPlural;
    };

    FormattedPlural.defaultProps = {
      type: 'cardinal'
    };
    FormattedPlural.displayName = 'FormattedPlural';
    var plural = injectIntl(FormattedPlural);

    /*
     * Copyright 2015, Yahoo Inc.
     * Copyrights licensed under the New BSD License.
     * See the accompanying LICENSE file for terms.
     */
    var __rest = undefined && undefined.__rest || function (s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
      }
      return t;
    };

    var shallowEquals$1 = require('shallow-equal/objects');

    var defaultFormatMessage = function defaultFormatMessage(descriptor, values) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry. Using default message as fallback.');
      }

      return formatMessage(Object.assign({}, DEFAULT_INTL_CONFIG, {
        locale: 'en'
      }), createFormatters(), descriptor, values);
    };

    var FormattedMessage =
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(FormattedMessage, _React$Component);

      function FormattedMessage(props, context) {
        var _this;

        _classCallCheck(this, FormattedMessage);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(FormattedMessage).call(this, props));

        if (!props.defaultMessage) {
          invariantIntlContext(context);
        }

        return _this;
      }

      _createClass(FormattedMessage, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
          var _a = this.props,
              values = _a.values,
              otherProps = __rest(_a, ["values"]);

          var nextValues = nextProps.values,
              nextOtherProps = __rest(nextProps, ["values"]);

          return !shallowEquals$1(nextValues, values) || !shallowEquals$1(otherProps, nextOtherProps);
        }
      }, {
        key: "render",
        value: function render() {
          var _ref = this.context || {},
              _ref$formatMessage = _ref.formatMessage,
              formatMessage = _ref$formatMessage === void 0 ? defaultFormatMessage : _ref$formatMessage,
              _ref$textComponent = _ref.textComponent,
              Text = _ref$textComponent === void 0 ? React.Fragment : _ref$textComponent;

          var _this$props = this.props,
              id = _this$props.id,
              description = _this$props.description,
              defaultMessage = _this$props.defaultMessage,
              values = _this$props.values,
              children = _this$props.children,
              _this$props$tagName = _this$props.tagName,
              Component = _this$props$tagName === void 0 ? Text : _this$props$tagName;
          var descriptor = {
            id: id,
            description: description,
            defaultMessage: defaultMessage
          };
          var nodes = formatMessage(descriptor, values);

          if (!Array.isArray(nodes)) {
            nodes = [nodes];
          }

          if (typeof children === 'function') {
            return children.apply(void 0, _toConsumableArray(nodes));
          }

          if (Component) {
            // Needs to use `createElement()` instead of JSX, otherwise React will
            // warn about a missing `key` prop with rich-text message formatting.
            return React.createElement.apply(React, [Component, null].concat(_toConsumableArray(nodes)));
          }

          return nodes;
        }
      }]);

      return FormattedMessage;
    }(React.Component);
    FormattedMessage.defaultProps = {
      values: {}
    };
    FormattedMessage.displayName = 'FormattedMessage';
    FormattedMessage.contextType = Context;

    var FormattedHTMLMessage =
    /*#__PURE__*/
    function (_FormattedMessage) {
      _inherits(FormattedHTMLMessage, _FormattedMessage);

      function FormattedHTMLMessage() {
        _classCallCheck(this, FormattedHTMLMessage);

        return _possibleConstructorReturn(this, _getPrototypeOf(FormattedHTMLMessage).apply(this, arguments));
      }

      _createClass(FormattedHTMLMessage, [{
        key: "render",
        value: function render() {
          var _this$context = this.context,
              formatHTMLMessage = _this$context.formatHTMLMessage,
              Text = _this$context.textComponent;
          var _this$props = this.props,
              id = _this$props.id,
              description = _this$props.description,
              defaultMessage = _this$props.defaultMessage,
              rawValues = _this$props.values,
              _this$props$tagName = _this$props.tagName,
              Component = _this$props$tagName === void 0 ? Text || 'span' : _this$props$tagName,
              children = _this$props.children;
          var descriptor = {
            id: id,
            description: description,
            defaultMessage: defaultMessage
          };
          var formattedHTMLMessage = formatHTMLMessage(descriptor, rawValues);

          if (typeof children === 'function') {
            return children(formattedHTMLMessage);
          } // Since the message presumably has HTML in it, we need to set
          // `innerHTML` in order for it to be rendered and not escaped by React.
          // To be safe, all string prop values were escaped when formatting the
          // message. It is assumed that the message is not UGC, and came from the
          // developer making it more like a template.
          //
          // Note: There's a perf impact of using this component since there's no
          // way for React to do its virtual DOM diffing.


          var html = {
            __html: formattedHTMLMessage
          };
          return React.createElement(Component, {
            dangerouslySetInnerHTML: html
          });
        }
      }]);

      return FormattedHTMLMessage;
    }(FormattedMessage);
    FormattedHTMLMessage.defaultProps = Object.assign({}, FormattedMessage.defaultProps, {
      tagName: 'span'
    });

    /*
     * Copyright 2015, Yahoo Inc.
     * Copyrights licensed under the New BSD License.
     * See the accompanying LICENSE file for terms.
     */

    var _createFormattedCompo = createFormattedComponent('formatDate'),
        FormattedDate = _createFormattedCompo.Component;

    var _createFormattedCompo2 = createFormattedComponent('formatTime'),
        FormattedTime = _createFormattedCompo2.Component;

    var _createFormattedCompo3 = createFormattedComponent('formatNumber'),
        FormattedNumber = _createFormattedCompo3.Component;

    exports.FormattedDate = FormattedDate;
    exports.FormattedHTMLMessage = FormattedHTMLMessage;
    exports.FormattedMessage = FormattedMessage;
    exports.FormattedNumber = FormattedNumber;
    exports.FormattedPlural = plural;
    exports.FormattedRelativeTime = FormattedRelativeTime;
    exports.FormattedTime = FormattedTime;
    exports.IntlContext = Context;
    exports.IntlProvider = IntlProvider$1;
    exports.RawIntlProvider = Provider;
    exports.createIntl = createIntl;
    exports.createIntlCache = createIntlCache;
    exports.defineMessages = defineMessages;
    exports.injectIntl = injectIntl;
    exports.useIntl = useIntl;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=react-intl.js.map
