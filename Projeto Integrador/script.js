const subjects = {
    matematica: {
        title: "Matemática",
        topics: {
            "1ano": {
                title: "Matemática - 1º Ano",
                content: [
                    { title: "Equações do 1º Grau", description: "Aqui você encontra o material de estudo sobre Equações do 1º Grau", link: "https://www.ficoumaisfacil.com.br/conteudos/listas/listexfund/problemas1grau.pdf", questions: ["Questão 1: Resolva x + 2 = 5", "Questão 2: O que é uma equação?"] },
                    { title: "Funções", description: "Material sobre Funções...", link: "material/funcoes.pdf", questions: ["Questão 1: Qual a definição de função?"] }
                ]
            }
        }
    },
    biologia: {
        title: "Biologia",
        topics: {
            "1ano": {
                title: "Biologia - 1º Ano",
                content: [
                    { title: "Células", description: "Informações sobre células...", link: "material/celulas.pdf", questions: ["Questão 1: O que é uma célula?"] }
                ]
            }
        }
    },
    // Adicione mais matérias e conteúdos aqui
};

function filterSubjects() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const subjectButtons = document.querySelectorAll('.subject-btn');
    subjectButtons.forEach(button => {
        const subject = button.innerText.toLowerCase();
        button.style.display = subject.includes(query) ? 'inline-block' : 'none';
    });
}

function showSubject(subjectKey) {
    document.getElementById('subject-page').classList.remove('hidden');
    document.getElementById('subject-title').innerText = subjects[subjectKey].title;
    document.getElementById('year-content').classList.add('hidden');
    document.getElementById('material').classList.add('hidden');
}

function showYear(year) {
    const subjectKey = Object.keys(subjects).find(key => subjects[key].title.toLowerCase() === document.getElementById('subject-title').innerText.toLowerCase());
    const selectedSubject = subjects[subjectKey];

    document.getElementById('year-content').classList.remove('hidden');
    document.getElementById('year-title').innerText = selectedSubject.topics[year].title;

    const topicsList = document.getElementById('topics-list');
    topicsList.innerHTML = '';

   
