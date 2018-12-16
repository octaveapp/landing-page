import React from 'react'
import Section from '../../commons/section'

import { Oli } from '../../commons/octave-item-list'
import Paragraph from '../../commons/paragraph'
import Ul from '../../commons/ul'

export default () => (
  <Section>
    <h3>Pourquoi utiliser Octave</h3>
    <Paragraph>
      Avec Octave, vous gagnez un temps considérable sur l'organisation de vos
      repas qui deviennent plus variés et équilibrés
    </Paragraph>
    <div className="grid-12 has-gutter">
      <Ul className="col-5-small-all">
        <Oli>
          Vous renouvelez constamment vos repas avec de nouvelles idées de
          recettes
        </Oli>
        <Oli>
          Vous gagnez un temps précieux que vous consacrez à ce qui compte
          vraiment
        </Oli>
        <Oli>
          Vous gérez vos courses avec une seule application disponible à tout
          moment
        </Oli>
      </Ul>
      <div className="col-2 small-hide" />
      <Ul className="col-5-small-all">
        <Oli>
          Vous mangez plus sainement grâce à notre sélection de recettes et
          ingrédients
        </Oli>
        <Oli>
          Vous n’achetez que ce dont vous avez besoin et faites des économies
        </Oli>
        <Oli>
          Vous apprenez et vous améliorez sans cesse en cuisine et nutrition
        </Oli>
      </Ul>
    </div>
  </Section>
)
