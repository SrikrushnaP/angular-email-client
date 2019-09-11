import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/services/common.service';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.scss']
})
export class DeleteItemComponent implements OnInit {
  temp_deleted_emails;

  constructor(private common_service: CommonService) { }

  ngOnInit() {
    this.getTempDeletedEmail();
  }
  getTempDeletedEmail() {
    this.common_service.getDeletedEmail().subscribe(data => {
      this.temp_deleted_emails = data;
      // console.log(this.temp_deleted_emails);
    });
  }
}
