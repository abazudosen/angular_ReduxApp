import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertyBindingComponent } from './databinding/property-binding.component';
import { EventBindingComponent } from './databinding/event-binding.component';
import { TwoWayDataBindingComponent } from './databinding/two-way-data-binding.component';
import { LifecycleComponent } from './lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent,
    LifecycleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
