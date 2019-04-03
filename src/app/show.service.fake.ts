import { IShowDetails } from './ishow-details';
import {Observable, of} from 'rxjs';
import { IShowService } from './ishow-service';

export class ShowServiceFake implements IShowService{
    private fakeShow: IShowDetails = {
            name: 'Girls',
            language: 'English',
            genre: ['comedy', 'tragedy'],
            rating: 8,
            channel: 'K5',
            runtime: 30,
            summary: 'This is a fake show for fake showservice testing',
            image: "../assets/default.png",
    }

    private fakeShows: IShowDetails[] = [{name: 'Girls',language: 'English',genre: ['comedy', 'tragedy'],rating: 8, channel: 'K5',runtime: 30,
        summary: 'This is a fake show for fake showservice testing',image: '../assets/check.png'},{name: 'Girls',language: 'English',genre: 
        ['comedy', 'tragedy'],rating: 8, channel: 'K5',runtime: 30, summary: 'This is a fake show for fake showservice testing',
        image: "../assets/default.png",}, {name: 'Girls',language: 'English',genre: ['comedy', 'tragedy'],rating: 8, channel: 'K5',runtime: 30,
        summary: 'This is a fake show for fake showservice testing',image: "../assets/default.png",} ]

    public getSingleShowDetails(search: string): Observable<IShowDetails>{
        return of(this.fakeShow);
    }

    public getShowDetails(search: string): Observable<IShowDetails[]>{
        return of(this.fakeShows);
    }
    
        
    }
