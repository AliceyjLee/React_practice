import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import bg from './img/bg.png'; 
import data from './data';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail';
import axios from 'axios';


function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <>
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">어서와!</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/about') }}>About</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/event') }}>Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
          <Routes>
          <Route path="/" element={
            <>
            <div className="main-bg"></div>
            <div className="container">
              <div className="row">
                { shoes.map((a, i)=>{
                  return  <Card shoes={shoes[i]} i={i+1} ></Card>
                })}
               </div>
             </div>
             <button onClick={() => {
                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then(result=>{
                  console.log(result.data)
                  let copy = [...shoes, ...result.data];
                  setShoes(copy);
                  
                })
                .catch(() => {
                  console.log('실패')
                })
                }}>더보기</button>

           </>
          }/>
          <Route path="*" element={ <div>없는페이지임</div> } />
          
          <Route path="/detail/:id" element={<Detail shoes={shoes}/>}/>
          <Route path="/about" element={<div>어바웃페이지</div>}/>
          
          <Route path="/event" element={<Event/>}>
            <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}/>
            <Route path="two" element={<p>생일기념 쿠폰받기</p>}/>
          </Route>
      </Routes>
    </>
  );

  function Event() {
    return(
      <div>
        <h2>오늘의 이벤트</h2>
        <Outlet></Outlet>
      </div>
    )
  }

  function Card(props) {
    return(
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes'+ props.i+'.jpg'} width="80%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p> 
    </div>
    ); 
  }

}

export default App;
