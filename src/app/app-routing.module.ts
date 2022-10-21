import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ValidadordocumentosComponent} from "./client/validadordocumentos/validadordocumentos.component";


const routes: Routes = [
  // {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '', component: ValidadordocumentosComponent},
  {path: 'validar/:code', component: ValidadordocumentosComponent},
  // {path: 'print-table/:params', component: PrintTableComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
