import {Component,Vue,Ref,Mixins} from "vue-property-decorator";
import {PaginationHandle} from "@/core/domain/dto/pagecomponent/Pagecomponent";
import {Pagination} from "@/core/domain/dto/pagequerydto/querydto.ts";
import {MenuPageDto} from "@/core/domain/dto/menudto/MenuResultDto"
import { MainManager } from '@/core/iocmanager/main-manager';
@Component({
    name:"Menus",
})
export default class Menu extends Mixins(){
    private Pagination: PaginationHandle = new PaginationHandle();
    private query:Pagination = new Pagination();
    private Maxheight:number = 980;
    private TableMaxheight:number = 950;
    private MenuTable : MenuPageDto [] =[];
    private total: number = 0;
    private colums = [
        {
            type:"selection",
            width:60,
            align:"center",
            minWidth:120,
        },
        {
            title:"排序",
            key:"Sort",
            minWidth:120,
        },
        {
            title:"菜单名称",
            key:"name",
            minWidth:120,
        },
        {
            title:"组件地址",
            key:"RouterPath",
            minWidth:120,
        },
        {
            title:"菜单图标",
            key:"Iocn",
            minWidth:120,
        },
        {
            title:"深度",
            key:"Depth",
            minWidth:120,
        },
    ];

    private mounted()
    {
        var h=window.innerHeight-300;
        this.TableMaxheight = h;
        this.GetPage(this.Pagination);
    }

    private async GetPage(_MenuData:PaginationHandle){
        this.query.PageIndex = 1;
        this.query.PageSize = 15;
        let data = await MainManager.Instance().MenuService.GetData();
        this.MenuTable=data.ItemList
        this.total=data.Total;
    }
}