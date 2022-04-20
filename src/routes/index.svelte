<script context="module">
    export async function load({ fetch }) {
        const res = await fetch(
            `https://api.sportsdata.io/v3/nfl/scores/json/Schedules/2019?key=82091bd8383e46caafe746f559bc5c0c`
        );
        const data = await res.json();
        console.log(data);
        if (res.ok) {
            return {
                props: { game: data}
            };
        }
    }
</script>

<script>
    import Game from '../lib/components/Game.svelte'
    export let game;
</script>

<svelte:head>
	<title>NFL</title>
</svelte:head>

<section>
    <Game {game}/>
</section>
