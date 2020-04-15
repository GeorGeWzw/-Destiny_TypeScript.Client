export class Pagination {

    public PageParameters: PageParameters = new PageParameters();

    // public pageIndex:number=1;
    // public pageSize:number=15;
}

export interface IPageParameters {


    PageIndex: number;
    PageSize: number;
    OrderConditions: OrderCondition[];
}
export class PageParameters {

    // constructor(pageIndex: number = 1, pageSize = 10) {

    //     this.PageIndex = pageIndex;

    //     this.PageSize = pageSize;
    // }
    public PageIndex: number = 1;
    public PageSize: number = 10;
    public OrderConditions: OrderCondition[] = [];

}

export class OrderCondition {

    constructor() {

    }
    // constructor(sortField: string, sortDirection: SortDirection = SortDirection.Ascending) {
    //     this.SortField = sortField;
    //     this.SortDirection = sortDirection;

    // }
    // constructor(sortField: string, sortDirection: SortDirection = SortDirection.Ascending) {
    //     this.SortField = sortField;
    //     this.SortDirection = sortDirection;
    // }
    public SortDirection!: SortDirection;
    public SortField!: string;

}

export enum SortDirection {

    Ascending = 0,
    Descending = 1

}