import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, User } from "lucide-react";
import Orders from "./_components/order";
import PersonalInformation from "./_components/personal-information";

interface AccountPageProps {
  a?: null;
}

export default function AccountPage({}: AccountPageProps) {
  return (
    <section className="bg-background min-h-screen py-8 md:py-12">
      <div className="container mx-auto flex flex-col gap-12 px-6 md:gap-8">
        <h1 className="font-heading text-foreground text-3xl font-medium md:text-4xl">
          Minha conta
        </h1>
        <Tabs defaultValue="profile" className="w-full space-y-4">
          <TabsList className="flex w-full max-w-md">
            <TabsTrigger value="profile" className="flex w-full gap-2 text-base">
              <User className="size-4" />
              Perfil
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex w-full gap-2 text-base">
              <Package className="size-4" />
              Pedidos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <PersonalInformation />
          </TabsContent>

          <TabsContent value="orders">
            <Orders />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
