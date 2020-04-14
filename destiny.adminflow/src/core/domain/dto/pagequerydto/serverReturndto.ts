//返回分页数据
export interface IServcerReturn<T>
{
    Success: boolean;
    Total: number;
    Data: T;
    Message: string;
}
