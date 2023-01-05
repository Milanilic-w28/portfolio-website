// nav code

const toggle = document.getElementById('toggle')
const nav= document.getElementById('nav')

toggle.addEventListener('click', () => {
  nav.classList.toggle('active')
})


// form code

const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
  label.innerHTML = label.innerText
      .split('')
      .map((letter, idx) => `<span style="transition-delay:${idx * 100}ms">${letter}</span>`)
      .join('')
})

// Set current year
const yearEl = document.querySelector(".year-hero");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const yearElF = document.querySelector('.year-footer');
const currentYearF = new Date().getFullYear();
yearElF.textContent = currentYearF;

