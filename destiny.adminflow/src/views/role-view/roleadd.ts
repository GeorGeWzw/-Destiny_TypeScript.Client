import {Component, Vue} from "vue-property-decorator";
import {Pagination} from '@/core/domain/dto/pagequerydto/querydto.ts'
import {RoleAddDto} from "@/core/domain/dto/roledto/RoleDto"
@Component({
    name:"roleadd",
})
export default class User extends Vue{
    private query:Pagination=new Pagination();
    private Roleadd:RoleAddDto=new RoleAddDto;
    private created(){
        
    }
    private mounted()
    {
        //this.getUser()
    }
    ///获取数据
    private async get()
    {
    }
}