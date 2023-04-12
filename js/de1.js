function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function showResult() {
    var start = parseInt(document.getElementById("start").value);
    var end = parseInt(document.getElementById("end").value);
    var sum = 0;
    for (var i = start; i <= end; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    document.getElementById("result").innerHTML = "Tổng số nguyên tố trong khoảng từ " + start + " đến " + end + " là: " + sum;
}