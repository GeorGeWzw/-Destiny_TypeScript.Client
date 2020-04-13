import { injectable, inject } from "inversify";
import {IocTypes} from "@/core/iocconfig/ioc-types"
import "reflect-metadata"
import {IRoleService} from "@/core/domain/services/roleservice/IRoleService"
/**
 * 工程主入口服务
 */
@injectable()
export class MainService{

    private roleService:IRoleService;//角色私有变量定义

    //角色公开返回私有标量方法
    public get RoleServices():IRoleService{
        return this.roleService;

    }
    constructor(@inject(IocTypes.RoleService)_roleService:IRoleService)
    {
        this.roleService=_roleService
    }

}