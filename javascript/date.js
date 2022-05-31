
exports.getDate = function(){
    const options = {weekday: "long", day: "numeric", month: "long", year: "numeric"}
    const date = new Date();
    return date.toLocaleDateString("en-US", options);
};
// Description: 
//      The getDate variable exports a function where it returns
//      the value of the current date in the string format.
// Variables:
//      options: Parameters in order to get the date in a specific format.
//      date: It creates a new object Date.
