import { HttpClient } from '@angular/common/http';
import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

export interface infoFrutaApi {
  genus: string;
  name: string;
  family: string;
  id: number;
  order: string;
}

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.component.html',
  styleUrls: ['./frutas.component.css']
})
export class FrutasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'genus', 'name', 'family', 'order', 'actions'];
  dataSource = new MatTableDataSource<infoFrutaApi>([]);
  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator.toArray()[0];
  }
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getFrutaList();
  }

  getFrutaList(){
    this.httpClient.get('/api/fruit/all').subscribe((result:any) => {
      this.dataSource.data = result;
      console.log(result);

    })
  }

}
