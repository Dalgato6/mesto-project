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
let nameProfile = document.querySelector('.profile__title');
let descriptionProfile = document.querySelector('.profile__description');
const nameProfilePopup = profilePopup.querySelector('.popup__input_type_name');
const descriptionProfilePopup = profilePopup.querySelector('.popup__input_type_description');

//кнопка открытия и закрытия ред профиля
const btnProfOpen = document.querySelector('.profile__edit-button');
const btnProfClose = profilePopup.querySelector('.popup__close')
//кнопка открытия и закрытия создание нов карточки
const btnCardNew = document.querySelector('.profile__add-button');
const btnCardNewClose = cardPopup.querySelector('.popup__close');
// @todo: Функция создания карточки
btnCardNew.addEventListener("click", () => openModal(cardPopup));
btnCardNewClose.addEventListener("click", () => closeModal(cardPopup));
// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
initialCards.forEach(function (el){
    createCard(el.name, el.link, false)
        
});
//фунеция задает атриибуты; src и alt
function imgSelect(img, link, name){
    img.setAttribute("src", link);
    img.setAttribute("alt", `Фото ${name}`);
}

const popupImg = imagePopup.querySelector(".popup__image");
const popupCaption = imagePopup.querySelector(".popup__caption");
function createCard(name, link, userCard){
    const item = cardTemplate.cloneNode(true);
    let title = item.querySelector('.card__title');
    let img = item.querySelector('.card__image');
    imgSelect(img, link, name);
    title.textContent = name;

    img.addEventListener("click", () => {
        imgSelect(popupImg, link, name)
        popupCaption.textContent = name;
        openModal(imagePopup);

    });
    //закрытие image_popup
    const btnImgClose = imagePopup.querySelector('.popup__close');
    btnImgClose.addEventListener("click", () => closeModal(imagePopup));
    //лайк карточки
    const btnCardLike = item.querySelector('.card__like-button');
    btnCardLike.addEventListener("click", (evt) =>{
        evt.currentTarget.classList.toggle("card__like-button_is-active");
    });
    //удаление карточки
    const btnCardDel = item.querySelector('.card__delete-button');
    btnCardDel.addEventListener('click', () => {
        const card = btnCardDel.closest('.card');
        card.remove();
    });

    if (userCard) {
        placesList.prepend(item);
    } else {
        placesList.append(item);
    }
    
}

//открытие popup
function openModal(popup) {      
    popup.classList.add('popup_is-opened');
    
}
//закрытие popup
function closeModal(popup){
    popup.classList.remove("popup_is-opened");
}

nameProfilePopup.value = nameProfile.textContent;
descriptionProfilePopup.value = descriptionProfile.textContent;

btnProfOpen.addEventListener("click", () => openModal(profilePopup));
btnProfClose.addEventListener('click', () => closeModal(profilePopup));

// Находим форму в DOM
const profileFormElement = profilePopup.querySelector('.popup__form');// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = profileFormElement.querySelector('.popup__input_type_name');// Воспользуйтесь инструментом .querySelector()
const jobInput = profileFormElement.querySelector('.popup__input_type_description');// Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleProfileFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    const nameInputValue = nameInput.value;
    const jobInputValue = jobInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
    nameProfile.textContent = nameInputValue;
    descriptionProfile.textContent = jobInputValue;

    closeModal(profilePopup);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
profileFormElement.addEventListener('submit', handleProfileFormSubmit);

const cardFormElement = cardPopup.querySelector('.popup__form');

const cardName = cardFormElement.querySelector('.popup__input_type_card-name');
const cardLink = cardFormElement.querySelector('.popup__input_type_url');

function handleCardFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
    const cardNameValue = cardName.value;
    const cardLinkValue = cardLink.value;

    createCard(cardNameValue, cardLinkValue, true);
    closeModal(cardPopup);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
cardFormElement.addEventListener('submit', handleCardFormSubmit);
//добавление анимации popup
function PoputAnimation(){
    profilePopup.classList.add('popup_is-animated');
    imagePopup.classList.add('popup_is-animated');
    cardPopup.classList.add('popup_is-animated');
}
//ивент при первой загруке страницы
document.addEventListener('DOMContentLoaded', PoputAnimation);