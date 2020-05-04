import { IServcerReturn } from '../../dto/pagequerydto/serverReturndto';
import { RolePageDto } from "@/core/domain/dto/roledto/RolePageDto"
import { Pagination } from '../../dto/pagequerydto/querydto';
import { PageData } from '../../dto/pageDto/pageListDto';


export interface IRoleService {
    // GetPage(_query: Pagination): Promise<IServcerReturn<Role>>;
    PageRole(_search: Pagination): Promise<PageData<RolePageDto>>;
} 