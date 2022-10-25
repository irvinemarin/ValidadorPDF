import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ValidadordocumentosComponent} from "./componentes/client/validadordocumentos/validadordocumentos.component";
import {ErrorPageComponent} from "./partials/error-page/error-page.component";

const routes: Routes = [
  // {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '', component: ValidadordocumentosComponent},
  {path: 'validar/:code', component: ValidadordocumentosComponent},
  {path: 'error', component: ErrorPageComponent},
  // {path: 'print-table/:params', component: PrintTableComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
