<template>
    <div class="pokemon p-3 d-flex position-relative">
        <div class="card" style="width: 18rem;">
            <img :src="'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + ('00' + pokemon.numero).slice(-3) + '.png'"
                class="card-img-top" :alt="'Image pokémon ' + pokemon.nom">
            <div class="card-body">
                <h5 class="card-title">{{('00' + pokemon.numero).slice(-3)}} - <b>{{pokemon.nom}}</b></h5>
                <p class="card-text" style="padding-bottom:25px;">{{pokemon.description}}</p>
                <div class="actions position-absolute" style="bottom:0; padding:15px;">
                    <button type="button" class="btn btn-info mr-1"
                        @click="openDetailsPokemon(pokemon.id)">Détails</button>
                    <button type="button" class="btn btn-secondary mr-1"
                        @click="openUpdatePokemon(pokemon.id)">Modifier</button>
                    <button type="button" class="btn btn-danger" @click="deletePokemon(pokemon.id)">Supp</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { URI } from './../env'
    export default {
        name: 'Pokemon',
        props: ['pokemon'],

        methods: {
            openDetailsPokemon(id) {
                this.$router.push({
                    name: 'detailsPokemon',
                    params: {
                        id: id
                    }
                })
            },
            openUpdatePokemon(id) {
                this.$router.push({
                    name: 'updatePokemon',
                    params: {
                        id: id
                    }
                })
            },
            deletePokemon(id) {
                this.axios.delete(URI + 'pokemons/' + id).then(() => {
                    this.$parent.deletePokemon(id);
                }).catch(() => {
                    this.$bvToast.toast("La suppression du pokémon a échoué", {
                        title: 'Une erreur s\'est produite',
                        variant: 'danger',
                        solid: true,
                        autoHideDelay: 10000
                    })
                });
            }
        }
    }
</script>
<style scoped>
    .card-body {
        background-color: #F5F5F5;
    }
</style>