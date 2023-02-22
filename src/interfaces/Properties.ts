interface FeaturedImgNode {
    sourceUrl: string;
    uri: string;
}

interface FeaturedImage {
    node: FeaturedImgNode;
}

interface PropertyFeatures {
    __typename: string;
    bathrooms?: number;
    bedrooms: number;
    hasParking: boolean;
    petFriendly: boolean;
    price: number;
}

export interface Properties {
    databaseId?: number;
    featuredImage: FeaturedImage;
    propertyFeatures: PropertyFeatures;
    title: string;
    uri: string;
    nodes?: any;
}
