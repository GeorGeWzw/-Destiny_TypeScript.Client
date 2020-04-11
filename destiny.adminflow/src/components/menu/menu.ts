import {Component, Vue} from "vue-property-decorator";
import MenuRecursion from '@/components/menu/MenuRecursion.vue'
@Component({
    name:"menuleft",
    components:{
        MenuRecursion
    }
})
export default class MenuLeft extends Vue{
    private theme2: string ="dark"
    private MenuArr!: [];
    private created(){
        this.MenuArr=this.$router.options.routes[0].children
    }
    //点击左侧菜单事件
    private Openmenu(name: any)
    {
        this.$router.push({ name: name });
    }
}