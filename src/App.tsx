//importação DOM
import React from 'react'
import ReactDOM from 'react-dom/client'

//importação de rotas
import Pagina1 from './routes/Pagina1.tsx'
import Produto from './routes/Produto.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


//importação de estilização global
import './index.css'

//criação das rotas
const router= createBrowserRouter(
  [
    {
      path: "/",
      element: <Pagina1 />
    },
    {
      path: "calendario",
    },
    {
      path: "clientes",
    },
    {
      path: "orcamentos",
    },
    {
      path: "propiedades",
    },
    {
      path: "controle",
    },

    {
      path: '/produto/:id',
      element: <Produto />,

    }
 ],

)

//aplicação geral com rota
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
