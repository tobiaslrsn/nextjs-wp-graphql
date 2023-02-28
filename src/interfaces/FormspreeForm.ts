export interface Data {
    form_id: string;
    _form_id: string;
}

export interface Attributes {
    name: string;
    data: Data;
    mode: string;
}
export interface FormspreeForm {
    innnerblocks: any[];
    name: string;
    originalContent: string;
    attributes: Attributes;
    id: string;
    formId: string;
}
