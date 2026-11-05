import {configureStore} from "@reduxjs/toolkit"

import reducc from "./slice" 


export const store = configureStore({
    reducer : {
        auth : reducc
    }
})

