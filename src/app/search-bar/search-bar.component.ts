import { Component, OnInit } from '@angular/core';
import { ApiRequestResults } from '../models/apirequestresults';
import { SearchBarService } from '../search-bar.service';

@Component({
  selector: 'mb-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private sbs: SearchBarService) {
    console.log('Search Bar Service constructed!');
  }

  ngOnInit() {
  }

  apiRequestResults: ApiRequestResults;
  wipe() {
    console.log('clearing contents on page');
    // window.location.reload();
    function clearInfo() {
      let info = document.getElementById("info");
      info.innerHTML = "";
      // "<header><div id='title'>" + "</div>" +
      //   "<div id='year'>" + "</div></header>" +
      //   "<div id='summary'>" + "</div>";
    }
    clearInfo();
    function clearPoster(){
      document.getElementById('poster-image').removeAttribute('src');
    }
    clearPoster();
    // function clearPoster(src) {
    //   document.getElementById("poster-image").setAttribute("src", src);
    // }
    // clearPoster();
    // clearInfo(Title, resp.Year, resp.Plot);



  }

  apiQuery(searchTitle: string): void {
    // viewing stuff from input
    console.log('search parameter: ', searchTitle);
    // this.credentials = new Credentials(username, password);
    // this.loginService.authenticate(this.credentials);

    this.apiRequestResults = new ApiRequestResults(searchTitle);
    // this.sbs.parseApiResults(this.apiRequestResults);
    return this.sbs.getMedia(this.apiRequestResults);

  }

}
