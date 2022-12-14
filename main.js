const bdark = document.querySelector('#bdark');
const body = document.querySelector('body');
const mood = document.querySelector('#mood');

load();

bdark.addEventListener('click', () => { 
    body.classList.toggle('darkmode');
    store(body.classList.contains('darkmode'));
    bdark.innerHTML = body.classList.contains('darkmode') ? '<i id="mood" class="fa-regular fa-sun"></i>' : '<i id="mood" class="fa-regular fa-moon"></i>';
});

function load(){
  const darkmode = localStorage.getItem('darkmode');
  if(!darkmode){
    store('false');
  } else if (darkmode === 'true'){
    body.classList.add('darkmode');
  }
}

function store(value){
  localStorage.setItem('darkmode', value);
}


document.getElementById("icon_menu").addEventListener("click", show_nav);

function show_nav(){
    document.querySelector(".nav").classList.toggle("show_nav");
};

const $form = document.querySelector('#form');

$form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) { 
  event.preventDefault();
  const form = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      'Accept': 'application/json'
    }
  })
  if (response.ok) {
    this.reset();
    alert('Muchas gracias por escribirme, Mensaje enviado');
  }
}