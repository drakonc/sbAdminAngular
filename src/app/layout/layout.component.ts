import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    collapedSideBar: boolean;

    constructor(public router: Router) {}

    ngOnInit() {
        if (!localStorage.getItem('isLoggedin')) {
            this.router.navigate(['/login']);
        }
    }

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}
