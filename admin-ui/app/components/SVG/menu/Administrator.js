import React from "react"

const Administrator = ({ fill, className }) => {
  return (
    <div className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 23 22.92">
        <g>
          <path d="M0 21.12c.14-.25.12-.54.17-.81.13-.7.23-1.4.36-2.1.19-1.02.79-1.71 1.76-2.07 1.95-.71 3.9-1.41 5.85-2.11.15-.05.2-.11.21-.28.04-.42-.08-.72-.41-1.02C7.15 12 6.82 11.02 6.6 10c-.11-.54-.09-1.09-.12-1.63-.02-.35-.13-.68-.35-.95-.39-.5-.56-1.06-.55-1.69.02-.74-.03-1.48.02-2.22C5.73 1.76 7.18.25 8.91.04c.22-.03.43-.04.65-.04 1.66 0 3.32-.01 4.99 0 .59 0 1.09.25 1.36.82.09.18.12.37.1.57-.01.13.01.19.14.26.83.46 1.27 1.16 1.28 2.11.01.84 0 1.68 0 2.52 0 .31-.06.6-.22.86-.45.74-.66 1.56-.77 2.41-.14 1.05-.46 2.04-1.15 2.88-.11.14-.23.29-.37.39-.23.16-.28.35-.27.61.02.52 0 .52.5.7 1.82.66 3.63 1.32 5.45 1.97 1.2.43 1.79 1.29 1.95 2.52.12.87.28 1.74.42 2.61.15.9-.49 1.69-1.41 1.69H1.43c-.64 0-1.15-.37-1.37-.97-.02-.05 0-.12-.07-.15v-.67zm7.28-13.6v1.26c0 .5.06.99.19 1.46.22.82.54 1.59 1.24 2.13.46.36.93.7 1.42 1.01 1.06.68 2.06.53 3-.14.31-.23.6-.5.92-.72.39-.27.7-.6.94-1 .48-.82.72-1.71.74-2.65.03-.98 0-1.96 0-2.94 0-.09 0-.18-.03-.26-.16-.56-.52-.93-1.06-1.13-.59-.22-1.17-.42-1.76-.62-.28-.1-.57-.09-.85.02-.46.17-.91.38-1.39.47-.61.11-1.23.06-1.84.04-.71-.02-1.52.75-1.52 1.53v1.55zm5.26 14.59c.07.06.13.03.19.03H21.59c.43-.04.69-.36.62-.79-.16-.97-.31-1.93-.47-2.9-.13-.78-.56-1.32-1.31-1.6-1.23-.45-2.45-.89-3.68-1.33-.05-.02-.1-.07-.17-.01.25.51.51 1.01.76 1.52.22.44.07.7-.42.7h-.84c.08.14.13.24.18.34.19.36.17.46-.13.74-1.04.95-2.08 1.9-3.11 2.85-.16.14-.31.29-.47.44zm-6.1-6.62h-.08c-1.31.47-2.63.93-3.93 1.43-.61.23-1 .72-1.12 1.36-.18.98-.32 1.98-.51 2.96-.11.56.25.9.78.9 2.9-.01 5.79 0 8.69 0 .06 0 .13.03.21-.05-.06-.05-.12-.09-.17-.14l-3.48-3.18c-.24-.22-.26-.34-.11-.63.06-.12.13-.25.2-.4h-.84c-.48 0-.63-.26-.42-.69.25-.51.51-1.03.78-1.56zm.05-9.14v-.31c0-.82.36-1.46 1-1.95.46-.35.99-.48 1.58-.45.85.05 1.69.03 2.47-.36.09-.05.19-.08.29-.11.37-.13.75-.17 1.12-.05.73.24 1.48.46 2.18.78.91.41 1.4 1.15 1.4 2.18v.62c.12-.16.13-.33.13-.51V3.72c0-.13-.02-.25-.06-.37-.18-.56-.54-.95-1.12-1.12-.3-.09-.4-.27-.3-.54.21-.6-.12-.89-.66-.9-1.71-.02-3.41-.03-5.12 0-1.72.03-3.01 1.37-3.02 3.09v1.95c0 .18 0 .36.11.52zm8.71 8.62c-.27-.1-.53-.19-.79-.28-.06-.02-.12 0-.17.03l-2.08 1.39c-.09.06-.08.1-.03.17l1.26 1.71c.06.08.1.09.15 0 .55-1 1.1-2 1.65-3.01zm-6.55-.31c-.24.09-.47.18-.71.25-.13.04-.14.09-.08.2.52.95 1.05 1.89 1.56 2.84.06.12.1.14.19.01.4-.56.8-1.11 1.21-1.66.09-.11.07-.16-.04-.23-.67-.44-1.33-.88-1.99-1.33-.05-.03-.1-.06-.15-.08zm7.09.93l-2.68 4.87c.06.04.09 0 .11-.02.75-.68 1.49-1.36 2.24-2.04.07-.06.07-.11.03-.19-.12-.21-.23-.42-.33-.63-.16-.32.01-.59.37-.6.26 0 .52-.01.79-.01.14 0 .15-.04.09-.15l-.61-1.22zm-8.49 0c-.21.43-.41.84-.62 1.24-.07.13 0 .13.1.13.26 0 .52 0 .79.01.36.01.52.28.37.6-.1.21-.22.42-.33.63-.04.07-.05.12.02.19.78.71 1.55 1.42 2.33 2.13l.04-.03-2.7-4.91zm4.26 1.18c-.15.13-.23.31-.36.45-.1.1-.1.19 0 .3.17.21.33.43.26.75-.12.61-.21 1.22-.3 1.84-.03.24-.16.49-.08.7.1.3.3.57.47.88.15-.28.28-.52.42-.76.07-.11.08-.22.06-.34-.13-.79-.26-1.58-.38-2.37-.02-.14-.03-.28.06-.41.1-.15.31-.29.27-.46-.04-.17-.21-.32-.32-.47-.03-.03-.05-.07-.09-.11zm2.35-3.1c-1.57 1.27-3.15 1.26-4.72 0-.08.23 0 .36.17.47.68.44 1.36.9 2.03 1.35.12.08.2.08.31 0 .67-.45 1.33-.91 2.01-1.34.2-.13.25-.26.19-.49zm-3.47 6.01c.03-.16.04-.25.06-.35.06-.37.11-.74.17-1.11.01-.07 0-.13-.05-.15-.06-.02-.08.05-.11.09-.15.2-.29.4-.44.59-.06.07-.07.13-.02.22.12.21.24.43.39.7zm2.23-.01c.15-.27.26-.48.39-.69.04-.08.04-.13-.02-.2-.16-.21-.31-.42-.46-.63-.02-.03-.04-.08-.08-.06-.05.01-.06.06-.06.11l.06.4c.05.34.11.69.17 1.08z"></path>
        </g>
      </svg>
    </div>
  )
}

export default Administrator
