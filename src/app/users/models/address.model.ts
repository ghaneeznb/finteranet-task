import { ICoordinates } from "./coordinates.model";

export interface IAddress {
    address: string;
    city: string;
    coordinates: ICoordinates;
    postalCode: string;
    state: string;
}