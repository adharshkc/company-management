// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import path from 'path'

// // https://vitejs.dev/config/
// export default defineConfig({
//   optimizeDeps: {
//     include: [
//       '@emotion/react', 
//       '@emotion/styled', 
//       '@mui/material/Tooltip'
//     ],
//   },
//   plugins: [
//     react({
//       jsxImportSource: '@emotion/react',
//       babel: {
//         plugins: ['@emotion/babel-plugin'],
//       },
//     }),
//   ],
//   resolve: {
//     alias: {
//       '@components': path.resolve(__dirname, 'src/components'),
//     },
//   },
// });