next/font importe des polices de google fonts

on importe : 
import { Inter } from 'next/font/google'
export const inter = Inter([subsets:'latin']);

next/image s'occupe de l'import d'image
- gestion des erreurs
- redimensionnement automatique
- gestion des formats

import Image from "next/image"

<Image 
src="/mon-image.png"
widt={1000}
height={760}
alt="description"

next/clsx
s'occupe du conditionnement dans le css
