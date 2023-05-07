export  interface IContact extends IContactData {
    id:        number
}

export interface IContactData {
    firstName: string;
    lastName:  string;
    tel:       string;
}