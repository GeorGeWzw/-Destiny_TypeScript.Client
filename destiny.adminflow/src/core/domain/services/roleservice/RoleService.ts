import { injectable } from "inversify"
import "reflect-metadata"
import { IRoleService } from "./IRoleService"
import RoleserviceBase from '@/core/data-source/requestapi/roleapi/rolerequestApi.ts'
import { Pagination } from '@/core/domain/dto/pagequerydto/querydto.ts';
import { IServcerReturn } from "../../dto/pagequerydto/serverReturndto";
import { Role } from '../../dto/roledto/RoleDto';

@injectable()
export default class RoleService implements IRoleService {
    // constructor() {
    //     if (
    //         RoleService.s_instance === null ||
    //         RoleService.s_instance === undefined
    //     ) {
    //         RoleService.s_instance = new RoleService();
    //     }
    //     return RoleService.s_instance;
    // }
    // //#region  单例
    // private static s_instance: RoleService;
    // //#endregion

    GetUserPage(_query: Pagination): Promise<IServcerReturn<Role>> {
        debugger
        return RoleserviceBase.GetUserPage(_query);
    };

}
