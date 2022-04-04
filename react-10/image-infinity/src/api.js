import axios from "axios";


function callGetImageAPI(searchText, page) {
    const url = new URLSearchParams("https://api.unsplash.com/search/photos/")
    return axios({
        // url: `https://api.unsplash.com/search/photos/
        //     ?client_id=f7N-c7ynV9x6FAE3c1mP35-_1uRQeFNKMYlRro55XGA
        //     &page=1
        //     &per_page=12
        //     &query=${searchText}`
        url: "https://api.unsplash.com/search/photos/",
        method: "GET",
        params: {
            client_id: "f7N-c7ynV9x6FAE3c1mP35-_1uRQeFNKMYlRro55XGA",
            page: page,
            per_page: 12,
            query: searchText
        }
    })
}

export default callGetImageAPI