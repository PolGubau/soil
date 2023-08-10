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
</style>
