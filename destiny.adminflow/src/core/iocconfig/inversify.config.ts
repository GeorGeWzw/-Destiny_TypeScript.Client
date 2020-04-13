import {Container } from "inversify" //挂载前端IOC容器
import {IRoleService } from "@/core/domain/services/roleservice/IRoleService"
import RoleService from  "@/core/domain/services/roleservice/RoleService"
import {IocTypes} from "./ioc-types"
import {MainService} from "@/core/iocmanager/main-services"

const container=new Container();//创建一个根容器


container.bind<MainService>(IocTypes.MainService).to(MainService);
container.bind<IRoleService>(IocTypes.RoleService).to(RoleService);

export default container;//导出