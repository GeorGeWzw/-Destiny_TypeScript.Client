import {Component, Vue, Ref, Mixins} from "vue-property-decorator";
import {Pagination} from '@/core/domain/dto/pagequerydto/querydto.ts'
import {MainManager} from "@/core/iocmanager/main-manager"
import PageCom from "@/components/Page/page.vue"
import { FilterInfo, FilterItem, FilterOperator } from '@/core/domain/dto/pagequerydto/FilterInfoDto';
import { PaginationHandle } from '@/core/domain/dto/pagecomponent/Pagecomponent';
import Search from "@/components/Search/search.vue"
import Util from '@/utils/util.ts';




import RoleAddCom from "./roleadd.vue"
import Roleadd from "@/views/role-view/roleadd"
import {RolePageDto} from "@/core/domain/dto/roledto/RoleDto" 


@Component({
    name:"role",
    components:{
        RoleAddCom,
        PageCom,
        Search
    }
})
export default class Role extends Mixins(){
    private Pagination: PaginationHandle = new PaginationHandle();
    private query: Pagination = new Pagination();
    private Maxheight:number=980;
    private TableMaxheight:number=950;
    private searchItem: any = {



    }
    private formItem: any = {

        Name: "",
    };
    private filterInfo: any = {
        Name: new FilterItem()
    };




    @Ref("RoleAddInfo")
    private RoleAddInfo!:Roleadd; 
    private RoleTable:RolePageDto []=[];
    private total: number = 0;
    private selections: [] = [];
    private columns = [
        {
            type: 'selection',
            width: 60,
            align: 'center',
            minWidth: 120,
        },
        {
            title: '角色名称',
            key: 'Name',
            minWidth: 120,
        },
        {
            title: '标准化角色名称',
            key: 'NormalizedName',
            minWidth: 120,
        },
        {
            title: '是否管理员',
            key: 'IsAdmin',
            align: "center",
            maxWidth: 120,
            minWidth: 120,
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
            minWidth: 120,
        },
        {
            title: '编码',
            key: 'Code',
            minWidth: 120,
        },
        {
            title: '版本标识',
            key: 'ConcurrencyStamp',
            minWidth: 120,
        }
    ];
    private mounted()
    {
        var h=window.innerHeight-450;
        this.TableMaxheight=h;
        this.GetPage(this.Pagination);
    }
    /**
     * 选择表格中的数据
     */
    private selectionChange(selection: any):void
    {
        this.selections=selection;
    }

    /*
        添加按钮
    */
    private AddRole()
    {
        this.RoleAddInfo.ShowWindow((res:boolean)=>{
            if(res)
            {
                this.GetPage(this.Pagination);
            }
        })
    }
    /**
     * 分页查询
     */
    private async GetPage(_Paginationhan: PaginationHandle)
    {
        this.query.PageIndex=_Paginationhan.Pagination.PageIndex;
        this.query.PageSize=_Paginationhan.Pagination.PageRow;
        let data= (await MainManager.Instance().RoleService.PageRole(this.query));
        this.RoleTable=data.ItemList;
        this.total=data.Total;
    }
    private UpdateRole():void
    {
        let _this=this;
        Util.getSingleSeletedRow(this.selections,function(id:string,row:any){
            _this.RoleAddInfo.UpdateShowWindow(row,(res:boolean)=>{
                if(res)
                {
                    _this.GetPage(_this.Pagination);
                }
            })
        })
    }
    private async search(value: any) {
        let filterInfoArr: FilterInfo[] = (this.$refs["formCustom"] as any).getFilterInfo();
        this.query.Filters = filterInfoArr;
        await this.GetPage(this.Pagination);

    }
    /**
     * 删除角色
     */
    private async DeleteRole()
    {
        var _this=this;
        Util.getSingleSeletedRow(this.selections,async function(id:string){
            let param={
                id:id
            }
            let result= await MainManager.Instance().RoleService.DeleteRole(param);
            if(result.Success)
            {
                _this.GetPage(_this.Pagination);
                _this.$Message.success({
                    content: result.Message,
                    duration: 5,
                    closable: true
                });
            }
            else
            {
                _this.$Message.error({
                    content: result.Message,
                    duration: 5,
                    closable: true
                });
            }
        })
    }
}