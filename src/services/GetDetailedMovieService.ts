import axios from "axios";
import {
  GetDetailedMovieRequest,
  GetDetailedMovieResponse,
  IGetDetailedMovieService,
} from "../contracts/services/IGetDetailedMovieService";
import {
  GetMovieCreditsRequest,
  GetMovieCreditsResponse,
} from "../contracts/services/IGetMovieCreditsService";
import { getMovieCreditsService } from "./GetMovieCreditsService";

class GetDetailedMovieService implements IGetDetailedMovieService {
  public async handle(
    req?: GetDetailedMovieRequest
  ): Promise<GetDetailedMovieResponse> {
    try {
      if (!req?.apiKey) {
        throw new Error();
      }
      if (!req?.movieId) {
        throw new Error();
      }
      let url = `https://api.themoviedb.org/3/movie/${req.movieId}?api_key=${req.apiKey}`;
      const res = await axios.get(url);
      const getMovieCreditsRequest: GetMovieCreditsRequest =
        new GetMovieCreditsRequest({
          apiKey: req.apiKey,
          id: req.movieId,
        });
      const getMovieCreditsResponse: GetMovieCreditsResponse =
        await getMovieCreditsService.handle(getMovieCreditsRequest);
      const genres: string[] = res.data.genres.map((x: any) => x.name);
      const getDetailedMovieResponse: GetDetailedMovieResponse =
        new GetDetailedMovieResponse({
          movie: {
            ...res.data,
            genres: genres,
            credits: getMovieCreditsResponse.value,
          },
        });
      return getDetailedMovieResponse;
    } catch (err) {
      throw err;
    }
  }
}

const getDetailedMovieService: GetDetailedMovieService =
  new GetDetailedMovieService();

export { getDetailedMovieService, GetDetailedMovieService };
