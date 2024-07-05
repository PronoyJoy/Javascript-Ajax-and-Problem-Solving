const stringUtils = {
    reverse: function(str) {
      // ... implementation to reverse string ...
      let str1 =""
      for(i=str.length-1;i >=0;i--){
        str1 += str[i]
      }
      return str1 
    },
    capitalize: function(str) {
      // ... implementation to capitalize string ...
      let str2 =''
      for(let i=0;i<str.length;i++){
        str2 += (str[i]).toUpperCase()
      }
      return str2;
    },
    truncate: function(str, maxLength) {
      // ... implementation to truncate string ... 
      j = 0 
      let str3= ""
      
      for(i=0;i<)

    }
    // ... more utility functions ...
  };

console.log(stringUtils.reverse('joy')),
console.log(stringUtils.capitalize('joy'))