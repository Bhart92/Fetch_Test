import React, {useEffect} from 'react'
import PropTypes from 'prop-types';
import Data from '../Data/Data';
import {fetchData} from '../../actions/data';
import {connect} from 'react-redux';
import gsap from 'gsap';

const DisplayTable = ({data, fetchData}) => {
    useEffect(() => {
        fetchData();
    }, [fetchData]);
    useEffect(() => {
        gsap.to('.data--card-name', {
            duration: 1,
            opacity: 1,
            y: 0,
            stagger: .0035
        });
        gsap.to('.data--card-title', {
            duration: 1,
            opacity: 1,
            x: 0,
            stagger: .0025
        });
    })
    return data.length === 0 ? 'Loading...' : (
        <div className='data--container'>
            <Data data={data[0]}/>
        </div>
    );
};

DisplayTable.propTypes = {
    fetchData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    data: state.data
});
  
export default connect(mapStateToProps, {fetchData})(DisplayTable);
