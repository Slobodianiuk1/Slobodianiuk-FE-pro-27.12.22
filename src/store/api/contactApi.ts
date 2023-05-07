import {api} from "./api.ts";
import {IContactData} from "../../types/contacts.ts";

export const contactApi = api.injectEndpoints({
    endpoints: builder => ({
        createContacts: builder.mutation<null, IContactData>({
            query: (contact) => ({
                body: contact,
                url: 'contacts',
                method: 'POST'
            }),
            invalidatesTags: () => [{
                type: "contact"
            }]
        }),
        deleteContacts: builder.mutation<null, number>({
            query: (id) => ({
                url: `contacts/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: () => [{
                type: "contact"
            }]
        }),
    })
})

export const { useCreateContactsMutation, useDeleteContactsMutation } = contactApi

