import { injectable } from "inversify"
import "reflect-metadata"
import { IServcerTreeReturn } from "../../dto/pagequerydto/serverReturndto";
import { IMenuService } from "./IMenuserveces"
import {MenuOutTreeDto} from "@/core/domain/dto/menudto/MenuResultDto"
import MenuApiBase from "@/core/data-source/requestapi/menuapi/menurequestApi"


@injectable()
export default class MenuService implements IMenuService {
    /**
     * 获取菜单权限分配时
     */
    
    async GetTree(): Promise<IServcerTreeReturn> {
        return MenuApiBase.GetTree();
    }
    
    // GetPage(_query: Pagination): Promise<IServcerReturn<Role>> {
    //     debugger
    //     return RoleserviceBase.GetUserPage(_query);
    // };

}
