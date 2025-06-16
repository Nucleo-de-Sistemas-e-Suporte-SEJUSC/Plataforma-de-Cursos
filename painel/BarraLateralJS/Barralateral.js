class BarraLateral extends HTMLElement {
  connectedCallback() {
    const path = window.location.pathname;
    
    this.innerHTML = `
      <aside class="sidebar">
        <h2>🧑‍💻 Painel</h2>
        <ul>
          <li><a href="usuario.html">Perfil</a></li>
          <li><a href="cursos.html">Meus Cursos</a></li>
          <li><a href="progresso.html">Progresso</a></li>
          <li><a href="configurações.html">Configurações</a></li>
        </ul>
      </aside>
    `;

    const links = this.querySelectorAll('a');
    links.forEach(link => {
      if (path.includes(link.getAttribute('href'))) {
        link.parentElement.classList.add('active');
      }
    });
  }
}

customElements.define("barra-lateral", BarraLateral);