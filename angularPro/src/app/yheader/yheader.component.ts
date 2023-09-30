import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../services/search.service';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-yheader',
  templateUrl: './yheader.component.html',
  styleUrls: ['./yheader.component.css']
})

export class YheaderComponent implements OnInit {
logo: string = "../assets/logo/mytube-r.png";

searchQuery: any = '';
  searchResults: any[] = [];
  searchData: { title: string, id: string }[] = [];

searchID:any;

constructor(private VS:VideoService, private R:Router){
  // this.searchResultData();
}

ngOnInit(){
  this.searchResultData();
}

navigate(id:any){
  this.VS.videoId.next(id);
this.R.navigate(['/videoplay',id]);
}

closeDropdown() {
  // Set a small timeout to allow for clicking on the dropdown items before closing
  setTimeout(() => {
    this.searchResults = [];
  }, 200);
}

  onSearch() {
    this.searchResults = this.filterResults(this.searchQuery);
  }

  searchResultData() {
    this.VS.getVideo().subscribe((res: any) => {
      this.searchData = res.map((video: any) => ({
        title: video.title,
        id: video.id, // Assuming you have a property named "id" in your video objects
      }));
    });
  }

  filterResults(query: any): any[] {
    // Replace this with your actual data source and search logic
    const data = this.searchData;
    return data.filter((item:any) => item.title.toLowerCase().includes(query.toLowerCase()));
  }

}
