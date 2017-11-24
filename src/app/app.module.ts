import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AppService} from './app.service';

import { PractiveModule} from './practive/practive.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule,
      PractiveModule,
      AppRoutingModule,
      HttpClientModule,

      // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
      // and returns simulated server responses.
      // Remove it when a real server is ready to receive requests.
      HttpClientInMemoryWebApiModule.forRoot(
          InMemoryDataService, { dataEncapsulation: false }
      )
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
