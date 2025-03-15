// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const placesList = document.querySelector('.places__list');
const placesItem = cardTemplate.querySelector('.places__item');
const cardImg = cardTemplate.querySelector('.card__image');
const cardButtonDel = cardTemplate.querySelector('.card__delete-button');
const cardtitle = cardTemplate.querySelector('.card__title');
const cardPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');
const profilePopup = document.querySelector('.popup_type_edit');
const nameProfile = document.querySelector('.profile__title');
const descriptionProfile = document.querySelector('.profile__description');
const nameProfilePopup = profilePopup.querySelector('.popup__input_type_name');
const descriptionProfilePopup = profilePopup.querySelector('.popup__input_type_description');
const cardButtonLike = cardTemplate.querySelector('.card__like-button');
const btnProfOpen = document.querySelector('.profile__edit-button');
const btnProfClose = profilePopup.querySelector('.popup__close')
const btnCardNew = document.querySelector('.profile__add-button');
const btnCardNewClose = cardPopup.querySelector('.popup__close');
// @todo: Функция создания карточки
btnCardNew.addEventListener("click", () => openModal(cardPopup));
btnCardNewClose.addEventListener("click", () => closeModal(cardPopup));
// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
initialCards.forEach(function (el){
    createCard(el.name, el.link)
        
});
function imgSelect(img, link, name){
    img.setAttribute("src", link);
    img.setAttribute("alt", `Фото ${name}`);
}

const popupImg = imagePopup.querySelector(".popup__image");
const popupCaption = imagePopup.querySelector(".popup__caption");
function createCard(name, link){
    const item = cardTemplate.cloneNode(true);
    let title = item.querySelector('.card__title');
    let img = item.querySelector('.card__image');
    imgSelect(img, link, name);
    title.textContent = name;
    placesList.append(item);

    img.addEventListener("click", () => {
        imgSelect(popupImg, link, name)
        popupCaption.textContent = name;
        openModal(imagePopup);
    });
}

const btnImgClose = imagePopup.querySelector('.popup__close');
btnImgClose.addEventListener("click", () => closeModal(imagePopup));

function openModal(popup) {      
    popup.classList.add('popup_is-opened');
}

function closeModal(popup){
    popup.classList.remove("popup_is-opened");
    console.log('click')
}

nameProfilePopup.value = nameProfile.textContent;
descriptionProfilePopup.value = descriptionProfile.textContent;

btnProfOpen.addEventListener("click", () => openModal(profilePopup));
btnProfClose.addEventListener('click', () => closeModal(profilePopup));