function numberOneTriangle(num) {
    if(num < 1 || num > 10) {
        document.write("Vui lòng nhập số từ 1 đến 10!");
    } else {
        for(var i = 1; i <= num; i++) {
            for(var j = 1; j <= i; j++) {
                document.write("* ");
            }
            document.write("<br>");
        }
    }
}