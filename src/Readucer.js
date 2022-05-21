const initialState = {
    request: [],
  };
  
export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case "newHistory":
        const request = [...state.request, payload];
        return { request };
      default:
        return state;
    }
  };
  
 export const newDataSearch = (reqData, data) => {
    return {
      type: "newHistory",
      payload: {
        url: reqData.url,
        method: reqData.method,
        resultData: data,
      },
    };
  };

