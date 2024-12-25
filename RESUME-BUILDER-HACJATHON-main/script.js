var _a;
// Function to get the value of an input or textarea element by its ID
function getValueById(id) {
    var element = document.getElementById(id);
    return element ? element.value : '';
}
// Function to generate the resume content
function generateResume() {
    var name = getValueById('name');
    var email = getValueById('email');
    var phone = getValueById('phone');
    var education = getValueById('education');
    var experience = getValueById('experience');
    var yearsExperience = getValueById('years');
    var skills = getValueById('skills');
    var job = getValueById('job');
    var yearsJob = getValueById('years');
    var country = getValueById('country');
    var city = getValueById('city');
    var selfIntro = getValueById('self intro');
    var hobbies = getValueById('hobbies');
    return "\n        <h3>".concat(name, "</h3>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <h4>Education:</h4>\n        <p>").concat(education, "</p>\n        <h4>Experience:</h4>\n        <p>").concat(experience, "</p>\n        <h4>Years of Experience:</h4>\n        <p>").concat(yearsExperience, "</p>\n        <h4>Skills:</h4>\n        <p>").concat(skills, "</p>\n        <h4>Job:</h4>\n        <p>").concat(job, "</p>\n        <h4>Years in Job:</h4>\n        <p>").concat(yearsJob, "</p>\n        <h4>Country:</h4>\n        <p>").concat(country, "</p>\n        <h4>City:</h4>\n        <p>").concat(city, "</p>\n        <h4>Self Introduction:</h4>\n        <p>").concat(selfIntro, "</p>\n        <h4>Hobbies:</h4>\n        <p>").concat(hobbies, "</p>\n    ");
}
// Event listener for the form submission
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Generate and display the resume
    var resumeContent = generateResume();
    var resumeOutput = document.getElementById('resume-content');
    if (resumeOutput) {
        resumeOutput.innerHTML = resumeContent;
    }
});
