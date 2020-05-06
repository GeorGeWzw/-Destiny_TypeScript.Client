import { Component, Vue } from "vue-property-decorator";
import MenuRecursion from '@/components/menu/MenuRecursion.vue'
import routes from "@/router/index"
@Component({
    name: "menuleft",
    components: {
        MenuRecursion
    }
})
export default class MenuLeft extends Vue {
    private theme2: string = "dark"
    private MenuArr!: [];
    private created() {
        this.MenuArr = (routes as any).options.routes[0].children
    }
    //点击左侧菜单事件
    private Openmenu(name: any) {
        let _this = this;
        let arr = this.MenuArr;
        let parentpath: string = "";
        let getindex = this.$store.state.TagList.findIndex((x: { path: string; }) => x.path == "/" + name);
        ergodic(arr)
        function ergodic(arr: any) {
            for (let index = 0; index < arr.length; index++) {
                const element = arr[index];
                if (name == element.path) {
                    let model = {
                        lable: "",
                        path: "",
                        IsColse: true
                    }
                    if (parentpath == "") {
                        model.lable = element.meta.title;
                        model.path = "/" + name;
                    }
                    else {
                        model.lable = element.meta.title;
                        model.path = parentpath + "/" + name;
                    }
                    let getindex = _this.$store.state.TagList.findIndex((x: { path: string; }) => x.path == model.path);
                    if (getindex < 0) {
                        _this.$store.commit("Savetag", model)
                        
                    }
                    if(model.path!=_this.$route.path)
                    {
                        _this.$router.push({ name: name });
                    }
                    break;
                }
                else {
                    if (arr[index].children != undefined) {
                        parentpath += "/"+arr[index].path;
                        if (arr[index].children.length > 0) {
                            ergodic(arr[index].children)
                        }
                        else {
                            continue;
                        }
                    }
                }
            }
        }
    }
}