function toggleMenu(){document.getElementById('menu').classList.toggle('open')}
document.querySelectorAll('#menu a').forEach(a=>a.addEventListener('click',()=>document.getElementById('menu').classList.remove('open')));

const equipmentData = {
  crushing: {
    title: 'Дробильно-сортировочное оборудование',
    description: 'Решения для первичного, вторичного и тонкого дробления, классификации и подготовки материала под дальнейшую переработку.',
    items: 'Дробилки, грохоты, питатели, классификаторы, загрузочные и разгрузочные узлы.',
    services: 'Подбор под сырьё и требуемую производительность · интеграция в существующую схему · модернизация и компоновка участка.',
    tags: ['Дробилки', 'Грохоты', 'Питатели', 'Классификация'],
    short: 'Дробление'
  },
  beneficiation: {
    title: 'Обогатительное оборудование',
    description: 'Подбор и инженерная проработка оборудования для гравитационного, магнитного, флотационного и других процессов обогащения.',
    items: 'Флотационные машины, сепараторы, мельницы, гидроциклоны, классификаторы.',
    services: 'Технологическая схема · подбор оборудования · материальные балансы · привязка к инфраструктуре фабрики.',
    tags: ['Флотация', 'Сепарация', 'Измельчение', 'Классификация'],
    short: 'Обогащение'
  },
  dewatering: {
    title: 'Сгущение, фильтрация и обезвоживание',
    description: 'Решения для уменьшения влажности продукта, подготовки хвостов и возврата технологической воды в процесс.',
    items: 'Сгустители, фильтр-прессы, вакуумные фильтры, насосные узлы, системы реагентов.',
    services: 'Технический подбор · расчёт режимов · компоновка участка обезвоживания · интеграция в водно-шламовую схему.',
    tags: ['Сгустители', 'Фильтр-прессы', 'Вакуумные фильтры'],
    short: 'Обезвоживание'
  },
  transport: {
    title: 'Транспортировка и складирование',
    description: 'Комплексные решения по внутриплощадочной транспортировке, перегрузке и складированию материалов.',
    items: 'Конвейеры, перегрузочные узлы, системы подачи, бункеры, галереи, стэкинг/реклейминг.',
    services: 'Маршрутизация потоков · проектирование трасс · компоновка · подбор узлов и приводов.',
    tags: ['Конвейеры', 'Перегрузка', 'Системы подачи', 'Складирование'],
    short: 'Транспортировка'
  },
  pumps: {
    title: 'Насосное и гидротранспортное оборудование',
    description: 'Подбор оборудования для перекачки пульпы, шламов, оборотной воды и технологических жидкостей.',
    items: 'Шламовые насосы, трубопроводы, арматура, гидроциклонные узлы, насосные станции.',
    services: 'Гидравлические расчёты · подбор насосов и трубопроводов · проработка трасс и режимов эксплуатации.',
    tags: ['Шламовые насосы', 'Трубопроводы', 'Арматура'],
    short: 'Насосы'
  },
  lifting: {
    title: 'Подъёмное оборудование',
    description: 'Инженерное сопровождение подбора и размещения подъёмных механизмов для цехов, мастерских и производственных корпусов.',
    items: 'Краны мостовые, кран-балки, подъёмные механизмы, тали, обслуживающие краны.',
    services: 'Подбор грузоподъёмности · компоновка пролётов · интеграция в здание и технологический процесс.',
    tags: ['Краны мостовые', 'Кран-балки', 'Подъёмные механизмы'],
    short: 'Подъёмное'
  }
};

const projectData = {
  ukraine1: {
    flag: '🇺🇦', country: 'Украина', name: 'KAMET-STEEL / Metinvest / ArcelorMittal / Intech',
    description: 'Проекты по модернизации и техническому перевооружению в горнодобывающей и металлургической отрасли.',
    bullets: [
      'Капитальный ремонт и модернизация металлургического производства',
      'Рабочая документация, КМ и АР, расчёт конструкций',
      'Технологии брикетирования и классификация железорудных окатышей'
    ],
    tags: ['Модернизация', 'Металлургия', 'Железорудные окатыши'], short: 'Украина'
  },
  georgia: {
    flag: '🇬🇪', country: 'Грузия', name: 'Chiatura / Georgian Manganese',
    description: 'Проекты в области марганцевых руд и развития сопутствующей инфраструктуры.',
    bullets: [
      'Pre-Feasibility Study месторождений марганца',
      'План горных работ и подбор оборудования',
      'Технологическая схема и концепция инфраструктуры'
    ],
    tags: ['Марганец', 'PFS', 'Горные работы'], short: 'Грузия'
  },
  uzbekistan: {
    flag: '🇺🇿', country: 'Узбекистан', name: 'АО «Узметкомбинат» / УЗМК',
    description: 'Комплексное проектирование и инженерная проработка металлургических объектов.',
    bullets: [
      'Комплексное проектирование металлургических заводов',
      'Литейное и прокатное производство',
      'Рабочая документация и архитектурно-строительные решения'
    ],
    tags: ['Комплексное проектирование', 'Металлургия', 'Литейный комплекс'], short: 'Узбекистан'
  },
  turkey: {
    flag: '🇹🇷', country: 'Турция', name: 'ISDEMIR',
    description: 'Проекты для металлургического комплекса и объектов коксохимии.',
    bullets: [
      'Комплекс коксовой батареи №4',
      'Проектная и рабочая документация',
      'Технологические решения и компоновка объектов комплекса'
    ],
    tags: ['Коксохимия', 'Документация', 'Компоновка'], short: 'Турция'
  },
  poland: {
    flag: '🇵🇱', country: 'Польша', name: 'Ченстохова Нова',
    description: 'Инженерные решения для коксохимического направления.',
    bullets: [
      'Комплекс коксовой батареи №4',
      'Разработка проектной документации',
      'Технологические решения комплекса'
    ],
    tags: ['Коксохимия', 'Проектирование'], short: 'Польша'
  },
  guatemala: {
    flag: '🇬🇹', country: 'Гватемала', name: 'Fenix / Montufar',
    description: 'Никелевые проекты — от greenfield-инициатив до поставки оборудования и сопровождения.',
    bullets: [
      'Добыча никелевых руд',
      'Два проекта: brownfield и greenfield',
      'Feasibility Study, поставка оборудования и сопровождение горных работ'
    ],
    tags: ['Никелевая руда', 'Greenfield', 'Feasibility Study'], short: 'Гватемала'
  },
  brazil: {
    flag: '🇧🇷', country: 'Бразилия', name: 'USIMINAS',
    description: 'Проекты по развитию коксохимических и металлургических объектов.',
    bullets: [
      'Комплекс коксовой батареи №3 и №4',
      'Проектирование объектов комплекса',
      'Технологические и компоновочные решения'
    ],
    tags: ['Коксохимия', 'Металлургия'], short: 'Бразилия'
  },
  chile: {
    flag: '🇨🇱', country: 'Чили', name: 'El Plomo',
    description: 'Greenfield-проект по полиметаллическим рудам с детальной инженерной проработкой.',
    bullets: [
      'Greenfield-проект полиметаллических руд',
      'Свинцово-цинковое месторождение',
      'FEED-проектирование и внедрение K-Mine / GIS сервисов'
    ],
    tags: ['Полиметаллы', 'FEED', 'GIS'], short: 'Чили'
  },
  guinea: {
    flag: '🇬🇼', country: 'Гвинея-Бисау', name: 'Gutaq (greenfield)',
    description: 'Проект по добыче и обогащению титановых руд.',
    bullets: [
      'Технология добычи и обогащения титановых руд',
      'Инжиниринг',
      'Поставка оборудования'
    ],
    tags: ['Титановые руды', 'Инжиниринг', 'Поставка'], short: 'Гвинея-Бисау'
  },
  egypt: {
    flag: '🇪🇬', country: 'Египет', name: 'Al Nasr Company for Coke and Chemicals',
    description: 'Реконструкция и модернизация объектов коксохимии.',
    bullets: [
      'Реконструкция комплекса коксовой батареи №3',
      'Коксовый цех',
      'Пылеочистная установка GBK'
    ],
    tags: ['Реконструкция', 'Коксохимия'], short: 'Египет'
  },
  india: {
    flag: '🇮🇳', country: 'Индия', name: 'Бхилаи / Наганар / Вишакхапатнам / RINL',
    description: 'Проекты в металлургии и коксохимии для нескольких производственных площадок.',
    bullets: [
      'Бхилаи — комплексы батарей №7, 8, 11',
      'Наганар — комплекс коксовых батарей №1, 2',
      'Вишакхапатнам — коксовая батарея №5 и пылеочистная установка GBK'
    ],
    tags: ['Металлургия', 'Коксохимия', 'Несколько площадок'], short: 'Индия'
  },
  vietnam: {
    flag: '🇻🇳', country: 'Вьетнам', name: 'GDRM',
    description: 'Проект сухой сепарации и обогащения высокопрочных руд.',
    bullets: [
      'Концепция фабрики сухой сепарации',
      'Технология обогащения',
      'Высокопрочные руды'
    ],
    tags: ['Сухая сепарация', 'Обогащение'], short: 'Вьетнам'
  },
  ukraine2: {
    flag: '🇺🇦', country: 'Украина', name: 'ОАО «Белая Церковь»',
    description: 'Проект производственного комплекса на территории Киевской области.',
    bullets: [
      'Белая Церковь, Киевская область',
      'Сталепрокатный завод',
      'Проектирование производственного комплекса и производительность до 1,8 млн т/год'
    ],
    tags: ['Сталепрокатный завод', 'Проектирование'], short: 'Белая Церковь'
  }
};

function renderChips(containerId, items){
  const container = document.getElementById(containerId);
  if(!container) return;
  container.innerHTML = (items || []).map(item => `<span>${item}</span>`).join('');
}

function renderSelector(containerId, data, currentKey, onSelectName){
  const container = document.getElementById(containerId);
  if(!container) return;
  container.innerHTML = Object.entries(data).map(([key, val]) => `<button class="${key===currentKey?'active':''}" data-key="${key}" data-action="${onSelectName}">${val.short || val.country || val.title}</button>`).join('');
}

function setActiveHotspot(selector, key){
  document.querySelectorAll(selector).forEach(btn => btn.classList.toggle('active', btn.dataset.project===key || btn.dataset.equipment===key));
}

function selectEquipment(key){
  const data = equipmentData[key]; if(!data) return;
  document.getElementById('equipment-title').textContent = data.title;
  document.getElementById('equipment-description').textContent = data.description;
  document.getElementById('equipment-items').textContent = data.items;
  document.getElementById('equipment-services').textContent = data.services;
  renderChips('equipment-tags', data.tags);
  renderSelector('equipment-selector', equipmentData, key, 'equipment');
  setActiveHotspot('.equipment-hotspot', key);
}

function selectProject(key){
  const data = projectData[key]; if(!data) return;
  document.getElementById('project-flag').textContent = data.flag;
  document.getElementById('project-country').textContent = data.country;
  document.getElementById('project-name').textContent = data.name;
  document.getElementById('project-description').textContent = data.description;
  document.getElementById('project-bullets').innerHTML = (data.bullets || []).map(item => `<li>${item}</li>`).join('');
  renderChips('project-tags', data.tags);
  renderSelector('project-selector', projectData, key, 'project');
  setActiveHotspot('.project-hotspot', key);
}

document.addEventListener('click', (e)=>{
  const equipmentHotspot = e.target.closest('.equipment-hotspot');
  if(equipmentHotspot) selectEquipment(equipmentHotspot.dataset.equipment);
  const projectHotspot = e.target.closest('.project-hotspot');
  if(projectHotspot) selectProject(projectHotspot.dataset.project);
  const selectorBtn = e.target.closest('.interactive-selector button');
  if(selectorBtn){
    if(selectorBtn.dataset.action==='equipment') selectEquipment(selectorBtn.dataset.key);
    if(selectorBtn.dataset.action==='project') selectProject(selectorBtn.dataset.key);
  }
});

document.addEventListener('DOMContentLoaded', ()=>{
  if(document.getElementById('equipment-title')) selectEquipment('crushing');
  if(document.getElementById('project-country')) selectProject('ukraine1');
});
