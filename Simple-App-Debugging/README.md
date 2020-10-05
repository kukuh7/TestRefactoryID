# vue-test-code

## Yang diperbaiki
```
.catch((error) => { //kondisi awal, error di deklarsikan tapi tidak digunakan.
  (this.loading = false)
  .console.log(error) //saya tambahkan .console.log(error) sehingga pesan error "error unused" di muncul lagi.
  });
```
