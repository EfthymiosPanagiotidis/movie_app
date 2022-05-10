import axios from "axios";
import {
  GetPopularMoviesRequest,
  GetPopularMoviesResponse,
  IGetPopularMoviesService,
} from "../contracts/services/IGetPopularMoviesService";

class GetPopularMoviesService implements IGetPopularMoviesService {
  public async handle(
    req?: GetPopularMoviesRequest
  ): Promise<GetPopularMoviesResponse> {
    try {
      if (!req?.apiKey) {
        throw new Error();
      }
      let url = `https://api.themoviedb.org/3/movie/popular?api_key=${req.apiKey}`;
      for (const [key, value] of Object.entries(req.options)) {
        url += `&${key}=${value}`;
      }
      const res = await axios.get(url);
      const getPopularMoviesResponse: GetPopularMoviesResponse =
        new GetPopularMoviesResponse({
          movies: res.data.results,
        });
      return getPopularMoviesResponse;
    } catch (err) {
      throw err;
    }
  }
}

const getPopularMoviesService: GetPopularMoviesService =
  new GetPopularMoviesService();

export { getPopularMoviesService, GetPopularMoviesService };
