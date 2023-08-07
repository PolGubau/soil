<script>
	import text from '$lib/texts/texts.json';
</script>

<svelte:head>
	<title>Soil</title>
	<meta name="description" content="Soil Thesis Presentation" />
</svelte:head>

<section>
	{#each text.pages as page (page.id)}
		<article style={`background-color: ${page.bgColor};`} id={page.id}>
			<img src={`${page.img}`} alt={page.imageCaption} />
			<h2>{page.title}</h2>
			<p>{@html page.content}</p>
		</article>
	{/each}
	<article>Last</article>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	section article {
		scroll-snap-align: start;
		width: 100%;
		height: 100vh;
		margin: 0 auto;
		padding: 1rem;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	section article img {
		max-height: 60vh;
		height: 100%;
		object-fit: cover;
	}
</style>
