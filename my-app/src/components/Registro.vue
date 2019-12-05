<template>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Registro</title>
</head>
<body>
    <div class="contenedor">
        
        <div>
        </div>
        <br> <br> <br>
        <form>
        <h4>Name</h4>
        <input type="text" class="form-control" v-model="nombre" placeholder="Nombre de usuario" aria-label="Username" aria-describedby="basic-addon1">
        <h4>Last name</h4>
        <input type="text" class="form-control" v-model="apellidos" placeholder="Apellidos" aria-label="Username" aria-describedby="basic-addon1">
        
        <h4>Age</h4>
        <input type="text" class="form-control" v-model="edad" placeholder="Edad" aria-label="Username" aria-describedby="basic-addon1">

        <h4>Address</h4>
        <input type="text" class="form-control" v-model="direccion" placeholder="Direccion" aria-label="Username" aria-describedby="basic-addon1"><br>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Gender</label>
            </div>
            <select class="custom-select" id="sexo">
                <option value="Mujer">Mujer</option>
                <option value="Hombre">Hombre</option>
            </select>
        </div>
        
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Degree</label>
            </div>
            <select class="custom-select" id="carreras">
                <option value="1">Ingenieria en Desarrollo de Software</option>
                <option value="2">Ingenieria en Mecatronica</option>
                <option value="3">Ingenieria en Energia</option>
                <option value="4">Ingenieria Petrolera</option>
                <option value="5">Ingeniería en Tecnologías de Manufactura</option>
                <option value="6">Ingeniería Biomedica</option>
                <option value="7">Ingeniería en Tecnología Ambiental</option>
                <option value="8">Ingeniería Agroindustrial</option>
                <option value="9">Licenciatura en Administración y Gestión de PYMES</option>
            </select>
        </div>

        <div class="boton">
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-outline-secondary" style="margin-left: 30px; width:90px;" @click="goback">Back</button>
                <button type="button" class="btn btn-success" style="margin-left: 50px" @click="signup">Sign up</button>
            </div>
        </div>
        </form>
    </div>
    
</body>
</html>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
export default{
    
    data() {
        return{
           nombre:'',
           apellidos:'',
           edad:'',
           direccion:'',
           sexo:'',
           carrera:''
        }
    },
    methods:{
        goback(){
            this.$router.push({ path:'/lista'})
        },
        signup(){
            /* eslint-disable */
            this.carrera= document.getElementById("carreras").value
            var combo = document.getElementById("sexo");
            this.sexo = combo.options[combo.selectedIndex].text;
            console.log(this.nombre+this.apellidos+this.edad+this.direccion+this.sexo+this.carrera)


            let config = {
                headers: {
                'Authorization': 'Token ' + localStorage.getItem("token")
                }
            }
            const path='http://santiago173200.ddns.net/api/v1/alumnos-registro/'
            axios.post(path,{
                nombre:this.nombre,
                apellidos:this.apellidos,
                edad:this.edad,
                carrera:this.carrera,
                direccion:this.direccion,
                sexo:this.sexo,   
            },config).then((response)=>{
                    Swal.fire(
                    'Good job!',
                    'Agregaste un nuevo alumno',
                    'success'
                    )
                console.log(response.data);
                /* eslint-disable */
                this.$router.push("/lista") 
            })
            /* eslint-disable */
             .catch((error)=>{
            console.log(error)
            })

            
        
        },
    }
}

</script>

<style>
body{
    height: 100%;
    background-image: url("fondochido.jpg");
    text-align: center;
}
.contenedor{
    position:absolute;
    margin: 0 auto;
    top: 20px;
    left: 0;
    right: 0;
    height: 400px;
    width: 450px;
    color:white;
    
}

.boton{
    margin-top: 30px;
}
</style>