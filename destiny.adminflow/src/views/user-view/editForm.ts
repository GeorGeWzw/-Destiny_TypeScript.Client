import { Component, Mixins, Vue } from "vue-property-decorator";
import { Sex } from '@/core/model/model';
import requsest from '@/utils/request.ts'
import Util from '@/utils/util';
import { UserApiInfo, RoleApiInfo } from '@/core/apiconfig/ApiRouter';
import { AjaxResult } from '@/core/domain/dto/operationdto/AjaxResult';
@Component({
    name: "UserEditForm",

})

export default class UserEditForm extends Mixins()
{
    private isShow: boolean = false;
    public confirmLoading: boolean = false;
    private roleList = [{
        Value: "",
        Text: "",
    }];

    private callback: any;
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

    private ruleValidate: any = {
        UserName: [
            { required: true, message: '请输入登录名', trigger: 'blur' },
        ],
        NickName: [
            { required: true, message: '请输入用户昵称', trigger: 'blur' },

        ],
        PasswordHash: [
            { required: true, message: '请输入密码', trigger: 'blur' },

        ]
    };
    Util: any;

    private mounted() {
        this.getUserSelect();
    }

    public addHandle(_callback: any): void {

        this.isShow = true;
        this.formItem.RoleIds = "";
        this.formItem.IsAdd = true;
        this.formItem.UserName = "";
        this.formItem.NickName = "";
        this.formItem.Sex = Sex.Man;
        this.formItem.IsSystem = false;
        this.formItem.PasswordHash = "";
        this.formItem.Description = "";
        this.callback = _callback;
    }


    private cancel(): void {

        this.isShow = false;
        this.formItem.RoleIds = "";
        (this.$refs["formItem"] as any).resetFields();
        // this.formItem = [];
    }




    public LoadUser(id: string, _callback: any) {

        let $this = this;
        requsest.get(UserApiInfo.LoadUser, {
            params: {
                id: id
            }
        }).then((response: any) => {
            let result = response as AjaxResult;

            $this.isShow = true;
            $this.formItem = result.Data;
            $this.formItem.IsAdd = false;
            $this.callback = _callback;

        }).catch((error: any) => {


        });
    }



    private async handleSubmit() {

        let pa = Object.assign(this.formItem);
        this.confirmLoading = true;
        (this.$refs["formItem"] as any).validate((valid: any) => {

            if (valid) {
                requsest.post(UserApiInfo.AddOrUpdate, pa).then(async (response: any) => {

                    let result = response as AjaxResult;

                    if (result.Success) {

                        this.isShow = false;

                        this.$Message.info("保存用户成功!!");
                        this.callback();
                    } else {
                        this.$Message.info(result.Message);
                    }
                    this.confirmLoading = false;
                }).catch((error: any) => {
                    this.confirmLoading = false;
                });
            } else {
                this.confirmLoading = false;
            }

        });

        // console.log(Object.assign(this.formItem));
    }

    private getUserSelect() {

        requsest.get<any, AjaxResult>(RoleApiInfo.SelectRole).then((result) => {
            this.roleList = result.Data;

        }).catch((error) => {



        });
    }


}