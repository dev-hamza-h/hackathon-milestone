"use strict";
// Get buttons for toggling each section
const personalInfoBtn = document.getElementById('btn-personal-info');
const educationBtn = document.getElementById('btn-education');
const skillsBtn = document.getElementById('btn-skills');
const experienceBtn = document.getElementById('btn-experience');
// Get the content sections
const personalInfoSection = document.getElementById('personal-info');
const educationSection = document.getElementById('education');
const skillsSection = document.getElementById('skills');
const experienceSection = document.getElementById('experience');
// Function to toggle the visibility of a section
function toggleSection(section, button) {
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
        button.textContent = 'Hide';
    }
    else {
        section.classList.add('hidden');
        button.textContent = 'Show';
    }
}
// Add event listeners to buttons to toggle sections
personalInfoBtn.addEventListener('click', () => toggleSection(personalInfoSection, personalInfoBtn));
educationBtn.addEventListener('click', () => toggleSection(educationSection, educationBtn));
skillsBtn.addEventListener('click', () => toggleSection(skillsSection, skillsBtn));
experienceBtn.addEventListener('click', () => toggleSection(experienceSection, experienceBtn));
