import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AcfTickitemBlock } from 'gql/graphql';
import React from 'react';

export interface Attributes {
    content: string;
    dropCap: boolean;
    anchor: string;
}

export interface InnerBlock {
    innerBlocks: any[];
    name: string;
    originalContent: string;
    attributes: Attributes;
    id: string;
}

export interface Attributes2 {
    name: string;
    mode: string;
}

export interface RootObject {
    innerBlocks: InnerBlock[];
    name: string;
    originalContent: string;
    attributes: Attributes2;
    id: string;
}

interface TickItemInterface {
    AcfTickitemBlock: AcfTickitemBlock;
    children: React.ReactNode;
}
const TickItem: React.FC<TickItemInterface> = (props) => {
    console.log('TICK ITEM: ', props);
    return (
        <React.Fragment>
            <div className="grid grid-cols-[50px_1fr] gap-3">
                <div className="text-3xl text-green-500 flex justify-center items-center">
                    <FontAwesomeIcon icon={faCircleCheck} />
                </div>
                <div>{props.children}</div>
            </div>
        </React.Fragment>
    );
};

export default TickItem;
