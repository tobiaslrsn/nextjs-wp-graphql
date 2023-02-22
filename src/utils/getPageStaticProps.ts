import { ApolloQueryResult, gql } from '@apollo/client';
import client from 'client';
import { RootObject } from 'interfaces/Menu';
import { cleanAndTransformBlocks } from './cleanAndTransformBlocks';
import { mapMainMenuItems } from './mapMainMenuItems';

export const getPageStaticProps = async (context: any) => {
    const uri: string = context.params?.slug
        ? `/${context.params.slug.join('/')}/`
        : '/';

    const { data }: ApolloQueryResult<RootObject> = await client.query({
        query: gql`
            query PageQuery($uri: String!) {
                nodeByUri(uri: $uri) {
                    id
                    ... on Page {
                        id
                        title
                        blocksJSON
                        featuredImage {
                            node {
                                sourceUrl
                            }
                        }
                    }
                    ... on Property {
                        id
                        title
                        blocksJSON
                        featuredImage {
                            node {
                                sourceUrl
                            }
                        }
                    }
                }
                acfOptionsMainMenu {
                    mainMenu {
                        homeLabel
                        callToActionButton {
                            destination {
                                ... on Page {
                                    uri
                                }
                            }
                            label
                        }

                        menuItems {
                            menuItem {
                                destination {
                                    ... on Page {
                                        uri
                                    }
                                }
                                label
                            }

                            items {
                                destination {
                                    ... on Page {
                                        uri
                                    }
                                }
                                label
                            }
                        }
                    }
                }
            }
        `,
        variables: {
            uri,
        },
    });

    const blocks = cleanAndTransformBlocks(data.nodeByUri.blocksJSON);
    console.log(data, ' me data ');

    return {
        props: {
            title: data.nodeByUri.title,

            featuredImage:
                data.nodeByUri.featuredImage?.node?.sourceUrl || null,

            mainMenuItems: mapMainMenuItems(
                data.acfOptionsMainMenu.mainMenu.menuItems
            ),
            homeLabel: data.acfOptionsMainMenu.mainMenu.homeLabel,

            callToActionLabel:
                data.acfOptionsMainMenu.mainMenu.callToActionButton.label,

            callToActionDestination:
                data.acfOptionsMainMenu.mainMenu.callToActionButton.destination
                    .uri,

            blocks,
        },
    };
};
