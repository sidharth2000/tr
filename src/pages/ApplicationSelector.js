import React from "react";
import styles from "./ApplicationSelector.module.scss"
import Select from '@mui/material/Select'
import { MenuItem } from "@mui/material";

const ApplicationSelector = () => {


    const applicationList = ['BGW','CONNECT'];


    return(
        <div className={styles.main}>
            <div>
                <label>Application</label>
                <Select label="Select an application" >
                    {applicationList.map((application,index)=>{<MenuItem >{application}</MenuItem>})}
                </Select>
            </div>
        </div>
    )
}

export default ApplicationSelector;