var a = 0;

// promises works!
var timeout = function(ms) {
  return new Promise(function(resolve) {
    setTimeout(resolve, ms)
  });
};

// experimental stuff works!
var f = async function() {
  await timeout(1000);
  return 'promise resolved!';
};

export function A() {
  console.log("Component A: ", a++);
  f().then(res => console.log(res));
}