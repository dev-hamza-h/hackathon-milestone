interface UserData {
  objective: string;
  personalInfoContent: string;
  skills: string;
  experience: string;
  education: string;
  profilePic: File | null;
}

let userData: UserData = {
  objective: "",
  personalInfoContent: "",
  skills: "",
  experience: "",
  education: "",
  profilePic: null,
};

function generateResume(event: Event) {
  event.preventDefault();

  userData = {
    personalInfoContent: (
      document.getElementById("personalInfoContent") as HTMLTextAreaElement
    ).value,
    objective: (document.getElementById("objective") as HTMLTextAreaElement)
      .value,
    skills: (document.getElementById("skills") as HTMLTextAreaElement).value,
    experience: (document.getElementById("experience") as HTMLTextAreaElement)
      .value,
    education: (document.getElementById("education") as HTMLTextAreaElement)
      .value,
    profilePic:
      (document.getElementById("profilePic") as HTMLInputElement).files?.[0] ||
      null,
  };

  const objectiveContainer = document.getElementById(
    "generatedObjective"
  ) as HTMLElement;
  const objectiveLines = userData.objective.split("\n");
  objectiveContainer.innerHTML = "";
  objectiveLines.forEach((line) => {
    const lineElement = document.createElement("p");
    lineElement.innerHTML = `◆ ${line.trim()}`;
    objectiveContainer.appendChild(lineElement);
  });

  // Personal Information
  const personalInfoContent = document.getElementById(
    "generatedPersonalInfo"
  ) as HTMLElement;
  personalInfoContent.innerHTML = userData.personalInfoContent
    .trim()
    .replace(/\n/g, "<br>");

  // Education
  const educationContent = document.getElementById(
    "generatedEducation"
  ) as HTMLElement;
  educationContent.innerHTML = userData.education.trim().replace(/\n/g, "<br>");

  // Skills
  const skillsArray: string[] = userData.skills.split(/[\n,]+/);
  const skillsList: HTMLElement = document.getElementById(
    "generatedSkills"
  ) as HTMLElement;
  skillsList.innerHTML = "";

  skillsArray.forEach((skill: string) => {
    if (skill.trim()) {
      const li: HTMLLIElement = document.createElement("li");
      li.textContent = skill.trim();
      skillsList.appendChild(li);
    }
  });

  // Work Experience
  const experienceContent = document.getElementById(
    "generatedExperience"
  ) as HTMLElement;
  experienceContent.innerHTML = userData.experience
    .trim()
    .replace(/\n/g, "<br>");

  // Profile Picture
  const profilePicElement = document.getElementById(
    "generatedProfilePic"
  ) as HTMLImageElement;
  if (userData.profilePic) {
    const reader = new FileReader();
    reader.onload = function (e) {
      profilePicElement.src = e.target?.result as string;
    };
    reader.readAsDataURL(userData.profilePic);
  }

  const resumeContainer = document.getElementById(
    "resumeContainer"
  ) as HTMLElement;
  resumeContainer.style.display = "block";

  // Edit button
  const editButton = document.getElementById("editButton") as HTMLButtonElement;
  editButton.style.display = "inline-block";
}

// Handle the edit button click
function handleEdit() {
  // Populate the form fields with the current resume data
  (
    document.getElementById("personalInfoContent") as HTMLTextAreaElement
  ).value = userData.personalInfoContent;
  (document.getElementById("objective") as HTMLTextAreaElement).value =
    userData.objective;
  (document.getElementById("skills") as HTMLTextAreaElement).value =
    userData.skills;
  (document.getElementById("experience") as HTMLTextAreaElement).value =
    userData.experience;
  (document.getElementById("education") as HTMLTextAreaElement).value =
    userData.education;

  // Re-show the form and hide the resume
  const resumeContainer = document.getElementById(
    "resumeContainer"
  ) as HTMLElement;
  resumeContainer.style.display = "none";

  // Hide the Edit button
  const editButton = document.getElementById("editButton") as HTMLButtonElement;
  editButton.style.display = "none";
}

const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
resumeForm.addEventListener("submit", generateResume);

const editButton = document.getElementById("editButton") as HTMLButtonElement;
editButton.addEventListener("click", handleEdit);
