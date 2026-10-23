const questions = {
  kamora: { name: "🗡️ Хроники Каморры (Кора Рейли)", list: [
    { q: "Кто автор?", answers: ["Кора Рейли", "Пенелопа Дуглас", "Рина Кент", "Колин Гувер"], correct: 0 },
    { q: "Что такое «Каморра»?", answers: ["Ветвь итальянской мафии в Лас-Вегасе", "Город", "Героиня", "Оружие"], correct: 0 },
    { q: "Кому посвящена первая книга?", answers: ["Фабиано и Леоне", "Римо и Серафине", "Савио и Джемме", "Лука и Арии"], correct: 0 },
    { q: "Кем должен был стать Фабиано?", answers: ["Руководителем Чикагской ячейки", "Поваром", "Адвокатом", "Врачом"], correct: 0 },
    { q: "От кого уходит Леона?", answers: ["От наркозависимой матери", "От жестокого отца", "От мужа-тирана", "От кредиторов"], correct: 0 },
    { q: "Кто похищает Серафину?", answers: ["Римо Фальконе", "Фабиано", "Савио", "Лука"], correct: 0 },
    { q: "Правило жизни Римо?", answers: ["«Победа или смерть»", "«Не влюбляйся»", "«Семья превыше всего»", "«Доверяй брату»"], correct: 0 },
    { q: "Кем была Серафина для Римо?", answers: ["Пленницей", "Сестрой", "Телохранителем", "Невестой"], correct: 0 },
    { q: "Кто такой Савио?", answers: ["Младший брат Дона", "Главный герой", "Врач мафии", "Полицейский"], correct: 0 },
    { q: "Кому обещана Джемма?", answers: ["Другому мужчине", "Савио", "Римо", "Фабиано"], correct: 0 }
  ]},
  bratva: { name: "🔪 Мясник Братвы (Т. Дж. Магуайр)", list: [
    { q: "Кто автор?", answers: ["Т. Дж. Магуайр", "Илья Деревянко", "Кора Рейли", "Рина Кент"], correct: 0 },
    { q: "Город под контролем Братвы?", answers: ["Лас-Вегас", "Нью-Йорк", "Чикаго", "Майами"], correct: 0 },
    { q: "Клан, противостоящий Братве?", answers: ["Коза Ностра", "Каморра", "Якудза", "Триада"], correct: 0 },
    { q: "Герой первой книги?", answers: ["Илаян Волков", "Артуро де Лука", "Дмитрий Волков", "Кирилл Морозов"], correct: 0 },
    { q: "Героиня первой книги?", answers: ["Илаяна Волкова", "Артуро де Лука", "Саша Иванова", "Эрика Фэйн"], correct: 0 },
    { q: "Кем является Илаяна?", answers: ["Дочерью Пахана", "Наследницей итальянцев", "Полицейской", "Телохранителем"], correct: 0 },
    { q: "Что связывает Илаяну и Артуро?", answers: ["Брак по расчёту", "Ограбление", "Дружба", "Месть"], correct: 0 },
    { q: "Сколько книг в серии?", answers: ["5", "3", "7", "4"], correct: 0 },
    { q: "Как называется 4-я книга?", answers: ["Bratva Butcher", "Bratva Bride", "Bratva Prince", "Bratva Menace"], correct: 0 },
    { q: "Кому посвящена каждая книга?", answers: ["Отдельной паре", "Одному герою", "Клану", "Политике"], correct: 0 }
  ]},
  monstra: { name: "👹 Монстра (Рина Кент)", list: [
    { q: "Кто автор?", answers: ["Рина Кент", "Кора Рейли", "Пенелопа Дуглас", "Илья Деревянко"], correct: 0 },
    { q: "Главный герой?", answers: ["Кирилл Морозов", "Дмитрий Волков", "Фабиано", "Майкл Крист"], correct: 0 },
    { q: "Кем является Кирилл?", answers: ["Наследником русской мафии", "Полицейским", "Врачом", "Студентом"], correct: 0 },
    { q: "Главная героиня?", answers: ["Александра (Саша) Иванова", "Леона", "Эрика", "Сесили"], correct: 0 },
    { q: "Цель Саши в армии?", answers: ["Месть за семью", "Найти любовь", "Заработать", "Сбежать от учёбы"], correct: 0 },
    { q: "Сколько книг в трилогии?", answers: ["3", "1", "5", "7"], correct: 0 },
    { q: "Первая книга?", answers: ["Blood of My Monster", "Heart of My Monster", "Lies of My Monster", "God of Wrath"], correct: 0 },
    { q: "Заключительная книга?", answers: ["Heart of My Monster", "Blood of My Monster", "Lies of My Monster", "Nightfall"], correct: 0 },
    { q: "Кем был Кирилл для Саши в армии?", answers: ["Командиром", "Братом", "Мужем", "Соседом"], correct: 0 },
    { q: "Финальный выбор героев?", answers: ["Между местью и любовью", "Работой и учёбой", "Городами", "Друзьями"], correct: 0 }
  ]},
  nightdevil: { name: "😈 Ночь Дьявола (Пенелопа Дуглас)", list: [
    { q: "Кто автор?", answers: ["Пенелопа Дуглас", "Кора Рейли", "Рина Кент", "Колин Гувер"], correct: 0 },
    { q: "Героиня первой книги?", answers: ["Эрика Фэйн", "Бэнкс", "Уинтер", "Эмори"], correct: 0 },
    { q: "Кто такой Майкл Крист?", answers: ["Старший брат парня Эрики", "Друг", "Учитель", "Полицейский"], correct: 0 },
    { q: "Как называют 4 главных героев?", answers: ["Всадники", "Короли", "Принцы", "Волки"], correct: 0 },
    { q: "Что случилось с друзьями Майкла?", answers: ["Попали в тюрьму", "Уехали", "Погибли", "Женились"], correct: 0 },
    { q: "4-я книга серии?", answers: ["«Курок»", "«Испорченный»", "«Убежище»", "«Сумрак»"], correct: 0 },
    { q: "Героиня «Курка»?", answers: ["Уинтер", "Эрика", "Бэнкс", "Эмори"], correct: 0 },
    { q: "Что сделала Уинтер?", answers: ["Отправила в тюрьму", "Вышла замуж", "Спасла", "Украла деньги"], correct: 0 },
    { q: "Куда отправляют провинившихся сыновей?", answers: ["Блэкчерч", "Понтифик", "Каморра", "Университет"], correct: 0 },
    { q: "Атмосфера серии?", answers: ["Мрачная", "Лёгкая", "Сказочная", "Фантастическая"], correct: 0 }
  ]},
  godofwrath: { name: "🔥 Бог Гнева (Рина Кент)", list: [
    { q: "Кто автор?", answers: ["Рина Кент", "Пенелопа Дуглас", "Кора Рейли", "Илья Деревянко"], correct: 0 },
    { q: "Из какой серии книга?", answers: ["«Наследие Богов»", "«Ночь Дьявола»", "«Каморра»", "«Братва»"], correct: 0 },
    { q: "Главная героиня?", answers: ["Сесили Найт", "Ава Нэш", "Эрика Фэйн", "Саша"], correct: 0 },
    { q: "Главный герой?", answers: ["Джереми Волков", "Кирилл Морозов", "Майкл Крист", "Илай Кинг"], correct: 0 },
    { q: "Кем является Джереми?", answers: ["Наследником империи", "Художником", "Полицейским", "Врачом"], correct: 0 },
    { q: "В какую организацию проникает Сесили?", answers: ["«Язычники»", "«Всадники»", "«Каморра»", "«Братва»"], correct: 0 },
    { q: "Университет?", answers: ["Королевский", "Гарвард", "Оксфорд", "МГУ"], correct: 0 },
    { q: "Жанр серии?", answers: ["Тёмный роман", "Фэнтези", "Детектив", "Фантастика"], correct: 0 },
    { q: "Кому адресованы книги?", answers: ["18+", "Детям", "Дошкольникам", "Пенсионерам"], correct: 0 },
    { q: "Что движет Джереми?", answers: ["Одержимость", "Желание помочь", "Месть", "Скука"], correct: 0 }
  ]}
};

const MIN_TO_WIN = 5, MAX_QUESTIONS = 10, TOTAL_BOOKS = Object.keys(questions).length;
let currentBook = null, currentBookKey = null, currentQuestions = [], currentIndex = 0, answered = false, correctInRound = 0, stars = 0, wonBooks = []; 

const $ = (id) => document.getElementById(id);
const menuScreen = $('menuScreen'), quizScreen = $('quizScreen'), resultScreen = $('resultScreen');
const starsCountEl = $('starsCount'), bookNameEl = $('bookName'), questionTextEl = $('questionText'), answersContainer = $('answersContainer'), feedbackEl = $('feedback'), currentQEl = $('currentQ'), totalQEl = $('totalQ'), resultTextEl = $('resultText'), resultStarsEl = $('resultStars'), resultTitleEl = $('resultTitle'), resultVerdictEl = $('resultVerdict'), winProgressEl = $('winProgress'), winNeededEl = $('winNeeded'), winProgressFill = $('winProgressFill'), profileStatusEl = $('profileStatus');

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

function updateProfile() {
  const count = wonBooks.length;
  let rank = 'ignoramus', text = 'Невежда';
  if (count >= 1 && count <= 2) { rank = 'beginner'; text = 'Новичок'; }
  else if (count >= 3 && count <= 4) { rank = 'reader'; text = 'Читатель'; }
  else if (count === TOTAL_BOOKS - 1) { rank = 'expert'; text = 'Эксперт'; }
  else if (count === TOTAL_BOOKS) { rank = 'guru'; text = 'Книжный Гуру'; }
  profileStatusEl.textContent = text;
  profileStatusEl.setAttribute('data-rank', rank);
}

function updateBookCards() {
  document.querySelectorAll('.book-card').forEach(card => {
    if (wonBooks.includes(card.dataset.book)) card.classList.add('won');
    else card.classList.remove('won');
  });
}

document.querySelectorAll('.book-card').forEach(btn => btn.addEventListener('click', () => startQuiz(btn.dataset.book)));
$('backBtn').addEventListener('click', () => showScreen(menuScreen));
$('retryBtn').addEventListener('click', () => { if (currentBookKey) startQuiz(currentBookKey); });
$('restartBtn').addEventListener('click', () => showScreen(menuScreen));

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
    answersContainer.querySelectorAll('.answer-btn').forEach(b => { if (b.textContent === correctText) b.classList.add('correct'); });
    feedbackEl.textContent = `❌ Неверно. Правильный ответ: ${correctText}`;
    feedbackEl.className = 'feedback show fail';
  }
  setTimeout(() => { currentIndex++; loadQuestion(); }, 1800);
}

function finishQuiz() {
  showScreen(resultScreen);
  const total = currentQuestions.length;
  const isWin = correctInRound >= MIN_TO_WIN;
  if (isWin && !wonBooks.includes(currentBookKey)) wonBooks.push(currentBookKey);
  saveProgress(); updateProfile(); updateBookCards();
  resultTitleEl.textContent = isWin ? '🏆 ПОБЕДА!' : '💀 ПОРАЖЕНИЕ';
  resultTitleEl.className = 'result-title ' + (isWin ? 'win' : 'lose');
  resultTextEl.textContent = `Правильных ответов: ${correctInRound} из ${total}`;
  resultStarsEl.textContent = '⭐'.repeat(correctInRound) + '☆'.repeat(Math.max(0, total - correctInRound));
  if (isWin) {
    resultVerdictEl.textContent = `✅ Ты угадал ${correctInRound} из ${total}. Порог пройден!`;
    resultVerdictEl.className = 'result-verdict win';
  } else {
    resultVerdictEl.textContent = `❌ Нужно минимум ${MIN_TO_WIN}. Не хватило ${MIN_TO_WIN - correctInRound}.`;
    resultVerdictEl.className = 'result-verdict lose';
  }
}

function showScreen(screen) { [menuScreen, quizScreen, resultScreen].forEach(s => s.classList.remove('active')); screen.classList.add('active'); }
function shuffle(arr) { for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; } return arr; }

loadProgress();
