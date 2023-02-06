function killer(suspectInfo, dead) {
    let killerName = ''
      let maxDead = 0
      for ([man, personMet] of Object.entries(suspectInfo)) {
          let count = 0
          dead.forEach(i => {
              count = (personMet.includes(i)) ? count + 1 : count
          });
          if (count > maxDead) {
              maxDead = count
              killerName = man
          }
      }
    return killerName
  }
  console.log(killer({'James': ['Jacob', 'Bill', 'Lucas'],
  'Johnny': ['David', 'Kyle', 'Lucas'],
  'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill']))


   //  function killer(suspectInfo, dead) {
       // return Object.keys(suspectInfo).find(x => dead.every(y => suspectInfo[x].includes(y)))
     //  }