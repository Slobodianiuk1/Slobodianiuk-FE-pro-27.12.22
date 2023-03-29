export interface IApiProps {
    id: number
}
 export interface IReturnPost extends  IApiProps{
    userId: number;
    title:  string;
    body:   string;
}