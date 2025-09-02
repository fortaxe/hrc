import React from "react";
import ScrollReveal from "./scroll-reveal";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center py-[50px] sm:py-[140px] mx-auto max-w-[1440px] px-4 sm:px-[30px]">
        
        
        <p className="text-[36px] sm:text-[52px] leading-[42px] sm:leading-[63px]  text-[#bcbcbc] text-center tracking-[-2px]">
        HRC Group is one of the world’s leading composite solution providers.
        From R&D and engineering to tooling, mass production, and recycling, we
        deliver advanced carbon fiber solutions that drive sustainable,
        lightweight, and high-performance mobility.
      </p>
    </div>
  );
};

export default AboutUs;

// const AboutUs = () => {
//   return (
//     <>
//       <style jsx>{`
//         @import url('https://unpkg.com/normalize.css') layer(normalize);

//         @layer normalize, base, demo, scroll, hack;

//         @layer hack {
//           @property --lh {
//             syntax: '<integer>';
//             inherits: true;
//             initial-value: 0;
//           }
//           @property --measure {
//             syntax: '<number>';
//             inherits: true;
//             initial-value: 0;
//           }
//           .measure {
//             position: absolute;
//             height: 1lh;
//             aspect-ratio: 1;
//             right: 0;
//             bottom: 100%;
//             overflow: auto;
//             --lh: calc(1 / (1 - var(--measure)));
//             timeline-scope: --unit;
//             animation: y linear;
//             animation-timeline: --unit;
//             animation-range: entry 100% exit 100%;
//           }
//           .measure::before {
//             content: '';
//             position: absolute;
//             left: 0;
//             top: 0;
//             width: 1px;
//             aspect-ratio: 1;
//             view-timeline: --unit;
//           }
//           .measure::after {
//             content: counter(lh) 'px';
//             counter-reset: lh calc(var(--lh) * 0.86);
//             position: absolute;
//             right: 2ch;
//             bottom: 1ch;
//             font-size: 0.875rem;
//             color: color-mix(in hsl, canvas, canvasText);
//           }
//         }

//         @keyframes y {
//           to {
//             --measure: 1;
//           }
//         }

//         @layer scroll {
//           @supports (animation-timeline: scroll()) and (animation-range: entry 0 100%) {
//             @property --progress {
//               syntax: '<integer>';
//               inherits: true;
//               initial-value: 0;
//             }

//             .about-section {
//               --progress: 0;
//               animation: progress both linear;
//               animation-timeline: scroll(root);
//               counter-set: p var(--progress);
//             }

//             .progress [aria-hidden] {
//               padding-inline: 0.125rem;
//               color: #0000;
//             }

//             .progress .sync {
//               position: absolute;
//               inset: 0;
//               color: #0000;
//               container-type: size;
//             }

//             .progress .sync span {
//               position: absolute;
//               right: 0.75rem;
//               display: inline-block;
//               translate: 0 calc((-50% + 1px) + (((var(--progress) * 1cqh) - 1px)));
//             }

//             .progress .sync span::after {
//               background: linear-gradient(90deg, white 0 0) 50% 50% / 100% 4px no-repeat;
//               content: counter(p) '% complete';
//               color: rgba(255, 255, 255, 0.7);
//               position: absolute;
//               font-variant: tabular-nums;
//               padding-inline: 0.125rem;
//               right: 0;
//             }

//             .animated-text {
//               background-position-x: 200%, 0;
//               animation: fill both linear;
//               animation-timeline: scroll(root);
//             }
//           }

//           @keyframes fill {
//             to {
//               background-position-x: 100%, 0;
//             }
//           }

//           @keyframes progress {
//             to {
//               --progress: 100;
//             }
//           }
//         }

//         @layer demo {
//           .about-section {
//             --font-level: 2;
//             width: 100%;
//             max-width: 1440px;
//             display: flex;
//             position: relative;
//             flex-direction: column;
//             align-items: center;
//             justify-content: center;
//             padding: 50px 16px;
//             margin: 0 auto;
//           }

//           .progress {
//             font-size: 0.875rem;
//             white-space: nowrap;
//             display: grid;
//             place-items: start;
//             padding-inline: 0.75rem;
//             position: relative;
//             margin-bottom: 2rem;
//           }

//           .progress .sync span {
//             padding: 0.125rem;
//             position: relative;
//           }

//           .progress .sync span::before {
//             content: '';
//             position: absolute;
//             left: 50%;
//             top: 50%;
//             height: 1px;
//             width: 200vmax;
//             background: rgba(255, 255, 255, 0.2);
//             z-index: -1;
//             translate: -50% -50%;
//           }

//           .animated-text {
//             margin: 0;
//             line-height: 1.2;
//             font-size: 30px;
//             background-image: linear-gradient(90deg, white 0 0);
//             background-size: 200% 1lh;
//             background-repeat: no-repeat;
//             background-position-x: 180%;
//             background-position-y: 100%;
//             color: #0000;
//             background-clip: text;
//             -webkit-background-clip: text;
//             -webkit-text-stroke: 2px rgba(255, 255, 255, 0.3);
//             display: inline;
//             text-wrap: pretty;
//             letter-spacing: 0.05ch;
//             text-align: center;
//           }

//           @media (min-width: 640px) {
//             .about-section {
//               padding: 100px 30px;
//             }
            
//             .animated-text {
//               font-size: 52px;
//               line-height: 63px;
//             }
//           }

//           @media (max-width: 640px) {
//             .animated-text {
//               -webkit-text-stroke: unset;
//               background-image: linear-gradient(90deg, white 0 0),
//                 linear-gradient(90deg, rgba(255, 255, 255, 0.15) 0 0);
//               background-size: 200% 1lh, 100% 100%;
//               background-repeat: no-repeat, repeat;
//               background-position-x: 180%;
//               background-position-y: 100%;
//             }
//           }
//         }

//         @layer base {
//           :root {
//             --font-size-min: 16;
//             --font-size-max: 20;
//             --font-ratio-min: 1.15;
//             --font-ratio-max: 1.33;
//             --font-width-min: 375;
//             --font-width-max: 1500;
//           }

//           .fluid {
//             --fluid-min: calc(
//               var(--font-size-min) * pow(var(--font-ratio-min), var(--font-level, 0))
//             );
//             --fluid-max: calc(
//               var(--font-size-max) * pow(var(--font-ratio-max), var(--font-level, 0))
//             );
//             --fluid-preferred: calc(
//               (var(--fluid-max) - var(--fluid-min)) /
//                 (var(--font-width-max) - var(--font-width-min))
//             );
//             --fluid-type: clamp(
//               (var(--fluid-min) / 16) * 1rem,
//               ((var(--fluid-min) / 16) * 1rem) -
//                 (((var(--fluid-preferred) * var(--font-width-min)) / 16) * 1rem) +
//                 (var(--fluid-preferred) * var(--variable-unit, 100vi)),
//               (var(--fluid-max) / 16) * 1rem
//             );
//             font-size: var(--fluid-type);
//           }
//         }
//       `}</style>
//       <section className="about-section fluid">
//         <div className="progress">
//           <span aria-hidden="true">100% complete</span>
//           <span className="sync">
//             <span>100% complete</span>
//           </span>
//         </div>
//         <div className="heading">
//           <div className="measure"></div>
//           <p className="animated-text">
//             HRC Group is one of the world's leading composite solution providers.
//         From R&D and engineering to tooling, mass production, and recycling, we
//         deliver advanced carbon fiber solutions that drive sustainable,
//         lightweight, and high-performance mobility.
//       </p>
//     </div>
//       </section>
//     </>
//   );
// };