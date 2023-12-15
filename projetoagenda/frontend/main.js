import "core-js/stable";
import "regenerator-runtime/runtime";

import Login from "./modules/Login";
import Contato from "./modules/Contato";

const login = new Login(".form-login");
const register = new Login(".form-register");

const contato = new Contato(".form-contato");

login.init();
register.init();

contato.init();