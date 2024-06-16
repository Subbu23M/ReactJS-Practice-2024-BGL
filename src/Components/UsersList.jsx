import axios from "axios"
import { useState,useEffect} from "react"

export const UsersList = () => {
    const [data, setData] = useState([])
    const baseUrl = 'https://jsonplaceholder.typicode.com/users'

    const fetchUsers = () => {
        axios
            .get(baseUrl)
            .then((response) => {
                // Optional Chaining
                setData(response?.data)
            })
            .catch((error) => {
                alert(error.message)
            })
    }
    useEffect(() => fetchUsers(), [])
    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">
                            Id
                        </th>
                        <th scope="col">
                            Name
                        </th>
                        <th scope="col">
                            Email
                        </th>
                        <th scope="col">
                            City
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((user) => {
                            // Object Destructuring-ES6
                            const {
                                id,
                                name,
                                email,
                                address
                            } = user
                            return(
                                <tr key={id}>
                                    <td>
                                        {id}
                                    </td>
                                    <td>
                                        {name}
                                    </td>
                                    <td>
                                        {email}
                                    </td>
                                    <td>
                                        {address?.city}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}