import mongoose from "mongoose";

const PeripheralDeviceSchema = new mongoose.Schema({
  uid: { type: Number, required: true, index: true },
  vendor: { type: String, required: true },
  dateCreated: { type: Date, default: Date.now },
  status: { type: String, enum: ["online", "offline"], default: "offline" },
  gateway: { type: mongoose.Schema.Types.ObjectId, ref: "Gateway" },
});

const PeripheralDevice = mongoose.model(
  "PeripheralDevice",
  PeripheralDeviceSchema
);

export default PeripheralDevice;

export { PeripheralDeviceSchema };

// •	a UID (number),
// •	vendor (string),
// •	date created,
// •	status - online/offline
