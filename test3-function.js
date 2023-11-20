// 함수란 하나의 로직을 재실행 할 수 있도록 하는 것으로 코드의 재사용성을 높여준다.

// 재사용성이 정확히 어떻게 달성되는가??

// function 함수명 (인자) {
// 코드
// return 반환값
// }

function numbering() {
    // document.write(1); document함수가 html안에서만 작동하네?
    console.log("넘버링");
    // 만약에 여기 천줄, 만줄이 들어간다면 재사용성의 가치가 와닿는다.
    // *붕어빵틀(재사용성)이라고 생각하면 됨.
    i = 0;
    while(i<10){
        console.log(i);
        i++;
    }
}

numbering(); // 함수 실행


// ***함수의 효용 : 함수가 없다면?
// 1. *붕어빵틀(재사용성)이라고 생각하고, 여기저기서 재사용할 수 있음.

// 함수 없이 어떤 로직을 수정해서 반복해서 사용하려면??
// 만약에 위의 while문을 그냥 복붙해서 10개를 아래로 쓴다면
// 그 쓴 것들 마다 i의 값을 바꿔줘야 한다면
// 얼마나 귀찮고, 비효율적인가?

// 함수를 만들어 놓으면, 여기저기서 재사용이 가능하다고!!

// 그리고 함수를 만들어 놓고 다른데서도 사용하는데
// 2. 로직을 변경해야 한다면? 그 함수 하나만 변경하면 되니까
// *유지보수성이 좋다.

// 3. 함수를 하나 정의해놓고 여기 저기서 사용하더라도
// 이 함수가 그 함수니까 *가독성이 좋게 된다. 어떤 함수인지 바로 알 수 있고 사용 가능


// 함수의 입력과 출력 -> 입력에 따른 다른 출력을 만들어 내는 상자

// 출력은 return

function getMember() {
    return 'egoing'; 
    // 출력은 return
    // 아래에 어떤 로직을 넣든, return이면 함수는 종료
}
function getMember2() {
    return 'k8805';
}

console.log(getMember());
console.log(getMember2());

// 입력

// 매개변수(파라미터) = 입력값을 받는 변수
// 인자(argument) = 매개변수로 전달할 입력값
function getArgument(arg) { // 인자를 받는 변수 = 매개변수
    return arg;
}
// 값 자체는 인자, 값을 받는 변수가 매개변수
// "인자1"이 매개변수로 전달할 입력값이라서 인자
console.log(getArgument("인자1")); // arg = "인자1" 여기에 있는 값이 저 위의 함수 인자값으로 들어가는 것.
console.log(getArgument("인자2")); // arg = "인자2"

function getArgument3(arg1,arg2) {
    return arg1+arg2;    
}

console.log(getArgument3(1,2));
console.log(getArgument3(10,20));


// 다양한 정의 방법

numbering = function() {
    i=0;
    while(i<2){
        console.log(i);
        console.log("함수를 변수 하나에 대입해서 사용가능");
        i+=1;
    }
}

numbering(); // 마치 함수를 변수 하나로 정의할 수 있는 것.
