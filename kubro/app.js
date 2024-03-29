// saya ingin menghubungkan text html ke file json yang berada di "almatsurat.json" dengan axios
// saya menggunakan axios untuk menghubungkan file json ke text html
// saya menggunakan axios.get untuk mengambil data dari file json
// saya menggunakan .then untuk menampilkan data yang sudah diambil dari file json
// saya menggunakan .catch untuk menampilkan error jika data tidak bisa diambil

const isiAlmatsurat = document.getElementById('panel-isi');
const isiList = document.getElementsByClassName('list');
const nama = document.getElementById('nama');
const note = document.getElementById('note');
const arab = document.getElementById('arab');
const translate = document.getElementById('translate');

axios
	.get('almatsurat.json')
	.then(res => {
		// console.log(res.data[0]);
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
		// nama.innerHTML = res.data.dzikr_name;
		// note.innerHTML = res.data.dzikr_list.note;
		// arab.innerHTML = res.data.arab;
		// translate.innerHTML = res.data.trans;
	})
	.catch(err => {
		console.log(err);
	});
