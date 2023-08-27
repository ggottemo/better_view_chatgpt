document.addEventListener('DOMContentLoaded', function() {
    // Find elements by the given selector and adjust their styles
    let blocks = document.querySelectorAll('div.w-full:nth-child(3) > div:nth-child(1)');
    
    for (let block of blocks) {
        block.style.width = '90%';  // You can adjust this value as per your preference
    }
});
