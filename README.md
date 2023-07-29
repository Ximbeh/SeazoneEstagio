# Seazone Code Challenge - Páginas Front End

Este é o meu projeto desenvolvido como parte do desafio para estágio da Seazone, que consiste em criar duas páginas de visualização e busca de imóveis cadastrados no sistema de gerenciamento de imóveis da empresa.

## Tecnologias Utilizadas

- React: Utilizei o framework React para desenvolver as páginas front-end, proporcionando uma experiência de usuário dinâmica e interativa.
- TypeScript: Optei por utilizar TypeScript para adicionar tipagem estática ao JavaScript, o que ajuda a evitar erros comuns e torna o código mais seguro e legível.
- HTML: Utilizei HTML para estruturar as páginas da aplicação.
- CSS: Utilizei CSS para estilizar as páginas, seguindo o design fornecido como guia e garantindo uma interface agradável, no entanto, não responsiva.

## Funcionalidades Implementadas

### Página 1 - Página de busca e listagem de imóveis:

- Cabeçalho geral do sistema com abas, onde a aba "Propriedades" leva o usuário para a página de busca e listagem de imóveis.
- Componente/header com filtros e botões, apesar de não serem funcionais, estão presentes na página.
- Exibição de 6 (seis) cards contendo foto e informações de cada imóvel cadastrado. Os cards são clicáveis e redirecionam o usuário para a página de detalhes do respectivo imóvel.
- Informações exibidas em cada card:
  - Nome do imóvel
  - Descrição do imóvel
  - Máximo de hóspedes
  - Taxa de limpeza
  - Caução
  - Bairro

### Página 2 - Página de detalhes do imóvel:

- Possui o mesmo cabeçalho geral da Página 1.
- Contém o mesmo componente de botões e filtros presentes na Página 1.
- Exibe uma foto e informações mais detalhadas do imóvel selecionado.
- Informações exibidas nesta tela:
  - Nome do imóvel
  - Descrição do imóvel
  - Status do imóvel
  - Máximo de hóspedes
  - Taxa de limpeza
  - Caução
  - Endereço completo
  - Uma lista de comodidades presentes no imóvel (TV, Wi-fi, Estacionamento e Elevador)

## Simulação de Dados

Para a criação de dados simulados, utilizei o método Props no React, permitindo a passagem de informações entre componentes. Os dados foram criados em um arquivo TypeScript, no entanto, em JSON dentro do projeto, incluindo também as fotos dos imóveis.


## Observações Finais

A estilização das páginas foi baseada no design fornecido, porém, fiz ajustes e personalizações para tornar a experiência mais agradável, além também de não ter a fonte, paletas, imagens e tamanho original de cada item, portanto tive que me virar com o que eu tinha. Entendo que o foco do desafio era demonstrar habilidades na construção das páginas e, ainda assim, dediquei atenção à estilização para entregar um produto final com boa aparência visual aplicando Hovers, inputs semi-funcionais e degrades.

Estou muito entusiasmado(a) com a oportunidade de participar desse desafio e agradeço a Seazone pela oportunidade! Qualquer feedback será bem-vindo para que eu possa continuar aprendendo e melhorando minhas habilidades.

**Obrigado pela avaliação!** 🚀