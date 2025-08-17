// components/News/newsSlider.ts
export type NewsSliderApi = { rebuild: () => void; destroy: () => void };

type Params = {
  viewport: HTMLElement;
  track: HTMLElement;
  prevBtn: HTMLButtonElement;
  nextBtn: HTMLButtonElement;
  pagination: HTMLElement;
  breakpoints?: { tablet: number; desktop: number };
  rowsMobile?: number;
  rowsTablet?: number;
  maxVisibleBullets?: number;
  firstInColumnClass?: string; // например 'news_card--first' (если хочешь помечать верхние)
};

type Mode = 'mobile' | 'tablet' | 'desktop';

export function mountNewsSlider(p: Params): NewsSliderApi {
  if (!p?.viewport || !p?.track || !p?.prevBtn || !p?.nextBtn || !p?.pagination) {
    return { rebuild() {}, destroy() {} };
  }

  const BP = { tablet: 768, desktop: 1440, ...(p.breakpoints || {}) };
  const rowsMobile = p.rowsMobile ?? 2;
  const rowsTablet = p.rowsTablet ?? 2;
  const MAX_VISIBLE = p.maxVisibleBullets ?? 4;
  const firstCls = p.firstInColumnClass ?? 'news_card--first';

  let mode: Mode = getMode();
  let visibleCols = getVisibleCols(mode); // 1/2/3
  let rows = getRows(mode);               // 2/2/1
  let index = 0;
  let disposed = false;
  let resizeRaf = 0;

  p.prevBtn.addEventListener('click', onPrev);
  p.nextBtn.addEventListener('click', onNext);
  window.addEventListener('resize', onResize, { passive: true });

  // старт
  layout();
  update();
  // на случай позднего применения шрифтов/стилей — второй тик
  requestAnimationFrame(() => { if (!disposed) { layout(); update(); } });

  function rebuild() {
    if (disposed) return;
    layout();
    index = 0;
    update();
  }

  function destroy() {
    disposed = true;
    try {
      window.removeEventListener('resize', onResize);
      p.prevBtn.removeEventListener('click', onPrev);
      p.nextBtn.removeEventListener('click', onNext);
    } catch {
      // ignore errors during cleanup
    }
  }

  return { rebuild, destroy };

  // ---- core ----
  function onPrev() { if (index > 0) { index--; update(); } }
  function onNext() {
    const cards = getCards();
    const cols = Math.ceil(cards.length / rows);
    const maxIndex = Math.max(0, cols - visibleCols);
    if (index < maxIndex) { index++; update(); }
  }
  function onResize() {
    if (resizeRaf) cancelAnimationFrame(resizeRaf);
    resizeRaf = requestAnimationFrame(() => {
      const prev = mode;
      mode = getMode();
      visibleCols = getVisibleCols(mode);
      rows = getRows(mode);
      if (mode !== prev) index = 0;
      layout();
      update();
    });
  }

  function getCards(): HTMLElement[] {
    return Array.from(p.track.querySelectorAll<HTMLElement>('[data-news-card]'));
  }

  function layout() {
    // просто убеждаемся, что viewport режет содержимое
    p.viewport.style.overflow = 'hidden';
  }

  function update() {
    const cards = getCards();
    if (!cards.length) return;
  
    const columns = Math.ceil(cards.length / rows);
  
    // 1) ФИКС ширины по режиму: всегда приоритетнее любых замеров
    const colW = mode === 'tablet' ? 324 : mode === 'desktop' ? 286 : 290;
  
    // либо через CSS-переменную (надёжно и красиво)
    // p.track.style.setProperty('--col-w', colW + 'px');
    // а в SCSS: .news_slider_track { grid-auto-columns: var(--col-w, 290px); }
  
    // сейчас оставим напрямую:
    (p.track.style as CSSStyleDeclaration & { gridAutoColumns: string }).gridAutoColumns = colW + 'px';
    p.track.style.transition = 'transform 400ms ease';
  
    // 2) индекс/границы
    const maxIndex = Math.max(0, columns - visibleCols);
    if (index > maxIndex) index = maxIndex;
  
    // 3) скроллим к реальной колонке (верхняя карточка колонки = index*rows)
    const targetIdx = Math.min(index * rows, cards.length - 1);
    const target = cards[targetIdx];
    let tx = target ? target.offsetLeft : 0;
  
    // 4) кламп справа (ничего не обрезаем)
    const maxTx = Math.max(0, p.track.scrollWidth - p.viewport.clientWidth);
    if (tx > maxTx) tx = maxTx;
  
    p.track.style.transform = `translateX(${-tx}px)`;
  
    // 5) стрелки/пули
    p.prevBtn.disabled = index === 0;
    p.nextBtn.disabled = index === maxIndex;
    markFirst(cards);
    renderPagination(maxIndex + 1);
  }
  

  function renderPagination(pages: number) {
    p.pagination.innerHTML = '';
    if (pages <= 0) return;

    let start = 0;
    if (pages > MAX_VISIBLE) {
      if (index <= 1) start = 0;
      else if (index >= pages - 2) start = pages - MAX_VISIBLE;
      else start = index - 2;
    }
    const end = Math.min(start + Math.min(MAX_VISIBLE, pages), pages);

    for (let i = start; i < end; i++) {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = String(i + 1);
      b.className = 'swiper-pagination-bullet' + (i === index ? ' swiper-pagination-bullet-active' : '');
      b.addEventListener('click', () => { index = i; update(); });
      p.pagination.appendChild(b);
    }
  }

// вместо старой markFirst(...)
function markFirst(cards: HTMLElement[]) {
  // снять прошлые пометки
  for (const c of cards) {
    c.classList.remove(firstCls);
    c.removeAttribute('data-first');
  }
  if (!cards.length) return;

  // выбираем визуально ПЕРВУЮ карточку (top-left):
  // минимальный offsetLeft, при равенстве — минимальный offsetTop
  let first = cards[0];
  for (const el of cards) {
    const ax = Math.round(el.offsetLeft);
    const ay = Math.round(el.offsetTop);
    const bx = Math.round(first.offsetLeft);
    const by = Math.round(first.offsetTop);

    if (ax < bx || (ax === bx && ay < by)) {
      first = el;
    }
  }

  setFirst(first);
}

function setFirst(el: HTMLElement) {
  el.classList.add(firstCls);
  el.setAttribute('data-first', '');
}



  function getMode(): Mode {
    const w = window.innerWidth;
    if (w >= BP.desktop) return 'desktop';
    if (w >= BP.tablet) return 'tablet';
    return 'mobile';
  }
  function getVisibleCols(m: Mode) { return m === 'desktop' ? 3 : m === 'tablet' ? 2 : 1; }
  function getRows(m: Mode) { return m === 'desktop' ? 1 : m === 'tablet' ? rowsTablet : rowsMobile; }
}
