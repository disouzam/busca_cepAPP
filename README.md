# Sobre

Esse repositório contém código de um aplicativo escrito em React Native usando Expo para busca simples de CEP

# Criação de nova árvore no git

Para criar um commit órfão (sem commit pai), usou-se essa combinação de comandos abaixo:

```bash
git switch --orphan versao2 # https://git-scm.com/docs/git-switch#Documentation/git-switch.txt---orphannew-branch
rm -rf .expo
rm -rf node_modules
```

# Versão do node

Os comandos e mensagens a serem potencialmente escritos nesse documento referem-se à versão 22.18.0 do node (verificação usando `node -version`)