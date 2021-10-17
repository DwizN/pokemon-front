<template>
    <div class="container py-3">
        <div class="row">
            <div class="col-6">
                <h1 v-if="!this.$route.params.id" class="mb-3">Ajout d'un nouveau pokémon</h1>
                <h1 v-else>Modification du pokémon <b>{{this.form.nom}}</b></h1>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Nom</span>
                    <input type="text" :disabled="this.$route.params.id" v-model="form.nom" class="form-control"
                        placeholder="Nom du pokémon" aria-label="nom" aria-describedby="basic-addon1" required>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Numéro</span>
                    <input type="number" v-model="form.numero" class="form-control" placeholder="Numéro"
                        aria-label="Numéro" aria-describedby="basic-addon1" required>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">Description</span>
                    <textarea class="form-control" v-model="form.description" placeholder="Description"
                        aria-label="Description"></textarea>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Taille</span>
                    <input type="number" v-model="form.taille" class="form-control" placeholder="Taille"
                        aria-label="Taille" aria-describedby="basic-addon1" required>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Poids</span>
                    <input type="number" v-model="form.poids" class="form-control" placeholder="Poids"
                        aria-label="Poids" aria-describedby="basic-addon1" required>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Catégorie</span>
                    <input type="text" v-model="form.categorie" class="form-control" placeholder="Catégorie"
                        aria-label="Catégorie" aria-describedby="basic-addon1" required>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Talent</span>
                    <input type="text" v-model="form.talent" class="form-control" placeholder="Talent"
                        aria-label="Talent" aria-describedby="basic-addon1" required>
                </div>
                <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupSelect01">Type</label>
                    <select v-model="form.type" class="form-select" id="inputGroupSelect01">
                        <option value="ACIER">Acier</option>
                        <option value="COMBAT">Combat</option>
                        <option value="DRAGON">Dragon</option>
                        <option value="EAU">Eau</option>
                        <option value="ELEKTRIK">Elektrik</option>
                        <option value="FEE">Fée</option>
                        <option value="FEU">Feu</option>
                        <option value="GLACE">Glace</option>
                        <option value="INSECTE">Insecte</option>
                        <option value="NORMAL">Normal</option>
                        <option value="OBSCUR">Obscur</option>
                        <option value="PLANTE">Plante</option>
                        <option value="POISON">Poison</option>
                        <option value="PSY">Psy</option>
                        <option value="ROCHE">Roche</option>
                        <option value="SOL">Sol</option>
                        <option value="SPECTRE">Spectre</option>
                        <option value="TENEBRE">Tenebre</option>
                        <option value="VOL">Vol</option>
                    </select>
                </div>
                <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupSelect01">Force</label>
                    <select v-model="form.force" class="form-select" id="inputGroupSelect01">
                        <option value="ACIER">Acier</option>
                        <option value="COMBAT">Combat</option>
                        <option value="DRAGON">Dragon</option>
                        <option value="EAU">Eau</option>
                        <option value="ELEKTRIK">Elektrik</option>
                        <option value="FEE">Fée</option>
                        <option value="FEU">Feu</option>
                        <option value="GLACE">Glace</option>
                        <option value="INSECTE">Insecte</option>
                        <option value="NORMAL">Normal</option>
                        <option value="OBSCUR">Obscur</option>
                        <option value="PLANTE">Plante</option>
                        <option value="POISON">Poison</option>
                        <option value="PSY">Psy</option>
                        <option value="ROCHE">Roche</option>
                        <option value="SOL">Sol</option>
                        <option value="SPECTRE">Spectre</option>
                        <option value="TENEBRE">Tenebre</option>
                        <option value="VOL">Vol</option>
                    </select>
                </div>
                <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupSelect01">Faiblesse</label>
                    <select v-model="form.faiblesse" class="form-select" id="inputGroupSelect01">
                        <option value="ACIER">Acier</option>
                        <option value="COMBAT">Combat</option>
                        <option value="DRAGON">Dragon</option>
                        <option value="EAU">Eau</option>
                        <option value="ELEKTRIK">Elektrik</option>
                        <option value="FEE">Fée</option>
                        <option value="FEU">Feu</option>
                        <option value="GLACE">Glace</option>
                        <option value="INSECTE">Insecte</option>
                        <option value="NORMAL">Normal</option>
                        <option value="OBSCUR">Obscur</option>
                        <option value="PLANTE">Plante</option>
                        <option value="POISON">Poison</option>
                        <option value="PSY">Psy</option>
                        <option value="ROCHE">Roche</option>
                        <option value="SOL">Sol</option>
                        <option value="SPECTRE">Spectre</option>
                        <option value="TENEBRE">Tenebre</option>
                        <option value="VOL">Vol</option>
                    </select>
                </div>
                <button type="button" class="btn btn-secondary" @click="reset()">Reset</button>
                <button v-if="!this.$route.params.id" type="button" class="btn btn-primary ml-2"
                    @click="actionPokemon()">Ajouter le pokémon</button>
                <button v-else type="button" class="btn btn-primary ml-2" @click="actionPokemon()">Modifier le
                    pokémon</button>
            </div>
            <div class="col-6">
                <img v-if="this.form.numero"
                    :src="'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + ('00' + form.numero).slice(-3) + '.png'"
                    width="500">
            </div>
        </div>
    </div>
</template>
<script>
    import { URI } from './../env'
    export default {
        name: 'AddPokemon',
        data() {
            return {
                form: {
                    nom: null,
                    description: null,
                    numero: null,
                    taille: null,
                    poids: null,
                    categorie: null,
                    talent: null,
                    type: null,
                    faiblesse: null,
                    force: null
                }
            }
        },

        mounted() {
            if (this.$route.params.id) {
                this.axios.get(URI + 'pokemons/' + this.$route.params.id).then((response) => {
                    this.fillData(response.data)
                }).catch(() => {
                    this.$bvToast.toast("Impossible de récupérer le pokémon numéro : " + this.$route.params.id +
                        " pour édition", {
                            title: 'Une erreur s\'est produite',
                            variant: 'danger',
                            solid: true,
                            autoHideDelay: 10000,
                            toaster: 'b-toaster-bottom-right'
                        })
                });
            }

        },
        methods: {
            actionPokemon() {
                let request = {
                    id: this.$route.params.id ? this.$route.params.id : null,
                    nom: this.form.nom,
                    description: this.form.description,
                    numero: parseInt(this.form.numero),
                    taille: parseInt(this.form.taille),
                    poids: parseInt(this.form.poids),
                    categorie: this.form.categorie,
                    talent: this.form.talent,
                    type: this.form.type,
                    faiblesse: this.form.faiblesse,
                    force: this.form.force
                }
                if (!this.$route.params.id) {
                    this.addPokemon(request);
                } else {
                    this.updatepokemon(request);
                }
            },

            addPokemon(request) {
                this.axios.post(URI + 'pokemons/', request).then(() => {
                    this.$bvToast.toast("Le pokémon a bien été ajouté ! ", {
                        title: 'Insertion réussie !',
                        variant: 'success',
                        solid: true,
                        autoHideDelay: 10000,
                        toaster: 'b-toaster-bottom-right'
                    })
                    setTimeout(() => {this.$router.push({ name: 'home'})}, 1500);
                }).catch(() => {
                    this.$bvToast.toast("L'ajout du pokémon a échoué", {
                        title: 'Une erreur s\'est produite',
                        variant: 'danger',
                        solid: true,
                        autoHideDelay: 10000,
                        toaster: 'b-toaster-bottom-right'
                    })
                });
            },
            updatepokemon(request) {
                this.axios.put(URI + 'pokemons/' + request.id + '/', request).then(() => {
                    this.$bvToast.toast("Le pokémon" + request.nom + " a bien été modifié ! ", {
                        title: 'Modification réussie !',
                        variant: 'success',
                        solid: true,
                        autoHideDelay: 10000,
                        toaster: 'b-toaster-bottom-right'
                    })
                    setTimeout(() => {this.$router.push({ name: 'home'})}, 1500);
                }).catch(() => {
                    this.$bvToast.toast("La modification du pokémon a échoué", {
                        title: 'Une erreur s\'est produite',
                        variant: 'danger',
                        solid: true,
                        autoHideDelay: 10000,
                        toaster: 'b-toaster-bottom-right'
                    })
                });
            },
            reset() {
                this.form.nom = null,
                    this.form.description = null,
                    this.form.numero = null,
                    this.form.taille = null,
                    this.form.poids = null,
                    this.form.categorie = null,
                    this.form.talent = null,
                    this.form.type = null,
                    this.form.faiblesse = null,
                    this.form.force = null
            },
            fillData(response) {
                this.form.nom = response.nom,
                    this.form.description = response.description,
                    this.form.numero = response.numero,
                    this.form.type = response.type
                if (response.caracteristiques) {
                    this.form.taille = response.caracteristiques.taille,
                        this.form.poids = response.caracteristiques.poids,
                        this.form.categorie = response.caracteristiques.categorie,
                        this.form.talent = response.caracteristiques.talent,
                        this.form.faiblesse = response.caracteristiques.faiblesse,
                        this.form.force = response.caracteristiques.force
                }
            }
        }
    }
</script>
<style scoped>
    .input-group-text {
        width: 120px;
        border-radius: 0.25em 0 0 0.25em;
    }

    .form-select {
        flex: 1;
    }
</style>