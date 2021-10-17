import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './components/HomePage.vue'
import DetailsPokemon from './components/DetailsPokemon.vue'
import AddPokemon from './components/AddPokemon.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/pokemons/:id',
      name: 'detailsPokemon',
      component: DetailsPokemon,
      props: true
    },
    {
        path: '/new',
        name: 'newPokemon',
        component: AddPokemon
    },
    {
        path: '/pokemon/update/:id',
        name: 'updatePokemon',
        component: AddPokemon,
        props: true
      },
  ]
})
