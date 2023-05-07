import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {IContact} from "../../types/contacts.ts";

const API_URL = 'http://localhost:3005'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    tagTypes: ['contact'],
    endpoints: (builder) => ({
        getContacts: builder.query<IContact[], null>({
            query: () => `contacts/`,
            providesTags: () => [{
                type: "contact"
            }]
        }),
    }),
})

export const { useGetContactsQuery } = api