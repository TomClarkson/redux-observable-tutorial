import React from 'react';
import Page from '../components/Page';
import Link from 'next/link';
import Youtube from 'react-youtube';

export default () => (
	<Page>
		<h1>How RXJS works.</h1>

		<h2 style={{marginBottom: 10}}>RXJS gives you the ability to connect a consumer to a asynchronous producer of data.</h2>

		<p>The consumer gives an observer to the producer which is an object with next, error and complete methods. The consumer can unsubscribe from future data at any time.</p>

		<a className="jsbin-embed code-embed" 
			href="https://jsbin.com/xabeti/3/edit?js,console&height=500px">Connecting observable</a>

		<img src="https://cloud.githubusercontent.com/assets/2054503/22492006/37bf4ad4-e88c-11e6-9133-605e3faf2e1d.png" alt="pipeline" />

		<p>The power from Observable comes from the fact it has collection methods like map, filter, merge etc. Which allows you to create a pipeline of transformations to declaratively get the result you want.</p>

		<p>The array collection and observable collection are very similar. Take map on the array collection for example, map applies an expression to each item in the array and returns a new array.</p>
		<p>Map in the observable collection, creates a new observable which takes items and forwards the item with the transformation applied.</p>

		<a className="jsbin-embed code-embed" 
			href="https://jsbin.com/xafoter/2/edit?js,console&height=700px">Observable type</a>

		<img src="https://cloud.githubusercontent.com/assets/2054503/22492759/6a5ed910-e890-11e6-8b57-4cd6767a3229.jpg" alt="observers up data down" />

		<a className="jsbin-embed code-embed" 
			href="https://jsbin.com/liwuqez/1/edit?js,console&height=1100px">Safe observer</a>

		<img src="https://cloud.githubusercontent.com/assets/2054503/22492011/44f0a090-e88c-11e6-941d-3e94fc2afc9a.jpg" />

		<h3>Learn more about how to reimplement Observables</h3>

		<ul>
			<li>
				<a href="http://www.anasfirdousi.com/observables-with-rxjs-i-dont-get-it-series-part-1.html">Shows code for safe observers</a>
			</li>
			<li>
				<a href="https://netbasal.com/javascript-observables-under-the-hood-2423f760584#.tib0dow00">Shows code for mergeMap and promises</a>		
			</li>
			<li>
				<a href="http://nick.balestra.ch/2016/Understanding-the-observable-type/">Shows code for operators</a>		
			</li>
		</ul>
		
		<img style={{height: 400}} src="/static/observableway.png" />

		<h2>Operators</h2>

		<p>Rx marbles are great for learning what operators do. Note you can also use Rx marbles for testing.</p>
		<a href="http://rxmarbles.com/">RX Marbles</a>

		<style jsx>{`
			.tldr {
				margin: 1em 0;
				font-size: 1.2em;
				display: block;
				font-weight: bold;
			}
		`}</style>
	</Page>
)

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