import React, { Component } from "react";


class landing extends Component {
    render() {
        return (
            <div>
                <div class="container-fluid gridLook">
                    <div class="row ">
                        <div class="col-lg-6">
                            <h1>Know</h1>
                            <p>lorem</p>
                        </div>   
                        <div class="col-lg-6 know"></div> 
                    </div>
                </div>
                <div class="container-fluid ">
                <div class="row ">
                    <div class="col-lg-6 grow">
                
                    </div> 
                    <div class="col-lg-6">
                        <h1>Grow</h1>
                        <p>lorem</p>
                    </div>  
                </div>
            </div>
            <div class="container-fluid gridLook">
            <div class="row ">
                <div class="col-lg-6">
                    <h1>Glow</h1>
                    <p>lorem</p>
                </div> 
                <div class="col-lg-6 glow"></div>  
            </div>
            </div>
        </div>
              
    
        
        );
    }
}

export default landing;