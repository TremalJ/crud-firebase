<template>
    <div>
        <h1>Editar</h1>
        {{id}} - {{tarea}}
        <form @submit.prevent="editarTarea(tarea)">
            <input v-model="tarea.nombre" type="text">
            <button>Editar</button>
        </form>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name : 'Editar',
    data(){
        return{
            id: this.$route.params.id
        }
    },
    methods:{
        ...mapActions(['getTarea', 'editarTarea'])
    },
    created(){
        this.getTarea(this.id)
    },
    computed:{
        ...mapState(['tarea'])
    }
}
</script>