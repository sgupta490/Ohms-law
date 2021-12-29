  
  
  
  //---------------Current----------------//
  function calculate()
{
    var R1value = parseFloat(document.getElementById("R1").value);
    var R2value = parseFloat(document.getElementById("R2").value);
    var R3value = parseFloat(document.getElementById("R3").value);
    var Vvalue = parseFloat(document.getElementById("V").value);


    var current =  Vvalue / (R1value + R2value + R3value) ; 
    
    document.getElementById("A").value = parseFloat(current).toFixed(3);

}



//-----------------Add Table--------------------//

let volt = [];
let current = [];
function addHTMLTableRow()
{
    var table = document.getElementById("table"),
        newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        cell4 = newRow.insertCell(3),
        cell5 = newRow.insertCell(4),

        R1 = document.getElementById("R1").value,
        R2 = document.getElementById("R2").value,
        R3 = document.getElementById("R3").value,
        V = document.getElementById("V").value,
        A = document.getElementById("A").value;

         volt.push(V);
         current.push(A);
   
   
     cell1.innerHTML = R1;
    cell2.innerHTML = R2;
    cell3.innerHTML = R3;
    cell4.innerHTML =  V;
    cell5.innerHTML = A;

}

//------------------------Displaygraph------------//

function Display(){
    document.getElementById('myChart').style.visibility = 'visible';

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
  
  
//-------------------------Clear-------------------------//  

function clearRow(){
  //  location.reload()
    var tableHeaderRowCount = 1;
    var table = document.getElementById("table");
    var rowCount = table.rows.length;
    for (var i = tableHeaderRowCount; i < rowCount; i++) {
    table.deleteRow(tableHeaderRowCount);
    volt.pop();
    current.pop();
    }
    document.getElementById('myChart').style.visibility = 'hidden';
}