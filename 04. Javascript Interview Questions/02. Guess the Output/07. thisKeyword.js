/**
 * This keyword Q/A
 */

var length = 10;

function fun() {
  console.log(this.length, "Lenght of this");
}

var obj = {
  length: 5,
  method: function (callBack) {
    callBack();
    arguments[0]();
  },
};
obj.method(fun, 1);
