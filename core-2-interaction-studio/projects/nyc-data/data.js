// Fetch data from API endpoint
fetch('https://data.cityofnewyork.us/resource/x3bb-kg5j.json?$query=SELECT%20%60school_dbn%60%2C%20%60date%60%2C%20%60enrolled%60%2C%20%60absent%60%2C%20%60present%60%2C%20%60released%60')
  .then(response => response.json())
  .then(data => {
    // Initialize object to hold totals for each day
    let dailyTotals = {};
    
    // Loop over data for each day in January
    for (let i = 0; i < data.length; i++) {
      let row = data[i];
      
      // Check if date is in January
      if (row.date.startsWith('201809')) {
        let day = row.date.slice(8, 10);
        if (!dailyTotals[day]) {
          dailyTotals[day] = {
            enrolled: 0,
            present: 0
          };
        }
        dailyTotals[day].enrolled += parseInt(row.enrolled);
        dailyTotals[day].present += parseInt(row.present);
      }
    }
    
    // Loop over daily totals to calculate percentages and output result to console
    Object.keys(dailyTotals).forEach(day => {
      let totalEnrolled = dailyTotals[day].enrolled;
      let totalPresent = dailyTotals[day].present;
      let percentagePresent = totalPresent / totalEnrolled * 100;
      console.log(`Percentage of present students on ${day}/01/2022: ${percentagePresent}%`);
    });
  });
