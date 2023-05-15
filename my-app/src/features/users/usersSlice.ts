import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    id: '0',name:'John Doe',email:'mail@gmail.com',password:'123456'
}]
const userSlices = createSlice({
    name: 'users',
    initialState,
    reducers:{},
})
export default userSlices.reducer