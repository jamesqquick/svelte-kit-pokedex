<script>
	let id = 'checkbox';
	let checked = false;
	export {id, checked};
</script>

<label>
	<input
		type="checkbox"
		{id}
		on:change
		bind:checked
	/>
	<slot />
</label>