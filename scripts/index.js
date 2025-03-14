// @todo: Темплейт карточки
    const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
    const placesList = document.querySelector('.places__list');
    const placesItem = cardTemplate.querySelector('.places__item');
    const cardImg = cardTemplate.querySelector('.card__image');
    const cardButtonDel = cardTemplate.querySelector('.card__delete-button');
    const cardtitle = cardTemplate.querySelector('.card__title');
    const cardButtonLike = cardTemplate.querySelector('.card__like-button');
    console.log(placesItem);
    console.log(cardImg);
    console.log(cardButtonDel);

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
    initialCards.forEach(function (el){
        createCard(el.name, el.link)
        
    });
   function imgSelect(img, link, name){
    img.setAttribute("src", link);
    img.setAttribute("alt", `Фото ${name}`);
   }

  function createCard(name, link){
    const item = cardTemplate.cloneNode(true);
    let title = item.querySelector('.card__title');
    let img = item.querySelector('.card__image');
    imgSelect(img, link, name);
    title.textContent = name;

    placesList.append(item);
    console.log(item)
    console.log(title)
    console.log(img)
  }  