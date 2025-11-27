# Sobre

Esse repositório contém código de um aplicativo escrito em React Native usando Expo para busca simples de CEP

# Setup do ambiente
## Instalação do CLI do Expo

```bash
npm install expo-cli --global
```

## No dispositivo mobile, efetuar o download do aplicativo Expo Go.

Para Android: [Expo Go para Android](https://play.google.com/store/search?q=Expo%20go&c=apps&hl=pt_BR)

Para iOS: [Expo Go para iOS](https://apps.apple.com/br/app/expo-go/id982107779)

## Instruções para configuração do Android Studio

[Android Studio Emulator](https://docs.expo.dev/workflow/android-studio-emulator/)

## Problemas de conexão com o Android Studio Emulator no Windows

Caso encontre problemas de conexão com o Android Studio Emulator como o que aparece na imagem abaixo, considere usar o IP do seu computador ao invés do endereço exp://127.0.0.0.1:8081. 

```
exp://${your_ip}:8081
```

Para obter o IP, entre em um terminal e digite o comando [`ipconfig`](https://www.oficinadanet.com.br/windows/25200-como-e-quando-usar-o-ipconfig-no-windows) e copie o IP v4 que aparece lá.

**Figura 1:** Erro ao abrir a aplicação usando o Expo no Android Emulator


![Erro ao abrir a aplicação usando o Expo no Android Emulator](./img/0_Android_Emulator_Error.png)


**Figura 2:** Mensagem de erro apontando o detalhe que originou o erro


![Mensagem de erro apontando o detalhe que originou o erro](./img/1_Android_Emulator_Log_Message.png)

Para maiores detalhes, veja o post a seguir do Stack Overflow:

[Uncaught Error: java.io.IOException: Failed to download remote update](https://stackoverflow.com/questions/79332816/uncaught-error-java-io-ioexception-failed-to-download-remote-update/79366409#79366409)

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

O comando para iniciar a aplicação pode ser também:

```bash
npx expo start -c
```

O parâmetro `-c` (ou `--clear`) limpa o cache do `bundler`.

# Configuração das pastas para uso da arquitetura MVC

```bash
mkdir src
mkdir src/controllers
mkdir src/models
mkdir src/view
echo > src/controllers/.gitignore
echo > src/models/.gitignore
echo > src/view/.gitignore
```

## Caso a configuração seja feita via script

Remoção das pastas criadas anteriormente
```bash
rm -rf src
```

Criação da estrutura de pastas e arquivos em branco

```bash
node create-structure.js
```

## Copiando o conteúdo dos arquivos na branch main

Para copiar o conteúdo dos arquivos na branch main (commit 6a7ae3b3c8202e5db03fb44411eb74b55aa4a02f - Merge pull request #2 from disouzam/setup-parte2) para posterior adaptação à organização dos arquivos de inicialização na pasta app_loader, usou-se o seguinte comando git:

```bash
# https://stackoverflow.com/questions/15536639/git-checkout-files-from-another-branch-into-current-branch-dont-switch-head-t/15536640#15536640
git checkout main -- .
mv App.tsx app_loader/
mv index.ts app_loader/
rm assets/adaptive-icon.png
rm assets/favicon.png
rm assets/splash-icon.png
rm assets/icon.png
mkdir assets/icons
mv assets/images/adaptive-icon.png assets/icons/
mkdir docs/images
mv docs/img/0_SplashScreen_Boilerplate_code.png docs/images
rm -d docs/img
mv img/0_Android_Emulator_Error.png docs/images/
mv img/1_Android_Emulator_Log_Message.png docs/images/
rm -d img
mv docs/images/0_SplashScreen_Boilerplate_code.png docs/images/2_SplashScreen_Boilerplate_code.png
mv assets/icons/adaptive-icon.png assets/icons/adaptive_icon.png

# Instalação dos pacotes ausentes do template
npm install
npm audit fix
```