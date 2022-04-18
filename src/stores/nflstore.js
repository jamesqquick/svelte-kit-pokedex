import { writable } from 'svelte/store';

export const nfl = writable([]);

console.log(nfl)
const fetchNfl = async () => {
	const url = `https://api.sportsdata.io/v3/nfl/scores/json/Schedules/2019?key=82091bd8383e46caafe746f559bc5c0c`;
	const res = await fetch(url);
	const data = await res.json();
	return data
};
fetchNfl();

