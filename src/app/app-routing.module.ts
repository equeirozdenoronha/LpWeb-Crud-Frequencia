import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PaginaNaoEncontradaComponent} from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import {CadastroFrequenciaComponent} from './cadastro-frequencia/cadastro-frequencia.component'
import {ListaDeFrequenciasComponent} from './lista-de-frequencias/lista-de-frequencias.component'
import {FrequenciaComponent} from './frequencia/frequencia.component'

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'frequencias', component: ListaDeFrequenciasComponent},
  {path: 'frequencias/cadastrar', component: CadastroFrequenciaComponent},  
  {path: 'frequencias/:id', component:FrequenciaComponent},
  {path: '**', component: PaginaNaoEncontradaComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- apenas para depuração
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
