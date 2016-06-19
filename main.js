const fillIn = (x,y) => {
	let cell = document.getElementById('table').rows[x].cells[y];
	let turn = document.getElementById('turn');
	if(cell.innerHTML === '') {
		cell.innerHTML = turn.innerHTML;
		if(checkForWin()) {
			winner(cell.innerHTML);
		} else {
			if(checkAllFull()) {
				winner('Nobody')
			}
		}
		turn.innerHTML = turn.innerHTML === 'x' ? 'o' : 'x';
	}
};

const checkForWin = () => {
	let table = document.getElementById('table')
	for(let i = 0; i < 3; i++) {
		let row = table.rows[i];
		if(row.cells[0].innerHTML != '' && row.cells[0].innerHTML === row.cells[1].innerHTML){
			if(row.cells[1].innerHTML === row.cells[2].innerHTML) {
				return true;
			}
		}
		if(table.rows[0].cells[i].innerHTML != '' && table.rows[0].cells[i].innerHTML === table.rows[1].cells[i].innerHTML) {
			if(table.rows[1].cells[i].innerHTML === table.rows[2].cells[i].innerHTML) {
				return true;
			}
		}
	}
	if(table.rows[0].cells[0].innerHTML != '' && table.rows[0].cells[0].innerHTML === table.rows[1].cells[1].innerHTML) {
		if(table.rows[1].cells[1].innerHTML === table.rows[2].cells[2].innerHTML) {
			return true;
		}
	}
	if(table.rows[0].cells[2].innerHTML != '' && table.rows[0].cells[2].innerHTML === table.rows[1].cells[1].innerHTML) {
		if(table.rows[1].cells[1].innerHTML === table.rows[2].cells[0].innerHTML) {
			return true;
		}
	}
}

const checkAllFull = () => {
	for(let i = 0; i < 3; i++) {
		for(let j = 0; j < 3; j++) {
			if(document.getElementById('table').rows[i].cells[j].innerHTML === ''){
				return false
			};
		};
	};
	return true
}

const winner = (player) => {
	document.getElementById('turn-heading').innerHTML = `${player} wins!!`
	document.getElementById('reset').style.display = 'block';
}

const reset = () => {
	for(let i = 0; i < 3; i++) {
		for(let j = 0; j < 3; j++) {
			document.getElementById('table').rows[i].cells[j].innerHTML = '';
		};
	};
	document.getElementById('turn-heading').innerHTML = "<span id='turn'>x</span>'s Turn";
	document.getElementById('reset').style.display = 'none';
}




