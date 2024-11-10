<script lang="ts">
	import type { Work } from '$lib/configs/works';

	export let item: Work;
</script>

<div class="masonry-item">
	<img class="masonry-content p-2 rounded-2xl" src={item.cover} alt="" />
</div>

<style>
	img {
		opacity: 0;
		transition: opacity 0.4s;
	}
</style>
