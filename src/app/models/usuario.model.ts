export class UsuarioModel {
    constructor(
        public id: string,
        public name: string,
        public surname: string,
        public username: string,
        public password: string,
        public email: string,
        public role: string,
    ) { }
}