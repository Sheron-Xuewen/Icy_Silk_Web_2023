document.querySelectorAll('.blinds li:not(:first-child)').forEach(li => {
    li.addEventListener('mouseenter', () => {
        li.classList.add('expand');
        document.querySelectorAll('.blinds li:not(:first-child):not(.expand)').forEach(otherLi => {
            otherLi.classList.add('shrink');
        });
    });
    li.addEventListener('mouseleave', () => {
        li.classList.remove('expand');
        document.querySelectorAll('.blinds li').forEach(otherLi => {
            otherLi.classList.remove('shrink');
        });
    });
});
