const HOMEPAGE_URL = `equitablefuturescollective.com`;

const informalText = `index.js:141 Hey!%20Hitting%20you%20up%20to%20let%20you%20know%20that%20a%20bunch%20of%20people%20have%20stepped%20forward%20to%20share%20their%20racist%20experiences%20at%20YoungArts.%20The%20stories%20have%20been%20wild%20and%20YoungArts%20has%20said%20NOTHING%20that%20acknowledges%20their%20existence.%20Some%20YA%20community%20members%20are%20making%20space%20for%20collective%20healing%20and%20institutional%20change.%20If%20you%20want%20to%20peep%2C%20you%20can%20read%20their%20Vision%20for%20an%20Equitable%20Future%20at%20YoungArts%20here%20${HOMEPAGE_URL}%20They%E2%80%99re%20bringing%20restorative%20justice%20into%20an%20institutional%20space%20to%20push%20for%20a%20more%20human%20response%20from%20YoungArts.%20Check%20it%20out.%20If%20you%20wanna%20tear%20down%20white%20supremacy%2C%20this%20is%20a%20great%20place%20to%20start.`;

new ClipboardJS(".btn", {
  text: function () {
    return decodeURIComponent(informalText);
  },
});
