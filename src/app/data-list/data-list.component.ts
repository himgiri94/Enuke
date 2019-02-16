import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private dataService: DataServiceService
  ) { }

  public userData: any;
  public itemData: any;
  public editUserData: boolean = false;
  public editItemData: boolean = false;
  public editUserNumber: number;
  public editItemNumber: number;

  public id: any;

  ngOnInit() {


    this.route.params.subscribe(params => {
      this.id = params.id || null;
    })

    if (!this.id) {
      this.dataService.getUser().subscribe(res => {

        this.userData = res['user'];
      });
    }

    if (this.id) {
      this.dataService.getUser().subscribe(res => {
        this.userData = res['user'];
        this.itemData = this.userData.filter(x => x.id == this.id);
        this.itemData = this.itemData[0].items

      });
    }
  }

  public removeData(type, index) {
    if (type === 'data') {
      this.userData.splice(index, 1);
    }
    if (type === 'item') {
      this.itemData.splice(index, 1);
    }
  }

  public editData(type, index) {
    if (type === 'data') {
      this.editUserData = true;
      this.editUserNumber = index;
    }
    if (type === 'item') {
      this.editItemData = true;      
      this.editItemNumber = index;
    }
  }

  public cancel(type) {
    if (type === 'data') {
      this.editUserData = false;
      this.editUserNumber = null;
    }
    if (type === 'item') {
      this.editItemData = false;      
      this.editItemNumber = null;
    }
  }

}
