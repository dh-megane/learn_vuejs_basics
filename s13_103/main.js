new Vue({
  el: '#app',
  methods: {
    handler: function (event, message) {
      console.log(event)
      console.log(message)
      console.log(event.srcElement.value)
    }
  }
})
