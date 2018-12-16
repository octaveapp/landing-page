import React from 'react'

import Layout from '../components/layout'
import Section from '../components/section'
import Paragraph from '../components/commons/paragraph'

const SignUpPage = () => (
  <Layout
    title="Merci de votre inscription | Octave"
    description="Confirmation de l'inscription à Octave"
    keywords="Famille, Manger sain, Equilibre alimentaire, Application"
    hideCallToAction={true}
  >
    <Section>
      <h3>Votre inscription est confirmée ! Merci 🙏</h3>
      <Paragraph>
        Votre inscription à nos listes de diffusion et à la bêta d'Octave est
        confirmée. Nous vous avons envoyé quelques informations complémentaires
        dans votre boîte mail.Merci de votre confiance.L'équipe Octave
      </Paragraph>
    </Section>
  </Layout>
)

export default SignUpPage
