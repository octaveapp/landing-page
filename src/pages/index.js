import React from 'react'

import Layout from '../components/layout'
import FirstPart from '../components/first-part'
import SecondPart from '../components/second-part'
import ThirdPart from '../components/third-part'

const IndexPage = () => (
  <Layout
    title="Une unique application pour planifier vos repas et faire les courses | Octave"
    description="Octave est une app mobile qui aide ses utilisateurs à organiser leurs repas en créant des listes de recettes personnalisés puis en faisant les courses en drive"
    keywords="Famille, Manger sain, Equilibre alimentaire, Application"
  >
    <FirstPart />
    <SecondPart />
    <ThirdPart />
  </Layout>
)

export default IndexPage
