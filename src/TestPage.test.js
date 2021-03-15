import TestPage from './TestPage';

var test1 = '{"a": 1,"b": true,"c": {"d": 3,"e": "test"}}';
var expected1 = '{\n    "a": 1,\n    "b": true,\n    "c.d": 3,\n    "c.e": "test"\n}';

var test2 =  '{"name": "John","age": 30,"cars": {"car1":"Ford", "car2":"BMW", "car3":"Fiat"}}';
var expected2 =  '{\n    "name": "John",\n    "age": 30,\n    "cars.car1": "Ford",\n    "cars.car2": "BMW",\n    "cars.car3": "Fiat"\n}'
  
var test3 = '{"name": "John","age": 30,"car": null}';
var expected3 = '{\n    "name": "John",\n    "age": 30,\n    "car": null\n}';


test('flatten JSON 1', () => { 
    let tt = new TestPage();
    let data = test1;
    let result = tt.flatten(data);

    console.log("Result: " + result);

    expect(result).toEqual(expected1);
});


test('flatten JSON 2', () => { 
    let tt = new TestPage();
    let data = test2;
    let result = tt.flatten(data);

    console.log("Result: " + result);

    expect(result).toEqual(expected2);
});

test('flatten JSON 3', () => { 
    let tt = new TestPage();
    let data = test3;
    let result = tt.flatten(data);

    console.log("Result: " + result);

    expect(result).toEqual(expected3);
});
