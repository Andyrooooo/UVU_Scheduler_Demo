<script>
    import { createEventDispatcher } from 'svelte'
    // import { convertCSV2JSON } from '../../scripts/convertCSV2JSON.ts' 

    const dispatch = createEventDispatcher()
    let selectedFile = {}
    let emptyFile = true
    let existingfile = false
    
    function closeCSVModal() {
        dispatch('closeCSVModal')
    }

    function openFiles() {
        // creates an input element to trigger the file picker that also triggers the handleFileChange function
        const input = document.createElement('input')
        input.type = 'file'
        input.onchange = handleFileChange
        input.click()
    }

    function handleFileChange(event) {
        // we take the selectedFile variable and set it to the first file in the event target
        selectedFile = event.target.files[0] // || {}
        // switches the shown text to the file name
        emptyFile = false
        existingfile = true
        // console.log('selected file:', selectedFile)
        // selectedFile = {...selectedFile}
       
    }

        
    async function insertFileToFilters() {
        if (selectedFile.name.toLowerCase().endsWith('.csv')  || 
            selectedFile.name.toLowerCase().endsWith('.xlsx')) {
            const formData = new FormData()
            formData.append('file', selectedFile)

            fetch('http://localhost:5174/convert', {
                method: 'POST',
                body: formData
            })
            
            console.log(selectedFile)
            
        } else {
            console.error('Invalid file format. Please select a CSV file.');
        }

        // const res = await fetch('http://localhost:5174');
        // const data = await res.text();
        // console.log(data);
        
        emptyFile = true
        selectedFile = {}

        dispatch('closeCSVModal')
    }
    
</script>


<!-- <input class="importBTN w-full rounded-md py-2 mb-4 text-center" type="file" on:change={handleFileChange}/> -->

<div class="importCSVComponent p-4 bg-white rounded-md shadow-lg">
    <h1 class="text-4xl import text-center">Import Data from CSV</h1>

    <div class="my-56 flex-col">
        <div class="flex justify-center">
            <button class="fa-solid fa-upload upload text-4xl text-center p-6" on:click={openFiles}></button>
        </div>
        <div class="flex justify-center mt-4">
            {#if emptyFile}
                <p class="font-bold">Click to upload CSV file</p>
            {:else if 
            /* If the file contains a CSV file or a xlsx file it will display */
            existingfile && selectedFile.name.toLowerCase().endsWith('.csv') || 
            selectedFile.name.toLowerCase().endsWith('.xlsx')
            }
                <p class="filename font-bold">{selectedFile.name}</p>
            {:else if existingfile}
                <p class="font-bold text-red-600">Unable to process this type of file</p>
            {/if}
        </div>
    </div>

    <div class="flex justify-end">
        <button class="cancelBTN text-white px-10 py-2 rounded-md mr-6" on:click={closeCSVModal}>Cancel</button>
        <button class="uploadBTN text-white px-10 py-2 rounded-md" on:click={insertFileToFilters}>Import</button>
    </div>

    <!-- <button on:click={closeCSVModal}>Close</button> -->
</div>

<style>
    .filename {
        color: #275D38;
    }
    .importCSVComponent {
        border: 1px solid #275D38;
    }
    .upload {
        color: #275D38;
        border-radius: 60px;
        border: 2px solid #275D38;
    }
    .uploadBTN {
        background: #275D38;
    }
    .cancelBTN {
        border: 2px solid #275D38;
        color: #275D38;
    }
</style>