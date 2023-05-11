import { IAddress } from "./address.model";

export interface ICompany {
    address: IAddress;
    department: string;
    name: string;
    title: string;
}