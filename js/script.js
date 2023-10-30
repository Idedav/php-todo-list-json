const { createApp } = Vue;

createApp({
    data(){
        return{
            list:[],
            apiUrl:'php/server.php',
            newTask: ''
        }
    },

    methods:{
        getList(){
            axios.get(this.apiUrl)
            .then(res =>{
                this.list = res.data;
            })
        },
        addTask(){
            const data = new FormData();
            data.append('itemTask', this.newTask);
            axios.post(this.apiUrl, data)
            .then(res =>{
                this.list = res.data,
                this.newTask = ''
            })
        },
        removeTask(index){
            const data = new FormData();
            data.append('taskToDelete', index);
            axios.post(this.apiUrl, data)
            .then(res => {
                this.list = res.data
            })
        }
    },
    mounted(){
        this.getList()
    }


}).mount('#app');