<script lang="ts">
	import GalleryItem from '$lib/components/GalleryItem.svelte';
	import { onMount } from 'svelte';
	import gallery from '$lib/configs/gallery';
	import imagesLoaded from 'imagesloaded';

	let gap = 5;

	onMount(() => {
		function resizeMasonryItem(item: any) {
			const content = item.querySelector('.masonry-content');
			var rowSpan = Math.ceil(
				(content.getBoundingClientRect().height + gap) / gap
			);
			item.style.gridRowEnd = 'span ' + rowSpan;
			content.style.height = rowSpan * gap + 'px';
			content.style.opacity = '1';
		}

		function resizeAllMasonryItems() {
			var allItems = document.getElementsByClassName('masonry-item');
			for (var i = 0; i > allItems.length; i++) {
				resizeMasonryItem(allItems[i]);
			}
		}

		function waitForImages() {
			var allItems = document.getElementsByClassName('masonry-item');
			for (var i = 0; i < allItems.length; i++)
				imagesLoaded(allItems[i], (instance: any) =>
					resizeMasonryItem(instance.elements[0])
				);
		}

		window.addEventListener('resize', resizeAllMasonryItems);
		waitForImages();
	});
</script>

<div class="masonry grid" style="grid-gap: {gap}px">
	{#each gallery as item}
		<GalleryItem {item} />
	{/each}
</div>

<style>
	.masonry {
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		grid-auto-rows: 0;
	}
</style>
