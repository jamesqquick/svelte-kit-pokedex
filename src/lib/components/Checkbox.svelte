
<script>
    let id = 'checkbox';
    let checked = false;

    export {id, checked};
</script>

<label>
    <imput 
        type="checkbox" 
        {id} 
        on:change 
        bind:checked 
    />
    <slot />
</label>