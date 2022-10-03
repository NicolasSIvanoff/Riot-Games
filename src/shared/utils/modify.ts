import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class Modify {
  public getChampions(champions: any): any {
    let key: any;
    let array: any[] = [];

    for (key of Object.keys(champions.data)) {
      array.push(
        [key, champions.data[key]],
      )
    }
    return array.map(champion => {
      champion[1].image.full = champion[1].image.full.replace('.png', '_0.jpg');
      return champion
    })

  }

}
