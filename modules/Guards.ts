//Guards
//#1
function strip(x: string | number) {
  if (typeof x == 'number') {
    return x.toFixed(2);
  }
  return x.trim();
}
//#2
class MyResponse {
  header = 'response header';
  result = 'response result';
}
class MyError {
  header = 'response header';
  result = 'response result';
}
function heandler(res: MyResponse | MyError) {
  if (res instanceof MyResponse) {
    return {
      info: res.header + res.result,
    };
  }
  if (res instanceof MyError) {
    return {
      info: res.header + res.result,
    };
  }
}
//#3
type ErrorHandle = 'Succes' | 'Error';
function errorHandle(type: ErrorHandle) {
  return type;
}
console.log(errorHandle('Succes'));
