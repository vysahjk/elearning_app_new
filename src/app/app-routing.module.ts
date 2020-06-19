import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursComponent } from './cours/cours.component';
import { DetailsComponent } from './details/details.component';
import { StreamingComponent } from './streaming/streaming.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cours', component: CoursComponent },
  { path: 'cours/:cours', component: DetailsComponent },
  { path: "stream", component: StreamingComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
