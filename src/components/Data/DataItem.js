import React, {Fragment} from 'react'

const DataItem = ({data, index}) => {
    return (
        <Fragment>
            <div className='data--card-title'><h1>List ID: {index}</h1></div>
            {data[`${index}`].map((item, index) => {
                return <div key={index} className='data--card-name'>
                    <span><div className='data--blue-ball'></div>{item}</span>
                </div>;
            })}   
        </Fragment>
    );
};

export default DataItem;
