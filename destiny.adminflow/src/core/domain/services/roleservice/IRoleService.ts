import { IServcerReturn } from '../../dto/pagequerydto/serverReturndto';
import { RoleAddDto } from "@/core/domain/dto/roledto/RoleDto"
import { Pagination } from '../../dto/pagequerydto/querydto';
import { AjaxResult } from '../../dto/operationdto/AjaxResult';


export interface IRoleService {
    // GetPage(_query: Pagination): Promise<IServcerReturn<Role>>;
    AddRole(_addRole: RoleAddDto): Promise<AjaxResult>;
} 