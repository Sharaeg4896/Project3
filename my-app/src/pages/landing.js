import React, { Component } from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";


class landing extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Header/>
            <div>
                <div class="container-fluid gridLook">
                    <div class="row ">
                        <div class="col-lg-6">
                        <h1 className="h1 animated fadeIn delay-2s">Know</h1>
                            <p className="p"> A beautiful mind is a beautiful soul</p>
                            <p>Searching how to do a cute style?</p>
                            <p>Or about hydrating shampoo and conditioner?</p>
                            <p>It's all right here.</p>
                            <p><i class="down"></i></p>
                        </div>   
                        <div class="col-lg-6 know"></div> 
                    </div>
                </div>
                <div class="container-fluid ">
                <div class="row ">
                    <div class="col-lg-6 grow">
                
                    </div> 
                    <div class="col-lg-6">
                        <h1 className="h1 animated fadeIn delay-4s">Grow</h1>
                        <p className="p">Beauty is reflected in adaption, revision and change</p>
                        <p> Pamper your locks and hair with these </p>
                        <p>moisturizing creams, washes, </p>
                        <p>and nourishing hair goodies.</p>
                        <p> Learn more</p>
                        <p><i class="down"></i></p>
                    </div>  
                </div>
            </div>
            <div class="container-fluid gridLook">
            <div class="row ">
                <div class="col-lg-6">
                    <h1 className="h1 animated fadeIn delay-5s">Glow</h1>
                    <p clasName="p">Reflextion of beauty is glowing from within</p>
                    <p> It's not about having more products than you can count,</p>
                    <p>but using the right products that do what you need.</p>
                    <p>Shop Now</p>
                    <p><i class="down"></i></p>
                </div> 
                <div class="col-lg-6 glow"></div>  
            </div>
            </div>
           
        </div>
       
            </div>
            
              
    
        
        );
    }
}

export default landing;