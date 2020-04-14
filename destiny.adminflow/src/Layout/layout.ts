import { Component,Vue} from "vue-property-decorator";
import Menuleft from "@/components/menu/MenuTab.vue"
@Component({
        name:"layout",
        components:{
            Menuleft
        }
})
export default class Layout extends Vue{
    private async Coldses(event: any, name: any)
    {
        debugger
        console.log(event,name)
    }
}