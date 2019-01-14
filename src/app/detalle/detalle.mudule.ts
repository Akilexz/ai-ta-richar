import { DetalleCreateComponent } from './detalleCreate/detalleCreate.component';
import { DetalleDeleteComponent } from './detalleDelete/detalleDelete.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DetalleEditComponent } from './detalleEdit/detalleEdit.component';
import { DetalleListComponent } from './detalleList/detalleList.component';
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
        DetalleEditComponent,
        DetalleListComponent,
        DetalleDeleteComponent,
        DetalleCreateComponent
    ],
    exports: [
        DetalleEditComponent,
        DetalleListComponent,
        DetalleDeleteComponent,
        DetalleCreateComponent
    ]
})
export class DestinoModule { }
