
const ParseLine = (script: string) => {
    const line = script.match(/\b[A-Z][A-Za-z\s]*\b:(.*?)(?=\n[A-Z][A-Za-z\s]*:|$)/g);
    return line;
}

const ParseCharacter = (line: string) => {
    const characters = line.match(/\b[A-Z][A-Za-z\s]*\b:/g);
    return characters;
}