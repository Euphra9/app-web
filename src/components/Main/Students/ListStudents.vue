<style>
table, th, td {
  border: 1px solid black;
}
</style>
<template>
  <p> Gestion des matériels </p>
  <router-link to="">Ajouter</router-link>
  <table id="firstTable">
    <thead>
    <tr>
      <th>Identifiant</th>
      <th>Nom</th>
      <th>Prenom</th>
      <th>Voir</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>EL01</td>
      <td>LUZOLO</td>
      <td>Euphraim</td>
      <td>
        <button type="button"></button>
      </td>
    </tr>
    <tr>
      <td>RK02</td>
      <td>KADI</td>
      <td>Ratiba</td>
      <td>
        <button type="button"></button>
      </td>
    </tr>
    <tr>
      <td>ZM</td>
      <td>ZEMRANI</td>
      <td>Malak</td>
      <td>
        <button type="button"></button>
      </td>
    </tr>
    </tbody>
  </table>
</template>