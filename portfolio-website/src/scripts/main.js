// This file initializes the website, handles dynamic content loading, and manages user interactions.

import { generateHeader } from '../components/header.js';
import { generateFooter } from '../components/footer.js';
import projectsData from '../data/projects.json';

function init() {
    document.body.insertAdjacentHTML('afterbegin', generateHeader());
    document.body.insertAdjacentHTML('beforeend', generateFooter());
    loadProjects();
}

function loadProjects() {
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        projectsData.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');
            projectElement.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">View Project</a>
            `;
            projectsContainer.appendChild(projectElement);
        });
    }
}

document.addEventListener('DOMContentLoaded', init);