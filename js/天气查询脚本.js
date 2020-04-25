var app = new Vue({
  el: "#totalApp",
  data: {
    city: "",
    data: [],
    hotCityList: ["北京", "上海", "广州", "深圳", "烟台", "武汉"],
  },
  methods: {
    getWeather: function (index) {
      if (index >= 0 && index <= hotCityList.length - 1) {
        this.city = this.hotCityList[index];
      }
      axios
        .get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city)
        .then((response) => {
          this.data = response.data.data.forecast;
        });
      this.city = "";
    },
  },
});
