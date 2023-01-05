export const Game = {
  setup: () => (
    {
      player: {
        name: "Kaede Akamatsu",
        health: 100,
        maxHealth: 100
      }, //your player
      locations: [
        {
          id: "gym",
          name: "School Gym",
          healthRisk: "High",
          deathGameRisk: "Low"
        },
        {
          id: "diningHall",
          name: "School Dining Hall",
          healthRisk: "Medium",
          deathGameRisk: "Medium"
        },
        {
          id: "library",
          name: "School Library",
          healthRisk: "Low",
          deathGameRisk: "High"
        }
      ]
    }
  ), //end setup

  turn: {
    // moveLimit: 1
  }, //end turn

  moves: {
    // exampleMove: (G, ctx, customArgOne, customArgTwo) => {
    // },
  }, //end moves

  phases: {
    // setupGame: {
    //   start: true, //begin in this phase
    //   next: 'examplePhaseOne'
    // },
    // examplePhaseOne: {
    //   onBegin: (G, ctx) => {
    //   },
    //   next: 'examplePhaseTwo'
    // }
  } //end phases
} //end Game