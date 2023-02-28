import { Block } from 'gql/graphql';
import { FormspreeForm } from './FormspreeForm';
import { CTAButton, MainMenuItem, Items } from './Menu';
import { Properties, PropertyFeatures } from './Properties';
import { MetaDesc } from './Seo';

export interface RootObject {
    cta?: CTAButton;
    nodeByUri?: any;
    acfOptionsMainMenu?: any;
    mainMenuItems?: MainMenuItem[];
    items?: Items[];
    blocks?: Block[];
    properties?: Properties;
    formspreeForm?: FormspreeForm;
    propertyFeatures?: PropertyFeatures;
    seo: MetaDesc;
    // seo?: Seo;
}
