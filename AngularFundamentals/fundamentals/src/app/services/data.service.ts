import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable, throwError } from 'rxjs';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';
import { map, catchError } from 'rxjs/operators';
import { BadInput } from '../common/bad-input';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string, private http: Http) { }

  getAll() {
    return this.http.get(this.url).pipe(
											map(response => response.json())
											, catchError(this.handleError)
										);
  }

  create(data){

    return this.http.post(this.url, JSON.stringify(data)).pipe(
		map(response => response.json())
		, catchError(this.handleError)
	);
  }

  update(data){
	return this.http.patch(this.url + '/' + data.id, JSON.stringify({ isRead: true }))
	.pipe(
				map(response => response.json())
				,catchError(this.handleError)
		);
  }

  delete(id){
    
    return this.http.delete(this.url + '/' + id)
      .pipe(
        catchError(this.handleError),
      );
  }

  private handleError(error: Response) {
	  if(error.status === 400){
		  return throwError(new BadInput(error.json()));
	  }

	  if(error.status === 404){
		  return throwError(new NotFoundError(error));
	  }

	  return throwError(new AppError(error));
  }
}
