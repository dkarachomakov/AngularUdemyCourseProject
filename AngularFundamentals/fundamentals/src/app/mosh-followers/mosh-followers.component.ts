import { MoshFollowersService } from './../services/mosh-followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'mosh-followers',
	templateUrl: './mosh-followers.component.html',
	styleUrls: ['./mosh-followers.component.css']
})
export class MoshFollowersComponent implements OnInit {

	followers: any[];
	constructor(private followersService: MoshFollowersService) { }

	ngOnInit() {
		this.followersService.getAll().subscribe(response => this.followers = response);
	}

}
