import React from 'react';
import {GlobalStyles} from 'modules/UIKit/GlobalStyles';
import {RouterProvider} from "react-router";
import {router} from './routing/router';

export const App = () => {

    return (
        <>
            <GlobalStyles/>
            <RouterProvider router={router}/>
        </>
    )
};
