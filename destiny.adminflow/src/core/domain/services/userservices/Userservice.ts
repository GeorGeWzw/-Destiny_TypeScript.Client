import { injectable } from "inversify"
import "reflect-metadata"
import { IServcerReturn } from "../../dto/pagequerydto/serverReturndto";
import { Pagination } from "@/core/domain/dto/pagequerydto/querydto.ts";

import { UserTable } from '../../dto/userdto/UserDto';
import { IUserService } from "./IUserservice"
import UserApiBase from "@/core/data-source/requestapi/userapi/userrequestApi.ts"
import { PageData } from '../../dto/pageDto/pageListDto';


@injectable()
export default class UserService implements IUserService {
    GetPage(_query: Pagination): Promise<PageData<UserTable>> {
        
        return UserApiBase.GetPage(_query);
    }

}