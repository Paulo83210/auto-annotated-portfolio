---
type: PageLayout
title: Home
colors: colors-a
backgroundImage:
  type: BackgroundImage
  url: /images/TEST.jpg
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 75
sections:
  - elementId: ''
    colors: colors-f
    backgroundSize: full
    title: Découvrir le chantier ATE
    subtitle: Architecture Technologique Experientielle
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-28
          - pb-28
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: col
      title:
        textAlign: left
        fontWeight: 400
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: HeroSection
    actions: []
    text: >
      Vous venez de vivre une expérience unique avec notre croupier virtuel,
      capable de vous recommander des jeux sur mesure, même pour les demandes
      les plus surprenantes. Tout ça, grâce à la magie de vos données !


      Ce n’est qu’un aperçu de ce que permet le chantier ATE. En connectant
      intelligemment plusieurs sources de données, nous pouvons créer des
      expériences révolutionnaires qui réinventent l'avenir du divertissement
      chez Loto-Québec.
    media:
      type: ImageBlock
      altText: altText of the image
      caption: Caption of the image
      elementId: ''
  - type: TextSection
    colors: colors-f
    variant: variant-a
    title: Mais qu’est-ce que le chantier ATE ?
    text: "Loto-Québec prépare son avenir\_avec le projet ATE (Architecture Technologique et Expérientielle). L’objectif ? Moderniser l’infrastructure technologique pour créer des expériences humaines, personnalisées et pertinentes. Avec cette nouvelle architecture modulaire, un CMS headless, fini le blocage à l’innovation : nous devenons plus flexibles, plus réactifs, et mieux équipés pour relever les défis de demain.\n"
    elementId: ''
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-0
          - pb-28
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
  - type: FeaturedItemsSection
    title: ''
    items:
      - type: FeaturedItem
        title: La promesse du composable
        subtitle: ''
        text: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante
          lorem, tincidunt ac leo efficitur, feugiat tempor odio. Maecenas
          pharetra ipsum dolor, et iaculis elit ornare ac.
        actions: []
        elementId: ''
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        title: I'm Smart
        subtitle: ''
        text: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante
          lorem, tincidunt ac leo efficitur, feugiat tempor odio. Maecenas
          pharetra ipsum dolor, et iaculis elit ornare ac.
        actions: []
        elementId: ''
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        title: I'm Focused
        subtitle: ''
        text: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante
          lorem, tincidunt ac leo efficitur, feugiat tempor odio. Maecenas
          pharetra ipsum dolor, et iaculis elit ornare ac.
        actions: []
        elementId: ''
        styles:
          self:
            textAlign: left
    actions: []
    colors: colors-f
    columns: 1
    spacingX: 16
    spacingY: 16
    elementId: ''
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-0
          - pb-36
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-start
  - type: MediaGallerySection
    title: Nos partenaires
    subtitle: ''
    images:
      - type: ImageBlock
        url: /images/netlify-logo-png-transparent 2-2.png
        altText: ''
        caption: ''
        elementId: ''
      - type: ImageBlock
        url: /images/CT.LOGO.png
        altText: ''
        caption: ''
        elementId: ''
      - type: ImageBlock
        url: /images/coveo.logo.png
        altText: ''
        caption: ''
        elementId: ''
    colors: colors-f
    spacing: 131
    columns: 3
    aspectRatio: '1:1'
    showCaption: true
    enableHover: false
    elementId: ''
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-36
          - pb-48
          - pl-6
          - pr-6
        justifyContent: center
        margin:
          - mr-0
      title:
        textAlign: center
      subtitle:
        textAlign: center
  - colors: colors-f
    type: FeaturedProjectsSection
    elementId: ''
    actions:
      - type: Link
        label: Voir tous les partenaires
        url: /projects
    showDate: false
    showDescription: true
    showFeaturedImage: true
    showReadMoreLink: true
    variant: variant-b
    projects:
      - content/pages/projects/project-two.md
      - content/pages/projects/project-three.md
      - content/pages/projects/project-one.md
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-end
    subtitle: Le meilleur du composable
    title: Partenaires
  - type: ContactSection
    colors: colors-f
    backgroundSize: full
    title: "Je veux en savoir plus \U0001F4AC"
    form:
      type: FormBlock
      elementId: sign-up-form
      fields:
        - name: Prénom
          label: Prénom
          hideLabel: true
          placeholder: Prénom
          isRequired: true
          width: 1/2
          type: TextFormControl
        - name: Nom
          label: Nom
          hideLabel: true
          placeholder: Nom
          isRequired: false
          width: 1/2
          type: TextFormControl
        - name: email
          label: Email
          hideLabel: true
          placeholder: Email
          isRequired: true
          width: 1/2
          type: EmailFormControl
        - name: addresse
          label: Addresse
          hideLabel: true
          placeholder: Addresse
          isRequired: true
          width: 1/2
          type: TextFormControl
        - name: updatesConsent
          label: Je suis d'accord pour recevoir des nouvelles
          isRequired: false
          width: full
          type: CheckboxFormControl
      submitLabel: "Gooooo \U0001F680"
      styles:
        submitLabel:
          textAlign: center
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-24
          - pr-4
          - pl-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      text:
        textAlign: left
---
