const { createApp } = Vue;

createApp({
    data(){
        return{
            list:[],
            apiUrl:'php/server.php'
        }
    },

    methods:{
        getList(){
            axios.get(this.apiUrl)
            .then(res =>{
                this.list = res.data;
            })
        }
    },
    mounted(){
        this.getList()
    }


}).mount('#app');