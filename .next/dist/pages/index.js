'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style = require('/Users/tomclarkson/redux-observable-tutorial/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('/Users/tomclarkson/redux-observable-tutorial/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _Page = require('../components/Page');

var _Page2 = _interopRequireDefault(_Page);

var _link = require('/Users/tomclarkson/redux-observable-tutorial/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	return _react2.default.createElement(
		_Page2.default,
		null,
		_react2.default.createElement(
			'h1',
			{
				'data-jsx': 3771569339
			},
			'Welcome, this guide will get you upto speed with all things RXJS.'
		),
		_react2.default.createElement(
			'div',
			{ id: 'tutorial-sections', 'data-jsx': 3771569339
			},
			_react2.default.createElement(
				'div',
				{ className: 'section', 'data-jsx': 3771569339
				},
				_react2.default.createElement(
					'strong',
					{
						'data-jsx': 3771569339
					},
					'1.'
				),
				_react2.default.createElement(
					_link2.default,
					{ href: '/why' },
					'Why use RXJS'
				)
			),
			_react2.default.createElement(
				'div',
				{ className: 'section', 'data-jsx': 3771569339
				},
				_react2.default.createElement(
					'strong',
					{
						'data-jsx': 3771569339
					},
					'2.'
				),
				_react2.default.createElement(
					_link2.default,
					{ href: '/how' },
					'How it works under the hood'
				)
			),
			_react2.default.createElement(
				'div',
				{ className: 'section', 'data-jsx': 3771569339
				},
				_react2.default.createElement(
					'strong',
					{
						'data-jsx': 3771569339
					},
					'3.'
				),
				_react2.default.createElement(
					_link2.default,
					{ href: '/examples' },
					'Examples'
				)
			),
			_react2.default.createElement(
				'div',
				{ className: 'section', 'data-jsx': 3771569339
				},
				_react2.default.createElement(
					'strong',
					{
						'data-jsx': 3771569339
					},
					'4.'
				),
				_react2.default.createElement(
					_link2.default,
					{ href: 'https://github.com/Jayco-Design/Fergus/wiki/How-Redux-Observable-works' },
					'Redux observable'
				)
			)
		),
		_react2.default.createElement(_style2.default, {
			styleId: 3771569339,
			css: 'a[data-jsx="3771569339"] {background: pink;}#tutorial-sections[data-jsx="3771569339"] {display:-webkit-flex; display:flex;-webkit-flex-direction: column;-moz-flex-direction: column;flex-direction: column;}#tutorial-sections[data-jsx="3771569339"] .section[data-jsx="3771569339"] {margin-bottom: 20px;font-size: 1.5em;}#tutorial-sections[data-jsx="3771569339"] strong[data-jsx="3771569339"] {font-weight: bold;margin-right: 10px;}'
		})
	);
};