
// Adiciona evento para armazenar perfil ativo no localStorage
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.profile').forEach(profile => {
        profile.addEventListener('click', function (e) {
            const img = this.querySelector('img');
            const caption = this.querySelector('figcaption');
            if (img && caption) {
                console.log('Imagem src:', img.getAttribute('src'));
                localStorage.setItem('perfilAtivoNome', caption.textContent);
                localStorage.setItem('perfilAtivoImagem', img.getAttribute('src'));
            }
        });
    });
});
