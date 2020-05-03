import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import { FilterInfo, FilterItem } from '@/core/domain/dto/pagequerydto/FilterInfoDto';
@Component({
    name: "search",
})

export default class Search extends Vue {
    @Prop()
    filters: any

    private getFilterInfo(): Array<FilterInfo> {
        let filterInfo: Array<FilterInfo> = new Array<FilterInfo>();
        let $this = this;
        const $model: any = $this.$attrs.model;
        if (!$model && !this.filters) {

            return filterInfo;
        };

        Object.keys($this.filters).forEach(function (key) {

            let item = $this.filters[key] as FilterItem;
            let value = $model[key];
            if (value !== "") {
                if (value !== null) {

                    if (value !== undefined) {
                        filterInfo.push(new FilterInfo(key, value, item.Operator, item.Connect));
                    }
                }


            }

        });

        return filterInfo;


    }

    private resetFilter(): void {
        debugger;
        let $this = this;
        let $model: any = $this.$attrs.model;
        for (var model in $model) {
            $model[model] = "";
        }
    }


}