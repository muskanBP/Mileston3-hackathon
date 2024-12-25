// Function to get the value of an input or textarea element by its ID
function getValueById(id: string): string {
    const element = document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement;
    return element ? element.value : '';
}

// Function to generate the resume content
function generateResume(): string {
    const name = getValueById('name');
    const email = getValueById('email');
    const phone = getValueById('phone');
    const education = getValueById('education');
    const experience = getValueById('experience');
    const yearsExperience = getValueById('years');
    const skills = getValueById('skills');
    const job = getValueById('job');
    const yearsJob = getValueById('years');
    const country = getValueById('country');
    const city = getValueById('city');
    const selfIntro = getValueById('self intro');
    const hobbies = getValueById('hobbies');

    return `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h4>Education:</h4>
        <p>${education}</p>
        <h4>Experience:</h4>
        <p>${experience}</p>
        <h4>Years of Experience:</h4>
        <p>${yearsExperience}</p>
        <h4>Skills:</h4>
        <p>${skills}</p>
        <h4>Job:</h4>
        <p>${job}</p>
        <h4>Years in Job:</h4>
        <p>${yearsJob}</p>
        <h4>Country:</h4>
        <p>${country}</p>
        <h4>City:</h4>
        <p>${city}</p>
        <h4>Self Introduction:</h4>
        <p>${selfIntro}</p>
        <h4>Hobbies:</h4>
        <p>${hobbies}</p>
    `;
}

// Event listener for the form submission
document.getElementById('resume-form')?.addEventListener('submit', function (event) {
    event.preventDefault();

    // Generate and display the resume
    const resumeContent = generateResume();
    const resumeOutput = document.getElementById('resume-content');
    if (resumeOutput) {
        resumeOutput.innerHTML = resumeContent;
    }
});
