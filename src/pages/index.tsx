import { getPageStaticProps } from 'utils/getPageStaticProps';
import Page from 'components/Page/Page';

export default Page;

// This is running server side
export const getStaticProps = getPageStaticProps;
