import React from "react";

function cards({tip, summary}) {
    return (
        <div>
            <h3>Hair Tips</h3>
            <div class="card">
                <div class="card-header">
                    {tip}
                </div>
                <div class="card-body">
                    <p class="card-text">{summary}</p>
                    
                </div>
            </div>
        </div>
            
        
    )
}

export default cards;