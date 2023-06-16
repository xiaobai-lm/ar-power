export interface UserData{
    name: string,
    highPressure: {
        title: string;
        value?: string | number;
        span:number
        children:{
            name:string
        }[]
    }[]
}


