const sidebarAccordion = document.getElementById("sidebarAccordion");
const mainContent = document.getElementById("mainContent");
const crumbRight = document.getElementById("crumbRight");

function slugify(str){ return str.toLowerCase().replace(/[^a-z0-9]+/g, "-"); }

function findFirstWorkingImage(candidates, cb){
  let i = 0;
  function tryNext(){
    if(i >= candidates.length){ cb(null); return; }
    const src = candidates[i++];
    const img = new Image();
    img.onload = () => cb(src);
    img.onerror = tryNext;
    img.src = src;
  }
  tryNext();
}

function groupContainsActive(group, activeId){
  return group.items.some(entry => entry.subgroup
    ? entry.items.some(i => i.id === activeId)
    : entry.id === activeId);
}

function makeLeafButton(topic, group, activeId, subgroupName){
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "list-group-item list-group-item-action" + (topic.id === activeId ? " active" : "");
  btn.dataset.id = topic.id;
  btn.dataset.search = (topic.title + " " + topic.tagline + " " + group.group + " " + (subgroupName || "")).toLowerCase();
  btn.textContent = topic.title;
  btn.addEventListener("click", () => {
    window.location.hash = topic.id;
    const oc = document.getElementById("sidebarOffcanvas");
    if(oc && window.bootstrap){
      const inst = window.bootstrap.Offcanvas.getInstance(oc);
      if(inst) inst.hide();
    }
  });
  return btn;
}

function buildSidebar(activeId){
  sidebarAccordion.innerHTML = "";
  DOCS.forEach(group => {
    const iconKey = GROUP_ICONS[group.group] || "book";
    const groupSlug = slugify(group.group);
    const containsActive = groupContainsActive(group, activeId);

    const block = document.createElement("div");
    block.className = "pp-group mb-1";
    block.innerHTML = `
      <button type="button" class="pp-group-label d-flex align-items-center gap-2 w-100 border-0 bg-transparent"
        data-bs-toggle="collapse" data-bs-target="#list-${groupSlug}">
        <span class="text-warning">${ICONS[iconKey]}</span>
        <span>${group.group}</span>
      </button>
      <div class="collapse ${containsActive ? "show" : ""}" id="list-${groupSlug}" data-bs-parent="#sidebarAccordion">
        <div class="list-group list-group-flush pp-submenu pt-1"></div>
      </div>
    `;
    sidebarAccordion.appendChild(block);

    const list = block.querySelector(".list-group");
    group.items.forEach(entry => {
      if(entry.subgroup){
        const wrap = document.createElement("div");
        wrap.className = "pp-subgroup mb-1";
        wrap.innerHTML = `<div class="pp-subgroup-label">${entry.subgroup}</div>`;
        const subList = document.createElement("div");
        subList.className = "pp-subgroup-items";
        entry.items.forEach(topic => subList.appendChild(makeLeafButton(topic, group, activeId, entry.subgroup)));
        wrap.appendChild(subList);
        list.appendChild(wrap);
      } else {
        list.appendChild(makeLeafButton(entry, group, activeId));
      }
    });
  });
}

function findItem(id){
  for(const g of DOCS){
    for(const entry of g.items){
      if(entry.subgroup){
        const found = entry.items.find(i => i.id === id);
        if(found) return {item: found, group: g.group};
      } else if(entry.id === id){
        return {item: entry, group: g.group};
      }
    }
  }
  return null;
}

function renderTopic(id){
  const result = findItem(id) || findItem(DOCS[0].items[0].id);
  const { item, group } = result;

  crumbRight.textContent = `${group} · ${item.title}`;
  const iconKey = GROUP_ICONS[group] || "book";
  const typeBadgeClass = item.type === "steps" ? "text-bg-success-subtle text-success-emphasis" : "text-bg-primary-subtle text-primary-emphasis";
  const typeLabel = item.type === "steps" ? "Walkthrough" : "Reference";

  let html = `
    <div class="pp-topic-icon mb-3">${ICONS[iconKey]}</div>
    <div class="pp-eyebrow mb-2">${group} <span class="badge rounded-pill ${typeBadgeClass} ms-1">${typeLabel}</span></div>
    <h1 class="h2 fw-bold mb-1">${item.title}</h1>
    <p class="text-muted fst-italic mb-3">${item.tagline}</p>
    <p class="mb-3" style="max-width:640px;">${item.intro}</p>

    <div class="alert alert-light border d-flex align-items-center gap-2 small mb-4">
      <span class="icon-sm text-warning">${ICONS.pin}</span>
      <code class="pp-nav-code fw-semibold">${item.nav}</code>
    </div>

    ${item.noScreenshot ? "" : `
    <div class="mb-4" id="mediaShot">
      <div class="text-uppercase small fw-bold text-muted mb-2">Screenshot</div>
      <div class="pp-border-dashed rounded p-5 text-center text-muted small">Checking for a screenshot…</div>
    </div>`}

    <div class="text-uppercase small fw-bold text-muted mb-2">Guide</div>
  `;

  if(item.type === "steps"){
    html += `<div class="d-flex flex-column gap-2 mb-4">`;
    item.content.forEach((step, idx) => {
      html += `
        <div class="card border shadow-sm pp-hover-card">
          <div class="card-body d-flex gap-3 align-items-start py-3">
            <div class="pp-step-num">${idx + 1}</div>
            <div>
              <h3 class="h6 mb-1">${step.title}</h3>
              <p class="text-muted small mb-0">${step.desc}</p>
            </div>
          </div>
        </div>`;
    });
    html += `</div>`;
  } else {
    html += `<div class="row row-cols-1 row-cols-md-2 g-3 mb-4">`;
    item.content.forEach(card => {
      html += `
        <div class="col">
          <div class="card h-100 border shadow-sm pp-grid-card pp-hover-card">
            <div class="card-body">
              <h3 class="h6 mb-1"><span class="pp-sq me-1"></span>${card.title}</h3>
              <p class="text-muted small mb-0">${card.desc}</p>
            </div>
          </div>
        </div>`;
    });
    html += `</div>`;
  }

  if(item.common){
    html += `
      <div class="alert alert-warning">
        <div class="text-uppercase small fw-bold mb-1">Common issues</div>
        <ul class="mb-0 small">${item.common.map(c => `<li>${c}</li>`).join("")}</ul>
      </div>`;
  }
  if(item.tip){
    html += `<div class="alert alert-success"><div class="text-uppercase small fw-bold mb-1">Tip</div>${item.tip}</div>`;
  }
  if(item.note){
    html += `<div class="alert alert-warning"><div class="text-uppercase small fw-bold mb-1">Note</div>${item.note}</div>`;
  }

  mainContent.innerHTML = html;
  buildSidebar(item.id);
  if(!item.noScreenshot) loadMediaPanel(item);
  window.scrollTo({top:0, behavior:"instant"});
}

function loadMediaPanel(item){
  const shotBlock = document.getElementById("mediaShot");
  if(!shotBlock) return;

  const imageCandidates = [
    `assets/screenshots/${item.id}.jpg`,
    `assets/screenshots/${item.id}.jpeg`,
    `assets/screenshots/${item.id}.png`
  ];

  findFirstWorkingImage(imageCandidates, (foundSrc) => {
    if(foundSrc){
      shotBlock.innerHTML = `
        <div class="text-uppercase small fw-bold text-muted mb-2">Screenshot</div>
        <div class="pp-screenshot-frame">
          <img src="${foundSrc}" class="img-fluid" alt="${item.title} screen in PrimePOS">
        </div>
        <div class="text-center text-muted small mt-2">The actual ${item.title} screen in PrimePOS.</div>`;
    } else {
      shotBlock.innerHTML = `
        <div class="text-uppercase small fw-bold text-muted mb-2">Screenshot</div>
        <div class="pp-border-dashed rounded p-5 text-center text-muted small">
          ${ICONS.camera}
          <div class="mt-2">No screenshot yet. Drop a file named <code>${item.id}.jpg</code> into <code>assets/screenshots/</code>.</div>
        </div>`;
    }
  });
}

function currentId(){
  const h = window.location.hash.replace("#","");
  return h || DOCS[0].items[0].id;
}
window.addEventListener("hashchange", () => renderTopic(currentId()));
renderTopic(currentId());

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  const q = searchInput.value.trim().toLowerCase();
  document.querySelectorAll(".list-group-item").forEach(btn => {
    const match = q === "" || btn.dataset.search.includes(q);
    btn.classList.toggle("d-none", !match);
  });
  document.querySelectorAll(".pp-subgroup").forEach(subEl => {
    const anyVisible = [...subEl.querySelectorAll(".list-group-item")].some(b => !b.classList.contains("d-none"));
    subEl.classList.toggle("d-none", !anyVisible);
  });
  document.querySelectorAll(".pp-group").forEach(groupEl => {
    const anyVisible = [...groupEl.querySelectorAll(".list-group-item")].some(b => !b.classList.contains("d-none"));
    groupEl.classList.toggle("d-none", !anyVisible);
    const collapseEl = groupEl.querySelector(".collapse");
    if(q !== "" && anyVisible && collapseEl && !collapseEl.classList.contains("show")){
      collapseEl.classList.add("show");
    }
  });
});
