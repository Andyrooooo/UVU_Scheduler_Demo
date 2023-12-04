<script>
    import { createEventDispatcher } from 'svelte'
    let dispatch = createEventDispatcher()

    function openCSVModal() {
        dispatch('openCSVModal')
    }
</script>


<button class="importBTN w-full rounded-md py-2 mb-4 text-center" on:click={openCSVModal}>Import CSV</button>
<!-- <button class="importBTN w-full rounded-md py-2 mb-4 text-center">Import CSV</button> -->

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
