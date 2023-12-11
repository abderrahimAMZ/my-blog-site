import { wrapRootElement as wrap } from "./src/components/wrap-root-element";
import './src/styles/global.css'


// On page load or when changing themes, best to add inline in `head` to avoid FOUC
const lightSwitches = document.querySelectorAll('.light-switch');
if (lightSwitches.length > 0) {
    lightSwitches.forEach((lightSwitch, i) => {
        if (localStorage.getItem('dark-mode') === 'true') {
            lightSwitch.checked = true;
        }
        lightSwitch.addEventListener('change', () => {
            const {checked} = lightSwitch;
            lightSwitches.forEach((el, n) => {
                if (n !== i) {
                    el.checked = checked;
                }
            });
            if (lightSwitch.checked) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('dark-mode', true);
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('dark-mode', false);
            }
        });
    });
}
export const wrapRootElement = wrap;