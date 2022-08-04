import { expect } from "chai";
import {
  postGateway,
  getAllGateways,
  getGateway,
  addOrRemoveDeviceFromGateway,
} from "../src/services/gateway.services.js";

describe("Gateway Unit Tests", function () {
  describe("Gateway Service Unit Tests", function () {
    it("should verify ipv4", function (done) {
      const name = "Ashkay";
      const ipv4 = "127.00.1";
      const devices = [{ uid: 2, vendor: "ABCD" }];

      postGateway(name, ipv4, devices)
        .then((res, body) => {
          expect(res.error).to.equal("invalid ipv4 address");
          expect(res.message).to.equal("");
          done();
        })
        .catch(done);
    });

    it("should not allow more than 10 devices", function (done) {
      const name = "Ashkay";
      const ipv4 = "127.0.0.1";
      const devices = [
        { uid: 1, vendor: "ABCD" },
        { uid: 2, vendor: "ABCD" },
        { uid: 3, vendor: "ABCD" },
        { uid: 4, vendor: "ABCD" },
        { uid: 5, vendor: "ABCD" },
        { uid: 6, vendor: "ABCD" },
        { uid: 7, vendor: "ABCD" },
        { uid: 8, vendor: "ABCD" },
        { uid: 9, vendor: "ABCD" },
        { uid: 10, vendor: "ABCD" },
        { uid: 11, vendor: "ABCD" },
      ];

      postGateway(name, ipv4, devices)
        .then((res, body) => {
          expect(res.error).to.equal(
            "number of devices cannot be greater than 10"
          );
          expect(res.message).to.equal("");
          done();
        })
        .catch(done);
    });
    it("should be able to add or remove devices from Gateway", function () {});
  });
});
