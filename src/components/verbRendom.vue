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
  }

}
</script>

<template>
    <div>
        {{verbForms[1]}}
    </div>
</template>

 <style>
 
</style>