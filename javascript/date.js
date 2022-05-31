exports.getDate = function(){
    const options = {weekday: "long", day: "numeric", month: "long", year: "numeric"}
    const date = new Date();
    return date.toLocaleDateString("en-US", options);
};
