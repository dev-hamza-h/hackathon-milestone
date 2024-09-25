function generateResume(event) {
    var _a;
    event.preventDefault();
    var userData = {
        personalInfoContent: document.getElementById('personalInfoContent').value,
        objective: document.getElementById('objective').value,
        skills: document.getElementById('skills').value,
        experience: document.getElementById('experience').value,
        education: document.getElementById('education').value,
        profilePic: ((_a = document.getElementById('profilePic').files) === null || _a === void 0 ? void 0 : _a[0]) || null,
    };
    // Objective with diamond symbols and line breaks
    var objectiveContainer = document.getElementById('generatedObjective');
    var objectiveLines = userData.objective.split('\n');
    objectiveContainer.innerHTML = '';
    objectiveLines.forEach(function (line) {
        var lineElement = document.createElement('p');
        lineElement.innerHTML = "\u25C6 ".concat(line.trim());
        objectiveContainer.appendChild(lineElement);
    });
    // Personal Information
    var personalInfoContent = document.getElementById('generatedPersonalInfo');
    personalInfoContent.innerHTML = userData.personalInfoContent.trim().replace(/\n/g, '<br>');
    // Education
    var educationContent = document.getElementById('generatedEducation');
    educationContent.innerHTML = userData.education.trim().replace(/\n/g, '<br>');
    // Skills 
    var skillsArray = userData.skills.split(/[\n,]+/);
    var skillsList = document.getElementById('generatedSkills');
    skillsList.innerHTML = '';
    skillsArray.forEach(function (skill) {
        if (skill.trim()) {
            var li = document.createElement('li');
            li.textContent = skill.trim();
            skillsList.appendChild(li);
        }
    });
    // Work Experience
    var experienceContent = document.getElementById('generatedExperience');
    experienceContent.innerHTML = userData.experience.trim().replace(/\n/g, '<br>'); // Preserve line breaks
    // Profile Picture
    var profilePicElement = document.getElementById('generatedProfilePic');
    if (userData.profilePic) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profilePicElement.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(userData.profilePic);
    }
    var resumeContainer = document.getElementById('resumeContainer');
    resumeContainer.style.display = 'block';
}
var resumeForm = document.getElementById('resumeForm');
resumeForm.addEventListener('submit', generateResume);
