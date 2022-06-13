import { HttpClient } from '@angular/common/http';
import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';


export interface infoFrutaApi {
  genus: string;
  name: string;
  family: string;
  id: number;
  order: string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  name!: any;
  arr: infoFrutaApi[] = [];

  constructor(
    private httpClient: HttpClient,
    private _Activatedroute:ActivatedRoute
    ) {}

  ngOnInit(): void {
     this.name = this._Activatedroute.snapshot.paramMap.get("name")
     this.getFrutaList(this.name);


  }

  getFrutaList(name: string){
    this.httpClient.get<infoFrutaApi>('/api/fruit/'+name).subscribe((result:any) => {
      this.arr.push(result);
      console.log(this.arr);



    })
  }

}
