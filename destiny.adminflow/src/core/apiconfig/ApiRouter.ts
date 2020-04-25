//所有的API接口存放文件，每个业务模块顶定义一个const
export const RoleApiInfo = {
    GetRolePage: "api/Role/Get",
    AddRole: "api/Role/Create",
    EditRole: "",
    DeleteRole: "",
    SelectRole: "api/Role/GetRoleSelectListAsync"
}

//所有的API接口存放文件，每个业务模块顶定义一个const
export const UserApiInfo = {
    GetPageUser: "api/User/GetUserPageAsync",
    AddOrUpdate: "api/User/AddOrUpdateAsync",
    EditUser: "",
    DeleteUser: "api/User/DeleteAsync",
    LoadUser: "api/User/LoadAsync",
}