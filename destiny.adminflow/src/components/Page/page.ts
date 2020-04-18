import { Component, Vue, Prop } from "vue-property-decorator";
import { PageComponentData } from "@/core/domain/dto/pagecomponent/Pagecomponent"

@Component({
    name: "page",
})
export default class Page extends Vue {
    private page: PageComponentData = new PageComponentData();
}