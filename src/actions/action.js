import { api_Key } from "../Variables";
// ACTION TYPE CONSTANTS
export const GREETINGS = "GREETINGS";
export const GET_MOVIES = "GET_MOVIES";

const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_Key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

// MESSAGE RETRIEVER
export const toggleMessage = () => ({
  type: "GREETINGS"
});

// API RETRIEVER
export const getMovies = () =>
  async function(dispatch) {
    const res = await fetch(url);
    const movies = await res.json();

    return dispatch({
      type: "GET_MOVIES",
      payload: movies.results
    });
  };
