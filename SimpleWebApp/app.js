var app = new Vue({
    el: '#app',
    data: {
        text: '',
        pesan: '',
    },
    methods: {
        undo() {
           
        },
        redo() {

        },
        reverse() {
            return this.pesan = this.text;
        }
    }
})