const popTracker = (p0, per, aug, pfin) => {
  let percent = per / 100;
  let i = 0;
  while (p0 < pfin) {
    p0 = p0 * (1 + percent) + aug;
    i++;
  }
  console.log(`It would take ${i} years to reach a population of ${pfin}.`);
};

popTracker(1000, 2.5, 50, 2000);

function nbYear(p0, percent, aug, p) {
  let percentVal = percent / 100;
  let population = p0 + p0 * percentVal + aug;
  let years = 1;

  while (population < p) {
    population = population + population * percentVal + aug;
    years++;
  }
  console.log(years);
  return years;
}

function nbYear(p0, percent, aug, p) {
  percent = percent / 100;
  let years = 0;
  while (p0 < p) {
    p0 = p0 * (1 + percent) + aug;
    years++;
  }
  return years;
}


function nbYear(startingPopulation, percentGrowth, numberOfNewInhabitants, endGoal) {
  
  percentGrowth = (percentGrowth / 100);
  
  let currentPopulation = startingPopulation;
  let numberOfYears = 0;
  
  for(let i = 0; currentPopulation < endGoal; i++, numberOfYears++) {
    currentPopulation += Math.floor(currentPopulation * percentGrowth + numberOfNewInhabitants); 
    console.log(`Year ${i+1} Population: ${currentPopulation}`);
  }
  return numberOfYears;