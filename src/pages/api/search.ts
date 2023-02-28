import { ApolloQueryResult, gql } from '@apollo/client';
import client from 'client';
import { RootObject } from 'interfaces/Root';
import { NextApiRequest, NextApiResponse } from 'next';

let perPage: any = Math.ceil(3);

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<RootObject>
) => {
    try {
        const filters = JSON.parse(req.body);
        console.log('FILTERS: ', filters);

        let hasParkingFilter: string = ``;
        let petFriendlyFilter: string = ``;
        let minPriceFilter: string = ``;
        let maxPriceFilter: string = ``;

        if (filters.hasParking) {
            hasParkingFilter = `
                {
                    key:"has_parking"
                    compare: EQUAL_TO
                    value:"1"
                },
            `;
        }

        if (filters.petFriendly) {
            petFriendlyFilter = `
                {
                    key:"pet_friendly"
                    compare: EQUAL_TO
                    value:"1"
                },
            `;
        }

        if (filters.minPrice) {
            minPriceFilter = `
                {
                    key: "price"
                    compare: GREATER_THAN_OR_EQUAL_TO
                    value: "${filters.minPrice}"
                    type: NUMERIC
                }
            `;
        }

        if (filters.maxPrice) {
            maxPriceFilter = `
                {
                    key: "price"
                    compare: LESS_THAN_OR_EQUAL_TO
                    value: "${filters.maxPrice}"
                    type: NUMERIC
                }
            `;
        }

        const { data }: ApolloQueryResult<RootObject> = await client.query({
            query: gql`
                query AllPropertiesQuery {
                    properties( where: {
                             offsetPagination: { size: ${perPage}, offset: ${
                ((filters.page || 1) - 1) * perPage
            } }
                        metaQuery: {
                            relation: AND
                            metaArray: [
                                ${petFriendlyFilter}
                                ${hasParkingFilter}
                                ${minPriceFilter}
                                ${maxPriceFilter}
                            ]
                        }
                    }) 
                    {
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
        /*      console.log(
            'WUERY: ',
            gql`
        query AllPropertiesQuery {
            properties( where: {
                     offsetPagination: { size: 3, offset: ${
                         ((filters.page || 1) - 1) * 3
                     } }
                metaQuery: {
                    relation: AND
                    metaArray: [
                        ${petFriendlyFilter}
                        ${hasParkingFilter}
                        ${minPriceFilter}
                        ${maxPriceFilter}
                    ]
                }
            }) 
            {
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
    `
        );
 */
        return res.status(200).json({
            total: data.properties?.pageInfo.offsetPagination.total, //TODO: Sort typings
            properties: data.properties?.nodes,
        });
    } catch (e) {
        console.log('ERROR: ', e);
    }
};

export default handler;
