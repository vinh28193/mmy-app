import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { PostsComponent } from './posts/posts.component';
import { PractiveRoutingModule } from './practive-routing.module';
import { PostsViewComponent } from './posts-view/posts-view.component';


@NgModule({
  imports: [
      CommonModule,
      PractiveRoutingModule,
  ],
  declarations: [PostsComponent, PostsViewComponent]
})
export class PractiveModule { }
