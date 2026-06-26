import React from "react";

const Home = React.lazy(() => import("./Home"))
const Checkout = React.lazy(() => import("./Checkout"))

export {
    Home,
    Checkout
}