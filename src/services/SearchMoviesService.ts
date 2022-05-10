import axios from "axios";
import {
  ISearchMoviesService,
  SearchMoviesRequest,
  SearchMoviesResponse,
} from "../contracts/services/ISearchMoviesService";

class SearchMoviesService implements ISearchMoviesService {
  public async handle(
    req?: SearchMoviesRequest
  ): Promise<SearchMoviesResponse> {
    try {
      if (!req?.apiKey) {
        throw new Error();
      }
      let url = `https://api.themoviedb.org/3/search/movie?api_key=${req.apiKey}`;
      if (req.options.page) {
        url += `&page=${req.options.page}`;
      }
      if (req.options.query) {
        url += `&query=${req.options.query}`;
      }
      if (req.options.language) {
        url += `&language=${req.options.language}`;
      }
      const res = await axios.get(url);

      const searchMoviesResponse: SearchMoviesResponse =
        new SearchMoviesResponse({
          movies: res.data.results,
          totalResults: res.data.total_results,
          totalPages: res.data.total_pages,
        });
      return searchMoviesResponse;
    } catch (err) {
      throw err;
    }
  }
}

const searchMoviesService: SearchMoviesService = new SearchMoviesService();

export { searchMoviesService, SearchMoviesService };
