export default function InputGroup({ userTitle, changeUserTitle, addNewTodo }) {
  return (
    <>
      <input placeholder="완료된 항목을 입력하세요" value={userTitle} onChange={(e) => changeUserTitle(e.target.value)}></input>
      <button onClick={() => addNewTodo()}>추가</button>
    </>
  );
}
