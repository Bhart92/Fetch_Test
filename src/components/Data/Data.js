import React from 'react'
import DataItem from './DataItem';

const Data = ({data}) => {
    return (
        <div className='data'>
            <div className='data--card'>
                <div className='data--card-wrapper'>
                    {data.map((item, index) => {
                        return <DataItem key={index} data={data} index={index} />;
                    })}
                </div>
            </div>
        </div>
    );
};
  
export default Data;