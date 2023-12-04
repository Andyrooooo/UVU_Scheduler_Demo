<script>
	import Calendar from './calendar/+page.svelte'
	import AddClass from './addClass/+page.svelte'
	import ImportCSV from './importCSV/+page.svelte'

	// function handleMessage(event) {
	// 	alert(event.detail.text)
	// }

	let addClassModal = false
	let importCSVModal = false

	function toggleModal() {
		addClassModal = !addClassModal
	}

	function toggleImportModal() {
		importCSVModal = !importCSVModal
	}

	// async function grabServerMessage() {
    // const res = await fetch('http://localhost:5174');
	// const data = await res.text();
	// console.log(data);
  	// }


</script>


<div class="p-4 bg-gray-100 static">
	{#if addClassModal}
		<div class="addClassModal absolute right-4 left-4">
			<AddClass on:closeModal={toggleModal}/>
		</div>
	{/if}

	{#if importCSVModal}
		<div class="importCSVModal absolute top-4 left-4 right-4">
			<ImportCSV on:closeCSVModal={toggleImportModal} />
		</div>
	{/if}

	<div>
		<div class="flex justify-center md:justify-end">
			<!-- <button on:click={grabServerMessage}>fetch API</button> -->
			<button class="fa-solid fa-upload upload float-center mr-8" on:click={toggleImportModal}></button>
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
	.upload {
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
		z-index: 101;
	}
	.importCSVModal {
		z-index: 100;
	}
</style>