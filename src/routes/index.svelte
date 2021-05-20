<script>
import Pokeman from "../components/pokeman.svelte";

import {pokemon} from "../pokestore";
</script>
<div class="container">

    <h1>SvelteKit Pokedex</h1>
    <ul id="pokedex">
        
        {#each $pokemon as pokeman}
        <li class="card">
            <a href={`/pokemon/${pokeman.id}`}>
                <Pokeman pokeman={pokeman}/>
            </a>
        </li>
        {/each}
    </ul>
</div>
    
<style>
#pokedex {
    padding-inline-start: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 20px;
}

.card {
    list-style: none;
    padding: 40px;
    background-color: #f4f4f4;
    color: #222;
    text-align: center;
    border-radius:5%;
}

.card:hover {
    animation: bounce 0.5s linear;
    cursor: pointer;
}
.card-title {
    text-transform: uppercase;
    font-size: 32px;
    font-weight: normal;
    margin-bottom: 0;
}

.card-subtitle {
    font-weight: lighter;
    color: #666;
    margin-top: 5px;
}

.card-image {
    height: 120px;
}

@keyframes bounce {
    20% {
        transform: translateY(-6px);
    }
    40% {
        transform: translateY(0px);
    }
    60% {
        transform: translateY(-2px);
    }
    80% {
        transform: translateY(-0px);
    }
}




</style>
