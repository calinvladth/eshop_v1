import React from "react";
import './index.sass'
import style from './index.module.sass'
import TableRowCartComponent from "../table_row";

const TableCartComponent = ({products}) => {
    return (
        <div className={style.box}>
            <table>
                <thead>
                <tr>
                    <td>Product</td>
                    <td className="font__paragraph">Price</td>
                    <td className="font__paragraph">Quantity</td>
                    <td className="font__paragraph">Total</td>
                </tr>
                </thead>
                <tbody>
                <tr className={style.placeholder}></tr>
                {
                    products.map(o =>
                        <TableRowCartComponent key={o.id} product={o}/>
                    )
                }
                </tbody>
            </table>
        </div>
    );
}

export default TableCartComponent