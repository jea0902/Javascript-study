var li = ['a','b','c','d','e','f'];

li.pop(); // 맨 끝에 요소 제거
console.log(li);

li.shift();
console.log(li); // 맨 앞에 요소 제거


// 객체 

// 배열과 유사한 역할, 연관되어 있는 데이터를 담아 놓는 그릇이 배열이었다.
// 객체도 연관되어 있는 데이터를 담을 그릇이다.

// 배열과 객체의 차이점 :
// 배열은 인덱스가 있었는데,
// 객체는 인덱스의 값으로 문자나, 직접 지정가능
    // 연관 배열, 맵map, 딕셔너리Dictionary 라는 데이터 타입이 객체
    
var grade = {'A':10,'b':20,'C':30};
// 키와 값 딕셔너리 구조
console.log(grade);

console.log(grade['A']);
console.log(grade['b']);
console.log(grade['C']);

var grades = new Object();
grades['1'] = 10;
grades['2'] = 20;
grades['3'] = 30;

console.log(grades);


// 객체와 반복문

var arr = ['a','b','c'];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 배열은 순서를 가지고 있음. 들어간 순서대로 빼낼 수 있음.

// 객체안에 저장된 값은 순서가 없다. key value

var grades = {'ebs':10,'kbs':20,'sbs':80};

for (key in grades) { // 키 값들을 key에 넣어 - 파이썬 for문이랑 똑같네?
    console.log(key); // 키 출력
    console.log(grades[key]);  // 값 출력 
}

// 객체 지향 프로그래밍

// 객체에는 객체를 담을 수도 있고, 함수도 담을 수 있다.

var gr = {
    'list' : {'ebs':20,'kbs':8,'sbs':80},
    'show' : function(){
        for (var name in this.list) {
            console.log(name, this.list[name]);
        } // this는 이 객체인 gr을 뜻한다.
        // 이로써, list랑 show는 서로 관련성이 생김
        console.log("hello");
    }
}

console.log(gr['list']['ebs']);
console.log(gr['show']());


// this는 약속되어 있는 변수
// 이 함수에 속해 있는 객체를 나타내는 변수

// **하나의 객체 안에 list랑, show라는 함수를 그룹핑한 그릇 = 객체지향프로그래밍
// = 연관되어 있는 데이터와 그걸 처리하는 함수가
// 하나의 객체 안에 있다면 그것은 객체 지향 프로그래밍
