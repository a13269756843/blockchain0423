var app = new Vue({
    el: '#app',
    data: {
      tx:[]
    },
    mounted(){
      console.log('view mounted');
      this.getTx();
    },
    methods:{
      getTx(){
        axios.get('http://localhost:8080/transaction/getTranscation')
        .then(function (response) {
            // handle success
            console.log(response);
            app.tx = response.data;

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
      }
    }
  })
  