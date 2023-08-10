<script>
	import text from '$lib/texts/texts.json';
	import SiMaildotru from 'svelte-icons-pack/si/SiMaildotru';
	import SiTwitter from 'svelte-icons-pack/si/SiTwitter';
	import Icon from 'svelte-icons-pack/Icon.svelte';
</script>

<header>
	<h1>{@html text.title}</h1>

	<div class="links">
		<ul>
			{#each text.links as link (link.title)}
				<li>
					<a href={link.url}>
						<span class="icon"
							>{#if link.type === 'twitter'}
								<Icon src={SiTwitter} />
							{:else if link.type === 'email'}
								<Icon src={SiMaildotru} />
							{/if}
						</span>
						<span class="name">{link.title}</span></a
					>
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
		align-items: flex-start;
		margin: 0;
	}
	ul {
		margin: 0;
		padding: 0;
	}
	header h1 {
		margin: 20px;
		font-size: 3.5em;
		line-height: 1.4em;
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

	.icon {
		display: flex;
		align-items: center;
		aspect-ratio: 1;
		height: 20px;
	}
	a {
		color: black;
		display: flex;
		align-items: center;
		gap: 2px;
	}
	@media (max-width: 768px) {
		header {
			flex-direction: column;
		}
		ul {
			position: fixed;
			top: 15px;
			right: 15px;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 10px;
		}

		.links {
			text-align: center;
		}
		.name {
			display: none;
		}
	}
</style>
