module.exports = function() {

    gotJokes = function(hook, punchline) {
        hook = typeof hook !== 'undefined' ? hook: "What kind of pants does Mario wear? ";
        punchline = typeof punchline !== 'undefined' ? punchline: "Denim, Denim, Denim";
        console.log(hook);
        setTimeout(function() {
            console.log('Wait for it...');
        }, 2000);
        setTimeout(function() {
            console.log('Wait for it...');
        }, 4000);
        setTimeout(function() {
            console.log(punchline);
        }, 6000);
    };

    gotJokes();

};
