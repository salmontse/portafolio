let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  // .typeString('Aprendo sobre lenguajes de programación para sitios web e investigo sobre Neurociencias'<span style="color: #27ae60;">)
  .typeString('<strong><span style="color: #E74B58;">Aprendo sobre lenguajes de programación para sitios web e investigo sobre Neurociencias</span></strong>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
