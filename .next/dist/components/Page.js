"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("/Users/tomclarkson/redux-observable-tutorial/node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _head = require("/Users/tomclarkson/redux-observable-tutorial/node_modules/next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      _head2.default,
      null,
      _react2.default.createElement(
        "title",
        null,
        "Tom's guide to RX"
      ),
      _react2.default.createElement("link", { rel: "stylesheet", href: "/static/page.css" }),
      _react2.default.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width" }),
      _react2.default.createElement("script", { src: "https://static.jsbin.com/js/embed.js" }),
      _react2.default.createElement("link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/prism/1.5.1/themes/prism.min.css" }),
      _react2.default.createElement("script", { src: "https://cdnjs.cloudflare.com/ajax/libs/prism/1.5.1/prism.min.js" })
    ),
    _react2.default.createElement(
      "div",
      { className: "wrapper" },
      _react2.default.createElement(
        "header",
        null,
        _react2.default.createElement("img", { src: "/static/i.t-logo.png" }),
        _react2.default.createElement(
          "span",
          null,
          "IMMUTABLETOM's GUIDE TO RX"
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "page" },
        children
      )
    )
  );
};