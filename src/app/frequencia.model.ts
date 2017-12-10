import {Disciplina} from "./disciplina.model";
import {Turma} from "./turma.model";
import {Professor} from "./professor.model";
import {Aluno} from "./aluno.model";
import {Horario} from "./horario.model";


export class Frequencia {
  constructor(public id:number,
              public turma: Turma,
              public disciplina: Disciplina,
              public professor: Professor,
              public horario: Horario,
              public aluno: Aluno,
              public data: string,
              public status: string) {
  }
}
