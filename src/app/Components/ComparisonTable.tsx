
// // 'use client';

// // import React, { useEffect, useRef } from 'react';
// // import gsap from 'gsap';
// // import { Check, X } from 'lucide-react';
// // import { cn } from '../utils/classNames';

// // const platforms = ['Learnrithm AI', 'Udemy', 'Coursera'];

// // const features = [
// //   {
// //     title: 'Personalized AI Teacher',
// //     values: [true, false, false],
// //   },
// //   {
// //     title: "Learn ANY subject (not just what's in course catalog)",
// //     values: [true, false, false],
// //   },
// //   {
// //     title: 'Instant Answers to Your Specific Questions',
// //     values: [true, false, 'Limited'],
// //   },
// //   {
// //     title: 'Custom Quiz Generation for Any Topic',
// //     values: [true, false, false],
// //   },
// //   {
// //     title: '24/7 Homework Help',
// //     values: [true, false, false],
// //   },
// //   {
// //     title: 'Adapts to Your Learning Style',
// //     values: [true, false, 'Limited'],
// //   },
// //   {
// //     title: 'Interactive Step-by-Step Solutions',
// //     values: [true, 'Some Courses', 'Some Courses'],
// //   },
// //   {
// //     title: 'Single Subscription for All Subjects',
// //     values: [true, false, 'Limited'],
// //   },
// //   {
// //     title: 'Cost Structure',
// //     values: [
// //       'All-inclusive subscription < $1/day',
// //       'Pay per course ($10-$200)',
// //       'Monthly or per certificate',
// //     ],
// //   },
// //   {
// //     title: 'Learning Experience',
// //     values: [
// //       'Interactive AI that adapts to you',
// //       'Pre-recorded videos, limited interaction',
// //       'Structured courses with fixed content',
// //     ],
// //   },
// // ];

// // const ComparisonTable = () => {
// //   const sectionRef = useRef(null);

// //   useEffect(() => {
// //     gsap.fromTo(
// //       sectionRef.current,
// //       { opacity: 0, y: 80 },
// //       {
// //         opacity: 1,
// //         y: 0,
// //         duration: 1.2,
// //         ease: 'power3.out',
// //         delay: 0.3,
// //       }
// //     );
// //   }, []);

// //   return (
// //     <section
// //       ref={sectionRef}
// //       className="py-20 px-6 md:px-12 max-w-7xl mx-auto text-white"
// //     >
// //       <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 leading-tight">
// //         How <span className="text-blue-500">Learnrithm AI</span> <br />
// //         Outperforms Other Learning Platforms
// //       </h2>

// //       <div className="overflow-auto rounded-2xl border border-white/10 bg-gradient-to-b from-[#0f172a] to-[#1e293b] shadow-xl">
// //         <table className="min-w-full table-auto text-left text-sm md:text-base">
// //           <thead className="bg-white/10 text-white">
// //             <tr>
// //               <th className="px-4 py-5 border-b border-white/10 font-semibold">Features</th>
// //               {platforms.map((platform, i) => (
// //                 <th
// //                   key={i}
// //                   className="px-6 py-5 border-b border-white/10 text-center font-semibold text-blue-400"
// //                 >
// //                   {platform}
// //                 </th>
// //               ))}
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {features.map((feature, idx) => (
// //               <tr
// //                 key={idx}
// //                 className={cn(
// //                   'transition-all duration-300 hover:bg-white/5 border-b border-white/5',
// //                   idx % 2 === 0 && 'bg-white/5'
// //                 )}
// //               >
// //                 <td className="px-4 py-4 font-medium text-white w-1/3">
// //                   {feature.title}
// //                 </td>
// //                 {feature.values.map((val, id) => (
// //                   <td key={id} className="px-6 py-4 text-center">
// //                     {val === true ? (
// //                       <Check className="mx-auto text-green-400" size={20} />
// //                     ) : val === false ? (
// //                       <X className="mx-auto text-red-400" size={20} />
// //                     ) : (
// //                       <span className="text-yellow-400 font-semibold">{val}</span>
// //                     )}
// //                   </td>
// //                 ))}
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ComparisonTable;



// 'use client';

// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { Check, X } from 'lucide-react';
// import { cn } from '../utils/classNames';

// const platforms = ['Learnrithm AI', 'Udemy', 'Coursera'];

// const data = [
//   {
//     feature: 'Personalized AI Teacher',
//     values: [true, false, false],
//   },
//   {
//     feature: 'Learn ANY subject (not just what’s in course catalog)',
//     values: [true, false, false],
//   },
//   {
//     feature: 'Instant Answers to Your Specific Questions',
//     values: [true, false, 'Limited'],
//   },
//   {
//     feature: 'Custom Quiz Generation for Any Topic',
//     values: [true, false, false],
//   },
//   {
//     feature: '24/7 Homework Help',
//     values: [true, false, false],
//   },
//   {
//     feature: 'Adapts to Your Learning Style',
//     values: [true, false, 'Limited'],
//   },
//   {
//     feature: 'Interactive Step-by-Step Solutions',
//     values: [true, 'Some Courses', 'Some Courses'],
//   },
//   {
//     feature: 'Single Subscription for All Subjects',
//     values: [true, false, 'Limited'],
//   },
// ];

// const costStructure = [
//   'All-inclusive subscription < $1/day',
//   'Pay per course ($10–$200 each)',
//   'Monthly or per certificate',
// ];

// const experience = [
//   'Interactive AI teacher that adapts to you',
//   'Pre-recorded videos, limited interaction',
//   'Structured courses with fixed content',
// ];

// const ComparisonTable = () => {
//   const tableRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (tableRef.current) {
//       gsap.fromTo(
//         tableRef.current.querySelectorAll('.row'),
//         { y: 50, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1.2,
//           ease: 'ease-in-out',
//           stagger: 0.2,
//             scrollTrigger: {
//                 trigger: tableRef.current,
//                 start: 'top 75%',
//             },
//         }
//       );
//     }
//   }, []);

//   return (
//     <section className="relative py-16 px-4 sm:px-8 md:px-16 bg-white text-black overflow-hidden">
//       <div className="max-w-7xl mx-auto" ref={tableRef}>
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 leading-tight">
//           How <span className="text-blue-600">Learnrithm AI</span>{' '}
//           <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2 py-1 rounded-md">Outperforms</span> Other Platforms
//         </h2>

//         <div className="overflow-x-auto rounded-2xl shadow-xl ring-1 ring-black/10 bg-gradient-to-br from-white to-gray-50">
//           <table className="min-w-full table-auto">
//             <thead className="text-left bg-blue-50 font-extrabold text-blue-700">
//               <tr>
//                 <th className="px-6 py-4 font-semibold text-lg">Features</th>
//                 {platforms.map((platform) => (
//                   <th key={platform} className="px-6 py-4 font-semibold text-lg text-center">
//                     {platform}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody className="text-sm sm:text-base">
//               {data.map((row, i) => (
//                 <tr
//                   key={i}
//                   className="row border-t border-gray-200 hover:bg-blue-50 transition duration-300 ease-in-out"
//                 >
//                   <td className="px-6 py-5 font-medium text-gray-700 max-w-[260px]">
//                     {row.feature}
//                   </td>
//                   {row.values.map((val, j) => (
//                     <td
//                       key={j}
//                       className={cn(
//                         'px-6 py-5 text-center',
//                         j === 0
//                           ? 'font-semibold text-blue-600'
//                           : 'text-gray-600'
//                       )}
//                     >
//                       {val === true ? (
//                         <Check className="inline w-5 h-5 text-blue-500" />
//                       ) : val === false ? (
//                         <X className="inline w-5 h-5 text-purple-500" />
//                       ) : (
//                         <span className="text-black-600 font-medium">{val}</span>
//                       )}
//                     </td>
//                   ))}
//                 </tr>
//               ))}

//               {/* Cost Row */}
//               <tr className="row border-t border-gray-300 bg-white hover:bg-blue-50 transition">
//                 <td className="px-6 py-5 font-bold text-gray-800">Cost Structure</td>
//                 {costStructure.map((cost, i) => (
//                   <td key={i} className="px-6 py-5 text-center text-sm sm:text-base text-gray-700">
//                     {cost}
//                   </td>
//                 ))}
//               </tr>

//               {/* Experience Row */}
//               <tr className="row border-t border-gray-300 bg-white hover:bg-blue-50 transition">
//                 <td className="px-6 py-5 font-bold text-gray-800">Learning Experience</td>
//                 {experience.map((exp, i) => (
//                   <td key={i} className="px-6 py-5 text-center text-sm sm:text-base text-gray-700">
//                     {exp}
//                   </td>
//                 ))}
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ComparisonTable;





'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Check, X } from 'lucide-react';
import { cn } from '../utils/classNames';

const platforms = ['Learnrithm AI', 'Udemy', 'Coursera'];

const data = [
  {
    feature: 'Personalized AI Teacher',
    values: [true, false, false],
  },
  {
    feature: 'Learn ANY subject (not just what’s in course catalog)',
    values: [true, false, false],
  },
  {
    feature: 'Instant Answers to Your Specific Questions',
    values: [true, false, 'Limited'],
  },
  {
    feature: 'Custom Quiz Generation for Any Topic',
    values: [true, false, false],
  },
  {
    feature: '24/7 Homework Help',
    values: [true, false, false],
  },
  {
    feature: 'Adapts to Your Learning Style',
    values: [true, false, 'Limited'],
  },
  {
    feature: 'Interactive Step-by-Step Solutions',
    values: [true, 'Some Courses', 'Some Courses'],
  },
  {
    feature: 'Single Subscription for All Subjects',
    values: [true, false, 'Limited'],
  },
];

const costStructure = [
  'All-inclusive subscription < $1/day',
  'Pay per course ($10–$200 each)',
  'Monthly or per certificate',
];

const experience = [
  'Interactive AI teacher that adapts to you',
  'Pre-recorded videos, limited interaction',
  'Structured courses with fixed content',
];

const ComparisonTable = () => {
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tableRef.current) {
      gsap.fromTo(
        tableRef.current.querySelectorAll('.row'),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'ease-in-out',
          stagger: 0.2,
        }
      );
    }
  }, []);

  return (
    <section className="relative py-16 px-4 sm:px-6 md:px-12  lg:px-20 bg-white text-black">
      <div className="max-w-7xl mx-auto" ref={tableRef}> 
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 leading-tight">
          How <span className="text-blue-600">Learnrithm AI</span>{' '}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2 py-1 rounded-md">
            Outperforms
          </span>{' '}
          Other Platforms
        </h2>

        {/* Desktop/Table View */}
        <div className="hidden md:block overflow-x-auto rounded-2xl shadow-xl ring-1 ring-black/10 bg-gradient-to-br from-white to-gray-50">
          <table className="w-full table-auto">
            <thead className="text-left bg-blue-50 font-extrabold text-blue-700 sticky top-0 z-10">
              <tr>
                <th className="px-6 py-4 text-base">Features</th>
                {platforms.map((platform) => (
                  <th key={platform} className="px-6 py-4 text-center text-base">
                    {platform}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-base">
              {data.map((row, i) => (
                <tr key={i} className="row border-t border-gray-200 hover:bg-blue-50 transition">
                  <td className="px-6 py-4 text-gray-700 font-medium">{row.feature}</td>
                  {row.values.map((val, j) => (
                    <td
                      key={j}
                      className={cn(
                        'px-6 py-4 text-center',
                        j === 0 ? 'font-semibold text-blue-600' : 'text-gray-600'
                      )}
                    >
                      {val === true ? (
                        <Check className="inline w-5 h-5 text-blue-500" />
                      ) : val === false ? (
                        <X className="inline w-5 h-5 text-purple-500" />
                      ) : (
                        <span className="text-gray-800 font-medium">{val}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}

              <tr className="row border-t border-gray-300 bg-white hover:bg-blue-50">
                <td className="px-6 py-4 font-bold text-gray-800">Cost Structure</td>
                {costStructure.map((cost, i) => (
                  <td key={i} className="px-6 py-4 text-center text-gray-700">
                    {cost}
                  </td>
                ))}
              </tr>

              <tr className="row border-t border-gray-300 bg-white hover:bg-blue-50">
                <td className="px-6 py-4 font-bold text-gray-800">Learning Experience</td>
                {experience.map((exp, i) => (
                  <td key={i} className="px-6 py-4 text-center text-gray-700">
                    {exp}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-8 mt-10">
          {data.map((row, i) => (
            <div key={i} className="row bg-gray-50 p-4 rounded-xl shadow-md">
              <h3 className="font-semibold text-gray-800 mb-2">{row.feature}</h3>
              <div className="space-y-2">
                {platforms.map((platform, j) => (
                  <div key={j} className="flex items-center justify-between border-t pt-2 text-sm">
                    <span className="text-gray-600">{platform}</span>
                    <span className="text-right">
                      {row.values[j] === true ? (
                        <Check className="w-5 h-5 text-blue-500" />
                      ) : row.values[j] === false ? (
                        <X className="w-5 h-5 text-purple-500" />
                      ) : (
                        <span className="text-gray-700">{row.values[j]}</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Cost */}
          <div className="bg-gray-50 p-4 rounded-xl shadow-md">
            <h3 className="font-bold text-gray-800 mb-2">Cost Structure</h3>
            <div className="space-y-2 text-sm">
              {platforms.map((platform, i) => (
                <div key={i} className="flex justify-between border-t pt-2">
                  <span className="text-gray-600">{platform}</span>
                  <span className="text-gray-700 text-right">{costStructure[i]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Experience */}
          <div className="bg-gray-50 p-4 rounded-xl shadow-md">
            <h3 className="font-bold text-gray-800 mb-2">Learning Experience</h3>
            <div className="space-y-2 text-sm">
              {platforms.map((platform, i) => (
                <div key={i} className="flex justify-between border-t pt-2">
                  <span className="text-gray-600">{platform}</span>
                  <span className="text-gray-700 text-right">{experience[i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
