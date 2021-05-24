<script>
    import { fade } from 'svelte/transition';
    export let pokeman;
    
</script>
<li class="card" transition:fade>
    <a href={`/pokemon/${pokeman.id}`}>
        <img class="card-image" src={pokeman.image} alt={pokeman.name}/>
        <h2 class="card-title">{pokeman.id}. {pokeman.name}</h2>
    </a>
</li>

<style>
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