function fire(bool) {
    if (bool) {
        var foo = 'bar'; // Same as declair on the top 
        let bar = 'foo'; // Scope variable


    }else {
        // console.log(foo) // Hoisting - The variable exists but it was not initialized - Returns undefined
        console.log(bar) // Returns reference error - bar is available only on its scope

    }
}

fire(false);