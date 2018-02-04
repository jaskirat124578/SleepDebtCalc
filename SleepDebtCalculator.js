function getSleepHours(day) {
    var hours = prompt(`how many hours of sleep did you get on ${day}`);
    return Number(hours);
}

function getActualSleepHours() {
    var sum = 0;
    sum += getSleepHours('Sunday');
    sum += getSleepHours('Monday');
    sum += getSleepHours('Tuesday');
    sum += getSleepHours('Wednesday');
    sum += getSleepHours('Thursday');
    sum += getSleepHours('Friday');
    sum += getSleepHours('Saturday');
    return sum;
}

function getIdealSleepHours() {
    var result = prompt('please enter ideal sleep hours');
    return result * 7;
}

function calculateSleepDebt() {
    var debt = 0;
    var actualSleepHours = getActualSleepHours();
    var idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of sleep!');
  } 
    else if (actualSleepHours > idealSleepHours) {
        debt = actualSleepHours - idealSleepHours;
        console.log(`You got ${debt} hours more sleep than you need`);
  } 
    else if (actualSleepHours < idealSleepHours) {
        debt = actualSleepHours - idealSleepHours;
        console.log(`You slept ${-debt} too few hours`);
  } else {
      console.log('please enter valid numbers');
  }
}
