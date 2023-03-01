import { v4 as uuid } from 'uuid';

export const cleanAndTransformBlocks = (blocksJSON: any) => {
    const blocks: JSON = JSON.parse(blocksJSON);

    const assignId = (b: any) => {
        // Recursive function, run again fter assigned id
        b.forEach((block: any) => {
            block.id = uuid();
            // If block has a length
            if (block.innerBlocks?.length) {
                // Assign it an id
                assignId(block.innerBlocks);
            }
        });
    };
    assignId(blocks);

    return blocks;
};
