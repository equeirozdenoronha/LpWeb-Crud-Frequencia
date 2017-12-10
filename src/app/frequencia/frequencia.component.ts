import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { FrequenciaService } from '../frequencia.service';
import {Frequencia} from '../frequencia.model'

@Component({
  selector: 'app-frequencia',
  templateUrl: './frequencia.component.html',
  styleUrls: ['./frequencia.component.css']
})
export class FrequenciaComponent implements OnInit {
  frequencia : Frequencia[];
  constructor(private frequenciasService: FrequenciaService,
              private route: ActivatedRoute,
              private router: Router

  ) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.frequenciasService.getFrequenciaId(id)
      .subscribe(frequencia => this.frequencia = frequencia,
    erro => this.router.navigate(['frequencia-nao-encontrada']));
  }

}
