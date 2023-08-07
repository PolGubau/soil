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
		<p>{@html text.description}</p>
		<ol>
			{#each text.pages as page (page.id)}
				<li>
					<a href={`${currentPage.url.pathname}#${page.id}`}>{page.title}</a>
				</li>
			{/each}
		</ol>
	</footer>
</div>

<style>
	ol {
		line-height: 1.5em;
		list-style: none;
		display: flex;
		flex-direction: column;
	}
	a {
		color: black;
	}
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
		justify-content: space-between;
		align-items: center;
	}

	footer a {
		font-weight: bold;
	}
	footer p {
		max-width: 30vw;
	}
</style>
