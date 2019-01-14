import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OpcionEditComponent } from './opcionEdit/opcionEdit.component';
import { OpcionListComponent } from './opcionList/opcionList.component';
import { OpcionCreateComponent } from './opcionCreate/opcionCreate.component';
import { OpcionDeleteComponent } from './opcionDelete/opcionDelete.component';
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
        OpcionEditComponent,
        OpcionListComponent,
        OpcionDeleteComponent,
        OpcionCreateComponent
    ],
    exports: [
        OpcionEditComponent,
        OpcionListComponent,
        OpcionDeleteComponent,
        OpcionCreateComponent
    ]
})
export class DestinoModule { }
