import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import { PaginationHandle } from "@/core/domain/dto/pagecomponent/Pagecomponent"
@Component({
    name: "page",
})
export default class Page extends Vue {
    @Prop()
    total!:number;
    // pageref!:
    public Paginationhan: PaginationHandle = new PaginationHandle();
    private mounted(){
        this.$emit("pageref", this.Paginationhan)
    }
    //修改每页行数时触发
    private UpdatePageRow(Row: any) {
        console.log("Row", Row);
        this.Paginationhan.Pagination.PageRow = Row;
        this.$emit("pageref", this.Paginationhan)
    }
    //修改当前页时触发
    private ClickCurrentPage(index: any) {
        console.log("index", index);
        this.Paginationhan.Pagination.PageIndex = index;
        this.$emit("pageref", this.Paginationhan)
    }
}