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
    name: "🔪 Мясник Братвы (Т. Дж. Магуайр)",
    list: [
      { q: "Кто автор серии «Братва» и книги «Мясник Братвы»?", answers: ["Т. Дж. Магуайр", "Илья Деревянко", "Кора Рейли", "Рина Кент"], correct: 0 },
      { q: "Какой город находится под контролем Братвы в этой серии?", answers: ["Лас-Вегас", "Нью-Йорк", "Чикаго", "Майами"], correct: 0 },
      { q: "Какой клан контролирует Нью-Йорк и противостоит Братве?", answers: ["Коза Ностра", "Каморра", "Якудза", "Триада"], correct: 0 },
      { q: "Как зовут главного героя первой книги («Невеста Братвы»)?", answers: ["Илаян Волков", "Артуро де Лука", "Дмитрий Волков", "Кирилл Морозов"], correct: 0 },
      { q: "Как зовут главную героиню первой книги?", answers: ["Илаяна Волкова", "Артуро де Лука", "Саша Иванова", "Эрика Фэйн"], correct: 0 },
      { q: "Кем является Илаяна Волкова?", answers: ["Дочерью Пахана русской Братвы", "Наследницей итальянского клана", "Полицейской под прикрытием", "Телохранителем"], correct: 0 },
      { q: "Что связывает Илаяну и Артуро в первой книге?", answers: ["Брак по расчёту между кланами", "Совместное ограбление", "Школьная дружба", "Месть за семью"], correct: 0 },
      { q: "Сколько книг в серии «Братва» Т. Дж. Магуайр?", answers: ["5", "3", "7", "4"], correct: 0 },
      { q: "Как называется четвёртая книга серии (про Мясника)?", answers: ["Bratva Butcher (Мясник Братвы)", "Bratva Bride", "Bratva Prince", "Bratva Menace"], correct: 0 },
      { q: "Кому посвящена каждая книга серии «Братва»?", answers: ["Отдельной паре персонажей", "Одному и тому же герою", "Истории одного клана без романтики", "Политическим событиям"], correct: 0 }
    ]
  },
  monstra: {
    name: "👹 Монстра (Рина Кент)",
    list: [
      { q: "Кто автор трилогии «Монстр»?", answers: ["Рина Кент", "Кора Рейли", "Пенелопа Дуглас", "Илья Деревянко"], correct: 0 },
      { q: "Как зовут главного героя трилогии?", answers: ["Кирилл Морозов", "Дмитрий Волков", "Фабиано", "Майкл Крист"], correct: 0 },
      { q: "Кем является Кирилл Морозов?", answers: ["Наследником могущественной русской мафиозной семьи (Братвы)", "Полицейским", "Врачом", "Студентом-художником"], correct: 0 },
      { q: "Как зовут главную героиню трилогии?", answers: ["Александра (Саша) Иванова", "Леона", "Эрика", "Сесили"], correct: 0 },
      { q: "С какой целью Саша притворяется мужчиной и идёт в армию?", answers: ["Чтобы отомстить за убийство своей семьи", "Чтобы найти любовь", "Чтобы заработать денег", "Чтобы сбежать от учёбы"], correct: 0 },
      { q: "Сколько книг в трилогии «Монстр»?", answers: ["3", "1", "5", "7"], correct: 0 },
      { q: "Как называется первая книга трилогии?", answers: ["Blood of My Monster (Кровь моего монстра)", "Heart of My Monster", "Lies of My Monster", "God of Wrath"], correct: 0 },
      { q: "Как называется заключительная книга трилогии?", answers: ["Heart of My Monster (Сердце моего монстра)", "Blood of My Monster", "Lies of My Monster", "Nightfall"], correct: 0 },
      { q: "Кем приходится Кирилл Саше в начале их знакомства в армии?", answers: ["Её командиром", "Её братом", "Её мужем", "Её соседом"], correct: 0 },
      { q: "Какой финальный выбор стоит перед Кириллом и Сашей в конце трилогии?", answers: ["Между местью и любовью", "Между работой и учёбой", "Между двумя городами", "Между друзьями и семьёй"], correct: 0 }
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
      if (b.text
