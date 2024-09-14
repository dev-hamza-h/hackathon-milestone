// Get buttons for toggling each section
const personalInfoBtn = document.getElementById('btn-personal-info') as HTMLButtonElement;
const educationBtn = document.getElementById('btn-education') as HTMLButtonElement;
const skillsBtn = document.getElementById('btn-skills') as HTMLButtonElement;
const experienceBtn = document.getElementById('btn-experience') as HTMLButtonElement;

// Get the content sections
const personalInfoSection = document.getElementById('personal-info') as HTMLElement;
const educationSection = document.getElementById('education') as HTMLElement;
const skillsSection = document.getElementById('skills') as HTMLElement;
const experienceSection = document.getElementById('experience') as HTMLElement;

// Function to toggle the visibility of a section
function toggleSection(section: HTMLElement, button: HTMLButtonElement): void {
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
        button.textContent = 'Hide';
    } else {
        section.classList.add('hidden');
        button.textContent = 'Show';
    }
}

// Add event listeners to buttons to toggle sections
personalInfoBtn.addEventListener('click', () => toggleSection(personalInfoSection, personalInfoBtn));
educationBtn.addEventListener('click', () => toggleSection(educationSection, educationBtn));
skillsBtn.addEventListener('click', () => toggleSection(skillsSection, skillsBtn));
experienceBtn.addEventListener('click', () => toggleSection(experienceSection, experienceBtn));

