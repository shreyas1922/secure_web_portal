import { Close, Notes } from "@mui/icons-material";
import classes from "./Sidebar.module.css";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
    const [sidebarClosed, setSidebarclosed] = useState(false);

    return (
        <>
            <div className={classes.sidebar} style={{ width: sidebarClosed ? '45px' : '15%' }}>
                <div
                    onClick={() => setSidebarclosed(prev => !prev)}
                    className={classes.sidebarMenuIcon}
                >
                    {sidebarClosed ? <Notes /> : <CloseIcon sx={{paddingLeft:'0px'}} />}
                </div>
                <ul className={classes.sidebarList}>
                    <li>
                        <Notes />
                        <NavLink to='/' style={{ textDecoration: 'none', color: 'white' }}>
                            Inward
                        </NavLink>
                    </li>
                    <li><Notes />Endorsement</li>
                    <li><Notes />Access Management</li>
                    {/* <li><Notes />Proposal Inwards</li> */}
                    {/* <li><Notes />Corporate Endorsement</li> */}
                    <li><Notes />Productivity</li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;