import * as components from "./index";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    AButton: typeof components.AButton;
  }
}
export { };