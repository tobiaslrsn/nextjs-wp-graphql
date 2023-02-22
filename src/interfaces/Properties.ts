interface PropertyFeatures {
    __typename: string;
    bathrooms?: number;
    bedrooms: number;
    hasParking: boolean;
    petFriendly: boolean;
    price: number;
}
export interface Properties {
    title: string;
    uri: string;
    propertyFeatures: PropertyFeatures;
    nodes: Node;
    databaseId: number;
}
