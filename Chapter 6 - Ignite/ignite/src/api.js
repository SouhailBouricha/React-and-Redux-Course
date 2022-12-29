const base_api = "https://api.rawg.io/api/";

const getCurrentMonth = () =>{
    const month = new Date().getMonth() + 1;
    return month > 9 ? month : `0${month}`; 
}
const getCurrentDay = () =>{
    const day = new Date().getDate();
    return day > 9 ? day : `0${day}`; 
}
const getCurrentYear = new Date().getFullYear();

/* current day/month/year */
const currntYear = getCurrentYear;
const currntMonth = getCurrentMonth();
const currntDay = getCurrentDay();
const currntDate = `${currntYear}-${currntMonth}-${currntDay}`;
const nextYear = `${currntYear + 1}-${currntMonth}-${currntDay}`;
const lastYear = `${currntYear - 1}-${currntMonth}-${currntDay}`;

const popular_games = `games?dates=${lastYear},${currntDate}&ordering=-rating&page_size=10&key=53bc2ad7bf46402cae35958fe9a9cd92`;

export const populatGamesURL = () => `${base_api}${popular_games}`;