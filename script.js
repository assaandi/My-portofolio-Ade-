
const projects = [
  { title: "Website Portofolio", description: "Dibuat dengan HTML, CSS, dan JS modern." },
  { title: "Website Marketplace", description: "Web Market yang Berkualitas." },
  { title: "Design", description: "Web sederhana berbasis UI Dinamis." }
];

// Data sosial media
const socials = [
  { name: "Instagram", url: "https://www.instagram.com/jijily._/" },
  { name: "Github", url: " https://github.com/assaandi/web-dss"},
  { name: "Whatsupp", url: "https://wa.me/6289690727306"},
];


const projectList = document.getElementById("project-list");

projects.forEach(project => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${project.title}</strong><br><small>${project.description}</small>`;
  projectList.appendChild(li);
});


const socialLinks = document.getElementById("social-links");

socials.forEach(social => {
  const a = document.createElement("a");
  a.href = social.url;
  a.textContent = social.name;
  a.target = "_blank";
  a.classList.add("social-btn");
  socialLinks.appendChild(a);
});

// Form kontak
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  
  alert(`Terima kasih, ${name}! Pesan kamu: "${message}" sudah dikirim.`);
  this.reset();
});
