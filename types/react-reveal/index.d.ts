/* eslint-disable react/prefer-stateless-function */
/* eslint-disable max-classes-per-file */
/* eslint-disable import/no-duplicates */

// types/react-reveal/index.d.ts
/// <reference types="node" />

/**
 * @typedef RevealProps
 *
 * https://www.react-reveal.com/docs/props/
 */
interface RevealProps {
  /**
   * This prop is used if the revealed element in the transition group or if an element has when, in or spy props. It `true` then the initial reveal animation will be shown. Defaults to `false`. Optional.
   * @property {boolean}
   */
  appear?: boolean;
  /**
   * Sets the origin of the reveal animation to bottom. Defaults to `false`. Optional.
   * @property {boolean}
   */
  bottom?: boolean;
  /**
   * See <a href="https://www.react-reveal.com/docs/cascade/">cascade docs</a>. Defaults to `false`. Optional.
   * @property {boolean}
   */
  cascade?: boolean;
  /**
   * See <a href="https://www.react-reveal.com/docs/when/">collapse docs</a>. Defaults to `false`. Optional.
   *
   * https://www.react-reveal.com/docs/when/
   * @property {boolean}
   */
  collapse?: boolean;
  /**
   * @property {number}
   */
  count?: number;
  /**
   * Delay before the start of reveal animation in milliseconds. Can be handy if several reveals are happening at approximately same time and you want to space them out a bit. Optional.
   * @property {number}
   */
  delay?: number;
  distance?: string;
  /**
   * Duration of the reveal animation in milliseconds. Defaults to 1000 milliseconds. Optional.
   * @property {number}
   */
  duration?: number;
  /**
   * Enables enter animation when the revealed element is in the transition group. Defaults to `coo`. Optional.
   * @property {boolean}
   */
  enter?: boolean;
  /**
   * @property {boolean}
   */
  exit?: boolean;
  /**
   * @property {boolean}
   */
  force?: boolean;
  /**
   * @property {boolean}
   */
  forever?: boolean;
  /**
   * @property {boolean}
   */
  in?: boolean;
  innerRef?: () => void;
  /**
   * Sets the origin of the reveal animation to left. Defaults to `false`. Optional.
   * @property {boolean}
   */
  left?: boolean;
  /**
   * @property {boolean}
   */
  mirror?: boolean;
  /**
   * @property {boolean}
   */
  mountOnEnter?: boolean;
  onReaveal?: () => void;
  /**
   * @property {boolean}
   */
  opposite?: boolean;
  refProp?: string;
  /**
   * Sets the origin of the reveal animation to right. Defaults to `false`. Optional.
   * @property {boolean}
   */
  right?: boolean;
  spy?: unknown;
  /**
   * Applies fadeout effect during the initial load if server side rendering is used. Defaults to `false`. Optional.
   * @property {boolean}
   */
  ssrFadeout?: boolean;
  /**
   * Forcing reveal animation even on the initial ssr loading. If enabled, this option will suppress both flickering and ssrFadeout effect. The unfortunate drawback of this option is that the revealed content will appear hidden to Googlebot and to anyone with javascript switched off. So it will makes sense for images and/or headings which are duplicated elsewhere on the page. Defaults to false. Optional.
   *
   * @property {boolean}
   */
  ssrReveal?: boolean;
  /**
   * @property {number}
   */
  timeout?: number;
  /**
   * Sets the origin of the reveal animation to top. Defaults to `false`. Optional.
   * @property {boolean}
   */
  top?: boolean;
  /**
   * @property {boolean}
   */
  unmountOnExit?: boolean;
  /**
   * @property {number}
   */
  wait?: number;
  /**
   * If this prop evaluates to a truthy value then the element will be revealed when scrolled into a viewport. If the value is falsy then the element will be hidden upon entering a viewport. Disables the initial reveal animation (use appear prop to reenable it). See detailed docs.This prop is `true` by default. Optional.
   * @property {boolean}
   */
  when?: boolean;
}

declare module 'react-reveal/Bounce' {
  import React from 'react';

  class Animation extends React.Component<RevealProps> {}
  export default Animation;
}

declare module 'react-reveal/Fade' {
  import React, { PropsWithChildren } from 'react';

  class Animation extends React.Component<PropsWithChildren<RevealProps>> {}
  export default Animation;
}

declare module 'react-reveal/Flip' {
  import React from 'react';

  class Animation extends React.Component<RevealProps> {}
  export default Animation;
}

declare module 'react-reveal/LightSpeed' {
  import React from 'react';

  class Animation extends React.Component<RevealProps> {}
  export default Animation;
}

declare module 'react-reveal/Roll' {
  import React from 'react';

  class Animation extends React.Component<RevealProps> {}
  export default Animation;
}

declare module 'react-reveal/Rotate' {
  import React from 'react';

  class Animation extends React.Component<RevealProps> {}
  export default Animation;
}

declare module 'react-reveal/Slide' {
  import React from 'react';

  class Animation extends React.Component<RevealProps> {}
  export default Animation;
}

declare module 'react-reveal/Zoom' {
  import React from 'react';

  class Animation extends React.Component<RevealProps> {}
  export default Animation;
}

declare module 'react-reveal/Jump' {
  import React from 'react';

  class Animation extends React.Component<RevealProps> {}
  export default Animation;
}

declare module 'react-reveal/Flash' {
  import React from 'react';

  class Animation extends React.Component<RevealProps> {}
  export default Animation;
}

declare module 'react-reveal/HeadShake' {
  import React from 'react';

  class Animation extends React.Component<RevealProps> {}
  export default Animation;
}

declare module 'react-reveal/Jello' {
  import React from 'react';

  class Animation extends React.Component<RevealProps> {}
  export default Animation;
}
declare module 'react-reveal/Pulse' {
  import React from 'react';

  class Animation extends React.Component<RevealProps> {}
  export default Animation;
}

declare module 'react-reveal/RubberBand' {
  import React from 'react';

  class Animation extends React.Component<RevealProps> {}
  export default Animation;
}

declare module 'react-reveal/Shake' {
  import React from 'react';

  class Animation extends React.Component<RevealProps> {}
  export default Animation;
}

declare module 'react-reveal/Spin' {
  import React from 'react';

  class Animation extends React.Component<RevealProps> {}
  export default Animation;
}

declare module 'react-reveal/Swing' {
  import React from 'react';

  class Animation extends React.Component<RevealProps> {}
  export default Animation;
}

declare module 'react-reveal/Tada' {
  import React from 'react';

  class Animation extends React.Component<RevealProps> {}
  export default Animation;
}

declare module 'react-reveal/Wobble' {
  import React from 'react';

  class Animation extends React.Component<RevealProps> {}
  export default Animation;
}
