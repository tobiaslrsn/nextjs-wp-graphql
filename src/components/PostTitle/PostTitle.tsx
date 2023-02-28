import { Heading } from 'components/Heading';
import { usePageContext } from 'context/Page';
import React from 'react';

interface PostTitle {
    level: number;
    textAlign: string;
}

const PostTitle: React.FC<PostTitle> = ({ level, textAlign }) => {
    const { title }: any = usePageContext();

    return (
        <React.Fragment>
            <Heading content={title} level={level} textAlign={textAlign} />
        </React.Fragment>
    );
};

export default PostTitle;
