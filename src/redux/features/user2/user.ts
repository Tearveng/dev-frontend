// import {
//   ActionReducerMapBuilder,
//   Draft,
//   createAsyncThunk,
//   createSlice,
// } from '@reduxjs/toolkit';
// import axios from 'axios';
// import {NoInfer} from 'react-redux';

// type RegisterUser = {
//   first_name: string;
//   last_name: string;
//   email: string;
//   password: string;
// };

// // const initialState: RandomUser = {
// //   user: [],
// //   status: 'idle',
// //   error: null,
// // };

// const initialState = {};

// const handleFetch = async (url: string) => {
//   const data = await axios({
//     method: 'get',
//     url: url,
//   })
//     .then(res => res)
//     .catch(err => {
//       console.log(err);
//       return err;
//     });

//   return data;
// };

// const handleCreateuser = async (url: string) => {
//   const data = await axios({
//     method: 'post',
//     url: url,
//   })
//     .then(res => res)
//     .catch(err => {
//       console.log(err);
//       return err;
//     });

//   return data;
// };

// export const fetchRandomUser = createAsyncThunk(
//   'randomuser/fetch',
//   async () => {
//     const response = await handleFetch('https://randomuser.me/api/');
//     // console.log(response.data.results);
//     return response.data.results;
//   },
// );

// export const registerUser = createAsyncThunk('register/user', async () => {
//   const response = await handleCreateuser('http://localhost:4000/api/user');
//   return response.data;
// });

// export const randomUserSlice = createSlice({
//   name: 'fetchRandomUser',
//   initialState,
//   reducers: {
//     // addRandomUser: (state, _action) => {
//     //   console.log(_action.payload);
//     //   state.user.push(_action.payload);
//     // },
//   },
//   extraReducers(builder: ActionReducerMapBuilder<NoInfer<any>>) {
//     builder
//       .addCase(fetchRandomUser.pending, (state: Draft<RandomUser>, _action) => {
//         state.status = 'loading';
//       })
//       .addCase(
//         fetchRandomUser.fulfilled,
//         (state: Draft<RandomUser>, _action) => {
//           state.status = 'success';
//           state.user.push(..._action.payload);
//         },
//       )
//       .addCase(
//         fetchRandomUser.rejected,
//         (state: Draft<RandomUser>, _action) => {
//           state.status = 'fail';
//           state.error = _action.error.message as any;
//         },
//       );
//   },
// });

// // export const userData = useSelector((state: RandomUser) => state.user);
// // export const userStatus = useSelector((state: RandomUser) => state.status);
// // export const userError = useSelector((state: RandomUser) => state.error);

// export const {addRandomUser} = randomUserSlice.actions;

// export default randomUserSlice.reducer;
