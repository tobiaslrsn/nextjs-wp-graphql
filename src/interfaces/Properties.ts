export interface PropertyQuery {
    properties?(where: Pagination): void;
    nodes?: NodeOne;
    pageInfo?: PageInfo;
    databaseId?: number;
}

export interface NodeOne {
    title: string;
    uri: string;
    featuredImage: FeaturedImage;
    propertyFeatures: PropertyFeatures;
}

interface Pagination {
    offsetPagination: Offset;
}

interface Offset {
    size: number;
    offset: number;
}

interface FeaturedImage {
    node: FeaturedImgNode;
}

interface FeaturedImgNode {
    sourceUrl: string;
    uri: string;
}

interface PageInfo {
    pageInfo: OffsetTotal;
}

interface Offset {
    offsetPagination: OffsetTotal;
}
interface OffsetTotal {
    total: number;
}

export interface PropertyFeatures {
    __typename?: string;
    bathrooms?: number;
    bedrooms?: number;
    hasParking: boolean;
    petFriendly: boolean;
    price?: PropertyPrices;
    minPrice: string | (string | null)[];
    maxPrice: string;
}

export interface PropertyPrices {
    minPrice: number;
    maxPrice: number;
}

export interface Properties {
    properties: any;
    databaseId?: number;
    featuredImage: FeaturedImage;
    propertyFeatures: PropertyFeatures;
    pageInfo?: Offset;
    title: string;
    uri: string;
    nodes?: NodeOne;
}
