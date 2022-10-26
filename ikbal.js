function purchasingBook(book, percentageDiscount, percentageTax, stockbook, orderbook, credit) {
    let result = 0;
    const price = book.price;
    const discountAmount = price * (percentageDiscount / 100);
    const priceAfterDiscount = price - discountAmount;
    const taxAmount = priceAfterDiscount * (percentageTax / 100);
    const priceAfterTax = priceAfterDiscount + taxAmount;
    let totalBooksPrice = 0;
    let totalPriceAfterDiscount = 0;
    let totalTax = 0;
    let totalPaymentPrice = 0;

    for (let index = 0; index < orderbook; index++) {
        if (book && book.price && index < stockbook) {
            totalPriceAfterDiscount += priceAfterDiscount;
            totalBooksPrice += book.price;
            totalTax += taxAmount;
        } else {
            console.log("Stock Habis!");
            break;
        }
    }
    totalPriceToPay = totalPriceAfterDiscount + totalTax;


    if (book && book.price && orderbook <= stockbook) {
        console.group();
        console.log("Judul Buku                       : ", book.title);
        console.log("Harga Satuan                     : ", price);
        console.log("Jumlah yang dibeli               : ", orderbook);
        console.log("Persentase diskon                : ", percentageDiscount, "%");
        console.log("Biaya setelah diskon             : ", priceAfterDiscount);
        console.log("Persentase PPN                   : ", percentageTax, "%");
        console.log("Biaya PPN                        : ", taxAmount);
        console.log("Total pembayaran                 : ", priceAfterTax);
        console.log("Sisa Stok buku                   : ", stockbook - orderbook);
        if (stockbook - orderbook == 0) {
            console.log("Stok Buku Habis silahkan menunggu Restocki");
        } else {
            console.log("Stok Buku ada silahkan membeli");
        }
        console.log("");
        console.log("Anda melakukan cicilan sebanyak ", credit, " kali");
        console.groupEnd();
    }
    jatuhTempo = totalPaymentPrice / credit;
    bayarAngsuran = [];
    for (let index = 0; index < credit; index++) {
        bayarAngsuran.push({
            Angsuran_Bulan_Ke: index + 1,
            Rp: jatuhTempo
        })
    }
    console.log(Array.from(bayarAngsuran));
    return totalPriceToPay;
}

purchasingBook({ title: "JS Ikbal", price: 100000, status: true }, 20, 10, 10, 9, 7);