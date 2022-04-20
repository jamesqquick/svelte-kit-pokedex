<script>
    export let game;
    import GameCard from "./GameCard.svelte";
</script>


<h3>Games</h3>
<div class="upcoming-games">
    <div class="games" />
    {#each game as g}
        <GameCard {g} />
    {/each}
</div>
