import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { CreateFighterComponent } from './create-fighter/create-fighter.component';
import { UpdateFighterComponent } from './update-fighter/update-fighter.component';
import { FighterDetailsComponent } from './fighter-details/fighter-details.component';
import { FighterListComponent } from './fighter-list/fighter-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { HomeComponent } from './home/home.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    CreateFighterComponent,
    UpdateFighterComponent,
    FighterDetailsComponent,
    FighterListComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSortModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
