import TYPE from '../../types/search';

export default function search() {
  return (dispatch) => {
    dispatch({ type: TYPE.REQ_DATA });

    // here is where you can make async api requests for data
    return new Promise((resolve, reject) => {
      dispatch({
        type: TYPE.RES_DATA,
        data: { text: 'This is some text for the ABOUT page fetched asynchronously' }
      });
      return resolve();
    });
  };
}
