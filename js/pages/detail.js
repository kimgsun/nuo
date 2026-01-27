async function loadProjectDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('project');
  
  if (!projectId) {
    window.location.href = 'product.html';
    return;
  }

  try {
    const response = await fetch('data/projects.json');
    if (!response.ok) throw new Error('프로젝트 데이터를 불러올 수 없습니다');
    
    const allProjects = await response.json();
    const projectData = allProjects[projectId];
    
    if (!projectData) {
      window.location.href = 'product.html';
      return;
    }

    document.title = `${projectData.title} | nuo`;
    
    const titleEl = document.getElementById('project-title');
    const locationEl = document.getElementById('project-location');
    const categoryEl = document.getElementById('project-category');
    const yearEl = document.getElementById('project-year');
    const philosophyEl = document.getElementById('project-philosophy');
    
    if (titleEl) titleEl.textContent = projectData.title;
    if (locationEl) locationEl.textContent = projectData.location;
    if (categoryEl) categoryEl.textContent = projectData.category;
    if (yearEl) yearEl.textContent = projectData.year;
    if (philosophyEl) philosophyEl.textContent = projectData.philosophy;

    const storyTitleEl = document.querySelector('.project-story h2');
    const storyTextEl = document.querySelector('.project-story__text');
    if (storyTitleEl) storyTitleEl.textContent = projectData.narrative.title;
    if (storyTextEl) {
      storyTextEl.innerHTML = projectData.narrative.description
        .map(paragraph => `<p>${paragraph}</p>`)
        .join('');
    }

    const galleryContainer = document.querySelector('.project-gallery .container');
    if (galleryContainer && projectData.images) {
      galleryContainer.innerHTML = projectData.images
        .map(imageUrl => `
          <article>
            <img src="${imageUrl}" alt="${projectData.title}">
          </article>
        `)
        .join('');
    }

    const highlightsList = document.querySelector('.project-highlights__list');
    if (highlightsList && projectData.highlights) {
      highlightsList.innerHTML = projectData.highlights
        .map(highlight => `
          <article>
            <h3>${highlight.title}</h3>
            <p>${highlight.description}</p>
          </article>
        `)
        .join('');
    }

    const nextProjectLink = document.getElementById('next-project-link');
    if (nextProjectLink && projectData.nextProject) {
      nextProjectLink.href = `detail.html?project=${projectData.nextProject}`;
      nextProjectLink.textContent = `Next: ${projectData.nextTitle}`;
    }
  } catch (error) {
    console.error('프로젝트 상세 로드 실패:', error);
    window.location.href = 'product.html';
  }
}

loadProjectDetail();
