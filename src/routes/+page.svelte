<script>
    import '$lib/st.css'
    import cica from '$lib/cica.jpg'
    let a = 0
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<img id="cica" on:click={() => a++} src={cica} alt="">
<br>
{a}