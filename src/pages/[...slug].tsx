import {  gql } from '@apollo/client';
import client from 'client';

import Page from 'components/Page/Page';

import { SlugNodes } from 'interfaces/Slug';
import { getPageStaticProps } from 'utils/getPageStaticProps';


export default Page;

export const getStaticProps = getPageStaticProps;

export const getStaticPaths = async () => {
    // Get staticpaths = Available for page components to get/return an array  and it has to be named EXACTLY getStaticPath
    // Get staticProps is required when using staticPaths
    //QUERY:
    const { data } = await client.query({
        // Below we will add our page query from the query composer in wordpress (WP graphql)
        query: gql`
            query ALLPagesQuery {
                pages {
                    nodes {
                        uri
                    }
                }
                properties {
                    nodes {
                        uri
                    }
                }
            }
        `,
    });

    return {
        paths: [...data.pages.nodes, ...data.properties.nodes].map((page: SlugNodes) => ({
            params: {
                slug: page.uri.substring(1, page.uri.length - 1).split('/'),
            },
        })),
        fallback: true,
    };
};


        
        