// 반복문 while, for ~동안

while (true){
    if(true) {
        console.log("ㅎㅇ");
        break;
    } else {
        continue;
    }
}

// while (조건) {};, for (let i-0; 조건; i++) {};

// <script> 스크립트 엔진이라고 하는구나 </script>

var i = 0; // 초기화
while (i < 10) { // 반복 조건 for문처럼 while문도 i를 이용할 수 있네.
    // document.write("ㅎㅇ");
    console.log("ㅎㅇ" + i); // 0에서 9까지
    i = i + 1; // 반복 실행
};

// while 문을 좀 가독성있게 만든 것이 for문이라고 함. (변수 i의 가독성)
// => for문에 초기화, 반복조건, 반복실행 세개를 다 넣어줌.

for (i = 0; i < 10; i++) { // 1. 초기화, 2. 반복 조건,
        // 3. 반복 실행(얘는 아래 블록이 실행되고 나서 실행)
    console.log("ㅎㅇfor",i);
}

console.log("\n");

// 반복문의 제어
for (var i = 0; i < 10; i++) {
    
    if (i===0) {
        continue;
    }
    
    if (i===5) {
        break;
    }
    console.log(i);
}


// 이중 포문
for (var i =0; i<10; i++){
    for (var j=0; j<5; j++){
        console.log(i,j);
    }
}




