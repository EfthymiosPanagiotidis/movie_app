class MovieCredits {
  public constructor(options: any) {
    options = options || {};
    this.actors = options.actors || [];
    this.directors = options.directors || [];
    this.writers = options.writers || [];
  }

  public get actors(): string[] {
    return this._actors;
  }

  public set actors(actors: string[]) {
    this._actors = actors;
  }

  public get directors(): string[] {
    return this._directors;
  }

  public set directors(directors: string[]) {
    this._directors = directors;
  }

  public get writers(): string[] {
    return this._writers;
  }

  public set writers(writers: string[]) {
    this._writers = writers;
  }

  private _actors: string[] = [];
  private _directors: string[] = [];
  private _writers: string[] = [];
}

export { MovieCredits };
