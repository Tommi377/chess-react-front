const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const posToListIndex = pos => 
    (Number(pos.charAt(1)) - 1) * 8 + chars.indexOf(pos.charAt(0));

//const listIndexToPos = index => chars[(index - index % 8) / 8] + (index + 1) % 8;
const listIndexToPos = index => chars[index % 8] + ((index - index % 8) / 8 + 1);

export {
    posToListIndex,
    listIndexToPos
};