<script>
	import { page } from '$app/stores';

	import Header from './Header.svelte';
	import text from '$lib/texts/texts.json';
	import './styles.css';
	import { onMount } from 'svelte';

	let currentPage = { url: { pathname: '' } };

	onMount(() => {
		const unsubscribe = page.subscribe((value) => {
			currentPage = value;
		});

		return unsubscribe;
	});
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<ol>
			{#each text.pages as page (page.id)}
				<li>
					<a href={`${currentPage.url.pathname}#${page.id}`}> {page.title}</a>
				</li>
			{/each}
		</ol>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		position: fixed;
		bottom: 5%;
		width: 90%;
		left: 5%;
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
		text-align: end;
	}
	footer ol {
		line-height: 1.5em;
		list-style: none;
		display: flex;
		flex-direction: column;
	}

	@media screen and (max-width: 768px) {
		footer {
			flex-direction: column;
			align-items: flex-start;
			text-align: start;
		}
		footer ol {
			margin: 0;
		}
	}

	footer a {
		text-decoration: none;
		color: black;
	}
</style>
