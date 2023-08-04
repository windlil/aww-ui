# Button 按钮
基础按钮组件。

## 按钮用法
使用 `type`,`round` 属性来定于按钮的类型。

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


## 简单按钮
使用 `simple` 属性来让按钮的样式变得更简单。

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

## 文字按钮
使用 `text` 属性来让按钮变成类似文字的样式。

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

## 按钮大小
使用 `size` 属性来定义按钮的大小。

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

## 禁用状态
使用 `disabled` 属性使按钮被禁用。

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

## 点击波纹
使用 `ripple` 属性来决定按钮是否有点击波纹。
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

| 属性名     | 描述         | 类型                                            | 默认值  |
| :------- | ------------------- | :---------------------------------------------- | -------- |
| type     | 按钮类型         | `'primary' \| 'success' \|'warning' \|'danger'` | --       |
| size     | 按钮大小         | `'large' \| 'normal' \| 'small'`                | 'normal' |
| disabeld | 禁用按钮  | `boolean`                                       | false    |
| ripple   | 按钮点击特效 | `boolean`                                       | true     |
| simple   | 简单样式按钮 | `boolean`                                       | false    |
| text     | 文字类型按钮         | `boolean`                                       | false    |



### Button Events

| 事件名  | 描述  | 类型              | 默认值 |
| ----- | ------------ | ----------------- | ------- |
| click | 按钮点击事件 | `(e: MouseEvent)` | --      |



### Button slots

| 插槽名    | 描述           |
| ------- | --------------------- |
| default | 默认插槽 |

