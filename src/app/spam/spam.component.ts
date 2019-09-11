import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/services/common.service';

@Component({
  selector: 'app-spam',
  templateUrl: './spam.component.html',
  styleUrls: ['./spam.component.scss']
})
export class SpamComponent implements OnInit {
  spam_emails;

  constructor(private common_service: CommonService) { }

  ngOnInit() {
    this.getSpamEmail();
  }
  getSpamEmail() {
    this.common_service.getSpamEmail().subscribe(data => {
      this.spam_emails = data;
      // console.log(this.temp_deleted_emails);
    });
  }

}
