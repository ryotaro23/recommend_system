import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    id: '1',name:'John Doe',email:'mail@gmail.com',password:'123456'
}]
export type User ={
    id:string,
    name:string,
    email:string,
    password:string
}
const userSlices = createSlice({
    name: 'users',
    initialState,
    reducers:{},
})
export default userSlices.reducer