async function fetchProjectsData() {
  try {
    const response = await fetch('data/projects.json');
    if (!response.ok) throw new Error('프로젝트 데이터를 불러올 수 없습니다');
    return await response.json();
  } catch (error) {
    console.error('프로젝트 로드 실패:', error);
    return {};
  }
}

function buildProjectItem(projectId, projectData) {
  const categorySlug = projectData.category.toLowerCase();
  return `
    <article class="product__item" data-category="${categorySlug}">
      <a href="detail.html?project=${projectId}">
        <figure>
          <img src="${projectData.image}" alt="${projectData.title}">
        </figure>
        <div class="product__content">
          <h3>${projectData.title}</h3>
          <div class="product__meta">
            <span class="product__meta-line"></span>
            <p>${projectData.category} / ${projectData.year}</p>
          </div>
          <p class="product__summary">${projectData.summary}</p>
          <p class="product__story">${projectData.story}</p>
        </div>
      </a>
    </article>
  `;
}

function renderProjectGrid(projects, gridElement) {
  if (!gridElement) return;
  gridElement.innerHTML = Object.entries(projects)
    .map(([id, data]) => buildProjectItem(id, data))
    .join('');
}

function setupCategoryFilter(gridElement, allProjects) {
  const filterButtons = document.querySelectorAll('.product__filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const selectedCategory = this.dataset.category;
      
      filterButtons.forEach(btn => btn.classList.remove('product__filter-btn--active'));
      this.classList.add('product__filter-btn--active');
      
      gridElement.style.opacity = '0';
      gridElement.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        const filteredProjects = selectedCategory === 'all' 
          ? allProjects 
          : Object.fromEntries(
              Object.entries(allProjects).filter(([_, projectData]) => 
                projectData.category.toLowerCase() === selectedCategory
              )
            );
        
        renderProjectGrid(filteredProjects, gridElement);
        setTimeout(() => {
          gridElement.style.opacity = '1';
          gridElement.style.transform = 'translateY(0)';
        }, 10);
      }, 300);
    });
  });
}

(async function() {
  const projectGrid = document.getElementById('productGrid');
  if (!projectGrid) return;
  
  projectGrid.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  const projectsData = await fetchProjectsData();
  renderProjectGrid(projectsData, projectGrid);
  setupCategoryFilter(projectGrid, projectsData);
  
  if (window.refreshScrollAnimations) {
    setTimeout(() => {
      window.refreshScrollAnimations();
    }, 100);
  }
})();
