import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{ 
    isLoading:boolean;

    constructor(private router: Router) {

        router.events.subscribe( (event: Event) => {

            if (event instanceof NavigationStart) {
                this.isLoading=true;
            }

            if (event instanceof NavigationEnd) {
                this.isLoading=false;
            }

            if (event instanceof NavigationError) {
                this.isLoading=false;
                console.log(event.error);
            }
        });
    }
    ngOnInit(): void {
    }
}