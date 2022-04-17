import { writable } from 'svelte/store';

export const nfl = writable([]);

const fetchNfl = async () => {
	const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
	const res = await fetch(url);
	const data = await res.json();
	const loadedNfl = data.results.map((data, index) => {
		return {
			name: data.name,
			id: index + 1,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1
				}.png`
		};
	});
	nfl.set(loadedNfl);
};
fetchNfl();
