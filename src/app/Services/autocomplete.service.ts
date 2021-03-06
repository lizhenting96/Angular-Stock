import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { SpinnerService } from './autocomplete-spinner.service'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

  // getSuggestionsUrl: string = 'http://localhost:8081/api/autocomplete'
  getSuggestionsUrl: string = 'https://kmjt00nm75.execute-api.us-east-1.amazonaws.com/dev/api/autocomplete'
  // getSuggestionsUrl: string = '/api/autocomplete'

  constructor(private http: HttpClient, private spinnerService: SpinnerService) { }

  getSuggestions(ticker: string): Observable<any> {
    this.spinnerService.show()
    var result = this.http.get(`${this.getSuggestionsUrl}/${ticker}`)
    
    return result
  }
}