import { Block } from 'gql/graphql';
import { CTAButton, MainMenuItem, Items } from './Menu';
import { Properties } from './Properties';

export interface RootObject {
    cta?: CTAButton;
    nodeByUri?: any;
    acfOptionsMainMenu?: any;
    mainMenuItems?: MainMenuItem[];
    items?: Items[];
    blocks?: Block[];
    properties?: Properties;
}
