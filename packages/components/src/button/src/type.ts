export type Type = 'primary' | 'warning' | 'danger' | 'default' | 'success'
export type Round = boolean
export type Disbled = boolean
export type Size = 'large' | 'normal' | 'small'

export interface Props {
  type?: Type
  round?: Round
  disabled?: Disbled
  size?: Size
}
