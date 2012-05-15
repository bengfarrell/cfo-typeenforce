/**
 * Application Class
 * @constructor
 */
function Application() {

    this.doMain = function() {
        var tst = new TestClass();

        // Type enforcement doesn't work from global scope!
        tst.methodATakesANumber(3);
        tst.methodBTakesAString("test");

        return "Spacebag is AWESOME";
    }
}

var a = new Application();
alert(a.doMain());