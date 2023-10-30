const { createApp } = Vue;

createApp({
    data(){
        return{
            list:[],
            apiUrl:'php/server.php',
            newTask: '',
            isError: false
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
            if(this.list[index].isDo){
                const data = new FormData();
                data.append('taskToDelete', index);
                axios.post(this.apiUrl, data)
                .then(res => {
                    this.list = res.data
                })
            }else{
                this.isError = true,
                setTimeout(()=>{
                    this.isError = false
                },2000)
            }
        }
    },
    mounted(){
        this.getList()
    }


}).mount('#app');