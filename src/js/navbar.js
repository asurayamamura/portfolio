for (let i = 0; i < document.querySelectorAll(".nav-link").length; i++) {
    document.querySelectorAll(".nav-link")[i].onclick = function() {
        scrollAction(i)
    };
}

function scrollAction(navLinkIndex) {
    let aboutMeHeight = document.querySelector("#about-me").clientHeight;
    let technicalSkillsHeight = document.querySelector("#technical-skills").clientHeight;
    let projectsHeight = document.querySelector("#projects").clientHeight;
    let certificationsHeight = document.querySelector("#certifications").clientHeight;
    
    let distanceToTechnicalSkills = aboutMeHeight + 180;
    let distanceToProjects = distanceToTechnicalSkills + technicalSkillsHeight + 90;
    let distanceToCertifications = distanceToProjects + projectsHeight + 90;

    switch(navLinkIndex) {
        case 0:
            window.scrollTo({ top: 0, behavior: 'smooth' });
            break;
        case 1:
            window.scrollTo({ top: distanceToTechnicalSkills, behavior: 'smooth' });
            break;
        case 2:
            window.scrollTo({ top: distanceToProjects, behavior: 'smooth' });
            break;
        case 3:
            window.scrollTo({ top: distanceToCertifications, behavior: 'smooth' });
            break;
    }
}