import { Component, Mixins, Vue } from "vue-property-decorator";
import { RoleAddDto } from "@/core/domain/dto/roledto/RoleDto"
import { MainManager } from "@/core/iocmanager/main-manager"
@Component({
    name: "roleadd",
})
export default class Roleadd extends Mixins() {
    private Roleadd: RoleAddDto = new RoleAddDto;
    private Isshow: boolean = false;
    private SuccessCallback: any;
    private data4: any = [];
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
        let data = (await MainManager.Instance().MenuService.GetTree()).Data;
        this.data4 = data;
        this.Roleadd.Description = "";
        this.Roleadd.IsAdmin = false;
        this.Roleadd.Name = "";
        this.Roleadd.NormalizedName = "";
        this.Roleadd.Code = "";
        this.SuccessCallback = _callback;
        this.Isshow = true;
    }
    /**
     * 保存新增角色
     */
    public async Roleaddservice() {
        (this.$refs as any).Roleadd.validate(async (valid: any) => {
            if (valid) {
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
        })
    }
}