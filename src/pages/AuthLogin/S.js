import React from 'react'

function S() {
    return (
        <div className="row omb_socialButtons mt-16 flex justify-evenly" >
            <div className="">
                <a
                    style={{ backgroundColor: "#3b5998" }}
                    className="btn btn-lg btn-block omb_btn-facebook"
                >
                    <i className="fa fa-facebook visible-xs"></i>
                    <span className="hidden-xs">Facebook</span>
                </a>
            </div>
            <div className="">
                <a
                    style={{ backgroundColor: "#00aced" }}
                    className="btn btn-lg btn-block omb_btn-twitter"
                >
                    <i className="fa fa-twitter visible-xs"></i>
                    <span className="hidden-xs">Twitter</span>
                </a>
            </div>
            <div className="">
                <a
                    style={{ backgroundColor: "#c32f10" }}
                    className="btn btn-lg btn-block omb_btn-google"
                >
                    <i className="fa fa-google-plus visible-xs"></i>
                    <span className="hidden-xs">Google+</span>
                </a>
            </div>
        </div >
    )
}

export default S