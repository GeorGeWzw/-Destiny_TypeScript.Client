import { Component, Vue, Prop } from "vue-property-decorator";
import { Pagination, PageParameters, OrderCondition, SortDirection } from '@/core/domain/dto/pagequerydto/querydto.ts'
import { MainManager } from "@/core/iocmanager/main-manager"
import { UserTable } from "@/core/domain/dto/userdto/UserDto"
// import PageCom from "@/components/Page/page.vue"
// import { PageComponentData } from "@/core/domain/dto/pagecomponent/Pagecomponent"

@Component({
    name: "user",
    // components: {
    //     PageCom
    // }
})
export default class User extends Vue {
    private query: Pagination = new Pagination();
    private TableData: UserTable[] = [];
    private pageSize: number = 1;
    // private page: PageComponentData = new PageComponentData();
    private pgeIndex: number = 1;

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


    private created() {

    }
    private mounted() {
        //let page = new PageParameters();

        // this.query.PageParameters = page;

        this.getUser()
    }
    ///获取数据
    private async getUser() {


        let data = (await MainManager.Instance().UserService.GetPage(this.query));
        this.TableData = data.Data;
        this.Total = data.Total;
    }

    private async change(page: number): Promise<void> {
        this.pgeIndex = page;
        this.query.PageParameters.PageIndex = this.pgeIndex;
        await this.getUser();
        console.log(page);
    }
}