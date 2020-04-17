import { Component, Vue, Prop } from "vue-property-decorator";
import { Pagination, PageParameters, OrderCondition, SortDirection } from '@/core/domain/dto/pagequerydto/querydto.ts'
import { MainManager } from "@/core/iocmanager/main-manager"
import { UserTable } from "@/core/domain/dto/userdto/UserDto"
import PageCom from "@/components/Page/page.vue"
import { PageComponentData } from "@/core/domain/dto/pagecomponent/Pagecomponent"

@Component({
    name: "user",
    components: {
        PageCom
    }
})
export default class User extends Vue {
    private query: Pagination = new Pagination();
    private TableData: UserTable[] = [];
    private page: PageComponentData = new PageComponentData();
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
        let page = new PageParameters();

        this.query.PageParameters = page;


        let data = (await MainManager.Instance().UserService.GetPage(this.query));
        this.TableData = data.Data;
        this.Total = data.Total;


        console.log(data);
        // console.log(data);
        //this.TableData = data;
        //console.log();
    }
}