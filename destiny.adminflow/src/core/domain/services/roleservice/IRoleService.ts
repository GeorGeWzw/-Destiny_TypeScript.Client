import { IServcerReturn } from '../../dto/pagequerydto/serverReturndto';
import { Role } from '../../dto/roledto/RoleDto';
import { Pagination } from '../../dto/pagequerydto/querydto';

export interface IRoleService {
    GetUserPage(_query: Pagination): Promise<IServcerReturn<Role>>;
} 