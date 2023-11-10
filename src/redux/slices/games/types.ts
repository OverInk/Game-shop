export type FetchGamesArgs = Record<string, string>;

export type Pizza = {
  id: string;
  title: string;
  price: number;
  sizes: any;
  imgUrl: string;
  types: number;
  skills: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type SearchGamesParams = {
  sortBy: string;
  categorId: string;
  currentPage: string;
};

export interface PizzaSliceState {
  items: Pizza[];
  status: Status;
}
