import * as fs from 'fs';
import csvParser from 'csv-parser';
import { writeFile } from 'fs/promises';
import { format, parse } from 'date-fns';

const csvFilePath = './src/data/202310-Spring-DGM-Schedule-MyEdit.csv';
const jsonFilePath = './src/data/springDGMSchedule.json';
const  eventListPath = './src/data/FullEventList.json';

/* type DataItem = Record<string, any> */

/* const jsonArray: any = []; */
type MyData = Record<string, any>
const jsonArray: MyData[] = []

async function main() {
	//await convertCSV2JSON();
	const cleanedUpJson = await cleanUpJSON();
	const fullEventList = produceEventList(cleanedUpJson);
	// now write the cleaned up json to a file
	writeFile(eventListPath, JSON.stringify(fullEventList));
}

main();

async function convertCSV2JSON() {
	const readStream = fs.createReadStream(csvFilePath);
	readStream
		.pipe(csvParser())
		.on('data', (data) => jsonArray.push(data))
		.on('end', () => {
			writeJSON();
		});
}


async function writeJSON() {
	// const modifiedArray: DataItem[] = jsonArray.map((item, index) => {
    //     const modifiedObject: DataItem = {}
    //     for (const key in item) {
    //         modifiedObject[`_${index + 1}`] = item[key]
    //     }
    //     return modifiedObject
    // })

	const modifiedArray: MyData[] = jsonArray.map((item) => {
		const modifiedObject: MyData = {}
		for (const key in item) {
		  // Replace spaces and newline characters with underscores
		  const modifiedKey = key.replace(/[\s\n]+/g, '_')
		  modifiedObject[modifiedKey] = item[key]
		}
		return modifiedObject
	  })

	const writeStream = fs.createWriteStream(jsonFilePath)
	writeStream.write(JSON.stringify(modifiedArray, null, 4))
	writeStream.end(() => console.log('JSON file written.'))
}

async function cleanUpJSON() {
	const data: any[] = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

	let currentCourseName = '';

	const cleanedData = data
		.map((item, index) => {
			if (index > 1) {
				const keys: string[] = Object.keys(item);
				const values: string[] = Object.values(item);
				// if the object has just one key and value, then it is a course name
				if (keys.length === 1 && values.length === 1) {
					currentCourseName = values[0];
					return;
				}
				
				const itemID = index 
				
				const newCourse = {
					id: itemID,
					courseID: item._CLSS_ID,
					course_name: currentCourseName,
					course: item.Course,
					instructor: item.Instructor,
					section: replaceSpaceNParens(item.Section),
					course_title: item.Course_Title,
					meeting_pattern: item.Meeting_Pattern,
					building_room: item.Building_and_Room.slice(0, 6), // only take the first 6 characters
				};
				return newCourse;
			}
		})
		.filter((item) => item !== undefined);
	//console.log(cleanedData);
	return cleanedData;
}

function replaceSpaceNParens(str: string) {
	str = str.replace(/\s/g, ''); // remove all spaces
	str = str.replace(/\([^)]*\)/g, ''); // remove all contents between parens
	return str;
}


function produceEventList(data: any[]) {
	data.forEach((item, index) => {item.id = index})
	const eventList = data
		.flatMap((item) => {
			if (item.meeting_pattern === 'Does Not Meet') return
			const id = item.id
			const courseID = item.courseID
			const title = {
				html: `<p>${item.course}-${item.section}</p><p>${item.course_title}</p><p>${item.instructor}<p><p>${item.building_room}</p>`
			}
			const instructor = item.instructor
			const section = item.section
			const course = item.course
			const extendedProps = { building_room: item.building_room };
			const { start } = convertTime(item.meeting_pattern);
			const { end } = convertTime(item.meeting_pattern);

			const multiDays = start.split(','); // check for multiple days
			const startTime = start.split('T')[1];
			const endTime = end.split('T')[1];
			//console.log(multiDays.length, startTime, endTime)

			let dayCounter = 0
			if (multiDays.length > 1) {
				//console.log(multiDays);
				const courseDays = multiDays.flatMap((day) => {
					const onlyTheDay = day.split('T')[0]
					const uniqueID = `${id}.${dayCounter}`
					dayCounter++
					const event = {
						id: uniqueID,
						courseID,
						title,
						instructor,
						section,
						course,
						extendedProps,
						start: onlyTheDay + 'T' + startTime,
						end: onlyTheDay + 'T' + endTime
					};
					return event;
				});
				return courseDays;
			} else {
				const event = {
					id,
					courseID,
					title,
					instructor,
					section,
					course,
					extendedProps,
					start,
					end
				};
				return event;
			}
		})
		.filter((item) => item !== undefined);
	return eventList;
	//console.log(eventList.filter((item) => item?.extendedProps?.building_room === 'CS 502'));
}

function convertTime(time: string) {
	const [days, startEndTimes] = time.split(' ');
  
	if (!startEndTimes) {
	  // Handle the case where startEndTimes is missing or empty
	  return { start: '', end: '' };
	}
  
	const isoDate = getIsoDateForDays(days);
  
	if (!isoDate) {
	  // Handle the case where days are not recognized
	  return { start: '', end: '' };
	}
  
	const timeArray = startEndTimes.split('-');
  
	if (timeArray.length !== 2) {
	  // Handle the case where startEndTimes does not have a valid format
	  return { start: '', end: '' };
	}
  
	let startTime = convertHours(timeArray[0]);
	const start = `${isoDate}T${format(parse(startTime, 'h:mma', new Date()), 'HH:mm:ss')}`;
  
	let endTime = convertHours(timeArray[1]);
	const end = `${isoDate}T${format(parse(endTime, 'h:mma', new Date()), 'HH:mm:ss')}`;
  
	return { start, end };
  }
  
  function getIsoDateForDays(days: string) {
	switch (days) {
	  case 'M':
		return '2024-01-08'; // Monday
	  case 'W':
		return '2024-01-10'; // Wednesday
	  case 'MW':
		return '2024-01-08,2024-01-10'; // Monday and Wednesday
	  case 'T':
		return '2024-01-09'; // Tuesday
	  case 'TR':
		return '2024-01-09,2024-01-11'; // Tuesday and Thursday
	  case 'R':
		return '2024-01-11'; // Thursday
	  case 'F':
		return '2024-01-12'; // Friday
	  case 'MTWR':
		return '2024-01-08,2024-01-09,2024-01-10,2024-01-11'; // Monday, Tuesday, Wednesday, Thursday
	  case 'MWF':
		return '2024-01-08,2024-01-09,2024-01-10'; // Monday, Tuesday, Wednesday
	  default:
		return null; // Invalid input
	}
  }

function convertHours(timeStr: string) {
	timeStr = timeStr.toLowerCase().replace(/;$/, '');
	if (timeStr.includes('am') || timeStr.includes('pm')) {
		if (!timeStr.includes(':')) {
			// convert 1pm to 1:00pm for example
			timeStr = timeStr.replace('am', ':00am').replace('pm', ':00pm');
		}
	}
	return timeStr;
}




// {
//     id: '1',
//     title: {html: '<p>DGM 2260-001</p><p>Immersive Authoring</p><p>MWF 11am-11:50am</p>'},
//     start: '2023-09-22T10:00:00',
//     end: '2023-09-22T11:00:00',
// }