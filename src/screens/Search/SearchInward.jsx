
import classes from './SearchInward.module.css';
import MenuItem from '@mui/material/MenuItem';

import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import { useState } from 'react';




const SearchInward = () => {
    // const [searchBy, setSearchBy ] = useState('');
    // const [anchorEl, setAnchorEl] = useState(null);
    // const open = Boolean(anchorEl);

    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    // const handleMenuItemClick = () => {

    //     handleClose();


    // };
    const [dropDown1, setDropDown1] = useState('Select Method')

    const dropDownValue = (e) => {
        setDropDown1(e.target.value);
        console.log('In dropdown', e.target.value);
    }
    return <>
        <form>
            <div className={classes.SearchInwardMain}>
                <h3>Search By   </h3>
                <div className={classes.subHeading}>
                    {/* <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{}}
                    size='large'
                   
                >
                    {searchBy}
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={() => handleMenuItemClick('/')}>Proposal Number</MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick('/inwardForm')}>Agreement Code</MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick('/searchInward')}>Product Name</MenuItem>
                    <MenuItem onClick={()=> {}} >Customer Number   </MenuItem>
                    <MenuItem onClick={() => {}}></MenuItem>

                </Menu> */}
                    <div className={classes.heading}>
                        {/* <div className={classes.headingbaby1}>

                        <label>
                            Search By 
                        </label>
                    </div> */}

                        <select onChange={dropDownValue}>
                            <option value='Proposal Number'>Proposal Number</option>
                            <option value='Agreement Code'>Agreement Code</option>
                            <option value='Product Name'>Product Name</option>
                            <option value='Customer Name'>Customer Name</option>
                        </select>
                        <input></input>
                        <button>Search</button>

                    </div>


                </div>
            </div>
        </form>




    </>
}

export default SearchInward;