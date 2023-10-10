import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  searchID: any;

  constructor(private VS: VideoService, private R: Router, private _snack:MatSnackBar) {
    // this.searchResultData();
  }

  ngOnInit() {
    this.searchResultData();
    this.checkUser();

    this.VS.loggedUser.subscribe((res:any)=>{
      this.loggedUser = res;
    })
  }

  navigate(id: any) {
    this.VS.videoId.next(id);
    this.R.navigate(['/videoplay', id]);
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
    return data.filter((item: any) => item.title.toLowerCase().includes(query.toLowerCase()));
  }

  userName: any;
  userEmail: any;
  userId: any;
  userNumber: any;
  loggedUser:any;

  checkUser() {
    const user = localStorage.getItem("user");
    const userFind = user && JSON.parse(user);
    if (userFind) {
      this.userId = userFind.id;
      this.userName = userFind.name;
      this.userNumber = userFind.number;
      this.userEmail = userFind.email;
}

  }

  logOut(){
    this.VS.loggedUser.next(false);
    this._snack.open(this.userName, "you are fired", { duration:5000 })
    localStorage.removeItem("user");
    this.R.navigateByUrl('/');
  }

}
