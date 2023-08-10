import Image from "next/image";
import Link from "next/link";

const CartIcon = () => {
  return (
    <Link href="/cart" className="flex items-center gap-4">
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <Image src="/cart.png" alt="" fill />
      </div>
      <span>Carrinho (3)</span>
    </Link>
  );
};

export default CartIcon;
