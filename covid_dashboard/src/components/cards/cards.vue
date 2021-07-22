<template>
<div class="itens">
      <strong>{{data}}</strong><hr>
      <strong>{{ uf }}<br></strong>
      confirmados:{{confirmados}}<br>
      mortes:{{mortes}}<hr>
      taxa de mortalidade:<br>
      {{ (mortalidade *100).toFixed(2)}}%
    </div>
</template>
<script>
export default{
    props:['uf','mortes','mortalidade', 'data', 'confirmados'],
}
</script>
<style scoped>
.itens{
    
    padding: 10px;
    margin: 10px;
    width: fit-content;
    background: chartreuse;
    border-radius: 20px;
}
</style>
