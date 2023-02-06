function nicknameGenerator(name){
    const vowels = 'aeiou';
    console.log(name.length)
    for (let i=0;i<name.length;i++){   
        if(!(vowels.includes(name[2])) && name.length>=4){
        return name[0]+name[1]+name[2]
       } if (vowels.includes(name[2]) && name.length>=4){
        return name[0]+name[1]+name[2]+name[3]
       } else if (name.length<4){
        return "Error: Name too short"
       }
    }
  }
  console.log(nicknameGenerator("Sqml"))