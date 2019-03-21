import React from "react";

function cards({tips, summary, image}) {
    return (
        <div>
            
            <div class="card">
                <div class="card-header">
                    {tips}
                </div>
                <div class="card-body">
                    <p class="card-text">{summary}</p>
                    <div>
                    {image ? <img class="tip-image" src={require(`../../images/tipImages/${image}`)} alt="tips"></img>: <span></span>}
                    </div>
                    
                    
                </div>
            </div>
        </div>
            
        
    )
}

export default cards;