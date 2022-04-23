import { writable } from 'svelte/store';

export const nfl = writable([]);

const fetchNfl = async () => {
	const url = `https://api.sportsdata.io/v3/nfl/odds/json/LiveGameOddsByWeek/2020/2?key=82091bd8383e46caafe746f559bc5c0c`;
	const res = await fetch(url);
    const data = await res.json();
    const loadedData = data.map((data, index) => {
        return {
            isSelected: false,
            id: index + 1,
            away: data.AwayTeamName,
            home: data.HomeTeamName,
            
        };
    });
    nfl.set(loadedData);
};
fetchNfl();