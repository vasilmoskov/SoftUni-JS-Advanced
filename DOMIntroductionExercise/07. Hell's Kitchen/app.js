function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {

      let input = document.querySelector('#inputs textarea');

      let inputElements = JSON.parse(input.value);

      let restaurants = [];

      for (let i = 0; i < inputElements.length; i++) {
  
          let restaurant = {};
  
          let restaurantName = inputElements[i].split(' - ')[0];
  
          let workersData = inputElements[i].split(' - ')[1].split(', ');
  
          if (restaurants.some(r => r.name === restaurantName)) {
              let workers = restaurants.find(r => r.name === restaurantName).workers;
  
              let workersNames = [];
  
              workers.forEach(w => workersNames.push(w.name));
  
              for (let i = 0; i < workersData.length; i++) {
                  let name = workersData[i].split(' ')[0];
                  let salary = Number(workersData[i].split(' ')[1]);
  
                  if (workersNames.includes(name)) {
                      workers.find(w => w.name === name).salary = salary;
                  } else {
                      let worker = {
                          name: name,
                          salary: salary,
                      }
  
                      workers.push(worker);
                  }
  
  
              }
  
          } else {
              let workers = [];
  
              for (let i = 0; i < workersData.length; i++) {
                  let name = workersData[i].split(' ')[0];
                  let salary = Number(workersData[i].split(' ')[1]);
  
                  let worker = {
                      name: name,
                      salary: salary,
                  }
  
                  workers.push(worker);
              }
  
              restaurant.name = restaurantName;
              restaurant.workers = workers;
  
              restaurants.push(restaurant);
          }
      }

      let bestRestaurantName;
      let bestRestaurantAvgSalary = Number.MIN_SAFE_INTEGER;
      let bestRestaurant;

      for (const currRestaurant of restaurants) {
         let currResWorkers = currRestaurant.workers;

         let sumSalaries = 0;

         for (const currWorker of currResWorkers) {
            sumSalaries += Number(currWorker.salary);
         }

         let avgSalary = sumSalaries / currResWorkers.length;

         if (avgSalary > bestRestaurantAvgSalary) {
            bestRestaurantAvgSalary = avgSalary;
            bestRestaurantName = currRestaurant.name;
            bestRestaurant = currRestaurant;
         }
      }

      let bestRestaurantWorkers = bestRestaurant.workers;
      bestRestaurantWorkers.sort((w1, w2) => w2.salary - w1.salary);

      let bestRestaurantBestSalary = bestRestaurantWorkers[0].salary;

      let resBestRestaurant = `Name: ${bestRestaurantName} Average Salary: ${bestRestaurantAvgSalary.toFixed(2)} Best Salary: ${bestRestaurantBestSalary.toFixed(2)}`;

      let resBestResWorkers = '';

      for (const bestRestaurantWorker of bestRestaurantWorkers) {
         resBestResWorkers += `Name: ${bestRestaurantWorker.name} With Salary: ${bestRestaurantWorker.salary} `;
      }

      document.querySelector('#bestRestaurant p').textContent = resBestRestaurant;
      document.querySelector('#workers p').textContent = resBestResWorkers;
   }
}