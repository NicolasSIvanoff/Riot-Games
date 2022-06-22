import { RiotService } from './../service/riot.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss']
})
export class ChampionsComponent implements OnInit {
  champions: any;
  array?: Array<any>;
  tudo: any;
  constructor(public serv: RiotService) { }

  ngOnInit(): void {
    this.getApiChampions();
  }
  public getApiChampions(): void {
    this.serv.getChampions().subscribe(data => {
      this.champions = data.data;
      let result = [];
      let key: any;
      for (key of Object.keys(this.champions)) {
        result.push(
          [key, this.champions[key]],
        )
      }
      this.array = result;
      for (let i = 0; i < this.array.length; i++) {
        this.tudo = this.array[i][1].image.full;
        this.tudo = this.tudo.replace('.png', '_0.jpg');
        this.array[i][1].image.full = this.tudo;

      }
    })
  }
}


