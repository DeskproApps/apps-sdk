import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { Member, Members } from "./Member";

export default {
  title: "Core/Member",
};

const members = [
  { name: "Ezra Kris", avatarUrl: "https://deskpro-product-master.ci.next.deskprodemo.com/file.php/75AAAAAAAAAAAAAAA0/borat.jpg" },
  { name: "Estel Corwin", avatarUrl: "https://deskpro-product-master.ci.next.deskprodemo.com/file.php/65AAAAAAAAAAAAAAA0/150-2.jpg" },
  { name: "Janelle Rice" },
  { name: "Giovanna King", avatarUrl: "https://deskpro-product-master.ci.next.deskprodemo.com/file.php/69AAAAAAAAAAAAAAA0/150-6.jpg" },
  { name: "Asia Oberbrunner", avatarUrl: "https://deskpro-product-master.ci.next.deskprodemo.com/file.php/78AAAAAAAAAAAAAAA0/mathieu_kassovitz1.jpg" },
  { name: "Tristian Hoppe", avatarUrl: "https://deskpro-product-master.ci.next.deskprodemo.com/file.php/64AAAAAAAAAAAAAAA0/150-11.jpg" },
  { name: "Isidro Fahey", avatarUrl: "https://deskpro-product-master.ci.next.deskprodemo.com/file.php/72AAAAAAAAAAAAAAA0/150-9.jpg" },
];

export const Default = () => (
  <Member {...members[0]} />
);

export const WithoutAvatar = () => (
  <Member name="William Shakespeare" />
);

export const WithCustomIcon = () => (
  <Member name="" icon={faCrown} />
);

export const ListOfMembers = () => (
  <Members members={members} />
);
