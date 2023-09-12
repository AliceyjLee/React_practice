import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // 자료 잠깐 저장할 때 변수 사용 -> let, var,const
  let post = '강남 우동 맛집';

  // 변수처럼 자료를 잠깐 저장할 때
  //let [글제목1, titleChange] = useState('남자 코트 추천');
  //let [글제목2] = useState('강남 우동 맛집');
  //let [글제목3] = useState('파이썬독학');

  let [title, titleChange] = useState (['남자 코트 추천','강남 우동 맛집','파이썬독학','자바독학']);

  // 좋아요 추가, 누른만큼 숫자 증가
  let [like, likeChange] = useState(0);

  // 모달 창 띄우기
  let [modal, setModal] = useState(false);

  // 모달창 안에 글제목 바꾸기
  let [newTitle, setNewTitle] = useState(0);
  
  let[input, inputChange] = useState('');

  // 반복문
  // [1, 2, 3].map(function(a) {
  //   return '112233';
  // })


  return (
    <div className="App">
     <div className="black-nav">
      <h1>BLOG</h1>
     </div>

      {/* <button onClick={ () => {
        let copy = [...title];
        copy[0] = '여자 코트 추천'
        titleChange(copy);
      }}>글수정</button>

      <button onClick={ () => {
        let order = [...title];
        order.sort(); 
        titleChange(order); 
      }}>정렬</button> */}

      {/* <div className='list'>
      <h3>
        {title[0]} 
        <span onClick={() => {likeChange(like+1)}}>👍</span> { like }
      </h3>
      <p>8월 30일 발행</p>
      </div>
      <div className='list'>
      <h3>{title[1]}</h3>
      <p>8월 30일 발행</p>
      </div>
      <div className='list'>
      <h3>{title[2]}</h3>
      <p>8월 30일 발행</p>
     </div>
     <div className='list'>
      <h3>{title[3]}</h3>
      <p>8월 30일 발행</p>
     </div> */}

      <button onClick={ () => { setModal(!modal)}}> 모달버튼</button>
      {
        // 삼항연산식 조건식? 참을때 : 거짓일때
        modal == true ? <Modal newTitle={newTitle} title={title}/> : null
        
      }
       {/* {
        <>
        <button onClick={() => { setNewTitle(0); } }>글제목0</button>
        <button onClick={() => { setNewTitle(1); } }>글제목1</button>
        <button onClick={() => { setNewTitle(2); } }>글제목2</button>
        </>

      } */}
      {
        title.map(function(a, i) {
            return (
            <div className='list'>
            <h3 onClick={ () => {setModal(true); setNewTitle(i)}}>{title[i]}</h3>
            <p>8월 30일 발행</p>
            <button onClick={ () => {
              let copy = [...title];
              copy.splice(i,1);
              titleChange(copy);
             }}>글삭제</button>
           </div>);
        })
      } 
     
     {
      <>
      <input onChange={(e) => { 
        inputChange(e.target.value); 
        console.log(input) } }></input>
      <button onClick={ () => {
        let copy = [...title];
        copy.unshift(input);
        titleChange(copy);
      }}>글발행</button>
      </>
     }
      
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
        <h4>{props.title[props.newTitle]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
     </div>
  )
}

export default App;
