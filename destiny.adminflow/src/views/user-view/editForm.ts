import { Component, Mixins, Vue } from "vue-property-decorator";
import { Sex } from '@/core/model/model';
import requsest from '@/utils/request.ts'
import Util from '@/utils/util';

import { AjaxResult } from '@/core/domain/dto/operationdto/AjaxResult';
import { MainManager } from '@/core/iocmanager/main-manager';
import { UserApiInfo, RoleApiInfo } from '@/core/apiconfig/ApiRouter';
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

    private async mounted() {
        await this.getSelectRole();
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




    public async LoadUser(id: string, _callback: any) {
        let param = {
            id: id,
        }
        let data = await MainManager.Instance().UserService.LoadUser(param);
        if (data.Success) {
            this.isShow = true;
            this.formItem = data.Data;
            this.formItem.IsAdd = false;
            this.callback = _callback;
        }
    }



    private async handleSubmit() {

        let pa = Object.assign(this.formItem);
        this.confirmLoading = true;
        (this.$refs["formItem"] as any).validate(async (valid: any) => {

            if (valid) {
                await MainManager.Instance().UserService.FormSubmit(pa).then(async (result: AjaxResult) => {

                    if (result.Success) {
                        this.isShow = false;
                        this.$Message.info("保存用户成功!!");
                        await this.callback();
                    } else {
                        this.$Message.info(result.Message);
                    }
                    this.confirmLoading = false;

                }).catch((err: AjaxResult) => {

                    this.$Message.info(err.Message);
                    this.confirmLoading = false;

                });

            } else {
                this.confirmLoading = false;
            }

        });

        // console.log(Object.assign(this.formItem));
    }

    private async getSelectRole() {

        let data = (await MainManager.Instance().UserService.GetSelectRole()).Data;
        this.roleList = data;
    }


}