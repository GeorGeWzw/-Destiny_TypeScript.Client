import requsest from '@/utils/request.ts'
import { MenuApiInfo } from '@/core/apiconfig/ApiRouter.ts'
import { IServcerTreeReturn } from '@/core/domain/dto/pagequerydto/serverReturndto.ts'
import { MenuOutTreeDto } from '@/core/domain/dto/menudto/MenuResultDto'

export default class MenuApiBase {
    /*
        _query查询条件
     */
    static GetTree(param:any): Promise<IServcerTreeReturn> {
        return new Promise((resolve, reject) => {
            requsest.get(MenuApiInfo.GetAuthorityTree,{params:param}).then((response: any) => {
                resolve(response);
            })
                .catch((error: any) => {
                    reject(error)
                });
        });
    }
}