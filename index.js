// document.addEventListener('DOMContentLoaded', () => {
//     const appIcons = document.querySelectorAll('.app-name i');
//     const appNames = ['Braille', 'Camera', 'Folder', 'Code', 'Microphone', 'Clipboard', 'Trash'];

//     appIcons.forEach((icon, index) => {
//         // Create tooltip element
//         const tooltip = document.createElement('div');
//         tooltip.className = 'tooltip';
//         tooltip.textContent = appNames[index];
//         document.body.appendChild(tooltip);

//         // Add mouseenter event listener
//         icon.addEventListener('mouseenter', (e) => {
//             // Position tooltip above the icon
//             const rect = icon.getBoundingClientRect();
//             const tooltipWidth = tooltip.offsetWidth;
//             const tooltipHeight = tooltip.offsetHeight;
            
//             // Calculate position to prevent going off-screen
//             let left = rect.left + (rect.width / 2) - (tooltipWidth / 2);
//             let top = rect.top - tooltipHeight - 10; // Increased gap between icon and tooltip
            
//             // Ensure tooltip stays within viewport
//             if (left < 0) left = 5;
//             if (left + tooltipWidth > window.innerWidth) {
//                 left = window.innerWidth - tooltipWidth - 5;
//             }
            
//             // If tooltip would go above viewport, show it below the icon
//             if (top < 0) {
//                 top = rect.bottom + 10;
//             }
            
//             tooltip.style.left = `${left}px`;
//             tooltip.style.top = `${top}px`;
            
//             // Show tooltip
//             tooltip.style.display = 'block';
//         });

//         // Add mouseleave event listener
//         icon.addEventListener('mouseleave', () => {
//             // Hide tooltip
//             tooltip.style.display = 'none';
//         });
//     });
// });
