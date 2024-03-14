import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CrudServiceService } from './service/crud-service.service';
import { IUserInfo } from './interface/person.interface';

// interface IUserInfo{
//   id: number,
//   name: string,
//   age: number,
//   address: string
// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'crud_part2_doAgain';
  listData: IUserInfo[] = [];

  constructor(private crudService: CrudServiceService) {}

  ngOnInit() {
    this.handleGetListData();
  }
  
  handleGetListData(): void {
    this.crudService.getData().subscribe((res: IUserInfo[]) => {
      this.listData = res;
    });
  }

  handleAdd(user: IUserInfo): any {
    this.crudService.addData(user).subscribe(()=>this.handleGetListData());
  }

  handleUpdate(user: IUserInfo): any {
    this.crudService.updateData(user).subscribe(()=>this.handleGetListData());
  }

  handleDelete(id : number): any {
    this.crudService.deleteData(id).subscribe(()=>this.handleGetListData());
  }
}
