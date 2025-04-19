import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CourseCardProps {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  reviews: number;
  price: number;
  salePrice: number;
  image: string;
  tags: string[];
}

export function CourseCard({
  id,
  title,
  instructor,
  rating,
  reviews,
  price,
  salePrice,
  image,
  tags,
}: CourseCardProps) {
  return (
    <Link href={`/course/${id}`}>
      <Card className="group border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300 rounded-xl">
        <div className="relative h-40">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-bold text-base line-clamp-2 mb-1 group-hover:text-primary">
            {title}
          </h3>
          <p className="text-sm text-gray-500 mb-1 group-hover:text-gray-900">{instructor}</p>
          <div className="flex items-center mb-1">
            <span className="text-amber-700 font-bold mr-1">{rating}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(rating)
                      ? "fill-amber-500 text-amber-500"
                      : "fill-gray-300 text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">
              ({reviews.toLocaleString()})
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="font-bold">${salePrice}</span>{" "}
              <span className="text-gray-500 line-through text-sm">
                ${price}
              </span>
            </div>
            {tags.includes("Bestseller") && (
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5">
                Bestseller
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default CourseCard;
