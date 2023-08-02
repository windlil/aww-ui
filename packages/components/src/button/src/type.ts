export type Type = 'primary' | 'warning' | 'danger' | 'default' | 'success'
export type Round = boolean
export type Disbled = boolean
export type Size = 'large' | 'normal' | 'small'
export type ripple = boolean

export interface Props {
  type?: Type
  round?: Round
  disabled?: Disbled
  size?: Size
  ripple?: boolean
  simple?: boolean
}
