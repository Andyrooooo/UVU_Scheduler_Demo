<script>
	import Calendar from './calendar/+page.svelte'

	import AddClass from './addClass/+page.svelte'

	// function handleMessage(event) {
	// 	alert(event.detail.text)
	// }

	let addClassModal = false

	function toggleModal() {
		addClassModal = !addClassModal
	}


</script>


<div class="p-4 bg-gray-100">
	{#if addClassModal}
		<div class="addClassModal my-4 ml-0 mr-1">
			<AddClass on:closeModal={toggleModal}/>
		</div>
	{/if}

	<div>
		<div class="flex justify-center md:justify-end">
			<button class="fa-solid fa-plus plus float-center mr-8" on:click={toggleModal}></button>
			<button class="fa-solid fa-print printer float-center"></button>
			<button class="fa-solid fa-file-export export float-center"></button>
		</div>
		
		<div class="calendar">
			<Calendar/>
		</div>
	</div>
</div>



<style>
	.plus {
		font-size: 1.5rem;
		color:white;
		background: #275D38;
		padding: .25rem .35rem;
		border-radius: 16px;
	}
	.printer {
		font-size: 2rem;
		color:#275D38;
		margin-right: 2rem;
	}
	.export {
		color: #275D38;
		font-size: 2rem;
	}
	/* .calendarComponent {
		float: right;
	} */
	/* .calendar {
		max-height: 100vh;
	} */
	.addClassModal {
		position: absolute;
		z-index: 100;
		top: 0;
	}
</style>