

function convertAmountToWords(num) {
    console.log('hit in convertAmountToWords',num)
    let a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    let b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

// function inWords (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; let str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
    console.log('return number in words',str)
    return str;
// }

}

module.exports = {
    convertAmountToWords
}






// const translate2 = (n) => {
//     let word = "";
//     if (n < 10) {
//         word = single_digit[n] + ' ';
//     } else if (n < 20) {
//         word = double_digit[n - 10] + ' ';
//     } else if (n < 100) {
//         let rem = translate(n % 10);
//         word = below_hundred[(n - n % 10) / 10 - 2] + ' ' + rem;
//     } else if (n < 1000) {
//         word = single_digit[Math.trunc(n / 100)] + ' Hundred ' + translate2(n % 100);
//     } else if (n < 1000000) {
//         word = translate2(parseInt(n / 1000)).trim() + ' Thousand ' + translate2(n % 1000);
//     } else if (n < 1000000000) {
//         word = translate2(parseInt(n / 1000000)).trim() + ' Million ' + translate2(n % 1000000);
//     } else {
//         word = translate2(parseInt(n / 1000000000)).trim() + ' Billion ' + translate2(n % 1000000000);
//     }
//     return word;
// }

 // if (n < 0)
    //     return false;
    
    // // Arrays to hold words for single-digit, double-digit, and below-hundred numbers
    // single_digit = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
    // double_digit = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
    // below_hundred = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
    
    // if (n === 0) return 'Zero';
    
    // // Recursive function to translate the number into words
    // function translate(n) {
    //     let word = "";
    //     if (n < 10) {
    //         word = single_digit[n] + ' ';
    //     } else if (n < 20) {
    //         word = double_digit[n - 10] + ' ';
    //     } else if (n < 100) {
    //         let rem = translate(n % 10);
    //         word = below_hundred[(n - n % 10) / 10 - 2] + ' ' + rem;
    //     } else if (n < 1000) {
    //         word = single_digit[Math.trunc(n / 100)] + ' Hundred ' + translate(n % 100);
    //     } else if (n < 1000000) {
    //         word = translate(parseInt(n / 1000)).trim() + ' Thousand ' + translate(n % 1000);
    //     } else if (n < 1000000000) {
    //         word = translate(parseInt(n / 1000000)).trim() + ' Million ' + translate(n % 1000000);
    //     } else {
    //         word = translate(parseInt(n / 1000000000)).trim() + ' Billion ' + translate(n % 1000000000);
    //     }
    //     return word;
    // }
    
    // // Get the result by translating the given number
    // let result = translate(n);
    // return result.trim() + '.';











    // Helper function to convert a number to words
    // function numberToWords(num) {
    //     const units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    //     const teens = ["", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    //     const tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    //     const thousands = ["", "Thousand", "Million", "Billion", "Trillion"];

    //     if (num === 0) return "Zero";

    //     let word = "";

    //     function convertToWords(n, idx) {
    //         if (n === 0) return "";

    //         let str = "";

    //         if (n < 10) {
    //             str = units[n];
    //         } else if (n < 20) {
    //             str = teens[n - 10];
    //         } else if (n < 100) {
    //             str = tens[Math.floor(n / 10)];
    //             if (n % 10 > 0) str += "-" + units[n % 10];
    //         } else {
    //             str = units[Math.floor(n / 100)] + " Hundred";
    //             if (n % 100 > 0) str += " and " + convertToWords(n % 100, 0);
    //         }

    //         if (idx > 0 && str !== "") str += " " + thousands[idx];
    //         return str;
    //     }
    //     return convertToWords(num)
    // }
    // return numberToWords(amount)