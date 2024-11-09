<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
</script>

<nav class="bg-black">
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="relative flex h-28 items-center justify-between">
			<div
				class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
				<div class="flex shrink-0 items-center">
					<a href="/">
						<h1
							class="text-5xl font-bold font-heading tracking-widest text-white">
							DANIELLE ROMAINE
						</h1>
					</a>
				</div>
			</div>
			<div
				class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
				<!-- Profile dropdown -->
				<div class="hidden sm:ml-6 sm:block">
					<div class="flex space-x-4 font-body tracking-wide">
						<a
							href="/gallery"
							class="rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
							class:bg-gray-900={$page.url.pathname === '/gallery'}>
							Gallery
						</a>
						<a
							href="/exhibitions"
							class="rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
							class:bg-gray-900={$page.url.pathname === '/exhibitions'}>
							Exhibitions
						</a>
						<a
							href="/about"
							class="rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
							class:bg-gray-900={$page.url.pathname === '/about'}>
							About
						</a>
						<a
							href="/"
							class="rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
							class:bg-gray-900={$page.url.pathname === '/contact'}>
							Contact
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	<div class="sm:hidden" id="mobile-menu">
		<div class="space-y-1 px-2 pb-3 pt-2">
			<a
				href="/"
				class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
				aria-current="page">
				Gallery
			</a>
			<a
				href="/"
				class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
				Exhibitions
			</a>
			<a
				href="/"
				class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
				About
			</a>
			<a
				href="/"
				class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
				Contact
			</a>
		</div>
	</div>
</nav>
<slot></slot>

<style>
	a {
		position: relative;
		transition: all 0.4s;
	}
	a::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		bottom: -2px;
		left: 0;
		background-color: var(--text-color);
		-webkit-transform: scaleX(0);
		transform: scaleX(0);
		transition: all 0.2s;
	}
	a.active::before {
		visibility: visible;
		-webkit-transform: scaleX(1);
		transform: scaleX(1);
	}
</style>
