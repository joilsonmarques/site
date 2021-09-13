/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryPosts
// ====================================================

export interface QueryPosts_posts_author {
  __typename: "Author";
  name: string;
}

export interface QueryPosts_posts {
  __typename: "Posts";
  id: string;
  slug: string;
  published_at: any | null;
  title: string;
  author: QueryPosts_posts_author | null;
}

export interface QueryPosts {
  posts: QueryPosts_posts[];
}

export interface QueryPostsVariables {
  limit?: number | null;
  start?: number | null;
  where?: any | null;
  sort?: string | null;
}
