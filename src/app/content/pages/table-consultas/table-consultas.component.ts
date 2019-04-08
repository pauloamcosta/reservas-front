import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Globals } from 'src/app/core/globals';
import { JsonService } from 'src/app/core/service/json.service';
import { CheckIn } from 'src/app/core/model/checkin';

@Component({
  selector: 'app-table-consultas',
  templateUrl: './table-consultas.component.html',
  styleUrls: ['./table-consultas.component.scss']
})
export class TableConsultasComponent implements OnInit {
  private baseUrl: string = this.globals.URL;
  private checkinsLoaded: CheckIn[] = [];

  constructor(
    private globals: Globals,
    private jsonService: JsonService,
    private ref: ChangeDetectorRef
  ) { }
  //checkins = CHECKINS;

  ngOnInit() {
    this.loadCheckins(`${this.baseUrl}/checkins`);
  }
  
  private loadCheckins(url: string): void {
    this.jsonService.getContent(url).subscribe(checkins => {
      this.checkinsLoaded = checkins['content'];
      console.log(this.checkinsLoaded);
      this.ref.detectChanges();
    })
  }

}
