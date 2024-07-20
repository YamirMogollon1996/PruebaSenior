import {  configureStore } from "@reduxjs/toolkit"
import { usuarioSlice } from "./SliceUsuarios/usuarios"

export const store =  configureStore({
    reducer  :  {
        usuario :  usuarioSlice.reducer
    }
})