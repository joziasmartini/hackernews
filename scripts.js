const apiBase = "https://hacker-news.firebaseio.com/v0/";
const container = document.querySelector('.posts');
let url, title, el;

fetch(apiBase + 'topstories.json')
  .then(res => res.json())
  .then(res => res.slice(0,100))
  .then(res => {
    res.forEach((id, i) => {
      fetchItem(id);
    });
  })
  .catch(e => {
    console.log(e);
  });


function fetchItem(id) {
  var item = apiBase + 'item/' + id + '.json';
  
  fetch(item)
    .then(res => res.json())
    .then(res => {
      title = res.title;
      url = res.url;
      el = document.createElement("li");
      el.innerHTML = `<a href="${url}">${title}</a>`;
      container.appendChild(el);
    })
    .catch(e => {
      console.log(e);  
    });
}