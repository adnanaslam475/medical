import React from 'react';


const Loader = () => (
    <div className='m-auto'>
        <div id="global-loader">
            <img src={require("../../assets/images/loader.svg").default} className="loader-img" alt="Loading...." />
        </div>
    </div>
);
export default Loader;
