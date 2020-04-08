import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";
@Component({
    name:"",
    components:{
        HelloWorld
    }
})
export default class Test extends Vue {
    private mst: string = "12451212";
    private mounted() {
        console.log(this.mst)
    }
}