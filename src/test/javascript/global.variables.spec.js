/**
 * Created by dequanhodge on 4/22/17.
 */
describe('global varibles',function(){
    it('should be able to subtract two numbers correctly',function(){
        var number1;
        var number2;
        var results1;

        number1 = 1;
        number2 = 1;

        results1 = number1 - number2;
        expect(results1).toBe(0);
    });

    it('should be able to add two numbers correctly',function(){
        var number1;
        var number2;
        var results1;

        number1 = 1;
        number2 = 1;

        results1 = number1 + number2;
        expect(results1).toBe(2);
    });
});