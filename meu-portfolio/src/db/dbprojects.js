import InventoryProjectImg from "../assets/inventoryControl.png";
import BillingManagement from "../assets/billingManagement.png";
import CubosPlayer from "../assets/cubosPlayer.png";
import BillingArt from "../assets/projectbillingart.png";
import BillingPhoto1 from "../assets/projectbillingphoto1.png";
import BillingPhoto2 from "../assets/projectbillingphoto2.png";
import BillingPhoto3 from "../assets/projectbillingphoto3.png";

const jsImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg";
const reactImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg";
const nodeImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg";
const nodemonImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodemon/nodemon-original.svg";
const axiosImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg";
const expressImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg";
const jsonImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg";
const prisma =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg";
const materialUiImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg";
const postgresImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg";
const knexImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/knexjs/knexjs-original.svg";
const herokuImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-original.svg";
const netlifyImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg";
const vercelImg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg";

const myProjectsInfos = [
  {
    id: 1,
    mainImg: InventoryProjectImg,
    photo1: BillingPhoto1,
    photo2: BillingPhoto2,
    photo3: BillingPhoto3,
    projectName: "LM Inventory Control",
    aboutProject:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem possimus minus sunt quae ipsum voluptas porro a id animi. Est eveniet repellendus, tempora numquam quae exercitationem ratione autem dignissimos eaque aliquam reprehenderit iure sed veniam alias officia. Aspernatur officia labore ipsa nobis maxime ex deleniti sunt praesentium, beatae quo nisi!",
    technologiesUsed: [
      jsImg,
      reactImg,
      nodeImg,
      nodemonImg,
      axiosImg,
      expressImg,
      jsonImg,
      prisma,
      postgresImg,
      herokuImg,
      netlifyImg,
    ],
  },
  {
    id: 2,
    mainImg: BillingManagement,
    art: BillingArt,
    photo1: BillingPhoto1,
    photo2: BillingPhoto2,
    photo3: BillingPhoto3,
    projectName: "Billing Management",
    aboutProject:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem possimus minus sunt quae ipsum voluptas porro a id animi. Est eveniet repellendus, tempora numquam quae exercitationem ratione autem dignissimos eaque aliquam reprehenderit iure sed veniam alias officia. Aspernatur officia labore ipsa nobis maxime ex deleniti sunt praesentium, beatae quo nisi!",
    technologiesUsed: [
      jsImg,
      reactImg,
      nodeImg,
      nodemonImg,
      axiosImg,
      materialUiImg,
      expressImg,
      jsonImg,
      postgresImg,
      knexImg,
      vercelImg,
    ],
  },
  {
    id: 3,
    mainImg: CubosPlayer,
    photo1: BillingPhoto1,
    photo2: BillingPhoto2,
    photo3: BillingPhoto3,
    projectName: "Cubos Player",
    aboutProject:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem possimus minus sunt quae ipsum voluptas porro a id animi. Est eveniet repellendus, tempora numquam quae exercitationem ratione autem dignissimos eaque aliquam reprehenderit iure sed veniam alias officia. Aspernatur officia labore ipsa nobis maxime ex deleniti sunt praesentium, beatae quo nisi!",
    technologiesUsed: [jsImg, reactImg],
  },
];

export default myProjectsInfos;
