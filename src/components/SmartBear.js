import React from 'react';


const SmartBear = ({props, children}) => {
    return (
        <div className={`flex ${props != null ? props : "flex-row"}  mt-10 mb-10  `}>
            <div className=" h-3/12 w-4/12" title="student bear says:">
                <svg className={"dark:fill-white max-h-20"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <path
                        d="M75.876 21.458a8.264 8.264 0 0 0 3.849-6.992c0-4.565-3.714-8.279-8.279-8.279a8.265 8.265 0 0 0-7.56 4.908A31.326 31.326 0 0 0 50 7.836c-4.81 0-9.573 1.122-13.886 3.258a8.265 8.265 0 0 0-7.56-4.907c-4.565 0-8.279 3.714-8.279 8.279 0 2.884 1.488 5.5 3.849 6.992a31.028 31.028 0 0 0-5.596 17.849v54.506h62.943V39.307a31.02 31.02 0 0 0-5.595-17.849zm2.596 69.355H21.528V39.307c0-6.382 2.095-12.43 6.058-17.49l1.311-1.673-2.016-.674a5.272 5.272 0 0 1-3.606-5.004 5.285 5.285 0 0 1 5.279-5.279 5.268 5.268 0 0 1 5.191 4.345l.374 2.094 1.847-1.055A28.34 28.34 0 0 1 50 10.837c4.905 0 9.758 1.292 14.034 3.734l1.847 1.055.374-2.094a5.267 5.267 0 0 1 5.191-4.345 5.285 5.285 0 0 1 5.279 5.279 5.273 5.273 0 0 1-3.606 5.004l-2.016.674 1.311 1.673c3.963 5.061 6.058 11.108 6.058 17.49v51.506z"></path>
                    <circle cx="36.662" cy="29.769" r="2.76"></circle>
                    <circle cx="63.338" cy="29.769" r="2.76"></circle>
                    <path
                        d="M54.306 42.471A3.31 3.31 0 0 1 51 39.165v-4.439h1.974a4.756 4.756 0 0 0 4.742-4.742v-.246a4.756 4.756 0 0 0-4.742-4.742h-5.947a4.756 4.756 0 0 0-4.742 4.742v.246a4.756 4.756 0 0 0 4.742 4.742H49v4.439a3.31 3.31 0 0 1-3.306 3.306 3.31 3.31 0 0 1-3.306-3.306h-2a5.312 5.312 0 0 0 5.306 5.306A5.294 5.294 0 0 0 50 42.242a5.291 5.291 0 0 0 4.306 2.229 5.312 5.312 0 0 0 5.306-5.306h-2a3.31 3.31 0 0 1-3.306 3.306zM28.944 55.566a.703.703 0 0 0-.703.703v5.369a.703.703 0 0 0 1.407 0V56.27a.704.704 0 0 0-.704-.704zM42.981 55.566a.703.703 0 0 0-.703.703v5.369a.703.703 0 0 0 1.406 0V56.27a.704.704 0 0 0-.703-.704zM57.019 55.566a.704.704 0 0 0-.704.703v5.369a.704.704 0 0 0 1.407 0V56.27a.705.705 0 0 0-.703-.704zM71.056 55.566a.704.704 0 0 0-.704.703v5.369a.704.704 0 0 0 1.407 0V56.27a.705.705 0 0 0-.703-.704zM35.963 68.79a.704.704 0 0 0-.703.704v5.368a.704.704 0 0 0 1.407 0v-5.368a.704.704 0 0 0-.704-.704zM50 68.79a.704.704 0 0 0-.703.704v5.368a.704.704 0 0 0 1.406 0v-5.368A.704.704 0 0 0 50 68.79zM64.037 68.79a.704.704 0 0 0-.704.704v5.368a.704.704 0 0 0 1.407 0v-5.368a.704.704 0 0 0-.703-.704zM28.944 79.298a.704.704 0 0 0-.703.704v5.368a.703.703 0 0 0 1.407 0v-5.368a.704.704 0 0 0-.704-.704zM42.981 79.298a.704.704 0 0 0-.703.704v5.368a.703.703 0 0 0 1.406 0v-5.368a.704.704 0 0 0-.703-.704zM57.019 79.298a.704.704 0 0 0-.704.704v5.368a.704.704 0 0 0 1.407 0v-5.368a.705.705 0 0 0-.703-.704zM71.056 79.298a.704.704 0 0 0-.704.704v5.368a.704.704 0 0 0 1.407 0v-5.368a.705.705 0 0 0-.703-.704z"></path>
                </svg>
            </div>
            <div
                className="ml-4 p-4 dark:bg-smartbear-bg border-2 rounded-lg dark:border-smartbear-bg-border bg-smartbear-bg-light border-smartbear-bg-light-border">
                {children}
            </div>
        </div>
    )
}
export default SmartBear;