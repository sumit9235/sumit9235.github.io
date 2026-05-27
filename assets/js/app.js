const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

window.addEventListener('load', () => {
  setTimeout(() => $('#loader').classList.add('loader-hide'), 950);
});

$('#year').textContent = new Date().getFullYear();

const menuBtn = $('#menuBtn');
const mobileMenu = $('#mobileMenu');
menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.add('hidden')));

function setupLoaderAnimation() {
  const rocket = $('#loaderRocket');
  if (!rocket || !window.lottie) return;

  const fallback = rocket.nextElementSibling;
  const animation = window.lottie.loadAnimation({
    container: rocket,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './assets/rocket.json'
  });

  animation.addEventListener('data_failed', () => {
    rocket.style.display = 'none';
    fallback?.classList.remove('hidden');
  });
}

function renderStats() {
  $('#heroStats').innerHTML = DATA.stats.map(s => `
    <div class="rounded-3xl border border-white/10 bg-white/[.06] p-5 backdrop-blur-xl">
      <div class="font-display text-4xl text-cyan-200">${s.value}</div>
      <div class="mt-1 text-xs font-black uppercase tracking-wider text-slate-400">${s.label}</div>
    </div>
  `).join('');
}

function renderAbout() {
  $('#aboutCards').innerHTML = DATA.about.map(card => `
    <article class="reveal rounded-[2rem] border border-white/10 bg-white/[.05] p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-300/40 hover:shadow-glow">
      <div class="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-cyan-300/10 text-2xl text-cyan-200"><i class="${card.icon}"></i></div>
      <h3 class="text-xl font-black text-white">${card.title}</h3>
      <p class="mt-3 text-sm leading-7 text-slate-300">${card.text}</p>
    </article>
  `).join('');
}

function renderFilters() {
  const cats = ['All', ...new Set(DATA.skills.map(s => s.category))];
  $('#skillFilters').innerHTML = cats.map((cat, i) => `
    <button data-cat="${cat}" class="skill-filter rounded-full border ${i === 0 ? 'border-cyan-300 bg-cyan-300 text-void' : 'border-white/10 bg-white/5 text-slate-300'} px-5 py-3 text-sm font-black transition hover:border-cyan-300 hover:text-cyan-100">${cat}</button>
  `).join('');
  $$('.skill-filter').forEach(btn => btn.addEventListener('click', () => {
    $$('.skill-filter').forEach(b => b.className = 'skill-filter rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-black text-slate-300 transition hover:border-cyan-300 hover:text-cyan-100');
    btn.className = 'skill-filter rounded-full border border-cyan-300 bg-cyan-300 px-5 py-3 text-sm font-black text-void transition';
    renderSkills(btn.dataset.cat);
  }));
}

function renderSkills(category = 'All') {
  const skills = category === 'All' ? DATA.skills : DATA.skills.filter(s => s.category === category);
  $('#skillsGrid').innerHTML = skills.map(skill => `
    <article class="skill-card reveal group rounded-[1.6rem] border border-white/10 bg-white/[.05] p-5 text-center backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-300/40 hover:shadow-glow">
      <div class="skill-icon mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300/20 to-orange-300/10 text-3xl text-cyan-100 transition"><i class="${skill.icon}"></i></div>
      <h3 class="mt-4 font-black text-white">${skill.name}</h3>
      <p class="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">${skill.category}</p>
    </article>
  `).join('');
  setupReveal();
}

function getProjectMedia(project, index) {
  const images = project.images && project.images.length ? project.images : [project.image];
  if (images.length > 1) {
    const slides = images.map((src, slideIndex) => `
      <img
        src="${src}"
        alt="${project.name} screenshot ${slideIndex + 1}"
        class="project-image absolute inset-0 h-full w-full rounded-[1.6rem] object-cover transition duration-500 ${slideIndex === 0 ? 'opacity-100' : 'opacity-0'}"
        data-slide-index="${slideIndex}"
        onerror="this.src='https://placehold.co/1200x760/06111f/22d3ee?text=${encodeURIComponent(project.name)}'"
      >
    `).join('');
    const dots = images.map((_, slideIndex) => `
      <button
        type="button"
        class="project-dot h-2.5 w-2.5 rounded-full border border-cyan-200/40 transition ${slideIndex === 0 ? 'bg-cyan-200' : 'bg-white/20'}"
        data-slide-target="${slideIndex}"
        aria-label="Show slide ${slideIndex + 1} for ${project.name}"
      ></button>
    `).join('');

    return `
      <div class="project-slider relative" data-slider-id="project-slider-${index}">
        <div class="relative aspect-[16/9] min-h-[240px] overflow-hidden rounded-[1.6rem] md:min-h-[360px]">
          ${slides}
        </div>
        <div class="pointer-events-none absolute inset-x-4 top-1/2 flex -translate-y-1/2 items-center justify-between">
          <button type="button" class="project-prev pointer-events-auto grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur transition hover:border-cyan-300 hover:text-cyan-200" aria-label="Previous ${project.name} image">
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <button type="button" class="project-next pointer-events-auto grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur transition hover:border-cyan-300 hover:text-cyan-200" aria-label="Next ${project.name} image">
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        <div class="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-2 backdrop-blur">
          ${dots}
        </div>
      </div>
    `;
  }

  const singleImage = `
    <img
      src="${images[0]}"
      alt="${project.name}"
      class="project-image aspect-[16/9] min-h-[240px] w-full rounded-[1.6rem] object-cover transition duration-500 md:min-h-[360px]"
      onerror="this.src='https://placehold.co/1200x760/06111f/22d3ee?text=${encodeURIComponent(project.name)}'"
    >
  `;

  if (project.imageLink) {
    return `<a href="${project.imageLink}" target="_blank" rel="noreferrer" class="block">${singleImage}</a>`;
  }

  return singleImage;
}

function getProjectActions(project) {
  const liveAction = project.live && project.live !== '#'
    ? `<a href="${project.live}" target="_blank" rel="noreferrer" class="rounded-2xl bg-cyan-300 px-5 py-3 font-black text-void transition hover:-translate-y-1">Live <i class="fa-solid fa-arrow-up-right-from-square ml-2"></i></a>`
    : `<span class="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-black text-slate-400">Live link pending</span>`;

  const codeAction = project.codeLink && project.codeLink !== '#'
    ? `<a href="${project.codeLink}" target="_blank" rel="noreferrer" class="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-black text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:text-cyan-200">Code <i class="fa-solid fa-code ml-2"></i></a>`
    : `<span class="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-black text-slate-300"><i class="fa-solid fa-lock mr-2"></i>${project.code}</span>`;

  return `${liveAction}${codeAction}`;
}

function renderProjectCards(projects, targetSelector) {
  $(targetSelector).innerHTML = projects.map((p, index) => `
    <article class="project-card reveal overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[.05] backdrop-blur-xl shadow-glow">
      <div class="project-media overflow-hidden bg-gradient-to-br from-cyan-300/10 via-slate-950 to-red-500/10 p-5">
        ${getProjectMedia(p, index)}
      </div>
      <div class="p-8 md:p-10">
        <div class="mb-5 inline-flex rounded-full border border-orange-300/30 bg-orange-300/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-orange-200">${p.status}</div>
        <h3 class="font-display text-5xl leading-none text-white md:text-6xl">${p.name}</h3>
        <p class="mt-5 leading-8 text-slate-300">${p.description}</p>
        <div class="mt-6 flex flex-wrap gap-2">${p.tech.map(t => `<span class="rounded-full bg-cyan-300/10 px-3 py-2 text-xs font-black text-cyan-100">${t}</span>`).join('')}</div>
        <div class="mt-7 grid gap-3 sm:grid-cols-2">
          ${p.highlights.map(h => `<div class="rounded-2xl border border-white/10 bg-black/25 p-4 text-sm font-bold text-slate-200"><i class="fa-solid fa-check text-cyan-300 mr-2"></i>${h}</div>`).join('')}
        </div>
        <div class="mt-8 flex flex-wrap gap-4">
          ${getProjectActions(p)}
        </div>
      </div>
    </article>
  `).join('');
}

function renderProjects() {
  renderProjectCards(DATA.projects, '#projectsGrid');
  renderProjectCards(DATA.commerceProjects, '#commerceProjectsGrid');
  renderProjectCards(DATA.utilityProjects, '#utilityProjectsGrid');
  setupProjectSliders();
  setupReveal();
}

function setupProjectSliders() {
  $$('.project-slider').forEach(slider => {
    const slides = slider.querySelectorAll('[data-slide-index]');
    const dots = slider.querySelectorAll('[data-slide-target]');
    const prev = slider.querySelector('.project-prev');
    const next = slider.querySelector('.project-next');
    let activeIndex = 0;

    const showSlide = index => {
      activeIndex = (index + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => {
        slide.classList.toggle('opacity-100', slideIndex === activeIndex);
        slide.classList.toggle('opacity-0', slideIndex !== activeIndex);
      });
      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle('bg-cyan-200', dotIndex === activeIndex);
        dot.classList.toggle('bg-white/20', dotIndex !== activeIndex);
      });
    };

    prev.addEventListener('click', () => showSlide(activeIndex - 1));
    next.addEventListener('click', () => showSlide(activeIndex + 1));
    dots.forEach(dot => dot.addEventListener('click', () => showSlide(Number(dot.dataset.slideTarget))));

    setInterval(() => showSlide(activeIndex + 1), 3200);
  });
}

function renderContact() {
  const links = [
    { icon: 'fa-brands fa-github', label: 'GitHub', value: DATA.github, href: DATA.github },
    { icon: 'fa-brands fa-linkedin', label: 'LinkedIn', value: 'Sumit Yadav', href: DATA.linkedin },
    { icon: 'fa-solid fa-envelope', label: 'Email', value: DATA.email, href: `mailto:${DATA.email}` },
    { icon: 'fa-solid fa-phone', label: 'Phone', value: DATA.phone, href: 'tel:+917985494155' }
  ];
  $('#contactLinks').innerHTML = links.map(l => `
    <a href="${l.href}" target="_blank" class="group flex items-center gap-4 rounded-2xl border border-white/10 bg-black/25 p-4 transition hover:-translate-y-1 hover:border-cyan-300/50">
      <span class="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200 group-hover:bg-cyan-300 group-hover:text-void"><i class="${l.icon}"></i></span>
      <span><span class="block text-xs font-black uppercase tracking-wider text-slate-500">${l.label}</span><span class="break-all font-bold text-slate-200">${l.value}</span></span>
    </a>
  `).join('');
}

function setupTyping() {
  let phrase = 0, char = 0, del = false;
  const target = $('#typedStack');
  function run() {
    const text = DATA.stackPhrases[phrase];
    target.textContent = text.slice(0, char) + '|';
    if (!del && char < text.length) { char++; setTimeout(run, 70); }
    else if (!del) { del = true; setTimeout(run, 1300); }
    else if (char > 0) { char--; setTimeout(run, 35); }
    else { del = false; phrase = (phrase + 1) % DATA.stackPhrases.length; setTimeout(run, 240); }
  }
  run();
}

function setupReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  $$('.reveal').forEach(el => observer.observe(el));
}

function setupNavActive() {
  const sections = $$('main section[id]');
  const links = $$('.nav-link');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px' });
  sections.forEach(section => observer.observe(section));
}

$('#contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  const subject = encodeURIComponent(`Portfolio contact from ${form.get('name')}`);
  const body = encodeURIComponent(`Name: ${form.get('name')}\nEmail: ${form.get('email')}\n\n${form.get('message')}`);
  window.location.href = `mailto:${DATA.email}?subject=${subject}&body=${body}`;
  e.currentTarget.reset();
});

renderStats();
renderAbout();
renderFilters();
renderSkills();
renderProjects();
renderContact();
setupLoaderAnimation();
setupTyping();
setupReveal();
setupNavActive();
