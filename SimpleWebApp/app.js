var app = new Vue({
    el: '#app',
    data: {
        text: '',
        pesan: '',
    },
    methods: {
        undo() {
        // belum berfungsi
        },
        redo() {
        // belum berfungsi
        },
        reverse() {
            return this.pesan = this.text;
        }
    }
})