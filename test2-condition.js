// 조건문 << 핵심

if (true) {
    console.log("ㅎㅇ");
}

if (false) {
    console.log("ㅈㅈ");
}

if (true) {
    console.log("true");
} else {
    console.log("false");
}

if (false) {
    console.log("ㅇㅇ");
} else {
    console.log("false");
}

var a = 10;

if (a <= 9) {
    console.log("10이하");
} else if (a === 10) {
    console.log("10");
} else {
    console.log("10초과");
}

// prompt("갑자기 프롬프트 사용?"); 입력문
// alert(prompt("당신의 나이는?")); -> 입력창 나오고, 입력하면 그 값을 alert

// id = prompt("아이디를 입력해주세요");
id = 'jea0902';
pw = 123456

if (id === 'jea0902') {
    if (pw === 12345) {
        console.log("아이디 일치, 비밀번호 일치");
    }
    else {
        console.log("아이디는 같은데, 비밀번호가 달라");
    }
} else {
    console.log('일치X');
}


// 논리 연산자

// &&는 교집합이자 and - **좌항과 우항이 모두 참일 때 참
// ||는 합집합 or - **좌항과 우항 중 하나라도 참이면 참

if (true && true) {
    console.log("교집합");
}

if (true || false) {
    console.log("합집합");
}

if (id === 'jea0902' && pw === 1234) {
    console.log("아이디 일치, 비밀번호 일치");
} else if (id === 'jea0902' || pw === 1234) {
    console.log("비밀번호가 다른 거 같은데?");
} else {
    console.log("ㅎㅇ");
}

if (false || false) {
    console.log("false라서 안나올 것.");
}

var b;
if (!b){ // *undefined, null은 자바스크립트에서 false로 간주
    console.log('값이 할당되지 않은 변수');
}

var c = 0;

if (c) {
    console.log("")
}

