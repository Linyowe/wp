function weekday(str) {
    var weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    var index = weekdays.indexOf(str.toLowerCase());
    if (index !== -1) {
        return index;
    } else {
        return "Invalid weekday"; 
    }
}

console.log(weekday("Monday"));
console.log(weekday("Wednesday")); 
console.log(weekday("Sunday")); 
console.log(weekday("xyz")); 
