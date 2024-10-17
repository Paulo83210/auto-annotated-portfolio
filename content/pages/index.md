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
    title: Titre
    subtitle: Sous-titre
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
          - pt-36
          - pb-48
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row-reverse
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
    text: |
      Description
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
        url: /images/bg3.jpg
        altText: ''
        caption: ''
        elementId: ''
      - type: ImageBlock
        url: /images/bg3.jpg
        altText: ''
        caption: ''
        elementId: ''
    colors: colors-f
    spacing: 33
    columns: 3
    aspectRatio: '16:9'
    showCaption: true
    enableHover: true
    elementId: ''
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-36
          - pb-48
          - pl-4
          - pr-4
        justifyContent: center
        margin:
          - mr-0
      title:
        textAlign: center
      subtitle:
        textAlign: center
  - type: FeaturedItemsSection
    title: Comprendre le Composable
    items:
      - type: FeaturedItem
        title: Rapide
        subtitle: ''
        text: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante
          lorem, tincidunt ac leo efficitur, feugiat tempor odio. Maecenas
          pharetra ipsum dolor, et iaculis elit ornare ac.
        featuredImage:
          type: ImageBlock
          url: >-
            https://assets.stackbit.com/components/images/default/default-image.png
          altText: Item image
          caption: Caption of the image
          elementId: ''
        actions:
          - type: Button
            label: ''
            altText: ''
            url: /
            showIcon: true
            icon: arrowRight
            iconPosition: right
            style: primary
            elementId: ''
        elementId: ''
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        title: Intelligent
        subtitle: ''
        text: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante
          lorem, tincidunt ac leo efficitur, feugiat tempor odio. Maecenas
          pharetra ipsum dolor, et iaculis elit ornare ac.
        featuredImage:
          type: ImageBlock
          url: >-
            https://assets.stackbit.com/components/images/default/default-image.png
          altText: Item image
          caption: Caption of the image
          elementId: ''
        actions:
          - type: Button
            label: ''
            altText: ''
            url: /
            showIcon: true
            icon: arrowRight
            iconPosition: right
            style: primary
            elementId: ''
        elementId: ''
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        title: Précis
        subtitle: ''
        text: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante
          lorem, tincidunt ac leo efficitur, feugiat tempor odio. Maecenas
          pharetra ipsum dolor, et iaculis elit ornare ac.
        featuredImage:
          type: ImageBlock
          url: >-
            https://assets.stackbit.com/components/images/default/default-image.png
          altText: Item image
          caption: Caption of the image
          elementId: ''
        actions:
          - type: Button
            label: ''
            altText: ''
            url: /
            showIcon: true
            icon: arrowRight
            iconPosition: right
            style: primary
            elementId: ''
        elementId: ''
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        title: Découplé
        subtitle: ''
        text: >-
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          explicabo.
        featuredImage:
          type: ImageBlock
          url: >-
            https://assets.stackbit.com/components/images/default/default-image.png
          altText: Item image
          caption: Caption of the image
          elementId: ''
        elementId: ''
        styles:
          self:
            textAlign: left
    actions: []
    colors: colors-f
    columns: 2
    spacingX: 16
    spacingY: 16
    elementId: ''
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-36
          - pb-48
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-start
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
  - type: TestimonialsSection
    testimonials:
      - type: Testimonial
        quote: >
          "Our website is the core of our sales strategy. Doris helped us
          establish an easy-to-maintain Stackbit site with outstanding visuals!"
        name: John Doe
        title: CEO at Parks
        image:
          type: ImageBlock
          url: /images/person-2.jpg
          altText: John Doe
          caption: Caption of the image
          elementId: ''
        elementId: ''
        styles:
          name:
            fontWeight: 400
          title:
            fontWeight: 400
      - type: Testimonial
        quote: >
          “Anytime I have a question, I know I can get in touch with Doris. She
          always helps me adjust my site to look as perfect as I’d hoped.”
        name: Johnna Doe
        title: Product Marketing Manager at Acme
        image:
          type: ImageBlock
          url: /images/person-3.jpg
          altText: Johnna Doe
          caption: Caption of the image
          elementId: ''
        elementId: ''
        styles:
          name:
            fontWeight: 400
          title:
            fontWeight: 400
    colors: colors-f
    variant: variant-c
    elementId: ''
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-28
          - pb-28
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
---
