document.body.addEventListener("pointermove", (e)=>{
  const { currentTarget: el, clientX: x, clientY: y } = e;
  const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
  el.style.setProperty('--posX',  x-l-w/2);
  el.style.setProperty('--posY',  y-t-h/2);
})



  document.addEventListener('click', function(e) {
            createParticles(e.clientX, e.clientY);
        });

        function createParticles(x, y) {
            const particleCount = 15;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Случайное направление и расстояние
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * 50 + 30;
                const tx = Math.cos(angle) * distance;
                const ty = Math.sin(angle) * distance;
                
                // Случайная задержка для более естественного эффекта
                const delay = Math.random() * 0.2;
                
                particle.style.left = x + 'px';
                particle.style.top = y + 'px';
                particle.style.setProperty('--tx', tx + 'px');
                particle.style.setProperty('--ty', ty + 'px');
                particle.style.animationDelay = delay + 's';
                
                document.body.appendChild(particle);
                
                // Удаление частицы после анимации
                setTimeout(() => {
                    particle.remove();
                }, 1000 + delay * 1000);
            }
        }