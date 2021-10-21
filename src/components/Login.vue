<template>
    <div class="login-app">
        <div class="rectangle">
            <div class="login-box-header">
                <img :src="logo" class="logo-image">
            </div> 
           <div class="rectangle-flexbox">
               <div class="user">  
                   <br /><br /><br />
                    <input class="email" type="text" v-model="email" placeholder="email"><br>
               </div>
                <div class="pass">
                    <br/>
                    <input class="password" type="password" v-model="password" placeholder="password">
                    <i class="material-icons" id="visibility">visibility</i>
               </div>
               <div class="bottom-box"><br /><br /><br /><br />
                  <input type="checkbox" class="checkbox-login" name="remember" id="rememberme">
                  <span> Remember me </span>
                  <div>
                        <a href="#" target="_blank" class="forgot">Forgot password?</a>
                  </div> 
               </div>
               <div><br /><br /><br />
                   <button type="submit" class="login-button">Login</button>
               </div>
           </div>
            
        </div>
    </div>
</template>
<script>
export default {
    name:"Login",
    data(){
        return{
            logo: require("../assets/logo.png"),
            email: '',
            password: ''
        }
    },
    methods:{
        loginButton(){
           
        }
    }
}
</script>
<style>
.login-app{
    display:flex;
    justify-content: center;
    margin-top:180px;
}
.rectangle{
    border:1px solid black;
    width:490px;
    height:500px;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: white;
    box-shadow: 1px 1px 8px 8px gray;
}
.rectangle-flexbox{
    display: flex;
    flex-direction: column;
}
.user{
    border-radius: 5px;
}
.pass{
    position:relative;
    border-radius: 5px;

}
#visibility{
    position: relative;
    opacity:0.3;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    top:-33px;
    padding:3px;
    margin-left: 280px;
}
.email{
  border-radius: 4px;
  width: 312px;
  height: 40px;
}
.password{
  border-radius: 4px;
  width: 312px;
  height: 40px;
}
.logo-image{
    height:61px;
    width: 199px;
}
.login-button{
    background-color: #425BD9;
    color: white;
    font-family: Roboto;
    font-size: 16px;
    width: 312px;
    height: 40px;
    cursor:pointer;
}
.checkbox-login{
    width: 24px;
    height: 24px;
    background-color: #222222;
}
.bottom-box{
    display: flex;
    align-items: center;
    font-family: Roboto;
}
.forgot{
    text-decoration: none;
    color:blue;
    margin-left:55px;
}
</style>