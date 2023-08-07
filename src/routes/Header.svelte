<script>
	import text from '$lib/texts/texts.json';
</script>

<header>
	<h1>{@html text.title}</h1>

	<div class="links">
		<ul>
			{#each text.links as link (link.title)}
				<li>
					<a href={link.url}>{link.title}</a>
				</li>
			{/each}
		</ul>
	</div>
</header>

<style>
	header {
		top: 5%;
		position: fixed;
		left: 5%;
		width: 90%;
		display: flex;
		justify-content: space-between;
	}
	header h1 {
		margin: 0;
	}
	.links {
		display: flex;
		justify-content: flex-end;
		text-align: end;
	}
	.links ul {
		line-height: 1.5em;
		list-style: none;
		display: flex;
		flex-direction: column;
	}
	a {
		color: black;
	}
</style>
