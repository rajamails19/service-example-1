// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; 
import { CommSecond } from './comm-second.component';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieService } from './movie.service';
import { NumberListComponent } from './number-list/number-list.component';
import { ItemListComponent } from './item-list/item-list.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ClickDemoComponent } from './click-demo/click-demo.component';
import { TextInputComponent } from './text-input/text-input.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { SharedataService } from './sharedata.service';
import { SubjSenderdataComponent } from './subjsenderdata.component'
import { SubjReceiverDataComponent } from './subjrecevdata.component'
import { SubjDataService } from './subjdata.service';
import { ParentComponent } from './parent/parent.component';
import { Child2Component } from './child2/child2.component';
// import { CommService } from './comm-second.service';

@NgModule({
  declarations: [AppComponent, MovieListComponent, NumberListComponent,
     ItemListComponent,
     HomeComponent,
     AboutComponent,
     ContactComponent,
     ClickDemoComponent,
     TextInputComponent,
     ChildComponent, 
     CommSecond, 
     SubjSenderdataComponent, 
     SubjReceiverDataComponent, ParentComponent, Child2Component
    ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule,FormsModule, CommonModule  ],
  providers: [MovieService, SharedataService, SubjDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
