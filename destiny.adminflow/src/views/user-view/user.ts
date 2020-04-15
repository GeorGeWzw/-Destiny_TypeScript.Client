import { Component, Vue, Prop } from "vue-property-decorator";
import { Pagination, PageParameters, OrderCondition, SortDirection } from '@/core/domain/dto/pagequerydto/querydto.ts'
import { MainManager } from "@/core/iocmanager/main-manager"
import { UserTable } from "@/core/domain/dto/userdto/UserDto"
@Component({
    name: "user",
})
export default class User extends Vue {
    private query: Pagination = new Pagination();
    @Prop() private TableData!: UserTable;
    @Prop() private columns = [
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
        this.getUser()
    }
    ///获取数据
    private async getUser() {

        // let SO: OrderCondition = {
        //     SortDirection: SortDirection.Ascending,
        //     SortField:""

        // }



        // let SO1: OrderCondition = new OrderCondition();
        // SO1.SortDirection

        // let orderCondition: OrderCondition[] = [SO];
        // orderCondition.push();
        // let page = new PageParameters();

        // this.query.PageParameters = page;

        console.log(this.query);
        let data = (await MainManager.Instance().UserService.GetPage(this.query)).Data;
        this.TableData = data;
        //console.log();
    }
}