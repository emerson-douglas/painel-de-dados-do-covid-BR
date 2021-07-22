<template>
  <div id="app">
    filtro:
        <select name="filtro" id="filtro" v-model="filtro">
        <option value="AC">Acre</option>
    <option value="AL">Alagoas</option>
    <option value="AP">Amapá</option>
    <option value="AM">Amazonas</option>
    <option value="BA">Bahia</option>
    <option value="CE">Ceará</option>
    <option value="DF">Distrito Federal</option>
    <option value="ES">Espírito Santo</option>
    <option value="GO">Goiás</option>
    <option value="MA">Maranhão</option>
    <option value="MT">Mato Grosso</option>
    <option value="MS">Mato Grosso do Sul</option>
    <option value="MG">Minas Gerais</option>
    <option value="PA">Pará</option>
    <option value="PB">Paraíba</option>
    <option value="PR">Paraná</option>
    <option value="PE">Pernambuco</option>
    <option value="PI">Piauí</option>
    <option value="RJ">Rio de Janeiro</option>
    <option value="RN">Rio Grande do Norte</option>
    <option value="RS">Rio Grande do Sul</option>
    <option value="RO">Rondônia</option>
    <option value="RR">Roraima</option>
    <option value="SC">Santa Catarina</option>
    <option value="SP">São Paulo</option>
    <option value="SE">Sergipe</option>
    <option value="TO">Tocantins</option>
    </select>
    <br>
    <div class="container">
    <!-- conteúdo aqui !-->
    
    <p v-for="log in  logsComFiltro" :key="log.city_ibge_code">
      <card :id="log.city" :uf="log.state" :mortes="log.deaths" :mortalidade="log.death_rate" :data="log.date" :confirmados="log.confirmed" :city="log.city"/>
      </p>

  </div>
  </div>
</template>

<script>
import dados from './components/services/dados'
import card from './components/cards/cards.vue'

export default {
  name: 'App',

  components: {
    card,
  },
  data(){
    return{
      loged: [],
      num:10000,
      filtro:'sp',
      realDate:'',
    }
  },

  mounted(){
    dados.listar(this.num).then(res =>{
      console.log(res.data)
      this.loged=res.data.results
    })
  },
    computed: {

    logsComFiltro() {

      if(this.loged) {
        
        let exp = new RegExp(this.filtro, 'i');
        return this.loged.filter(log => exp.test(log.state));
      } else {
        return this.loged;
      }
    },
  },
}
</script>

<style>
.container {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;

  width: fit-content;


  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
