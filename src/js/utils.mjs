// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  let shoppingCart = JSON.parse(localStorage.getItem(key)) || [];
  shoppingCart.push(data);
  localStorage.setItem(key, JSON.stringify(shoppingCart));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener('touchend', (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener('click', callback);
}

//New function for team2 assignment
export function getParams(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param); 
  return product;
}

export function renderListWithTemplate (templateFn, parentElement, list, position = 'afterbegin', clear = false) {
  const element = document.querySelector(parentElement);      
  const renderedList = list.map(templateFn);

  if (clear) {
    element.innerHTML = '';
  }
  element.insertAdjacentHTML(position,renderedList.join(''));
}

export function convertToJson(res) {
  if (res.ok) {
      return res.json();
  } else {
      throw new Error('Bad Response');
  }
}

export function  getData(path) {
    return fetch(path)
      .then(convertToJson)
      .then((data) => data);
}