<template>
  <div class="hello">
    <h1>{{ count }}</h1>
    <a @click="gotodemo">点我跳转</a>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      count: 0
    }
  },
  methods:{
    gotodemo:function(){
      this.$router.push({path:'demo'})
    },
    increment(){
      this.count++
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
