declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'
declare module '*.gif'

// allow importing image files in TSX: import img from './foo.png'
declare module '*.svg' {
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

interface ImportMetaEnv {
  readonly BASE_URL: string
  // add other env vars here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
