import { Component, Vue, Prop, Ref, Emit, Watch } from "vue-property-decorator";
import { Pagination, OrderCondition, SortDirection } from '@/core/domain/dto/pagequerydto/querydto.ts'
import { PaginationHandle } from "@/core/domain/dto/pagecomponent/Pagecomponent"
import { MainManager } from "@/core/iocmanager/main-manager"
import { UserTable } from "@/core/domain/dto/userdto/UserDto"
import PageCom from "@/components/Page/page.vue"
import Page from "@/components/Page/page"

import Search from "@/components/Search/search.vue"
import requsest from '@/utils/request.ts'
import { UserApiInfo, RoleApiInfo } from '@/core/apiconfig/ApiRouter';
import { Sex } from '@/core/model/model';
import { AjaxResult } from '@/core/domain/dto/operationdto/AjaxResult';
import { FilterInfo, FilterItem, FilterOperator } from '@/core/domain/dto/pagequerydto/FilterInfoDto';
import UserEditForm from "@/views/user-view/EditForm"
import Util from '@/utils/util.ts';

import UserEdit from "@/views/user-view/editForm.vue"
@Component({
    name: "user",
    components: {
        PageCom,
        Search,
        UserEdit
    }
})
export default class User extends Vue {

    @Ref("UserEditInfo")
    private UserEditInfo!: UserEditForm;
    private query: Pagination = new Pagination();
    private TableData: UserTable[] = [];
    private pageSize: number = 1;
    private pgeIndex: number = 1;
    private selections: [] = [];


    private Pagination: PaginationHandle = new PaginationHandle();
    private total: number = 0;
    @Ref("page")
    private page!: Page;
    private Total: number = 0;




    private searchItem: any = {



    }


    private formItem: any = {

        UserName: "",
        NickName: "",
        PasswordHash: "",
        Sex: 0,
        Description: "",
        IsSystem: false,
        IsAdd: true,
        RoleIds: ""
    };

    private sexList: any = [{
        value: Sex.Man,
        label: '男'
    }, {
        value: Sex.Female,
        label: '女'
    }];


    private filterInfo: any = {

        UserName: new FilterItem(),
        NickName: new FilterItem()

    }
    private columns = [
        {
            type: 'selection',
            width: 60,
            align: 'center'
        },
        {
            title: '登录名',
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

        this.getUser(this.Pagination);
        // this.getUserSelect();
    }
    ///获取数据{//在方法参数内接受子组件传递过来的参数}
    @Emit()
    private async getUser(_Paginationhan: PaginationHandle) {
        this.query.PageIndex = _Paginationhan.Pagination.PageIndex;
        this.query.PageSize = _Paginationhan.Pagination.PageRow;
        let orderCondition: OrderCondition = new OrderCondition();
        orderCondition.SortDirection = SortDirection.Descending;
        orderCondition.SortField = "CreatedTime";
        this.query.OrderConditions.push(orderCondition);

        // this.query.OrderConditions = [
        //     { SortDirection: SortDirection.Ascending, SortField: "Id" },
        //     { SortDirection: SortDirection.Descending, SortField: "Name" }
        // ]
        let data = (await MainManager.Instance().UserService.GetPage(this.query));
        this.TableData = data.ItemList;
        this.total = data.Total;
        // _Paginationhan.Pagination.Total = 850;

    }


    private addHandle() {

        let $this = this;
        $this.UserEditInfo.addHandle(() => {
            $this.getUser($this.Pagination);
        });
    }

    private deleteHandle(): void {
        let $this = this;
        $this.delteLoading = true;

        Util.getSingleSeletedRow(this.selections, function (id: string, row: any) {

            requsest.delete<any, AjaxResult>(UserApiInfo.DeleteUser, {
                params: {
                    id: id,
                }
            }).then((result: AjaxResult) => {

                $this.delteLoading = false;
                if (result.Success) {

                    $this.$Message.info("删除用户成功!!");
                }
                else {
                    $this.$Message.info(result.Message);
                }

                $this.getUser($this.Pagination);

            }).catch((error: AjaxResult) => {
                $this.$Message.info(error.Message);
            });
        });

    }

    // private cancel(): void {

    //     this.isShow = false;
    //     this.formItem.RoleIds = "";
    //     (this.$refs["formItem"] as any).resetFields();
    //     // this.formItem = [];
    // }

    private selectionChange(selection: any): void {
        this.selections = selection;

    }



    private updateHandle(): void {
        let $this = this;
        Util.getSingleSeletedRow($this.selections, function (id: string, row: any) {
            $this.UserEditInfo.LoadUser(id, () => {

                $this.getUser($this.Pagination);
            });

        });

    }





    private async search(value: any) {
        let filterInfoArr: FilterInfo[] = (this.$refs["formCustom"] as any).getFilterInfo();
        this.query.Filters = filterInfoArr;
        await this.getUser(this.Pagination);

    }

}