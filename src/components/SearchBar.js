import React from 'react'

export const SearchBar = ({handleInputChange, handleSubmit, value}) => {
    return (
        <div className="">
            <form className="" onSubmit={handleSubmit}>
                <input
                    className="form-control"
                    value={value}
                    name="search"
                    onChange={handleInputChange}
                    type="search"
                    placeholder='Search'
                />
            </form>
        </div>
    )
}