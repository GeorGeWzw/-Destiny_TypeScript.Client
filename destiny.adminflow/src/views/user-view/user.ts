import {Component, Vue} from "vue-property-decorator";
import RoleserviceBase from '@/core/data-source/requestapi/roleapi/rolerequestApi.ts'
import {Pagination} from '@/core/domain/dto/pagequerydto/querydto.ts'
@Component({
    name:"user",
})
export default class User extends Vue{
    private query:Pagination=new Pagination();
    private created(){
        this.getUser()
    }
    private getUser()
    {
        RoleserviceBase.GetUserPage(this.query)
    }
}