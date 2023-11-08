<script>
    function handleFileChange(event) {
        let selectedFile = event.target.files[0]
        console.log('selected file:', selectedFile)
    
    }
</script>


<input class="importBTN w-full rounded-md py-2 mb-4 text-center" type="file" on:change={handleFileChange}/>

<style>
    .importBTN {
        border: 1px solid #275D38;
        color: #275D38;
    }
    .importBTN:hover {
        background: #275D38;
        color: white;
    }
</style>