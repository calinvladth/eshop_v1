import React from 'react'
import HomePage, {HomePath} from "./home";
import {ContactPath} from "./contact/path";
import ContactPage from "./contact";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ProductPath} from "./product/path";
import ProductPage from "./product";
import {CartPath} from "./cart/path";
import CartPage from "./cart";
import {CheckoutPath} from "./checkout/path";
import CheckoutPage from "./checkout";
import {OrderSuccessPath} from "./order_success/path";
import HeaderComponent from "../components/header";
import OrderSuccessPage from "./order_success";
import {MessageSuccessPath} from "./message_success/path";
import MessageSuccessPage from "./message_success";
import NotFoundPage from "./not_found";
import FooterComponent from "../components/footer";
import DataPrivacyPage, {DataPrivacyPath} from "./legal/data_privacy";
import PaymentMethodsPage, {PaymentMethodsPath} from "./legal/payment_methods";
import ShippingAndRefundPage, {ShippingAndRefundPath} from "./legal/shipping_and_refund";
import TermsAndConditionsPage, {TermsAndConditionsPath} from "./legal/terms_and_conditions";


const Routes = () => {
    return (
        <BrowserRouter>
            <div>
                <HeaderComponent/>
                <Switch>
                    {/*Home*/}
                    <Route path={HomePath} exact><HomePage/></Route>
                    {/*Contact*/}
                    <Route path={ContactPath}><ContactPage/></Route>
                    {/*Product Page*/}
                    <Route path={ProductPath}><ProductPage/></Route>
                    {/*{Cart Page}*/}
                    <Route path={CartPath}><CartPage/></Route>
                    {/*Checkout Page*/}
                    <Route path={CheckoutPath}><CheckoutPage/></Route>
                    {/*Order Success Page*/}
                    <Route path={OrderSuccessPath}><OrderSuccessPage/></Route>
                    {/*Message Success*/}
                    <Route path={MessageSuccessPath}><MessageSuccessPage/></Route>
                    {/*Legal*/}
                    <Route path={DataPrivacyPath} exact><DataPrivacyPage/></Route>
                    <Route path={PaymentMethodsPath} exact><PaymentMethodsPage/></Route>
                    <Route path={ShippingAndRefundPath} exact><ShippingAndRefundPage/></Route>
                    <Route path={TermsAndConditionsPath} exact><TermsAndConditionsPage/></Route>
                    {/*<Route path={CookiePath} component={Cookie}/>*/}
                    {/*<Route path={PrivacyPath} component={Privacy}/>*/}
                    {/*<Route path={TermsPath} component={Terms}/>*/}


                    {/*404*/}
                    {/*<Route component={FOF}/>*/}
                    <Route path="/404"><NotFoundPage/></Route>
                    <Route component={NotFoundPage}/>
                </Switch>
                <FooterComponent/>
            </div>
        </BrowserRouter>
    )
}

export default Routes