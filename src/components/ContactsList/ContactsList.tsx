import {FC} from 'react'
import {useGetContactsQuery} from "../../store/api/api.ts";
import {useDeleteContactsMutation} from "../../store/api/contactApi.ts";


interface IContactsListProps {
  onClick: () => void
}

export const ContactsList: FC<IContactsListProps> = ({onClick}) => {
  const {data, error, isLoading} = useGetContactsQuery(null)
  const [deleteContact] = useDeleteContactsMutation()


  if (isLoading) return <div className='text-black text-3xl text-center'>isLoading...</div>
  if (error) return <div className='text-black text-3xl text-center'>ERROR!</div>

  return (
    <div className="flex flex-col items-center mt-4">
      <div className="flex justify-between items-center gap-5 mb-4">
        <h2 className="text-2xl font-bold">Contacts</h2>
        <button
          onClick={() => onClick()}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all duration-200"
        >
          Add contact +
        </button>
      </div>
      <ul className="w-full max-w-[600px] bg-white shadow-md rounded-lg overflow-hidden">

        {
          data &&
          data.map(contact => (
            <li key={contact.id} className="border-b border-gray-200">
              <div className="px-4 py-3 flex items-center justify-between gap-5">
                <div className="flex items-center">
                  <span className="text-lg font-medium text-gray-800 mr-3">{contact.firstName}</span>
                  <span className="text-lg font-medium text-gray-800">{contact.lastName}</span>
                </div>
                <div className="text-gray-600 text-sm shrink-0">{contact.tel}</div>
                <button
                  onClick={() => deleteContact(contact.id)}
                  className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-all duration-200">
                  Delete
                </button>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
};



