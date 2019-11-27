function game(played)
{
	var ai = generate();
	var player = document.getElementById('player');
	var notplayer = document.getElementById('ai');
	
	player.innerHTML = "Játékos választása: ";
	player.innerHTML += decide(played);
	
	notplayer.innerHTML = "Számítógép választása: " + decide(ai);
	// 1 = kő   2 = papír   3 = olló
	
	var win = 0; // -1: draw  0: lose  1: win!!
	if(played == 1) {
		if(ai == 1)
			win = -1;
		else if(ai == 2)
			win = 0;
		else win = 1; }
	else if(played == 2) {
		if(ai == 1)
			win = 1;
		else if(ai == 2)
			win = -1;
		else win = 0; }
	else {
		if(ai == 1)
			win = 0;
		else if(ai == 2)
			win = 1;
		else win = -1; }
	
	if(win == 1)
		player.innerHTML += "NYERTES!";
	else if(win == 0)
		player.innerHTML += "Vesztes! :C";
	else {
		player.innerHTML += "\tDöntetlen!!";
		notplayer.innerHTML += "\tDöntetlen!!";
	}
}

function decide(played)
{
	var output = 0;
	if(played == 1)
		output = "Kő. ";
	else if(played == 2)
		output = "Papír. ";
	else if(played == 3)
		output = "Olló. ";
	return output;
}

function generate()
{
	var result = Math.floor(Math.random() * 3) + 1;
	
	return result;
}

/* Kő-papír-olló játék
	A játék szabálya az ismertek szerint.
	
	Kő: Legyőzi az ollót, de legyőzi őt a papír.
	Papír: Legyőzi a követ, de legyőzi őt az olló.
	Olló: Legyőzi a papírt, de legyőzi őt a kő.
	
	A játékos választ egy opciót. A számítógép is választ (generál) egy opciót, majd miután mindkettőnek meg van az eredménye, eldől hogy ki nyert.
	
*/