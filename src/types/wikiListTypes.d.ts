export interface Article {
  updatedAt: string;
  job: string;
  nationality: string;
  city: string;
  image: string;
  code: string;
  name: string;
  id: number;
  totalCount: number;
}

export interface UserCardProps {
  article: Article[Article];
}