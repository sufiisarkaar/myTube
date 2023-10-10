import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { VideoService } from './services/video.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularPro';
  showVideoSection: boolean;

  constructor(private VS: VideoService, private router: Router) { }

  ngOnInit(): void {
    this.checkUser();
    this.checkNavigation();
  }


  checkUser() {
    const getLocalUser = JSON.parse(localStorage.getItem("user"));
    if (getLocalUser) {
      this.VS.loggedUser.next(true)
    } else {
      this.VS.loggedUser.next(false)
    }
  }

  checkNavigation() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // Kisi navigation ka shuruaat event hua, yahaan par aap dekh sakte hain ki user kis route par ja raha hai.
        if (event.url === '/login') {
          // Agar user login page par ja raha hai, to video section ko chhupa dein.
          this.showVideoSection = false;
        }
        if (event.url === '/') {
          this.showVideoSection = true;
        }
        if (event.url === '/register') {
          this.showVideoSection = false;
        }
        if (event.url === '/videoplay/') {
          this.showVideoSection = true;
        }
      } else if (event instanceof NavigationEnd) {

        // Navigation pura ho gaya, aap ab kuch aur actions le sakte hain.
      }
    });

  }
}
