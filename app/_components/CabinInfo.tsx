import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import { CabinAPIData } from "~/app/_blueprints/cabin"
import TextExpander from "~/app/_components/TextExpander"
import noImage from "~/public/no-image.jpg"

function CabinInfo({cabin}: {cabin: CabinAPIData}) {

  const {max_capacity, image, name, description} = cabin

  return (
        <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
        <div className="relative scale-[1.15] -translate-x-3">
          <Image
            src={image || noImage}
            sizes="100dvh"
            fill
            className="object-cover"
            alt={`Cabin ${name}`}
            priority
          />
        </div>

        <div>
          <h3
            className="text-accent-100 font-black text-7xl mb-5
          bg-primary-950 pt-6 pb-1"
          >
            Cabin {name}
          </h3>


          <p className="text-lg text-primary-300 mb-10">
            {description && <TextExpander description={description}/>}
          </p>

          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                For up to <span className="font-bold">{max_capacity}</span>{" "}
                guests
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Located in the heart of{" "}
                <span className="font-bold">Sognefjord</span> (Norway)
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <EyeSlashIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default CabinInfo