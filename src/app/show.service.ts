import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IShowDetails } from './ishow-details';
import {map} from 'rxjs/operators';


  interface IshowDetailsData {    
      name: string,
      language: string,
      genres: string[],
      rating: {average:number},
      runtime: number,
      network: {name: string},
      summary: string,
      image: {original:string}    
  }

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  constructor(private httpClient:HttpClient) { }
  getShowDetails(showname:string){
    return this.httpClient.get<any[]>('http://api.tvmaze.com/search/shows?q='+showname).pipe(map(data => this.convertToShowData(data)) )}
  
  getSingleShowDetails(name:string){
    return this.httpClient.get<IshowDetailsData>('http://api.tvmaze.com/singlesearch/shows?q='+name).pipe(map(data => this.convertToSingleShowData(data)) )
  }

  private convertToSingleShowData(data:IshowDetailsData):IShowDetails {
      var Network_name = "--";   
      if (data.network != null){Network_name = data.network.name};

      var picture = "../assets/default.png";
      if (data.image != null){picture = data.image.original};

    return {
      name: data.name,
      language: data.language,
      genre: data.genres,
      rating: data.rating.average,
      channel: Network_name,
      runtime: data.runtime,
      summary: data.summary,
      image: picture
    }
  }

  private convertToShowData(data:any[]):IShowDetails[] {
    const shows: IShowDetails[] = [];
    // console.log(data)
    
    data.forEach(s => {
      var Network_name = "--";   
      if (s.show.network != null){Network_name = s.show.network.name};

      var picture = "../assets/default.png";
      if (s.show.image != null){picture = s.show.image.original};

      shows.push ({
          name: s.show.name,
          language: s.show.language,
          genre: s.show.genres,
          rating: s.show.rating.average,
          channel: Network_name,
          runtime:s.show.runtime,
          summary: s.show.summary,
          image: picture
        });
      // console.log(shows);
    });    
    // console.log(shows);
    return shows; 
  }
}
