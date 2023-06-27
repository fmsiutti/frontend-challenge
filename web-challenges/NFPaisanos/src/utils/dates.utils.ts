export const compareDates = (dateA:string, dateB:string, direction:number):number => {
    if(direction === 0){
        return new Date(dateA).getTime() - new Date(dateB).getTime()
    }else{
        return new Date(dateB).getTime() - new Date(dateA).getTime()
    }
}