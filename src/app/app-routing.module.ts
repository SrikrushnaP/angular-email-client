import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboxComponent } from './inbox/inbox.component';
import { SpamComponent } from './spam/spam.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { PageNfComponent } from './page-nf/page-nf.component';

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "", component: InboxComponent },
  { path: "inbox", component: InboxComponent },
  { path: "spam", component: SpamComponent },
  { path: "delete", component: DeleteItemComponent },
  { path: "**", component: PageNfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
