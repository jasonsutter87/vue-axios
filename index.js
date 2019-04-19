new Vue({
  el: '#app',
  data: {
      info: null,
      currentValue: 0,
      oldValue: null
  },
  filters: {
    currencydecimal (value) {
      this.currentValue = value.toFixed(2)
      return this.oldValue
    }
  },
  mounted: function () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then( response  => (this.info = response)
    )}
})
