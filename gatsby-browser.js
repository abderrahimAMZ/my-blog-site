import { wrapRootElement as wrap } from "./src/components/wrap-root-element";
import './src/styles/global.css'


// On page load or when changing themes, best to add inline in `head` to avoid FOUC
export const wrapRootElement = wrap;