import axios from "axios";
import {
  GetTopMoviesRequest,
  GetTopMoviesResponse,
  IGetTopMoviesService,
} from "../contracts/services/IGetTopMoviesService";

class GetTopMoviesService implements IGetTopMoviesService {
  public async handle(
    req?: GetTopMoviesRequest
  ): Promise<GetTopMoviesResponse> {
    try {
      if (!req?.apiKey) {
        throw new Error();
      }
      let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${req.apiKey}`;
      for (const [key, value] of Object.entries(req.options)) {
        url += `&${key}=${value}`;
      }
      const res = await axios.get(url);
      const getTopMoviesResponse: GetTopMoviesResponse =
        new GetTopMoviesResponse({
          movies: res.data.results,
        });
      return getTopMoviesResponse;
    } catch (err) {
      throw err;
    }
  }
}

const getTopMoviesService: GetTopMoviesService = new GetTopMoviesService();

export { getTopMoviesService, GetTopMoviesService };
