document.addEventListener('DOMContentLoaded',function(){
  const btn=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.nav');
  if(!btn||!nav) return;
  btn.addEventListener('click',()=>{
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });
  
  // Form handler: open user's email client with the request details
  const form = document.getElementById('request-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name') || '';
      const phone = data.get('phone') || '';
      const email = data.get('email') || '';
      const message = data.get('message') || '';
      const date = data.get('date') || '';
      const time = data.get('time') || '';
      // collect services (multiple checkboxes)
      const services = [];
      for(const entry of data.getAll('service')) services.push(entry);

      const subject = encodeURIComponent(`Service request from ${name}`);
      let body = `Name: ${name}%0D%0APhone: ${phone}%0D%0AEmail: ${email}%0D%0A`;
      body += `Services: ${services.join(', ')}%0D%0APreferred date: ${date} ${time}%0D%0A%0D%0A`;
      body += `Details:%0D%0A${encodeURIComponent(message)}`;

      const mailto = `mailto:dailymoversandfumigation@gmail.com?subject=${subject}&body=${body}`;
      // show success text and open mailto
      const success = document.getElementById('form-success');
      if(success) success.hidden = false;
      window.location.href = mailto;
      // optional reset after a short delay
      setTimeout(()=>{ form.reset(); if(success) success.hidden = true; }, 1500);
    });
  }
});

// Small fallback: try opening mailto in a new window when the hero email button is clicked.
document.addEventListener('DOMContentLoaded', function(){
  const heroMail = document.getElementById('hero-email');
  if(!heroMail) return;
  heroMail.addEventListener('click', function(e){
    // allow default but attempt a window.open to increase chance mail client is invoked
    const href = this.getAttribute('href');
    try{
      window.open(href, '_blank');
    }catch(err){
      // ignore; default anchor behavior will still run
    }
  });
});