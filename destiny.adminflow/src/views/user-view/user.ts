import { Component, Vue, Prop, Ref, Emit } from "vue-property-decorator";
import { Pagination, PageParameters, OrderCondition, SortDirection } from '@/core/domain/dto/pagequerydto/querydto.ts'
import { PaginationHandle } from "@/core/domain/dto/pagecomponent/Pagecomponent"
import { MainManager } from "@/core/iocmanager/main-manager"
import { UserTable } from "@/core/domain/dto/userdto/UserDto"
import PageCom from "@/components/Page/page.vue"
import Page from "@/components/Page/page"


@Component({
    name: "user",
    components: {
        PageCom
    }
})
export default class User extends Vue {
    private query: Pagination = new Pagination();
    private TableData: UserTable[] = [];
    private pageSize: number = 1;
    private pgeIndex: number = 1;
    private Pagination :PaginationHandle=new PaginationHandle();
    @Ref("page")
    private page!:Page;
    private Total: number = 0;
    private columns = [
        {
            title: '用户名',
            key: 'UserName',

        },
        {
            title: '昵称',
            key: 'NickName',

        }
        ,
        {
            title: '创建时间',
            key: 'CreatedTime',

        }
    ];
    private mounted() {
        this.getUser(this.Pagination)
    }
    ///获取数据{//在方法参数内接受子组件传递过来的参数}
    @Emit()
    private async getUser(_Paginationhan:PaginationHandle) {
        _Paginationhan.Pagination.Total=850;
    }
}