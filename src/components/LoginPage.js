import React from 'react'
import PanelistLogo from './Images/panelist-icon.jpg'

export const LoginPage = () => {
    return (
        <div className='contianer' style={{"background-color":"#F0FFFF","height":"100%"}}>
            <div class="card mx-auto" style={{ "width": "18rem" }}>
                <img src={PanelistLogo} class="card-img-top" alt="panelist-icon" />
                <div class="card-body text-center">
                    <h5 class="card-title bg-secondary font-monospace" style={{"color":"white"}}>Login</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                    <div class="input-group flex-nowrap">
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
                    </div>
                    </li>
                    <li class="list-group-item">
                    <div class="input-group flex-nowrap">
                    <input type="text" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping"/>
                    </div>
                    </li>
                </ul>
                <div class="card-body text-center">
                    <a href="#" class="btn btn-primary">Login</a>
                </div>
            </div>
        </div>
    )
}
