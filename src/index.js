import './sass/main.scss';
import ApiService from './js/apiService.js';
import articlesTpl from './templates/articles.hbs'

    
const refs = {
    searchForm: document.querySelector('#search-form'),
    articlesContainer: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]'),
}

const apiService = new ApiService();


refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

refs.loadMoreBtn.classList.add('is-hidden');

function onSearch(e) {
    e.preventDefault();
    refs.loadMoreBtn.classList.remove('is-hidden');
    clearArticlesContainer();
    apiService.query = e.currentTarget.elements.query.value;
    apiService.resetPage();
    apiService.fetchArticles().then(appendArticlesMarkup);
    
}

function onLoadMore() {
    apiService.fetchArticles().then(appendArticlesMarkup);
    scroll()
}


function appendArticlesMarkup(hits) {
    refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl(hits));
    
}

function clearArticlesContainer() {
    refs.articlesContainer.innerHTML = '';
}

function scroll() {
    setTimeout(() => {
        refs.loadMoreBtn.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});
    }, 500);
    
}