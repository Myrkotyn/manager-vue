<template>
    <div>
        <form v-on:submit.prevent="createTask">
            <div class="form-group">
                <label>
                    Заголовок
                    <input type="text" name="header" class="form-control" v-model="task.header">
                </label>
            </div>
            <div class="form-group">
                <label>
                    Коментарий
                    <input type="text" name="comment" class="form-control" v-model="task.comment">
                </label>
            </div>
            <div class="form-group">
                <label>
                    Контакт
                    <input type="text" name="contact" class="form-control" v-model="task.contact">
                </label>
            </div>
            <div class="form-group">
                <button class="btn btn-default" type="submit">
                    Добавить
                </button>
            </div>
        </form>
    </div>
</template>
<style>

</style>
<script>
    const API_URL = 'http://api.managers.work';

    export default{
        data(){
            return{
                task: {
                    header : '',
                    comment : '',
                    contact : '',
                }
            }
        },
        watch: {
            // в случае изменения маршрута запрашиваем данные вновь
            '$route': 'fetchData'
         },
        components:{
        },
        methods: {
            createTask() {
                let app = this
                this.axios.post(API_URL + '/task', {
                    header: app.task.header,
                    comment: app.task.comment,
                    contact: app.task.contact
                })
                .then(function (response) {
                    app.task.header = '';
                    app.task.comment = '';
                    app.task.contact = '';
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        }
    }
</script>
