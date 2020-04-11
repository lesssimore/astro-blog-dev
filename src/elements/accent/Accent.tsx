import React from 'react'

type Props = {} & JSX.IntrinsicElements['div']

const Accent: React.FC<Props> = ({ children, ...restProps }) => {
  return (
    <div data-testid="Accent" className="accent" {...restProps}>
      {children}
      <style jsx>{`
        .accent {
          position: relative;
          display: inline-block;
          padding: var(--gap-size) 0;
        }
        .accent::before,
        .accent::after {
          content: '';
          position: absolute;
          top: 0;
          left: calc(var(--gap-size) * -16);
          right: calc(var(--gap-size) * -16);
          bottom: 0;
          z-index: -1;
        }
        .accent::before {
          background-image: linear-gradient(
            to right,
            transparent 0%,
            var(--color-default-surface) 50%,
            transparent 100%
          );
          transform: skew(0, var(--layout-deg));
        }
        .accent::after {
          background-image: linear-gradient(
            to right,
            transparent 0%,
            var(--color-default-bg) 50%,
            transparent 100%
          );
          opacity: 0.6;
        }
      `}</style>
    </div>
  )
}

export default Accent