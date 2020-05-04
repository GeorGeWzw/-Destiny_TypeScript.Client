import {Component, Vue, Ref, Mixins} from "vue-property-decorator";
import {Pagination} from '@/core/domain/dto/pagequerydto/querydto.ts'
import {MainManager} from "@/core/iocmanager/main-manager"
import PageCom from "@/components/Page/page.vue"
import Page from "@/components/Page/page"

import RoleAddCom from "./roleadd.vue"

import Roleadd from "@/views/role-view/roleadd"
import {RolePageDto} from "@/core/domain/dto/roledto/RolePageDto" 
import { PaginationHandle } from '@/core/domain/dto/pagecomponent/Pagecomponent';


@Component({
    name:"role",
    components:{
        RoleAddCom,
        PageCom
    }
})
export default class Role extends Mixins(){
    private Pagination: PaginationHandle = new PaginationHandle();
    private query: Pagination = new Pagination();
    private Maxheight:number=980;
    private TableMaxheight:number=750;
    @Ref("RoleAddInfo")
    private RoleAddInfo!:Roleadd; 
    private RoleTable:RolePageDto []=[];
    private total: number = 0;
    private columns = [
        {
            type: 'selection',
            width: 60,
            align: 'center'
        },
        {
            title: '角色名称',
            key: 'Name',
        },
        {
            title: '标准化角色名称',
            key: 'NormalizedName',
        },
        {
            title: '是否管理员',
            key: 'IsAdmin',
            align: "center",
            maxWidth: 120,
            render: (h:any, params:any) => {
                var text = "";
                if (params.row.IsAdmin) {
                  text = "是";
                  return h("Tag", { props: { color: "blue" } }, text);
                }
                if (!params.row.IsAdmin) {
                  text = "否";
                  return h("Tag", { props: { color: "volcano" } }, text);
                }
              }
        },
        {
            title: '描述',
            key: 'Description',
        },
        {
            title: '编码',
            key: 'Code',
        },
        {
            title: '版本标识',
            key: 'ConcurrencyStamp',

        }
    ];
    
    private mounted()
    {
        this.GetPage(this.Pagination);
    }

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
    /**
     * 分页查询
     */
    private async GetPage(_Paginationhan: PaginationHandle)
    {
        this.query.PageIndex=1;
        this.query.PageSize=10;
        let data= (await MainManager.Instance().RoleService.PageRole(this.query));
        this.RoleTable=data.ItemList;
        this.total=data.Total;
    }
}