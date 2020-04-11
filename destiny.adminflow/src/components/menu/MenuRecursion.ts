import {Component, Vue,Prop} from "vue-property-decorator";
@Component({
    name:"MenuRecursion",
})
export default class MenuRecursion extends Vue{
    @Prop()
    private item!: {type:Object,required: true};
}