import React from 'react'
import Section from '../section'
import styled from 'styled-components'
import Paragraph from '../commons/paragraph'
import Tarif from './tarif'

const Form = styled.form`
  text-align: center;
  .mc-field-group {
    input {
      padding: 1.5rem;
      display: inline-block;
      width: 100%;
      border-radius: 1rem;
      border: 1px solid #bce4b9;
      box-shadow: none;
      &::placeholder {
        color: #373f51;
      }
      margin-bottom: 2rem;
    }
  }
  .submit-button {
    background-color: #6cc566;
    border-radius: 1.3rem;
    color: #fff;
    padding: 0.8rem 2.5rem;
    border: none;
    box-shadow: none;
  }
`

export default () => (
  <div>
    <Section>
      <h3>Utilisez Octave en avant première</h3>
      <Paragraph>
        Vous cherchez à améliorer votre alimentation ? A simplifier votre
        quotidien ? Inscrivez-vous pour faire partie des premiers utilisateurs
        d’Octave
      </Paragraph>
      <div className="grid-10 has-gutter">
        <div className="col-3" />
        <div className="col-4">
          <Form
            action="https://octaveapp.us19.list-manage.com/subscribe/post?u=805240da53e89b7d83a9b36e5&amp;id=0ceedd5d8e"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank"
          >
            <div id="mc_embed_signup_scroll">
              <div className="mc-field-group">
                <input
                  type="text"
                  name="FNAME"
                  id="mce-FNAME"
                  placeholder="Votre prénom"
                  required
                />
              </div>
              <div className="mc-field-group">
                <input
                  type="text"
                  name="LNAME"
                  id="mce-LNAME"
                  placeholder="Votre nom"
                  required
                />
              </div>
            </div>
            <div className="mc-field-group">
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                placeholder="Votre adresse email"
                $required
              />
            </div>
            <div
              style={{
                position: 'absolute',
                left: '-5000px',
                ariaHidden: 'true',
              }}
            >
              <input
                type="text"
                name="b_805240da53e89b7d83a9b36e5_0ceedd5d8e"
                tabindex="-1"
                value=""
              />
            </div>
            <input
              type="submit"
              value="Je m'inscris"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="submit-button"
            />
          </Form>
        </div>
        <div className="col-3" />
      </div>
    </Section>
    <Tarif />
  </div>
)
