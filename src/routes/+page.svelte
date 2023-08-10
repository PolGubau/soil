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
			<main class="content">
				<img src={`${page.img}`} alt={page.imageCaption} />
				<h2 class="title">{page.title}</h2>
				<p class="description">{@html page.content}</p>
			</main>
		</article>
	{/each}
	<article>
		<h2>Thanks</h2>
		<p class="descriptionIfMobile">{text.description}</p>
	</article>
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
		line-height: 1.7em;
	}
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	section article img {
		max-height: 60vh;
		/* height: 100%; */
		object-fit: cover;
		max-width: 80vw;
		margin-bottom: 30px;
	}
	.title {
		font-size: 2rem;
		font-weight: 700;
		margin: 0;
		margin-bottom: 15px;
	}
	.description {
		font-size: 1.1rem;
		font-weight: 400;
		margin: 0;
		width: 500px;
		max-width: 80vw;
		text-align: center;
	}
	.descriptionIfMobile {
		width: 500px;
		max-width: 80vw;
		text-align: center;
		display: none;
	}
	@media screen and (max-width: 768px) {
		.descriptionIfMobile {
			display: flex;
		}
	}
</style>
