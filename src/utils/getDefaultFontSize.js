const body = document.querySelector('body');

const div = document.createElement('div');
div.style.cssText = 'height: 1em; width: 1ch; box-sizing: border-box; visibility: hidden;';

const getDefaultFontSize = (element = body) => {
    element.appendChild(div);
    const em = div.offsetHeight;
    const ch = div.offsetWidth;
    element.removeChild(div);
    return {em, ch};
};

export default getDefaultFontSize;