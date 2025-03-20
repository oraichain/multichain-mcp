import { Logger } from "winston";
import { Environment, Config } from "../config/config";
import { Server } from 'socket.io';
import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";

// Extend NodeJS global object
declare global {
  // eslint-disable-next-line no-var
  var logger: Logger; // Declare logger as a global variable
  var io: Server<any>
  var cwClient: CosmWasmClient;
}

export {}; // This is needed to prevent TypeScript from treating this as a global script
