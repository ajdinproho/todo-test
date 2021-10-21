<template>
    <div class='header-rectangle'>
        <div class="header-flexbox">
               <img :src="vision" >
               <span id="todobox-text">Todobox</span>
               <span id="username-text">Username</span> 
               <img id="username-logo" :src="image2">
        </div>
    </div>
</template>
<script>
import image2 from '../assets/username.png';

export default {
    name: 'Header',
    data(){
        return{
            image2:image2,
            vision: require('../assets/vision.svg')
        };
    }
}
</script>
<style>
.header-rectangle{
    width:100vw;
    height:80px;
    background-color: #232C33;
    position:relative;
    max-width: 1920px;
}
.header-flexbox{
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 15px;
    padding-left:200px;
    padding-right: 200px;
}
#todobox-text{
    color:white;
    font-family: Roboto;
    font-weight: bold;
    font-size: 16px;
}
#username-text{
    color:white;
    font-family: Roboto;
    font-size:14px;
    margin-left:900px;
}
#username-logo{
    border-radius: 100%;
    width:40px;
    height:40px;
}
</style>