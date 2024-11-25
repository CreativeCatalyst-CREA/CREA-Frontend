export interface IInvestPost {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
}

export interface IInvestPostList {
  postList: Array<IInvestPost>;
}
