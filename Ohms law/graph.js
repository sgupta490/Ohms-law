




function Display(){

  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx,{
    type: "line",
    data: {
      labels: current,
      datasets: [
        {
          data: volt,
          label: "Voltage vs Current",
          borderColor: "red",
          fill: false
        },
      ]
    }
  });
}



