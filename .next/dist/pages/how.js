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

var _reactYoutube = require('react-youtube');

var _reactYoutube2 = _interopRequireDefault(_reactYoutube);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	return _react2.default.createElement(
		_Page2.default,
		null,
		_react2.default.createElement(
			'h1',
			{
				'data-jsx': 2679054696
			},
			'How RXJS works.'
		),
		_react2.default.createElement(
			'h2',
			{ style: { marginBottom: 10 }, 'data-jsx': 2679054696
			},
			'RXJS gives you the ability to connect a consumer to a asynchronous producer of data.'
		),
		_react2.default.createElement(
			'p',
			{
				'data-jsx': 2679054696
			},
			'The consumer gives an observer to the producer which is an object with next, error and complete methods. The consumer can unsubscribe from future data at any time.'
		),
		_react2.default.createElement(
			'a',
			{ className: 'jsbin-embed code-embed',
				href: 'https://jsbin.com/xabeti/3/edit?js,console&height=500px', 'data-jsx': 2679054696
			},
			'Connecting observable'
		),
		_react2.default.createElement('img', { src: 'https://cloud.githubusercontent.com/assets/2054503/22492006/37bf4ad4-e88c-11e6-9133-605e3faf2e1d.png', alt: 'pipeline', 'data-jsx': 2679054696
		}),
		_react2.default.createElement(
			'p',
			{
				'data-jsx': 2679054696
			},
			'The power from Observable comes from the fact it has collection methods like map, filter, merge etc. Which allows you to create a pipeline of transformations to declaratively get the result you want.'
		),
		_react2.default.createElement(
			'p',
			{
				'data-jsx': 2679054696
			},
			'The array collection and observable collection are very similar. Take map on the array collection for example, map applies an expression to each item in the array and returns a new array.'
		),
		_react2.default.createElement(
			'p',
			{
				'data-jsx': 2679054696
			},
			'Map in the observable collection, creates a new observable which takes items and forwards the item with the transformation applied.'
		),
		_react2.default.createElement(
			'a',
			{ className: 'jsbin-embed code-embed',
				href: 'https://jsbin.com/xafoter/2/edit?js,console&height=700px', 'data-jsx': 2679054696
			},
			'Observable type'
		),
		_react2.default.createElement('img', { src: 'https://cloud.githubusercontent.com/assets/2054503/22492759/6a5ed910-e890-11e6-8b57-4cd6767a3229.jpg', alt: 'observers up data down', 'data-jsx': 2679054696
		}),
		_react2.default.createElement(
			'a',
			{ className: 'jsbin-embed code-embed',
				href: 'https://jsbin.com/liwuqez/1/edit?js,console&height=1100px', 'data-jsx': 2679054696
			},
			'Safe observer'
		),
		_react2.default.createElement('img', { src: 'https://cloud.githubusercontent.com/assets/2054503/22492011/44f0a090-e88c-11e6-941d-3e94fc2afc9a.jpg', 'data-jsx': 2679054696
		}),
		_react2.default.createElement(
			'h3',
			{
				'data-jsx': 2679054696
			},
			'Learn more about how to reimplement Observables'
		),
		_react2.default.createElement(
			'ul',
			{
				'data-jsx': 2679054696
			},
			_react2.default.createElement(
				'li',
				{
					'data-jsx': 2679054696
				},
				_react2.default.createElement(
					'a',
					{ href: 'http://www.anasfirdousi.com/observables-with-rxjs-i-dont-get-it-series-part-1.html', 'data-jsx': 2679054696
					},
					'Shows code for safe observers'
				)
			),
			_react2.default.createElement(
				'li',
				{
					'data-jsx': 2679054696
				},
				_react2.default.createElement(
					'a',
					{ href: 'https://netbasal.com/javascript-observables-under-the-hood-2423f760584#.tib0dow00', 'data-jsx': 2679054696
					},
					'Shows code for mergeMap and promises'
				)
			),
			_react2.default.createElement(
				'li',
				{
					'data-jsx': 2679054696
				},
				_react2.default.createElement(
					'a',
					{ href: 'http://nick.balestra.ch/2016/Understanding-the-observable-type/', 'data-jsx': 2679054696
					},
					'Shows code for operators'
				)
			)
		),
		_react2.default.createElement('img', { style: { height: 400 }, src: '/static/observableway.png', 'data-jsx': 2679054696
		}),
		_react2.default.createElement(
			'h2',
			{
				'data-jsx': 2679054696
			},
			'Operators'
		),
		_react2.default.createElement(
			'p',
			{
				'data-jsx': 2679054696
			},
			'Rx marbles are great for learning what operators do. Note you can also use Rx marbles for testing.'
		),
		_react2.default.createElement(
			'a',
			{ href: 'http://rxmarbles.com/', 'data-jsx': 2679054696
			},
			'RX Marbles'
		),
		_react2.default.createElement(_style2.default, {
			styleId: 2679054696,
			css: '.tldr[data-jsx="2679054696"] {margin: 1em 0;font-size: 1.2em;display: block;font-weight: bold;}'
		})
	);
};

// <span className="tldr">Observables as functions</span>

// <p>
// 	Observables only emit items when you are subscribed to them. In this example we show that observables are practically just functions 
// 	that emit data to an observer when they are invoked.
// </p>

// <a className="jsbin-embed code-embed" 
// 	href="https://jsbin.com/wisike/2/edit?js,console&height=500px">Observables as functions</a>

// <Youtube videoId="uQ1zhJHclvs" />

// <p>
// 	In this 20 minute talk you will learn RXJS by recreating it. 
// 	Andre starts by defining an observable as a function then refactoring it to a collection object and showing how map and other operators work.
// </p>

// <p>setting up a chain of observation, connecting observables to producers</p>

// <a href="https://jsbin.com/dixejebece/edit?js,console,output">Proper Observerable</a>

// <span className="tldr">Thinking reactively</span>

// <Youtube videoId="3LKMwkuK0ZE" />

// <p>
// 	Ben is the author of the latest version of RXJS and redux observable. 
// 	In this talk he teaches you how observables work, common use cases and operators, common pitfalls and how to handle errors.
// </p>