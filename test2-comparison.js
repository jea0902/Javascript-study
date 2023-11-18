
// 연산자란 값에 대해서 어떤 작업을 컴퓨터에게 지시하기 위한 기호.


// 대입 연산자
a = 10;
b = 20;
c = 10;

// 비교 연산자
console.log(a>b);
console.log(a>=b);
console.log(a<b);
console.log(a<=b);

// 동등 연산자
console.log(1=='1'); // 좌항과 우항의 '값'이 서로 같으면 true, 다르면 false
// 이게 true가 나오네? 문자열 1도 결국은 1의 값을 갖고있다는 걸 알고 있다는 것.

// 일치 연산자(엄격한 동등 연산자)
console.log(1==='1'); // 좌항와 우항이 '정확'하게 같을 떄 true, 다르면 false

console.log(a == c);
console.log(a === c);


// 결국 프로그래밍적에서는 === <<이거만 쓰자.
// 엄격하게 1과 "1"은 다르게 판단해야 하는 것이고,
// 예외적인 케이스들을 다 외울 바에는 확실하게 흑백을 갈라야 함.

console.log(null === undefined);
// null 값이 없는 vs undefined 값이 정의되지 않은 

// true랑 false도 데이터 값이고 boolean 카테고리 속 데이터 값.
console.log(true === 1);
console.log(true === "1");
console.log(true === 0);
console.log(true === '0');

// 동등연산자는 숫자 1을 true로 간주, 1아 이닌 수는 false
console.log(true == 1);
console.log(true == '1'); // 문자열 1도 1로 취급하네
console.log(true == 2);
console.log(true == '2');

// NaN : 성립하지 않는 값, 계산할 수 없는 값
console.log(NaN == NaN);