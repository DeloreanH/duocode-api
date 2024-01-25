export class Pagination<T> {
  public lastPage = 0;

  constructor(
    public items: T[],
    public totalCount: number,
    public page: number,
    public perPage: number,
  ) {
    return this.calculateLastPage();
  }

  private calculateLastPage() {
    this.lastPage = Math.ceil(this.totalCount / this.perPage);
    return this;
  }
}
