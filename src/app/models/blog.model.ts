// created based on the api response
export interface BlogEntryOverview {
  id: number;
  title: string;
  contentPreview: string;
  author: string;
  likes: number;
  comments: number;
  likedByMe: boolean;
  createdByMe: boolean;
  createdAt: string;
  updatedAt: string;
  headerImageUrl?: string;
}

export interface BlogPagedData {
  data: BlogEntryOverview[];
  pageIndex: number;
  pageSize: number;
  totalCount: number;
  maxPageSize: number;
}

export interface BlogDetailOverView {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  headerImageUrl: string;
  likes: number;
  likedByMe: boolean;
  createdByMe: boolean;
  comments: any[]; // Adjust this based on the structure of comments
}
