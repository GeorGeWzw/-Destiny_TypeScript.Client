import requsest from '@/utils/request.ts'
import { UserApiInfo } from '@/core/apiconfig/ApiRouter.ts'
import { Pagination } from '@/core/domain/dto/pagequerydto/querydto.ts'
import { IServcerReturn } from '@/core/domain/dto/pagequerydto/serverReturndto.ts'
import { UserTable } from '@/core/domain/dto/userdto/UserDto'
import { PageData } from '@/core/domain/dto/pageDto/pageListDto'

export default class UserApiBase {
    /*
        _query查询条件
     */
    static GetPage(_query: Pagination): Promise<PageData<UserTable>> {
        return new Promise((resolve, reject) => {
            requsest.post(UserApiInfo.GetPageUser, _query).then((response: any) => {
                resolve(response);
            })
                .catch((error: any) => {
                    reject(error)
                });
        });
    }
}