<script>
    import {nfl} from "../stores/nflstore";
    import {crossfade, fade} from 'svelte/transition';
	import {flip} from 'svelte/animate';
	import Card from '../lib/components/card.svelte';
	import Checkbox from '../lib/components/checkbox.svelte';

	const [send, receive] = crossfade({fallback: fade});

</script>

<Card>
	<h2 slot="title">Games</h2>
	<ul slot="content">
		{#each $nfl.filter(game => !game.isSelected) as game (game.id)}
			<li
				animate:flip
				in:receive={{key: game.id}}
				out:send={{key: game.id}}
			>
				<Checkbox bind:checked={game.isSelected} id={game.id}>
					{game.away} @ {game.home}
				</Checkbox>
			</li>
		{/each}
	</ul>
</Card>

<Card>
	<h2 slot="title">Selected</h2>
	<ul slot="content">
		{#each $nfl.filter(game => game.isSelected) as selected (selected.id)}
			<li
				animate:flip
				in:receive={{key: selected.id}}
				out:send={{key: selected.id}}
			>
				<Checkbox bind:checked={selected.isSelected} id={selected.id}>
					{selected.away} @ {selected.away}
				</Checkbox>
			</li>
		{/each}
	</ul>
</Card>

