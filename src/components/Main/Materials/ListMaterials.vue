<style>
table, th, td {
  border: 1px solid black;
}
</style>
<template>
  <p> Gestion des matériels </p>
      <form action="">
        <input type="text" placeholder="Search.." name="search">
      </form>
  <router-link to="">Ajouter</router-link>
  <table id="firstTable">
    <thead>
    <tr>
      <th>Code barre</th>
      <th>Nom</th>
      <th>Description</th>
      <th>Voir</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>XTFDGD40</td>
      <td>Ordinateur</td>
      <td>PC HP 32GO</td>
      <td>
        <button type="button"></button>
      </td>
    </tr>
    </tbody>
  </table>
</template>
