import { Component, Vue, Prop, Ref, Emit } from "vue-property-decorator";
import { Pagination, OrderCondition, SortDirection } from '@/core/domain/dto/pagequerydto/querydto.ts'
import { PaginationHandle } from "@/core/domain/dto/pagecomponent/Pagecomponent"
import { MainManager } from "@/core/iocmanager/main-manager"
import { UserTable } from "@/core/domain/dto/userdto/UserDto"
import PageCom from "@/components/Page/page.vue"
import Page from "@/components/Page/page"

import requsest from '@/utils/request.ts'
import { UserApiInfo } from '@/core/apiconfig/ApiRouter';
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
    private selections: [] = [];
    private isShow = false;
    public loading: boolean = true;
    private Pagination: PaginationHandle = new PaginationHandle();
    @Ref("page")
    private page!: Page;
    private Total: number = 0;

    private formItem: any = {
        Id: "",
        UserName: "",
        NickName: "",
        PasswordHash: "",
    };

    private columns = [
        {
            type: 'selection',
            width: 60,
            align: 'center'
        },
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
        // lat 
        this.getUser(this.Pagination)
    }
    ///获取数据{//在方法参数内接受子组件传递过来的参数}
    @Emit()
    private async getUser(_Paginationhan: PaginationHandle) {
        this.query.PageIndex = _Paginationhan.Pagination.PageIndex;
        this.query.PageSize = _Paginationhan.Pagination.PageRow;
        // this.query.OrderConditions = [
        //     { SortDirection: SortDirection.Ascending, SortField: "Id" },
        //     { SortDirection: SortDirection.Descending, SortField: "Name" }
        // ]
        let data = (await MainManager.Instance().UserService.GetPage(this.query));
        this.TableData = data.Data;
        _Paginationhan.Pagination.Total = data.Total;
    }

    private addHandle(): void {
        // alert("dfdf");
        // this.visible111 = true;

        this.isShow = true;
        // this.getSingleSeletedRow(this.selections, function (id: string, row: any) {

        // });
    }

    private deleteHandle(): void {

        this.getSingleSeletedRow(this.selections, function (id: string, row: any) {
            let param = Object.assign({ "id": id });
            requsest.delete(UserApiInfo.DeleteUser, param).then((response: any) => {



            }).catch((error: any) => {

            });
        });

    }

    private cancel(): void {


    }

    private selectionChange(selection: any): void {
        this.selections = selection;

    }

    private getSingleSeletedRow(selection: [], callback: any, key?: string): void {
        if (selection == null || selection == undefined || selection.length === 0) {

            this.$Message.info('请选择中数据!!');
            return;
        }

        if (selection.length > 1) {
            this.$Message.info(`已选${selection.length},条选数据，请选择一条数据！！`);
            return;
        }
        let newSelection: Array<any> = selection as [];

        //let obj = newSelection.filter(o => o == key)[0];
        let fun = function () {

            if (callback) {

                if (typeof (key) == "undefined" || undefined || null) {
                    key = "Id";

                }
                callback(newSelection[0][key], newSelection[0]);
            }

        };

        fun();

    }

    private handleSubmit(): void {

    }
}