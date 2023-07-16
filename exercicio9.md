# [M1S05] Ex 9 - Conceito do GitFlow

> Explique com suas palavras, o conceito do GitFlow e como ele é utilizado no controle de versão de um projeto.

# Git Flow

O **Git Flow** é um modelo de fluxo de trabalho que auxilia na organização de um projeto. Ele torna o versionamento de código mais eficiente e organizado, pois, utilizando esse modelo, é possível organizar o projeto em diferentes branches, possibilitando o desenvolvimento de novas versões e correções de bugs sem interferir na branch principal _(main)_.

## Em geral, o Git Flow é utilizado da seguinte forma:

1. Cria-se o projeto, e com ele sua branch principal _(main)_;
2. Depois, a branch de desenvolvimento _(develop)_;
3. A partir da branch de desenvolvimento, cria-se uma (ou mais) branch(es) para adicionar novas funcionalidades _(feature)_;

Os projetos também podem ter branch de _Hotfix_ (corrige problemas do projeto, criadas a partir da branch _main_), _Bugfix_ (corrigem bugs no código, criada a partir da branch _develop_) e _Release_ (últimos ajustes para a versão de produção).
Dessa forma, o trabalho fica organizado, e cada desenvolvedor ou time pode trabalhar em uma branch do projeto sem alterar a versão principal. É possível fazer a manipulação de branches criando, excluindo ou mesclando-as.
