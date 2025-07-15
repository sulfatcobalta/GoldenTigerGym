function showSection(id) {
  const allSections = document.querySelectorAll('.section-page');
  const newSection = document.getElementById(id);
  const current = document.querySelector('.section-page.active-section');
  if (current && current !== newSection) {
    current.classList.remove('active-section');
  }
  if (newSection && !newSection.classList.contains('active-section')) {
    newSection.classList.add('active-section');
  }
  // Делаем углы белыми только на секции ЗАЛ
  document.querySelectorAll('.corner').forEach(corner => {
    if (id === 'hall-section') {
      corner.classList.add('corners-white');
    } else {
      corner.classList.remove('corners-white');
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  showSection('main-section');
  document.querySelectorAll('.corner.top-right a[data-section]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const id = this.getAttribute('data-section');
      if (id) showSection(id);
    });
  });
});
