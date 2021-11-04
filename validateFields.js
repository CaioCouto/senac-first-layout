// const inputs = document.querySelectorAll(".form__input");
// const [nameInput, contatoInput, matriculaInput] = inputs; // destructuring

// Função anônima (arrow function)
const setInvalidClass = (label, isValid) => {
  const invalidClass = "form__nome-label--invalid";
  if (isValid) {
    label.classList.remove(invalidClass);
    return true;
  } else if (!label.classList.contains(invalidClass)) {
    label.classList.toggle(invalidClass);
    return false;
  }
};

function validateNome(nome) {
  /*+
   * Valida a informação inserida em nome-input.
   * Para ser válida, a informação deve contar apenas letras
   * e as palavras devem ser separadas apenas por 01 espaço
   * e conter, ao menos 03 caracteres.
   */
  const nameLabel = document.getElementById("name-label");
  const numbersSpecialRE = /([!@#$%¨&*()_'",.<>;:/?\\|]|\s{2,}|\d)/g;
  const isValid = nome.search(numbersSpecialRE) === -1 && nome.length > 2;

  return setInvalidClass(nameLabel, isValid);
}

function validateContato(contato) {
  /*+
   * Valida a informação inserida em contato-input.
   * Para ser válida, a informação deve contar apenas números.
   * Devido ao padrão brasileiro, o comprimento da string deve
   * ser de 10 ou 11 caracteres.
   */
  const contatoLabel = document.getElementById("contato-label");
  const lettersSpecialRE = /([!@#$%¨&*()_'",.<>;:/?\\|]|\s+|[a-zA-Z])/g;
  const isValid =
    contato.search(lettersSpecialRE) === -1 && contato.length >= 10;

  return setInvalidClass(contatoLabel, isValid);
}

function validateMatricula(matricula) {
  /*+
   * Valida a informação inserida em matricula-input.
   * Para ser válida, a informação deve serguir o padrão:
   * ra + 10 dígitos. Por exemplo: "ra9999999999". Um total
   * de 12 dígitos como comprimento total.
   */
  const matriculaLabel = document.getElementById("matricula-label");
  const matriculaSubstring = /ra\d{10}/g;
  const isValid =
    matricula.substring(matriculaSubstring) !== -1 && matricula.length === 12;

  return setInvalidClass(matriculaLabel, isValid);
}

function validateFinalidade(finalidade) {
  /*+
   * Valida a informação inserida em finalidade-input.
   * Para ser válida, a informação deve contar apenas letras.
   */
  const finalidadeLabel = document.getElementById("finalidade-label");
  const numbersSpecialRE = /([!@#$%¨&*()_'",.<>;:/?\\|]|\d)/g;
  const isValid = finalidade.search(numbersSpecialRE) === -1;

  return setInvalidClass(finalidadeLabel, isValid);
}

function checkForm(e) {
  /**
   * Valida as informçãoes submetidas no fomulário.
   */
  const form = e.target;
  const nome = form["nome-input"].value;
  const contato = form["contato-input"].value;
  const matricula = form["matricula-input"].value;
  const finalidade = form["finalidade-input"].value
    ? form["finalidade-input"].value
    : "Consulta";

  const isValid =
    validateNome(nome) &&
    validateContato(contato) &&
    validateMatricula(matricula) &&
    validateFinalidade(finalidade);

  if (isValid) {
    return true;
  } else {
    alert("Oops. Parece que há valores inválidos.");
    e.preventDefault();
  }
}

// nameInput.addEventListener("blur", validateNome, false);
// contatoInput.addEventListener("blur", validateContato, false);
// matriculaInput.addEventListener("blur", validateMatricula, false);
