"use strict";
let userData = {
    objective: "",
    personalInfoContent: "",
    skills: "",
    experience: "",
    education: "",
    profilePic: null,
};
function generateResume(event) {
    var _a;
    event.preventDefault();
    userData = {
        personalInfoContent: document.getElementById("personalInfoContent").value,
        objective: document.getElementById("objective")
            .value,
        skills: document.getElementById("skills").value,
        experience: document.getElementById("experience")
            .value,
        education: document.getElementById("education")
            .value,
        profilePic: ((_a = document.getElementById("profilePic").files) === null || _a === void 0 ? void 0 : _a[0]) ||
            null,
    };
    const objectiveContainer = document.getElementById("generatedObjective");
    const objectiveLines = userData.objective.split("\n");
    objectiveContainer.innerHTML = "";
    objectiveLines.forEach((line) => {
        const lineElement = document.createElement("p");
        lineElement.innerHTML = `◆ ${line.trim()}`;
        objectiveContainer.appendChild(lineElement);
    });
    // Personal Information
    const personalInfoContent = document.getElementById("generatedPersonalInfo");
    personalInfoContent.innerHTML = userData.personalInfoContent
        .trim()
        .replace(/\n/g, "<br>");
    // Education
    const educationContent = document.getElementById("generatedEducation");
    educationContent.innerHTML = userData.education.trim().replace(/\n/g, "<br>");
    // Skills
    const skillsArray = userData.skills.split(/[\n,]+/);
    const skillsList = document.getElementById("generatedSkills");
    skillsList.innerHTML = "";
    skillsArray.forEach((skill) => {
        if (skill.trim()) {
            const li = document.createElement("li");
            li.textContent = skill.trim();
            skillsList.appendChild(li);
        }
    });
    // Work Experience
    const experienceContent = document.getElementById("generatedExperience");
    experienceContent.innerHTML = userData.experience
        .trim()
        .replace(/\n/g, "<br>");
    // Profile Picture
    const profilePicElement = document.getElementById("generatedProfilePic");
    if (userData.profilePic) {
        const reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profilePicElement.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(userData.profilePic);
    }
    const resumeContainer = document.getElementById("resumeContainer");
    resumeContainer.style.display = "block";
    // Edit button
    const editButton = document.getElementById("editButton");
    editButton.style.display = "inline-block";
}
// Handle the edit button click
function handleEdit() {
    // Populate the form fields with the current resume data
    document.getElementById("personalInfoContent").value = userData.personalInfoContent;
    document.getElementById("objective").value =
        userData.objective;
    document.getElementById("skills").value =
        userData.skills;
    document.getElementById("experience").value =
        userData.experience;
    document.getElementById("education").value =
        userData.education;
    // Re-show the form and hide the resume
    const resumeContainer = document.getElementById("resumeContainer");
    resumeContainer.style.display = "none";
    // Hide the Edit button
    const editButton = document.getElementById("editButton");
    editButton.style.display = "none";
}
const resumeForm = document.getElementById("resumeForm");
resumeForm.addEventListener("submit", generateResume);
const editButton = document.getElementById("editButton");
editButton.addEventListener("click", handleEdit);
