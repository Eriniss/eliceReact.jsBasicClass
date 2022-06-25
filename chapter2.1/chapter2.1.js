// * Props


// props란?
// 기본적으로 component에 원하는 값을 넘겨줄 때 사용하며 넘겨줄 수 있는 값은 변수, 함수, 객체 배열 등 js의 요소라면 제한이 없다.
// 주로 component의 '재사용'을 위하여 사용한다.


// props는 읽기 전용
// props의 값을 임의로 변경해서 사용하면 안된다.
// 만약 props 값을 변경해서 사용하고 싶다면, 새로운 변수를 생성한다.


// DOM element의 attributes
// 기본적인 DOM element들의 attribute는 camel case로 작성 한다.
// 그러나 'data-' 또는 'aria-'로 시작하는 attribute는 예외로 한다.
// HTML의 attribute와 다른 이름을 가지는 attribute가 존재한다. ex) class -> className, for -> htmlFor 등
// HTML의 attribute와 다른 동작 방식을 가진 attribute가 존재한다. ex) checked(defaultChecked), value(defaultValue), style 등
// React에서만 쓰이는 새로운 attribute가 존재한다. ex) key, dangerouslySetInnerHTML 등


// checked, value
{ (<input type="checkbox" checked={false} />) }
// HTML에서 checked 또는 value는 해당 값이 '초기값'으로 쓰이지만 React 내에서는 '현재값'을 의미한다.
// 즉, 위 예시처럼 checked 값이 false로 고정되어 있는 경우에 사용자가 checkbox를 클릭하여도 값의 변화가 일어나지 않는다.
// 막약 '초기값'의 의미로 checked 또는 value를 사용하고 싶다면 defaultChecked, defaultValue attribute를 설정한다.


// key
{
  const Names = () => {
    const names = [
      {key: '1', value: '민수'},
      {key: '2', value: '영희'},
      {key: '3', value: '길동'},
    ]
    return (
      <div>
        {names.map((item) => (
          <li key={item.key}>{item.value}</li>
        ))}
      </div>
    )
  }
}
// key는 react가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕는다.
// key는 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 element에 지정해야 한다.
// key는 배열 안에서 형제 사이에서 고유해야 하고 전체 범위에서 고유할 필요는 없다.
// 두 개의 다른 배열을 만들 때 동일한 key를 사용할 수 있다.


// * State


// state란?
import { useState } from 'react';

function Example() {
  const [count, setCount] = userState(0);
  return (
    <div>
      <p>버튼을 {count}번 눌렀습니다.</p>
      <button onClick={() => setCount(count + 1)}>
        클릭
      </button>
    </div>
  );
}
// state는 component 내에서 유동적으로 변할 수 있는 값을 저장한다.
// 개발자가 의도한 동작에 의해 변할 수도 있고 사용자의 입력에 따라 새로운 값으로 변경될 수도 있다.
// state 값이 변경되고 재렌더링이 필요한 경우에 react가 자동으로 계산하여 변경된 부분을 렌더링 한다.


// state 값을 직접 변경하면 안된다.
// state 값을 직접 변경하게 되면 react가 component를 다시 렌더링할 타이밍을 알아차리지 못한다.
// 반드시 setState 함수를 이용해 값을 변경해야 한다.
// setState 함수를 호출할 때 react에게 "재렌더링"의 명령이 내려진다.


// state를 변경하는 두 가지 방법
{
  // setState내에 변경할 값을 넣기
  const [count, setCount] = useState(0);
  setCount(count + 1);
}

{
  // setState에 함수를 넣기
  const [count, setCount] = useState(0);
  setCount((current) => {
    return current + 1;
  });
}
// 함수를 넣는 경우 함수가 반환하는 값으로 state가 변경된다.
// 위 예시처럼 현재 값을 기반으로 state를 변경하고자 하는 경우 함수를 넣는 방법을 권장한다.


// object를 갖는 state를 만들 때 주의사항

{
  const [user, setUser] = 
    useState({name: "민수", grade: 1});
    setUser((current) => {
      current.grade = 2; // 이와같이 작성하면 안된다.
      return current;
    })
}
// 예시와 같이 object를 값으로 갖는 state도 만들 수 있다.
// 그러나 예시의 경우 react가 state의 변경을 감지하지 못한다.
// user object 안의 grade가 변경되었지만 user 자체는 변경되지 않았기 때문이다.

{
  const [user, setUser] = 
    useState({name: "민수", grade: 1});
    setUser((current) => {
      const newUser = { ...current } // 값을 복사
      newUser.grade = 2; // 복사된 값에 재할당
      return newUser;
    })
}



