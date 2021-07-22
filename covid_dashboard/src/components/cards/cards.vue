<template>
<div class="itens">
        <strong>--{{ uf }}--<br></strong>
      <strong>{{data}}</strong><hr>
      <strong>{{ city }}<br></strong>

      confirmados:{{confirmados}}<br>
      mortes:{{mortes}}<hr>
      taxa de mortalidade:<br>
      {{ (mortalidade *100).toFixed(2)}}%
    </div>
</template>
<script>
export default{
    props:['uf','mortes','mortalidade', 'data', 'confirmados','city'],
}
</script>
<style scoped>
.itens{
    
    padding: 10px;
    margin: 10px;
    width: fit-content;
    background: chartreuse;
    border-radius: 20px;
    transition: 0.5s;
}
.itens:hover{
    background: coral;
}
</style>
