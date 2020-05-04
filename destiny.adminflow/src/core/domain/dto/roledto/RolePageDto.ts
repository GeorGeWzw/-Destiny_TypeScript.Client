import {Guid} from "guid-typescript"

export class Search{
    Name: string = "";
    IsAdmin: boolean=false;
}
/*
    表格Dto
*/
export class RolePageDto{
    id:string=Guid.EMPTY;
    Name: string = "";
    NormalizedName: string = "";
    IsAdmin: boolean=false;
    Description: string = "";
    Code:string="";
    ConcurrencyStamp:string="";
}