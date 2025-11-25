// create-structure.js
const fs = require("fs");
const path = require("path");

console.log("📁 Gerando estrutura do projeto...");

const structure = [
  "src/controllers",
  "src/models",
  "src/screens",
  "src/styles"
];

const files = {
  "src/controllers/CepController.ts": "",
  "src/models/CepModel.ts": "",
  "src/screens/HomeScreen.tsx": "",
  "src/screens/SplashScreen.tsx": "",
  "src/styles/HomeScreen.styles.ts": "",
  "src/styles/SplashScreen.styles.ts": "",
};

try {
  // Criar pastas
  structure.forEach((dir) => {
    const dirPath = path.join(__dirname, dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log(`📂 Pasta criada: ${dir}`);
    } else {
      console.log(`✔️ Pasta já existe: ${dir}`);
    }
  });

  // Criar arquivos
  Object.entries(files).forEach(([filePath, content]) => {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) {
      fs.writeFileSync(fullPath, content);
      console.log(`📄 Arquivo criado: ${filePath}`);
    } else {
      console.log(`✔️ Arquivo já existe: ${filePath}`);
    }
  });

  console.log("\n🎉 Estrutura gerada com sucesso!");
} catch (err) {
  console.error("❌ Erro ao gerar estrutura:", err);
}
