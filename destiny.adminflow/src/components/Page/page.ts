import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import { PaginationHandle } from "@/core/domain/dto/pagecomponent/Pagecomponent"
@Component({
    name: "page",
})
export default class Page extends Vue {
    public Paginationhan: PaginationHandle = new PaginationHandle();    
    //修改每页行数时触发
    private UpdatePageRow(Row: any)
    {
        this.Paginationhan.Pagination.PageRow=Row;
        this.$emit("pageref",this.Paginationhan)
    }
    //修改当前页时触发
    private ClickCurrentPage(index:any)
    {
        this.Paginationhan.Pagination.PageIndex=index;
        this.$emit("pageref",this.Paginationhan)
    }
}