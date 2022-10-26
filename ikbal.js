function purchasingBook(book, percentageDiscount, percentageTax, stockbook, orderbook) {
    let result = 0;

    if (book && book.price) {
        const price = book.price;
        const discountAmount = price * (percentageDiscount / 100);
        const priceAfterDiscount = price - discountAmount;
        const taxAmount = priceAfterDiscount * (percentageTax / 100);
        const priceAfterTax = priceAfterDiscount + taxAmount;


        console.group();
        console.log("Judul Buku : ", book.title);
        console.log("Harga Buku : ", price);
        console.log("Persentase diskon : ", percentageDiscount, "%");
        console.log("Biaya setelah diskon : ", priceAfterDiscount);
        console.log("Persentase PPN : ", percentageTax, "%");
        console.log("Biaya PPN : ", taxAmount);
        console.log("Total pembayaran : ", priceAfterTax);
        console.groupEnd();
    }

    return 0;
}

purchasingBook({ title: "JS Ikbal", price: 100000, status: true }, 20, 10);