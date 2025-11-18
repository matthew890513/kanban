<script lang="ts">
	// Datos iniciales de ejemplo
	let kits = [
		{
			fecha: '2025-01-12',
			destino: '7000',
			almacen: 'A1',
			actual: 'B1',
			matnr: 'MAT-001',
			piezas: 120
		},
		{
			fecha: '2025-01-14',
			destino: '7200',
			almacen: 'C3',
			actual: 'D2',
			matnr: 'MAT-055',
			piezas: 80
		},
		{
			fecha: '2025-01-18',
			destino: '7100',
			almacen: 'Z2',
			actual: 'K5',
			matnr: 'MAT-144',
			piezas: 250
		}
	];

	let showDialog = false;
	let search = '';

	// Inputs del formulario
	let fecha = '';
	let destino = '';
	let almacen = '';
	let actual = '';
	let matnr = '';
	let piezas = '';

	function openDialog() {
		showDialog = true;
	}

	function closeDialog() {
		showDialog = false;
		limpiarInputs();
	}

	function limpiarInputs() {
		fecha = destino = almacen = actual = matnr = piezas = '';
	}

	function agregarKit() {
		kits.push({ fecha, destino, almacen, actual, matnr, piezas });
		closeDialog();
	}

	// Filtro
	$: kitsFiltrados = kits.filter(
		(k) =>
			k.matnr.toLowerCase().includes(search.toLowerCase()) ||
			k.destino.includes(search) ||
			k.fecha.includes(search)
	);
</script>

<div class="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6">
	<!-- Título + Filtro + Botón -->
	<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
		<!-- Título -->
		<h1 class="text-2xl font-bold text-gray-800">Listado General de Kits</h1>

		<!-- Contenedor de búsqueda + botón (alineados al final) -->
		<div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:ml-auto">
			<!-- Campo de búsqueda -->
			<input
				type="text"
				placeholder="Buscar kit..."
				bind:value={search}
				class="border px-3 py-2 rounded-lg w-full sm:w-64"
			/>

			<!-- Botón Agregar -->
			<button
				class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold w-full sm:w-auto"
				on:click={openDialog}
			>
				Agregar Kit
			</button>
		</div>
	</div>

	<!-- Tabla responsive -->
	<div class="overflow-x-auto">
		<table class="min-w-full border border-gray-300 rounded-lg text-sm">
			<thead class="bg-gray-200 text-gray-700">
				<tr>
					<th class="p-2 border">Fecha</th>
					<th class="p-2 border">Destino</th>
					<th class="p-2 border">Alm.</th>
					<th class="p-2 border">Actual</th>
					<th class="p-2 border">Matnr</th>
					<th class="p-2 border">Piezas</th>
				</tr>
			</thead>

			<tbody>
				{#each kitsFiltrados as kit}
					<tr class="odd:bg-white even:bg-gray-50">
						<td class="p-2 border text-center">{kit.fecha}</td>
						<td class="p-2 border text-center">{kit.destino}</td>
						<td class="p-2 border text-center">{kit.almacen}</td>
						<td class="p-2 border text-center">{kit.actual}</td>
						<td class="p-2 border text-center">{kit.matnr}</td>
						<td class="p-2 border text-center">{kit.piezas}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<!-- Modal -->
{#if showDialog}
	<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
		<div class="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
			<h2 class="text-xl font-semibold mb-4 text-gray-800">Agregar Kit</h2>

			<div class="space-y-3">
				<input type="date" bind:value={fecha} class="w-full border p-2 rounded" />
				<input
					type="text"
					placeholder="Destino"
					bind:value={destino}
					class="w-full border p-2 rounded"
				/>
				<input
					type="text"
					placeholder="Almacén"
					bind:value={almacen}
					class="w-full border p-2 rounded"
				/>
				<input
					type="text"
					placeholder="Actual"
					bind:value={actual}
					class="w-full border p-2 rounded"
				/>
				<input
					type="text"
					placeholder="Matnr"
					bind:value={matnr}
					class="w-full border p-2 rounded"
				/>
				<input
					type="number"
					placeholder="Piezas"
					bind:value={piezas}
					class="w-full border p-2 rounded"
				/>
			</div>

			<div class="flex justify-end gap-3 mt-6">
				<button class="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400" on:click={closeDialog}>
					Cancelar
				</button>

				<button
					class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
					on:click={agregarKit}
				>
					Aceptar
				</button>
			</div>
		</div>
	</div>
{/if}
