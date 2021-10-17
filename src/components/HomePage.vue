<template>
    <div>
        <div class="container py-3">
            <div v-if="data === null || data.length === 0">
                <h1>Aucun pokémon trouvé! </h1>
            </div>
            <div class="d-flex flex-wrap" v-else>
                <div v-for="pokemon in data" :key="pokemon.nom" class="d-flex">
                    <Pokemon :pokemon="pokemon" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Pokemon from './Pokemon.vue'
    import { URI } from './../env'

    export default {
        name: 'HomePage',
        components: {
            Pokemon
        },
        data() {
            return {
                data: null
            }
        },

        mounted() {
            this.axios.get(URI + 'pokemons/').then((response) => {
                this.data = response.data
            }).catch(() => {
                this.$bvToast.toast("Impossible de récupérer la liste des pokémons", {
                    title: 'Une erreur s\'est produite',
                    variant: 'danger',
                    solid: true,
                    autoHideDelay: 10000,
                })
                this.data = this.getFakeJson();
            });
        },

        methods: {
            deletePokemon(id) {
                this.data.splice(this.data.findIndex(key => key.id === id), 1);
                this.$bvToast.toast("Le pokémon a bien été supprimé ! ", {
                    title: 'Suppression réussie !',
                    variant: 'success',
                    solid: true,
                    autoHideDelay: 10000,
                })
            }
        }
    }
</script>