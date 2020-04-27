import { injectable } from "inversify"
import "reflect-metadata"
import { Pagination } from "@/core/domain/dto/pagequerydto/querydto.ts";
import { IServcerReturn } from "../../dto/pagequerydto/serverReturndto";

import { IRoleService } from "./IRoleService"
import { RoleAddDto } from "@/core/domain/dto/roledto/RoleDto"

import RoleApiBase from "@/core/data-source/requestapi/roleapi/rolerequestApi"
import { AjaxResult } from '../../dto/operationdto/AjaxResult';
// import { Role } from '../../dto/roledto/RoleDto';

@injectable()
export default class RoleService implements IRoleService {
    /**
     * 添加角色
     */
    async AddRole(_addRole: RoleAddDto): Promise<AjaxResult> {
        return RoleApiBase.AddRole(_addRole);
    }
    // GetPage(_query: Pagination): Promise<IServcerReturn<Role>> {
    //     debugger
    //     return RoleserviceBase.GetUserPage(_query);
    // };

}
