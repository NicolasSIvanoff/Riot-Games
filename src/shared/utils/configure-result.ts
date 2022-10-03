import { Injectable } from "@angular/core";
import { UserModel } from "src/app/service/models/shearchUser.model";

@Injectable({ providedIn: 'root' })
export class ConfigureResult {
  rankUser: any;
  historicUser: any;
  // historicUser: any[] = [];
  matchesID: any[] = [];
  mainUser: any[] = [];
  resultMainUser: any[] = [];

  getMatchesUser(matchid: Array<any>): void {
    console.log("ala")
    // for (let i = 0; i < matchid.length; i++) {
    //   this.serv.getMatch(matchid[i]).subscribe(data => {
    //     this.matchesID.push(data)


    //   })
    // }
    this.getMainUser(this.matchesID);
    console.log('ALE')
  }
  getMainUser(matchesId: Array<any>): void {
    console.log('mete', matchesId)
    // for (let i = 0; i < matchesId.length; i++) {
    //   let index = matchesId[i].info.participants.findIndex((x: any) => x.puuid === this.resultUser.puuid)
    //   console.log('primeiro', index)
    //   this.resultMainUser.push(matchesId[i].info.participants[index])
    //   console.log('dps', this.resultMainUser)
    // }
  }
}
