import { BlockRenderer } from 'components/BlockRenderer';
import MainMenu from 'components/MainMenu/MainMenu';
import { PageWrapper } from 'context/page';
import { RootObject } from 'interfaces/Menu';

const Page: React.FC<RootObject> = (props) => {
    console.log('PAGE PROPS: ', props);
    return (
        <div>
            {/* TODO: Sort out typing */}

            <PageWrapper // My context for featured items.
                value={{
                    title: props.title,
                    featuredImage: props.featuredImage,
                }}
            >
                <MainMenu
                    items={props.mainMenuItems}
                    callToActionLabel={props.callToActionLabel}
                    callToActionDestination={props.callToActionDestination}
                    // homeLabel={props.homeLabel}
                    homeLabel={props.homeLabel}
                />
                <BlockRenderer blocks={props.blocks} />
            </PageWrapper>
        </div>
    );
};
export default Page;
