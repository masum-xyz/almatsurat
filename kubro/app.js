const isiAlmatsurat = document.getElementById('panel-isi');
const isiList = document.getElementsByClassName('list');

axios
	.get('almatsurat.json')
	.then(res => {
		console.log(res.data[0].dzikr_list);
		for (let i = 0; i < res.data.length; i++) {
			let isi = `
            <div class="isi" id="isi">
            <div class="nama">
                <h5 class=" " id="nama">${res.data[i].dzikr_name}</h5>
            </div>
            `;

			for (j = 0; j < res.data[i].dzikr_list.length; j++) {
				let list = res.data[i].dzikr_list[j];
				console.log(list);
				isi += `
				<div class="list">
                	<p id="note">${list.note}</p>
					<div class="arab">
						<p id="arab">${list.text}</p>
					</div>
                	<p id="translate">${list.trans}</p>
            	</div>`;
			}

			isi += `</div>`;
			isiAlmatsurat.innerHTML += isi;
		}
	})
	.catch(err => {
		console.log(err);
	});
