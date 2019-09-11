import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/services/common.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  unread_inbox_emails;
  inbox_emails;
  one_email;
  email_dto;

  constructor(private common_service: CommonService) { }

  ngOnInit() {
    this.getInboxEmail();
  }

  getUnreadEmail(){
    this.common_service.getUnreadEmailNumber().subscribe(data => {
      this.unread_inbox_emails = data.length;
      console.log(this.unread_inbox_emails);
    });
  }
  getInboxEmail() {
    this.common_service.getInboxData().subscribe(data => {
      this.inbox_emails = data;
      // console.log(this.inbox_emails);
      this.getUnreadEmail();
    });
  }
  getOneEmail(id, callback){
    this.common_service.getOneEmailData(id).subscribe(data => {
      this.one_email = data;
      callback(data)
    })
    
  }

  removeFromInboxAddToDelete(id) {
    // // console.log("Logic to add inti trash");
    // alert("Logic to add inti trash")
    // this.common_service.deleteInboxEmail(id).
    let r = confirm("Do you want to delete the product ID: " + id + "?");
    if (r == true) {
      //add email to delete after removing from inbox
      this.getOneEmail(id, (mail_data)=>{
        // console.log(mail_data);
        this.email_dto = {
          id: mail_data.id,
          mId: mail_data.mId,
          unread: true,
          subject: mail_data.subject,
          content: mail_data.content
        }
        this.common_service.addEmailToDelete(this.email_dto).subscribe(data => {
          // this.getInboxEmail();
          this.common_service.deleteInboxEmail(id).subscribe(data => {
            // console.log("deleted successfully", data);
            this.getInboxEmail();
          }, err => {
            alert("Some Error Occured");
          })
        }, err => {
          alert("Some Error Occured");
        })
      });
    } else {
      alert("You pressed Cancel!");
    }
  }

  markAsRead(id){
    // alert(id);
    this.getOneEmail(id, (mail_data)=>{
      // console.log(mail_data);
      this.email_dto = {
        id: mail_data.id,
        mId: mail_data.mId,
        unread: false,
        subject: mail_data.subject,
        content: mail_data.content
      }
      this.common_service.readUnreadEmailData(id, this.email_dto).subscribe(data => {
        this.getInboxEmail();
      }, err => {
        alert("Some Error Occured");
      })
    });
    
  }
  markAsUnread(id){
    // alert(id);
    this.getOneEmail(id, (mail_data)=>{
      // console.log(mail_data);
      this.email_dto = {
        id: mail_data.id,
        mId: mail_data.mId,
        unread: true,
        subject: mail_data.subject,
        content: mail_data.content
      }
      this.common_service.readUnreadEmailData(id, this.email_dto).subscribe(data => {
        this.getInboxEmail();
      }, err => {
        alert("Some Error Occured");
      })
    });
  }

  archiveMail(){
    alert("WIP")
  }

}
