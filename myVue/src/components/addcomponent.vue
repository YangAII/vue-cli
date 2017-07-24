<template>
    <div class="hh">
        <div>这是谁另一个组件里面的东西</div>
        <input class="btn" type="button" @click="ofunc" value="按钮"/>
        <div>{{message}}</div>
        <ul>
            <li v-for="item in items">
                {{item}}
            </li>
        </ul>
    </div>
    
</template>
<script>
    // import components from './brother'
    export default {
        name:'headerComponent',
        data:()=>{
            return{
                message:'按钮',
                items:["apple","bananer","orange"]
            } 
        },
        methods:{
            ofunc:()=>{
                alert('hhahhh')
            }
        }
           
        
    }

</script>
<style>
.hh{
    height: 300px;
    background: red
}
.btn{
    width: 100px;
    height: 50px;
    border: 1px solid green;
    border-radius: 10px;
}
</style>


