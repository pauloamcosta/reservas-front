import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { JsonService } from "src/app/core/service/json.service";
import { Globals } from "src/app/core/globals";
import { CheckIn } from "src/app/core/model/checkin";
import { Pessoa } from "src/app/core/model/pessoa";

@Component({
  selector: "app-form-check-in",
  templateUrl: "./form-check-in.component.html",
  styleUrls: ["./form-check-in.component.scss"]
})
export class FormCheckInComponent implements OnInit {
  private baseUrl: string = this.globals.URL;
  private pessoasCarregadas: Pessoa[] = [];


  constructor(
    private fb: FormBuilder,
    private jsonService: JsonService,
    private globals: Globals
  ) {}

  formCheckIn = this.fb.group({
    pessoa: ["", [Validators.required]],
    dataEntrada: ["", [Validators.required]],
    dataSaida: ["", [Validators.required]],
    adicionalVeiculo: ["", [Validators.required]]
  });

  ngOnInit() {
    this.loadListOfPessoas(`${this.baseUrl}/pessoas/`);
    console.log(this.pessoasCarregadas)
  }
  private loadListOfPessoas(url:string):void {
    this.jsonService.getContent(url).subscribe(pessoas =>{
      this.pessoasCarregadas = pessoas;
    });
  }

  private get fieldPessoa() {
    return this.formCheckIn.get("pessoa");
  }
  private get fieldDataEntrada() {
    return this.formCheckIn.get("dataEntrada");
  }
  private get fieldDataSaida() {
    return this.formCheckIn.get("dataSaida");
  }
  private get FieldAdicionalVeiculo() {
    return this.formCheckIn.get("adicionalVeiculo");
  }

  submitForm(): void {
    let checkIn = new CheckIn(
      0, //id
      this.fieldPessoa.value,
      this.fieldDataEntrada.value,
      this.fieldDataSaida.value,
      this.FieldAdicionalVeiculo.value
    );
    this.jsonService
      .postContent(`${this.baseUrl}/checkins/`, checkIn)
      .subscribe(checkIn => {
        alert("Check In cadastrado com sucesso!");
      });
  }
}
