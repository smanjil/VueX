
<template>
    <div id="box">
        <div id="app">

            <label class="label">Please enter your name: </label>

            <p class="control">
                <input type="text" v-model="newName"> <br><br>

                <button class="button is-dark" @click="addName">
                    Add Name
                </button> <br><br>
            </p>

            <name-list :list="nameList"></name-list>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',

        data () {
            return {
                newName: '',
                nameList: []
            }
        },

        methods: {
            addName(){
                this.nameList = this.nameList.concat(this.newName);
                var name = this.newName;
                this.newName = '';

                this.$http.post('http://127.0.0.1:5000/api/name/'+name).then((response) => {
                    console.log(response.message);
                });
            }
        },

        mounted(){
            this.axios.get('http://127.0.0.1:5000').then((response) => {
              console.log(response.data)
            })

            this.axios.get('http://127.0.0.1:5000/api/name').then((response) => {
                let a = response.data;
                this.nameList= this.nameList.concat(a);
                console.log(this.nameList);
            })
        }
    }
</script>

<style src="./assets/css/bulma.css">
