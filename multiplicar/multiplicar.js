import fs from 'fs';

let crearArchivo=(number,from,to)=>{

return new Promise((resolve)=>{
    let data='';
    for (let i=from;i<=to;i++)
    data+=`${number} x ${i} = ${number*i}\n`;

    fs.writeFile(`tablas/tabla-${number}.txt`,data,(err)=>{
        if (err) console.log(err)
        resolve(`tabla-${number}.txt`)

    })

})
  

}

export {crearArchivo};