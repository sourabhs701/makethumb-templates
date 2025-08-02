import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from "@/Pages/Layout";
import SaasLanding from "@/Pages/SaasLanding";

createRoot(document.getElementById('root')!).render(
  <Layout>
    <SaasLanding />
  </Layout>

)
