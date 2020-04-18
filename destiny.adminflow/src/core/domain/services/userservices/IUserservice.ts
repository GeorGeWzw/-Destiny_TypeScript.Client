import { IServcerReturn } from '../../dto/pagequerydto/serverReturndto';
import { UserTable } from '../../dto/userdto/UserDto';
import { Pagination } from '../../dto/pagequerydto/querydto';

export interface IUserService {
    GetPage(_query: Pagination): Promise<IServcerReturn<UserTable[]>>;
} 