import { DestinoCreateComponent } from './destinoCreate/destinoCreate.component';
import { DestinoDeleteComponent } from './destinoDelete/destinoDelete.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DestinoEditComponent } from './destinoEdit/destinoEdit.component';
import { DestinoListComponent } from './destinoList/destinoList.component';
import { FieldsetModule } from 'primeng/fieldset';
import { ToastModule } from 'primeng/toast';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { PaginatorModule } from 'primeng/paginator';



@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ToastModule,
        InputMaskModule,
        CalendarModule,
        PaginatorModule,
        FieldsetModule
    ],
    declarations: [
        DestinoEditComponent,
        DestinoListComponent,
        DestinoDeleteComponent,
        DestinoCreateComponent
    ],
    exports: [
        DestinoEditComponent,
        DestinoListComponent,
        DestinoDeleteComponent,
        DestinoCreateComponent
    ]
})
export class DestinoModule { }
