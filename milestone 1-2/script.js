// Button to toggle the skills section
var personalInfoBtn = document.getElementById('btn-personal-info');
var educationBtn = document.getElementById('btn-education');
var skillsBtn = document.getElementById('btn-skills');
var experienceBtn = document.getElementById('btn-experience');
// Skills section element
var personalInfoSection = document.getElementById('personal-info');
var educationSection = document.getElementById('education');
var skillsSection = document.getElementById('skills');
var experienceSection = document.getElementById('experience');
// Toogles the visibility of the skills section
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
// Event listener for the button
personalInfoBtn.addEventListener('click', function () { return toggleSection(personalInfoSection, personalInfoBtn); });
educationBtn.addEventListener('click', function () { return toggleSection(educationSection, educationBtn); });
skillsBtn.addEventListener('click', function () { return toggleSection(skillsSection, skillsBtn); });
experienceBtn.addEventListener('click', function () { return toggleSection(experienceSection, experienceBtn); });
