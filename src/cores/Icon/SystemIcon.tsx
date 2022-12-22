import { ComponentPropsWithoutRef, memo, PropsWithChildren } from "react";

type IconType =
  | "twitter"
  | "arrowLeft"
  | "arrowRight"
  | "quote"
  | "star"
  | "toc"
  | "github"
  | "zenn";

type Props = Readonly<
  PropsWithChildren<{
    name: IconType;
  }> &
    Omit<ComponentPropsWithoutRef<"svg">, "className" | "role" | "viewBox">
>;

const Component = (props: Props): JSX.Element => {
  const { name, ...rest } = props;

  const svgRestProps = {
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24",
    role: "img",
    ...rest,
  };

  switch (name) {
    case "arrowLeft":
      return (
        <svg {...svgRestProps}>
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      );
    case "arrowRight":
      return (
        <svg {...svgRestProps}>
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
          <path d="M0 0h24v24H0V0z" fill="none" />
        </svg>
      );
    case "quote":
      return (
        <svg {...svgRestProps}>
          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      );
    case "star":
      return (
        <svg {...svgRestProps}>
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      );
    case "toc":
      return (
        <svg {...svgRestProps}>
          <path d="M3 17v-2h14v2Zm0-4v-2h14v2Zm0-4V7h14v2Zm17 8q-.425 0-.712-.288Q19 16.425 19 16t.288-.713Q19.575 15 20 15t.712.287Q21 15.575 21 16t-.288.712Q20.425 17 20 17Zm0-4q-.425 0-.712-.288Q19 12.425 19 12t.288-.713Q19.575 11 20 11t.712.287Q21 11.575 21 12t-.288.712Q20.425 13 20 13Zm0-4q-.425 0-.712-.288Q19 8.425 19 8t.288-.713Q19.575 7 20 7t.712.287Q21 7.575 21 8t-.288.712Q20.425 9 20 9Z" />
        </svg>
      );
    case "twitter":
      return (
        <svg {...svgRestProps}>
          <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
        </svg>
      );
    case "github":
      return (
        <svg {...svgRestProps}>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      );
    case "zenn":
      return (
        <svg {...svgRestProps}>
          <path d="M.264 23.771h4.984c.264 0 .498-.147.645-.352L19.614.874c.176-.293-.029-.645-.381-.645h-4.72c-.235 0-.44.117-.557.323L.03 23.361c-.088.176.029.41.234.41zM17.445 23.419l6.479-10.408c.205-.323-.029-.733-.41-.733h-4.691c-.176 0-.352.088-.44.235l-6.655 10.643c-.176.264.029.616.352.616h4.779c.234-.001.468-.118.586-.353z" />
        </svg>
      );
  }
};

export const SystemIcon = memo(Component);
