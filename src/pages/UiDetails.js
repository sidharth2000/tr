import React, { useEffect } from "react";
import styles from "./UiDetails.module.scss";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UiDetails = () => {

    const {screenId} = useParams();
    useEffect(()=>{
        console.log("Getting screen details of screen ID :",screenId);
        axios.get(`http://localhost:8090/screendetails/${screenId}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    },[])



    return(
        <div className={styles.main}>
            <div className={styles.header}>
                <div>stepper</div>
                <div className={styles.headerText}>Screen Details</div>
            </div>
            <div className={styles.view}>
                <div className={styles.firstRow}>
                    <div className={styles.widget}>
                        <div className={styles.widgetHeader}>Screen name</div>
                        <div className={styles.widgetContent}>value</div>
                    </div>
                    <div className={styles.widget}>
                        <div className={styles.widgetHeader}>Short description</div>
                        <div className={styles.widgetContent}>value</div>
                    </div>
                    <div className={styles.widget}>
                        <div className={styles.widgetHeader}>Code quality</div>
                        <div className={styles.widgetContent}>value</div>
                    </div>
                    <div className={styles.widget}>
                        <div className={styles.widgetHeader}>Code complexity</div>
                        <div className={styles.widgetContent}>value</div>
                    </div>
                    <div className={styles.widget}>
                        <div className={styles.widgetHeader}>Lines of code</div>
                        <div className={styles.widgetContent}>value</div>
                    </div>
                </div>
                <div className={styles.secondRow}>
                <div className={styles.widget}>
                        <div className={styles.widgetHeader}>Business significance</div>
                        <div className={styles.widgetContent}>value</div>
                    </div>
                    <div className={styles.widget}>
                        <div className={styles.widgetHeader}>Long description</div>
                        <div className={styles.widgetContent}>value</div>
                    </div>
                    <div className={styles.widget}>
                        <div className={styles.widgetHeader}>Code quality justification</div>
                        <div className={styles.widgetContent}>value</div>
                    </div>
                    <div className={styles.widget}>
                        <div className={styles.widgetHeader}>Code complexity justification</div>
                        <div className={styles.widgetContent}>value</div>
                    </div>
                    <div className={styles.widget}>
                        <div className={styles.widgetHeader}>Possible improvements</div>
                        <div className={styles.widgetContent}>value</div>
                    </div>
                </div>
                <div className={styles.thirdRow}>
                    <div className={styles.widget}>
                        <div className={styles.widgetHeader}>Forms</div>
                        <div className={styles.widgetContent}>value</div>
                    </div>
                    <div className={styles.widget}>
                        <div className={styles.widgetHeader}>Form details</div>
                        <div className={styles.widgetContent}>value</div>
                    </div>
                </div>
                
            </div>
        </div>
    );

}

export default UiDetails;