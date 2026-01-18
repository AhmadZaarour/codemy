const API_ENDPOINTS = {
  courses: "/api/v1/courses",
  sessions: "/api/v1/sessions",
  enrollments: "/api/v1/enrollments",
  contact: "/api/v1/contact",
};

const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thanks for your interest! We'll be in touch with next steps soon.");
  });
}

window.codemyApi = API_ENDPOINTS;
