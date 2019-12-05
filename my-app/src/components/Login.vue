<template>
<!DOCTYPE html>
<html lang="en">
<head>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
    <div class="contenedor">
       
        <div>
            <br> <br> <br> <br> <br> <br> <br>
        </div>
       
        <h2>User</h2>
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" v-model="username" aria-describedby="basic-addon1">
        <h2>Password</h2>
        <input type="password" class="form-control" placeholder="Password" aria-label="Username" v-model="password" aria-describedby="basic-addon1">
        
        <div class="boton">
            <div class="btn-group" role="group">
                <button type="button" class="btn-primary" style="margin-left: 250px; width:120px;height:30px;" @click="ingresa">Log in</button>
            </div>
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
            username:'',
            password:'',

        }
    },methods:{
        ingresa(){
           const path='http://ec2-3-87-68-235.compute-1.amazonaws.com/api/v1/login/'
            axios.post(path,{
                username:this.username,
                password:this.password
            }).then((response)=>{
                // eslint-disable-next-line no-console
                  Swal.fire(
                            'Welcome!',
                            response.data.username,
                            'success'
                )
                localStorage.setItem('token', response.data.token)
                this.$router.push("/lista")
            })
            /* eslint-disable */
        .catch((error)=>{
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Verifica tus datos',
          
            })
                this.username = ''
                this.password = ''
            console.log('Error'+error)
          
            
        })


        }

    }
}

</script>

<style>
.boton{
    margin-top: 50px;
    margin-left: 75px;

}
body{
    height: 100%;
    background-image: url("fondochido.jpg");
    text-align: center;
}
.contenedor{
    position:absolute;
    margin: 0 auto;
    top: 50px;
    left: 0;
    right: 0;
    height: 400px;
    width: 400px;
    color:white;
    
}


</style>