var prompt = require('prompt');

//
// Start the prompt
//
prompt.start();

//
// Get two properties from the user: username and email
//
prompt.get(['value', 'units'], function (err, result) {
    var getValue = result.value;
    var getUnits = result.units;
    var converter;
    var newValue = function (quantity, converter) {
        return quantity * converter;
    };

    switch (getUnits) {

        case 'км':
            converter = 1000;
            console.log(getValue, " км = ", newValue(getValue, converter), " м");
            break;
        case 'г':
            converter = 60;
            console.log(getValue, " г = ", newValue(getValue, converter), " хв");
            break;
        case 'кг':
            converter = 1000;
            console.log(getValue, " кг = ", newValue(getValue, converter), " гр");
            break;
    };


});



