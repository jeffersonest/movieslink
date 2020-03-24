import api from '../services/api';

async function contentProvider(query, route = "content") {

    let  {page, content_name = '', genres=''} = query;

    let query_params = {
        params: {
          content_name,
          page,
          genres,
        }
    };

    try {
      const { data } = await api.get(route, query_params);
      return data;
    } catch (error) {
      return  {error : error.message}
    }
}

export default contentProvider
