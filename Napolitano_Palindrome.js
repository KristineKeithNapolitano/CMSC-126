function Palindrome(){
	var s, i, low, split, reversed, joined, clean, result;

	s= document.getElementById("str").value;
    low = s.toLocaleLowerCase();
    clean= low.toLocaleLowerCase().replace(/[\W_]/g,'');
    split = clean.split("");
    reversed = split.reverse();
    joined = reversed.join("");
    result = clean.localeCompare(joined);

    if(result==0){
        document.getElementById("ouput").innerHTML="Palindrome";
    }
    else{
        document.getElementById("ouput").innerHTML="Not Palindrome";
    }
}