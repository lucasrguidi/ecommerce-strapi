"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Edit2 } from "lucide-react";
import { useState } from "react";

const userData = {
  name: "Emma Wilson",
  email: "emma.wilson@example.com",
  phone: "+1 (555) 123-4567",
  addresses: [
    {
      id: "addr1",
      type: "Home",
      street: "123 Park Avenue",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "United States",
      isDefault: true,
    },
  ],
  paymentMethods: [
    {
      id: "pm1",
      type: "Credit Card",
      lastFour: "4242",
      brand: "Visa",
      expiry: "06/25",
      isDefault: true,
    },
  ],
};

export default function PersonalInformation() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="bg-popover flex flex-col gap-8 rounded-md p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-foreground text-xl font-medium">Informações pessoais</h2>
        <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? (
            "Cancelar"
          ) : (
            <>
              <Edit2 className="mr-2 h-4 w-4" />
              Editar
            </>
          )}
        </Button>
      </div>

      {isEditing ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input id="name" defaultValue={userData.name} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" defaultValue={userData.email} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input id="phone" defaultValue={userData.phone} />
            </div>
            <Button className="w-fit" type="submit">
              Salvar alterações
            </Button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col gap-4">
          <div>
            <p className="mb-1 text-sm text-gray-500">Nome completo</p>
            <p>{userData.name}</p>
          </div>
          <div>
            <p className="mb-1 text-sm text-gray-500">E-mail</p>
            <p>{userData.email}</p>
          </div>
          <div>
            <p className="mb-1 text-sm text-gray-500">Telefone</p>
            <p>{userData.phone}</p>
          </div>
        </div>
      )}
    </div>
  );
}
