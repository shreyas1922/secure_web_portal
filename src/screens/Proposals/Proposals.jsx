import React, { useState } from 'react';
import CustomTable from "../../Components/table/CustomTable";
import classes from "./Proposals.module.css";
 
const columns = [
  {
    label: 'Issued',
    id: 'issued',
    value: 1234
  },
  {
    label: 'Pending',
    id: 'pending',
    value: 1234
  },
  {
    label: 'Verified',
    id: 'verified',
    value: 1234
  },
  {
    label: 'Discrepancy',
    id: 'discrepancy',
    value: 1234
  },
  {
    label: 'Quota created',
    id: 'quota_created',
    value: 1234
  },
  {
    label: 'Declined',
    id: 'declined',
    value: 1234
  }
];
 
const data = [
  {
    issued: 1234,
    pending: 1234,
    verified: 1234,
    discrepancy: 1234,
    quota_created: 1234,
    declined: 1234
  }
];
 
const Proposal = () => {
  const [page, setPage] = useState(0);
  return (
<div className={classes.proposal}>
<CustomTable page={page} setPage={setPage} columns={columns} data={data} width="60%" isNavLink />
</div>
  );
};
 
export default Proposal;