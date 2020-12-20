// {{ 테스트 자동화와 Mocha }}
/*
    [Behavior Driven Development]
    BDD는 테스트(test), 문서(documentation), 예시(example)를 한데 모아놓은 개념입니다.
*/


/*
스펙은 세 가지 주요 구성 요소로 이루어집니다.
- describe("title", function() { ... })

- it("유스 케이스 설명", function() { ... })
  it의 첫 번째 인수엔 특정 유스 케이스에 대한 설명이 들어갑니다. 이 설명은 누구나 읽을 수 있고 이해할 수 있는 자연어로 적어줍니다.
  두 번째 인수엔 유스 케이스 테스트 함수가 들어갑니다.

- assert.equal(value1, value2)
*/ 

// 명세서(specification) 또는 스펙(spec)
describe("pow", function() {
    /*
    it("주어진 숫자의 n 제곱", function() {
      assert.equal(pow(2, 3), 8);
      assert.equal(pow(3, 4), 81);
    });
    위와 같은 방식으로 작성할 경우 하나만 틀려도 첫 번째 assert가 실패했을 때 두 번째 assert의 결과를 알 수 없음
    따라서 아래와 같은 방법으로 작성하는 것을 추천함.
    */
    it("2를 세 번 곱하면 8입니다.", function() {
      assert.equal(pow(2, 3), 8);
    });
  
    it("3을 네 번 곱하면 81입니다.", function() {
      assert.equal(pow(3, 4), 81);
    });    
});
  
// 함수가 제대로 작동하는지 확인하기 위해 더 많은 값을 테스트해 봅시다.
// 수동으로 여러 개의 it 블록을 만드는 대신 for문을 사용해 자동으로 it 블록을 만들어보겠습니다.
describe("pow", function() {
  function makeTest(x) {
    let expected = x * x * x;
    it(`${x}을/를 세 번 곱하면 ${expected}입니다.`, function() {
      assert.equal(pow(x,3), expected);
    })
  }

  for (let x = 1; x <= 5; x++) {
    makeTest(x);
  }
});

// 중첩 describe
describe("pow", function() {
  describe("x를 세 번 곱합니다.", function() {
    function makeTest(x) {
      let expected = x * x * x;
      it(`${x}을/를 세 번 곱하면 ${expected}입니다.`, function(){
        assert.equal(pow(x, 3), expected);
      });
    }

    for(let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });
})
// 중첩 describe는 새로운 테스트 '하위 그룹(subgroup)'을 정의할 때 사용 

// NaN을 반환하느지 아닌지를 검사해주는 테스트
describe("pow", function() {
  it("n이 음수일 때 결과는 NaN입니다.", function() {
    assert.isNaN(pow(2, -1));
  })
  it("n이 정수가 아닐 때 결과는 NaN입니다.", function() {
    assert.isNaN(pow(2, 1.5));
  })
});
// 이런 식으로 실패할 수밖에 없는 테스트를 추가하고, 테스트를 통과할 수 있게 코드를 개선


