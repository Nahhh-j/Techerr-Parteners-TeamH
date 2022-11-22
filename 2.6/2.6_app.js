const player = {
  name: 'nico',
  points: 10,
  fat: true,
};

console.log(player);
console.log(player.name);
console.log(player['name']);
player.fat = false;
player.lastname = 'potato';
player.points = player.points + 5;
