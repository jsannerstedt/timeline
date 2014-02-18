(function () {
    // base view model
    var vm = {
        data: [],
        time: [],
        // bound to the container, will get the scroll position from the bindinghandler in extensions
        currentPosition: ko.observable()
    };

    // create a computed variable, will listen to changes in the current position
    vm.activityColor = ko.computed(function () {
        return getCurrentActivity(vm.currentPosition());
    });


    // FAKE DATA PROVIDERS
    var colors = [
        "purple",
        "pink",
        "green",
        "black",
        "red",
        "yellow"
    ];

    for (var i = 0; i < 300; i++) {
        vm.data.push({
            x: getRandomArbitrary(0, 300),
            y: getRandomArbitrary(0, 10000),
            color: colors[Math.round(getRandomArbitrary(0, 5))],
            size: getRandomArbitrary(5, 40)
        });
    }

    for (var i = 0; i < 10000; i++) {
        if (i % 100 === 0) {
            vm.time.push(i);
        }
    }

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    function getCurrentActivity(position) {
        if (position > 8000) {
            return "green";
        } else if (position > 5000) {
            return "red";
        } else if (position > 3500) {
            return "purple";
        } else if (position > 2000) {
            return "yellow";
        } else {
            return "blue";
        }
    }


    // start it up!
    ko.applyBindings(vm);
}());