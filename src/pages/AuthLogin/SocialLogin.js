import React from 'react'
import './AuthLogin.scss'

function SocialLoginButtons() {
    return (
        <div className="row mt-10 flex justify-evenly" >
            <div className="m-3 border-black">
                <a
                    style={{
                        backgroundColor: '#3B5998',
                    }}
                    className="fb btn rounded-md p-3 mr-3">
                    <i
                        style={{
                            width: '100px',
                        }}
                        className="fa fa-facebook fa-fw"
                    />
                </a>
                <a style={{
                    backgroundColor: 'lightblue',
                    width: '100px'
                }} className="twitter btn rounded-md p-3 mr-3">
                    <i style={{
                        width: '100px',
                    }} className="fa fa-twitter fa-fw" />
                </a>
                <a style={{
                    backgroundColor: 'red',
                }} className="rounded-md p-3">
                    <i style={{
                        width: '100px',
                    }} className="fa fa-google" />
                </a>
            </div>
        </div >
    )
}

export default SocialLoginButtons