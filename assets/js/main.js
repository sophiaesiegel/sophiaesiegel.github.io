/* ============================================================
   main.js — no build step, no dependencies.
   1. Turns any <img data-slot> that fails to load into a
      labelled placeholder, so the site looks intentional
      before the real graphics are dropped in.
   2. Search + tag filtering on the project grid.
   ============================================================ */

(function () {
  'use strict';

  /* ---------- 1. image slots ------------------------------- */

  function makeSlot(img) {
    var file = (img.getAttribute('src') || '').split('/').pop();
    var slot = document.createElement('div');
    slot.className = 'slot';
    slot.innerHTML =
      '<span class="slot-label">' + (img.dataset.slotLabel || 'Graphic') + '</span>' +
      '<span class="slot-file">' + file + '</span>' +
      '<span class="slot-hint">' +
        (img.dataset.slotHint || 'Drop this file into assets/img/ and it appears here automatically.') +
      '</span>';
    if (img.parentNode) img.parentNode.replaceChild(slot, img);
  }

  Array.prototype.forEach.call(document.querySelectorAll('img[data-slot]'), function (img) {
    // complete && naturalWidth === 0 means it already failed before JS ran
    if (img.complete && img.naturalWidth === 0) makeSlot(img);
    else img.addEventListener('error', function () { makeSlot(img); });
  });

  /* ---------- 2. project filtering ------------------------- */

  var grid = document.querySelector('[data-project-grid]');
  if (!grid) return;

  var cards   = Array.prototype.slice.call(grid.querySelectorAll('.card'));
  var search  = document.querySelector('[data-search]');
  var chips   = Array.prototype.slice.call(document.querySelectorAll('.chip'));
  var count   = document.querySelector('[data-count]');
  var empty   = document.querySelector('[data-empty]');
  var active  = 'all';

  function apply() {
    var q = (search && search.value || '').trim().toLowerCase();
    var shown = 0;

    cards.forEach(function (card) {
      var tags = (card.dataset.tags || '').toLowerCase();
      var text = card.textContent.toLowerCase();
      var okTag = active === 'all' || tags.split(',').indexOf(active) !== -1;
      var okText = !q || text.indexOf(q) !== -1;
      var show = okTag && okText;
      card.classList.toggle('is-hidden', !show);
      if (show) shown++;
    });

    if (count) count.textContent = shown + (shown === 1 ? ' project' : ' projects');
    if (empty) empty.classList.toggle('is-shown', shown === 0);
  }

  if (search) search.addEventListener('input', apply);

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      active = chip.dataset.filter || 'all';
      chips.forEach(function (c) {
        c.setAttribute('aria-pressed', String(c === chip));
      });
      apply();
    });
  });

  apply();
})();
