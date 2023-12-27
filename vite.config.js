import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: { 
        main: resolve(__dirname, 'index.html'),
        
      }
      ,
      output: {
        
    

        chunkFileNames: 'assets/js/[name].js',
        entryFileNames: 'assets/js/[name].js',
        
        assetFileNames: ({name}) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
              return 'assets/images/[name][extname]';
          }
          
          if (/\.css$/.test(name ?? '')) {
              return 'assets/css/[name][extname]';   
          }
 
      
          // default value
          // ref: https://rollupjs.org/guide/en/#outputassetfilenames
          return 'assets/[name][extname]';
        },

       

      },

      
   

    }
  }
})
