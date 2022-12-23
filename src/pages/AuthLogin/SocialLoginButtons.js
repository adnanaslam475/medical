import React from 'react'
import './AuthLogin.scss'

function SocialLoginButtons() {
    return (
        <div className="row mt-10 flex justify-evenly" >
            <div className="m-3 flex border-black justify-evenly">
                <a
                    style={{
                        backgroundColor: '#3B5998',
                        width: '100px',
                        height: '50px', display: 'flex', justifyContent: 'center'
                    }}
                    className="fb btn rounded-md p-3 mr-3">
                    <i className="fa fa-facebook fa-fw"
                    />
                </a>
                <a style={{
                    backgroundColor: 'lightblue',
                    width: '100px',
                    height: '50px', display: 'flex', justifyContent: 'center'
                }} className="twitter flex justify-center btn rounded-md p-3 mr-3">
                    <i className="fa fa-twitter fa-fw" />
                </a>
                <a style={{
                    backgroundColor: 'red', width: '100px',
                    height: '50px', display: 'flex', justifyContent: 'center'
                }} className="rounded-md p-3">
                    <i className="fa fa-google" />
                </a>
            </div>
        </div >
    )
}

export default SocialLoginButtons