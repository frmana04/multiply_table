import  { crearArchivo } from './multiplicar/multiplicar';
import {argv} from 'yargs'




crearArchivo(argv.number,argv.from,argv.to).then(data=>{
    console.log(`File ${data} created`)
}).catch(err=>{
    console.log(err)
})




