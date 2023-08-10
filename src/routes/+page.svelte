<script>
	import text from '$lib/texts/texts.json';
</script>

<svelte:head>
	<title>Paris 2024 Thesis</title>

	<meta
		name="description"
		content="Presentation of a group project for a Swidish university. A Multi frame analysis of the Paris 2024 Olympic Games bid."
	/>
	<meta name="keywords" content="Paris 2024, Olympic Games, Multi frame analysis, Thesis" />
	<meta name="author" content="Pol Gubau Amores" />
	<meta name="robots" content="index, follow" />

	<meta property="og:title" content="Paris 2024 Thesis" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://paris2024.vercel.app" />

	<meta property="og:image" content="https://paris2024.vercel.app/images/1.png" />
	<meta property="og:image:alt" content="Paris 2024 thesis book cover" />
	<meta property="og:image:width" content="794" />
	<meta property="og:image:height" content="929" />

	<meta
		property="og:description"
		content="Presentation of a group project for a Swidish university. A Multi frame analysis of the Paris 2024 Olympic Games bid."
	/>

	<meta property="og:site_name" content="Paris 2024 Thesis" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:locale:alternate" content="es_ES" />
	<meta property="og:locale:alternate" content="ca_ES" />
	<meta property="og:locale:alternate" content="fr_FR" />

	<meta property="og:see_also" content="https://polgubau.com" />
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
		<p class="description">{@html text.description}</p>
		<a class="download" href="/files/Paris2024-MultiFrameAnalysis.pdf" download>Download</a>
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
		font-size: 2.5rem;
		font-weight: 700;
		margin: 0;
		line-height: 1.2em;
		text-align: center;

		margin-bottom: 15px;
		max-width: 80vw;
	}
	.description {
		font-size: 1.3rem;
		font-weight: 400;
		margin: 0;
		width: 500px;
		max-width: 80vw;
		text-align: center;
	}

	.download {
		text-decoration: none;
		margin-top: 30px;
		padding: 10px 20px;
		border-radius: 5px;
		font-size: 2em;
		border: none;
		background-color: transparent;
		color: #000;
		border: 3px solid #000;
		font-weight: 400;
		cursor: pointer;
	}
</style>
