var x = 99;
var i = 0;
var xbottle = ''
var mylyrics =''
while (i < 99) {
    if (x > 1) {
       mylyrics = mylyrics + '<br>' + x + ' bottles of beer on the wall, ' + x + ' bottles of beer.' + '<br>' + 'Take one down and pass it around,'
    + (x-1) + ' bottles of beer on the wall.' + '<br>';
   }
   else if (x = 1) {
    mylyrics = mylyrics + '<br>' + x + ' bottle of beer on the wall, ' + x + ' bottle of beer.' + '<br>' + 'Take one down and pass it around,'
   + ' no more bottles of beer on the wall.' + '<br>';

   }
   
   else {
    mylyrics = mylyrics + "<br>" + 'No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.';
   }
    x --;
    i ++;
}


document.getElementById('mylyrics').innerHTML = mylyrics;

