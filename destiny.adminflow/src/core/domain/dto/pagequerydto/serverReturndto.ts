//返回分页数据
export interface IServcerReturn<T>
{
    success: boolean;
    total: number;
    data: T;
    message: string;
}
