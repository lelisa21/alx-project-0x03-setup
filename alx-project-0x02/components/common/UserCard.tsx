import { UserProps } from "@/interfaces";
import { Building, Mail, MapPin, Phone, User } from "lucide-react";

const UserCard: React.FC<UserProps> = ({name , email , phone , address , company }) => {


  return (
    <div>
      <div className="flex flex-col p-4 bg-amber-300/40 mx-4 my-8 rounded">
        <h2 className="flex p-1 font-bold">
          <User className="mx-2 size-5" /> {name}
        </h2>
        <h3 className="flex p-1">
          <Mail className="mx-2 size-5" /> {email}
        </h3>
        <h3 className="flex p-1">
          <Phone className="mx-2 size-5" /> {phone}
        </h3>
        <p className="flex p-1">
          <MapPin className="mx-2 size-5" /> {address.city} {address.street}{" "}
          {address.suite} {address.zipcode}
        </p>
        <h3 className="flex p-1">
          <Building className="mx-2 size-5" /> {company.name}
        </h3>
      </div>
    </div>
  );
};

export default UserCard;
