import { Component, Mixins, Vue } from "vue-property-decorator";
import { RoleAddDto } from "@/core/domain/dto/roledto/RoleDto"
import { MainManager } from "@/core/iocmanager/main-manager"
import { Guid } from "guid-typescript";

@Component({
    name: "roleadd",
})
export default class Roleadd extends Mixins() {
    private Roleadd: RoleAddDto = new RoleAddDto;
    private Isshow: boolean = false;
    private SuccessCallback: any;
    private TreeData: any = [];
    private Isedit: boolean = false;
    private ruleValidate: any = {
        Name: [
            { required: true, message: '请输入角色名称', trigger: 'blur' }
        ],
    };
    public cancel() {
        this.Isshow = false;
    }
    /**
     * 添加角色弹框
     * @param _callback 
     */
    public async ShowWindow(_callback: (res: boolean) => void) {
        let param={
            roleid:Guid.EMPTY
        }
        let data = (await MainManager.Instance().MenuService.GetTree(param)).Data;
        this.TreeData = data;
        this.Roleadd.Description = "";
        this.Roleadd.IsAdmin = false;
        this.Roleadd.Name = "";
        this.Roleadd.NormalizedName = "";
        this.Roleadd.Code = "";
        this.SuccessCallback = _callback;
        this.Isshow = true;
    }
    public async UpdateShowWindow(row: any, _callback: (res: boolean) => void) {
        let param={
            roleid:row.Id
        }
        let data = (await MainManager.Instance().MenuService.GetTree(param)).Data;

        debugger
        this.TreeData = data;
        this.Isedit = true;
        this.Roleadd.Description = row.Description;
        this.Roleadd.IsAdmin = row.IsAdmin;
        this.Roleadd.Name = row.Name;
        this.Roleadd.NormalizedName = row.NormalizedName;
        this.Roleadd.Code = row.Code;
        this.Roleadd.Id = row.Id;
        this.SuccessCallback = _callback;
        this.Isshow = true;
    }
    /**
     * 保存角色
     */
    private async Roleaddservice() {
        (this.$refs as any).Roleadd.validate(async (valid: any) => {
            if (valid) {
                /**
                 * 获取到所有选中的节点ID
                 */
                let menuids = (this.$refs as any).Menu.getCheckedAndIndeterminateNodes();
                let menuarr: any[] = [];
                menuids.forEach((element: any) => {
                    menuarr.push(element.Id);
                });
                this.Roleadd.menuIds = menuarr;
                /**
                 * 判断是否是编辑
                 *  
                 **/
                if (this.Isedit) {
                    let result = await MainManager.Instance().RoleService.UpdateRole(this.Roleadd);
                    if(result.Success)
                    {
                        this.SuccessCallback(result.Success);
                        this.Isshow = false;
                        
                        this.$Message.success({
                            content: result.Message,
                            duration: 5,
                            closable: true
                        });
                    }
                    else
                    {
                        this.$Message.error({
                            content: result.Message,
                            duration: 5,
                            closable: true
                        });
                    }
                }
                /**
                 * 新增
                 */
                else {
                    let result = await MainManager.Instance().RoleService.AddRole(this.Roleadd);
                    if (result.Success) {
                        this.SuccessCallback(result.Success);
                        this.Isshow = false;
                        this.$Message.success(result.Message);
                    }
                    else {
                        this.$Message.error(result.Message);
                    }
                }
            }
        })
    }
}