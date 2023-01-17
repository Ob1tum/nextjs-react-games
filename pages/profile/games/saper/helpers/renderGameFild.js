let fields = []

function checkCountBomb (fields) {
   fields.forEach((item,i) => {
      if(item.isBomb) {
         if(item.id <= 10) {
            if(item.id === 1) {
               fields[1].countBomb++;
               fields[10].countBomb++;
               fields[11].countBomb++;
            }
            else if(item.id === 10) {
               fields[8].countBomb++;
               fields[18].countBomb++;
               fields[19].countBomb++;
            }
            else {
               fields[i-1].countBomb++
               fields[i+1].countBomb++
               fields[i+9].countBomb++
               fields[i+10].countBomb++
               fields[i+11].countBomb++
            }
         }
         if(item.id >= 90) {
            if(item.id === 90) {
               fields[80].countBomb++
               fields[81].countBomb++
               fields[91].countBomb++
            }
            else if(item.id === 100) {
               fields[98].countBomb++
               fields[89].countBomb++
               fields[88].countBomb++
            }
            else {
               fields[i-1].countBomb++
               fields[i+1].countBomb++
               fields[i-9].countBomb++
               fields[i-10].countBomb++
               fields[i-11].countBomb++
            }
         }
         if(item.id > 10 && item.id < 90) {
            if(item.id % 10 === 0){
               fields[i-10].countBomb++
               fields[i+10].countBomb++
               fields[i+9].countBomb++
               fields[i-9].countBomb++
               fields[i-1].countBomb++
            }
            else if(fields[i].id.toString().split('')[1] === '1'){
               fields[i-10].countBomb++
               fields[i+10].countBomb++
               fields[i+11].countBomb++
               fields[i-9].countBomb++
               fields[i+1].countBomb++
            }
            else {
               fields[i-11].countBomb++
               fields[i-10].countBomb++
               fields[i-9].countBomb++
               fields[i-1].countBomb++
               fields[i+1].countBomb++
               fields[i+9].countBomb++
               fields[i+10].countBomb++
               fields[i+11].countBomb++
            }
         }
      }
   })
}

export function createGameFields () {
   let i = 1;
      let fields = []
      let count = 0
      while(i <= 100) {
         fields.push({id: i, 
                      isBomb: Math.floor(Math.random() * 10) >= 8 ? true : false,
                      countBomb: 0,
                      class: 'cell',
                      textContent: ''
         })
         i++
      }
      fields.forEach(item => {
         if(item.isBomb) count++
      })
      checkCountBomb(fields)
   
   return [fields, count]
}