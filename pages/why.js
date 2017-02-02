import React from 'react';
import Page from '../components/Page';
import Link from 'next/link';

export default () => (
	<Page>
		<h1>Why use RXJS.</h1>

		<div className="image-container">
			<img style={{border: '5px solid #000'}} src="/static/imp.png" />
			<img style={{maxWidth: '50%'}} src="https://cdn-images-1.medium.com/max/800/1*AM83LP9sGGjIul3c5hIsWg.png" />	
		</div>

		<img src="https://cloud.githubusercontent.com/assets/2054503/22492651/bc356e58-e88f-11e6-9c0a-fcc6b9286bc9.png" alt="declarative vs imperative" />

		<img src="https://cloud.githubusercontent.com/assets/2054503/22492650/ba674de4-e88f-11e6-83ea-631b2b96883d.png" alt="declarative html" />

		<span className="tldr">TLDR: Use RXJS because it provides a declarative way to transform async data into your desired result.</span>

		<p>
			Let's see the difference between imperative and declarative programming by using a function that takes an array of emails and returns an array in lowercase of
			emails that end with a specific domain.
		</p>

		<a className="jsbin-embed code-embed" 
			href="https://jsbin.com/berupal/6/edit?js,console&height=500px">Imperative vs Declarative</a>

		<p>An array is a collection object that holds synchronous data. It provides methods like map, filter, and reduce to transform the data.</p>
		<p>An observable is a collection object that holds data that comes in over time (i.e., asynchronous). 
		See below, how an observable object <strong>liberates us</strong> from imperative coding with asynchronous data in the same way an array does for synchronous data.
		</p>

		<span style={{fontSize: '1em'}} className="tldr">Imperative</span>
		<img style={{maxWidth: '80%'}} alt="imperativeasync" src="https://cloud.githubusercontent.com/assets/2054503/22042833/b01aa04e-dd71-11e6-823e-38a0c5f744a4.png" />

		<span style={{fontSize: '1em'}} className="tldr">Declarative</span>
		<img style={{maxWidth: '80%'}} alt="declarativeasync" src="https://cloud.githubusercontent.com/assets/2054503/22042841/b95bf108-dd71-11e6-9c77-8c707858c02a.png" />

		<img src="https://cloud.githubusercontent.com/assets/2054503/22492038/73956642-e88c-11e6-87bc-5be0b031ddff.png" alt="example from rx site" />

		<span className="tldr">How does it work?</span>
		<p>I believe the best way to understand how a library works is to re-implement it. 
			In the next section we will <Link href="/how">understand how RXJS works</Link>. First, look below and see how an array collection works.</p>

		<a className="jsbin-embed code-embed" 
			href="https://jsbin.com/luzupev/edit?js,console,output&height=500px">How array map works</a>
	

		<style jsx>{`
			.image-container {
				display: flex;
				flex-wrap: wrap;
				margin-bottom: 2em;
			}

			.tldr {
				margin: 1em 0;
				font-size: 1.2em;
				display: block;
				font-weight: bold;
			}
		`}</style>
	</Page>
)