// declare module '*.svg' {
//   const content: any;
//   export default content;
// }
// svg.d.ts
declare module "*.svg" {
  import React from "react";
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
}

declare module "*.png" {
  const Content: any;
  export default Content;
}
declare module "*.jpg" {
  const Content: any;
  export default Content;
}
declare module "*.gif" {
  const Content: any;
  export default Content;
}
