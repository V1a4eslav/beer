import {createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import {Route} from "react-router";
import {HomePage} from "../../modules/pages/HomePage";
import {BeerItem} from "../../modules/entities/BeerItem/BeerItem";


export const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path='/' element={<HomePage/>}/>
        <Route path={'/beer'} element={<BeerItem/>}/>
    </>
));