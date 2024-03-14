import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUserInfo } from '../interface/person.interface';
import { CrudServiceService } from '../service/crud-service.service';

@Component({
  selector: 'app-crud-part2',
  templateUrl: './crud-part2.component.html',
  styleUrl: './crud-part2.component.css',
})
export class CrudPart2Component {
  @Input() listData: IUserInfo[] = [];
  @Output() onAddData: EventEmitter<IUserInfo> = new EventEmitter<IUserInfo>()
  @Output() onUpdate: EventEmitter<IUserInfo> = new EventEmitter<IUserInfo>()
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>()

  iUser: IUserInfo = {
    id: 0,
    name: '',
    address: '',
  };


  addUser():void{
    this.onAddData.emit(this.iUser)
    this.clearState()
  }

  updateUser():void{
    this.onUpdate.emit(this.iUser)
    this.clearState()
  }

  deleteData(user : IUserInfo):void{
    this.onDelete.emit(user.id)
  }

  clearState():void{
    this.iUser={
      id: 0,
      name: '',
      address: '',
    }
  }

  edit(user : IUserInfo): void {
    this.iUser = user;
  }
}
