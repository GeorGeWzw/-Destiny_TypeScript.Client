import {Component, Vue} from "vue-property-decorator";
@Component({
    name:"user",
})
export default class User extends Vue{
    private created(){
        console.log(2323423)
    }
}