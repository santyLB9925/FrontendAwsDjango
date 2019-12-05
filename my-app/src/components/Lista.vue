<template>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <title>Document</title>
</head>
<body>
  <div>
    <div class="contenedor2">
           <div class="boton2">
      <button type="button" class="btn btn-info " style="margin-left: 105px; width:180px;" @click="create">New Student</button>
    </div>
<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        label="Buscar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table id="tabla"
      :headers="headers"
      :items="items"
      :search="search"
      hide-default-footer
    >
    <template v-slot:item.action="{ item }">
      <v-btn color="primary" fab x-small dark @click="edit(item)" >
              <v-icon>mdi-pencil</v-icon> 
      </v-btn>
      
      <v-btn color="success" fab x-small dark @click="deleted(item)">
              <v-icon>mdi-delete</v-icon>
      </v-btn>
    </template>
    
    </v-data-table>
  </v-card>
</template>



  </div>
</div>
</body>
</html>
  
</template>


<script>
import axios from 'axios';
import Swal from 'sweetalert2';
export default {
    data(){
        return{
            search: '',
            headers:[
           
              { text: 'Nombre',align: 'left',sortable: false,value: 'nombre',},
              { text: 'Apellidos',align: 'left',sortable: false,filterable: false, value: 'apellidos' },
              { text: 'Edad', value: 'edad' },
              { text: 'Sexo',align: 'left',sortable: false,filterable: false, value: 'sexo' },
              { text: 'Direccion',align: 'left',sortable: false,filterable: false, value: 'direccion' },
              { text: 'Carrera', value: 'carrera' },
              { text: 'Acciones', value: 'action', sortable: false },
            ],
            items:[

            ]
        }
    },methods:{
        create(){
      this.$router.push({ path:'/registroAlumno'})
    },
      getAlumnos(){
        let config = {
          headers: {
          'Authorization': 'Token ' + localStorage.getItem("token")
          }
        }
           const path='http://ec2-3-87-68-235.compute-1.amazonaws.com/api/v1/alumnos/'
            axios.get(path,config).then((response)=>{
                this.items=response.data 
            })
            /* eslint-disable */
        .catch((error)=>{
            console.log(error)
        })
    },
    deleted(item){
        const index = this.items.indexOf(item)
        const id = this.items[index]["id"]
        let config = {
          headers: {
          'Authorization': 'Token ' + localStorage.getItem("token")
          }
        }
                    Swal.fire({
            title: '¿Estas seguro?',
            text: "YEsto no se podrá revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar'
            }).then((result) => {
            if (result.value) {
                const path='http://ec2-3-87-68-235.compute-1.amazonaws.com/api/v1/alumnos/'+id
                axios.delete(path,config).then((response)=>{
                console.log(response)
                this.getAlumnos()
                 })
                Swal.fire(
                'Eliminado!',
                'El alumno ha sido eliminado con exito',
                'success'
                )
            }
            })
           
            /* eslint-disable */
        .catch((error)=>{
            console.log(error)
        })

    },
    edit(item){
          const index = this.items.indexOf(item)
          const id = this.items[index]["id"]
          console.log(id)
          localStorage.setItem('idAlumno', id)
          localStorage.setItem('nombreAlumno', this.items[index]["nombre"])
          localStorage.setItem('apellidosAlumno', this.items[index]["apellidos"])
          localStorage.setItem('edadAlumno', this.items[index]["edad"])
          localStorage.setItem('sexoAlumno', this.items[index]["sexo"])
          localStorage.setItem('direccionAlumno', this.items[index]["direccion"])
          localStorage.setItem('carreraAlumno', this.items[index]["carrera"])
          this.$router.push("/alumnos/edit")

    }
    
},
        created(){
            this.getAlumnos()
        }
}
</script>

<style>
.contenedor2{
    position:absolute;
    margin: 0 auto;
    top: 80px;
    left: 0;
    right: 0;
    height: 400px;
    width: 1050px;
    color:white;
    
}
.boton2{
  margin-top: 30px;
  margin-left: 765px;
}
</style>