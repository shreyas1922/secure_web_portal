import React from 'react';
import CustomTable from "../../Components/table/CustomTable";
import classes from "./Issued.module.css";
 
const columns = [
  {
    label: 'Proposal No.',
    id: 'proposal_no'
  },
  {
    label: 'Inward Type',
    id: 'inward_type'
  },
  {
    label: 'Receipt No',
    id: 'receipt_no'
  },
  {
    label: 'Instrument No',
    id: 'instrument_no'
  },
  {
    label: 'Product',
    id: 'product'
  },
  {
    label: 'Customer Name',
    id: 'customer_name'
  },
  {
    label: 'Premium',
    id: 'premium'
  }
];
 
const data = [
  {
    proposal_no: 508102,
    inward_type: 'Proposal Submission Module',
    receipt_no: 332243533664,
    instrument_no: 12134,
    product: 'Private Car 4W',
    customer_name: 'Anand Madiri',
    premium: 2000
  }
];
 
const Issued = () => {
  return (
<div className={classes.issued}>
<CustomTable columns={columns} data={data} width="90%" />
</div>
  );
};
 
export default Issued;