# Crie o projeto React utilizando o Vite (ferramenta para criar e executar projetos web)
npm create vite@latest src --template react 

#Vamos acessar o diretorio do projeto criado
cd src

# Instalando o Tailwind CSS
npm install tailwindcss @tailwindcss/vite

# Configurano o tailwind
# Abra o arquivo vite.config.ts ou vite.config.js
# Adicione o seguinte import: 
# import tailwindcss from '@tailwind/vite'
# Depois, adicione o tailwind aos plugins, exemplo:
# export default defineConfig({
# plugins: [react(),tailwindcss()],
#})

#Depois, adicione o @import "tailwind.css" no seu index.css do projeto
