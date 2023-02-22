import { ApolloQueryResult, gql } from '@apollo/client';
import client from 'client';
import { Properties } from 'interfaces/Properties';
import { RootObject } from 'interfaces/Root';

import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<RootObject>
) => {
    try {
        const { data }: ApolloQueryResult<RootObject> = await client.query({
            query: gql`
                query AllPropertiesQuery {
                    properties {
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
            properties: data.properties?.nodes, // TODO : SORT OUT TYPING
        });
    } catch (e) {
        console.log('ERROR: ', e);
    }
};

export default handler;
