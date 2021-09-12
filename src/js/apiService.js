export default class ApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1
        }
        

    fetchArticles() {
        
            const KEY = '23348722-ce6138f5525b6382824043b6d';

            const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${KEY}`

            return fetch(url)
            .then(r => r.json())
                .then(data => {
                    
                    this.incrementPage();
                    
                    return data.hits;
            })
    }

    incrementPage() {
        this.page += 1
    }

    resetPage() {
        this.page = 1;
    }
    
    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}
