import { Customer } from "./customerModel";

export interface CustomerResponse{
    users: Customer[];
    total: number;
    skip:number;
    limit:number;
}