<script lang="ts">
    import Calendar from '@event-calendar/core'
	import ResourceTimeGrid from '@event-calendar/resource-time-grid'
	import TimeGrid from '@event-calendar/time-grid'
	import fullEventList from '../../data/FullEventList.json'
 	// import { beforeUpdate } from 'svelte'
	import Filter from '../filter/+page.svelte'

	let eventList: any[] = []

	// beforeUpdate(() => {
	// 	// let tempEventList = fullEventList.filter(
	// 	// 	(item: any) => item?.extendedProps?.building_room === 'CS 509'
	// 	// )

	// 	// tempEventList.forEach((item: any) => {
	// 	// 	let tempEvent = {
	// 	// 		id: item.id,
	// 	// 		title: item.title,
	// 	// 		start: item.start,
	// 	// 		end: item.end
    //     //         //We might add eventBackgroundColor: soon
	// 	// 	}
	// 	// 	eventList.push(tempEvent)
	// 	// })

	// 	let tempEventList = {
	// 		id: "1",
	// 		title: "Welcome to the UVU Scheduler, please add data to the calendar to get started!",
	// 		start: "2024-01-08T16:30:00", 
	// 		end:"2024-01-08T17:45:00",
	// 	}
	// 	eventList = [...eventList, tempEventList]
	// 	console.log(eventList)
	// })

	// events: [
	// 		{ 
	// 		id: "1",
	// 		title: "hello Mr.Rager",
	// 		start: "2024-01-08T16:30:00", 
	// 		end:"2024-01-08T17:45:00",
	// 		display: 'auto'
	// 	}
	// ]

    let ec 
	let plugins = [TimeGrid]
	let options = {
		date: new Date('2024-01-08'),
		view: 'timeGridWeek',
		allDaySlot: false,
		hiddenDays: [0, 7],
		slotDuration: '00:30:00',
		slotMinTime: '05:00:00',
		slotMaxTime: '23:00:00',
		slotHeight: 128,
        height: '100%',
		titleFormat: { year: 'numeric', month: 'long', day: 'numeric' },
        eventBackgroundColor: '#275D38',
        headerToolbar: {start: '', center: '', end: ''},
		eventSources: [
			{
				events: function () {
					return eventList
				}
			}
		]
        
	}


	// filter to only room specified
	function filterTheRoom(event) {
		eventList = event.detail.filteredData

		ec.refetchEvents()
	}

	// filter to only professor specified
	function filterTheProfessor(event) {
		eventList = event.detail.filteredData

		ec.refetchEvents()
	}

	// filter to only courseID specified
	function filterTheCourseID(event) {
		eventList = event.detail.filteredData

		ec.refetchEvents()
	}

	// filter to only course specified
	function filterTheCourse(event) {
		eventList = event.detail.filteredData

		ec.refetchEvents()
	}

	// filter to only section specified
	function filterTheSection(event) {
		eventList = event.detail.filteredData

		ec.refetchEvents()
	}

	// function that resets the calendar to the original state
	function resetCalendar() {
		
	}
</script>


<div class="md:flex md:justify-between">
	<div class="md:basis-4/12">
		<h1 class="font-bold text-2xl mb-10 mt-4 text-center">Academic Scheduling Aid</h1>
		<Filter 
		on:filterRoom={filterTheRoom} 
		on:filterProfessor={filterTheProfessor} 
		on:filterCourseID={filterTheCourseID}
		on:filterCourse={filterTheCourse}
		on:filterSection={filterTheSection}
		/>
		<button class="py-2 w-full rounded-md mt-4 resetCDR" on:click={resetCalendar}>Reset Calendar</button>
	</div>
	
	<div class="md:basis-8/12 md:ml-4">
		<Calendar bind:this={ec} {plugins} {options} />
	</div>
</div>



<style>
.resetCDR {
	border: 1px solid red;
	color: red;
}
.resetCDR:hover {
	background: red;
	color: white;
}
</style>



	
<!-- /* [{
    id: "1505",
    title: { html: "<p>DAGV 1300-001</p><p>Animation Essentials</p><p>MW 9am-9:50am</p>" },
    extendedProps: { building_room: "CS 502" },
    start: "2024-01-08T09:00:00",
    end: "2024-01-08T09:50:00"
}] */ -->