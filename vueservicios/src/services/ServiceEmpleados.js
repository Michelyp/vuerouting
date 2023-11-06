import Global from './../Global';
import axios from 'axios';
export default class ServiceEmpleados{
    getEmpleados = new Promise(function(resolve){
        var request = "api/empleados";
        var empleados=[];
        var url = Global.urlApiEmpleados + request;
        axios.get(url).then(response =>{
            empleados=response.data;
            resolve(empleados);
        })
    })

    getMetodoParametros(idempleado){
        return new Promise(function(resolve){
                var request = "api/empleados/" + idempleado;
                var url = Global.urlApiEmpleados + request;
                var empleado={};
                axios.get(url).then(response =>{
                    empleado = response.data;
                    resolve(empleado);
            
        })
    })
    }

    getOficios = new Promise(function(resolve){
        var request ="api/empleados/oficios";
        var url = Global.urlApiEmpleados + request;
        var oficios= [];
        axios.get(url).then(response=>{
            oficios = response.data;
            resolve(oficios);
        })
        
    })

    // getEmpleadosOficio(oficio){

    // }


}