import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import  Styled from 'styled-components';


function Detail(props) {

    // 입력한 값 저장
    let {id} = useParams();
    let id2 = parseInt(id);
    console.log(id2+1);

    let id3 = 1;
    let result = (id2 + id3);
    
    let findId = props.shoes.find(function(x) {
        return x.id == id;
    })

    let [alert, setAlert]  = useState(true)

    useEffect(() => {
        let a = setTimeout(() => { setAlert(false)} , 2000)
        return()=>{
            clearTimeout(a)
        }
    })

    // let [num, setNum] = useState('')

    // useEffect(() => {
    //     if (isNaN(num) == true){
    //         alert('그러지마세요')
    //     }
    // }, [num])


    return(

        <div className="container">
            {
                alert == true
                ? <div className='alert alert-warning'>
                    2초이내 구매시 할인
                </div>
                : null

            }
            <div className="row">
            <div className="col-md-6">
                <img src={'https://codingapple1.github.io/shop/shoes'+ result +'.jpg'}width="100%" />
            </div>
            <div className="col-md-6">
                <h4 className="pt-5">{findId.title}</h4>
                <p>{findId.content}</p>
                <p>{findId.price}원</p>
                <button className="btn btn-danger">주문하기</button> 
            </div>
            </div>
        </div> 
    )
}

export default Detail;