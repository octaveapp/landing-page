import React from 'react'

import Layout from '../components/layout'
import Main from '../components/signup'

const SignUpPage = () => (
  <Layout
    title="Accédez en exclusivité à l'app qui révolutionne vos repas et courses | Octave"
    description="Inscrivez-vous en avant-première à la phase de bêta d'Octave. Vous essaierez en avant-première toutes les fonctionnalités et participerez à la création de l'app"
    keywords="Famille, Manger sain, Equilibre alimentaire, Application"
    hideCallToAction={true}
  >
    <Main />
  </Layout>
)

export default SignUpPage
