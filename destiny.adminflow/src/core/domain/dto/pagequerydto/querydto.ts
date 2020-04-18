export class Pagination {

    public PageIndex: number = 1;
    public PageSize: number = 10;
    public OrderConditions: OrderCondition[] = [];
}
export class OrderCondition {
    public SortDirection!: SortDirection;
    public SortField!: string;
}
export enum SortDirection {

    Ascending = 0,
    Descending = 1
}