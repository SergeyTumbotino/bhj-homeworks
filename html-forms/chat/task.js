const chatWidget = document.querySelector(".chat-widget");
const inputArea = document.querySelector(".chat-widget__input");
const chat = document.querySelector(".chat-widget__messages");

const botMessages = [
  "Добрый день! До свидания!",
  "Где ваша совесть?",
  "Кто тут?",
  "Вы не купили ни одного товара для того, чтобы так с нами разговаривать!",
  "К сожалению, все операторы сейчас заняты. Не пишите нам больше",
  "Мы ничего не будем вам продавать!",
  "Добрый день, мы ещё не проснулись. Позвоните через 10 лет",
  "Я - вредный бот!",
];

chatWidget.addEventListener("click", (e) => {
  e.currentTarget.classList.add("chat-widget_active");
});

function createMessage(message) {
  const date = new Date();
  return `<div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
    <div class="message__text"> ${message}</div>
  `;
}

function getClientMessage(message) {
  chat.innerHTML += `<div class="message message_client">
  ${createMessage(message)}
</div>`;
}

function getBotMessage() {
  chat.innerHTML += `<div class="message">
  ${createMessage(botMessages[Math.floor(Math.random() * botMessages.length)])}
</div>`;
}

inputArea.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.target.value) {
    getClientMessage(e.target.value);
    e.target.value = "";
    getBotMessage();
  }
});
