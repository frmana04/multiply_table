import fs from 'fs';

let crearArchivo=(base,desde,hasta)=>{

return new Promise((resolve)=>{
    let data='';
    for (let i=desde;i<=hasta;i++)
    data+=`${base} x ${i} = ${base*i}\n`;

    fs.writeFile(`tablas/tabla-${base}.txt`,data,(err)=>{
        if (err) console.log(err)
        resolve(`tabla-${base}.txt`)

    })

})
  

}

export {crearArchivo};