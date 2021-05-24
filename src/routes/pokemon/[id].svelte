<script context="module">
    import { getPokemonById } from "../../pokestore";
    export async function load(ctx) {
        let id = ctx.page.params.id;
        const pokeman = await getPokemonById(id);
        return { props: { pokeman }}
    }
</script>
<script>
    export let pokeman;
    const type = pokeman.types[0].type.name;
</script>
<svelte:head>
	<title>Pokedex - {pokeman.name}</title>
</svelte:head>

<div class="details-container">

    <h1>{pokeman.name}</h1>
    <p>Type: <strong>{type}</strong> | Height: <strong>{pokeman.height}</strong>
        | Weight: <strong>{pokeman.weight}</strong>
    </p>
    <img class="card-image" src={pokeman.sprites['front_default']} 
    alt={pokeman.name}
    />
</div>

<style>
    .details-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>