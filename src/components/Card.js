import { useState } from "react";
import { Spinner } from "react-bootstrap";
import './card.css'
function Cocktail({img,title,text}) {
    const [isloaded,setisloaded] = useState(false);
    function loadFunc(){
        setisloaded(true)
    }
    return(
        <>
            <div className="card col-md-3" style={{'display':isloaded ? 'flex' : 'none'}}>
                <img src={img} onLoad={loadFunc}  alt={title} />
                <div className="card_title">
                    <p>{title}</p>
                </div>
                <div className="card_text">
                    <p>{text}</p>
                </div>
            </div>
            {!isloaded ? <Spinner/> : ''}
        </>
        )
}
export default Cocktail;