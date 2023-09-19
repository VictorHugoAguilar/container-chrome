### General Notes:
```
window.addEventListener("message", ({origin, data}) => {
  console.log("From Coexistence: ", data);
  // output.value = JSON.stringify(data);
  // output.value = `Current event from Cells App: ${data.event} | ${data.detail.message}`;

  switch (data.event) {
  //   case '__bridge-ready':
  //     output.value = 'The Cells App is fully loaded.'
  //     break;
    case 'DO_REDIRECT_SENDA':
      resizeIframe('small');
      window.location.href = 'https://int-bbva-cells-files.s3.amazonaws.com/cells/apps/MX_MLCJ_APP-ID-446289_DSG/SENDA-MX/deploy/cellsapp/test/novulcanize/index.html#!/bbva-btge-geolocalization-solution';
      // window.location.href = 'http://localhost:8004/index.html#!/bbva-btge-geolocalization-solution';
      // window.location.hre = 'http://localhost:8004/index.html#!/bbva-btge-accounts-solution';
      break;
  //   case 'SIGNATURE_CANCELLED':
  //   case 'INVALID_TOKEN':
  //   case 'SESSION_EXPIRED':
  //   case 'USER_NOT_EXIST':
  //   case 'INVALID_PASSWORD':
  //   case 'USER_BLOCKED':
  //   case 'MAX_RETRIES_REACHED':
  //   case 'ONE_TIME_PASSWORD':
  //   case 'LOGIN_ERROR':
  //   case 'DO_LOGIN_LEGACY':
  //   case 'UNKNOWN_LOGIN_ERROR':
  //   case 'INVALID_TOKEN':
  //     output.value = `Event: ${data.eventName} \nCode: ${data.eventDetail.code} \nMessage: ${data.eventDetail.message}`;
  //     resizeIframe('small');
  //     break;
  //   case 'RESIZE_100':
  //     resizeIframe('full');
  //     break;
  //   case 'RESIZE_0':
  //     resizeIframe('small');
  //     break;
  //   default:
  //     output.value = 'UNKNOWN Event from Cells App.'
  //     console.log('Data from Cells App: ', data);
  //     break;
  }

});

```


00671355
senda270
zaq1xsw2

https://bncmxt.ccr.igrupobbva/local_pibee/login_pibee.html


00671339
OPERTER1
1QZ3EC6Y

https://int-bbva-cells-files.s3.amazonaws.com/cells/apps/MX_MLCJ_APP-ID-446289_DSG/bbva-senda-eweb-mx-coexistence-login/deploy/cellsapp/test/novulcanize/index.html
