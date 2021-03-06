/** Custom JavaScript for Tesla Word Press Site 
  *   Author: Nicholas Seamans
  **/

/** Chart.js Code **/

var mshare = document.getElementById('Marketshare').getContext('2d');
var chart = new Chart(mshare, {
    type: 'doughnut',
    data: {
        labels: ['Tesla', 
                 'Chevrolet', 
                 'Nissan', 
                 'Fiat', 
                 'Volkswagen', 
                 'Ford', 
                 'BMW', 
                 'Kia', 
                 'Other'],
        datasets: [{
            backgroundColor: ["#4b4655", 
                              "#3e7787" , 
                              "#97a0a3", 
                              "#f66349", 
                              "#2f424e", 
                              "#7ba7a0", 
                              "#77838e", 
                              "#7d9689", 
                              "#3d8c95"],
            borderColor: 'white',
            data: [45, 16, 15, 8, 4, 2, 2, 2, 6]
        }]
    },
    options: {
      legend: {
          display: true,
          position: 'left'
      }
    }
});

/** Jquery Code **/

$(document).ready(function(){   
  /* Data for each model of vehicle */
  const model3info = [
    "Model 3",
    "http://18.189.182.245/wp-content/uploads/2020/12/2021-tesla-model-3-mmp-1-1602871915.jpg", 
    " 'The Model 3 is a desirable and relatively affordable all-electric car that has helped the Tesla brand push EVs into the mainstream.' ",
    "The Tesla Model 3 is an electric four-door fastback sedan developed by Tesla. The Model 3 Standard Range Plus version delivers an" + 
    " EPA-rated all-electric range of 263 miles (423 km) and the Long Range versions deliver 353 miles (568 km)",
    37990
  ];
  
  const modelSinfo = [
    "Model S",
    "http://18.189.182.245/wp-content/uploads/2020/12/2020-tesla-model-s-113-1597277061.jpg", 
    " 'The Model 3 is a desirable and relatively affordable all-electric car that has helped the Tesla brand push EVs into the mainstream.' ",
    "Model S sets an industry standard for performance and safety. Tesla's all-electric powertrain delivers unparalleled performance" + 
    " in all weather conditions – with Dual Motor All-Wheel Drive, adaptive air suspension and ludicrous acceleration.",
    69420
  ];
  
  const modelXinfo = [
    "Model X",
    "http://18.189.182.245/wp-content/uploads/2020/12/2021-tesla-model-x-mmp-1-1604614401.jpg", 
    "Among electric SUVs, the Model X reigns supreme in driving range, but its rivals offer a better luxury experience. ",
    "Model X is one of the safest SUVs ever. Built from the ground up as an electric vehicle, the body, chassis, restraints" + 
    " and battery technology provide a very low probability of occupant injury.",
    79990
  ];
  
  const modelYinfo = [
    "Model Y", 
    "http://18.189.182.245/wp-content/uploads/2020/12/2021-tesla-model-y-mmp-1-1604701558.jpg", 
    "Peppy electric powertrain, spacious cargo hold, cutting-edge technology features.",
    "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
    49990
  ];
  
  /** class: model
    * This class stores all theb information avalible for each model to be presented on the 
    * Home Menu
    **/
  class model {
    constructor(name, image, quote, description, cost) {
      this.name = name;
      this.image = image; 
      this.quote = quote;
      this.description = description;
      this.cost = cost;
    }
    /** payments
      * method to calculate the monthly cost of a vehicle.
      * The Term is the amount of years and the percent is the 
      * percentage rate of the loan. 
      **/
    payments(term, percent){
      let intrest = this.cost * percent;
      let calc = (this.cost + intrest ) / (12 * term );
    	return Math.floor(calc);
    }
  }
    
  const model3 = new model(model3info[0], model3info[1], 
                           model3info[2], model3info[3], model3info[4]);
  const modelS = new model(modelSinfo[0], modelSinfo[1], 
                           modelSinfo[2], modelSinfo[3], modelSinfo[4]);
  const modelX = new model(modelXinfo[0], modelXinfo[1], 
                           modelXinfo[2], modelXinfo[3], modelXinfo[4]);
  const modelY = new model(modelYinfo[0], modelYinfo[1], 
                           modelYinfo[2], modelYinfo[3], modelYinfo[4]);
  

  /* Initialize the vehicle selection options */
  $("#vehicle_name").text(model3.name);
  $("#vehicle_image").attr("src", model3.image);
  $("#vehicle_quote").text(model3.quote);
  $("#vehicle_description").text(model3.description);
  $("#vehicle_cost").text("$" + model3.cost);
  $("#vehicle_finance").text("$" + model3.payments(5, 0.05));
    
  /* Car Buttons
   * Code to choose a vehicle
   */
  $("#button_model3").click(function(){
    $("#vehicle_name").text(model3.name);
    $("#vehicle_image").attr("src", model3.image);
    $("#vehicle_description").text(model3.description);
    $("#vehicle_cost").text("$" + model3.cost);
    $("#vehicle_finance").text("$" + model3.payments(5, 0.05));
  });
  $("#button_modelS").click(function(){
    $("#vehicle_name").text(modelS.name);
    $("#vehicle_image").attr("src", modelS.image); 
    $("#vehicle_description").text(modelS.description);
    $("#vehicle_cost").text("$" + modelS.cost);
    $("#vehicle_finance").text("$" + modelS.payments(5, 0.05));
  });
  $("#button_modelX").click(function(){
    $("#vehicle_name").text(modelX.name);
    $("#vehicle_image").attr("src", modelX.image);
    $("#vehicle_description").text(modelX.description);
    $("#vehicle_cost").text("$" + modelX.cost);
    $("#vehicle_finance").text("$" + modelX.payments(5, 0.05));
  });
  $("#button_modelY").click(function(){
    $("#vehicle_name").text(modelY.name);
    $("#vehicle_image").attr("src", modelY.image);
    $("#vehicle_description").text(modelY.description);
    $("#vehicle_cost").text("$" + modelY.cost);
    $("#vehicle_finance").text("$" + modelY.payments(5, 0.05));
  });
});
