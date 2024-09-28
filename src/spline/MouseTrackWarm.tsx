// MouseTrackWarm.js
import Spline from '@splinetool/react-spline/next';

export default function MouseTrackWarm() {
  return (
    <main className="absolute inset-0"> {/* Make Spline take full space of the parent */}
      <Spline
        scene="https://prod.spline.design/NM9djWCkB9bGaHtq/scene.splinecode" 
      />
    </main>
  );
}


// "use client"


// import { useRef, useEffect } from 'react';
// import Spline from '@splinetool/react-spline/next';

// export default function MouseTrackWarm() {
//   const splineRef = useRef();

//   useEffect(() => {
//     // Check if the Spline instance is available
//     if (splineRef.current) {
//       // Set the visibility of the specific object
//       const objectName = 'YourObjectName'; // Replace with the actual name of your object in the Spline scene
//       splineRef.current.setVisibility(objectName, false); // Initially set to false (invisible)

//       // Optionally, set a timeout to make it visible after a delay
//       const timer = setTimeout(() => {
//         splineRef.current.setVisibility(objectName, true); // Make it visible
//       }, 1000); // Adjust the duration as needed

//       return () => clearTimeout(timer); // Clean up on unmount
//     }
//   }, [splineRef]);

//   return (
//     <main className="absolute inset-0">
//       <Spline
//         ref={splineRef} // Attach the ref to the Spline component
//         scene="https://prod.spline.design/NM9djWCkB9bGaHtq/scene.splinecode"
//       />
//     </main>
//   );
// }
