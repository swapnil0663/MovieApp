export default function movieThung(){
    return async function () {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1');
        const data = await response.json();
        return data.results;
    }
}