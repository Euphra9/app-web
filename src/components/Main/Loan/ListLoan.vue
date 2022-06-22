<style>
table, th, td {
  border:1px solid black;
}
</style>
<template>
  <p> Gestion des prêts </p>
  <router-link to="">Ajouter</router-link>
  <table id="firstTable">
    <thead>
      <tr>
        <th>N°</th>
        <th>Date du prêt</th>
        <th>Matériel</th>
        <th>Preteur</th>
        <th>Etat</th>
        <th>Voir</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>20-03-2022</td>
        <td>Ordinateur</td>
        <td>Malak ZEMRANI</td>
        <td>Non rendu</td>
        <td><button type="button"></button></td>
      </tr>
    </tbody>
  </table>
</template>