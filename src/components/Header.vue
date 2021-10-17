<template>
    <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
        <router-link to="/" class="navbar-brand">
        <img src="../assets/pikachu.png" alt="" height="24" class="d-inline-block align-text-top">
        Ulco'Kémon
        </router-link>
    <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/new">
                <button type="button" class="btn btn-info">Ajouter un pokémon</button>
            </router-link>
        </li>
    </ul>
    </div>
    </nav>
</template>