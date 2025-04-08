const sections = {
  submit: {
    text: `Хотите увидеть свой маршрут, поселение или поделиться интересным лайфхаком? Свяжитесь с автором — <a href='https://t.me/Metalismatic' target='_blank'>@Metalismatic</a> в чате игры или в телеграм.`,
  },
  events: {
    text: `В ближайшее время не ожидается ивентов`,
  },
  links: {
    text: `Ты новенький на сервере и не знаешь, что делать? В начале используй команду для добавления русского чата и настрой его: <br>
      <code onclick="copyToClipboard('/group join russian')" style="cursor:pointer; color:blue;">/group join russian</code><br>
      Изменения размера чата для удобства переключения между вкладками: <br>
      <code onclick="copyToClipboard('.chatsize 800 400')" style="cursor:pointer; color:blue;">.chatsize 800 400</code><br>
      Отключаем переключение на главный чат: <br>
      Отключаем "Автопоказ чата" в Настройки -> Интерфейс<br><br>
      Затем можно добавиться в самое крупное РУ сообщество на этом сервере: <br>
      <a href="https://t.me/mylesvintagestory" target="_blank">https://t.me/mylesvintagestory</a><br><br>
      Также полезные ссылки:<br>
      Карта: <a href="https://map.tops.vintagestory.at/?x=-1&y=17&zoom=10" target="_blank">ссылка</a><br>
      Навигатор: <a href="https://herrscher-of-sleeping.github.io/tl-navigator/" target="_blank">ссылка</a>`,
  },
  commands: {
    text: `Смена класса с перезарядкой в реальные полгода:<br>
      <code onclick="copyToClipboard('.charsel')" style="cursor:pointer; color:blue;">.charsel</code>`,
  },
  mods: {
    text: `Перевод сообщений в чате:<br><a href="https://mods.vintagestory.at/chattranslator" target="_blank">Chat Translator</a><br><br>
      Показывает список игроков и их пинг на Tab:<br><a href="https://mods.vintagestory.at/playerlist" target="_blank">Player List</a><br><br>
      Добавляет возможность смотреть все приваты игроков (по умолчанию на R англ.):<br><a href="https://mods.vintagestory.at/claimsradar" target="_blank">Claims Radar</a><br><br>
      Больше информации, от времени горения угольной ямы до информации у какого торговца что и за сколько продается:<br><a href="https://mods.vintagestory.at/extrainfo" target="_blank">Extra Info</a>
      Выведение информации на экран, температура, таймер до шторма и т.д., управление на U:<br><a href="https://mods.vintagestory.at/show/mod/9817" target="_blank">Status Hud Continued</a>`,
  },
  cities: {
    text: `<p>Ты должен решить для себя, что тебе интереснее — проходить игру в одиночку или же найти себе город и развиваться в социуме, используя торговлю на максимум.</p>
      <p>Если тебе интересно играть с живыми людьми, то вот список живых поселков с РУ игроками, которые захотели оставить свои координаты для новичков:</p>
      <ul style="list-style: none; padding-left: 0; text-align: left;">
        <li><a href="#" onclick="showCity('bronze')">Бронзовый город</a></li>
        <li><a href=\"#\" onclick=\"showCity('yellow')\">Желтые высоты</a></li>
      <!-- <li><a href="#" onclick="showCity('agraba')">Аграба</a></li> -->
      <!-- <li><a href="#" onclick="showCity('erebor')">Эребор</a></li> -->
      </ul>
      <div id='city-details'></div>`,
  },
  places: {
    text: `<code onclick="copyToClipboard('/waypoint addati gear 524 110 437 false #FF0000 Evangeлисткий храм')" style="cursor:pointer; color:blue;">/waypoint addati gear 524 110 437 false #FF0000 Evangeлисткий храм</code><br>
      <code onclick="copyToClipboard('/waypoint addati gear -776 110 17047 false #FF0000 Музей диковин')" style="cursor:pointer; color:blue;">/waypoint addati gear -776 110 17047 false #FF0000 Музей диковин</code><br>
      <code onclick="copyToClipboard('/waypoint addati gear -348000 110 -289815 false #FF0000 Дача Рарога')" style="cursor:pointer; color:blue;">/waypoint addati gear -348000 110 -289815 false #FF0000 Дача Рарога</code>`,
  },
};

function showSection(key) {
  const section = sections[key];
  const contentContainer = document.getElementById("content-container");
  const contentEl = document.getElementById("content");
  contentContainer.style.opacity = 0;
  setTimeout(() => {
    contentEl.innerHTML = `<p>${section.text}</p>`;
    contentContainer.style.opacity = 1;
    contentEl.scrollIntoView({ behavior: "smooth" });
  }, 200);
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    // Уведомление убрано
  });
}
function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

function showCity(city) {
  const container = document.getElementById("city-details");
  if (city === "yellow") {
    container.innerHTML = `<div style='text-align: left; margin-top: 1em;'>
        <h3>Желтые Высоты</h3>
        <p>Жёлтые Высоты – это уникальное место, где жизнь отличается от привычных городских будней.</p>
        <strong>🔨 Свобода творчества</strong>
        <p>Свободная архитектура. Здесь каждый может строить, как пожелает, без жёстких правил и ограничений.</p>
        <strong>🛠 Мастерство и ремесла</strong>
        <p>Общедоступная кузница, дробилка и жернова для всех желающих.</p>
        <strong>🌾 Единение с природой</strong>
        <p>Поля, загоны, возможность заниматься сельским хозяйством и животными.</p>
        <strong>🏡 Сообщество и независимость</strong>
        <p>Нет иерархии, каждый может найти своё место и заниматься любимым делом.</p>
        <p><em>Это не просто поселение – это образ жизни, где главное правило – свобода творить и развиваться.</em> 🔥</p>
        <p><strong>Как добраться?</strong></p>
        <p>маршрут от спавна, копируем команды и по очереди и вводим в чат игры:</p>
        <code onclick="copyToClipboard('/waypoint addati spiral 601 110 456 false #FF8000 TL №1')" style='cursor:pointer; color:blue;'>/waypoint addati spiral 601 110 456 false #FF8000 TL №1</code><br>
        <code onclick="copyToClipboard('/waypoint addati spiral 6142 110 4486 false #FF8000 TL №2')" style='cursor:pointer; color:blue;'>/waypoint addati spiral 6142 110 4486 false #FF8000 TL №2</code><br>
        <code onclick="copyToClipboard('/waypoint addati spiral -360 110 7368 false #FF8000 TL №3')" style='cursor:pointer; color:blue;'>/waypoint addati spiral -360 110 7368 false #FF8000 TL №3</code><br>
        <code onclick="copyToClipboard('/waypoint addati spiral -3698 110 9271 false #FF8000 Бронзовый город')" style='cursor:pointer; color:blue;'>/waypoint addati spiral -3698 110 9271 false #FF8000 Бронзовый город</code><br>
        <code onclick="copyToClipboard('/waypoint addati spiral -749 110 17028 false purple Майлзвиль')" style='cursor:pointer; color:blue;'>/waypoint addati spiral -749 110 17028 false purple Майлзвиль</code><br>
        <code onclick="copyToClipboard('/waypoint addati spiral 4665 110 24186 false #FFFF00 Желтые Высоты')" style='cursor:pointer; color:blue;'>/waypoint addati spiral 4665 110 24186 false #FFFF00 Желтые Высоты</code>
      </div>`;
  } else if (city === "bronze") {
    container.innerHTML = `<div style='text-align: left; margin-top: 1em;'>
        <h3>Бронзовый город</h3>
        <p>Гордый наследний Майлзвиля 🙂</p>
        <p>Активный город с развитой инфраструкторой. Помогаем новичкам!</p>
        <p><strong>Как добраться?</strong></p>
        <p>маршрут от спавна, копируем команды и по очереди и вводим в чат игры:</p>
        <code onclick="copyToClipboard('/waypoint addati spiral 601 110 456 false #FF8000 TL №1')" style='cursor:pointer; color:blue;'>/waypoint addati spiral 601 110 456 false #FF8000 TL №1</code><br>
        <code onclick="copyToClipboard('/waypoint addati spiral 6142 110 4486 false #FF8000 TL №2')" style='cursor:pointer; color:blue;'>/waypoint addati spiral 6142 110 4486 false #FF8000 TL №2</code><br>
        <code onclick="copyToClipboard('/waypoint addati spiral -360 110 7368 false #FF8000 TL №3')" style='cursor:pointer; color:blue;'>/waypoint addati spiral -360 110 7368 false #FF8000 TL №3</code><br>
        <code onclick="copyToClipboard('/waypoint addati spiral -3698 110 9271 false #FF8000 Бронзовый город')" style='cursor:pointer; color:blue;'>/waypoint addati spiral -3698 110 9271 false #FF8000 Бронзовый город</code>
      </div>`;
  } else {
    container.innerHTML = `<p style='margin-top:1em;'>Информация о городе скоро появится.</p>`;
  }
}
