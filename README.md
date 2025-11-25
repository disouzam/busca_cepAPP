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

# Criação de projeto novo usando Expo

```bash
npx create-expo-app busca_cepAPP -t expo-template-blank-typescript
mv -t . busca_cepAPP/*
mv -t . busca_cepAPP/.*
rm -rf busca_cepAPP
```

Output do comando de criação:
```bash
Creating an Expo project using the expo-template-blank-typescript template.

✔ Downloaded and extracted project files.
> npm install
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported

added 727 packages, and audited 728 packages in 8m

60 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

✅ Your project is ready!

To run your project, navigate to the directory and run one of the following npm commands.

- cd busca_cepAPP
- npm run android
- npm run ios # you need to use macOS to build the iOS project - use the Expo app if you need to do iOS development without a Mac
- npm run web
```

# Configuração das pastas para uso da arquitetura MVC

```bash
mkdir src
mkdir src/controller
mkdir src/model
mkdir src/view
echo > src/controller/.gitignore
echo > src/model/.gitignore
echo > src/view/.gitignore
```