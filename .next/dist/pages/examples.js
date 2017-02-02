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
			'span',
			{ className: 'tldr', 'data-jsx': 2679054696
			},
			'Working with nested observables'
		),
		_react2.default.createElement(
			'p',
			{
				'data-jsx': 2679054696
			},
			'It is common to work with nested observables with RX because we often map items into observerables. For example we define drag moves as mouse downs mapped into mouse moves until mouse up. Mapping to an observable (mouse moves) creates a nested observable.'
		),
		_react2.default.createElement(
			'a',
			{ className: 'jsbin-embed code-embed',
				href: 'https://jsbin.com/luyazes/1/edit?js,console&height=500px', 'data-jsx': 2679054696
			},
			'Higher order observables problem'
		),
		_react2.default.createElement(
			'p',
			{
				'data-jsx': 2679054696
			},
			'It may be clearer to see why it is nested with an array.'
		),
		_react2.default.createElement(
			'a',
			{ className: 'jsbin-embed code-embed',
				href: 'https://jsbin.com/jupikap/1/edit?js,console&height=500px', 'data-jsx': 2679054696
			},
			'Returning an array from map'
		),
		_react2.default.createElement(
			'p',
			{
				'data-jsx': 2679054696
			},
			'You could subscribe to the inner observable manually but it is no way to live'
		),
		_react2.default.createElement(
			'a',
			{ className: 'jsbin-embed code-embed',
				href: 'https://jsbin.com/vunezeg/edit?js,console&height=500px', 'data-jsx': 2679054696
			},
			'Could subscribe to inner observable'
		),
		_react2.default.createElement(
			'p',
			{
				'data-jsx': 2679054696
			},
			'Merge all emits values from inner observables'
		),
		_react2.default.createElement(
			'a',
			{ className: 'jsbin-embed code-embed',
				href: 'https://jsbin.com/goxeqev/edit?js,console&height=500px', 'data-jsx': 2679054696
			},
			'Merge all emits values from inner observables'
		),
		_react2.default.createElement(
			'p',
			{
				'data-jsx': 2679054696
			},
			'It is common to map and merge all so we have the mergeMap operator to do both at once'
		),
		_react2.default.createElement(
			'a',
			{ className: 'jsbin-embed code-embed',
				href: 'https://jsbin.com/qaviluj/2/edit?js,console', 'data-jsx': 2679054696
			},
			'Merge map flattens and maps'
		),
		_react2.default.createElement(
			'p',
			{
				'data-jsx': 2679054696
			},
			'Switchmap is even more useful, it unsubscribes from all but the latest observable. We use it in the search example where we cancel xhr requests for all but the last query. This solves race conditions and produces less work over the network and on the server.'
		),
		_react2.default.createElement(
			'a',
			{ className: 'jsbin-embed code-embed',
				href: 'https://jsbin.com/buzawuq/4/edit?js,console,output=500px', 'data-jsx': 2679054696
			},
			'Switchmap unsubscribes from all but latest observable'
		),
		_react2.default.createElement(
			'a',
			{ href: 'https://www.learnrxjs.io/operators/transformation/switchmap.html', 'data-jsx': 2679054696
			},
			'Switch map docs'
		),
		_react2.default.createElement(
			'ol',
			{
				'data-jsx': 2679054696
			},
			_react2.default.createElement(
				'li',
				{
					'data-jsx': 2679054696
				},
				'Declarative cancellation such as take'
			),
			_react2.default.createElement(
				'li',
				{
					'data-jsx': 2679054696
				},
				'Drag and Drop, point out'
			),
			_react2.default.createElement(
				'li',
				{
					'data-jsx': 2679054696
				},
				'Autocomplete (heaps of operators).'
			),
			_react2.default.createElement(
				'li',
				{
					'data-jsx': 2679054696
				},
				'Talk about subjects'
			)
		),
		_react2.default.createElement(_style2.default, {
			styleId: 2679054696,
			css: '.tldr[data-jsx="2679054696"] {margin: 1em 0;font-size: 1.2em;display: block;font-weight: bold;}'
		})
	);
};