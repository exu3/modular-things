import { osap } from "../osapjs/osap";
import Serializers from "../osapjs/utils/serializers"
const readUint16 = Serializers.readUint16;

export default function(name) {

  return {
    readAccGyro: async () => {
      try {

        const data = await osap.send(name, "readAccGyro");

        const x = readUint16(data, 0);
        const y = readUint16(data, 2);
        const z = readUint16(data, 4);
        const xTheta = readUint16(data, 6);
        const yTheta = readUint16(data, 8);
        const zTheta = readUint16(data, 10);

        return [x, y, z, xTheta, yTheta, zTheta];
      } catch (err) {
        console.error(err);
      }
    },
    updateName: (newName) => {
      name = newName;
    },
    api: [
      {
        name: "readAccGyro",
        args: [],
        return: "[x, y, z, xTheta, yTheta, zTheta]"
      }
    ]
  }
}