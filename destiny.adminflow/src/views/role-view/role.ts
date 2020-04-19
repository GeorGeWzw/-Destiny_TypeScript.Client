import {Component, Vue, Ref, Mixins} from "vue-property-decorator";
import {Pagination} from '@/core/domain/dto/pagequerydto/querydto.ts'
import {MainManager} from "@/core/iocmanager/main-manager"
import RoleAddCom from "./roleadd.vue"
import Roleadd from "@/views/role-view/roleadd"

@Component({
    name:"role",
    components:{
        RoleAddCom
    }
})
export default class Role extends Mixins(){
    private query:Pagination=new Pagination();
    @Ref("RoleAddInfo")
    private RoleAddInfo!:Roleadd; 
    /*
        添加按钮
    */
    private AddRole()
    {
        this.RoleAddInfo.ShowWindow((res:boolean)=>{
            if(res)
            {
                // this.get();
            }
        })
    }
}