function toggleMenu(){document.getElementById('menu').classList.toggle('open')}
document.querySelectorAll('#menu a').forEach(a=>a.addEventListener('click',()=>document.getElementById('menu').classList.remove('open')));

const equipmentData = {
  crushing: {
    title:'Дробильно-сортировочное оборудование',
    description:'Решения для подготовки минерального сырья: дробление, грохочение, питание и классификация.',
    items:'Дробилки · грохоты · питатели · классификаторы · загрузочные и разгрузочные узлы.',
    services:'Формируем технические требования, подбираем типоразмер и производительность, компонуем участок, интегрируем оборудование в общую технологическую схему.',
    tab:'Дробление и сортировка'
  },
  beneficiation:{
    title:'Обогатительное оборудование',
    description:'Оборудование для основных процессов обогащения и подготовки продукта.',
    items:'Флотационные машины · сепараторы · мельницы · гидроциклоны · классификаторы.',
    services:'Разрабатываем технологическую схему, выполняем материальные балансы и расчёты, подбираем и интегрируем оборудование под свойства сырья и требуемый продукт.',
    tab:'Обогащение'
  },
  dewatering:{
    title:'Сгущение, фильтрация и обезвоживание',
    description:'Решения для сгущения пульпы, обезвоживания концентратов и хвостов, возврата воды в технологический цикл.',
    items:'Сгустители · фильтр-прессы · вакуумные фильтры · реагентные системы · вспомогательные насосные узлы.',
    services:'Подбираем технологию и оборудование, считаем режимы, водно-шламовый баланс и привязываем участок к существующим сетям и инфраструктуре.',
    tab:'Сгущение и фильтрация'
  },
  transport:{
    title:'Транспортировка и складирование',
    description:'Системы перемещения, перегрузки и складирования сырья, промежуточных и готовых продуктов.',
    items:'Конвейеры · перегрузочные узлы · системы подачи · бункеры · галереи · складские системы.',
    services:'Прорабатываем трассы, производительность, компоновку, приводы, перегрузки и сопряжение с технологическим оборудованием.',
    tab:'Транспортировка'
  },
  pumps:{
    title:'Насосное и гидротранспортное оборудование',
    description:'Оборудование для пульпы, шламов, оборотной воды и технологических жидкостей.',
    items:'Шламовые насосы · трубопроводы · арматура · насосные станции · гидроциклонные узлы.',
    services:'Выполняем гидравлические расчёты, подбор насосов и трубопроводов, проработку трасс, режимов и интеграцию в водно-шламовую схему.',
    tab:'Насосы и гидротранспорт'
  },
  lifting:{
    title:'Подъёмное оборудование',
    description:'Подъёмно-транспортные решения для производственных корпусов, ремонтных зон и технологических площадок.',
    items:'Краны мостовые · кран-балки · тали · подъёмные механизмы · обслуживающие краны.',
    services:'Подбираем грузоподъёмность и режим работы, увязываем оборудование с конструкциями здания и требованиями обслуживания технологической линии.',
    tab:'Подъёмное оборудование'
  }
};

function renderEquipment(key){
  const d=equipmentData[key]; if(!d) return;
  document.getElementById('equipment-title').textContent=d.title;
  document.getElementById('equipment-description').textContent=d.description;
  document.getElementById('equipment-items').textContent=d.items;
  document.getElementById('equipment-services').textContent=d.services;
  document.querySelectorAll('.equipment-zone').forEach(x=>x.classList.toggle('active',x.dataset.equipment===key));
  document.querySelectorAll('#equipment-tabs button').forEach(x=>x.classList.toggle('active',x.dataset.equipment===key));
}
function initEquipment(){
  const tabs=document.getElementById('equipment-tabs');
  if(!tabs) return;
  tabs.innerHTML=Object.entries(equipmentData).map(([key,d])=>`<button type="button" data-equipment="${key}">${d.tab}</button>`).join('');
  renderEquipment('crushing');
  document.querySelectorAll('.equipment-zone').forEach(el=>{
    el.addEventListener('mouseenter',()=>renderEquipment(el.dataset.equipment));
    el.addEventListener('focus',()=>renderEquipment(el.dataset.equipment));
    el.addEventListener('click',()=>renderEquipment(el.dataset.equipment));
  });
  tabs.addEventListener('click',e=>{const b=e.target.closest('button[data-equipment]');if(b)renderEquipment(b.dataset.equipment)});
}
document.addEventListener('DOMContentLoaded',initEquipment);
