export interface BaseContent {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    status: 'draft' | 'published' | 'archived';
  }
  
  export interface Article extends BaseContent {
    title: string;
    body: string;
    author: string;
    tags?: string[];
  }
  