﻿import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable()
export class GiphyService {
	

	constructor(private http: Http){
	
	}

	pesquisaGiphy(): Observable<Response> {
		let url = 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC&limit=10&offset=0';

		return this.http.get(url);
	}

}