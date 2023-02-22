import CallToActionButton from 'components/CallToActionButton/CallToActionButton';
import Column from 'components/Column/Column';
import Columns from 'components/Columns/Columns';
import { Cover } from 'components/Cover';
import { Heading } from 'components/Heading';
import { Paragraph } from 'components/Paragraph/Paragraph';

import { Block } from 'gql/graphql';
import { RootObject } from 'interfaces/Menu';

import React from 'react';
import { theme } from '../../../theme';
import Image from 'next/image';
import PostTitle from 'components/PostTitle/PostTitle';
import PropertySearch from 'components/PropertySearch/PropertySearch';

// (element | undefined)[] Issue solved with fragments. If array empty, it can't return anything
export const BlockRenderer = ({ blocks }: RootObject) => {
    console.log(blocks);
    return (
        <React.Fragment>
            {blocks?.map((block: Block) => {
                switch (block.name) {
                    case 'core/post-title': {
                        return (
                            <PostTitle
                                key={block.id}
                                level={block.attributes.level}
                                textAlign={block.attributes.textAlign}
                            />
                        );
                    }

                    case 'acf/propertysearch': {
                        return <PropertySearch key={block.id} />;
                    }

                    case 'acf/ctabutton': {
                        return (
                            <CallToActionButton
                                key={block.id}
                                buttonLabel={block.attributes.data.label}
                                destination={
                                    block.attributes.data.destination || '/'
                                }
                                align={block.attributes.data.align}
                            />
                        );
                    }

                    case 'core/paragraph': {
                        return (
                            <Paragraph
                                key={block.id}
                                content={block.attributes.content}
                                textColor={
                                    theme[block.attributes.textColor] ||
                                    block.attributes.style?.color?.text
                                }
                                align={block.attributes.align}
                            />
                        );
                    }

                    case 'core/heading': {
                        return (
                            <Heading
                                key={block.id}
                                textAlign={block.attributes.textAlign}
                                content={block.attributes.content}
                                textColor={block.attributes.textColor}
                                level={block.attributes.level}
                            />
                        );
                    }
                    case 'core/cover': {
                        console.log('COVER BLOCK: ', block);
                        return (
                            <Cover
                                key={block.id}
                                background={block.attributes.url}
                                featuredImage={''}
                            >
                                <BlockRenderer
                                    blocks={block.innerBlocks!} //TODO: Sort out typings for this.
                                />
                            </Cover>
                        );
                    }

                    case 'core/columns': {
                        return (
                            <Columns
                                key={block.id}
                                isStackedOnMobile={
                                    block.attributes.isStackedOnMobile
                                }
                            >
                                <BlockRenderer blocks={block.innerBlocks!} />
                            </Columns>
                        );
                    }

                    case 'core/column': {
                        return (
                            <Column
                                key={block.id}
                                width={block.attributes.width}
                            >
                                <BlockRenderer blocks={block.innerBlocks!} />
                            </Column>
                        );
                    }

                    case 'core/group':
                    case 'core/block': {
                        return (
                            <BlockRenderer
                                key={block.id}
                                blocks={block.innerBlocks!}
                            />
                        );
                    }

                    case 'core/image': {
                        return (
                            <Image
                                key={block.id}
                                src={block.attributes.url}
                                width={block.attributes.width}
                                height={block.attributes.height}
                                alt={block.attributes.alt || ''}
                            />
                        );
                    }
                    default:
                        console.log('UNKNOWN: ', block);
                        return null;
                }
            })}
        </React.Fragment>
    );
};
