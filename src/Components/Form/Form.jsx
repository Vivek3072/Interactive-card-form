import React,{useState} from "react";
import IconComplete from '../../Assets/IconComplete.svg'


export default function Form(props) {
    const [values, setValues] = useState({
        cardHolder:"",
        cardNumber:'',
        month:'',
        year:'',
        cvc:'',
    })

    const [cardHolderError, setCardHolderError] = useState('')
    const [cardNumberError, setCardNumberError] = useState('')
    const [cardMonthError, setCardMonthError] = useState('')
    const [cvcError, setCvcError] = useState('')
    
    const [formComplete, setFormComplete] = useState(false)

    const handleChange =(e)=>{
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value,
        })
    }

    const handleSubmit =(e)=>{
      
      if(values.cardHolder.length===0) 
        setCardHolderError("Enter your name! ");
      else 
        setCardHolderError("");

      if(values.cardNumber.length===0) 
        setCardNumberError("Can't be blank! ");
      else if(values.cardNumber.length!==16) 
        setCardNumberError("Length should be 16 digits! ");
      else
        setCardNumberError("");
      
      if(values.month.length===0 || values.year.length===0)
        setCardMonthError("Can't be blank! ")
      else if(values.month.length!==2 || values.year.length!==2)
        setCardMonthError("MM/YY Format accepted! ")
      else
        setCardMonthError("")

      if(values.cvc.length===0)
        setCvcError("Can't be blank! ")
      else if(values.cvc.length!==3)
        setCvcError("Enter correct cvc ")
      else{
        setCvcError("")
        setFormComplete(true)
        props.getData(values);
      }

    }

    const refreshPage = ()=>{
      window.location.reload();
   }
 
  return (
    <>
     {!formComplete? <form>
        <div className="mb-3">
          <label htmlFor="cardHolder" className="form-label">
            CARDHOLDER NAME
          </label>
          <input
            type="text"
            className={`form-control ${cardHolderError.length>0?"input_error":""}`}
            id="cardHolder"
            name="cardHolder"
            value={values.cardHolder}
            onChange={handleChange}
            placeholder="eg.Jane Appleseed"
          />
          <div className="error_box"> {cardHolderError?cardHolderError:""} </div>
        </div>

        <div className="mb-3">
          <label htmlFor="cardNumber" className="form-label">
            CARD NUMBER{" "}
          </label>
          <input
            type="number"
            className={`form-control ${cardNumberError.length>0?"input_error":""}`}
            id="cardNumber"
            name="cardNumber"
            value={values.cardNumber !==0 ? values.cardNumber :""}
            onChange={handleChange}
            placeholder="eg.1234 5469 8754"
          />
          <div className="error_box"> {cardNumberError.length>0 ? cardNumberError:""} </div>
        </div>

        <div className="multiple_input_row">
          <div className="mb-3 expiry_date">
            <label htmlFor="expDate" className="form-label">
              Exp. Date(MM/YY){" "}
            </label>

            <div className="month_year">
              <input
                type="number"
                className={`form-control ${cardMonthError.length>0?"input_error":""}`}
                id="month"
                name="month"
                value={values.month}
                onChange={handleChange}
                placeholder="MM"
                />
              <input
                type="number"
                className={`mx-1 form-control ${cardMonthError.length>0?"input_error":""}`}
                id="year"
                name="year"
                value={values.year}
                onChange={handleChange}
                placeholder="YY"
              />
            </div>
          <div className="error_box"> {cardMonthError?cardMonthError:""} </div>
          </div>

          <div className="mb-3 mx-2 cvc_box">
            <label htmlFor="cvc" className="form-label">
              CVC
            </label>
            <input
              type="number"
              className={`form-control ${cvcError.length>0?"input_error":""}`}
              id="cvc"
              name="cvc"
              value={values.cvc}
              onChange={handleChange}
              placeholder="eg.123"
            />
          <div className="error_box"> {cvcError?cvcError:""} </div>

          </div>
        </div>

        <div className="button mt-2" onClick={handleSubmit}>Confirm</div>
      </form>
      :
      <>
      <div className="form_submitted">
       <div className="mb-2">
         <img src={IconComplete} alt="" />
        </div>
        <div className="h1 my-2">THANK YOU! </div>
        <p className="my-2">We've added your card details</p>
        
        <div className="button mt-2" onClick={refreshPage}>  Continue </div>
      </div>
      </>
      }
    </>
  );
}
