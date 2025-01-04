


const postReducer = (state ={ posts:[]}, action) => {
        switch (action.type) {
            case "GET_POSTS":
                return action.payload;
    
            case "CREATE_POST":
                return {
                    posts:[...state.posts, action.payload],
                };
    
            case "UPDATE_POST":
                return state.map((post) =>
                    post._id === action.payload._id ? action.payload : post  //! 1:50. dakika
                );
    
            case "DELETE_POST":
                return state.filter((post) => post._id !== action.payload);
    
            default:
                return state;
        }
    };

    export default postReducer