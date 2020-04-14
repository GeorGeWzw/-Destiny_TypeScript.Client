///声明IOC唯一值
const IocTypes = {
    RoleService:Symbol("RoleService"),
    MainService: Symbol("MainService"),
    UserService: Symbol("UserService")
}
export {IocTypes}