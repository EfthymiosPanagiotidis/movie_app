import axios from "axios";
import {
  GetMovieCreditsRequest,
  GetMovieCreditsResponse,
  IGetMovieCreditsService,
} from "../contracts/services/IGetMovieCreditsService";

class GetMovieCreditsService implements IGetMovieCreditsService {
  public async handle(
    req?: GetMovieCreditsRequest
  ): Promise<GetMovieCreditsResponse> {
    try {
      if (!req?.apiKey) {
        throw new Error();
      }
      if (!req?.movieId) {
        throw new Error();
      }
      let url = `https://api.themoviedb.org/3/movie/${req.movieId}/credits?api_key=${req.apiKey}`;
      const res = await axios.get(url);
      const getMovieCreditsResponse: GetMovieCreditsResponse =
        new GetMovieCreditsResponse({
          credits: {
            actors: res.data.cast.map((x: any) => x.name),
            directors: res.data.crew
              .filter((x: any) => x.job === "Director")
              .map((x: any) => x.name),
            writers: res.data.crew
              .filter((x: any) => x.job === "Writer" || x.job === "Screenplay")
              .map((x: any) => x.name),
          },
        });
      return getMovieCreditsResponse;
    } catch (err) {
      throw err;
    }
  }
}

const getMovieCreditsService: GetMovieCreditsService =
  new GetMovieCreditsService();

export { getMovieCreditsService, GetMovieCreditsService };
