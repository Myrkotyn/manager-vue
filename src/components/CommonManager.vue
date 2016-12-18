<template>
    <div class="admin-index common-manager-page" id="manager">
        <div class="row">
            <div class="col-md-12">
                <div class="box">
                    <div class="box-body">
                        <h1 class="page-header">Задачи</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="box">
                    <div class="box-body">
                        <div class="row" v-if="null !== tasks">
                            <div class="card-columns">
                                <div class="card" v-for="task in tasks">
                                    <div class="card-block" :class="{ 'success-gradient-pattern' : task.is_complete }">
                                        <button type="button" class="btn btn-danger delete-task-btn" @click="deleteTask(task.id)">
                                            <i class="fa fa-times"></i>
                                        </button>
                                        <h4 class="card-title" >
                                            {{ task.header }}
                                        </h4>
                                        <p class="card-text">
                                            <span class="comment-name">Коментарий: </span>{{ task.comment }}
                                        </p>
                                        <p class="card-text">
                                            <span class="contact">Контакты:</span> {{ task.contact }}
                                        </p>
                                        <button type="button" class="btn btn-success btn-block" @click="updateTask(task.id)">Выполнено</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.delete-task-btn {
    position: absolute;
    top: 10px;
    right: 10px;
}
</style>
<script>
    const API_URL = 'http://api.managers.work';

    export default{
        data(){
            return {
                tasks: null,
            }
        },
        created(){
            this.getTasks()
        },
        watch: {
            // в случае изменения маршрута запрашиваем данные вновь
            '$route': 'fetchData'
         },
        components:{
        },
        methods: {
            getTasks() {
                let app = this
                this.$http.get(API_URL + '/task/all')
                .then((response) => {
                    app.tasks = response.data
                    console.log(response);     
                },(error) => {
                    console.log(error);
                });
            },
            updateTask(taskId) {
                let app = this
                let task = _.find(app.tasks, { 'id' : taskId })
                let completeCheck = 0;
                if(task.is_complete == 0) {
                    completeCheck = 1;
                }
                this.$http.put(API_URL + '/task/' + taskId, {
                    header: task.header,
                    comment: task.comment,
                    contact: task.contact,
                    is_complete: completeCheck,
                })
                .then((response) => {
                    
                    console.log(response);
                },(error) => {
                    console.log(error);
                });
            },
            deleteTask(taskId) {
                let app = this
                let task = _.find(app.tasks, { 'id' : taskId })
                this.$http.delete(API_URL + '/task/' + taskId)
                .then((response) => {
                    // _.remove(app.tasks, { 'id' : taskId });
                    app.delete(app.tasks, taskId)
                }, (error) => {
                    console.log(error);
                });
            }
        }
    }


</script>
