<script>
import PokemanCard from "../components/pokemanCard.svelte";
import {pokemon, fetchPokemon} from "../pokestore";

let searchTerm = "";
let filteredPokemon = [];

$: {
    if(searchTerm){
        filteredPokemon = $pokemon.filter( pokeman => pokeman.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    else {
        filteredPokemon = [...$pokemon];
    }
}

fetchPokemon();
</script>
<svelte:head>
	<title>Pokedex</title>
</svelte:head>

    <h1>SvelteKit Pokedex</h1>
    <input class="input" bind:value={searchTerm} placeholder="Search Pokemon">
    <ul id="pokedex">
        
        {#each filteredPokemon as pokeman}
                <PokemanCard pokeman={pokeman}/>
        {/each}
    </ul>
    
<style>

#pokedex {
    padding-inline-start: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 20px;
}

.input {
    width: 200px;
    border: 2px solid #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    font-size: 16px;
}
</style>
