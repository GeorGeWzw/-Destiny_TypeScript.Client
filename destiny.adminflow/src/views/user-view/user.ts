import {Component, Vue} from "vue-property-decorator";
import {Pagination} from '@/core/domain/dto/pagequerydto/querydto.ts'
import {MainManager} from "@/core/iocmanager/main-manager"
import {UserTable} from "@/core/domain/dto/userdto/UserDto"
@Component({
    name:"user",
})
export default class User extends Vue{
    private query:Pagination=new Pagination();
    private TableData!:UserTable;
    private created(){
        
    }
    private mounted()
    {
        // this.getUser()
    }
    ///获取数据
    private async getUser()
    {
        this.TableData = await (await MainManager.Instance().UserService.GetPage(this.query)).Data;
        console.log(this.TableData);
    }
}