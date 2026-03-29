document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.profile').forEach(profile => {
        profile.addEventListener('click', function () {
            const img = this.querySelector('img');
            const caption = this.querySelector('figcaption');

            if (img && caption) {
                const nomeImagem = img.getAttribute('src').split('/').pop();

                localStorage.setItem('perfilAtivoNome', caption.textContent);
                localStorage.setItem('perfilAtivoImagem', nomeImagem);
            }
        });
    });
});