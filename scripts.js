var songs = [];

songs[songs.length] = "Legs - by ZZTop on the album Eliminator";
songs[songs.length] = "The Logical Song - by Supertramp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall - by Pink Floyd on the album The Wall";
songs[songs.length] = "Welcome to the Jungle - by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironic - by Alanis Moris*ette on the album Jagged Little Pill";

document.getElementById("songName").innerHTML = songs.shift();
document.getElementById("songName1").innerHTML = songs.shift();
document.getElementById("songName2").innerHTML = songs.shift();
document.getElementById("songName3").innerHTML = songs.shift();
document.getElementById("songName4").innerHTML = songs.shift();