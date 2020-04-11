import { Component, Vue } from "vue-property-decorator";
import RoleserviceBase from '@/core/data-source/requestapi/roleapi/rolerequestApi.ts'
import { Pagination } from '@/core/domain/dto/pagequerydto/querydto.ts'
import Roleservice from '@/core/domain/services/roleservice/RoleService';
@Component({
    name: "home",
})
export default class User extends Vue {
    private temp: Roleservice;
    constructor() {
        super();
        this.temp = new Roleservice();
    }

    private query: Pagination = new Pagination();
    private created() {
        this.getUser()
    }
    private getUser() {
        let data = this.temp.GetUserPage(this.query)
        console.log(data)
    }
}