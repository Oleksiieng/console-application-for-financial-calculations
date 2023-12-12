var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];


// 1. Total Number of Months
// This is straightforward as it's the length of the finances array.

// 2. Net Total Amount of Profit/Losses
// Sum up the profit/loss values from each month.

// 3. Average Change in Profit/Losses
// Calculate the change in profit/loss from each month to the next, sum these changes, and then find the average.

// 4. Greatest Increase in Profits
// Track the largest increase in profit between consecutive months.

// 5. Greatest Decrease in Losses
// Track the largest decrease in losses between consecutive months.

let totalMonths = finances.length;
let totalProfitLosses = 0;
let totalChange = 0;
let greatestIncreaseAmount = 0;
let greatestIncreaseMonth = '';
let greatestDecreaseAmount = 0;
let greatestDecreaseMonth = '';

for (let i = 0; i < totalMonths; i++) {
    // Add to total profit/loss
    totalProfitLosses += finances[i][1];

    // Skip the first month as there's no previous month to compare
    if (i === 0) continue;

    // Calculate the change from the previous month
    let change = finances[i][1] - finances[i - 1][1];
    totalChange += change;

    // Check for greatest increase in profit
    if (change > greatestIncreaseAmount) {
        greatestIncreaseMonth = finances[i][0];
        greatestIncreaseAmount = change;
    }

    // Check for greatest decrease in losses
    if (change < greatestDecreaseAmount) {
        greatestDecreaseMonth = finances[i][0];
        greatestDecreaseAmount = change;
    }
}

// Calculate the average change
let averageChange = totalChange / (totalMonths - 1);

console.log("%cFinancial Analysis", "color: black; font-size: 20px");
console.log('----------------------------------------------');
console.log(`Total Months: ${totalMonths}`);
console.log(`Net Total Profit/Loss: ${totalProfitLosses}`);
console.log(`Average Monthly Change: ${averageChange}`);
console.log(`Greatest Increase in Profit: ${greatestIncreaseMonth} (${greatestIncreaseAmount})`);
console.log(`Greatest Decrease in Loss: ${greatestDecreaseMonth} (${greatestDecreaseAmount})`);