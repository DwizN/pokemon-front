<template>
    <div class="detail-pokemon">
        <div v-if="!this.data">
            <h1>Le pokémon {{this.$route.params.id}} n'a pas été trouvé ! </h1>
        </div>
        <div v-else>
            <div class="row">
                <div class="col-6">
                    <img :src="'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + ('00' + data.numero).slice(-3) + '.png'">
                </div>
                <div class="col-6 text-left py-4 right-side">
                    <h1>
                        <span class="badge badge-primary">{{data.nom}}</span>
                        <span class="badge badge-secondary ml-2">{{('00' + data.numero).slice(-3)}}</span>
                    </h1>
                    <h3 class="my-4">{{data.description}}</h3>
                    <div class="row my-3 mx-1 pokemon-ability-info my-2">
                        <div class="col-6">
                            <span class="text-white ability d-block mt-2">Taille:</span>
                            <span v-if="data && data.caracteristiques"
                                class="text-dark ability d-block mb-2">{{data.caracteristiques.taille}}m</span>
                            <span class="text-white ability d-block">Poids:</span>
                            <span v-if="data && data.caracteristiques"
                                class="text-dark ability d-block mb-2">{{data.caracteristiques.poids}}kg</span>
                        </div>
                        <div class="col-6">
                            <span class="text-white ability d-block mt-2">Catégorie:</span>
                            <span v-if="data && data.caracteristiques"
                                class="text-dark ability d-block mb-2">{{data.caracteristiques.categorie}}</span>
                            <span class="text-white ability d-block">Talent:</span>
                            <span v-if="data && data.caracteristiques"
                                class="text-dark ability d-block mb-2">{{data.caracteristiques.talent}}</span>
                        </div>
                    </div>
                    <h3><b>Type: </b>{{data.type}}</h3>
                    <h3><b>Faiblesse: </b>{{data.caracteristiques.faiblesse}}</h3>
                    <h3><b>Force: </b>{{data.caracteristiques.force}}</h3>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { URI } from './../env'
    export default {
        name: 'DetailsPokemon',
        data() {
            return {
                data: null
            }
        },

        mounted() {
            this.axios.get(URI + 'pokemons/' + this.$route.params.id).then((response) => {
                this.data = response.data
            }).catch(() => {
                this.$bvToast.toast("Impossible de récupérer le pokémon numéro : " + this.$route.params.id, {
                    title: 'Une erreur s\'est produite',
                    variant: 'danger',
                    solid: true,
                    autoHideDelay: 10000,
                    toaster: 'b-toaster-bottom-right'
                })
            });
        },
    }
</script>
<style scoped>
    .pokemon-ability-info {
        background-color: #30a7d7;
        border-radius: 5px;
    }

    .ability {
        font-size: 18px;
    }

    .right-side {
        background-color: #F5F5F5
    }
</style>