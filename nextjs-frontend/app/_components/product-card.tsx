import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Heart, ShoppingCart } from 'lucide-react';
import Product from '../types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const imgUrl = `${process.env.API_IMAGE_URL}${product.image[0].url}`;

  return (
    <Card className="flex flex-col gap-4">
      <AspectRatio ratio={4 / 3}>
        <Image
          src={imgUrl}
          alt={product.name}
          fill
          className="h-full w-full rounded-xl rounded-b-none object-cover"
          priority
        />
      </AspectRatio>

      <CardContent className="flex flex-col gap-2">
        <h3 className="text-foreground text-base font-extrabold md:text-lg">{product.name}</h3>
        <p className="text-secondary-foreground text-xs md:text-sm">{product.description}</p>
        <h4 className="text-foreground text-sm font-bold md:text-base">R${product.price}</h4>
        <Button>
          <ShoppingCart />
          Adicionar ao carrinho
        </Button>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant={'outline'}>
          <Heart />
        </Button>
        <Button variant={'link'}>Ver detalhes</Button>
      </CardFooter>
    </Card>
  );
}
