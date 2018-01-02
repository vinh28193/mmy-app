import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from './in-memory-data.service';
import { PractiveComponent } from './practive.component';
import { PractiveRoutingModule } from './practive-routing.module';

import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts/posts.service';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarService } from './navbar/navbar.service';


@NgModule({
  imports: [
      CommonModule,
      PractiveRoutingModule,
      HttpModule,

      // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
      // and returns simulated server responses.
      // Remove it when a real server is ready to receive requests.
      HttpInMemoryWebApiModule.forRoot(
          InMemoryDataService, { dataEncapsulation: false }
      )
    ],
    declarations: [
        PractiveComponent,
        PostsComponent,
        NavbarComponent
    ],
    providers: [PostsService, NavbarService],
    bootstrap: [PractiveComponent]
})
export class PractiveModule { }
