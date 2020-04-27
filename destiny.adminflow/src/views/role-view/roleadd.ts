import { Component, Mixins,Vue} from "vue-property-decorator";
import { Pagination } from '@/core/domain/dto/pagequerydto/querydto.ts'
import { RoleAddDto } from "@/core/domain/dto/roledto/RoleDto"
import { MainManager } from "@/core/iocmanager/main-manager"
@Component({
    name: "roleadd",
})
export default class Roleadd extends Mixins() {
    private query: Pagination = new Pagination();
    private Roleadd: RoleAddDto = new RoleAddDto;
    private Isshow: boolean = false;
    private data4:any=[];
    private ruleValidate:any={
        name: [
            { required: true, message: '请输入角色名称', trigger: 'blur' }
        ],
    };
    public cancel() {
        this.Isshow=false;
    }
    /**
     * 添加角色弹框
     * @param _callback 
     */
    public async ShowWindow(_callback: (res: boolean) => void) {
        let data= (await MainManager.Instance().MenuService.GetTree()).Data;
        this.data4=data;
        this.Roleadd.description = "";
        this.Roleadd.isAdmin = false;
        this.Roleadd.name = "";
        this.Roleadd.normalizedName = "";
        this.Isshow = true;
    }
    /**
     * 保存新增角色
     */
    public async Roleaddservice()
    {
        (this.$refs as any).Roleadd.validate(async (valid: any) => {
            if (valid) {
                let result= await MainManager.Instance().RoleService.AddRole(this.Roleadd);
            }
        })
        console.log(this.Roleadd)
    }
}