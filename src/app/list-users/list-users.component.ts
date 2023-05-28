import { Component } from '@angular/core';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {
  users: any;
  constructor(private getData: GetDataService) {}

  ngOnInit() {
    this.getData.getListUsers().subscribe((res: any) => this.users = res
    )
  }
}
