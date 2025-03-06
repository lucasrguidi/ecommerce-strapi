import { currencyFormatter } from "@/app/utils/currency-formatter";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import Image from "next/image";

const orderHistory = [
  {
    id: "ORD10042",
    date: "April 15, 2023",
    total: 1285,
    status: "Delivered",
    items: [
      {
        id: "PROD123",
        name: "Gold Statement Necklace",
        price: 895,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      },
      {
        id: "PROD456",
        name: "Leather Wallet",
        price: 390,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1601592996763-f04c118b4dc7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      },
    ],
  },
  {
    id: "ORD10036",
    date: "February 22, 2023",
    total: 750,
    status: "Delivered",
    items: [
      {
        id: "PROD789",
        name: "Silk Scarf",
        price: 350,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1583431791509-43ccf6b98f30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      },
      {
        id: "PROD101",
        name: "Leather Belt",
        price: 400,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      },
    ],
  },
];

export default function Orders() {
  return (
    <div>
      <div className="bg-popover flex flex-col gap-8 rounded-md p-4 shadow-sm">
        <h2 className="font-heading text-foreground text-xl font-medium">Histórico de pedidos</h2>

        {orderHistory.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-4 py-6 text-center">
            <AlertCircle className="text-muted-foreground mx-auto size-12" />
            <h3 className="text-foreground text-lg font-medium">Nenhum pedido encontrado</h3>
            <p className="text-muted-foreground">
              Parece que você ainda não fez nenhum pedido conosco.
            </p>
            <Button className="mx-auto w-fit">Explore Nossos Produtos</Button>
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            {orderHistory.map((order) => (
              <div key={order.id} className="border-border overflow-hidden rounded-md border">
                <div className="bg-background flex flex-wrap items-center justify-between p-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">Order #{order.id}</h3>
                      <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800">
                        {order.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">{order.date}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="font-medium">{currencyFormatter(order.total)}</p>
                    <Button variant="outline" size="sm">
                      Ver detalhes
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <div className="bg-background size-20 flex-shrink-0 overflow-hidden rounded-md">
                          <Image
                            src={item.image}
                            alt={item.name}
                            height={1000}
                            width={1000}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-muted-foreground text-sm">
                            Quantidade: {item.quantity}
                          </p>
                          <p className="text-primary font-medium">
                            {currencyFormatter(item.price)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
