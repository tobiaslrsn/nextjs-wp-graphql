import { BlockRenderer } from 'components/BlockRenderer';
import MainMenu from 'components/MainMenu/MainMenu';
import { PageWrapper } from 'context/Page';
import { RootObject } from 'interfaces/Root';
import Head from 'next/head';

const Page: React.FC<RootObject> = (props) => {
    console.log('PAGE PROPS: ', props);
    return (
        <div>
            {/* TODO: Sort out typing */}

            <PageWrapper // My context for featured items.
                value={{
                    title: props.title,
                    featuredImage: props.featuredImage,
                    propertyFeatures: props.propertyFeatures,
                }}
            >
                <Head>
                    <title>{props.seo.title}</title>

                    <meta name="description" content={props.seo.metaDesc} />
                </Head>
                <MainMenu
                    items={props.mainMenuItems}
                    callToActionLabel={props.callToActionLabel}
                    callToActionDestination={props.callToActionDestination}
                    homeLabel={props.homeLabel}
                />
                <BlockRenderer blocks={props.blocks} />
            </PageWrapper>
        </div>
    );
};

export default Page;
