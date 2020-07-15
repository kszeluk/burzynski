import React from "react";

const getCookie = (cname) => {
  if (typeof window === "undefined") {
    return;
  }

  var name = cname + "=";
  var decodedCookie = decodeURIComponent(window.document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue) {
  if (typeof window === "undefined") {
    return;
  }

  window.document.cookie = cname + "=" + cvalue + ";";
}

export const CookiesBanner = () => {
  const [cookie, setLocalCookie] = React.useState(getCookie("accepted_cookies"));
  
  if (cookie === "1") {
    return null;
  }

  return (
    <div id="cookies" style={{ display: "block" }}>
        Strona korzysta z plików cookies w celu realizacji usług zgodnie z <a href="/polityka-cookies/">Polityką Plików Cookies</a>. Możesz określić warunki przechowywania lub dostępu do plików cookies w Twojej przeglądarce.
        <span
          role="button"
          id="zamknij"
          tabIndex="-1"
          onClick={() => {
            setCookie("accepted_cookies", "1");
            setLocalCookie("1");
          }}
          onKeyUp={(event) => {
            console.log(event.key)
          }}
        >
          akceptuj ✓
        </span>
    </div>
  )
}