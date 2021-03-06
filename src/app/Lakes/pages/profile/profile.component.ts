import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Lake} from '../../models/lake';
import { HttpModule } from '@angular/http';
import { DataService } from '../../../Services/data.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})


export class ProfileComponent implements OnInit {
  listOfLakes: Array<Lake>;

  constructor(private dataService: DataService) {
    console.log('hey hey');
  }

  ngOnInit() {
    console.log('calling data service');
    this.dataService.getLakes()
      .subscribe(res => {
        this.listOfLakes = res;
        console.log('hey', this.listOfLakes);
      });
  }

}
