import React from 'react';
import Page from '../components/Page';
import Link from 'next/link';

export default () => (
	<Page>
		<span className="tldr">Working with nested observables</span>	

		<p>
			It is common to work with nested observables with RX because we often map items into observerables.
			For example we define drag moves as mouse downs mapped into mouse moves until mouse up. Mapping to an observable (mouse moves) creates a nested observable. 
		</p>

		<a className="jsbin-embed code-embed" 
			href="https://jsbin.com/luyazes/1/edit?js,console&height=500px">Higher order observables problem</a>

		<p>It may be clearer to see why it is nested with an array.</p>

		<a className="jsbin-embed code-embed" 
			href="https://jsbin.com/jupikap/1/edit?js,console&height=500px">Returning an array from map</a>

		<p>You could subscribe to the inner observable manually but it is no way to live</p>

		<a className="jsbin-embed code-embed" 
			href="https://jsbin.com/vunezeg/edit?js,console&height=500px">Could subscribe to inner observable</a>

		<p>Merge all emits values from inner observables</p>

		<a className="jsbin-embed code-embed" 
			href="https://jsbin.com/goxeqev/edit?js,console&height=500px">Merge all emits values from inner observables</a>

		<p>It is common to map and merge all so we have the mergeMap operator to do both at once</p>
		
		<a className="jsbin-embed code-embed" 
			href="https://jsbin.com/qaviluj/2/edit?js,console">Merge map flattens and maps</a>

		<p>
			Switchmap is even more useful, it unsubscribes from all but the latest observable.
			We use it in the search example where we cancel xhr requests for all but the last query.
			This solves race conditions and produces less work over the network and on the server.
		</p>

		<a className="jsbin-embed code-embed" 
			href="https://jsbin.com/buzawuq/4/edit?js,console,output=500px">Switchmap unsubscribes from all but latest observable</a>
		
		<a href="https://www.learnrxjs.io/operators/transformation/switchmap.html">Switch map docs</a>

		<ol>
			<li>Declarative cancellation such as take</li>
			<li>Drag and Drop, point out</li>
			<li>Autocomplete (heaps of operators).</li>
			<li>Talk about subjects</li>
		</ol>
		
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


