import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { JsonService } from 'src/app/core/service/json.service';
import { Globals } from 'src/app/core/globals';
import { Pessoa } from 'src/app/core/model/pessoa';

@Component({
  selector: 'app-adicionar-pessoa',
  templateUrl: './adicionar-pessoa.component.html',
  styleUrls: ['./adicionar-pessoa.component.scss']
})
export class AdicionarPessoaComponent {
  closeResult: string;
  
  private baseUrl: string = this.globals.URL;


  formPessoa = this.fb.group({
    nome: ['', [Validators.required]],
    documento: ['', [Validators.required]],
    telefone: ['', [Validators.required]]
  });

  constructor(
    private modalService: NgbModal,
    private fb:FormBuilder,
    private jsonService:JsonService,
    private globals:Globals,

    ) {}

    private get fieldNome(){
      return this.formPessoa.get('nome');
    }
    private get fieldDocumento(){
      return this.formPessoa.get('documento');
    }
    private get fieldTelefone(){
      return this.formPessoa.get('telefone');
    }

    submitForm(): void {
      let pessoa = new Pessoa (
        0, //id
        this.fieldNome.value,
        this.fieldDocumento.value,
        this.fieldTelefone.value
      );

      this.jsonService.postContent(`${this.baseUrl}/pessoas`, pessoa).subscribe(pessoa => {
        alert('Pessoa cadastrada com sucesso!');
      });
    }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
