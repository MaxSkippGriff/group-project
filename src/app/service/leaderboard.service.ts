import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LeaderboardService {
 // get the leaderboard in the correct order
  getList() {
    const stringRanking =
      localStorage.getItem("group-project/leaderboard") || JSON.stringify([]);
    const list = JSON.parse(stringRanking);

    list.sort((a, b) => a.rounds - b.rounds);

    return list;
  }
  // Add new player to the leaderboard
  addPlayer(player) {
    const list = this.getList();
    list.push(player);
    localStorage.setItem("group-project/leaderboard", JSON.stringify(list));
  }
}