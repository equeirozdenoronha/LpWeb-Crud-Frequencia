import { Component, OnInit } from '@angular/core';
import {FuncionariosServices} from '../funcionarios.services';
import {FrequenciaService} from '../frequencia.service'
import {ProfessorService} from '../professor.service'
import {HorarioService} from '../horario.service'
import {AlunoService} from '../aluno.service'
import {TurmasService} from '../turmas.service'
import {DisciplinasService} from '../disciplinas.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-cadastro-frequencia',
  templateUrl: './cadastro-frequencia.component.html',
  styleUrls: ['./cadastro-frequencia.component.css']
})
export class CadastroFrequenciaComponent implements OnInit {

  alunos: any[];
  turmas: any[];
  disciplinas: any[];
  professores: any[];
  horarios: any[];
  frequencia: any = {
      turma: '',
      aluno: '',
      professor: '',
      horario: '',
      disciplina:'',
      data: '',
      status: ''
  };
  constructor(private alunosService: AlunoService,
              private turmasService: TurmasService,
              private disciplinasService: DisciplinasService,
              private professorSerivice: ProfessorService,
              private horarioService: HorarioService,
              private frequenciaService: FrequenciaService,
              private router:Router
              ) { }

  ngOnInit() {
   this.alunosService.getAlunos()
       .subscribe(
           alunos => {
             this.alunos = alunos;
           }
       );
   this.turmasService.getTurmas()
       .subscribe(
         turmas => {
             this.turmas = turmas;
         }
       );
   this.disciplinasService.getDisciplinas()
       .subscribe(
           disciplinas => {
               this.disciplinas = disciplinas;
           }
       );
    this.professorSerivice.getProfessores()
    .subscribe(
        professores => {
            this.professores = professores;
        }
    );
    this.horarioService.getHorarios()
    .subscribe(
        horarios => {
            this.horarios = horarios;
        }
    );
  }
    salvar() {
      console.log(this.frequencia);
      this.frequenciaService.addFrequencia(this.frequencia)
          .subscribe(
            f => {
                console.log(f.id);
                this.alunosService.getAlunoId(f.alunoId).subscribe(
                    p => {
                        // window.alert(`O funcionario ${p.nome} foi adicionada no sistema`);
                        this.frequencia.turmaId = '';
                        this.frequencia.alunoId= '';
                        this.frequencia.professorId= '';
                        this.frequencia.horarioId='';
                        this.frequencia.disciplinaId='';
                        this.frequencia.data= '';
                        this.frequencia.status= '';
                    }
                );

            }
          );
  }

}
