var app = new Vue({
    el: '#app',
    data: {
      blocks:[]
    },
    mounted(){
      console.log('view mounted');
      this.getBlock();
    },
    methods:{
      getBlock(){
        axios.get('http://localhost:8080/block/getRecentBlocks')
        .then(function (response) {
            // handle success
            console.log(response);
            app.blocks = response.data;

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
      }
    }
  })