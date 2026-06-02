// ── Shared utilities ──────────────────────────────────────────────

// ── Theme toggle ──────────────────────────────────────────────────
(function () {
  // Apply saved theme immediately (before DOMContentLoaded) to avoid flash
  const saved = localStorage.getItem('theme') || 'dark';
  document.documentElement.dataset.theme = saved;
})();

function initThemeToggle() {
  const nav = document.querySelector('nav');
  if (!nav) return;

  const btn = document.createElement('button');
  btn.id = 'themeToggle';
  btn.title = 'Toggle light / dark mode';
  const isDark = () => document.documentElement.dataset.theme === 'dark';
  const updateBtn = () => { btn.textContent = isDark() ? '☀' : '☾'; };
  updateBtn();

  Object.assign(btn.style, {
    background: 'none',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    padding: '.22rem .6rem',
    cursor: 'pointer',
    fontSize: '1rem',
    color: 'var(--muted)',
    lineHeight: '1.4',
    transition: 'border-color .15s',
    fontFamily: 'var(--font-ui)',
    marginLeft: 'auto',
  });

  btn.addEventListener('click', () => {
    const next = isDark() ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('theme', next);
    updateBtn();
  });

  nav.appendChild(btn);
}

function speak(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = 'ja-JP';
  utt.rate = 0.85;
  window.speechSynthesis.speak(utt);
}

function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function getSong(id) {
  return SONGS.find(s => s.id === id) || null;
}

function setActiveNav() {
  const path = window.location.pathname;
  document.querySelectorAll('nav a[data-page]').forEach(a => {
    a.classList.toggle('active', path.includes(a.dataset.page));
  });
}

function renderPetals(count = 10) {
  const bg = document.querySelector('.sakura-bg');
  if (!bg) return;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'petal';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.animationDuration = (8 + Math.random() * 12) + 's';
    p.style.animationDelay = (Math.random() * 10) + 's';
    p.style.width = p.style.height = (6 + Math.random() * 8) + 'px';
    bg.appendChild(p);
  }
}

// ── Kana phonetic breakdown ───────────────────────────────────────

const KANA_ROM = {
  // Hiragana
  'あ':'a','い':'i','う':'u','え':'e','お':'o',
  'か':'ka','き':'ki','く':'ku','け':'ke','こ':'ko',
  'さ':'sa','し':'shi','す':'su','せ':'se','そ':'so',
  'た':'ta','ち':'chi','つ':'tsu','て':'te','と':'to',
  'な':'na','に':'ni','ぬ':'nu','ね':'ne','の':'no',
  'は':'ha','ひ':'hi','ふ':'fu','へ':'he','ほ':'ho',
  'ま':'ma','み':'mi','む':'mu','め':'me','も':'mo',
  'や':'ya','ゆ':'yu','よ':'yo',
  'ら':'ra','り':'ri','る':'ru','れ':'re','ろ':'ro',
  'わ':'wa','を':'wo','ん':'n',
  'が':'ga','ぎ':'gi','ぐ':'gu','げ':'ge','ご':'go',
  'ざ':'za','じ':'ji','ず':'zu','ぜ':'ze','ぞ':'zo',
  'だ':'da','ぢ':'ji','づ':'zu','で':'de','ど':'do',
  'ば':'ba','び':'bi','ぶ':'bu','べ':'be','ぼ':'bo',
  'ぱ':'pa','ぴ':'pi','ぷ':'pu','ぺ':'pe','ぽ':'po',
  'きゃ':'kya','きゅ':'kyu','きょ':'kyo',
  'しゃ':'sha','しゅ':'shu','しょ':'sho',
  'ちゃ':'cha','ちゅ':'chu','ちょ':'cho',
  'にゃ':'nya','にゅ':'nyu','にょ':'nyo',
  'ひゃ':'hya','ひゅ':'hyu','ひょ':'hyo',
  'みゃ':'mya','みゅ':'myu','みょ':'myo',
  'りゃ':'rya','りゅ':'ryu','りょ':'ryo',
  'ぎゃ':'gya','ぎゅ':'gyu','ぎょ':'gyo',
  'じゃ':'ja','じゅ':'ju','じょ':'jo',
  'びゃ':'bya','びゅ':'byu','びょ':'byo',
  'ぴゃ':'pya','ぴゅ':'pyu','ぴょ':'pyo',
  // Katakana
  'ア':'a','イ':'i','ウ':'u','エ':'e','オ':'o',
  'カ':'ka','キ':'ki','ク':'ku','ケ':'ke','コ':'ko',
  'サ':'sa','シ':'shi','ス':'su','セ':'se','ソ':'so',
  'タ':'ta','チ':'chi','ツ':'tsu','テ':'te','ト':'to',
  'ナ':'na','ニ':'ni','ヌ':'nu','ネ':'ne','ノ':'no',
  'ハ':'ha','ヒ':'hi','フ':'fu','ヘ':'he','ホ':'ho',
  'マ':'ma','ミ':'mi','ム':'mu','メ':'me','モ':'mo',
  'ヤ':'ya','ユ':'yu','ヨ':'yo',
  'ラ':'ra','リ':'ri','ル':'ru','レ':'re','ロ':'ro',
  'ワ':'wa','ヲ':'wo','ン':'n',
  'ガ':'ga','ギ':'gi','グ':'gu','ゲ':'ge','ゴ':'go',
  'ザ':'za','ジ':'ji','ズ':'zu','ゼ':'ze','ゾ':'zo',
  'ダ':'da','ヂ':'ji','ヅ':'zu','デ':'de','ド':'do',
  'バ':'ba','ビ':'bi','ブ':'bu','ベ':'be','ボ':'bo',
  'パ':'pa','ピ':'pi','プ':'pu','ペ':'pe','ポ':'po',
  'キャ':'kya','キュ':'kyu','キョ':'kyo',
  'シャ':'sha','シュ':'shu','ショ':'sho',
  'チャ':'cha','チュ':'chu','チョ':'cho',
  'ニャ':'nya','ニュ':'nyu','ニョ':'nyo',
  'ヒャ':'hya','ヒュ':'hyu','ヒョ':'hyo',
  'ミャ':'mya','ミュ':'myu','ミョ':'myo',
  'リャ':'rya','リュ':'ryu','リョ':'ryo',
  'ギャ':'gya','ギュ':'gyu','ギョ':'gyo',
  'ジャ':'ja','ジュ':'ju','ジョ':'jo',
  'ビャ':'bya','ビュ':'byu','ビョ':'byo',
  'ピャ':'pya','ピュ':'pyu','ピョ':'pyo',
  'ファ':'fa','フィ':'fi','フェ':'fe','フォ':'fo',
  'ウィ':'wi','ウェ':'we','ウォ':'wo',
  'ティ':'ti','ディ':'di','テゥ':'tu','デゥ':'du',
};

/**
 * Break a kana string into phonetic syllables.
 * Returns an array of { char, rom } where char = original kana, rom = sound.
 */
function kanaBreakdown(text) {
  const chars = [...text];
  const result = [];
  let i = 0;
  while (i < chars.length) {
    const c = chars[i];
    // Try two-char compound (e.g. しゃ, キャ)
    if (i + 1 < chars.length) {
      const two = c + chars[i + 1];
      if (KANA_ROM[two]) {
        result.push({ char: two, rom: KANA_ROM[two] });
        i += 2;
        continue;
      }
    }
    // っ / ッ — doubles the next consonant
    if (c === 'っ' || c === 'ッ') {
      if (i + 1 < chars.length) {
        const next = chars[i + 1];
        const nextRom = KANA_ROM[next] || '';
        result.push({ char: c, rom: nextRom ? nextRom[0] : '' }); // just the doubled consonant
      } else {
        result.push({ char: c, rom: '' });
      }
      i++;
      continue;
    }
    // ー — long vowel marker
    if (c === 'ー') {
      const prev = result.length > 0 ? result[result.length - 1].rom : '';
      const vowel = prev ? prev[prev.length - 1] : '';
      result.push({ char: c, rom: vowel || 'ー' });
      i++;
      continue;
    }
    // Small kana used alone (ゃゅょャュョ etc.)
    const small = { 'ゃ':'ya','ゅ':'yu','ょ':'yo','ャ':'ya','ュ':'yu','ョ':'yo','ぁ':'a','ぃ':'i','ぅ':'u','ぇ':'e','ぉ':'o','ァ':'a','ィ':'i','ゥ':'u','ェ':'e','ォ':'o' };
    if (small[c]) {
      result.push({ char: c, rom: small[c] });
      i++;
      continue;
    }
    // Regular kana
    if (KANA_ROM[c]) {
      result.push({ char: c, rom: KANA_ROM[c] });
      i++;
      continue;
    }
    // Non-kana (kanji, space, punctuation) — pass through
    result.push({ char: c, rom: null });
    i++;
  }
  return result;
}

// ── Japanese text segmentation ────────────────────────────────────

function charType(c) {
  const code = c.charCodeAt(0);
  if (code >= 0x3040 && code <= 0x309F) return 'hira';
  if (code >= 0x30A0 && code <= 0x30FF) return 'kata';
  if ((code >= 0x4E00 && code <= 0x9FFF) || (code >= 0x3400 && code <= 0x4DBF)) return 'kanji';
  return 'other';
}

/** Split text into typed segments, merging adjacent same-type chars */
function segmentJapanese(text) {
  const segments = [];
  let cur = '';
  let curType = null;
  for (const ch of text) {
    const t = charType(ch);
    if (t === curType) { cur += ch; }
    else { if (cur) segments.push({ text: cur, type: curType }); cur = ch; curType = t; }
  }
  if (cur) segments.push({ text: cur, type: curType });
  return segments;
}

// ── Quiz localStorage helpers ─────────────────────────────────────

const STORE_KEY = 'jplearn_quiz';

function loadQuizData() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY) || '{}'); } catch { return {}; }
}

function saveQuizData(data) {
  localStorage.setItem(STORE_KEY, JSON.stringify(data));
}

function markWord(songId, wordJa, result) {
  const data = loadQuizData();
  const key = `${songId}::${wordJa}`;
  data[key] = data[key] || { got: 0, half: 0, miss: 0 };
  if (result === 'got') data[key].got++;
  else if (result === 'half') data[key].half = (data[key].half || 0) + 1;
  else data[key].miss++;
  saveQuizData(data);
}

function getWordStats(songId, wordJa) {
  const data = loadQuizData();
  return data[`${songId}::${wordJa}`] || { got: 0, half: 0, miss: 0 };
}

function resetQuizData() {
  localStorage.removeItem(STORE_KEY);
}

// ── Tooltip ───────────────────────────────────────────────────────

let tooltip = null;

function initTooltip() {
  if (tooltip) return; // only once
  tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  document.body.appendChild(tooltip);

  document.addEventListener('click', e => {
    if (!tooltip.contains(e.target) &&
        !e.target.classList.contains('vocab-word') &&
        !e.target.classList.contains('word-any')) {
      hideTooltip();
    }
  });
}

/** Show tooltip for a known word (vocab or dict) */
function showTooltip(word, anchorEl) {
  if (!tooltip) return;
  const hasExample = word.example && word.exampleEn;
  tooltip.innerHTML = `
    <button class="t-close" aria-label="Close">×</button>
    <div class="t-ja">${esc(word.ja)}</div>
    ${word.hiragana && word.hiragana !== word.ja ? `<div class="t-hira">${esc(word.hiragana)}</div>` : ''}
    <div class="t-romaji">${esc(word.romaji)}</div>
    <div class="t-en">${esc(word.en)}</div>
    ${hasExample ? `<div class="t-example"><span class="t-ex-ja">${esc(word.example)}</span><span class="t-ex-en">${esc(word.exampleEn)}</span></div>` : ''}
    <button class="t-speak">🔊 Hear it</button>
  `;
  tooltip.querySelector('.t-close').addEventListener('click', hideTooltip);
  tooltip.querySelector('.t-speak').addEventListener('click', () => speak(word.ja));
  _positionTooltip(anchorEl);
}

/** Show tooltip for a word not in any dictionary — link to Jisho */
function showLookupTooltip(text, anchorEl) {
  if (!tooltip) return;
  const q = encodeURIComponent(text);
  tooltip.innerHTML = `
    <button class="t-close" aria-label="Close">×</button>
    <div class="t-ja">${esc(text)}</div>
    <div class="t-lookup-note">Tap Jisho for the full meaning →</div>
    <button class="t-speak">🔊 Hear it</button>
    <a class="t-jisho" href="https://jisho.org/search/${q}" target="_blank" rel="noopener">Open on Jisho →</a>
  `;
  tooltip.querySelector('.t-close').addEventListener('click', hideTooltip);
  tooltip.querySelector('.t-speak').addEventListener('click', () => speak(text));
  _positionTooltip(anchorEl);
}

function _positionTooltip(anchorEl) {
  tooltip.classList.add('visible');
  const rect = anchorEl.getBoundingClientRect();
  const tw = tooltip.offsetWidth || 260;
  const th = tooltip.offsetHeight || 160;
  let left = rect.left;
  let top = rect.bottom + 8;
  if (top + th > window.innerHeight - 16) top = rect.top - th - 8;
  if (top < 8) top = 8;
  if (left + tw > window.innerWidth - 16) left = window.innerWidth - tw - 16;
  if (left < 8) left = 8;
  tooltip.style.left = left + 'px';
  tooltip.style.top = top + 'px';
}

function hideTooltip() {
  if (tooltip) tooltip.classList.remove('visible');
}

function esc(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ── NAV HTML ─────────────────────────────────────────────────────

const NAV_HTML = `
<nav>
  <span class="logo">🎵 <span>日本語</span> Music</span>
  <a href="index.html" data-page="index">Songs</a>
  <a href="alphabet.html" data-page="alphabet">Alphabet</a>
  <a href="quiz.html" data-page="quiz">Quiz</a>
  <a href="grammar.html" data-page="grammar">Grammar</a>
</nav>
<div class="sakura-bg"></div>
`;

document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  setActiveNav();
  renderPetals(12);
  initThemeToggle();
});
