import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { TurmasService } from './turmas.service';
import { DisciplinasService } from './disciplinas.service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { HomeComponent } from './home/home.component';
import {FrequenciaService} from './frequencia.service'
import {ProfessorService} from './professor.service'
import {HorarioService} from './horario.service'
import {AlunoService} from './aluno.service';
import {FuncionariosServices} from './funcionarios.services';
import {PessoasService} from './pessoas.service';
import {CargosService} from './cargos.service';
import {FuncoesService} from './funcoes.service';
import {CadastroFrequenciaComponent} from './cadastro-frequencia/cadastro-frequencia.component'
import {ListaDeFrequenciasComponent} from './lista-de-frequencias/lista-de-frequencias.component';
import { FrequenciaComponent } from './frequencia/frequencia.component'



@NgModule({
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        PaginaNaoEncontradaComponent,
        HomeComponent,
        CadastroFrequenciaComponent,
        ListaDeFrequenciasComponent,
        FrequenciaComponent
    ],
    providers: [
        TurmasService,
        DisciplinasService,
        DisciplinasService,
        TurmasService,
        CargosService,
        FuncionariosServices,
        PessoasService,
        FuncoesService,
        FrequenciaService,
        ProfessorService,
        HorarioService,
        AlunoService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
