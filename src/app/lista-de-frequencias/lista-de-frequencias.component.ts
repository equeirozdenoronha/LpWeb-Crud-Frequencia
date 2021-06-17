import { Component, OnInit } from '@angular/core';
import {FrequenciaService} from "../frequencia.service";
import {ActivatedRoute, Router} from "@angular/router";
import { TurmasService } from '../turmas.service';
import {ProfessorService} from '../professor.service'
import {HorarioService} from '../horario.service'
import {AlunoService} from '../aluno.service';
import { DisciplinasService } from '../disciplinas.service';
import {Frequencia} from '../frequencia.model'


@Component({
  selector: 'app-lista-de-frequencias',
  templateUrl: './lista-de-frequencias.component.html',
  styleUrls: ['./lista-de-frequencias.component.css']
})
export class ListaDeFrequenciasComponent implements OnInit {
  frequencias: any[];
  turmas: any[];
  disciplinas: any[];
  professores: any[];
  alunos: any[];
  horarios: any[];
  excluir_ok = false;
  excluir_erro = false;
  constructor(private frequenciasService: FrequenciaService,
              private turmasService: TurmasService,
              private disciplinasService: DisciplinasService,
              private professorService: ProfessorService,
              private horarioService: HorarioService,
              private alunoService: AlunoService,
              private route: ActivatedRoute,
              private router: Router) {
  }
  
  ngOnInit() {
    this.atualizarLista();
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.turmasService.getTurmas()
      .subscribe(turmas => this.turmas = turmas);
    this.disciplinasService.getDisciplinas()
      .subscribe(disciplinas => this.disciplinas = disciplinas);
    this.professorService.getProfessores()
      .subscribe(professores => this.professores = professores);
    this.horarioService.getHorarios()
      .subscribe(horarios => this.horarios = horarios);
    this.alunoService.getAlunos()
      .subscribe(alunos => this.alunos = alunos);
    console.log(this.turmas);
  }
  excluir(frequencia) {
    if (confirm('Tem certeza que deseja excluir a frequencia ' + frequencia.nome + '?')) {
      this.frequenciasService.deleteFrequencia(frequencia.id)
        .subscribe(ok => {
          this.excluir_ok = true;
          this.excluir_erro = false;
          this.atualizarLista();
        }, erro => {
          this.excluir_ok = false;
          this.excluir_erro = true;
        });
    }
  }

  atualizarLista() {
    this.frequenciasService.getFrequencias()
      .subscribe(frequencias => this.frequencias = frequencias);
  }
  abrir(frequencia: Frequencia) {
    this.router.navigate(['/frequencias', frequencia.id]);
  }
  
}
