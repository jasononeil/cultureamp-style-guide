---
title: Button
component: Button
presets:
  - name: Primary
    props:
      children: Button text
      primary: true
    htmlProps:
      example: <em>Apply&trade;</em>
  - name: Primary disabled
    props:
      children: Button text
      disabled: true
  - name: Destructive
    props:
      children: Button text
      destructive: true
  - name: Secondary
    props:
      children: Button text
      primary: false
  - name: Secondary disabled
    props:
      children: Button text
      primary: false
      disabled: true
  - name: Inverted
    props:
      children: Button text
      darkBackground: true
  - name: Inverted disabled
    props:
      children: Button text
      disabled: true
      darkBackground: true
---

Buttons make common actions immediately visible and easy to perform with one click or tap. They can be used for any type of action, including navigation.
