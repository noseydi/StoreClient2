export interface IPagination<T> {
    count : number;
pageIndex : number;
pageSize : number;
result : T[];
}
