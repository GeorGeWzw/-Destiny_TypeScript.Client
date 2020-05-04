import { injectable } from "inversify"
import "reflect-metadata"
import { Pagination } from "@/core/domain/dto/pagequerydto/querydto.ts";
import { IServcerReturn } from "../../dto/pagequerydto/serverReturndto";

import { IRoleService } from "./IRoleService"
import { RolePageDto } from "@/core/domain/dto/roledto/RolePageDto"

import RoleApiBase from "@/core/data-source/requestapi/roleapi/rolerequestApi"
import { PageData } from '../../dto/pageDto/pageListDto';
// import { Role } from '../../dto/roledto/RoleDto';

@injectable()
export default class RoleService implements IRoleService {
    /**
     * 添加角色
     */
    async PageRole(_search: Pagination): Promise<PageData<RolePageDto>> {
        return RoleApiBase.GetRolePage(_search);
    }
    // GetPage(_query: Pagination): Promise<IServcerReturn<Role>> {
    //     debugger
    //     return RoleserviceBase.GetUserPage(_query);
    // };

}
