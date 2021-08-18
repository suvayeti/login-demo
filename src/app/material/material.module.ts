import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';


const materialComponents=[MatIconModule, MatButtonModule, MatInputModule, 
  MatCardModule, MatTableModule, MatToolbarModule,MatListModule,MatDividerModule]

@NgModule({
  declarations: [],
  imports: [
    materialComponents
  ],
  exports: [materialComponents]
})
export class MaterialModule { }
