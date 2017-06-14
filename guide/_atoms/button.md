---
title: Button
component: Button
presets:
  - name: Primary
    props:
      children: Button text
      primary: true
  - name: Primary disabled
    props:
      children: Button text
      disabled: true
  - name: Primary fixed
    props:
      children: Button text
      fixed: true
  - name: Primary mid
    props:
      children: Button text
      size: mid
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
  - name: Secondary mid
    props:
      children: Button text
      size: mid
      primary: false
  - name: Secondary small
    props:
      children: Button
      size: small
      primary: false
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
