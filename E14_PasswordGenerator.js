function changeVocals (str) {
    
    var kamus = 'abcdefghijklmnopqrstuvwxyz';
    var ubahVocal = '';

    for (var i = 0; i < str.length; i++)
    {
        for (var j = 0; j < kamus.length; j++)
        {
            if (str[i] == kamus[j])
            {
                if (str[i] == 'a' || str[i] == 'i' || str[i] == 'u' || str[i] == 'e' || str[i] == 'o')
                {
                    ubahVocal += kamus[j+1];
                }
                else
                {
                    ubahVocal += kamus[j];
                }
            }
            else if (str[i] == kamus[j].toUpperCase())
            {
                if (str[i].toUpperCase() == 'A' || str[i].toUpperCase() == 'I' || str[i].toUpperCase() == 'U' || str[i].toUpperCase() == 'E' || str[i].toUpperCase() == 'O')
                {
                    ubahVocal += kamus[j+1].toUpperCase();
                }
                else 
                {
                    ubahVocal += kamus[j].toUpperCase();
                }
            }
        }
    }
    return ubahVocal;
}    
  
  function reverseWord (str) {
    
    var newWord = '';
    for (var i = str.length-1; i >= 0; i--)
    {
        newWord += str[i];
    }
    return newWord;
  }
  

  function setLowerUpperCase (str) {
    
    var ubahCase = '';
    var upperCase = '';
    var lowerCase = '';
    for (var i = 0; i < str.length; i++)
    {
        upperCase = str[i].toUpperCase();
        lowerCase = str[i].toLowerCase();

        if (str[i] == upperCase){
            ubahCase += lowerCase;
        }
        else if (str[i] == lowerCase){
            ubahCase += upperCase;
        }
    }
    return ubahCase;
  }
  
  function removeSpaces (str) {
    
    var spaceHilang = '';
    for (var i = 0; i < str.length; i++)
    {
        if (str[i] !== ' '){
            spaceHilang += str[i];
        }
    }
    return spaceHilang;
  }
  
  function passwordGenerator (name) {

    // Untuk kondisi yg jumlah karakternya dibawah 5
    if (name.length < 5)
    {
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }

    // Fungsi password generatornya
    var ubahVocal = changeVocals(name);
    var newWord = reverseWord(ubahVocal);
    var ubahCase = setLowerUpperCase(newWord);
    var spaceHilang = removeSpaces (ubahCase);

    return spaceHilang;
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'