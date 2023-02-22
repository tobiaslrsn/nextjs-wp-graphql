import { Block } from 'gql/graphql';

export interface Destination {
    __typename: string;
    uri: string;
    label: string;
}

export interface Items {
    id: string;
    __typename: string;
    destination: any;
    label: string;
    subMenuItems: SubMenuItems[];
}

export interface SubMenuItems {
    id: string;
    destination: string;
    label: string;
}

export interface MainMenuItem {
    __typename: string;
    menuItem: Items;
    items: Items[];
    CtaButton?: CTAButton;
}

export interface Attributes {
    content: string;
    level: number;
    anchor: string;
    textAlign: string;
    textColor: string;
    fontSize: string;
    dropCap?: boolean;
}

export interface InnerBlock {
    innerBlocks: any[];
    name: string;
    originalContent: string;
    attributes: Attributes;
    id: string;
}

export interface Color {
    text: string;
}

export interface Style {
    color: Color;
}

export interface Attributes2 {
    useFeaturedImage: boolean;
    alt: string;
    hasParallax: boolean;
    isRepeated: boolean;
    dimRatio: number;
    backgroundType: string;
    isDark: boolean;
    anchor: string;
    url: string;
    id: number;
    content: string;
    level?: number;
    style: Style;
}
export interface CTAButton {
    callToActionLabel: string;
    callToActionDestination: string;
}
export interface RootObject {
    cta?: CTAButton;
    nodeByUri?: any;
    acfOptionsMainMenu?: any;
    mainMenuItems?: MainMenuItem[];
    items?: Items[];
    blocks?: Block[];
}
