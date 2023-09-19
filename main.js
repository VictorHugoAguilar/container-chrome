const form = document.forms["login-form"];
const button = document.querySelector("#button");
const output = document.querySelector("#output");
const iframe = document.querySelector("#microfrontend");
const iframeOrigin = "https://qa-bbva-cells-files.s3.amazonaws.com";

const USERS = [
  {
    id: 0,
    referencia: "00671363",
    user: "FERWICK",
    password: "xsw2zaq1",
    client_id: "XC000103",
    operation_key: "Q1W2E3R4",
    description:
      "This a dummy user. The OTP is always 11111111 (Cambio de contraseña)",
  },
  {
    id: 1,
    referencia: "00671363",
    user: "FERTACO",
    password: "22E809FA",
    client_id: "XC000103",
    operation_key: "Q1W2E3R4",
    description: "This a dummy user. The OTP is always 11111111",
  },
  {
    id: 2,
    referencia: "00671363",
    user: "FERPRIME",
    password: "A1b2C3d4",
    client_id: "XC000103",
    operation_key: "Q1W2E3R4",
    description: "This a dummy user. The OTP is always 11111111",
  },
];

// Define the index of the user you want to set as collection variables
const userIndexToUse = 0;

// Check if the given index exists in the USERS array
if (USERS.length <= userIndexToUse) {
  console.error(
    `User with index ${userIndexToUse} not found in the USERS array.`
  );
  // Return or throw an error here if needed
}

// Destructure the user item from the USERS array based on its index
const { user, password, referencia } = USERS[userIndexToUse];

form.elements["user"].value = user;
form.elements["referencia"].value = referencia;
form.elements["password"].value = password;

/**
 * Set selected user credential to be part of the message data.
 */
const messageData = {
  user: form.elements["user"].value,
  code: form.elements["referencia"].value,
  password: form.elements["password"].value,
  message: "Login legacy: A meesage send from the login legacy page.",
};

/**
 * Send a custom message to an iframe.
 *
 * @param {Object} data Postmessage payload
 */
function _dispatchPostMessageToIframe(data) {
  iframe.contentWindow.postMessage(
    data,
    iframeOrigin !== "*" ? iframeOrigin : ""
  );
}

/**
 * Resizes the iframe based on the specified size.
 * @param {string} size - The desired size of the iframe ('full' or 'small').
 */
function resizeIframe(size = "") {
  const availableSizes = ["full", "small"];

  // Remove all possible sizes
  iframe.classList.remove(...availableSizes);

  // Add the desired size if valid
  if (availableSizes.includes(size)) {
    iframe.classList.add(size);
  }
}

/**
 * Handle button click by sending a postmessage to the iframe.
 * @param {Event} e - The click event.
 * @returns {Promise<void>} A promise that resolves when the postMessage operation is complete.
 */
button.addEventListener("click", async (e) => {
  e.preventDefault();
  await _dispatchPostMessageToIframe(messageData);
  resizeIframe("full");
});

/**
 * Handle the communication messages from the iframe.
 * feature/remove-dahsboard-solution
 */
window.addEventListener("message", ({ origin, data }) => {
  console.log("From coexistence: ", data);

  switch (data.event) {
    case "DO_REDIRECT_SENDA":
      window.location.href =
        "https://bbva-cells-files.s3.amazonaws.com/cells/apps/mx_mlcj_app-id-446289_dsg/senda-mx/feature/login_netcash_integration_270/cellsapp/test/novulcanize/index.html#!/bbva-btge-dashboard-solution";
      break;

    case "RESIZE_0":
      resizeIframe("small");
      break;
  }
});
