import { UserRank } from "../types/UserRank";

export function getLabelByRank(rank: UserRank): string {
    const labels: { [key: number]: string } = {
      1: 'bronze',
      2: 'silver',
      3: 'gold',
      4: 'platinum',
      // add more ranks and labels as needed
    };
  
    return labels[rank];
  }

  export function calculateRank(apPoints: number): UserRank {
    if (apPoints >= 3000) {
      return 4;
    } else if (apPoints >= 1000) {
      return 3;
    } else if (apPoints >= 100) {
      return 2;
    } else {
      return 1;
    }
  }