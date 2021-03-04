import React from 'react'
import AddSvg from "../../assets/icons/add";
import SubtractSvg from "../../assets/icons/subtract";

const QuantityComponent = ({quantity, editQuantity}) => {
    return (
        <div>
            <div className="quantity">
                <input type="number" min="1" value={quantity}
                       readOnly={true}/>
                <div>
                    <div className="quantity__button"
                         onClick={() => editQuantity(true, quantity)}>
                        <AddSvg/>
                    </div>
                    <div className="quantity__button"
                         onClick={() => editQuantity(false, quantity)}>
                        <SubtractSvg/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuantityComponent