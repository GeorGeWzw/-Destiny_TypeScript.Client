import requsest from '@/utils/request.ts'
import { RoleApiInfo } from '@/core/apiconfig/ApiRouter.ts'
import { Pagination } from '@/core/domain/dto/pagequerydto/querydto.ts'
import { RolePageDto } from "@/core/domain/dto/roledto/RoleDto"
import { RoleAddDto } from "@/core/domain/dto/roledto/RoleDto"
import { AjaxResult } from '@/core/domain/dto/operationdto/AjaxResult'
import { PageData } from '@/core/domain/dto/pageDto/pageListDto'
// import {Role} from '@/core/domain/dto/roledto/RoleDto.ts'

export default class RoleApiBase {
    static GetRolePage(_search: Pagination): Promise<PageData<RolePageDto>> {
        return new Promise((resolve, reject) => {
            requsest.post(RoleApiInfo.GetRolePage, _search).then((response: any) => {
                resolve(response);
            }).catch((error: any) => {
                reject(error)
            })
        })
    }
    static AddRole(_addrole: RoleAddDto): Promise<AjaxResult> {
        return new Promise((resolve, reject) => {
            requsest.post(RoleApiInfo.AddRole, _addrole).then((response: any) => {
                resolve(response);
            }).catch((error: any) => {
                reject(error)
            })
        })
    }
    /*
        _query查询条件
     */
    // static GetUserPage(_query:Pagination):Promise<IServcerReturn<Role>>{
    //     return new Promise((resolve,reject)=>{
    //         requsest.get(RoleApiInfo.GetPageUser).then((response:any)=>{
    //             resolve(response);
    //         })
    //         .catch((error:any)=>{
    //             reject(error)
    //         });
    //     });
    // }
}
