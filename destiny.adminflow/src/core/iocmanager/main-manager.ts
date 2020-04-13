import container from "@/core/iocconfig/inversify.config"
import {IocTypes} from "@/core/iocconfig/ioc-types"
import {MainService} from "./main-services"
import {IRoleService} from "@/core/domain/services/roleservice/IRoleService"
//创建主入口
export class MainManager{
    private static s_instance:MainManager;
    //实例化主入口
    public static Instance():MainManager{
        debugger
        if(MainManager.s_instance===null|| MainManager.s_instance===undefined)
        {
            MainManager.s_instance=new MainManager();
        }
        return MainManager.s_instance;
    }
    public get RoleService():IRoleService{
        debugger
        return this.services.RoleServices;
    }
    //#endregion
  // 主入口服务
  private services: MainService;
  constructor(){
      this.services=container.get<MainService>(IocTypes.MainService)
  }
}