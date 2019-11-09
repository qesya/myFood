import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer nOS8yPYxKDGz30oKXYb2_DWvGt0Q9lXGZtYZk4Yw4dIhh6C8VBcn5e0Xfp-2n1mX1NK7b8-dCcsQyC4iS2fUtCoCzGotVREzfk4YP_e1wWNVQ6AIkTB-pP3ykspmXXYx'
    }
});