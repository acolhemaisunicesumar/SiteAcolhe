// Aguarda o HTML carregar completamente antes de rodar os scripts
document.addEventListener('DOMContentLoaded', () => {

    /* =======================================================
       1. LÓGICA DA PÁGINA INICIAL (INDEX)
       ======================================================= */
    const btnSobre = document.querySelector('a[href="#sobre"]');
    if (btnSobre) {
        btnSobre.addEventListener('click', function (e) {
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
                name: "Gislaine Cardoso de Souza Fiaes",
                img: "assets/img/gislaine.jpeg",
                bio: `Doutoranda em Promoção da Saúde. Mestre em Ciências Farmacêuticas pela Universidade Estadual de Maringá (UEM). Possui experiência na área de Neuropsicofarmacologia, com ênfase nos substratos neurais da ansiedade e na fisiopatologia dos transtornos de ansiedade generalizada, depressão e transtorno do pânico (2017). Especialização em Farmacologia Aplicada a Terapêutica pela Universidade Estadual de Maringá (UEM) (2019). Graduação em Farmácia pela UniCesumar (2013). Com experiência docente no ensino superior presencial e a distância, ministrando disciplinas, como: Anatomia Humana, Toxicologia, Parasitologia, Fundamentos de Farmacologia e Farmacologia Aplicada. Atualmente, exerce a função de coordenadora de curso do Núcleo de Educação a Distância da Unicesumar.`
            },
            {
                name: "Rafaela Haddad Costa Ribas",
                img: "assets/img/rafaela.jpeg",
                bio: `Licenciada em Música, é também Mestra e Doutora em Música pelo Instituto de Artes da Universidade Estadual de Campinas - UNICAMP. Bolsista CAPES tanto no mestrado quanto no doutorado, fez parte do Programa Estágio Docente e Docente Integral (PED), lecionando Técnica Vocal para alunos de curso de Graduação em Música nesta mesma Instituição. Ministrou também o curso de Iniciação ao Canto Lírico na Escola de Música da Universidade Estadual de Maringá (EMU-UEM) entre os anos de 2010-2012. Formou-se no curso Técnico em Canto (2008) e teve sua formação os professores Claudiana Melo (UFAL), Isabel Maresca (SP), Adriana Kayama (UNICAMP) e Angelo Fernandes (UNICAMP). Foi membro do Coro Contemporâneo de Campinas de 2014 a 2018, realizando inúmeras apresentações musicais como solista e coralista. Atua como professora e pesquisadora nas áreas de voz, fisiologia vocal, estudo de repertório, história da música e musicologia com ênfase na música brasileira do Séc. XX e história da arte. Professora na Universidade Cesumar, atualmente responde pelo cargo de coordenadora de Curso Ead na mesma instituição.`
            },
            {
                name: "Fabio Luiz Iba",
                img: "assets/img/fabio.jpeg",
                bio: `Doutorando no Programa de Pós-Graduação em Tecnologias Limpas da Universidade Cesumar (2025). Pós-graduação em Administração, Finanças e Geração de Valor (lato sensu) pela PUCRS (2024) e graduando em Ciências Econômicas pela Unicesumar (2025). Mestre em Administração pelo Programa de Pós-Graduação em Administração da Universidade Estadual de Maringá (UEM), na linha de pesquisa Organização e Mercado (2018). Graduado em Administração pela UEM (2005), com MBA em Gestão Empresarial (2011) e MBA em Gerenciamento de Projetos (2014), ambos também pela UEM. Atualmente, atua como coordenador do curso de graduação EaD em Administração na Unicesumar, realizando o planejamento e acompanhamento das atividades pedagógicas, a comunicação entre docentes, discentes e áreas administrativas, a gestão de materiais didáticos, o cumprimento das normas institucionais e legais, a liderança e capacitação da equipe docente, o acompanhamento discente, a elaboração de planos de ação e o planejamento de eventos e ações formativas. Possui ampla experiência na docência em cursos de graduação e pós-graduação lato sensu, tanto na modalidade presencial quanto a distância, e atua também como avaliador Ad Hoc do Programa Centelha`
            },
            {
                name: "Izabela Lo Ruama Alves Nogueira",
                img: "assets/img/izabela.jpeg",
                bio: ``
            },
            {
                name: "Calili Alves Cavalheiro",
                img: "assets/img/calili.jpeg",
                bio: `Doutorando e Mestre em Administração pela Universidade Estadual de Maringá UEM (2019). Especialista em Educação e Formação Empreendedora pela Universidade Estadual do Centro-Oeste Unicentro (2016). Bacharel em Publicidade e Propaganda pela UNIFAMMA (2014). Possui experiência nas áreas de publicidade, produção audiovisual e tecnologia, estratégias de vendas e marketing. Atuou como professor do curso de Computação Gráfica na UNIFAMMA, ministrando disciplinas na área de produção e edição de áudio e vídeo. Atualmente Coordenador dos cursos na modalidade de Educação à Distância em Jornalismo, Publicidade e Propaganda, Relações Públicas, Cinema e Audiovisual e Comunicação Institucional na UniCesumar. Na UniCesumar atuou como professor dos cursos de Marketing e Mídias Digitais. Na Vitru Educação atuou mais de 6 anos como Coordenador de Tecnologia Educacional com experiência em liderança e gestão de equipes, atuando no planejamento estratégico e operações na gestão de Produção Audiovisual no ensino à distância.`
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
                img: "assets/img/Waleria.jpg",
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
                img: "assets/img/Felipe.jpeg",
                isStar: false,
                bio: "<p>Bacharel em Psicologia, Bacharel e Especialista em Teologia. Dedica-se a acompanhar e apoiar os coordenadores e mediadores durante toda a organização do evento.</p>"
            },
            {
                name: "Aline Gonçalves",
                role: "Mediadora",
                img: "assets/img/Aline.jpeg",
                isStar: false,
                bio: "<p>Licenciada em Letras e Pedagogia, Especializada em Educação de Jovens e Adultos e Metodologia do Ensino de Língua Portuguesa, Mestre em Letras.</p>"
            },
            {
                name: "Jamile Boffo",
                role: "Mediadora",
                img: "assets/img/Jamile.png",
                isStar: false,
                bio: "<p>Licenciada em Pedagogia, Tecnóloga em Análise e Desenvolvimento de Sistemas, Especializada em Educação Especial e Libras, Mestre em Gestão do Conhecimento nas Organizações.</p>"
            },
            {
                name: "Marcela Xavier",
                role: "Mediadora",
                img: "assets/img/Marcela.jpeg",
                isStar: false,
                bio: "<p>Licenciada em Pedagogia, Especialista em Psicopedagogia Institucional, Clínica e Hospitalar, Gestão Escolar e Metodologias e Processos em EAD, Neuropsicopedagogia. Cursando MBA em Gestão de Projetos.</p>"
            },
            {
                name: "Naiara Santos",
                role: "Mediadora",
                img: "assets/img/Naiara.jpeg",
                isStar: false,
                bio: "<p>Bacharel em Psicologia, Especialista em Neuroaprendizagem, Gestão de Pessoas, Educação Especial com foco no Transtorno do Espectro Autista e Psicopatologia e Dependência Química.</p>"
            },
            {
                name: "Thamires Ramos",
                role: "Mediadora",
                img: "assets/img/Thamires.jpeg",
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
