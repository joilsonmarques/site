/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryPostBySlug
// ====================================================

export interface QueryPostBySlug_posts_author {
  __typename: "Author";
  name: string;
}

export interface QueryPostBySlug_posts_categorias {
  __typename: "Category";
  slug: string;
  name: string;
}

export interface QueryPostBySlug_posts_tags {
  __typename: "ComponentFragmentTags";
  name: string;
}

export interface QueryPostBySlug_posts {
  __typename: "Posts";
  id: string;
  slug: string;
  published_at: any | null;
  title: string;
  author: QueryPostBySlug_posts_author | null;
  categorias: QueryPostBySlug_posts_categorias[];
  tags: (QueryPostBySlug_posts_tags | null)[] | null;
}

export interface QueryPostBySlug {
  posts: QueryPostBySlug_posts[];
}

export interface QueryPostBySlugVariables {
  slug: string;
}
