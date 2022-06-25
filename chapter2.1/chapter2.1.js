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