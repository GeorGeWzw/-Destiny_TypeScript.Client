import {Component, Vue} from "vue-property-decorator";
import RoleserviceBase from '@/core/data-source/requestapi/roleapi/rolerequestApi.ts'
import {Pagination} from '@/core/domain/dto/pagequerydto/querydto.ts'
import {MainManager} from "@/core/iocmanager/main-manager"
@Component({
    name:"user",
})
export default class User extends Vue{
    private query:Pagination=new Pagination();
    private created(){
        this.getUser()
    }
    ///获取数据
    private async getUser()
    {
        debugger
        //let sa= MainManager.Instance().RoleService;
        let data= await MainManager.Instance().RoleService.GetUserPage(this.query)
    }
}