<script>

export default{

  data(){
    return{
        verbForms: {
            1: ['be', '[быть, являться]', "['was, were']", 'been'],
            2: ['beat', '[бить, колотить]', 'beat', 'beaten'],
            3: ['become', 'становиться', 'became', 'become']
        }
    }
  },
  computed:{
    rendomNumFromVerbs (){
        return Math.floor(Math.random() * Object.keys(this.verbForms).length)
    }
  }

}
</script>

<template>
    <div>
        {{rendomNumFromVerbs}}
    </div>
</template>

 <style>
 
</style>