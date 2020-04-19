import requsest from '@/utils/request.ts'
import {RoleApiInfo} from '@/core/apiconfig/ApiRouter.ts'
import {Pagination} from '@/core/domain/dto/pagequerydto/querydto.ts'
import {IServcerReturn} from '@/core/domain/dto/pagequerydto/serverReturndto.ts'
import { RoleAddDto } from "@/core/domain/dto/roledto/RoleDto"
import { OperationResultDto } from "@/core/domain/dto/operationdto/OperationResultDto"
// import {Role} from '@/core/domain/dto/roledto/RoleDto.ts'

export default class RoleApiBase{
    static AddRole(_Roleadd:RoleAddDto):Promise<OperationResultDto>{
        return new Promise((resolve, reject)=>{
            debugger
            requsest.post(RoleApiInfo.AddRole,_Roleadd).then((response:any)=>{
                console.log(response)
                debugger
                resolve(response);
            }).catch((error:any)=>{
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
