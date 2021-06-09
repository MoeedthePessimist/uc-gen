export default (posts = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return posts;
        case 'ADD':
            return posts;
        
        default:
            return posts;
    }
} 