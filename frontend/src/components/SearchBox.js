import React from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'

const SearchBox = () => {

    return (
        <>
            <div className="wrapper">
                <DropdownButton id="dropdown-basic-button" title="Select District" className="dropdown">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                <div class="search_box">
                    
                    <div class="search_field">
                        <input type="text" class="input" placeholder="Search"></input>
                        <i class="fas fa-search"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchBox
