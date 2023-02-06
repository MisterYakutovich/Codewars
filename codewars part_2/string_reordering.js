function  sentence (list)  {
   let arr= list
      .sort((a, b) => Object.keys(a)[0] - Object.keys(b)[0])
      .map(obj => Object.values(obj)[0])
      .join( ' ')
      return arr
}
  console.log(sentence([
    {'4': 'dog'}, {'2': 'took'}, {'3': 'his'}, 
    {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'} 
   ]))