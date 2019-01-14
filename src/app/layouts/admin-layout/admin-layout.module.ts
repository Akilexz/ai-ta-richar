import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ListComponent } from '../../publicaciones/list/list.component';
import { EditComponent } from '../../publicaciones/edit/edit.component';
import { InputMaskModule} from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import {FileUploadModule} from 'primeng/fileupload';
import {PaginatorModule} from 'primeng/paginator';
import { CreateComponent } from '../../publicaciones/create/create.component';
import { DestinoEditComponent } from '../../destino/destinoEdit/destinoEdit.component';
import { DestinoListComponent } from '../../destino/destinoList/destinoList.component';
import { MultimediaListComponent } from '../../multimedia/multimediaList/multimediaList.component';
import { MultimediaEditComponent } from '../../multimedia/multimediaEdit/multimediaEdit.component';
import { MultimediaCreateComponent } from '../../multimedia/multimediaCreate/multimediaCreate.component';
import { DetalleCreateComponent } from 'app/detalle/detalleCreate/detalleCreate.component';
import { DetalleListComponent } from './../../detalle/detalleList/detalleList.component';
import { OpcionEditComponent } from '../../opcion/opcionEdit/opcionEdit.component';
import { OpcionListComponent } from '../../opcion/opcionList/opcionList.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    CalendarModule,
    FileUploadModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    InputMaskModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    ListComponent,
    EditComponent,
    CreateComponent,
    DestinoEditComponent,
    DestinoListComponent,
    MultimediaListComponent,
    MultimediaEditComponent,
    MultimediaCreateComponent,
    DetalleListComponent,
    DetalleCreateComponent,
    OpcionEditComponent,
    OpcionListComponent,
    IconsComponent,
    NotificationsComponent,
    UpgradeComponent,
  ]
})

export class AdminLayoutModule {}
