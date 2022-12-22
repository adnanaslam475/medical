import React from 'react';
// import styles from './Loader.scss';


const Loader = () => (
    <div >
        <div id="global-loader">
            <img src={require("../../assets/images/loader.svg").default} className="loader-img" alt="Loading...." />
        </div>
    </div>
);

export default Loader;
