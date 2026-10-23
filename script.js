// ====== БАЗА ВОПРОСОВ ======
const questions = {
  kamora: {
    name: "🗡️ Хроники Каморры (Кора Рейли)",
    list: [
      { q: "Кто автор серии «Хроники Каморры»?", answers: ["Кора Рейли", "Пенелопа Дуглас", "Рина Кент", "Колин Гувер"], correct: 0 },
      { q: "Что такое «Каморра» в этой серии?", answers: ["Ветвь итальянской мафии в Лас-Вегасе", "Название города", "Имя главной героини", "Вид оружия"], correct: 0 },
      { q: "Кому посвящена первая книга цикла?", answers: ["Фабиано и Леоне", "Римо и Серафине", "Савио и Джемме", "Лука и Арии"], correct: 0 },
      { q: "Кем должен был стать Фабиано по стопам отца?", answers: ["Руководителем Чикагской ячейки", "Поваром", "Адвокатом", "Врачом"], correct: 0 },
      { q: "От кого Леона мечтает уйти, чтобы построить достойную жизнь?", answers: ["От наркозависимой матери", "От жестокого отца", "От мужа-тирана", "От кредиторов"], correct: 0 },
      { q: "Кто похищает Серафину в третьей книге?", answers: ["Римо Фальконе", "Фабиано", "Савио", "Лука"], correct: 0 },
      { q: "Какое правило жизни у Римо Фальконе?", answers: ["«Победа или смерть»", "«Никогда не влюбляйся»", "«Семья превыше всего»", "«Доверяй только брату»"], correct: 0 },
      { q: "Кем является Серафина по отношению к Римо в начале?", answers: ["Пленницей из враждующего клана", "Сестрой", "Телохранителем", "Невестой по договорённости"], correct: 0 },
      { q: "Кто такой Савио Фальконе?", answers: ["Младший брат Дона Каморры", "Главный герой первой книги", "Врач мафии", "Полицейский под прикрытием"], correct: 0 },
      { q: "Кому обещана рука Джеммы Баццоли?", answers: ["Другому мужчине по договорённости", "Савио", "Римо", "Фабиано"], correct: 0 }
    ]
  },
  bratva: {
    name: "🔪 Братва (Илья Деревянко)",
    list: [
      { q: "Кто автор книги «Братва»?", answers: ["Илья Деревянко", "Кора Рейли", "Рина Кент", "Пенелопа Дуглас"], correct: 0 },
      { q: "По мотивам какой книги снят сериал «Бригада»?", answers: ["«Братва» Ильи Деревянко", "«Монстра»", "«Ночь Дьявола»", "«Хроники Каморры»"], correct: 0 },
      { q: "Как зовут главных героев «Братвы»?", answers: ["Санек и Витек", "Фабиано и Леона", "Майкл и Эрика", "Кирилл и Саша"], correct: 0 },
      { q: "В какое время происходит действие книги?", answers: ["Во времена развала Союза", "В современной Москве", "В XIX веке", "В будущем"], correct: 0 },
      { q: "Кем были герои до того, как стать бандитами?", answers: ["Офицерами, оставшимися без работы", "Студентами", "Врачами", "Учителями"], correct: 0 },
      { q: "Какой выбор стоит перед героями?", answers: ["Пойти в охрану или в криминал", "Уехать за границу или остаться", "Жениться или нет", "Учиться или работать"], correct: 0 },
      { q: "Что мучает героев по ходу сюжета?", answers: ["Совесть", "Голод", "Скука", "Ревность"], correct: 0 },
      { q: "Какой выход автор находит для героев?", answers: ["Погибнуть, спасая невиновных, или покаяться", "Стать бизнесменами", "Уехать в деревню", "Сдать всех полиции"], correct: 0 },
      { q: "Что автор описывает особенно грамотно?", answers: ["Рукопашный бой и оружие", "Кулинарию", "Моду", "Архитектуру"], correct: 0 },
      { q: "Кому адресована книга?", answers: ["Взрослой аудитории", "Детям", "Подросткам 10–12 лет", "Любителям сказок"], correct: 0 }
    ]
  },
  monstra: {
    name: "👹 Монстра (Рина Кент)",
    list: [
      { q: "Кто автор трилогии «Монстра»?", answers: ["Рина Кент", "Кора Рейли", "Пенелопа Дуглас", "Илья Деревянко"], correct: 0 },
      { q: "Как зовут главного героя?", answers: ["Кирилл Морозов", "Фабиано", "Майкл Крист", "Джереми Волков"], correct: 0 },
      { q: "Кем является Кирилл Морозов?", answers: ["Наследником русской мафиозной семьи", "Полицейским", "Врачом", "Студентом-художником"], correct: 0 },
      { q: "Как зовут главную героиню?", answers: ["Саша", "Леона", "Эрика", "Сесили"], correct: 0 },
      { q: "С какой целью Саша скрывает личность и идёт в армию?", answers: ["Чтобы отомстить за семью", "Чтобы найти любовь", "Чтобы заработать", "Чтобы сбежать от учёбы"], correct: 0 },
      { q: "Сколько книг в трилогии «Монстра»?", answers: ["3", "1", "5", "7"], correct: 0 },
      { q: "Как называется первая книга трилогии?", answers: ["Blood of My Monster", "Heart of My Monster", "Lies of My Monster", "God of Wrath"], correct: 0 },
      { q: "Как называется заключительная книга?", answers: ["Heart of My Monster", "Blood of My Monster", "Lies of My Monster", "Nightfall"], correct: 0 },
      { q: "Что Саша годами скрывает за маской?", answers: ["Свою истинную сущность и женскую идентичность", "Богатство", "Семью", "Прошлое"], correct: 0 },
      { q: "Какой финальный выбор стоит перед героями?", answers: ["Между местью и любовью", "Между работой и учёбой", "Между двумя городами", "Между друзьями и семьёй"], correct: 0 }
    ]
  },
  nightdevil: {
    name: "😈 Ночь Дьявола (Пенелопа Дуглас)",
    list: [
      { q: "Кто автор серии «Ночь Дьявола»?", answers: ["Пенелопа Дуглас", "Кора Рейли", "Рина Кент", "Колин Гувер"], correct: 0 },
      { q: "Как зовут главную героиню первой книги?", answers: ["Эрика Фэйн", "Бэнкс", "Уинтер", "Эмори"], correct: 0 },
      { q: "Кто такой Майкл Крист?", answers: ["Старший брат парня Эрики", "Просто друг", "Учитель", "Полицейский"], correct: 0 },
      { q: "Как называют себя четверо главных героев?", answers: ["Всадники", "Короли", "Принцы", "Волки"], correct: 0 },
      { q: "Что случилось с друзьями Майкла три года назад?", answers: ["Они попали в тюрьму", "Уехали в другую страну", "Погибли", "Женились"], correct: 0 },
      { q: "Как называется четвёртая книга серии?", answers: ["«Курок»", "«Испорченный»", "«Убежище»", "«Сумрак»"], correct: 0 },
      { q: "Кто главная героиня книги «Курок»?", answers: ["Уинтер", "Эрика", "Бэнкс", "Эмори"], correct: 0 },
      { q: "Что Уинтер сделала с главным героем «Курка»?", answers: ["Отправила его в тюрьму", "Вышла за него замуж", "Спасла ему жизнь", "Украла деньги"], correct: 0 },
      { q: "Как называется место, куда отправляют провинившихся сыновей?", answers: ["Блэкчерч", "Понтифик", "Каморра", "Кингс-Юниверсити"], correct: 0 },
      { q: "Какая атмосфера у серии?", answers: ["Мрачная и напряжённая", "Лёгкая и юмористическая", "Сказочная", "Научно-фантастическая"], correct: 0 }
    ]
  },
  godofwrath: {
    name: "🔥 Бог Гнева (Рина Кент)",
    list: [
      { q: "Кто автор книги «Бог Гнева»?", answers: ["Рина Кент", "Пенелопа Дуглас", "Кора Рейли", "Илья Деревянко"], correct: 0 },
      { q: "Из какой серии книга «Бог Гнева»?", answers: ["«Наследие Богов»", "«Ночь Дьявола»", "«Хроники Каморры»", "«Братва»"], correct: 0 },
      { q: "Как зовут главную героиню?", answers: ["Сесили Найт", "Ава Нэш", "Эрика Фэйн", "Саша"], correct: 0 },
      { q: "Как зовут главного героя?", answers: ["Джереми Волков", "Кирилл Морозов", "Майкл Крист", "Илай Кинг"], correct: 0 },
      { q: "Кем является Джереми Волков?", answers: ["Наследником криминальной империи", "Студентом-художником", "Полицейским", "Врачом"], correct: 0 },
      { q: "В какую тайную организацию проникает Сесили?", answers: ["«Язычники» (Heathens)", "«Всадники»", "«Каморра»", "«Братва»"], correct: 0 },
      { q: "В каком университете происходит действие?", answers: ["Королевский университет", "Гарвард", "Оксфорд", "МГУ"], correct: 0 },
      { q: "Какой жанр у серии?", answers: ["Тёмный роман (dark romance)", "Фэнтези", "Детектив", "Научная фантастика"], correct: 0 },
      { q: "Кому адресованы книги?", answers: ["Взрослой аудитории 18+", "Детям", "Дошкольникам", "Пенсионерам"], correct: 0 },
      { q: "Что движет Джереми в отношении Сесили?", answers: ["Одержимость и желание обладать", "Желание помочь", "Месть", "Скука"], correct: 0 }
    ]
  }
};

// ====== ПРАВИЛА ИГРЫ ======
const MIN_TO_WIN = 5;
const MAX_QUESTIONS = 10;
const TOTAL_BOOKS = Object.keys(questions).length;

// ====== СОСТОЯНИЕ ======
let currentBook = null;
let currentBookKey = null;
let currentQuestions = [];
let currentIndex = 0;
let answered = false;
let correctInRound = 0;
let stars = 0;
let wonBooks = []; 

// ====== DOM ======
const $ = (id) => document.getElementById(id);
const menuScreen = $('menuScreen');
const quizScreen = $('quizScreen');
const resultScreen = $('resultScreen');
const starsCountEl = $('starsCount');
const bookNameEl = $('bookName');
const questionTextEl = $('questionText');
const answersContainer = $('answersContainer');
const feedbackEl = $('feedback');
const currentQEl = $('currentQ');
const totalQEl = $('totalQ');
const resultTextEl = $('resultText');
const resultStarsEl = $('resultStars');
const resultTitleEl = $('resultTitle');
const resultVerdictEl = $('resultVerdict');
const winProgressEl = $('winProgress');
const winNeededEl = $('winNeeded');
const winProgressFill = $('winProgressFill');
const profileStatusEl = $('profileStatus');

// ====== ЛОКАЛЬНОЕ ХРАНИЛИЩЕ ======
function loadProgress() {
  const savedStars = localStorage.getItem('bookQuest_stars');
  const savedWon = localStorage.getItem('bookQuest_wonBooks');
  
  if (savedStars) stars = parseInt(savedStars, 10);
  if (savedWon) wonBooks = JSON.parse(savedWon);
  
  starsCountEl.textContent = stars;
  updateProfile();
  updateBookCards();
}

function saveProgress() {
  localStorage.setItem('bookQuest_stars', stars);
  localStorage.setItem('bookQuest_wonBooks', JSON.stringify(wonBooks));
}

// ====== ПРОФИЛЬ И СТАТУСЫ ======
function updateProfile() {
  const count = wonBooks.length;
  let rank = 'ignoramus';
  let text = 'Невежда';

  if (count === 0) {
    rank = 'ignoramus'; text = 'Невежда';
  } else if (count >= 1 && count <= 2) {
    rank = 'beginner'; text = 'Новичок';
  } else if (count >= 3 && count <= 4) {
    rank = 'reader'; text = 'Читатель';
  } else if (count === TOTAL_BOOKS - 1) {
    rank = 'expert'; text = 'Эксперт';
  } else if (count === TOTAL_BOOKS) {
    rank = 'guru'; text = 'Книжный Гуру';
  }

  profileStatusEl.textContent = text;
  profileStatusEl.setAttribute('data-rank', rank);
}

function updateBookCards() {
  document.querySelectorAll('.book-card').forEach(card => {
    if (wonBooks.includes(card.dataset.book)) {
      card.classList.add('won');
    } else {
      card.classList.remove('won');
    }
  });
}

// ====== ОБРАБОТЧИКИ ======
document.querySelectorAll('.book-card').forEach(btn => {
  btn.addEventListener('click', () => startQuiz(btn.dataset.book));
});

$('backBtn').addEventListener('click', () => showScreen(menuScreen));
$('retryBtn').addEventListener('click', () => { if (currentBookKey) startQuiz(currentBookKey); });
$('restartBtn').addEventListener('click', () => showScreen(menuScreen));

// ====== ЛОГИКА ======
function startQuiz(bookKey) {
  if (!questions[bookKey]) return;

  currentBookKey = bookKey;
  currentBook = questions[bookKey];
  currentQuestions = shuffle([...currentBook.list]).slice(0, MAX_QUESTIONS);
  currentIndex = 0;
  answered = false;
  correctInRound = 0;

  bookNameEl.textContent = currentBook.name;
  totalQEl.textContent = currentQuestions.length;
  winNeededEl.textContent = MIN_TO_WIN;
  winProgressEl.textContent = '0';
  winProgressFill.style.width = '0%';

  showScreen(quizScreen);
  loadQuestion();
}

function loadQuestion() {
  if (currentIndex >= currentQuestions.length) { finishQuiz(); return; }

  answered = false;
  feedbackEl.textContent = '';
  feedbackEl.className = 'feedback';
  currentQEl.textContent = currentIndex + 1;

  const q = currentQuestions[currentIndex];
  questionTextEl.textContent = q.q;

  const correctText = q.answers[q.correct];
  const shuffled = shuffle([...q.answers]);

  answersContainer.innerHTML = '';
  shuffled.forEach(ans => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = ans;
    btn.addEventListener('click', () => selectAnswer(btn, ans, correctText));
    answersContainer.appendChild(btn);
  });
}

function selectAnswer(btn, chosen, correctText) {
  if (answered) return;
  answered = true;

  answersContainer.querySelectorAll('.answer-btn').forEach(b => b.disabled = true);

  if (chosen === correctText) {
    btn.classList.add('correct');
    stars++; correctInRound++;
    starsCountEl.textContent = stars;
    winProgressEl.textContent = correctInRound;
    winProgressFill.style.width = Math.min(100, (correctInRound / MIN_TO_WIN) * 100) + '%';
    feedbackEl.textContent = `✅ Правильно! +1 ⭐ (${correctInRound} правильно)`;
    feedbackEl.className = 'feedback show success';
  } else {
    btn.classList.add('wrong');
    answersContainer.querySelectorAll('.answer-btn').forEach(b => {
      if (b.textContent === correctText) b.classList.add('correct');
    });
    feedbackEl.textContent = `❌ Неверно. Правильный ответ: ${correctText}`;
    feedbackEl.className = 'feedback show fail';
  }

  setTimeout(() => { currentIndex++; loadQuestion(); }, 1800);
}

function finishQuiz() {
  showScreen(resultScreen);
  const total = currentQuestions.length;
  const isWin = correctInRound >= MIN_TO_WIN;

  if (isWin) {
    if (!wonBooks.includes(currentBookKey)) {
      wonBooks.push(currentBookKey);
    }
  }

  saveProgress();
  updateProfile();
  updateBookCards();

  resultTitleEl.textContent = isWin ? '🏆 ПОБЕДА!' : '💀 ПОРАЖЕНИЕ';
  resultTitleEl.className = 'result-title ' + (isWin ? 'win' : 'lose');
  resultTextEl.textContent = `Правильных ответов: ${correctInRound} из ${total}`;
  resultStarsEl.textContent = '⭐'.repeat(correctInRound) + '☆'.repeat(Math.max(0, total - correctInRound));

  if (isWin) {
    resultVerdictEl.textContent = `✅ Ты угадал ${correctInRound} из ${total}. Порог пройден (нужно ≥ ${MIN_TO_WIN})!`;
    resultVerdictEl.className = 'result-verdict win';
  } else {
    const need = MIN_TO_WIN - correctInRound;
    resultVerdictEl.textContent = `❌ Нужно было угадать минимум ${MIN_TO_WIN}. Не хватило ${need} ${plural(need, 'ответа', 'ответов', 'ответа')}.`;
    resultVerdictEl.className = 'result-verdict lose';
  }
}

function plural(n, one, few, many) {
  const m10 = n % 10, m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return one;
  if (m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20)) return few;
  return many;
}

function showScreen(screen) {
  [menuScreen, quizScreen, resultScreen].forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Инициализация при загрузке страницы
loadProgress();
