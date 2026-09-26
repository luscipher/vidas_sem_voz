const copyButton = document.querySelector('.copy-pix');
const pixKey = document.querySelector('.pix-key span');

copyButton.addEventListener('click', async () => {
    const chavePix = '79.259.685/0001-45';

    try {
        await navigator.clipboard.writeText(chavePix);

        copyButton.innerHTML = `
            <i class="fa-solid fa-check"></i>
            <span>Chave PIX copiada!</span>
        `;

        setTimeout(() => {
            copyButton.innerHTML = `
                <i class="fa-regular fa-copy"></i>
                <span>Copiar chave PIX</span>
            `;
        }, 2000);

    } catch (error) {
        console.error('Erro ao copiar a chave PIX:', error);

        alert('Não foi possível copiar a chave PIX.');
    }
});