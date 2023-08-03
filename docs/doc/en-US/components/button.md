# Button
Button component.

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


## Simple button
Use `simple` to make button style more simplier.

:::demo
```vue
<template>
  <a-button-group>
    <a-button simple>Default</a-button>
    <a-button type="primary" simple>Primary</a-button>
    <a-button type="success" simple>Success</a-button>
    <a-button type="warning" simple>Warning</a-button>
    <a-button type="danger" simple>Danger</a-button>
  </a-button-group>
  <a-button-group>
    <a-button simple round>Default</a-button>
    <a-button type="primary" simple round>Primary</a-button>
    <a-button type="success" simple round>Success</a-button>
    <a-button type="warning" simple round>Warning</a-button>
    <a-button type="danger" simple round>Danger</a-button>
  </a-button-group>
</template>
```
:::

## Text button
Use `text` to make button like normal text.

:::demo
```vue
<template>
  <a-button-group>
    <a-button text>Default</a-button>
    <a-button type="primary" text>Primary</a-button>
    <a-button type="success" text>Success</a-button>
    <a-button type="warning" text>Warning</a-button>
    <a-button type="danger" text>Danger</a-button>
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

## Click ripple
Use `ripple` to determine whether the button has a ripple .
:::demo
```vue
<template>
  <a-button-group>
    <a-button :ripple="false">Default</a-button>
    <a-button type="primary" :ripple="false">Primary</a-button>
    <a-button type="success" :ripple="false">Success</a-button>
  </a-button-group>
  <a-button-group>
    <a-button ripple>Default</a-button>
    <a-button type="primary" ripple>Primary</a-button>
    <a-button type="success" ripple>Success</a-button>
  </a-button-group>
</template>
```
:::

## Button API
### Button Attributes

| Name     | Description         | Type                                            | Default  |
| :------- | ------------------- | :---------------------------------------------- | -------- |
| type     | button type         | `'primary' \| 'success' \|'warning' \|'danger'` | --       |
| size     | button size         | `'large' \| 'normal' \| 'small'`                | 'normal' |
| disabeld | disable the button  | `boolean`                                       | false    |
| ripple   | button click ripple | `boolean`                                       | true     |
| simple   | simple button style | `boolean`                                       | false    |
| text     | text button         | `boolean`                                       | false    |



### Button Events

| Name  | Description  | Type              | Default |
| ----- | ------------ | ----------------- | ------- |
| click | button click | `(e: MouseEvent)` | --      |



### Button slots

| Name    | Description           |
| ------- | --------------------- |
| default | button's default slot |

