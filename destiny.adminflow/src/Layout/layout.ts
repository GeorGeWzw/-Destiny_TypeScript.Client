import { Component,Vue} from "vue-property-decorator";
import Menuleft from "@/components/menu/MenuTab.vue"
@Component({
        name:"layout",
        components:{
            Menuleft
        }
})
export default class Layout extends Vue{
    private created()
    {
        let getindex= this.$store.state.TagList.findIndex((x: { path: string; }) => x.path ==this.$route.path);
        let model = {
            lable: "",
            path: "",
            IsColse: true
        }
        if(getindex<0)
        {
            model.lable=this.$route.meta.title;
            model.path=this.$route.path;
            this.$store.commit("Savetag", model)
        }
    }
    private async Coldses(event: any, name: any)
    {
        // console.log(event,name)
    }
}