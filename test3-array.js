// 배열이란 연관된 데이터를 모아서 통으로 관리하기 위해서 사용하는 데이터 타입

// *배열 = 여러 개의 데이터를 하나의 변수에 저장하기 위한 그릇.

var member = [1,2,3,4,5];

console.log(member[0],member[member.length-1]);
console.log(member);

// 데이터 하나하나를 원소이자 요소
// 데이터의 위치를 index


// 배열에 담겨 있는 값들을 꺼내어 가공해 사용하는 것이 핵심.

function getMembers() {
    return ['e','k','s'];
}

members = getMembers();

console.log(members[0].toUpperCase());
console.log(members[1].toUpperCase());
console.log(members[2].toUpperCase()+"\n");

// document.write()는 주로 브라우저 환경에서 사용되는 메서드기 때문에
// HTML 문서 내에서 사용되는 메서드이다.
// ***JS파일은 HTML 문서의 스크립트(script) 태그 내에서 실행되기 때문에,
// 스크립트가 실행되는 시점에 문서가 이미 로드되어있고,
// 해석되었을 거라고 가정.

// 배열과 반복문을 사용해 몇천, 몇만개의 데이터를 쉽게 꺼내올 수 있음


var a = ['e','k','p','c','g','j'];
console.log(a.length);

for (var i = 0; i < a.length; i++) {
    console.log(a[i].toUpperCase());
}

console.log("\n");

// 배열의 제어

// 추가 push - 배열 맨 끝에 요소 추가
var li = ['a','b','c','d','e'];
li.push('ㅎㅇ');
console.log(li);

// 추가(여러 개의 데이터를 한번에 넣으려면) concat
li = li.concat('여러','요소','추가','컨캣'); // push와 달리 재정의 해줘야 함.
console.log(li);

// unshift
li.unshift('z'); // unshift는 배열의 요소 맨 앞에 추가 
console.log(li);

var spl = ['a','b','c'];
// splice(x번인덱스에서,y개 엘리먼트를 삭제하고,z를 순서대로 추가)
spl.splice(1,1,'x','y');
console.log(spl);

// 배열의 제거

var shi = ['a','b','c','d','e','f'];
console.log(shi.shift()); // 제일 앞에 있는 요소 제거하고 반환
console.log(shi.pop()); // 제일 끝에 있는 요소 제거하고 반환
console.log(shi);

// 정렬 array.sort(***정렬기준 콜백function)
srt = [3,2,1,4,5,6];
srt.reverse(); // 완전 거꾸로 - 재정의 안해도 됨.
console.log(srt);
srt.sort();
console.log(srt);

console.log([-3,-2,0,15,4,1,3,8].sort());
console.log([-3,-2,0,15,4,1,3,8].sort( (a,b )=> a-b ));
// 오름차순 정렬 (a,b) => a-b :
// 첫번째 인자가 두번째 인자보다 작으면 음수 반환
// 첫번째 인자가 두번째 인자보다 크면 양수 반환
// 첫번째 인자가 두번째 인자와 같으면 0읇 반환

// 내림차순 정렬 (a,b) => b-a
console.log([-3,-2,0,15,4,1,3,8].sort( (a,b )=> b-a ));

// 실제 웹 애플리케이션을 개발할 때는 단순한 숫자나 문자보다는 복잡한 객체 배열을 정렬해야할 때가 더 많을 것,.
// 객체 배열을 정렬할거면, 

const countries = [
    { no: 1, code: "KR", name: "Korea" },
    { no: 2, code: "CA", name: "Canada" },
    { no: 3, code: "US", name: "United States" },
    { no: 4, code: "GB", name: "United Kingdom" },
    { no: 5, code: "CN", name: "China" },
  ];

// 이 배열을 상대로 sort()함수를 호출하면, 아무 일도 일어나지 않을 것.
// ***구체적으로 어떤 기준에 의해 객체 간에 대소비교를 해줘야 하는지 정해줘야 하기 때문.

// 국가 코드를 기준으로 오름차순 정렬 - 문자열의 localCompare 함수 이용
console.log(countries.sort((a,b) => a.code.localeCompare(b.code)));
// a가 앞이면 오름차순 /  b가 앞이면 내림차순

// 국가 번호를 기준으로 내림차순 정렬
console.log(countries.sort((a,b) => b.no - a.no));

// 다중 정렬
const users = [
    {
      mail: "gregorythomas@gmail.com",
      name: "Brett Holland",
      gender: "M",
      age: 73,
    },
    {
      mail: "hintc12@hotmail.com",
      name: "Madison Martinez",
      gender: "F",
      age: 29,
    },
    {
      mail: "wwagner33@gmail.com",
      name: "Michael Jenkins",
      gender: "M",
      age: 51,
    },
    {
      mail: "ujacksonxejyen@gmail.com",
      name: "Amber Rhodes",
      gender: "F",
      age: 42,
    },
    {
      mail: "daniel7900@gmail.com",
      name: "Karen Rodriguez",
      gender: "F",
      age: 32,
    },
  ];

// 성별이 같을 때만 나이 기준으로 정렬하도록 대소비교 함수를 구현
users.sort((a,b) => {
    if (a.gender === b.gender) {
        return a.age - b.age;
    } else {
        return b.gender.localeCompare(a.gender);
    }
})  

console.log(users);

// toSorted 함수 - 배열 복제본 : 원본을 바로 수정하고 싶지 않을 때 사용

const nums = [3,1,2];
const sortedNums = [...nums].sort();
console.log(nums,sortedNums);