import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-yheader',
  templateUrl: './yheader.component.html',
  styleUrls: ['./yheader.component.css']
})
export class YheaderComponent implements OnInit {
logo: string = "../assets/logo/mytube-r.png";

searchQuery: string = '';
  searchResults: string[] = [];
searchData:any;

constructor(private VS:VideoService){
  this.searchResultData();
}

ngOnInit(){
  this.searchResultData();
}

  onSearch() {
    this.searchResults = this.filterResults(this.searchQuery);
  }

  
    searchResultData(){
      this.VS.getVideo().subscribe((res:any)=>{
  this.searchData = res;
  console.log(this.searchData,"searchData");
  
      })
    }

  filterResults(query: string): string[] {
    // Replace this with your actual data source and search logic
    const data = ['Apple','maango','grapes'];
    return this.searchData.filter((item:any) => item.toLowerCase().includes(query.toLowerCase()));
  }

}
