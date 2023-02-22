import { Block } from 'gql/graphql';

export interface Slug {
    blocks: Block[];
    pages: SlugNodes[];
}

export interface SlugNodes {
    uri: string;
    title: string;
}
