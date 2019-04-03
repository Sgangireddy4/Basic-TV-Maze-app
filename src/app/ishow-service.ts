import { IShowDetails } from './ishow-details';
import { Observable } from "rxjs";

export interface IShowService{
    getSingleShowDetails(search: string): Observable<IShowDetails>
    getShowDetails(showname:string): Observable<IShowDetails[]>

}