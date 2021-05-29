import axios from 'axios';
import { FETCH_DATA } from './types';
// sorts an array of objects based on specified 'prop' attribute
const sortGroup = (array, prop) => {
    return array.reduce((acc, arr) => {
       const key = arr[prop];
       if (!acc[key]) {
          acc[key] = [];
       }
       // Add Array to list for given key's value
       acc[key].push(arr);
       return acc;
    },[]);
};
// Fetches and manipulates JSON data
export const fetchData = ()  => async dispatch => {
    try {
        //Fetch data from API
        const res = await axios.get('https://fetch-hiring.s3.amazonaws.com/hiring.json');
        // Extract data from res object
        const { data } = res;
        // Sort data into groups based on 'listID' attribute
        const filteredListId = sortGroup(data, 'listId').map(listId => {
            // Filter through each object to check for name = null || empty string
            return listId.filter(listIdItem => listIdItem.name !== null && listIdItem.name.length > 0);
        });
        // Map through each object to remove every occurance of 'Item ' text from name attributes
        const sortedNames = filteredListId.map((listId) => {
            return listId.map(currentId => {
                return currentId.name.replace(/Item /g, '');
                // Sort the array based on numerical value of name after 'Item ' has been removed
            }).sort((a,b) => { 
                return a - b;
            });
        });
        // dispatch sorted array into state for use in component
        dispatch({
            type: FETCH_DATA,
            payload: sortedNames
        });
    } catch (error) {
        alert('Sorry, it looks like something went wrong. Please refresh and try again');
        throw(error);
    };
};

