// Função assíncrona para carregar os dados de medalhas
async function loadMedalsData() {
    try {
        // Fazendo a requisição para a API
        const response = await fetch('https://apis.codante.io/olympic-games/countries');
        
        // Verificando se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo JSON: ' + response.statusText);
        }

        // Convertendo a resposta para JSON
        const data = await response.json();

        // Seleciona o corpo da tabela onde os dados serão exibidos
        const tbody = document.getElementById('medals-body');
        if (!tbody) {
            throw new Error('Elemento com ID "medals-body" não encontrado.');
        }
        tbody.innerHTML = ''; // Limpa o conteúdo existente

        // Iterando sobre os resultados e criando as linhas da tabela
        data.data.forEach(result => {  // Assuming data is the correct key from your API response
            const row = document.createElement('tr');
            row.innerHTML = `
            <tr class="text-center">
                <td><img class="img-fluid rounded esqueminha" src="${result.flag_url}" style="width: 40%;"></td>
                <td>${result.rank}º</td>
                <td >${result.name}</td> <!-- Adjust if necessary -->
                <td>${result.gold_medals}</td>
                <td>${result.silver_medals}</td>
                <td>${result.bronze_medals}</td>
                <td>${result.total_medals}</td>
            </tr>
            `;

            if (result.name == 'Brasil') {
                ;
            }

            tbody.appendChild(row);
        });

    } catch (error) {
        // Captura e exibe erros no console
        console.error('Erro ao carregar dados:', error);
    }
}

// Carregar os dados quando a página for carregada
window.onload = loadMedalsData;
