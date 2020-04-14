import {Container } from "inversify" //挂载前端IOC容器
import {IocTypes} from "./ioc-types"
import {MainService} from "@/core/iocmanager/main-services"

import {IRoleService } from "@/core/domain/services/roleservice/IRoleService"
import RoleService from  "@/core/domain/services/roleservice/RoleService"

import {IUserService } from "@/core/domain/services/userservices/IUserservice"
import UserService from  "@/core/domain/services/userservices/Userservice"


const container=new Container();//创建一个根容器


container.bind<MainService>(IocTypes.MainService).to(MainService);
container.bind<IRoleService>(IocTypes.RoleService).to(RoleService);
container.bind<IUserService>(IocTypes.UserService).to(UserService);

export default container;//导出