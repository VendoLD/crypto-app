import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const key = '77bd393aff167591fa60743464c7f231d7cceaf369f1757ba8bbb87c0091';


export const fetchTokens = createAsyncThunk(
    'fetchTokens',
    async (limit=100, thunkAPI) => {
        const response = await axios('https://api.cryptorank.io/v1/currencies', {params: {api_key: key, limit, optionalFields: 'images'}})
        return response?.data
})



// export const tokenApi = createApi({
//     reducerPath: 'tokenApi',
//     baseQuery: fetchBaseQuery({baseUrl: 'https://api.cryptorank.io/v1'}),
//     endpoints: (build) => ({
//         fetchAllTokens: build.query({
//             query: () => ({
//                 url: '/currencies'
//             })
//         })
//     })

// })
