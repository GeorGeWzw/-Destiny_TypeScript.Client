import { Component, Vue} from "vue-property-decorator";
import Menuleft from "@/components/menu/MenuTab.vue"
@Component({
        name:"layout",
        components:{
            Menuleft
        }
})
export default class TStest extends Vue{
    private theme2: string ="dark"
    private created(){
        console.log(124512415)
    }
}