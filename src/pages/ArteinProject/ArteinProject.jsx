import { useEffect, useState } from "react"
import { Layout } from "../../components/Layout/Layout"
import "./ArteinProject.css"

const PROJECT = () => {
  const [PROJECT, setPROJECT] = useState("../ArteinProject/Vandamor.jpg")
  return (
    <Layout>
      <div className="cont-img-paintings">  
        {PROJECT && <h3>The desire to paint was born looking at the Aegean Sea, that deep blue that bathes the Greek coasts, where the water merges with the sky. An eternal place framed between earth and sky.</h3>}
        {PROJECT && <h3><img src="/public/images//Vandamor.jpg" alt="" /></h3>}
        {PROJECT && <h3>This space is an invitation to enter the blue sea and its reminiscences, sometimes darker, other times lighter. And thus share our legacies to humanity on the most subtle levels.</h3>}
        {PROJECT && <h3><img src="/public/images//Olivo.jpg" alt="" /></h3>}
      </div>
    </Layout>
)
}

export {PROJECT}