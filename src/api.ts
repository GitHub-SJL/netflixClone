import axios from "axios";

const API_KEY = "fbea410dc10bda1a3c8129fba3707eb4";
const BASE_PATH = "https://api.themoviedb.org/3/";

export const getMovies = async () => {
  const response = await axios.get(
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`
  );

  return response;
};
