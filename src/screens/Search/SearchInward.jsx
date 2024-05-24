
import classes from './SearchInward.module.css';
import MenuItem from '@mui/material/MenuItem';

import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import { useState } from 'react';
import CustomTable from '../../Components/table/CustomTable';




const columns1 = [
    {
      label: "Proposal Number",
      id: "proposalNumber",
    },
    {
      label: "Policy No",
      id: "policyNo",
    },
    {
      label: "Quote No",
      id: "quoteNo",
    },
    {
      label: "Customer Name",
      id: "customerName",
    },
    {
      label: "Product Name",
      id: "productName",
    },
    {
      label: "Premium Amount",
      id: "premiumAmount",
    },
    {
      label: "Submitted Date",
      id: "submittedDate",
    },
    {
      label: "Ops Received Date",
      id: "opsReceivedDate",
    },
    {
      label: "Proposal Signed Date",
      id: "proposalSignedDate",
    },
    // {
    //   label: "Co Insurance",
    //   id: "coInsurance",
    // },
    // {
    //   label: "PPHC",
    //   id: "pphc",
    // },
    // {
    //   label: "Agreement Code",
    //   id: "agreementCode",
    // },
  ];

  const data1 = [
    {
        proposalNumber: "5926864",
        policyNo: "0000000000369583",
        quoteNo: "0000000009172689",
        customerName: "Pravat Sharma",
        productName: "Motor",
        premiumAmount: 234566,
        submittedDate: "1/1/2024",
        opsReceivedDate: "1/2/2024",
        proposalSignedDate: "1/2/2024",
        // coInsurance: "N",
        // pphc: "N",
        // agreementCode: 127146,
      },
  ];



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
    const [showTable , setShowTable] = useState(false);
    const [page, setPage] = useState(0);
    const handleSearch = () => {
        setShowTable(true);
    }

    const dropDownValue = (e) => {
        setDropDown1(e.target.value);
        console.log('In dropdown', e.target.value);
    }
    return <>
        <div className={classes.formFather}>
        <form>
            <div className={classes.SearchInwardMain}>
                <h3>Search By   </h3>
                <div className={classes.headingFather}>
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
                        <input ></input>
                        <button type='button' onClick={handleSearch}>Search</button>


                    </div>


                </div>
            </div>
        </form>
        </div>
        <div className={classes.tableOutline}>

        {showTable && <CustomTable page={page} setPage={setPage}   columns={columns1} data={data1}/>}
        </div>




    </>
}

export default SearchInward;