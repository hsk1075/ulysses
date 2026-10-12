/* ===== 사진 데이터 (여기만 고치면 됩니다) =====
   from : 트랙을 시작하는 사람 ("L" 왼손 / "H" 홍양). 홀수 번째 사진은 시작한 사람, 짝수 번째는 상대방.
   photos : 사진 파일 경로를 찍은 순서대로. 비워 두면 빈 칸으로 표시됩니다.
   captions : (선택) photos 와 같은 순서의 설명.
   예) photos/l1/01.jpg 처럼 photos 폴더 안에 트랙별 폴더를 만들어 넣으세요. */
const RAW = [
  {from:"L", n:1, photos:[
    // "photos/l1/01.jpg", "photos/l1/02.jpg",
  ]},
  {from:"L", n:2, photos:[]},
  {from:"L", n:3, photos:[]},
  {from:"H", n:1, photos:[]},
  {from:"H", n:2, photos:[]},
  {from:"H", n:3, photos:[]}
];
