export interface InnerBlockAttributes {
    url: string;
    alt: string;
    caption: string;
    title: string;
    href: string;
    rel: string;
    linkClass: string;
    linkTarget: string;
    anchor: string;
    id: number;
    sizeSlug: string;
    linkDestination: string;
    width: number;
    height: number;
}

export interface InnerBlockGallery {
    // innerBlocks: any[];
    name: string;
    originalContent: string;
    attributes: InnerBlockAttributes;
    id: string;
}

export interface Attributes {
    images: any[];
    ids: any[];
    shortCodeTransforms: any[];
    caption: string;
    imageCrop: boolean;
    fixedHeight: boolean;
    sizeSlug: string;
    allowResize: boolean;
    anchor: string;
    columns: number;
    linkTo: string;
}

export interface Gallery {
    innerBlocks: InnerBlockGallery[];
    name: string;
    originalContent: string;
    attributes: Attributes;
    id: string;
}
