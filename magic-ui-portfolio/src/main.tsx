import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from "@/Pages/Layout";
import Portfolio from "@/Pages/Portfolio";

createRoot(document.getElementById('root')!).render(
  <Layout>
    <Portfolio />
  </Layout>

)
