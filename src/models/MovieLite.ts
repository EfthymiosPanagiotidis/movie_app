class MovieLite {
  public constructor(options: any) {
    options = options || {};
    this.id = options.id || options.Id || options.ID || "";
    this.title = options.title || "";
    this.posterPath =
      options.posterPath ||
      options.poster ||
      options.image ||
      options.poster_path ||
      "";
  }

  public get id(): string {
    return this._id;
  }

  public set id(id: string) {
    this._id = id;
  }

  public get title(): string {
    return this._title;
  }

  public set title(title: string) {
    this._title = title;
  }

  public get posterPath(): string {
    return this._posterPath;
  }

  public set posterPath(posterPath: string) {
    this._posterPath = posterPath;
  }

  public get posterUrl(): string {
    if (this.posterPath) {
      return `https://image.tmdb.org/t/p/w500${this.posterPath}`;
    } else {
      return "images/no_poster_found.jpg";
    }
  }

  private _id: string = "";
  private _title: string = "";
  private _posterPath: string = "";
}

export { MovieLite };
