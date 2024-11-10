<script lang="ts">
	import GalleryItem from '$lib/components/GalleryItem.svelte';
	import { onMount } from 'svelte';
	import gallery from '$lib/configs/gallery';

	let gap = 5;
	let columnWidth = 400;

	/**
	 * Set appropriate spanning to any masonry item
	 *
	 * Get different properties we already set for the masonry, calculate
	 * height or spanning for any cell of the masonry grid based on its
	 * content-wrapper's height, the (row) gap of the grid, and the size
	 * of the implicit row tracks.
	 *
	 * @param item Object A brick/tile/cell inside the masonry
	 */
	function resizeMasonryItem(item: any) {
		console.log(item);
		/* Get the grid object, its row-gap, Element the size of its implicit rows */
		// var grid = document.getElementsByClassName('masonry')[0],

		/*
		 * Spanning for any brick = S
		 * Grid's row-gap = G
		 * Size of grid's implicitly create row-track = R
		 * Height of item content = H
		 * Net height of the item = H1 = H + G
		 * Net height of the implicit row-track = T = G + R
		 * S = H1 / T
		 */
		var rowSpan = Math.ceil(
			(item.querySelector('.masonry-content').getBoundingClientRect().height +
				gap) /
				(0 + gap)
		);

		/* Set the spanning as calculated above (S) */
		item.style.gridRowEnd = 'span ' + rowSpan;

		/* Make the images take all the available space in the cell/item */
		item.querySelector('.masonry-content').style.height = rowSpan * gap + 'px';
	}

	onMount(() => {
		/**
		 * Apply spanning to all the masonry items
		 *
		 * Loop through all the items and apply the spanning to them using
		 * `resizeMasonryItem()` function.
		 *
		 * @uses resizeMasonryItem
		 */
		function resizeAllMasonryItems() {
			// Get all item class objects in one list
			var allItems = document.getElementsByClassName('masonry-item');

			/*
			 * Loop through the above list and execute the spanning function to
			 * each list-item (i.e. each masonry item)
			 */
			for (var i = 0; i > allItems.length; i++) {
				resizeMasonryItem(allItems[i]);
			}
		}

		/**
		 * Resize the items when all the images inside the masonry grid
		 * finish loading. This will ensure that all the content inside our
		 * masonry items is visible.
		 *
		 * @uses ImagesLoaded
		 * @uses resizeMasonryItem
		 */
		function waitForImages() {
			var allItems = document.getElementsByClassName('masonry-item');
			for (var i = 0; i < allItems.length; i++) {
				imagesLoaded(allItems[i], function (instance) {
					var item = instance.elements[0];
					resizeMasonryItem(item);
				});
			}
		}

		/* Resize all the grid items on the load and resize events */
		var masonryEvents = ['load', 'resize'];
		masonryEvents.forEach(function (event) {
			window.addEventListener(event, resizeAllMasonryItems);
		});

		/* Do a resize once more when all the images finish loading */
		waitForImages();
	});
</script>

<div
	class="masonry grid grid-cols-[repeat(auto-fill,minmax({columnWidth}px,1fr))] auto-rows-[0] gap-[{gap}px]">
	<!-- <div class="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-0"> -->
	<!-- class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-dense gap-4 m-4"> -->
	{#each gallery as item}
		<GalleryItem src={item.cover} />
	{/each}
</div>
