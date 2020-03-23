import api from '../services/api';

async function contentProvider(query, route = "content") {

    let  {page, content_name = ''} = query;

    let query_params = {
        params: {
          content_name,
          page
        }
    };

    let { data } = await api.get(route, query_params);

    return data;
}

export default contentProvider
