/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */

/**  아래 문제는 답안을 참고해서 작성했습니다

* 문제 풀때 틀렸던 부분
1. result.push()로 resolve 된 값을 넣기보다는 인덱스로 값을 정확하게 명시해서 할당해줘야 한다.
   그렇지 않을 경우 setTimeout() 이 끝난 순서대로 result 에 값이 들어가게 되서 resolve 순서가 맞지 않게 된다.
   답: [4, 10, 16] 오답: [4, 16, 10]

2. resolve 를 하는 시점에 대한 조건을 result.length === funcitons.length 로 비교하게 되면 실제로
   result 에 setTimeout() 이 완료되고 resolve 된 값이 들어가기도 전에 null 로 채워진 상태로 리턴하게 되므로 조심해야 한다.
   count 로 체크해주면 모든 setTimeout 이 완료되고 resolve 된 시점까지 기다렸다가 resolve 를 실행하게 된다.

3. 그 외
  - promise 내부에서 resolve 로 결과를 리턴하지 않을 경우, (promise 를 사용하지 않고 result 배열을 리턴한 경우) 
    setTimeout 이 완료가 되기도 전에 result (빈 배열) 이 리턴된다.
  - await 를 사용할 경우 setTimeout 이 동기적으로 실행되게 된다.
  - catch 안에서 throw 를 하는 것은 promiseAll 안에서의 오류 핸들링이 아니라 외부로 던지는 것이다.

*/

var promiseAll = async function (functions) {
  return new Promise((resolve, reject) => {
    let count = 0;
    let result = [];
    for (let i = 0; i < functions.length; i++) {
      functions[i]()
        .then((value) => {
          count += 1;
          result[i] = value;
          if (count === functions.length) resolve(result);
        })
        .catch(() => {
          reject('Error');
        });
    }
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
