import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ListComponent } from '../../publicaciones/list/list.component';
import { EditComponent } from '../../publicaciones/edit/edit.component';
import { CreateComponent } from '../../publicaciones/create/create.component';
import { DestinoEditComponent } from '../../destino/destinoEdit/destinoEdit.component';
import { DestinoListComponent } from '../../destino/destinoList/destinoList.component';
import { MultimediaListComponent } from '../../multimedia/multimediaList/multimediaList.component';
import { MultimediaEditComponent } from '../../multimedia/multimediaEdit/multimediaEdit.component';
import { MultimediaCreateComponent } from '../../multimedia/multimediaCreate/multimediaCreate.component';
import { DetalleListComponent } from '../../detalle/detalleList/detalleList.component';
import { DetalleCreateComponent } from 'app/detalle/detalleCreate/detalleCreate.component';
import { OpcionEditComponent } from '../../opcion/opcionEdit/opcionEdit.component';
import { OpcionListComponent } from '../../opcion/opcionList/opcionList.component';





export const AdminLayoutRoutes: Routes = [

    { path: 'publicaciones/list', component: ListComponent },
    { path: 'publicaciones/edit', component: EditComponent },
    { path: 'publicaciones/create', component: CreateComponent },
    { path: 'destino/destinoEdit', component: DestinoEditComponent },
    { path: 'destino/destinoList', component: DestinoListComponent },
    { path: 'multimedia/multimediaList', component: MultimediaListComponent },
    { path: 'multimedia/multimediaEdit', component: MultimediaEditComponent },
    { path: 'multimedia/multimediaCreate', component: MultimediaCreateComponent },
    { path: 'detalle/detalleList', component: DetalleListComponent },
    { path: 'detalle/detalleCreate', component: DetalleCreateComponent },
    { path: 'opcion/opncionList', component: OpcionListComponent},
    { path: 'opcion/opcionEdit', component: OpcionEditComponent},
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'table-list', component: TableListComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'upgrade', component: UpgradeComponent },

];
