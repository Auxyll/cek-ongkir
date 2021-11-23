const buttonHitungOutfit = document.querySelector
('#buttonHitungOutfit');
buttonHitungOutfit.addEventListener('click', function() {
    const inputKelas = document.querySelector('#inputKelas').value;
    const inputKota = document.querySelector('#inputKota').value;
    const JumlahOuftit = document.querySelector('#jumlahOutfit').value;

    let price;
    if (inputkelas=='Reguler') {
        if (inputKota ='Bandung') {
            price = 22000;
        } else if (inputKota = 'Yogyakarta') {
            price = 18000;
        } else {
            price = 24000;
        }
    } else {
        if (inputKota = 'Bandung') {
            price = 32000;
        } else if (inputKota = 'Yogyakarta') {
            price = 28000;
        } else {
            price = 34000;
        }
    }

    const hargaAsli= price * jumlahOutfit;


    let discount;
    if (jumlahOutfit > 10) {
        discount = (hargaAsli * 5) /100
    } else {
        discount = 0;
    }

    const harga = document.querySelector('#harga');
    harga.innerHTML = '<p>Rp.${hargaAsli}</p>';

    const diskon = document.querySelector('#discount');
    diskon.innerHTML = '<p>Rp.${discount}</p>';

    const hargaTotal = hargaAsli - discount;
    const total = document.querySelector('#total');
    total.innerHTML = '<p>Rp.${hargaTotal}</p>';

})