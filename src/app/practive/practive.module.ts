import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../in-memory-data.service';

import { PostsComponent } from './posts/posts.component';
import { PractiveRoutingModule } from './practive-routing.module';
import { PostsService } from './posts/posts.service';


@NgModule({
  imports: [
      CommonModule,
      PractiveRoutingModule,
      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1500 })
  ],
  declarations: [PostsComponent],
  providers: [PostsService]
})
export class PractiveModule { }
