import React,{useState , useEffect} from 'react'
import './Form.css'
import Form from './Form'
import FormCards from './FormCards'

export default function FormPage() {
  const [cardData, setCardData] = useState([])

  const getFormData=(val)=>{
    setCardData(val);
  }

  useEffect(() => {  
    getFormData();
  }, [])
  
  return (
    <>
        <div className="container-fluid">
            <div className="row cards_row">
                <FormCards data={cardData}/>

                {/* SPACE */}
                <div className="form_mid"></div>
                {/* SPACE */}

                <div className="form_right">
                  <Form getData={getFormData} />
                </div>
            </div>
        </div>
    </>
  )
}
