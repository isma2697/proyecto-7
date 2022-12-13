
class formulario {
    constructor() {
        this.xname = /^[A-Z][a-z]+$/;
        this.xsurname = /^[A-Z][a-z]+(\s[A-Z][a-z]+){1,2}$/;
        this.xidcard = /^[0-9]{8}[A-Z]$/;
        this.xdate = /^([0-2][0-9]|3[0-1])\/(0[0-9]|1[0-2])\/(19|20)[0-9]{2}$/;
        this.xpostalcode = /^[0-9]{5}$/;
        this.xemail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        this.xtelephone = /^[0-9]{9}$/;
        this.xmobile = /^[0-9]{9}$/;
        this.xiban = /^[A-Z]{2}[0-9]{22}$/;
        this.xcreditcard = /^[0-9]{16}$/;
        /* A regular expression that checks if the password has at least one lowercase letter, one
        uppercase letter, one number, one special character and is at least 12 characters long. */
        this.xpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{12,}$/;
        this.xrepeatpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{12,}$/;
        this.inputs = document.querySelectorAll('input');


        this.inputs.forEach((input) => {
            input.addEventListener('keyup', (e) => {
                console.log(e.target.value)
                if (e.target.name == "name") {
                    this.validate(e.target, this.xname)
                    //cambiar de color el input

                };
                if (e.target.name == "surname") {
                    this.validate(e.target, this.xsurname)
                };
                if (e.target.name == "idcard") {
                    this.validate(e.target, this.xidcard)
                };
                if (e.target.name == "date") {
                    this.validate(e.target, this.xdate)
                };
                if (e.target.name == "postalcode") {
                    this.validate(e.target, this.xpostalcode)
                };
                if (e.target.name == "email") {
                    this.validate(e.target, this.xemail)
                };
                if (e.target.name == "telephone") {
                    this.validate(e.target, this.xtelephone)
                };
                if (e.target.name == "mobile") {
                    this.validate(e.target, this.xmobile)
                };
                if (e.target.name == "iban") {
                    this.validate(e.target, this.xiban)
                };
                if (e.target.name == "creditcard") {
                    this.validate(e.target, this.xcreditcard)
                };
                if (e.target.name == "password") {
                    this.validate(e.target, this.xpassword)
                };
                if (e.target.name == "password2") {
                    this.validate(e.target, this.xrepeatpassword)
                };
            });
        });
    }

    init() {
        this.validate();
    }



    validate(field, regex) {
        if (regex.test(field.value)) {
            console.log(field);
            field.classList.remove('is-invalid');
            field.classList.add('is-valid');
        } else {
            field.classList.remove('is-valid');
            field.classList.add('is-invalid');
        }
    }



}
const form = new formulario();
form.init();





