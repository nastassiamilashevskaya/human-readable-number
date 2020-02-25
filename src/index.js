module.exports = function toReadable (number) {
let titles = ['zero','one','two','three','four','five','six','seven','eight','nine',
'ten','eleven','twelve'];
let dozensTitles = ['twen','thir','for','fif','six','seven','eigh','nine'];
let result;

if (number <= 12){
    result = titles[number];
}    

if (number > 12 && number < 20){
    if (number == 14) {
        result = 'fourteen';
    } else {
    result = dozensTitles[number % 10 - 2] + 'teen';
    }
}

if (number >=20 && number <= 99){
    if (number % 10 == 0){
        result = dozensTitles[number / 10 - 2] + 'ty';
    } else {
        result = dozensTitles[((number - number % 10) / 10) - 2] + 'ty' + ' ' + titles[number % 10];
    }
}

if (number >= 100 && number <= 999){
    if (number % 100 == 0){
        result = titles[number / 100] + ' ' + 'hundred';
    } else {
        result = titles[(number - number % 100) / 100] + ' ' + 'hundred';
        let lastTwo = number % 100;
        if (lastTwo <= 12){
            result += ' ' + titles[lastTwo];
        } else           
        if (lastTwo > 12 && lastTwo < 20){
            if (lastTwo == 14) {
                result += ' fourteen';
            } else {        
            result += ' ' + dozensTitles[lastTwo % 10 - 2] + 'teen';
            }
        }  else      
        if (lastTwo % 10 == 0){
            result += ' ' + dozensTitles[lastTwo / 10 - 2] + 'ty';
        } else {
            result += ' ' + dozensTitles[((lastTwo - lastTwo % 10) / 10) - 2] + 'ty' + ' ' + titles[lastTwo % 10];
        }
    }
}

return result;
}
