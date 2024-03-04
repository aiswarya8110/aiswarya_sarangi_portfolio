import React from 'react';
const SectionTitle = ({ title })=>{
    return (
        <div className="border-b border-gray-200 pb-5">
            <h3 className="text-3xl font-medium tracking-wider capitalize">
                {title}
            </h3>
        </div>
    )
}

export default SectionTitle;