import React from 'react'

export const Table = ({ employees, sortByEmail }) => {

    return (
        <div style={{marginLeft: '50%', transform: "translateX(-50%)"}}>
            <table className="table-auto">
                {/* table head */}
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="w-1/5 ">Image</th>          
                        <th scope="col" className="w-1/5">Name</th>
                        <th scope="col" className="w-1/5">Phone</th>
                        <th scope="col" className="w-1/5" onClick={() => sortByEmail()}> 
                            <img src="https://img.icons8.com/windows/32/000000/sort-alpha-up.png" width="25px" style={{marginLeft: '80px'}}/>
                            <span>Email</span>
                        </th>
                        <th scope="col" className="w-1/5">Date of Birth</th>
                    </tr>
                </thead>

                {/* table body */}
                <tbody className="bg-white divide-y divide-gray-200">
                    {employees.map((employee, i) => {
                        const { first, last} = employee.name
                        return (
                            <tr key={i} className="">
                                <td className="">
                                    <img src={employee.picture.thumbnail} alt={first}/>
                                </td>
                                <td className="px-6 py-4 whitespace-nowra">{first} {last}</td>
                                <td className="px-6 py-4 whitespace-nowra">
                                    <a href={`tel:${employee.phone}`}>{employee.phone}</a>
                                </td>
                                <td className="px-6 py-4 whitespace-nowra">
                                    <a href={`mailto:${employee.email}`}>{employee.email}</a>
                                </td>
                                <td className="px-6 py-4 whitespace-nowra">{employee.dob.date}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}