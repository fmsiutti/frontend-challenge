export const capitalize = (word:string) => word.charAt(0).toUpperCase() + word.slice(1)

export const sanitizeString = (str:string) => str.normalize("NFD").replace(/[^a-z0-9áéíóúñü \.,_-]/gim,"").toLowerCase().trim()
