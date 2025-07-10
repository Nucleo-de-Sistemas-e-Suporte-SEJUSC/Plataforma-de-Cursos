const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

const handleSearch = () => {
  const searchValue = searchInput.value.toLowerCase().trim();
  const cards = document.querySelectorAll('.pesquisa');

  cards.forEach((card) => {
    const title = card.getAttribute('data-title').toLowerCase();
    if (title.includes(searchValue)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
};

// Clique no botão
searchButton.addEventListener('click', handleSearch);

// Pressionar Enter no input
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleSearch();
});
