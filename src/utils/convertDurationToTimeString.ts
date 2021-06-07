export function convertDurationToTimeString(duration: number): string{

    const hours = Math.floor(duration / 3600); // que e o mesmo que (60 * 60) e o resultado desta divisão vai ser arredondado pra baixo
    const minutes = Math.floor((duration % 3600) / 60); // O resto da divisão de dividido port 60 arredondado pra baixo
    const seconds = duration % 60

    const timeString = [ hours, minutes , seconds]
    .map(unit => String(unit).padStart(2,'0'))
    .join(':')
    return timeString;
}