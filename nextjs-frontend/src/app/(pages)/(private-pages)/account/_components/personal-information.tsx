import UserData from "@/app/types/userdata";

interface PersonalInformationProps {
  user: UserData;
}

export default function PersonalInformation({ user }: PersonalInformationProps) {
  return (
    <div className="bg-popover flex flex-col gap-8 rounded-md p-4 shadow-sm">
      <h2 className="font-heading text-foreground text-xl font-medium">Informações pessoais</h2>

      <div className="flex flex-col gap-4">
        <div>
          <p className="mb-1 text-sm text-gray-500">Nome completo</p>
          <p>{user.full_name}</p>
        </div>
        <div>
          <p className="mb-1 text-sm text-gray-500">Usuário</p>
          <p>{user.username}</p>
        </div>
        <div>
          <p className="mb-1 text-sm text-gray-500">E-mail</p>
          <p>{user.email}</p>
        </div>
        <div>
          <p className="mb-1 text-sm text-gray-500">Telefone</p>
          <p>{user.phone}</p>
        </div>
      </div>
    </div>
  );
}
