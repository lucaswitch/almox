<template>
  <nav>
    <h3>User</h3>
    <ul>
      <li><router-link to="/inicio">Início</router-link></li>
      <li><router-link to="/agenda">Agenda</router-link></li>
    </ul>
    <hr />
    <h3>Materiais</h3>
    <ul>
      <li><router-link to="/materiais">Todos</router-link></li>
      <li><router-link to="/materiais/devolver">Devolver</router-link></li>
    </ul>
    <hr />
    <h3>Formulários</h3>
    <ul>
      <li><router-link to="/relatorio">Relatório</router-link></li>
    </ul>
    <hr />
    <h3>Pessoas</h3>
    <ul>
      <li><router-link to="/professores">Professores</router-link></li>
      <li><router-link to="/administradores">Administradores</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  width: 360px;
  background-color: #fafdfa;
}
nav a {
  text-decoration: none;
  color: #04201a;
}
a:active,
a:hover,
a.router-link-active {
  background-color: #cbe9df;
}
h3,
li {
  list-style: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
}
hr {
  border-top: 1px solid #bfc9c4;
}
</style>
