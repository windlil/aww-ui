import * as components from "./src/index";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    EaButton: typeof components.Button;
    EaIcon: typeof components.Icon;
  }
}
export { };