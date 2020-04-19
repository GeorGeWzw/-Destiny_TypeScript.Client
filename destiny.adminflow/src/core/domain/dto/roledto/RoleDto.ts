import {Guid} from "guid-typescript"
export class RoleAddDto{
    name: string = "";
    normalizedName: string = "";
    description: string = "";
    isAdmin: boolean=false;
    id:string=Guid.EMPTY;
}