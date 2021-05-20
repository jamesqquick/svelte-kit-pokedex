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
<div class="container">

    <img class="card-image" src={pokeman.sprites['front_default']} 
    alt={pokeman.name}
    />
    <h1 class="card-title">{pokeman.name}</h1>
    <p><small>Type: {type} | Height:</small> {pokeman.height} 
        | Weight: {pokeman.weight}
    </p>
</div>