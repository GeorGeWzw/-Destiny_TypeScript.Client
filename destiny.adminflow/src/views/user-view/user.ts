import { Component, Vue, Prop, Ref, Emit } from "vue-property-decorator";
import { Pagination, OrderCondition, SortDirection } from '@/core/domain/dto/pagequerydto/querydto.ts'
import { PaginationHandle } from "@/core/domain/dto/pagecomponent/Pagecomponent"
import { MainManager } from "@/core/iocmanager/main-manager"
import { UserTable } from "@/core/domain/dto/userdto/UserDto"
import PageCom from "@/components/Page/page.vue"
import Page from "@/components/Page/page"

import requsest from '@/utils/request.ts'
import { UserApiInfo } from '@/core/apiconfig/ApiRouter';
import { Sex } from '@/core/model/model';
import { AjaxResult } from '@/core/domain/dto/operationdto/AjaxResult';
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
    public confirmLoading: boolean = false;
    private Pagination: PaginationHandle = new PaginationHandle();
    @Ref("page")
    private page!: Page;
    private Total: number = 0;

    private formItem: any = {

        UserName: "",
        NickName: "",
        PasswordHash: "",
        Sex: 0,
        Description: "",
        IsSystem: false,
        IsAdd: true,
    };

    private sexList: any = [{
        value: Sex.Man,
        label: '男'
    }, {
        value: Sex.Female,
        label: '女'
    }];


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
        ,
        {
            title: '修改时间',
            key: 'LastModifierTime',

        }
        ,
        {
            title: '描述',
            key: 'Description',

        }
    ];

    private delteLoading: boolean = false;
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

        let $this = this;
        this.getSingleSeletedRow(this.selections, function (id: string, row: any) {

        });
    }

    private deleteHandle(): void {
        let $this = this;
        $this.delteLoading = true;
        this.getSingleSeletedRow(this.selections, function (id: string, row: any) {

            requsest.delete<any, AjaxResult>(UserApiInfo.DeleteUser, {
                params: {
                    id: id,
                }
            }).then((result: AjaxResult) => {

                $this.delteLoading = false;
                $this.$Message.info(result.Message);
                $this.getUser($this.Pagination);

            }).catch((error: AjaxResult) => {
                $this.$Message.info(error.Message);
            });
        });

    }

    private cancel(): void {

        this.isShow = false;
        this.formItem = [];
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


    private updateHandle(): void {
        let $this = this;
        this.getSingleSeletedRow(this.selections, function (id: string, row: any) {

            requsest.get(UserApiInfo.LoadUser, {
                params: {
                    id: id
                }
            }).then((response: any) => {
                let result = response as AjaxResult;
                $this.isShow = true;
                $this.formItem = result.Data;
                $this.formItem.IsAdd = false;

            }).catch((error: any) => {


            });
        });

    }

    private async handleSubmit() {
        let pa = Object.assign(this.formItem);
        this.confirmLoading = true;
        requsest.post(UserApiInfo.AddUser, pa).then(async (response: any) => {

            let result = response as AjaxResult;
            this.$Message.info(result.Message);
            if (result.Success) {

                this.isShow = false;
                await this.getUser(this.Pagination);
            }
            this.confirmLoading = false;
        }).catch((error: any) => {

        });
        // console.log(Object.assign(this.formItem));
    }
}