const { createApp } = Vue;

createApp({
    data(){
        return{
            list:[],
            apiUrl:'php/server.php',
            newTask: '',
            isErrorDelete: false,
            isErrorTask: false
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
            if(this.newTask){
                const data = new FormData();
                data.append('itemTask', this.newTask);
                axios.post(this.apiUrl, data)
                .then(res =>{
                    this.list = res.data,
                    this.newTask = ''
                })
            }else{
                this.isErrorTask = true,
                setTimeout(()=>{
                    this.isErrorTask = false
                },3000)
            }
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
                this.isErrorDelete = true,
                setTimeout(()=>{
                    this.isErrorDelete = false
                },3000)
            }
        },

        toggleDone(index){
            const data = new FormData();
            data.append('taskIsDone', index);
            axios.post(this.apiUrl, data)
            .then(res =>{
                this.list = res.data
            })
        }
    },
    mounted(){
        this.getList()
    }


}).mount('#app');