// Aguarda o HTML carregar completamente antes de rodar os scripts
document.addEventListener('DOMContentLoaded', () => {

    /* =======================================================
       1. LÓGICA DA PÁGINA INICIAL (INDEX)
       ======================================================= */
    const btnSobre = document.querySelector('a[href="#sobre"]');
    if (btnSobre) {
        btnSobre.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionSobre = document.querySelector('#sobre');
            if (sectionSobre) {
                sectionSobre.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    /* =======================================================
       2. LÓGICA DA PÁGINA DE CONVIDADAS
       ======================================================= */
    const guestImg = document.getElementById('guestImg');
    // Só executa se encontrar a imagem da convidada na tela
    if (guestImg) {
        // Localize a lista de 'guests' na seção de convidadas do main.js e substitua pelos participantes da 2ª Edição:
const guests = [
    {
        name: "Fábio Iba",
        img: "assets/img/fabio.jpg",
        bio: `Especialista em carreira e mercado de trabalho. No Acolhe+ Posicionamento, aborda o conceito dos 5 pilares do posicionamento profissional: Identidade, Competências, Repertório, Propósito e Comunicação. Defensor da ideia de que posicionamento é aprender a comunicar com clareza quem você está se tornando.`
    },
    {
        name: "Prof. Calili",
        img: "assets/img/calili.jpg",
        bio: `Músico e docente. Responsável pela condução da experiência musical ao vivo do evento, utilizando a música como ferramenta de sensibilização, pausa reflexiva e acolhimento emocional durante as transições de blocos.`
    },
    {
        name: "Elis & Felipe",
        img: "assets/img/mediadores_chat.jpg",
        bio: `Mediadores responsáveis pela condução das dinâmicas interativas e pela escuta ativa do chat ao vivo, conectando as respostas dos estudantes ao estúdio e construindo o Mapa e Passaporte do Futuro Digital em tempo real.`
    }
];

        let currentIndex = 0;
        const textContent = document.getElementById('textContent');
        const guestName = document.getElementById('guestName');
        const guestBio = document.getElementById('guestBio');
        const dotsContainer = document.getElementById('dotsContainer');

        guests.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => switchGuest(index));
            dotsContainer.appendChild(dot);
        });
        
        const dots = document.querySelectorAll('.dot');

        function switchGuest(newIndex) {
            if (newIndex === currentIndex) return;

            guestImg.classList.add('hidden-img');
            textContent.classList.add('hidden-text');

            setTimeout(() => {
                currentIndex = newIndex;
                guestImg.src = guests[currentIndex].img;
                guestName.textContent = guests[currentIndex].name;
                guestBio.innerHTML = guests[currentIndex].bio;

                dots.forEach(d => d.classList.remove('active'));
                dots[currentIndex].classList.add('active');

                guestImg.classList.remove('hidden-img');
                textContent.classList.remove('hidden-text');
            }, 400); 
        }

        guestName.textContent = guests[0].name;
        guestBio.innerHTML = guests[0].bio;

        document.getElementById('nextBtn').addEventListener('click', () => {
            let nextIndex = (currentIndex === guests.length - 1) ? 0 : currentIndex + 1;
            switchGuest(nextIndex);
        });

        document.getElementById('prevBtn').addEventListener('click', () => {
            let prevIndex = (currentIndex === 0) ? guests.length - 1 : currentIndex - 1;
            switchGuest(prevIndex);
        });
    }

    /* =======================================================
       3. LÓGICA DA PÁGINA DE EQUIPE E OBJETIVOS
       ======================================================= */
    const selectorContainer = document.getElementById('selectorContainer');
    // Só executa se encontrar o painel da equipe na tela
    if (selectorContainer) {
        const teamData = [
            {
                name: "Profª Ma. Waleria Leonel",
                role: "Coordenação Geral",
                img: "assets/img/waleria.jpg",
                isStar: true,
                bio: `
                    <ul style="padding-left: 20px; list-style-type: disc;">
                        <li style="margin-bottom: 10px;">Psicóloga graduada pelo Centro Universitário de Maringá e Mestre em Psicologia pela Universidade Estadual de Maringá (UEM).</li>
                        <li style="margin-bottom: 10px;">Possui diversas especializações nas áreas de Psicopedagogia Clínica e Institucional, Neuroaprendizagem, Docência no Ensino Superior e Educação Especial e Inclusiva.</li>
                        <li style="margin-bottom: 10px;">Atua fortemente na área de Psicologia Clínica, na Docência de Ensino de Graduação e Pós-graduação, e possui ampla experiência na área Escolar, com ênfase em Educação Especial.</li>
                        <li style="margin-bottom: 10px;">Atua como Avaliadora do BASIs MEC/INEP.</li>
                        <li><strong>Principais áreas de atuação:</strong> Psicologia da Aprendizagem, Psicologia Escolar, Psicopedagogia, Desenvolvimento Humano e Inclusão.</li>
                    </ul>
                `
            },
            {
                name: "Felipe Laureano",
                role: "Tutor",
                img: "assets/img/felipe.jpeg",
                isStar: false,
                bio: "<p>Bacharel em Psicologia, Bacharel e Especialista em Teologia. Dedica-se a acompanhar e apoiar os coordenadores e mediadores durante toda a organização do evento.</p>"
            },
            {
                name: "Aline Gonçalves",
                role: "Mediadora",
                img: "assets/img/aline.jpeg",
                isStar: false,
                bio: "<p>Licenciada em Letras e Pedagogia, Especializada em Educação de Jovens e Adultos e Metodologia do Ensino de Língua Portuguesa, Mestre em Letras.</p>"
            },
            {
                name: "Jamile Boffo",
                role: "Mediadora",
                img: "assets/img/jamile.png",
                isStar: false,
                bio: "<p>Licenciada em Pedagogia, Tecnóloga em Análise e Desenvolvimento de Sistemas, Especializada em Educação Especial e Libras, Mestre em Gestão do Conhecimento nas Organizações.</p>"
            },
            {
                name: "Marcela Xavier",
                role: "Mediadora",
                img: "assets/img/marcela.jpeg",
                isStar: false,
                bio: "<p>Licenciada em Pedagogia, Especialista em Psicopedagogia Institucional, Clínica e Hospitalar, Gestão Escolar e Metodologias e Processos em EAD, Neuropsicopedagogia. Cursando MBA em Gestão de Projetos.</p>"
            },
            {
                name: "Naiara Santos",
                role: "Mediadora",
                img: "assets/img/naiara.jpeg",
                isStar: false,
                bio: "<p>Bacharel em Psicologia, Especialista em Neuroaprendizagem, Gestão de Pessoas, Educação Especial com foco no Transtorno do Espectro Autista e Psicopatologia e Dependência Química.</p>"
            },
            {
                name: "Thamires Ramos",
                role: "Mediadora",
                img: "assets/img/thamires.jpeg",
                isStar: false,
                bio: "<p>Licenciada em Letras, Pedagogia e Gestão de Recursos Humanos, Especializada em Psicopedagogia Clínica e Institucional, Gestão e Docência no EAD, Educação Especial e Inclusiva e Tecnologias Aplicadas ao EAD.</p>"
            }
        ];

        const viewerContent = document.getElementById('viewerContent');
        const vImg = document.getElementById('vImg');
        const vRole = document.getElementById('vRole');
        const vName = document.getElementById('vName');
        const vBio = document.getElementById('vBio');

        teamData.forEach((member, index) => {
            const item = document.createElement('div');
            item.className = 'selector-item';
            
            if (member.isStar) {
                item.classList.add('highlight-star');
            }
            
            if (index === 0) item.classList.add('active');

            item.innerHTML = `
                <img src="${member.img}" alt="${member.name}" class="selector-avatar">
                <div class="selector-info">
                    <h4>${member.name}</h4>
                    <span>${member.role}</span>
                </div>
            `;

            item.addEventListener('click', () => {
                document.querySelectorAll('.selector-item').forEach(el => el.classList.remove('active'));
                item.classList.add('active');
                updateViewer(index);
            });

            selectorContainer.appendChild(item);
        });

        function updateViewer(index) {
            const member = teamData[index];
            viewerContent.classList.add('hidden');

            setTimeout(() => {
                vImg.src = member.img;
                vName.textContent = member.name;
                vRole.textContent = member.role;
                vBio.innerHTML = member.bio;
                viewerContent.classList.remove('hidden');
            }, 300);
        }

        updateViewer(0);
    }
});
