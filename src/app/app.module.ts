import { from } from 'rxjs/observable/from';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { FileSelectDirective } from 'ng2-file-upload';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

import { FieldsetModule } from 'primeng/fieldset';
import { ToastModule } from 'primeng/toast';
import { InputMaskModule} from 'primeng/inputmask';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CalendarModule } from 'primeng/calendar';
import {PaginatorModule} from 'primeng/paginator';
import { PublicacionService } from './services/publicacion.service';
import { DestinoService } from './services/destino.service';
import { DetalleService } from './services/detalle.service';
import { OpcionService } from './services/opcion.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    HttpClientModule,
    FieldsetModule,
    ToastModule,
    CalendarModule,
    PaginatorModule,
    InputMaskModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    FileSelectDirective,

  ],
  providers: [PublicacionService, DestinoService, DetalleService, OpcionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
