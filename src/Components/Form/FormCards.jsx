import React from "react";
import CardLogo from '../../Assets/CardLogo.svg'

export default function FormCards(props) {
    let cardNum = props.data && props.data.cardNumber?props.data.cardNumber:"";
    if(cardNum){
        console.log(cardNum,"cardNum")
       cardNum=cardNum.slice(0,4)+" "+cardNum.slice(4,8) +" "+cardNum.slice(8,12)+" "+cardNum.slice(12,16)

    }

  return (
    <>
      <div className="form_left">
        <div className="card_front">
          <div className="card_logo">
            <img src={CardLogo} alt="" />{" "}
          </div>
          <br />
          <div className="card_details">
            <div className="card_number">
              {cardNum ? cardNum :" ----  ----  ----  ---- "}
            </div>
            <div className="more_card_details">
              <div className="card_holder">
                {props.data ? props.data.cardHolder : "Jane Appleseed"}
              </div>
              <div className="card_expiry">
                {props.data ?props.data.month + "/" + props.data.year : "00/00"}{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="card_back">
          <div className="cvc mt-2"> {props.data ? props.data.cvc : "---"}</div>
        </div>
      </div>
    </>
  );
}
