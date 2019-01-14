import { TipoPubListComponent } from './tipoPubList/tipoPubList.component';
import { TipoPubDeleteComponent } from './tipPubDelete/tipPubDelete.component';
import { TipoPubEditComponent } from './tipoPuEdit/tipoPuEdit.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TipoPubCreateComponent } from './tipoPubCreate/TipoPubCreate.component';
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
        TipoPubCreateComponent,
        TipoPubDeleteComponent,
        TipoPubEditComponent,
        TipoPubListComponent
    ],
    exports: [
        TipoPubCreateComponent,
        TipoPubDeleteComponent,
        TipoPubEditComponent,
        TipoPubListComponent
    ]
})

export class PublicacionesModule { }
