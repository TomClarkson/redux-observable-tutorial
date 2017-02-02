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
				'data-jsx': 2341678653
			},
			'Why use RXJS.'
		),
		_react2.default.createElement(
			'div',
			{ className: 'image-container', 'data-jsx': 2341678653
			},
			_react2.default.createElement('img', { style: { border: '5px solid #000' }, src: '/static/imp.png', 'data-jsx': 2341678653
			}),
			_react2.default.createElement('img', { style: { maxWidth: '50%' }, src: 'https://cdn-images-1.medium.com/max/800/1*AM83LP9sGGjIul3c5hIsWg.png', 'data-jsx': 2341678653
			})
		),
		_react2.default.createElement('img', { src: 'https://cloud.githubusercontent.com/assets/2054503/22492651/bc356e58-e88f-11e6-9c0a-fcc6b9286bc9.png', alt: 'declarative vs imperative', 'data-jsx': 2341678653
		}),
		_react2.default.createElement('img', { src: 'https://cloud.githubusercontent.com/assets/2054503/22492650/ba674de4-e88f-11e6-83ea-631b2b96883d.png', alt: 'declarative html', 'data-jsx': 2341678653
		}),
		_react2.default.createElement(
			'span',
			{ className: 'tldr', 'data-jsx': 2341678653
			},
			'TLDR: Use RXJS because it provides a declarative way to transform async data into your desired result.'
		),
		_react2.default.createElement(
			'p',
			{
				'data-jsx': 2341678653
			},
			'Let\'s see the difference between imperative and declarative programming by using a function that takes an array of emails and returns an array in lowercase of emails that end with a specific domain.'
		),
		_react2.default.createElement(
			'a',
			{ className: 'jsbin-embed code-embed',
				href: 'https://jsbin.com/berupal/6/edit?js,console&height=500px', 'data-jsx': 2341678653
			},
			'Imperative vs Declarative'
		),
		_react2.default.createElement(
			'p',
			{
				'data-jsx': 2341678653
			},
			'An array is a collection object that holds synchronous data. It provides methods like map, filter, and reduce to transform the data.'
		),
		_react2.default.createElement(
			'p',
			{
				'data-jsx': 2341678653
			},
			'An observable is a collection object that holds data that comes in over time (i.e., asynchronous). See below, how an observable object ',
			_react2.default.createElement(
				'strong',
				{
					'data-jsx': 2341678653
				},
				'liberates us'
			),
			' from imperative coding with asynchronous data in the same way an array does for synchronous data.'
		),
		_react2.default.createElement(
			'span',
			{ style: { fontSize: '1em' }, className: 'tldr', 'data-jsx': 2341678653
			},
			'Imperative'
		),
		_react2.default.createElement('img', { style: { maxWidth: '80%' }, alt: 'imperativeasync', src: 'https://cloud.githubusercontent.com/assets/2054503/22042833/b01aa04e-dd71-11e6-823e-38a0c5f744a4.png', 'data-jsx': 2341678653
		}),
		_react2.default.createElement(
			'span',
			{ style: { fontSize: '1em' }, className: 'tldr', 'data-jsx': 2341678653
			},
			'Declarative'
		),
		_react2.default.createElement('img', { style: { maxWidth: '80%' }, alt: 'declarativeasync', src: 'https://cloud.githubusercontent.com/assets/2054503/22042841/b95bf108-dd71-11e6-9c77-8c707858c02a.png', 'data-jsx': 2341678653
		}),
		_react2.default.createElement('img', { src: 'https://cloud.githubusercontent.com/assets/2054503/22492038/73956642-e88c-11e6-87bc-5be0b031ddff.png', alt: 'example from rx site', 'data-jsx': 2341678653
		}),
		_react2.default.createElement(
			'span',
			{ className: 'tldr', 'data-jsx': 2341678653
			},
			'How does it work?'
		),
		_react2.default.createElement(
			'p',
			{
				'data-jsx': 2341678653
			},
			'I believe the best way to understand how a library works is to re-implement it. In the next section we will ',
			_react2.default.createElement(
				_link2.default,
				{ href: '/how' },
				'understand how RXJS works'
			),
			'. First, look below and see how an array collection works.'
		),
		_react2.default.createElement(
			'a',
			{ className: 'jsbin-embed code-embed',
				href: 'https://jsbin.com/luzupev/edit?js,console,output&height=500px', 'data-jsx': 2341678653
			},
			'How array map works'
		),
		_react2.default.createElement(_style2.default, {
			styleId: 2341678653,
			css: '.image-container[data-jsx="2341678653"] {display:-webkit-flex; display:flex;-webkit-flex-wrap: wrap;-moz-flex-wrap: wrap;flex-wrap: wrap;margin-bottom: 2em;}.tldr[data-jsx="2341678653"] {margin: 1em 0;font-size: 1.2em;display: block;font-weight: bold;}'
		})
	);
};