export enum SortPropsEnum {
  RATING_DESC = 'raiting',
  PRICE_DESC = 'price',
  TITLE_DESC = 'title',
}
export type Sort = {
  nameList: string;
  sortProps: SortPropsEnum;
};

export interface FilterSliceState {
  searchValue: string;
  categorId: number;
  currentPage: number;
  sort: Sort;
}
