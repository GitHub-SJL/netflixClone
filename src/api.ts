import axios from "axios";

const API_KEY = "fbea410dc10bda1a3c8129fba3707eb4";
const BASE_PATH = "https://api.themoviedb.org/3/";

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export const getMovies = async () => {
  const response = await axios.get(
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`
  );

  // response 객체에서 IGetMoviesResult 타입의 데이터를 추출하여 반환
  const data: IGetMoviesResult = {
    dates: response.data.dates,
    page: response.data.page,
    results: response.data.results,
    total_pages: response.data.total_pages,
    total_results: response.data.total_results, 
  };

  return data;
};
// export function getMovies() {
//   return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
//     (response) => response.json()
//   );
// }

