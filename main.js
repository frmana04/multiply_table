import  { crearArchivo } from './multiplicar/multiplicar';
import {argv} from 'yargs'




crearArchivo(argv.base,argv.desde,argv.hasta).then(data=>{
    console.log(`Archivo ${data} creado`)
}).catch(err=>{
    console.log(err)
})




