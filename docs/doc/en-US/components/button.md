# Button
Commonly used button.

## Button Usage
Use `type`,`round` to define Button basic style.

:::demo
```vue
<template>
  <a-button-group>
    <a-button>Default</a-button>
    <a-button type="primary">Primary</a-button>
    <a-button type="success">Success</a-button>
    <a-button type="warning">Warning</a-button>
    <a-button type="danger">Danger</a-button>
  </a-button-group>
  <a-button-group>
    <a-button round>Default</a-button>
    <a-button type="primary" round>Primary</a-button>
    <a-button type="success" round>Success</a-button>
    <a-button type="warning" round>Warning</a-button>
    <a-button type="danger" round>Danger</a-button>
  </a-button-group>
</template>
```
:::

## Button size
Use `size` to define Button size.

:::demo
```vue
<template>
  <a-button-group>
    <a-button type="primary" size="large">Large</a-button>
    <a-button type="primary" size="normal">Normal</a-button>
    <a-button type="primary" size="small">Small</a-button>
  </a-button-group>
</template>
```
:::

## Button disabled
Use `disabled` to disable Button.

:::demo
```vue
<template>
  <a-button-group>
    <a-button disabled>Default</a-button>
    <a-button type="primary" disabled>Primary</a-button>
    <a-button type="success" disabled>Success</a-button>
    <a-button type="warning" disabled>Warning</a-button>
    <a-button type="danger" disabled>Danger</a-button>
  </a-button-group>
</template>
```
:::