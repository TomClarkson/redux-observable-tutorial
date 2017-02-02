import React from 'react';
import Page from '../components/Page';
import Link from 'next/link';

export default () => (
	<Page>
		<h1>Welcome, this guide will get you upto speed with all things RXJS.</h1>

		<div id="tutorial-sections">
			<div className="section">
				<strong>1.</strong> 
				<Link href="/why">Why use RXJS</Link>
			</div>

			<div className="section">
				<strong>2.</strong> 
				<Link href="/how">How it works under the hood</Link>
			</div>

			<div className="section">
				<strong>3.</strong> 
				<Link href="/examples">Examples</Link>
			</div>
			<div className="section">
				<strong>4.</strong> 
				<Link href="https://github.com/Jayco-Design/Fergus/wiki/How-Redux-Observable-works">Redux observable</Link>
			</div>
		</div>
		<style jsx>{`
			a {
				background: pink;
			}

			#tutorial-sections {
				display: flex;
				flex-direction: column;
			}

			#tutorial-sections .section {
				margin-bottom: 20px;
				font-size: 1.5em;
			}

			#tutorial-sections strong {
				font-weight: bold;
				margin-right: 10px;
			}
		`}</style>
	</Page>
)