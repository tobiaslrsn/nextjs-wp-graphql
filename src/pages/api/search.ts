import { ApolloQueryResult, gql } from '@apollo/client';
import client from 'client';
import { RootObject } from 'interfaces/Root';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<RootObject>
) => {
    try {
        const { data }: ApolloQueryResult<RootObject> = await client.query({
            query: gql`
                query AllPropertiesQuery {
                    properties(
                        where: { offsetPagination: { size: 3, offset: 0 } }
                    ) {
                        pageInfo {
                            offsetPagination {
                                total
                            }
                        }
                        nodes {
                            databaseId
                            title
                            uri
                            featuredImage {
                                node {
                                    uri
                                    sourceUrl
                                }
                            }
                            propertyFeatures {
                                bathrooms
                                bedrooms
                                hasParking
                                petFriendly
                                price
                            }
                        }
                    }
                }
            `,
        });

        return res.status(200).json({
            total: data.properties?.pageInfo.offsetPagination.total, //TODO: Sort typings
            properties: data.properties?.nodes,
        });
    } catch (e) {
        console.log('ERROR: ', e);
    }
};

export default handler;
