import { IServcerReturn } from '../../dto/pagequerydto/serverReturndto';
import { RoleAddDto } from "@/core/domain/dto/roledto/RoleDto"
import { Pagination } from '../../dto/pagequerydto/querydto';
import { OperationResultDto } from "@/core/domain/dto/operationdto/OperationResultDto"

export interface IRoleService {
    // GetPage(_query: Pagination): Promise<IServcerReturn<Role>>;
    AddRole(_addRole:RoleAddDto):Promise<OperationResultDto>;
} 