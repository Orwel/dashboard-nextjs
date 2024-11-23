import { PayUCheckout } from '@/app/components/PayUCheckout';

export default async function PurchasePage({ params }: { params: { id: string } }) {
  const course = await prisma.course.findUnique({
    where: { id: params.id }
  });

  return (
    <div>
      <h1>Comprar {course.title}</h1>
      <p>Precio: ${course.price}</p>
      
      <PayUCheckout 
        amount={course.price}
        description={`Compra del curso: ${course.title}`}
      />
    </div>
  );
} 