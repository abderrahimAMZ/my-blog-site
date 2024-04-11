import React from 'react';


const CoolBear = ({props, children}) => {

   return (
       <div className={`flex ${props != null ? "flex-row-reverse" : "flex-row"} mt-10 mb-10`}>
           <div className=" h-3/12 w-4/12 " title="Cool bear says:">
               <svg className={"dark:fill-white max-h-20"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M21.41 41.398c.148-1.787.337-3.572.574-5.351.369-2.772 4.393-11.308 5.624-12.882l.553-.706-1.344-.449a5.772 5.772 0 0 1-3.948-5.478 5.786 5.786 0 0 1 5.779-5.78 5.768 5.768 0 0 1 5.684 4.758l.249 1.396 1.231-.704a28.845 28.845 0 0 1 14.282-3.801c4.991 0 9.93 1.314 14.282 3.801l1.231.704.249-1.396a5.766 5.766 0 0 1 5.683-4.758 5.786 5.786 0 0 1 5.779 5.78 5.772 5.772 0 0 1-3.948 5.478l-1.344.449.552.705c1.911 2.44 2.55 2.541 3.563 5.599 1.422 4.293 2.923 7.964 2.923 12.61v49.875h2V41.373c0-6.519-2.008-12.717-5.819-18.005a7.768 7.768 0 0 0 4.072-6.836c0-4.29-3.49-7.78-7.779-7.78a7.766 7.766 0 0 0-7.3 5.1 30.834 30.834 0 0 0-14.146-3.45 30.834 30.834 0 0 0-14.146 3.45 7.766 7.766 0 0 0-7.301-5.1c-4.289 0-7.779 3.49-7.779 7.78a7.766 7.766 0 0 0 4.072 6.836c-6.681 9.271-5.976 21.037-5.992 32.034-.017 11.946.656 23.895.109 35.838l2.006-.001c.67 0-.17-33.831-.156-36.912.022-4.312.148-8.631.505-12.929z"></path><path d="M73.854 31.271v-4.494c0-.971-.79-1.76-1.761-1.76H55.235c-.604 0-1.3.869-1.778 1.905-.015 0-.027-.008-.042-.008H46.789c-.02 0-.037.011-.057.011-.478-1.037-1.175-1.908-1.779-1.908H28.094c-.971 0-1.761.79-1.761 1.76v4.494c0 4.477 3.643 8.119 8.119 8.119h5.12c4.265 0 7.734-3.47 7.734-7.734v-2.091H52.878v2.091c0 4.265 3.47 7.734 7.734 7.734h5.121c4.479-.001 8.121-3.643 8.121-8.119zm-41.713 3.192a1.387 1.387 0 0 1-1.917-.442 1.392 1.392 0 0 1 .442-1.917l8.403-5.255a1.392 1.392 0 0 1 1.475 2.359l-8.403 5.255zm11.163-2.18l-5.75 3.597a.95.95 0 0 1-1.313-.302.952.952 0 0 1 .303-1.312l5.75-3.597a.953.953 0 0 1 1.01 1.614zm15.168 1.935a1.387 1.387 0 0 1-1.917-.442 1.392 1.392 0 0 1 .442-1.917l8.403-5.255a1.392 1.392 0 0 1 1.475 2.359l-8.403 5.255zm4.909 1.561a.953.953 0 0 1-.506-1.759l5.75-3.597a.952.952 0 1 1 1.01 1.614l-5.75 3.597a.942.942 0 0 1-.504.145z"></path><path d="M59.705 45.232h-2c0 1.823-1.483 3.306-3.306 3.306s-3.306-1.483-3.306-3.306v-1.439h1.06a3.294 3.294 0 0 0 3.285-3.285v-.17c0-.259-.038-.508-.095-.749a3.291 3.291 0 0 0-2.665-2.482 3.243 3.243 0 0 0-.525-.053h-4.12c-.18 0-.353.025-.525.053a3.291 3.291 0 0 0-2.665 2.482 3.255 3.255 0 0 0-.095.749v.17a3.294 3.294 0 0 0 3.285 3.285h1.06v1.439a3.31 3.31 0 0 1-3.307 3.306 3.31 3.31 0 0 1-3.306-3.306h-2a5.312 5.312 0 0 0 5.306 5.306 5.293 5.293 0 0 0 4.306-2.229 5.294 5.294 0 0 0 4.306 2.229 5.313 5.313 0 0 0 5.307-5.306zM29.742 58.336a.703.703 0 0 0-1.406 0v5.368a.704.704 0 0 0 1.406 0v-5.368zM43.779 58.336a.703.703 0 0 0-1.406 0v5.368a.704.704 0 0 0 1.406 0v-5.368zM57.816 58.336a.703.703 0 0 0-1.407 0v5.368a.704.704 0 0 0 1.407 0v-5.368zM71.853 58.336a.704.704 0 0 0-1.407 0v5.368a.704.704 0 0 0 1.407 0v-5.368zM35.354 71.559v5.369a.703.703 0 0 0 1.406 0v-5.369a.703.703 0 0 0-1.406 0zM49.39 71.559v5.369a.704.704 0 0 0 1.407 0v-5.369a.703.703 0 0 0-1.407 0zM63.427 71.559v5.369a.704.704 0 0 0 1.407 0v-5.369a.703.703 0 0 0-1.407 0zM29.038 81.364a.703.703 0 0 0-.703.703v5.369a.703.703 0 0 0 1.406 0v-5.369a.703.703 0 0 0-.703-.703zM43.076 81.364a.703.703 0 0 0-.703.703v5.369a.703.703 0 0 0 1.406 0v-5.369a.705.705 0 0 0-.703-.703zM57.113 81.364a.704.704 0 0 0-.704.703v5.369a.704.704 0 0 0 1.407 0v-5.369a.705.705 0 0 0-.703-.703zM71.149 81.364a.703.703 0 0 0-.703.703v5.369a.703.703 0 0 0 1.407 0v-5.369a.705.705 0 0 0-.704-.703z"></path></svg>
           </div>
           <div className="ml-4 p-4 dark:bg-coolbear-bg border-2 rounded-lg dark:border-coolbear-bg-border bg-coolbear-bg-light border-coolbear-bg-light-border">
                {children}
           </div>
       </div>
   )
}

export default CoolBear;