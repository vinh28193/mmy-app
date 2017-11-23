import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { PostsComponent } from './posts/posts.component';
import { PractiveRoutingModule } from './practive-routing.module';


@NgModule({
  imports: [
      CommonModule,
      PractiveRoutingModule,
  ],
  declarations: [PostsComponent]
})
export class PractiveModule { }
