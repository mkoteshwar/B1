// Auto-generated by the postman-to-k6 converter
import { sleep } from"k6";
import "./libs/shim/core.js";

export let options = {
  maxRedirects: 4,
  duration: "1m",
  vus: 6,
  thresholds: {
    http_req_duration: ["p(90)<500"] // 95 percent of response times must be below 500ms
  }
};


const Request = Symbol.for("request");
postman[Symbol.for("initial")]({
  options
});

export default function() {
  postman[Request]({
    name: "https://gorest.co.in/public-api/users",
    id: "982b440c-6b22-4400-94b6-1dc143c2a124",
    method: "GET",
    address: "https://gorest.co.in/public-api/users",
    auth(config, Var) {
      config.headers.Authorization =
        "Bearer 290e6507ff790f15419eae0e336f2d4b03a634558d1f2580676b8b218f205a9a";
    }
  });

  postman[Request]({
    name: "https://gorest.co.in/public-api/users",
    id: "537ed25f-720e-48fe-97a7-bb9600ce6ba3",
    method: "POST",
    address: "https://gorest.co.in/public-api/users",
    data:
      '{"name":"Robert Redford", "gender":"Male", "email":"robert.redford@nextera.com", "status":"Active"}',
    headers: {
      "Content-Type": "application/json"
    },
    auth(config, Var) {
      config.headers.Authorization =
        "Bearer 290e6507ff790f15419eae0e336f2d4b03a634558d1f2580676b8b218f205a9a";
    }
  });

  postman[Request]({
    name: "https://gorest.co.in/public-api/users/123",
    id: "d2ca7741-d192-4b9e-b518-29005cd0f6de",
    method: "PUT",
    address: "https://gorest.co.in/public-api/users/10091",
    data:
      '{"name":"Bobby Redford", "email":"bobby.redford@nextera.com", "status":"Active"}',
    headers: {
      "Content-Type": "application/json"
    },
    auth(config, Var) {
      config.headers.Authorization =
        "Bearer 290e6507ff790f15419eae0e336f2d4b03a634558d1f2580676b8b218f205a9a";
    }
  });

  postman[Request]({
    name: "https://gorest.co.in/public-api/users/10091",
    id: "90dd8dd1-29b1-42ee-a0dc-22527a8c3f8e",
    method: "DELETE",
    address: "https://gorest.co.in/public-api/users/10091",
    auth(config, Var) {
      config.headers.Authorization =
        "Bearer 290e6507ff790f15419eae0e336f2d4b03a634558d1f2580676b8b218f205a9a";
    }
  });
}
