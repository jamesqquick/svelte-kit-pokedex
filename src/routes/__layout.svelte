<script>
import Nav from "../components/nav.svelte";

</script>
<div class="container">
    <Nav/>
    <slot>
    </slot>
</div>
<style>
:global(body) {
    font-family: sans-serif;
}
:global(h1) {
    text-transform: uppercase;
    text-align: center;
    font-size: 54px;
}
:global(.container) {
    padding: 40px;
    margin: 0 auto;
}

:global(a){
    text-decoration: none;
    color: black;
}
</style>