import fullEventList from '../../src/data/FullEventList.json';

export function getEventList(building_room: string) {
    //console.log(fullEventList)
   return (fullEventList as any[]).filter((item: any) => item?.extendedProps?.building_room === building_room);
}