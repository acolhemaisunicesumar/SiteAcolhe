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
        const guests = [
            {
                name: "Profª. Drª. Cristina Cerezuela",
                img: "assets/img/cristina.jpg",
                bio: `Doutora em Educação pelo Programa de Pós-Graduação em Educação da Universidade Estadual de Maringá (UEM) Linha de Pesquisa: Ensino, Aprendizagem e Formação de Professores. Mestre em Educação pela UEM (2010). Graduada em Educação Física pela UEM (1993) e em Pedagogia pela Faculdade Única (2024), Especialista em Didática e Metodologia do Ensino pela UNOPAR (1998) e Especialista em Educação Especial (2004) e em Psicopedagogia Institucional e Clínica (2010) pelo Instituto Paranaense de Ensino e Faculdades Maringá.<br><br>É professora da Educação Básica do Estado do Paraná na modalidade Educação Especial atuando nos programas de Atendimento Educacional Especializado (AEE) e no Ensino Superior atua em Cursos de Graduação e Pós-graduação em diversas disciplinas específicas da Educação Especial e Inclusiva e da Psicopedagogia Institucional e Clínica. Participante do grupo de pesquisa Desenvolvimento, Aprendizagem e Educação (CNPq).<br><br>Autora dos livros "Segredos para a Inclusão: desvendando práticas transformadoras" (Life Editora, 2024) e "Devolvendo o Desejo de Aprender" (Life Editora, 2024). Palestrante e Assessora Pedagógica para a efetivação da acessibilidade e da inclusão.`
            },
            {
                name: "Profª. Me. Juliana da Silva Araújo Alencar",
                img: "assets/img/juliana.jpg",
                bio: `Possui graduação em psicologia pela Universidade Estadual de Maringá (2005) e mestrado em Psicologia (2012) pela mesma Instituição. Atualmente é professora titular do UniCesumar e psicóloga clínica de orientação psicanalítica.<br><br>Tem experiência na área de Psicologia, com ênfase em Psicologia do Desenvolvimento Humano e Aprendizagem, atuando principalmente nos seguintes temas: subjetividade, educação, psicanálise, aprendizagem, transtornos de aprendizagem e saúde mental.`
            },
            {
                name: "Profª. Drª. Lilian Rosana dos Santos Moraes",
                img: "assets/img/lilian.jpg",
                bio: `Criadora da Graduação em Terapias Integrativas e Complementares no Brasil em 2018, pela Unicesumar, instituição que ofertou pela primeira vez o curso. Doutora em Promoção da Saúde pela Universidade Cesumar UNICESUMAR (2024). Doutora em Ciências da Educação pela UPAP (2006). Mestra em Distúrbios do Desenvolvimento pela Universidade Presbiteriana Mackenzie (2003). Especialista em Morfofisiologia Aplicada à Educação e Reabilitação Osteoarticular e Neurológica pela Universidade Estadual de Maringá - UEM (2002).<br><br>Especialista em Docência no Ensino Superior pelo Centro Universitário de Maringá (2006). Especialista em Estética Facial e Corporal pelo Centro Universitário Cesumar (2016). Graduada em Fisioterapia pela Faculdade Salesiana de Lins (2000), Tecnóloga em Estética e Imagem Pessoal na UNOPAR (2016) e Graduanda em Terapia Ocupacional pela Unicesumar.<br><br>Coordenadora dos Cursos Tecnólogos em Estética e Cosmética, Podologia e Terapias Integrativas e Complementares, sendo os três na modalidade EAD/metodologia híbrida, na Universidade Cesumar - Unicesumar. Coordenadora do Curso Bacharelado em Fisioterapia. Foi coordenadora do curso Tecnólogo em Estética e Cosmética presencial da Unicesumar (2010-2019). Elaboradora de Questões para o Banco Nacional de Itens (BNI) da Educação Superior do Curso de Estética e Cosmética para o ENADE. Coordenadora dos Cursos de Podologia e Massoterapia do PRONATEC (2014-2015).<br><br>Atualmente é professora e coordenadora titular do Centro Universitário Cesumar. Tem experiência na área das Práticas Integrativas e Complementares, Morfofisiologia, Estética, Fisioterapia com ênfase em Neuropediatria e Educação Especial. Autora de livros e artigos científicos.`
            },
            {
                name: "Profª. Me. Maria Cristina Araujo de Brito Cunha",
                img: "assets/img/maria.jpg",
                bio: `Possui graduação em Serviço Social pela Universidade Federal do Amazonas (1986) e mestrado em Gerontologia pela Pontifícia Universidade Católica de São Paulo (2003).<br><br>Atualmente é consultora BRITO CUNHA CONSULTORIA, avaliadora do sinaes do Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira e coordenadora do curso de serviço social do Centro de Ensino Superior de Maringá.<br><br>Tem experiência na área de Serviço Social, com ênfase em Serviço Social, atuando principalmente nos seguintes temas: assistência social, serviço social de empresa; prevenção às deficiências, ead e estágio; controle social e tecnologias.`
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
                bio: "<p>Licenciada em Pedagogia, Especialista em Psicopedagogia Institucional, Clínica e Hospitalar, Gestão Escolar e Metodologias e Processos na EAD, Neuropsicopedagogia.</p>"
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
